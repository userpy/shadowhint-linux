/*
 * Recovered from renderer webpack module 55099.
 * Inferred module name: SettingsGroup.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 */

function SettingsGroupWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285);
  (r(n(68329)),
    (t.default = ({ title: e, description: t, children: n }) =>
      (0, o.jsxs)("div", {
        className: "settings-group",
        children: [
          e && (0, o.jsx)("div", { className: "settings-group-title", children: e }),
          t && (0, o.jsx)("div", { className: "settings-group-description", children: t }),
          (0, o.jsx)("div", { className: "settings-group-content", children: n }),
        ],
      })));
}

export default SettingsGroupWebpackModule;
