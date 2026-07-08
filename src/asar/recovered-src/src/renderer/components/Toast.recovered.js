/*
 * Recovered from renderer webpack module 57128.
 * Inferred module name: Toast.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - none detected
 */

function ToastWebpackModule(e, t) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.showToast = void 0),
    (t.showToast = (e, t = "info") => {
      const n = document.createElement("div");
      ((n.className = `toast toast-${t}`),
        (n.textContent = e),
        document.body.appendChild(n),
        setTimeout(() => {
          (n.classList.add("toast-fadeout"), setTimeout(() => n.remove(), 300));
        }, 3e3));
    }));
}

export default ToastWebpackModule;
