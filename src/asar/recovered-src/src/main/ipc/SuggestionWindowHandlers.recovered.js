/*
 * Recovered from main webpack module 97653.
 * Inferred module name: SuggestionWindowHandlers.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 84157 (electron)
 * - 81906 (SuggestionWindowSettings)
 */

function SuggestionWindowHandlersWebpackModule(e, t, n) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.registerSuggestionWindowHandlers = void 0));
  const r = n(84157),
    i = n(81906);
  t.registerSuggestionWindowHandlers = function (e, t) {
    (r.ipcMain.handle("suggestion:get-width", async () => {
      try {
        return { success: !0, width: i.suggestionWindowSettings.getWidth() };
      } catch (e) {
        return (
          console.error("Ошибка получения ширины окна подсказок:", e),
          { success: !1, error: String(e) }
        );
      }
    }),
      r.ipcMain.handle("suggestion:set-width", async (n, r) => {
        try {
          (console.log("[suggestionWindowHandler] Setting width:", r),
            i.suggestionWindowSettings.setWidth(r));
          const n = e();
          (console.log("[suggestionWindowHandler] Manager exists:", !!n),
            n
              ? (console.log("[suggestionWindowHandler] Calling setWindowWidth"),
                n.setWindowWidth(r))
              : console.warn("[suggestionWindowHandler] Manager is null, cannot set width"));
          const o = t?.();
          return (
            o && !o.isDestroyed() && o.webContents.send("suggestion:width-changed", r),
            { success: !0, width: r }
          );
        } catch (e) {
          return (
            console.error("Ошибка установки ширины окна подсказок:", e),
            { success: !1, error: String(e) }
          );
        }
      }),
      r.ipcMain.handle("suggestion:increase-width", async (n, r) => {
        try {
          const n = i.suggestionWindowSettings.getWidth(),
            o = i.suggestionWindowSettings.increaseWidth(n, r),
            s = e();
          s && s.setWindowWidth(o);
          const a = t?.();
          return (
            a && !a.isDestroyed() && a.webContents.send("suggestion:width-changed", o),
            { success: !0, width: o }
          );
        } catch (e) {
          return (
            console.error("Ошибка увеличения ширины окна подсказок:", e),
            { success: !1, error: String(e) }
          );
        }
      }),
      r.ipcMain.handle("suggestion:decrease-width", async (n, r) => {
        try {
          const n = i.suggestionWindowSettings.getWidth(),
            o = i.suggestionWindowSettings.decreaseWidth(n, r),
            s = e();
          s && s.setWindowWidth(o);
          const a = t?.();
          return (
            a && !a.isDestroyed() && a.webContents.send("suggestion:width-changed", o),
            { success: !0, width: o }
          );
        } catch (e) {
          return (
            console.error("Ошибка уменьшения ширины окна подсказок:", e),
            { success: !1, error: String(e) }
          );
        }
      }),
      r.ipcMain.handle("suggestion:reset-width", async () => {
        try {
          const n = i.suggestionWindowSettings.resetToDefault(),
            r = e();
          r && r.setWindowWidth(n);
          const o = t?.();
          return (
            o && !o.isDestroyed() && o.webContents.send("suggestion:width-changed", n),
            { success: !0, width: n }
          );
        } catch (e) {
          return (
            console.error("Ошибка сброса ширины окна подсказок:", e),
            { success: !1, error: String(e) }
          );
        }
      }),
      r.ipcMain.handle("suggestion:get-font-size", async () => {
        try {
          return { success: !0, fontSize: i.suggestionWindowSettings.getFontSize() };
        } catch (e) {
          return (
            console.error("Ошибка получения размера шрифта подсказок:", e),
            { success: !1, error: String(e) }
          );
        }
      }),
      r.ipcMain.handle("suggestion:get-height", async () => {
        try {
          return { success: !0, height: i.suggestionWindowSettings.getHeight() };
        } catch (e) {
          return (
            console.error("Ошибка получения высоты окна подсказок:", e),
            { success: !1, error: String(e) }
          );
        }
      }),
      r.ipcMain.handle("suggestion:set-height", async (n, r) => {
        try {
          (console.log("[suggestionWindowHandler] Setting height:", r),
            i.suggestionWindowSettings.setHeight(r));
          const n = e();
          n && n.setWindowHeight(r);
          const o = t?.();
          return (
            o && !o.isDestroyed() && o.webContents.send("suggestion:height-changed", r),
            { success: !0, height: r }
          );
        } catch (e) {
          return (
            console.error("Ошибка установки высоты окна подсказок:", e),
            { success: !1, error: String(e) }
          );
        }
      }));
  };
}

export default SuggestionWindowHandlersWebpackModule;
