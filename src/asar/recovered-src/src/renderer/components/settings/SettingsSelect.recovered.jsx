/*
 * Recovered from renderer webpack module 26160.
 * Inferred module name: SettingsSelect.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 86596 (CustomSelect)
 */

function SettingsSelectWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285),
    i = (r(n(68329)), r(n(86596)));
  t.default = ({ label: e, value: t, options: n, onChange: r, disabled: a }) =>
    (0, o.jsxs)("div", {
      className: "settings-select",
      children: [
        (0, o.jsx)("span", { className: "settings-select-label", children: e }),
        (0, o.jsx)(i.default, { value: t, options: n, onChange: r, disabled: a, size: "default" }),
      ],
    });
}

export default SettingsSelectWebpackModule;
