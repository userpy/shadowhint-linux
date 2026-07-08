/*
 * Recovered from main webpack module 57991.
 * Inferred module name: CursorLock.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 26376
 * - 32969
 */

function CursorLockWebpackModule(e, t, n) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getCursorLock = void 0));
  let r = null;
  t.getCursorLock = function () {
    if (r) return r;
    if ("darwin" === process.platform)
      try {
        const { createMacCursorLock: e } = n(26376);
        r = e();
      } catch (e) {
        (console.warn("Failed to load Mac cursor lock:", e),
          (r = {
            freezeCursor: () => {},
            unfreezeCursor: () => {},
            getMouseDelta: () => ({ deltaX: 0, deltaY: 0 }),
            isAvailable: () => !1,
            isMouseEventCaptureActive: () => !1,
            requestAccessibilityPermission: () => !1,
          }));
      }
    else if ("win32" === process.platform)
      try {
        const { createWinCursorLock: e } = n(32969);
        r = e();
      } catch (e) {
        (console.warn("Failed to load Windows cursor lock:", e),
          (r = {
            freezeCursor: () => {},
            unfreezeCursor: () => {},
            getMouseDelta: () => ({ deltaX: 0, deltaY: 0 }),
            isAvailable: () => !1,
            isMouseEventCaptureActive: () => !1,
            requestAccessibilityPermission: () => !1,
          }));
      }
    else
      r = {
        freezeCursor: () => {},
        unfreezeCursor: () => {},
        getMouseDelta: () => ({ deltaX: 0, deltaY: 0 }),
        isAvailable: () => !1,
        isMouseEventCaptureActive: () => !1,
        requestAccessibilityPermission: () => !1,
      };
    return (
      r ||
        (r = {
          freezeCursor: () => {},
          unfreezeCursor: () => {},
          getMouseDelta: () => ({ deltaX: 0, deltaY: 0 }),
          isAvailable: () => !1,
          isMouseEventCaptureActive: () => !1,
          requestAccessibilityPermission: () => !1,
        }),
      r
    );
  };
}

export default CursorLockWebpackModule;
