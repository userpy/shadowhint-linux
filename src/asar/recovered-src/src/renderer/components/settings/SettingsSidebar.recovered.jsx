/*
 * Recovered from renderer webpack module 95132.
 * Inferred module name: SettingsSidebar.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 41534
 * - 46834
 * - 76441
 * - 40397
 * - 90942
 * - 7680
 * - 15925
 */

function SettingsSidebarWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285),
    i = (r(n(68329)), n(99163)),
    a = r(n(41534)),
    s = r(n(46834)),
    l = r(n(76441)),
    c = r(n(40397)),
    d = r(n(90942)),
    u = r(n(7680)),
    p = r(n(15925)),
    A = [
      { id: "general", icon: a.default, labelKey: "settings.sections.general" },
      { id: "shortcuts", icon: s.default, labelKey: "settings.sections.shortcuts" },
      { id: "screen", icon: l.default, labelKey: "settings.sections.screen" },
      { id: "audio", icon: c.default, labelKey: "settings.sections.audio" },
      { id: "recording", icon: d.default, labelKey: "settings.sections.recording" },
      { id: "account", icon: u.default, labelKey: "settings.sections.account" },
      { id: "about", icon: p.default, labelKey: "settings.sections.about" },
    ];
  t.default = ({ activeSection: e, onSectionChange: t }) => {
    const { t: n } = (0, i.useTranslation)();
    return (0, o.jsx)("div", {
      className: "settings-sidebar",
      children: A.map(({ id: r, icon: i, labelKey: a }) =>
        (0, o.jsxs)(
          "button",
          {
            className: "sidebar-item " + (e === r ? "active" : ""),
            onClick: () => t(r),
            type: "button",
            children: [
              (0, o.jsx)("span", {
                className: "sidebar-item-icon",
                children: (0, o.jsx)(i, { size: 18 }),
              }),
              (0, o.jsx)("span", { className: "sidebar-item-label", children: n(a, r) }),
            ],
          },
          r,
        ),
      ),
    });
  };
}

export default SettingsSidebarWebpackModule;
