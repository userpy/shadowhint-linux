/*
 * Recovered from renderer webpack module 41898.
 * Inferred module name: ShortcutsSettingsList.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 910 (ShortcutEditor)
 * - 8386
 */

function ShortcutsSettingsListWebpackModule(e, t, n) {
  "use strict";
  var r =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            ((o && !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, o));
          }
        : function (e, t, n, r) {
            (void 0 === r && (r = n), (e[r] = t[n]));
          }),
    o =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    i =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
        return (o(t, e), t);
      },
    a =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(40285),
    l = i(n(68329)),
    c = n(99163),
    d = a(n(910)),
    u = n(8386);
  t.default = () => {
    const { t: e } = (0, c.useTranslation)(),
      [t, n] = (0, l.useState)([]),
      [r, o] = (0, l.useState)(!0),
      [i, a] = (0, l.useState)(null),
      [p, A] = (0, l.useState)(!1),
      g = (0, l.useCallback)(async () => {
        try {
          o(!0);
          const t = await window.api.settings.getShortcuts();
          if (t.success) {
            const r = (
              Array.isArray(t.shortcuts)
                ? t.shortcuts.filter((e) => e && "open" !== e.id && "toggle_speech" !== e.id)
                : []
            ).map((t) =>
              "toggle_click_through" === t.id
                ? { ...t, description: e("liveWidget.toggleClickThrough") }
                : t,
            );
            n(r);
          } else console.error("Failed to load shortcuts:", t.error);
        } catch (e) {
          console.error("Error loading shortcuts:", e);
        } finally {
          o(!1);
        }
      }, [e]);
    return (
      (0, l.useEffect)(() => {
        g();
      }, [g]),
      r
        ? (0, s.jsx)("div", {
            className: "settings-loading",
            children: e("settings.loading", "Loading..."),
          })
        : (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("div", {
                className: "shortcuts-list",
                children: t.map((r) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: "shortcut-item",
                      children: [
                        (0, s.jsx)("div", { className: "shortcut-name", children: r.description }),
                        i === r.id
                          ? (0, s.jsx)(d.default, {
                              currentAccelerator: r.accelerator,
                              onSave: (e) =>
                                (async (e, r) => {
                                  if ("open" === e) return;
                                  const o = t.map((t) =>
                                    t.id === e ? { ...t, accelerator: r } : t,
                                  );
                                  (n(o), a(null));
                                  try {
                                    const e = await window.api.settings.saveShortcuts(o);
                                    e.success || console.error("Failed to save shortcut:", e.error);
                                  } catch (e) {
                                    console.error("Error saving shortcut:", e);
                                  }
                                })(r.id, e),
                              onCancel: () => a(null),
                              existingShortcuts: t
                                .filter((e) => e.id !== r.id)
                                .map((e) => e.accelerator),
                            })
                          : (0, s.jsxs)("div", {
                              className: "shortcut-controls",
                              children: [
                                (0, s.jsx)("kbd", {
                                  className: "shortcut-kbd",
                                  children: (0, u.formatKeyDisplay)(r.accelerator),
                                }),
                                (0, s.jsx)("button", {
                                  className: "settings-btn settings-btn-secondary",
                                  onClick: () => a(r.id),
                                  type: "button",
                                  style: { marginLeft: 8, padding: "4px 12px", fontSize: 13 },
                                  children: e("settings.shortcuts.edit", "Edit"),
                                }),
                              ],
                            }),
                      ],
                    },
                    r.id,
                  ),
                ),
              }),
              (0, s.jsx)("div", {
                style: { marginTop: 16 },
                children: p
                  ? (0, s.jsxs)("div", {
                      style: { display: "flex", alignItems: "center", gap: 8 },
                      children: [
                        (0, s.jsx)("span", {
                          style: { fontSize: 13, color: "#999" },
                          children: e("settings.shortcuts.resetConfirm", "Are you sure?"),
                        }),
                        (0, s.jsx)("button", {
                          className: "settings-btn settings-btn-danger",
                          onClick: async () => {
                            try {
                              const e = await window.api.settings.resetToDefaults();
                              e.success
                                ? n(e.shortcuts || [])
                                : console.error("Failed to reset shortcuts:", e.error);
                            } catch (e) {
                              console.error("Error resetting shortcuts:", e);
                            }
                            A(!1);
                          },
                          type: "button",
                          style: { padding: "4px 12px", fontSize: 13 },
                          children: e("settings.shortcuts.confirmReset", "Reset"),
                        }),
                        (0, s.jsx)("button", {
                          className: "settings-btn settings-btn-secondary",
                          onClick: () => A(!1),
                          type: "button",
                          style: { padding: "4px 12px", fontSize: 13 },
                          children: e("common.cancel", "Cancel"),
                        }),
                      ],
                    })
                  : (0, s.jsx)("button", {
                      className: "settings-btn settings-btn-secondary",
                      onClick: () => A(!0),
                      type: "button",
                      children: e("settings.shortcuts.resetToDefaults", "Reset to defaults"),
                    }),
              }),
            ],
          })
    );
  };
}

export default ShortcutsSettingsListWebpackModule;
