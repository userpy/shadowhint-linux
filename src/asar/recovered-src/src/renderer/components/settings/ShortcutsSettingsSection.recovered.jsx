/*
 * Recovered from renderer webpack module 20768.
 * Inferred module name: ShortcutsSettingsSection.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 41898 (ShortcutsSettingsList)
 */

function ShortcutsSettingsSectionWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285),
    i = (r(n(68329)), n(99163)),
    a = r(n(41898));
  t.default = () => {
    const { t: e } = (0, i.useTranslation)();
    return (0, o.jsxs)("div", {
      children: [
        (0, o.jsx)("h2", {
          className: "settings-section-title",
          children: e("settings.sections.shortcuts", "Shortcuts"),
        }),
        (0, o.jsx)(a.default, {}),
      ],
    });
  };
}

export default ShortcutsSettingsSectionWebpackModule;
