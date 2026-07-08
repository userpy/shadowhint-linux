/*
 * Recovered from renderer webpack module 83539.
 * Inferred module name: SetupWizard.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 49824
 * - 99163
 * - 20552 (I18nSetup)
 * - 27633 (AuthPage)
 * - 42461 (RegistrationSourcePicker)
 * - 67910
 * - 62254 (AuthService)
 * - 98162 (TitleBar)
 */

function SetupWizardWebpackModule(e, t, n) {
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
    c = n(49824),
    d = n(99163),
    u = a(n(20552)),
    p = a(n(27633)),
    A = a(n(42461));
  n(67910);
  const g = n(62254),
    m = a(n(98162));
  t.default = ({ onComplete: e }) => {
    const { t } = (0, d.useTranslation)(),
      [n, r] = (0, l.useState)(!0),
      [o, i] = (0, l.useState)(null),
      [a, f] = (0, l.useState)(""),
      h = (0, c.useNavigate)(),
      [b, _] = (0, l.useState)(0),
      [C, E] = (0, l.useState)(!0),
      [y, v] = (0, l.useState)(!1),
      S = (0, l.useRef)(null),
      [x, w] = (0, l.useState)(null),
      [k, T] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
      (async () => {
        try {
          if (window.api?.invoke) {
            const e = await window.api.invoke("config:getVariant");
            w(e);
          }
        } catch (e) {
          console.error("Ошибка загрузки конфигурации варианта:", e);
        }
      })();
    }, []);
    const B = (0, l.useCallback)(async () => {
      try {
        if (
          (r(!0),
          console.log("Завершаем setup, переходим к LiveWidget"),
          !(await (0, g.checkAuthentication)()))
        )
          return (console.log("Авторизация не действительна, останавливаем переход"), void r(!1));
        if (e) (console.log("Вызываем onComplete callback"), e());
        else {
          window.disableAutoResize = !1;
          const e = new Date().toISOString();
          (console.log(`🔄 [${e}] SetupWizard: Перенаправляем на /live-widget`),
            console.log(`📍 [${e}] SetupWizard: Current URL: ${window.location.href}`),
            await new Promise((e) => setTimeout(e, 100)),
            console.log(
              `🧭 [${e}] SetupWizard: Calling navigate('/live-widget', { replace: true })`,
            ),
            h("/live-widget", { replace: !0 }),
            console.log(`✅ [${e}] SetupWizard: navigate() call completed`));
        }
      } catch (e) {
        (console.error("Error completing setup:", e), i(t("setupWizard.setupCompleteError")));
      } finally {
        r(!1);
      }
    }, [e, h, t]);
    ((0, l.useEffect)(() => {
      (console.log("SetupWizard: компонент монтируется, проверяем флаг disableAutoResize"),
        window.disableAutoResize &&
          (console.log("SetupWizard: Сбрасываем флаг disableAutoResize"),
          (window.disableAutoResize = !1)),
        window.api?.window?.setLayout &&
          window.api.window.setLayout("auth").catch((e) => {
            console.error("SetupWizard: ошибка установки auth layout:", e);
          }));
    }, []),
      (0, l.useEffect)(() => {
        (async () => {
          try {
            const e = await (0, g.checkAuthentication)();
            if ((console.log("checkAuth в SetupWizard.tsx", e), e)) {
              if ("true" === localStorage.getItem("openingSettings"))
                return (
                  console.log(
                    "Пользователь намеренно открывает настройки, показываем экран входа/выхода",
                  ),
                  void r(!1)
                );
              console.log("Пользователь уже авторизован, переход к LiveWidget");
              try {
                const e = await window.api.auth.getUserInfo();
                (e.success &&
                  e.userInfo?.user?.isAdmin &&
                  (v(!0), console.log("Пользователь является администратором")),
                  e.success &&
                    e.userInfo?.user?.language &&
                    u.default.changeLanguage(e.userInfo.user.language));
              } catch (e) {
                console.error("Ошибка при получении информации о пользователе:", e);
              }
              await B();
            }
          } catch (e) {
            console.error("Ошибка при проверке аутентификации:", e);
          } finally {
            r(!1);
          }
        })();
      }, [B]),
      (0, l.useEffect)(() => {
        (async () => {
          try {
            const e = await window.api.updater.getVersion();
            f(e);
          } catch (e) {
            (console.error("Ошибка получения версии:", e), f(t("common.unknown")));
          }
        })();
      }, [t]),
      (0, l.useEffect)(
        () => () => {
          S.current && clearTimeout(S.current);
        },
        [],
      ));
    return (0, s.jsxs)("div", {
      className: "setup-wizard-container",
      children: [
        (0, s.jsx)("div", {
          className: "setup-titlebar-wrapper",
          children: (0, s.jsx)(m.default, {
            title: x?.productName ?? "",
            status: "idle",
            statusMessage: "",
            isSessionActive: !1,
            isSuggestionWindow: !1,
            variantConfig: x,
          }),
        }),
        n
          ? (0, s.jsxs)("div", {
              className: "loading-overlay",
              children: [
                (0, s.jsx)("div", { className: "loading-spinner" }),
                (0, s.jsx)("div", { className: "loading-text", children: t("common.loading") }),
              ],
            })
          : (0, s.jsxs)(s.Fragment, {
              children: [
                o && (0, s.jsx)("div", { className: "error-message", children: o }),
                (0, s.jsx)("div", {
                  className: "setup-wizard-content",
                  children: k
                    ? (0, s.jsx)(A.default, {
                        onComplete: async () => {
                          (T(!1), await B());
                        },
                      })
                    : (0, s.jsx)(p.default, {
                        onLogin: async (e, n, r) => {
                          if (
                            (localStorage.removeItem("openingSettings"), (0, g.saveUserData)(e, n))
                          ) {
                            try {
                              await (0, g.syncTokenWithMain)();
                            } catch (e) {
                              return (
                                console.error("Ошибка синхронизации токена с main процессом:", e),
                                void i(t("setupWizard.userDataSaveError"))
                              );
                            }
                            if (
                              (window.api.auth
                                .getUserInfo()
                                .then((e) => {
                                  e.success &&
                                    e.userInfo?.user?.isAdmin &&
                                    (v(!0), console.log("Пользователь вошёл как администратор"));
                                })
                                .catch((e) => {
                                  console.error(
                                    "Ошибка при получении информации о пользователе после входа:",
                                    e,
                                  );
                                }),
                              "register" === r)
                            )
                              return void T(!0);
                            await B();
                          } else i(t("setupWizard.userDataSaveError"));
                        },
                      }),
                }),
                (0, s.jsx)("div", {
                  className: `version-info ${b > 0 ? "version-info-clicked" : ""} ${C ? "" : "version-info-disabled"}`,
                  onClick: async () => {
                    if (!y) return;
                    const e = b + 1;
                    if ((_(e), S.current && clearTimeout(S.current), e >= 5)) {
                      try {
                        const e = await window.api.window.toggleContentProtection();
                        if (e.success) {
                          (E(e.enabled),
                            console.log(
                              `🛡️ Content protection ${e.enabled ? "enabled" : "disabled"} (admin mode)`,
                            ));
                          const n = e.enabled
                            ? t("deviceSetup.contentProtectionHidden")
                            : t("deviceSetup.contentProtectionVisible");
                          console.log(`✨ ${n}`);
                        }
                      } catch (e) {
                        console.error("Error toggling content protection:", e);
                      }
                      _(0);
                    } else
                      S.current = setTimeout(() => {
                        _(0);
                      }, 2e3);
                  },
                  style: {
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    opacity: b > 0 ? 0.7 + 0.06 * b : 1,
                    transform: b > 0 ? `scale(${1 + 0.02 * b})` : "scale(1)",
                  },
                  children: (0, s.jsxs)("span", {
                    className: "version-text",
                    children: [
                      t("common.version"),
                      " ",
                      a,
                      !C && ` 👁️ ${t("deviceSetup.contentProtectionVisibleShort")}`,
                    ],
                  }),
                }),
              ],
            }),
      ],
    });
  };
}

export default SetupWizardWebpackModule;
