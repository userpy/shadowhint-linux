/*
 * Recovered from renderer webpack module 33897.
 * Inferred module name: StreamingMessage.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 723
 * - 70369 (FormattedMarkdown)
 */

function StreamingMessageWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.SuggestionContainer = void 0));
  const o = n(40285);
  (r(n(68329)), n(723));
  const i = n(70369);
  ((t.SuggestionContainer = ({
    suggestion: e,
    isStreaming: t,
    streamingComplete: n,
    className: r = "",
    style: a,
    onChoiceClick: s,
    isHidden: l = !1,
  }) => {
    const c = (0, i.formatTextWithHighlightedCode)(e, s);
    return l
      ? (0, o.jsx)("div", { className: `suggestion-text suggestion-hidden ${r}`, style: a })
      : (0, o.jsxs)("div", {
          className: `suggestion-text ${t ? "streaming" : ""} ${r}`,
          style: a,
          children: [
            c,
            t && !n && (0, o.jsx)("span", { className: "cursor-blink", children: "▌" }),
          ],
        });
  }),
    (t.default = t.SuggestionContainer));
}

export default StreamingMessageWebpackModule;
