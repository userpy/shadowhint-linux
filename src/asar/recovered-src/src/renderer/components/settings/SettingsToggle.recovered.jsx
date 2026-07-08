/*
 * Recovered from renderer webpack module 97432.
 * Inferred module name: SettingsToggle.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 */

function SettingsToggleWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285);
  (r(n(68329)),
    (t.default = ({ label: e, description: t, checked: n, onChange: r, disabled: i }) =>
      (0, o.jsxs)("div", {
        className: "settings-toggle " + (i ? "disabled" : ""),
        children: [
          (0, o.jsxs)("div", {
            className: "settings-toggle-info",
            children: [
              (0, o.jsx)("span", { className: "settings-toggle-label", children: e }),
              t && (0, o.jsx)("span", { className: "settings-toggle-description", children: t }),
            ],
          }),
          (0, o.jsx)("button", {
            type: "button",
            className: "toggle-switch " + (n ? "active" : ""),
            onClick: () => !i && r(!n),
            disabled: i,
            role: "switch",
            "aria-checked": n,
            children: (0, o.jsx)("span", { className: "toggle-switch-knob" }),
          }),
        ],
      })));
}

export default SettingsToggleWebpackModule;
