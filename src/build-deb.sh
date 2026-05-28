#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ASAR_DIR="$ROOT_DIR/src/asar"
ASAR_DIST_DIR="$ASAR_DIR/dist"
ASAR_BUILD_DIR="$ASAR_DIR/build"

usage() {
	cat <<'EOF'
Usage:
  ./src/build-deb.sh [x64|arm64]

Examples:
  ./src/build-deb.sh          # auto-detect arch
  ./src/build-deb.sh arm64
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
	usage
	exit 0
fi

detect_default_arch() {
	local dpkg_arch
	dpkg_arch="$(dpkg --print-architecture 2>/dev/null || true)"
	case "$dpkg_arch" in
		amd64) echo "x64" ;;
		arm64) echo "arm64" ;;
		*) echo "x64" ;;
	esac
}

ARCH="${1:-$(detect_default_arch)}"
case "$ARCH" in
	x64|arm64) ;;
	*)
		echo "Unsupported architecture: $ARCH" >&2
		usage >&2
		exit 1
		;;
esac

if [[ "$(uname -s)" != "Linux" ]]; then
	echo "This script must be run on Linux for .deb builds." >&2
	exit 1
fi

for cmd in node npm; do
	if ! command -v "$cmd" >/dev/null 2>&1; then
		echo "Required command not found: $cmd" >&2
		exit 1
	fi
done

if [[ ! -f "$ASAR_DIR/package.json" ]]; then
	echo "package.json not found: $ASAR_DIR/package.json" >&2
	exit 1
fi

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
NPM_CLI_PATH="$(readlink -f "$(command -v npm)")"
NPM_CMD=(npm)

if (( NODE_MAJOR < 20 )); then
	if ! command -v npx >/dev/null 2>&1; then
		echo "Node.js < 20 detected and npx is not available." >&2
		exit 1
	fi
	echo "Node.js $(node -v) detected. Using temporary Node 22 for electron-builder..."
	NPM_CMD=(npx --yes node@22 "$NPM_CLI_PATH")
fi

MAX_OLD_SPACE_SIZE="${SHADOWHINT_NODE_MAX_OLD_SPACE_SIZE:-8192}"
if [[ "${NODE_OPTIONS:-}" == *"--max-old-space-size="* ]]; then
	EFFECTIVE_NODE_OPTIONS="${NODE_OPTIONS:-}"
else
	EFFECTIVE_NODE_OPTIONS="--max-old-space-size=$MAX_OLD_SPACE_SIZE"
	if [[ -n "${NODE_OPTIONS:-}" ]]; then
		EFFECTIVE_NODE_OPTIONS="$NODE_OPTIONS $EFFECTIVE_NODE_OPTIONS"
	fi
fi

run_npm() {
	NODE_OPTIONS="$EFFECTIVE_NODE_OPTIONS" "${NPM_CMD[@]}" "$@"
}

apply_hotfixes() {
	local app_file_copier="node_modules/electron-builder/node_modules/app-builder-lib/out/util/appFileCopier.js"
	local naudiodon_header="node_modules/naudiodon/src/PaContext.h"
	local main_bundle=".webpack/main/index.js"

	if [[ -f "$app_file_copier" ]]; then
		if grep -q "const pmApproaches = \\[await packager.getPackageManager(), node_module_collector_1.PM.TRAVERSAL\\];" "$app_file_copier"; then
			sed -i "s|const pmApproaches = \\[await packager.getPackageManager(), node_module_collector_1.PM.TRAVERSAL\\];|const pmApproaches = [node_module_collector_1.PM.TRAVERSAL];|" "$app_file_copier"
			echo "Applied electron-builder traversal hotfix."
		fi
	fi

	if [[ -f "$naudiodon_header" ]] && ! grep -q "#include <string>" "$naudiodon_header"; then
		sed -i "/#include <mutex>/a #include <string>" "$naudiodon_header"
		echo "Applied naudiodon header hotfix."
	fi

	if [[ -f "$main_bundle" ]] && ! grep -q "/usr/share/icons/hicolor/256x256/apps/shadowhint.png" "$main_bundle"; then
		node - "$main_bundle" <<'NODE'
const fs = require('fs');
const bundlePath = process.argv[2];
const needle = 'backgroundColor:"#00000000",..."darwin"===process.platform?{type:"panel",roundedCorners:!1}:{},hasShadow:!1,show:!1';
const patch = 'backgroundColor:"#00000000",icon:"linux"===process.platform&&require("fs").existsSync("/usr/share/icons/hicolor/256x256/apps/shadowhint.png")?"/usr/share/icons/hicolor/256x256/apps/shadowhint.png":void 0,..."darwin"===process.platform?{type:"panel",roundedCorners:!1}:{},hasShadow:!1,show:!1';

let source = fs.readFileSync(bundlePath, 'utf8');
if (!source.includes(needle)) {
	console.error('Main bundle icon patch skipped: marker not found.');
	process.exit(0);
}

source = source.replace(needle, patch);
fs.writeFileSync(bundlePath, source);
console.log('Applied Linux BrowserWindow icon hotfix.');
NODE
	fi
}

cd "$ASAR_DIR"

if [[ ! -d node_modules ]]; then
	echo "node_modules is missing, installing dependencies..."
	if [[ -f package-lock.json ]]; then
		run_npm ci
	else
		run_npm install
	fi
fi

apply_hotfixes

NPM_SCRIPT="build:deb"
if [[ "$ARCH" == "arm64" ]]; then
	NPM_SCRIPT="build:deb:arm64"
fi

echo "Building Debian package for $ARCH..."
run_npm run "$NPM_SCRIPT"

echo
echo "Collecting .deb artifacts into $ASAR_BUILD_DIR..."
mkdir -p "$ASAR_BUILD_DIR"

if compgen -G "$ASAR_DIST_DIR/*.deb" > /dev/null; then
	mv -f "$ASAR_DIST_DIR"/*.deb "$ASAR_BUILD_DIR"/
	echo "Done. .deb artifacts:"
	ls -1 "$ASAR_BUILD_DIR"/*.deb
else
	echo "No .deb files found in $ASAR_DIST_DIR" >&2
	exit 1
fi
