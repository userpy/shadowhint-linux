/*
 * Recovered from main webpack module 12124.
 * Inferred module name: SendToWindow.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - none detected
 */

function SendToWindowWebpackModule(e, t) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.safeSenderSend = void 0),
    (t.safeSenderSend = (e, t, ...n) => {
      try {
        if (e && "sender" in e) {
          if (e.sender && !e.sender.isDestroyed()) return (e.sender.send(t, ...n), !0);
        } else if (
          e &&
          "webContents" in e &&
          !e.isDestroyed() &&
          e.webContents &&
          !e.webContents.isDestroyed()
        )
          return (e.webContents.send(t, ...n), !0);
        return !1;
      } catch (e) {
        return (console.error(`Error sending message to ${t}:`, e), !1);
      }
    }));
}

export default SendToWindowWebpackModule;
