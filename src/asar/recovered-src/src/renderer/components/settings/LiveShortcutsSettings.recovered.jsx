/*
 * Recovered from renderer webpack module 8421.
 * Inferred module name: LiveShortcutsSettings.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 57806
 * - 910 (ShortcutEditor)
 * - 8386
 */

function LiveShortcutsSettingsWebpackModule(e, t, n) {
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
    c = n(99163);
  n(57806);
  const d = a(n(910)),
    u = n(8386);
  t.default = () => {
    const { t: e } = (0, c.useTranslation)(),
      [t, n] = (0, l.useState)([]),
      [r, o] = (0, l.useState)(!0),
      [i, a] = (0, l.useState)(null);
    ((0, l.useEffect)(() => {
      p();
    }, []),
      (0, l.useEffect)(() => {
        const e = (e) => {
          "Escape" === e.key && (e.preventDefault(), A());
        };
        return (
          document.addEventListener("keydown", e),
          () => document.removeEventListener("keydown", e)
        );
      }, []));
    const p = async () => {
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
          } else console.error("Ошибка загрузки настроек горячих клавиш:", t.error);
        } catch (e) {
          console.error("Ошибка при загрузке настроек горячих клавиш:", e);
        } finally {
          o(!1);
        }
      },
      A = () => {
        g();
      },
      g = async () => {
        try {
          await window.api.settings.closeShortcuts();
        } catch (e) {
          console.error("Ошибка закрытия окна:", e);
        }
      };
    return r
      ? (0, s.jsx)("div", {
          className: "shortcuts-settings",
          children: (0, s.jsx)("div", {
            className: "shortcuts-header",
            children: (0, s.jsx)("h2", { children: "Загрузка настроек..." }),
          }),
        })
      : (0, s.jsxs)("div", {
          className: "shortcuts-settings",
          children: [
            (0, s.jsxs)("div", {
              className: "shortcuts-header",
              children: [
                (0, s.jsxs)("div", {
                  className: "header-content",
                  children: [
                    (0, s.jsx)("h2", { children: "Настройки горячих клавиш" }),
                    (0, s.jsx)("p", {
                      children: "Настройте сочетания клавиш для быстрого доступа к функциям",
                    }),
                  ],
                }),
                (0, s.jsx)("button", {
                  className: "btn-close",
                  onClick: A,
                  title: "Закрыть окно (ESC)",
                  children: "×",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "shortcuts-list",
              children: t.map((e) =>
                (0, s.jsxs)(
                  "div",
                  {
                    className: "shortcut-item-keyboard",
                    children: [
                      (0, s.jsx)("div", { className: "shortcut-name", children: e.description }),
                      i === e.id
                        ? (0, s.jsx)(d.default, {
                            currentAccelerator: e.accelerator,
                            onSave: (r) =>
                              (async (e, r) => {
                                if ("open" === e) return;
                                const o = t.map((t) => (t.id === e ? { ...t, accelerator: r } : t));
                                (n(o), a(null));
                                try {
                                  const e = await window.api.settings.saveShortcuts(o);
                                  e.success
                                    ? console.log(
                                        "Настройка горячей клавиши сохранена автоматически",
                                      )
                                    : console.error("Ошибка автоматического сохранения:", e.error);
                                } catch (e) {
                                  console.error("Ошибка при автоматическом сохранении:", e);
                                }
                              })(e.id, r),
                            onCancel: () => a(null),
                            existingShortcuts: t
                              .filter((t) => t.id !== e.id)
                              .map((e) => e.accelerator),
                          })
                        : (0, s.jsxs)("div", {
                            className: "shortcut-controls",
                            children: [
                              (0, s.jsx)("kbd", {
                                className: "shortcut-kbd",
                                children: (0, u.formatKeyDisplay)(e.accelerator),
                              }),
                              (0, s.jsx)("button", {
                                className: "btn-edit",
                                onClick: () => a(e.id),
                                title: "Изменить сочетание",
                                children: "Изменить",
                              }),
                            ],
                          }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
            (0, s.jsx)("div", {
              className: "shortcuts-footer",
              children: (0, s.jsxs)("div", {
                className: "shortcuts-actions",
                children: [
                  (0, s.jsx)("button", {
                    className: "btn btn-secondary",
                    onClick: async () => {
                      if (
                        window.confirm(
                          "Вы уверены, что хотите сбросить все горячие клавиши к значениям по умолчанию?",
                        )
                      )
                        try {
                          const e = await window.api.settings.resetToDefaults();
                          e.success
                            ? (n(e.shortcuts),
                              console.log(
                                "Настройки сброшены к значениям по умолчанию и автоматически сохранены",
                              ))
                            : console.error("Ошибка сброса настроек:", e.error);
                        } catch (e) {
                          console.error("Ошибка при сбросе настроек:", e);
                        }
                    },
                    title: "Сбросить все к значениям по умолчанию",
                    children: "Сбросить",
                  }),
                  (0, s.jsx)("button", {
                    className: "btn btn-secondary",
                    onClick: A,
                    children: "Закрыть",
                  }),
                ],
              }),
            }),
          ],
        });
  };
}

export default LiveShortcutsSettingsWebpackModule;
