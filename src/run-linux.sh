#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_ASAR="$ROOT_DIR/app/resources/app.asar"
RUNTIME_DIR="$ROOT_DIR/runtime"
PROFILE_DIR="${SHADOWHINT_PROFILE_DIR:-$RUNTIME_DIR/linux-electron-profile}"
LOG_FILE="$RUNTIME_DIR/linux-electron-live.log"
PID_FILE="$RUNTIME_DIR/linux-electron-live.pid"
ELECTRON_VERSION="${ELECTRON_VERSION:-31.7.7}"
ASAR_TOOL="$ROOT_DIR/asar/node_modules/.bin/asar"
LOCAL_ICONS_DIR="$ROOT_DIR/asar/assets/icons"
LOCAL_ICON_PATH="$LOCAL_ICONS_DIR/256x256.png"
SYSTEM_ICON_PATH="/usr/share/icons/hicolor/256x256/apps/shadowhint.png"
CHROME_DESKTOP_FILE="shadowhint-runtime.desktop"
CHROME_DESKTOP_PATH="$HOME/.local/share/applications/$CHROME_DESKTOP_FILE"
LOCAL_THEME_DIR="$HOME/.local/share/icons/hicolor"
RUNTIME_WM_CLASS="${SHADOWHINT_WM_CLASS:-ShadowHint}"
RUNTIME_APP_NAME="${SHADOWHINT_APP_NAME:-shadowhint}"

if [[ ! -f "$APP_ASAR" ]]; then
	echo "app.asar not found: $APP_ASAR" >&2
	exit 1
fi

mkdir -p "$RUNTIME_DIR" "$PROFILE_DIR"

find_runtime_pids() {
	pgrep -f -- "$APP_ASAR" 2>/dev/null || true
}

resolve_electron_binary() {
	local electron_bin
	electron_bin="$(npx --yes -p "electron@$ELECTRON_VERSION" bash -lc 'command -v electron' 2>/dev/null | tail -n 1 || true)"
	if [[ -z "${electron_bin:-}" ]] || [[ ! -x "$electron_bin" ]]; then
		echo "Failed to resolve electron@$ELECTRON_VERSION binary via npx." >&2
		return 1
	fi
	printf '%s\n' "$electron_bin"
}

sync_local_theme_icons() {
	if [[ ! -d "$LOCAL_ICONS_DIR" ]]; then
		echo "Local icons directory not found: $LOCAL_ICONS_DIR (skip theme sync)"
		return
	fi

	local has_any=0
	shopt -s nullglob
	for src_icon in "$LOCAL_ICONS_DIR"/*x*.png; do
		has_any=1
		local size_name
		size_name="$(basename "${src_icon%.png}")"
		local target_dir="$LOCAL_THEME_DIR/$size_name/apps"
		mkdir -p "$target_dir"
		cp -f "$src_icon" "$target_dir/shadowhint.png"
	done
	shopt -u nullglob

	if [[ "$has_any" -eq 0 ]]; then
		echo "No icon sizes found in: $LOCAL_ICONS_DIR (skip theme sync)"
		return
	fi

	if command -v update-desktop-database >/dev/null 2>&1; then
		update-desktop-database "$HOME/.local/share/applications" >/dev/null 2>&1 || true
	fi
	if command -v kbuildsycoca5 >/dev/null 2>&1; then
		kbuildsycoca5 --noincremental >/dev/null 2>&1 || true
	fi
}

sync_desktop_wmclass() {
	local desktop_file="$1"
	[[ -f "$desktop_file" ]] || return

	if grep -q '^StartupWMClass=' "$desktop_file"; then
		sed -i "s/^StartupWMClass=.*/StartupWMClass=$RUNTIME_WM_CLASS/" "$desktop_file"
	else
		printf 'StartupWMClass=%s\n' "$RUNTIME_WM_CLASS" >> "$desktop_file"
	fi

	if grep -q '^X-GNOME-WMClass=' "$desktop_file"; then
		sed -i "s/^X-GNOME-WMClass=.*/X-GNOME-WMClass=$RUNTIME_WM_CLASS/" "$desktop_file"
	else
		printf 'X-GNOME-WMClass=%s\n' "$RUNTIME_WM_CLASS" >> "$desktop_file"
	fi

	if grep -q '^X-KDE-StartupWMClass=' "$desktop_file"; then
		sed -i "s/^X-KDE-StartupWMClass=.*/X-KDE-StartupWMClass=$RUNTIME_WM_CLASS/" "$desktop_file"
	else
		printf 'X-KDE-StartupWMClass=%s\n' "$RUNTIME_WM_CLASS" >> "$desktop_file"
	fi
}

