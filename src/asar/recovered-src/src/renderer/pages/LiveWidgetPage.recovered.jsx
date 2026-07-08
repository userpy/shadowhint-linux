/*
 * Recovered from renderer webpack module 58370.
 * Inferred module name: LiveWidgetPage.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 49824
 * - 59781 (LiveWidget)
 * - 21183 (LiveWidgetHeight)
 * - 62254 (AuthService)
 * - 65356 (AnalyticsService)
 */

function LiveWidgetPageWebpackModule(e, t, n) {
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
    d = a(n(59781)),
    u = a(n(21183)),
    p = n(62254),
    A = n(65356);
  t.default = ({ onStatusUpdate: e, onSessionStateChange: t, onSessionIdChange: n }) => {
    const [r, o] = (0, l.useState)(!1),
      i = (0, c.useNavigate)();
    return (
      (0, l.useEffect)(() => {
        ((0, A.trackPageViewEvent)("live_widget"),
          console.log("LiveWidgetPage: компонент монтируется"));
        try {
          "undefined" != typeof window && window.api
            ? (console.log("API доступен"),
              (window.api.window && "function" == typeof window.api.window.setTransparent) ||
                console.warn("Метод setTransparent недоступен"))
            : console.warn("API недоступен");
        } catch (e) {
          console.error("Ошибка при настройке окна:", e);
        }
        return () => {
          console.log("LiveWidgetPage: компонент размонтируется");
          try {
            "undefined" != typeof window &&
              window.api &&
              ((window.api.window && "function" == typeof window.api.window.setTransparent) ||
                console.warn("Метод setTransparent недоступен при размонтировании"));
          } catch (e) {
            console.error("Ошибка при сбросе настроек окна:", e);
          }
        };
      }, []),
      (0, l.useEffect)(() => {
        (async () => {
          try {
            (await (0, p.checkAuthentication)())
              ? (window.api?.window?.setLayout &&
                  window.api.window.setLayout("widget").catch((e) => {
                    console.error("Ошибка при переключении layout на widget:", e);
                  }),
                window.api?.sessions?.show &&
                  window.api.sessions.show().catch((e) => {
                    console.error("Ошибка при открытии окна сессий:", e);
                  }))
              : (console.log(
                  "Пользователь не авторизован, выполняем обработку ошибки аутентификации",
                ),
                await (0, p.handleAuthError)("User not authorized", {
                  navigate: i,
                  redirectUrl: "/setup",
                  resetWindowSettings: !0,
                }));
          } catch (e) {
            (console.error("Ошибка проверки авторизации:", e),
              await (0, p.handleAuthError)(e, {
                navigate: i,
                redirectUrl: "/setup",
                resetWindowSettings: !0,
              }));
          }
        })();
      }, [i]),
      (0, s.jsxs)("div", {
        className: "live-widget-page",
        children: [
          (0, s.jsx)(u.default, {
            selector: ".live-widget",
            contentSelector: ".suggestion-container",
            extraPadding: 0,
          }),
          (0, s.jsx)("div", {
            className: "widget-container " + (r ? "expanded" : ""),
            children: (0, s.jsx)(d.default, {
              onSettingsClick: () => {
                try {
                  "undefined" != typeof window && window.api && window.api.window
                    ? (console.log("Подготовка к переходу на страницу настроек..."),
                      "true" !== localStorage.getItem("isSetupCompleted") &&
                        localStorage.setItem("isSetupCompleted", "true"),
                      localStorage.setItem("openingSettings", "true"),
                      (window.disableAutoResize = !0),
                      console.log("Блокировка автоматического изменения высоты активирована"),
                      Promise.resolve()
                        .then(async () => {
                          window.api.window.setLayout &&
                            (await window.api.window.setLayout("auth"));
                        })
                        .then(() =>
                          window.api.window.resetTransparent
                            ? window.api.window.resetTransparent()
                            : Promise.resolve(),
                        )
                        .then(() =>
                          window.api.window.setHeightByElement
                            ? window.api.window.setHeightByElement(732, "setup clear settings")
                            : Promise.resolve(),
                        )
                        .then(() => new Promise((e) => setTimeout(e, 200)))
                        .then(() => {
                          (0, p.handleAuthError)(null, {
                            navigate: i,
                            redirectUrl: "/setup",
                            resetWindowSettings: !1,
                            preserveAuthData: !0,
                          });
                        })
                        .catch((e) => {
                          (console.error(
                            "Ошибка при подготовке к переходу на страницу настроек:",
                            e,
                          ),
                            i("/setup"));
                        }))
                    : (console.warn(
                        "API окна недоступен, выполняем перенаправление без сброса настроек",
                      ),
                      i("/setup"));
                } catch (e) {
                  (console.error("Ошибка при подготовке к переходу на страницу настроек:", e),
                    i("/setup"));
                }
              },
              onExpandClick: () => {
                o(!r);
              },
              onStatusUpdate: e,
              onSessionStateChange: t,
              onSessionIdChange: n,
            }),
          }),
        ],
      })
    );
  };
}

export default LiveWidgetPageWebpackModule;
