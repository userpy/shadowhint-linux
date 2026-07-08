/*
 * Recovered from main webpack module 75374.
 * Inferred module name: ShortcutManager.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - none detected
 */

function ShortcutManagerWebpackModule(__unused_webpack_module, exports, __webpack_require__) {
  "use strict";
  var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(t, n);
            ((i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
              (i = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, i));
          }
        : function (e, t, n, r) {
            (void 0 === r && (r = n), (e[r] = t[n]));
          }),
    __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    __importStar =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(e, n) &&
              __createBinding(t, e, n);
        return (__setModuleDefault(t, e), t);
      };
  (Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.restoreShortcutFromDisguise =
      exports.updateShortcutForDisguise =
      exports.findAppShortcuts =
        void 0));
  const electron_1 = __webpack_require__(84157),
    fs = __importStar(__webpack_require__(79896)),
    path = __importStar(__webpack_require__(16928));
  function callSHChangeNotifyUpdateItem(lnkPath) {
    try {
      const nativeRequire = eval("require"),
        koffi = nativeRequire(
          electron_1.app.isPackaged ? path.join(process.resourcesPath, "koffi") : "koffi",
        ),
        shell32 = koffi.load("shell32.dll"),
        SHChangeNotify = shell32.func(
          "void SHChangeNotify(int wEventId, uint uFlags, str dwItem1, void* dwItem2)",
        );
      (SHChangeNotify(8192, 5, lnkPath, null),
        console.log("[ShortcutManager] SHChangeNotify called for:", lnkPath));
    } catch (e) {
      console.warn("[ShortcutManager] SHChangeNotify failed:", e);
    }
  }
  function findAppShortcuts(e) {
    const t = { desktop: [], startMenu: [] },
      n = electron_1.app.getPath("desktop");
    try {
      const r = fs.readdirSync(n).filter((e) => e.endsWith(".lnk"));
      for (const i of r) {
        const r = path.join(n, i);
        try {
          electron_1.shell.readShortcutLink(r).target.toLowerCase() === e.toLowerCase() &&
            t.desktop.push(r);
        } catch {}
      }
    } catch {}
    const r = path.join(
      electron_1.app.getPath("appData"),
      "Microsoft",
      "Windows",
      "Start Menu",
      "Programs",
    );
    try {
      if (fs.existsSync(r)) {
        const n = fs.readdirSync(r).filter((e) => e.endsWith(".lnk"));
        for (const i of n) {
          const n = path.join(r, i);
          try {
            electron_1.shell.readShortcutLink(n).target.toLowerCase() === e.toLowerCase() &&
              t.startMenu.push(n);
          } catch {}
        }
      }
    } catch {}
    return t;
  }
  function updateShortcutForDisguise(e, t) {
    const n = findAppShortcuts(e),
      r = findAppShortcuts(t),
      i = [...new Set([...n.desktop, ...r.desktop])],
      o = [...new Set([...n.startMenu, ...r.startMenu])],
      s = path.join(
        process.resourcesPath || path.join(__dirname, "..", ".."),
        "disguise",
        "default.ico",
      ),
      a = path.join(
        process.resourcesPath || path.join(__dirname, "..", ".."),
        "assets",
        "icon.ico",
      ),
      c = fs.existsSync(s) ? s : t,
      l = fs.existsSync(a) ? a : t;
    for (const e of i)
      try {
        (electron_1.shell.writeShortcutLink(e, "update", { target: t, icon: c, iconIndex: 0 }),
          console.log("[ShortcutManager] Updated desktop shortcut:", e));
      } catch (e) {
        console.warn("[ShortcutManager] Failed to update desktop shortcut:", e);
      }
    for (const e of o)
      try {
        (electron_1.shell.writeShortcutLink(e, "update", { target: t, icon: l, iconIndex: 0 }),
          console.log("[ShortcutManager] Updated Start Menu shortcut:", e),
          callSHChangeNotifyUpdateItem(e));
      } catch (e) {
        console.warn("[ShortcutManager] Failed to update Start Menu shortcut:", e);
      }
    if (0 === i.length) {
      const e = electron_1.app.getPath("desktop"),
        n = path.join(e, "ShadowHint.lnk");
      try {
        (electron_1.shell.writeShortcutLink(n, "create", { target: t, icon: c, iconIndex: 0 }),
          console.log("[ShortcutManager] Created desktop shortcut:", n));
      } catch (e) {
        console.warn("[ShortcutManager] Failed to create desktop shortcut:", e);
      }
    }
    if (0 === o.length) {
      const e = path.join(
          electron_1.app.getPath("appData"),
          "Microsoft",
          "Windows",
          "Start Menu",
          "Programs",
        ),
        n = path.join(e, "ShadowHint.lnk");
      try {
        (electron_1.shell.writeShortcutLink(n, "create", { target: t, icon: l, iconIndex: 0 }),
          console.log("[ShortcutManager] Created Start Menu shortcut:", n),
          callSHChangeNotifyUpdateItem(n));
      } catch (e) {
        console.warn("[ShortcutManager] Failed to create Start Menu shortcut:", e);
      }
    }
  }
  function restoreShortcutFromDisguise(e, t) {
    const n = findAppShortcuts(e);
    for (const e of n.desktop)
      try {
        (electron_1.shell.writeShortcutLink(e, "update", { target: t, icon: t, iconIndex: 0 }),
          console.log("[ShortcutManager] Restored desktop shortcut:", e));
      } catch (e) {
        console.warn("[ShortcutManager] Failed to restore desktop shortcut:", e);
      }
    for (const e of n.startMenu)
      try {
        (electron_1.shell.writeShortcutLink(e, "update", { target: t, icon: t, iconIndex: 0 }),
          console.log("[ShortcutManager] Restored Start Menu shortcut:", e),
          callSHChangeNotifyUpdateItem(e));
      } catch (e) {
        console.warn("[ShortcutManager] Failed to restore Start Menu shortcut:", e);
      }
    if (0 === n.desktop.length) {
      const e = electron_1.app.getPath("desktop"),
        n = path.join(e, "ShadowHint.lnk");
      try {
        (electron_1.shell.writeShortcutLink(n, "create", { target: t, icon: t, iconIndex: 0 }),
          console.log("[ShortcutManager] Created restored desktop shortcut:", n));
      } catch (e) {
        console.warn("[ShortcutManager] Failed to create restored desktop shortcut:", e);
      }
    }
    if (0 === n.startMenu.length) {
      const e = path.join(
          electron_1.app.getPath("appData"),
          "Microsoft",
          "Windows",
          "Start Menu",
          "Programs",
        ),
        n = path.join(e, "ShadowHint.lnk");
      try {
        (electron_1.shell.writeShortcutLink(n, "create", { target: t, icon: t, iconIndex: 0 }),
          console.log("[ShortcutManager] Created restored Start Menu shortcut:", n),
          callSHChangeNotifyUpdateItem(n));
      } catch (e) {
        console.warn("[ShortcutManager] Failed to create restored Start Menu shortcut:", e);
      }
    }
  }
  ((exports.findAppShortcuts = findAppShortcuts),
    (exports.updateShortcutForDisguise = updateShortcutForDisguise),
    (exports.restoreShortcutFromDisguise = restoreShortcutFromDisguise));
}

export default ShortcutManagerWebpackModule;
