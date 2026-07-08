/*
 * Recovered from renderer webpack module 92200.
 * Inferred module name: RendererEntry.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 66856 (StatsigService)
 * - 68329
 * - 41377
 * - 49824
 * - 93557 (App)
 * - 723
 * - 5301
 * - 2247
 */

function RendererEntryWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285);
  (0, n(66856).initSentryReplay)();
  const i = r(n(68329)),
    a = n(41377),
    s = n(49824),
    l = r(n(93557));
  (n(723), n(5301), n(2247));
  const c = document.getElementById("root");
  if (!c) throw new Error("Root element not found");
  const d = (0, a.createRoot)(c),
    u = window.location.hash.startsWith("#/suggestion");
  d.render(
    (0, o.jsx)(i.default.StrictMode, {
      children: (0, o.jsx)(s.HashRouter, {
        children: u
          ? (0, o.jsx)(l.default, { isSuggestionWindow: !0 })
          : (0, o.jsx)(l.default, { isSuggestionWindow: !1 }),
      }),
    }),
  );
}

export default RendererEntryWebpackModule;