refresh_desktop_caches() {
	if command -v update-desktop-database >/dev/null 2>&1; then
		update-desktop-database "$HOME/.local/share/applications" >/dev/null 2>&1 || true
	fi
	if command -v kbuildsycoca5 >/dev/null 2>&1; then
		kbuildsycoca5 --noincremental >/dev/null 2>&1 || true
	fi
}

ensure_runtime_desktop_entry() {
	mkdir -p "$(dirname "$CHROME_DESKTOP_PATH")"
	cat > "$CHROME_DESKTOP_PATH" <<EOF
[Desktop Entry]
Type=Application
Name=ShadowHint
Exec=$ROOT_DIR/run-linux.sh
Terminal=false
Icon=shadowhint
StartupWMClass=$RUNTIME_WM_CLASS
X-GNOME-WMClass=$RUNTIME_WM_CLASS
X-KDE-StartupWMClass=$RUNTIME_WM_CLASS
Categories=Utility;
EOF

	sync_desktop_wmclass "$CHROME_DESKTOP_PATH"
	sync_desktop_wmclass "$HOME/.local/share/applications/shadowhint.desktop"
	refresh_desktop_caches
}

apply_runtime_icon_hotfix() {
	if [[ ! -x "$ASAR_TOOL" ]]; then
		echo "ASAR CLI not found: $ASAR_TOOL (skip icon hotfix)"
		return
	fi
	if [[ ! -f "$LOCAL_ICON_PATH" ]]; then
		echo "Local icon not found: $LOCAL_ICON_PATH (skip icon hotfix)"
		return
	fi

	local tmp_dir
	tmp_dir="$(mktemp -d "$RUNTIME_DIR/asar-hotfix-XXXXXX")"
	local app_dir="$tmp_dir/app"
	local main_bundle="$app_dir/.webpack/main/index.js"
	local package_json="$app_dir/package.json"
	local marker="shadowhint-linux-runtime-icon-hotfix-v1"
	local hook_marker="shadowhint-linux-runtime-seticon-hook-v1"
	local need_repack=0

	if ! "$ASAR_TOOL" extract "$APP_ASAR" "$app_dir" >/dev/null 2>&1; then
		echo "Failed to extract ASAR for runtime icon hotfix."
		rm -rf "$tmp_dir"
		return
	fi

	if [[ -f "$main_bundle" ]]; then
		if node - "$main_bundle" "$SYSTEM_ICON_PATH" "$LOCAL_ICON_PATH" "$marker" "$hook_marker" <<'NODE'
const fs = require('fs');
const bundlePath = process.argv[2];
const systemIcon = process.argv[3];
const localIcon = process.argv[4];
const marker = process.argv[5];
const hookMarker = process.argv[6];
const needle = 'backgroundColor:"#00000000",width:V,height:j';
const patch = `backgroundColor:"#00000000",icon:"linux"===process.platform?(require("fs").existsSync("${localIcon}")?"${localIcon}":(require("fs").existsSync("${systemIcon}")?"${systemIcon}":void 0)):void 0,width:V,height:j,__shadowhintRuntimeIconHotfix:"${marker}"`;
const hookPatch = `;(()=>{try{const fs=require("fs"),{app}=require("electron");if("linux"===process.platform&&app&&!global.__shadowhintRuntimeSetIconHook){global.__shadowhintRuntimeSetIconHook=true;const c=["${localIcon}","${systemIcon}"],p=c.find(v=>{try{return fs.existsSync(v)}catch{return false}});p&&app.on("browser-window-created",(_e,w)=>{try{w.setIcon(p)}catch{}})}}catch{}})();/*${hookMarker}*/\n`;
const oldPriorityInline = `icon:"linux"===process.platform?(require("fs").existsSync("${systemIcon}")?"${systemIcon}":(require("fs").existsSync("${localIcon}")?"${localIcon}":void 0)):void 0`;
const newPriorityInline = `icon:"linux"===process.platform?(require("fs").existsSync("${localIcon}")?"${localIcon}":(require("fs").existsSync("${systemIcon}")?"${systemIcon}":void 0)):void 0`;
const oldHookOrder = `const c=["${systemIcon}","${localIcon}"]`;
const newHookOrder = `const c=["${localIcon}","${systemIcon}"]`;

let source = fs.readFileSync(bundlePath, 'utf8');
let changed = false;

if (source.includes(oldPriorityInline)) {
	source = source.split(oldPriorityInline).join(newPriorityInline);
	changed = true;
}

if (source.includes(oldHookOrder)) {
	source = source.split(oldHookOrder).join(newHookOrder);
	changed = true;
}

if (!source.includes(hookMarker)) {
	source = hookPatch + source;
	changed = true;
}

if (!source.includes(marker)) {
	if (!source.includes(needle)) {
		console.error('Runtime icon hotfix skipped: marker not found in main bundle.');
		process.exit(changed ? 10 : 2);
	}
	source = source.replace(needle, patch);
	changed = true;
}

if (!changed) {
	process.exit(0);
}
fs.writeFileSync(bundlePath, source);
process.exit(10);
NODE
		then
			:
		else
			rc="$?"
			if [[ "$rc" -eq 10 ]]; then
				need_repack=1
			else
				echo "Runtime icon hotfix skipped: main bundle marker was not found."
			fi
		fi
	fi

	if [[ -f "$package_json" ]]; then
		if node - "$package_json" "$CHROME_DESKTOP_FILE" <<'NODE'
const fs = require('fs');
const pkgPath = process.argv[2];
const desktopName = process.argv[3];
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
let changed = false;

if (pkg.desktopName !== desktopName) {
	pkg.desktopName = desktopName;
	changed = true;
}
if (pkg.productName !== 'ShadowHint') {
	pkg.productName = 'ShadowHint';
	changed = true;
}
if (pkg.name !== 'shadowhint') {
	pkg.name = 'shadowhint';
	changed = true;
}

if (!changed) {
	process.exit(0);
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
process.exit(10);
NODE
		then
			:
		else
			rc="$?"
			if [[ "$rc" -eq 10 ]]; then
				echo "Applied runtime desktopName hotfix in package.json ($CHROME_DESKTOP_FILE)."
				need_repack=1
			else
				echo "Runtime desktopName hotfix skipped: failed to patch package.json."
			fi
		fi
	fi

	if [[ "$need_repack" -eq 1 ]]; then
		if "$ASAR_TOOL" pack "$app_dir" "$APP_ASAR" >/dev/null 2>&1; then
			echo "Applied runtime Linux icon hotfix to app.asar."
		else
			echo "Failed to repack ASAR after runtime icon hotfix."
		fi
	fi

	rm -rf "$tmp_dir"
}

mapfile -t existing_pids < <(find_runtime_pids)
if [[ "${#existing_pids[@]}" -gt 0 ]]; then
	echo "ShadowHint is already running: PIDs ${existing_pids[*]}"
	echo "${existing_pids[0]}" > "$PID_FILE" || true
	echo "Log: $LOG_FILE"
	exit 0
fi

rm -f "$PID_FILE"

sync_local_theme_icons
ensure_runtime_desktop_entry
apply_runtime_icon_hotfix
ELECTRON_BIN="$(resolve_electron_binary)"

echo "Starting ShadowHint via Linux Electron $ELECTRON_VERSION..."
echo "Electron: $ELECTRON_BIN"
echo "Profile: $PROFILE_DIR"
echo "Log: $LOG_FILE"

setsid env -u ELECTRON_RUN_AS_NODE \
	XDG_CONFIG_HOME="$PROFILE_DIR" \
	CHROME_DESKTOP="$CHROME_DESKTOP_FILE" \
	CHROME_DESKTOP_PATH="$CHROME_DESKTOP_PATH" \
	BAMF_DESKTOP_FILE_HINT="$CHROME_DESKTOP_PATH" \
	"$ELECTRON_BIN" \
	"--class=$RUNTIME_WM_CLASS" \
	"--name=$RUNTIME_APP_NAME" \
	"$APP_ASAR" \
	> "$LOG_FILE" 2>&1 < /dev/null &

pid="$!"
echo "$pid" > "$PID_FILE"

sleep 2
if kill -0 "$pid" 2>/dev/null; then
	# Some runtime code can rewrite desktop files during startup.
	# Re-apply WM_CLASS mapping after process bootstrap.
	sync_desktop_wmclass "$CHROME_DESKTOP_PATH"
	sync_desktop_wmclass "$HOME/.local/share/applications/shadowhint.desktop"
	refresh_desktop_caches
	echo "Started: PID $pid"
else
	echo "Process exited during startup. Last log lines:" >&2
	tail -n 80 "$LOG_FILE" >&2
	exit 1
fi
