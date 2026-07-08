/*
 * Recovered from renderer webpack module 27633.
 * Inferred module name: AuthPage.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 10041
 * - 62254 (AuthService)
 * - 65356 (AnalyticsService)
 */

function AuthPageWebpackModule(e, t, n) {
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
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const a = n(40285),
    s = i(n(68329)),
    l = n(99163);
  n(10041);
  const c = n(62254),
    d = n(65356);
  t.default = ({ onLogin: e }) => {
    const { t } = (0, l.useTranslation)(),
      [n, r] = (0, s.useState)(""),
      [o, i] = (0, s.useState)(""),
      [u, p] = (0, s.useState)(""),
      [A, g] = (0, s.useState)("email"),
      [m, f] = (0, s.useState)("browser"),
      [h, b] = (0, s.useState)(""),
      [_, C] = (0, s.useState)(!1),
      [E, y] = (0, s.useState)(null),
      [v, S] = (0, s.useState)(null);
    ((0, s.useEffect)(() => {
      (async () => {
        const { user: e, token: t } = await (0, c.getUserData)();
        (console.log("Данные пользователя из getUserData:"),
          e && console.log("user:", e),
          t && console.log("token:", t),
          e && t && (y(e), S(t)));
      })();
    }, []),
      (0, s.useEffect)(() => {
        let n = null;
        return (
          "browser-waiting" === A &&
            (n = setInterval(async () => {
              try {
                const t = await window.api.auth.checkBrowserAuthStatus();
                t.success && t.user && t.token
                  ? (clearInterval(n),
                    g("email"),
                    C(!1),
                    (0, d.trackAuth)("login", { method: "browser", step: "completed" }),
                    (0, d.setUserContext)({
                      id: t.user.id,
                      email: t.user.email,
                      name: t.user.email || "",
                      authMethod: "browser",
                    }),
                    e(t.user, t.token, t.user.isNew ? "register" : "browser"))
                  : t.error &&
                    !t.error.includes("Ожидание") &&
                    (clearInterval(n), b(t.error), g("email"), C(!1));
              } catch (e) {
                (console.error("Ошибка при проверке статуса браузерной авторизации:", e),
                  clearInterval(n),
                  b(t("auth.authStatusError")),
                  g("email"),
                  C(!1));
              }
            }, 2e3)),
          () => {
            n && clearInterval(n);
          }
        );
      }, [A, e]));
    const x = () => {
        const e = "browser" === m ? "login" : "login" === m ? "register" : "browser";
        ((0, d.trackButtonClick)("auth_mode_toggle", `from_${m}_to_${e}`),
          f("browser" === m ? "login" : "login" === m ? "register" : "browser"),
          b(""));
      },
      w = async () => {
        ((0, d.trackButtonClick)("logout", "auth_page"),
          (0, d.trackAuth)("logout"),
          await (0, c.logout)(),
          y(null),
          S(null));
      };
    if (E && v) {
      const r = E.email || t("auth.emailNotSpecified");
      return (
        console.log("Авторизованный пользователь:", E),
        (0, a.jsx)("div", {
          className: "flex-column align-center justify-between",
          style: { height: "100%" },
          children: (0, a.jsx)("div", {
            style: { width: "100%", maxWidth: "400px", margin: "0 auto" },
            children: (0, a.jsxs)("div", {
              className: "card mt-lg",
              children: [
                (0, a.jsx)("h2", {
                  className: "mb-md",
                  style: { textAlign: "center" },
                  children: t("auth.alreadyAuthorized"),
                }),
                (0, a.jsxs)("div", {
                  className: "panel mb-md",
                  children: [
                    (0, a.jsxs)("p", {
                      children: [
                        (0, a.jsxs)("strong", { children: [t("auth.email"), ":"] }),
                        " ",
                        r,
                      ],
                    }),
                    !E.email &&
                      (0, a.jsx)("p", {
                        className: "text-error",
                        children: t("auth.emailMissing"),
                      }),
                  ],
                }),
                (0, a.jsx)("button", {
                  type: "button",
                  className: "button button-danger",
                  style: { width: "100%" },
                  onClick: w,
                  children: t("auth.logoutAccount"),
                }),
                (0, a.jsx)("div", {
                  className: "mt-md",
                  style: { textAlign: "center" },
                  children: (0, a.jsx)("button", {
                    type: "button",
                    className: "button button-primary",
                    onClick: () => {
                      const t = {
                        ...E,
                        email: E.email || n,
                        id: E.id || `temp-${Date.now()}-${n?.replace(/[^a-z0-9]/gi, "") || "user"}`,
                      };
                      (console.log("Продолжаем с данными пользователя:", t), e(t, v, "login"));
                    },
                    children: t("auth.continueWork"),
                  }),
                }),
              ],
            }),
          }),
        })
      );
    }
    return (0, a.jsx)("div", {
      className: "flex-column align-center justify-between",
      style: { height: "100%" },
      children: (0, a.jsx)("div", {
        style: { width: "100%", maxWidth: "400px", margin: "0 auto" },
        children: (0, a.jsxs)("div", {
          className: "card mt-lg",
          children: [
            (0, a.jsx)("h2", {
              className: "mb-md",
              style: { textAlign: "center" },
              children: t(
                "email" === A
                  ? "browser" === m
                    ? "auth.browserAuth"
                    : "login" === m
                      ? "auth.signInSystem"
                      : "auth.registration"
                  : "browser-waiting" === A
                    ? "auth.waitingAuth"
                    : "auth.enterCode",
              ),
            }),
            h && (0, a.jsx)("div", { className: "panel mb-md text-error", children: h }),
            "email" === A
              ? "browser" === m
                ? (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("p", {
                        className: "mb-md",
                        style: { textAlign: "center", color: "#888" },
                        children: t("auth.clickButton"),
                      }),
                      (0, a.jsx)("button", {
                        type: "button",
                        className: "button button-primary",
                        style: { width: "100%" },
                        onClick: async () => {
                          ((0, d.trackButtonClick)("browser_auth_start", "auth_page"),
                            b(""),
                            C(!0));
                          try {
                            await window.api.auth.resetBrowserAuth();
                            const e = await window.api.auth.startBrowserAuth();
                            e.success
                              ? (g("browser-waiting"),
                                (0, d.trackAuth)("login", { method: "browser", step: "waiting" }))
                              : (b(e.error || t("auth.authError")),
                                (0, d.trackAuth)("error", { method: "browser", error: e.error }),
                                C(!1));
                          } catch (e) {
                            (b(t("auth.connectionError")),
                              (0, d.trackAuth)("error", {
                                method: "browser",
                                error: "connection_error",
                              }),
                              console.error(e),
                              C(!1));
                          }
                        },
                        disabled: _,
                        children: t(_ ? "auth.openingBrowser" : "auth.loginBrowser"),
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-md",
                        style: { textAlign: "center" },
                        children: (0, a.jsx)("button", {
                          type: "button",
                          className: "button button-text",
                          onClick: x,
                          children: t("auth.loginEmail"),
                        }),
                      }),
                    ],
                  })
                : (0, a.jsxs)("form", {
                    onSubmit: async (e) => {
                      (e.preventDefault(),
                        (0, d.trackButtonClick)("email_submit", `auth_${m}`),
                        b(""),
                        C(!0));
                      try {
                        console.log("Начинаем отправку email:", n, "режим:", m);
                        const e =
                          "login" === m
                            ? await window.api.auth.startEmailLogin(n)
                            : await window.api.auth.startEmailRegistration(n);
                        if ((console.log("Получен ответ от API:", e), e.success))
                          (console.log("Успешно отправлен код, переходим к этапу ввода кода"),
                            g("code"),
                            (0, d.trackAuth)("login" === m ? "login" : "register", {
                              method: "email",
                              step: "code_sent",
                            }));
                        else {
                          console.log("Ошибка при отправке кода:", e.error);
                          const n = (e.error || t("auth.sendingError"))
                            .replace(/^\d+\s+\w+:\s*/, "")
                            .replace(/^[^:]+:\s*/, "");
                          n.includes("Код уже отправлен") || n.includes("already sent")
                            ? (g("code"),
                              b(t("auth.codeAlreadySent")),
                              (0, d.trackAuth)("login" === m ? "login" : "register", {
                                method: "email",
                                step: "code_sent",
                              }))
                            : n.includes("Пользователь не найден") && "login" === m
                              ? (f("register"),
                                b(t("auth.userNotFoundSwitchRegister")),
                                (0, d.trackAuth)("switch_to_register", {
                                  method: "email",
                                  reason: "user_not_found",
                                }))
                              : (b(n),
                                (0, d.trackAuth)("error", {
                                  method: "email",
                                  error: e.error,
                                  authMode: m,
                                }));
                        }
                      } catch (e) {
                        (console.error("Исключение при отправке email:", e),
                          b(t("auth.connectionError")),
                          (0, d.trackAuth)("error", {
                            method: "email",
                            error: "connection_error",
                            authMode: m,
                          }));
                      } finally {
                        C(!1);
                      }
                    },
                    children: [
                      (0, a.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, a.jsx)("label", {
                            className: "form-label",
                            htmlFor: "email",
                            children: t("auth.email"),
                          }),
                          (0, a.jsx)("input", {
                            className: "form-input",
                            id: "email",
                            type: "email",
                            value: n,
                            onChange: (e) => r(e.target.value),
                            required: !0,
                          }),
                        ],
                      }),
                      "register" === m &&
                        (0, a.jsxs)("div", {
                          className: "form-group",
                          children: [
                            (0, a.jsx)("label", {
                              className: "form-label",
                              htmlFor: "name",
                              children: t("auth.nameOptional"),
                            }),
                            (0, a.jsx)("input", {
                              className: "form-input",
                              id: "name",
                              type: "text",
                              value: u,
                              onChange: (e) => p(e.target.value),
                            }),
                          ],
                        }),
                      (0, a.jsx)("button", {
                        type: "submit",
                        className: "button button-primary",
                        style: { width: "100%" },
                        disabled: _,
                        children: t(_ ? "auth.sending" : "auth.getCode"),
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-md",
                        style: { textAlign: "center" },
                        children: (0, a.jsx)("button", {
                          type: "button",
                          className: "button button-text",
                          onClick: x,
                          children: t(
                            "login" === m ? "auth.noAccountRegister" : "auth.haveAccountLogin",
                          ),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-sm",
                        style: { textAlign: "center" },
                        children: (0, a.jsx)("button", {
                          type: "button",
                          className: "button button-text",
                          onClick: () => f("browser"),
                          children: t("auth.loginBrowser"),
                        }),
                      }),
                    ],
                  })
              : "browser-waiting" === A
                ? (0, a.jsxs)("div", {
                    style: { textAlign: "center" },
                    children: [
                      (0, a.jsx)("div", { className: "loading-spinner mb-md" }),
                      (0, a.jsx)("p", { className: "mb-md", children: t("auth.browserOpened") }),
                      (0, a.jsx)("p", {
                        className: "mb-md text-secondary",
                        children: t("auth.afterAuth"),
                      }),
                      (0, a.jsx)("button", {
                        type: "button",
                        className: "button button-secondary",
                        onClick: async () => {
                          try {
                            (await window.api.auth.resetBrowserAuth(), g("email"), C(!1), b(""));
                          } catch (e) {
                            (console.error("Ошибка при отмене авторизации:", e), g("email"), C(!1));
                          }
                        },
                        children: t("common.cancel"),
                      }),
                    ],
                  })
                : (0, a.jsxs)("form", {
                    onSubmit: async (r) => {
                      (r.preventDefault(), b(""), C(!0));
                      try {
                        let r;
                        if (
                          ((r =
                            "login" === m
                              ? await window.api.auth.confirmEmailLogin(n, o)
                              : await window.api.auth.confirmEmailRegistration(n, o, u)),
                          r.success && r.user && r.token)
                        ) {
                          const t = r.user;
                          (t.email || (t.email = n),
                            console.log("Получен ответ API после подтверждения кода:", r),
                            (0, d.trackAuth)("login" === m ? "login" : "register", {
                              method: "email",
                              step: "completed",
                            }),
                            (0, d.setUserContext)({
                              id: t.id,
                              email: t.email,
                              name: t.email || "",
                              authMethod: "email",
                              registered: "register" === m,
                            }),
                            e(t, r.token, m));
                        } else
                          (b(r.error || t("auth.invalidCode")),
                            (0, d.trackAuth)("error", {
                              method: "email",
                              error: "invalid_code",
                              authMode: m,
                            }));
                      } catch (e) {
                        (b(t("auth.connectionError")), console.error(e));
                      } finally {
                        C(!1);
                      }
                    },
                    children: [
                      (0, a.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, a.jsx)("label", {
                            className: "form-label",
                            htmlFor: "code",
                            children: t("auth.confirmationCode"),
                          }),
                          (0, a.jsx)("input", {
                            className: "form-input",
                            id: "code",
                            type: "text",
                            value: o,
                            onChange: (e) => i(e.target.value),
                            required: !0,
                          }),
                          (0, a.jsx)("small", {
                            className: "text-secondary",
                            children: t("auth.sentCodeTo", { email: n }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("button", {
                        type: "submit",
                        className: "button button-primary",
                        style: { width: "100%" },
                        disabled: _,
                        children: t(
                          _ ? "auth.checking" : "login" === m ? "auth.login" : "auth.register",
                        ),
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-md",
                        style: { textAlign: "center" },
                        children: (0, a.jsx)("button", {
                          type: "button",
                          className: "button button-text",
                          onClick: () => {
                            (g("email"), i(""), b(""));
                          },
                          children: t("auth.changeEmail"),
                        }),
                      }),
                    ],
                  }),
          ],
        }),
      }),
    });
  };
}

export default AuthPageWebpackModule;
