/*
 * Recovered from renderer webpack module 25861.
 * Inferred module name: DateGroupHeader.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 */

function DateGroupHeaderWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285);
  (r(n(68329)),
    (t.default = ({ label: e }) =>
      (0, o.jsx)("div", {
        className: "date-group-header",
        children: (0, o.jsx)("span", { className: "date-label", children: e }),
      })));
}

export default DateGroupHeaderWebpackModule;
