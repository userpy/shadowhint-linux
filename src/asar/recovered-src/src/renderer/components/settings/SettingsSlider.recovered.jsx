/*
 * Recovered from renderer webpack module 62531.
 * Inferred module name: SettingsSlider.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 */

function SettingsSliderWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285);
  (r(n(68329)),
    (t.default = ({
      label: e,
      value: t,
      min: n,
      max: r,
      step: i,
      onChange: a,
      formatValue: s,
      disabled: l,
    }) => {
      const c = { "--slider-percent": `${Math.round(((t - n) / (r - n)) * 100)}%` },
        d = s ? s(t) : `${t}`;
      return (0, o.jsxs)("div", {
        className: "settings-slider",
        children: [
          (0, o.jsxs)("div", {
            className: "settings-slider-header",
            children: [
              (0, o.jsx)("span", { className: "settings-slider-label", children: e }),
              (0, o.jsx)("span", { className: "settings-slider-value", children: d }),
            ],
          }),
          (0, o.jsx)("input", {
            type: "range",
            min: n,
            max: r,
            step: i,
            value: t,
            onChange: (e) => a(Number(e.target.value)),
            style: c,
            disabled: l,
            "aria-label": e,
          }),
        ],
      });
    }));
}

export default SettingsSliderWebpackModule;
