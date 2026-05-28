#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$ROOT_DIR/runtime/linux-electron-live.pid"
APP_ASAR="$ROOT_DIR/app/resources/app.asar"

collect_runtime_pids() {
	pgrep -f -- "$APP_ASAR" 2>/dev/null || true
}

declare -A seen=()
pids=()

add_pid() {
	local pid="$1"
	[[ "$pid" =~ ^[0-9]+$ ]] || return
	[[ "$pid" -eq "$$" ]] && return
	if [[ -z "${seen[$pid]:-}" ]]; then
		seen["$pid"]=1
		pids+=("$pid")
	fi
}

if [[ -f "$PID_FILE" ]]; then
	file_pid="$(cat "$PID_FILE" 2>/dev/null || true)"
	if [[ -n "${file_pid:-}" ]]; then
		add_pid "$file_pid"
	fi
fi

while IFS= read -r pid; do
	add_pid "$pid"
done < <(collect_runtime_pids)

if [[ "${#pids[@]}" -eq 0 ]]; then
	echo "ShadowHint is not running."
	rm -f "$PID_FILE"
	exit 0
fi

echo "Stopping ShadowHint: PIDs ${pids[*]}"
for pid in "${pids[@]}"; do
	pkill -P "$pid" 2>/dev/null || true
	kill "$pid" 2>/dev/null || true
done
sleep 1

for pid in "${pids[@]}"; do
	if kill -0 "$pid" 2>/dev/null; then
		echo "Process $pid is still alive, sending SIGKILL."
		pkill -KILL -P "$pid" 2>/dev/null || true
		kill -KILL "$pid" 2>/dev/null || true
	fi
done

for pid in $(collect_runtime_pids); do
	kill -KILL "$pid" 2>/dev/null || true
done

rm -f "$PID_FILE"
echo "Stopped."
