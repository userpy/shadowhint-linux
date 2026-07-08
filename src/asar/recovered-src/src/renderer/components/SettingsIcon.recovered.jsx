/*
 * Recovered from renderer webpack module 55644.
 * Inferred module name: SettingsIcon.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 */

function SettingsIconWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285);
  (r(n(68329)),
    (t.default = ({ size: e = 18, color: t = "#E0E0E0", className: n = "" }) =>
      (0, o.jsxs)("svg", {
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        fill: "none",
        className: n,
        "aria-label": "Настройки",
        style: { color: t },
        children: [
          (0, o.jsx)("line", {
            x1: "4",
            y1: "6.5",
            x2: "20",
            y2: "6.5",
            stroke: t,
            strokeWidth: "2.2",
            strokeLinecap: "round",
          }),
          (0, o.jsx)("line", {
            x1: "4",
            y1: "12",
            x2: "20",
            y2: "12",
            stroke: t,
            strokeWidth: "2.2",
            strokeLinecap: "round",
          }),
          (0, o.jsx)("line", {
            x1: "4",
            y1: "17.5",
            x2: "20",
            y2: "17.5",
            stroke: t,
            strokeWidth: "2.2",
            strokeLinecap: "round",
          }),
        ],
      })));
}

export default SettingsIconWebpackModule;
