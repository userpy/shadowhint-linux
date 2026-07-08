/*
 * Recovered from main webpack module 1722.
 * Inferred module name: UpdateNotificationWindowManager.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 84157 (electron)
 * - 12124 (SendToWindow)
 */

function UpdateNotificationWindowManagerWebpackModule(e, t, n) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.UpdateNotificationWindow = void 0));
  const r = n(84157),
    i = n(12124);
  t.UpdateNotificationWindow = class {
    constructor() {
      ((this.window = null), (this.autoCloseTimer = null), this.setupIpcHandlers());
    }
    setupIpcHandlers() {
      (r.ipcMain.handle("updateNotificationWindow:show", async (e, t) => this.showWindow(t)),
        r.ipcMain.handle("updateNotificationWindow:hide", async () => this.hideWindow()),
        r.ipcMain.handle("updateNotificationWindow:close", async () => this.closeWindow()));
    }
    async showWindow(e) {
      if (this.window) {
        try {
          this.window.showInactive();
        } catch {
          this.window.show();
        }
        return void (0, i.safeSenderSend)(this.window, "updateNotificationWindow:updateData", e);
      }
      const t = r.screen.getPrimaryDisplay(),
        { width: n, height: o } = t.workAreaSize,
        s = n - 200 - 20;
      ((this.window = new r.BrowserWindow({
        width: 200,
        height: 60,
        x: s,
        y: 60,
        minWidth: 200,
        minHeight: 60,
        maxWidth: 2e3,
        maxHeight: 600,
        resizable: !0,
        minimizable: !1,
        maximizable: !1,
        closable: !0,
        skipTaskbar: !0,
        alwaysOnTop: !0,
        focusable: !1,
        frame: !1,
        transparent: !0,
        hasShadow: !1,
        titleBarStyle: "hiddenInset",
        show: !1,
        ...("darwin" === process.platform ? { type: "panel" } : {}),
        webPreferences: {
          nodeIntegration: !0,
          contextIsolation: !1,
          preload: require("path").resolve(__dirname, "../renderer", "main_window", "preload.js"),
          webSecurity: !0,
          allowRunningInsecureContent: !1,
          experimentalFeatures: !1,
        },
      })),
        "darwin" === process.platform &&
          (this.window.setAlwaysOnTop(!0, "screen-saver"),
          this.window.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
          this.window.setFullScreenable(!1)),
        this.window.loadURL(
          `file://${require("path").resolve(__dirname, "..", "renderer", "main_window", "index.html")}#/update-notification`,
        ),
        this.window.setContentProtection(!0),
        this.window.webContents.on("context-menu", (e) => {
          e.preventDefault();
        }),
        this.window.webContents.setWindowOpenHandler(() => ({ action: "deny" })),
        this.window.once("ready-to-show", () => {
          if (this.window) {
            "darwin" === process.platform &&
              "function" == typeof this.window.setWindowButtonVisibility &&
              this.window.setWindowButtonVisibility(!1);
            try {
              this.window.showInactive();
            } catch {
              this.window.show();
            }
            (0, i.safeSenderSend)(this.window, "updateNotificationWindow:updateData", e);
          }
        }),
        this.window.on("closed", () => {
          (this.cancelAutoClose(), (this.window = null));
        }),
        (this.autoCloseTimer = setTimeout(() => {
          this.window && this.window.isVisible() && this.window.close();
        }, 3e4)));
    }
    cancelAutoClose() {
      this.autoCloseTimer && (clearTimeout(this.autoCloseTimer), (this.autoCloseTimer = null));
    }
    hideWindow() {
      this.window && this.window.hide();
    }
    closeWindow() {
      (this.cancelAutoClose(), this.window && (this.window.close(), (this.window = null)));
    }
    isWindowVisible() {
      return !!this.window && this.window.isVisible();
    }
    updateWindowData(e) {
      this.window && (0, i.safeSenderSend)(this.window, "updateNotificationWindow:updateData", e);
    }
    destroy() {
      this.window && (this.window.close(), (this.window = null));
    }
    getWindow() {
      return this.window;
    }
  };
}

export default UpdateNotificationWindowManagerWebpackModule;
