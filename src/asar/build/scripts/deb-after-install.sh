#!/usr/bin/env bash
set -e

# Restore CLI launcher, because custom postinst replaces electron-builder defaults.
APP_BIN="/opt/ShadowHint/shadowhint"
APP_SANDBOX="/opt/ShadowHint/chrome-sandbox"
APP_LINK="/usr/bin/shadowhint"

if [[ -x "$APP_BIN" ]]; then
  if command -v update-alternatives >/dev/null 2>&1; then
    update-alternatives --install "$APP_LINK" shadowhint "$APP_BIN" 100 >/dev/null 2>&1 || true
  else
    ln -sf "$APP_BIN" "$APP_LINK" || true
  fi
fi

# Keep Chromium sandbox usable on systems without user namespace sandboxing.
if [[ -f "$APP_SANDBOX" ]]; then
  chown root:root "$APP_SANDBOX" 2>/dev/null || true
  chmod 4755 "$APP_SANDBOX" 2>/dev/null || true
fi

# Use an absolute icon path in desktop entry to avoid stale theme cache collisions.
DESKTOP_FILE="/usr/share/applications/shadowhint.desktop"
ICON_FILE="/usr/share/icons/hicolor/256x256/apps/shadowhint.png"
if [[ -f "$DESKTOP_FILE" && -f "$ICON_FILE" ]]; then
  if grep -q '^Icon=' "$DESKTOP_FILE"; then
    sed -i "s|^Icon=.*$|Icon=$ICON_FILE|" "$DESKTOP_FILE"
  else
    printf '\nIcon=%s\n' "$ICON_FILE" >> "$DESKTOP_FILE"
  fi
fi

# Refresh app menu and icon caches so the launcher appears immediately.
if command -v update-desktop-database >/dev/null 2>&1; then
  update-desktop-database -q /usr/share/applications || true
fi

if command -v gtk-update-icon-cache >/dev/null 2>&1; then
  gtk-update-icon-cache -f -q /usr/share/icons/hicolor || true
fi

if command -v update-mime-database >/dev/null 2>&1; then
  update-mime-database /usr/share/mime >/dev/null 2>&1 || true
fi

if command -v xdg-desktop-menu >/dev/null 2>&1; then
  xdg-desktop-menu forceupdate >/dev/null 2>&1 || true
fi

exit 0
