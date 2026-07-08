/*
 * Recovered from renderer webpack module 93557.
 * Inferred module name: App.
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
 * - 83539 (SetupWizard)
 * - 58370 (LiveWidgetPage)
 * - 97890
 * - 62254 (AuthService)
 * - 37876
 * - 26292 (LiveWidgetComposer)
 * - 49468 (TranscriptionPage)
 * - 127 (SessionsPage)
 * - 56503 (SessionDetailPage)
 * - 81902 (DeviceSetupDiagnostics)
 * - 8421 (LiveShortcutsSettings)
 * - 66223 (ToolbarSettingsPanel)
 * - 3302 (SettingsWindow)
 * - 73807 (ContextSetupPage)
 * - 34775
 * - 57128 (Toast)
 * - 65356 (AnalyticsService)
 * - 66856 (StatsigService)
 * - 93197 (StatsigClient)
 * - 89994
 * - 72830
 */

function AppWebpackModule(e, t, n) {
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
    u = a(n(20552));
  n(20552);
  const p = a(n(83539)),
    A = a(n(58370)),
    g = a(n(97890)),
    m = n(62254),
    f = a(n(37876)),
    h = n(62254),
    b = a(n(26292)),
    _ = a(n(49468)),
    C = a(n(127)),
    E = a(n(56503)),
    y = a(n(81902)),
    v = a(n(8421)),
    S = a(n(66223)),
    x = a(n(3302)),
    w = a(n(73807)),
    k = a(n(34775)),
    T = n(57128),
    B = n(65356),
    I = n(66856),
    R = n(93197),
    N = n(89994),
    O = n(72830),
    D = { deskhint: "#bb86fc", shadowhint: "#bb86fc", exameasy: "#ff7a1f", psykit: "#ff7a1f" },
    M = (e, t) => {
      if ("undefined" == typeof document) return;
      const n = t ?? (e ? D[e] : void 0),
        r = document.documentElement;
      n
        ? r.style.setProperty("--brand-accent-color", n)
        : r.style.removeProperty("--brand-accent-color");
    },
    P = ({ to: e, replace: t }) => {
      const n = new Date().toISOString(),
        r = new Error().stack?.split("\n")[3]?.trim() || "unknown";
      return (
        console.log(`🧭 [${n}] Navigate component triggered: to="${e}", replace=${t}`),
        console.log(`📞 [${n}] Navigate from: ${r}`),
        console.log(`📍 [${n}] Current URL: ${window.location.href}`),
        (0, s.jsx)(c.Navigate, { to: e, replace: t })
      );
    };
  let L = null;
  ((window.setGlobalAudioStreamer = (e) => {
    L = e;
  }),
    (t.default = ({ isSuggestionWindow: e = !1 }) => {
      const { t } = (0, d.useTranslation)();
      ((0, O.useVirtualCursorEvents)(),
        (0, l.useEffect)(() => {
          const e = () => {
            (0, R.flushStatsig)();
          };
          return (
            window.addEventListener("beforeunload", e),
            () => {
              window.removeEventListener("beforeunload", e);
            }
          );
        }, []));
      const [n, r] = (0, l.useState)(""),
        [o, i] = (0, l.useState)(null),
        [a, D] = (0, l.useState)(null),
        [z, U] = (0, l.useState)(null),
        [F, j] = (0, l.useState)(!0),
        [G, W] = (0, l.useState)(!1),
        [Y, H] = (0, l.useState)(null),
        [V, q] = (0, l.useState)(!1);
      (0, l.useEffect)(() => {
        (async () => {
          let e = "ru";
          try {
            if (window.api?.settings?.getPreferredLanguage) {
              const t = await window.api.settings.getPreferredLanguage();
              t?.success && t.language && (e = t.language);
            } else {
              const t = localStorage.getItem("preferredLanguage");
              t && (e = t);
            }
          } catch (e) {
            console.warn("Не удалось получить preferredLanguage, используем ru", e);
          }
          (u.default.changeLanguage(e),
            localStorage.setItem("preferredLanguage", e),
            window.api?.settings?.setPreferredLanguage &&
              window.api.settings.setPreferredLanguage(e).catch(() => {}));
        })();
      }, []);
      const [Q, $] = (0, l.useState)(!1),
        K = (e) => {
          const t = new Date().toISOString(),
            n = new Error().stack?.split("\n")[2]?.trim() || "unknown";
          (console.log(`🔧 [${t}] needsDeviceSetup changed: ${Q} -> ${e}`),
            console.log(`📞 [${t}] Called from: ${n}`),
            $(e));
        },
        X = (0, c.useNavigate)(),
        Z = (0, c.useLocation)(),
        J = "undefined" != typeof window ? window.location.hash : "",
        ee = "/toolbar-settings" === Z.pathname || "#/toolbar-settings" === J,
        te = "/shortcuts-settings" === Z.pathname || "#/shortcuts-settings" === J,
        ne = "/settings" === Z.pathname || "#/settings" === J,
        re = (Z.pathname, "/transcription" === Z.pathname || J.startsWith("#/transcription")),
        oe = "/update-notification" === Z.pathname || "#/update-notification" === J,
        ie = "/live-widget" === Z.pathname || "#/live-widget" === J,
        ae = J.startsWith("#/sessions") || J.startsWith("#/session/");
      ((0, l.useEffect)(() => {
        const e = localStorage.setItem;
        return (
          (localStorage.setItem = function (t, n) {
            const r = new Date().toISOString();
            if ("isSetupCompleted" === t) {
              const e = new Error().stack?.split("\n")[2]?.trim() || "unknown";
              (console.log(`💾 [${r}] localStorage.setItem('${t}', '${n}')`),
                console.log(`📞 [${r}] Called from: ${e}`));
            }
            return e.call(this, t, n);
          }),
          () => {
            localStorage.setItem = e;
          }
        );
      }, []),
        (0, l.useEffect)(() => {
          window.api
            ?.getPlatform?.()
            .then((e) => {
              "win32" === e &&
                document.documentElement.style.setProperty("--container-width", "900px");
            })
            .catch(() => {
              navigator.userAgent.toLowerCase().includes("windows") &&
                document.documentElement.style.setProperty("--container-width", "900px");
            });
        }, []),
        (0, l.useEffect)(() => {
          (async () => {
            try {
              if (window.api?.invoke) {
                const e = await window.api.invoke("config:getVariant");
                e &&
                  (i(e),
                  r(e.productName ?? ""),
                  M(e.variant, e.brandAccentColor ?? e.brandColor ?? e.accentColor),
                  console.log("Загружена конфигурация варианта:", e.productName));
              } else
                try {
                  const e = await fetch("/config/current-variant.json");
                  if (e.ok) {
                    const t = await e.json();
                    (i(t),
                      r(t.productName ?? ""),
                      M(t.variant, t.brandAccentColor ?? t.brandColor ?? t.accentColor));
                  }
                } catch {
                  (console.log("Название варианта не получено, используем пустое значение"),
                    M(void 0));
                }
            } catch (e) {
              (console.error("Ошибка загрузки конфигурации варианта:", e), r(""), M(void 0));
            }
          })();
        }, []),
        (0, l.useEffect)(() => {
          o ? M(o.variant, o.brandAccentColor ?? o.brandColor ?? o.accentColor) : M(void 0);
        }, [o]),
        (0, l.useEffect)(() => {
          (async () => {
            try {
              await (0, h.syncTokenWithMain)();
            } finally {
              q(!0);
            }
          })();
        }, []),
        (0, l.useEffect)(
          () => () => {
            M(void 0);
          },
          [],
        ),
        (0, l.useEffect)(() => {
          const e = async (e, t) => {
              const { sessionId: n, options: r } = t;
              console.log("🎵 Получена команда запуска захвата аудио:", n);
              try {
                const e = await k.default.startCapture(n, r);
                e.success
                  ? console.log("✅ AudioLoopbackCapture запущен успешно")
                  : console.error("❌ Ошибка запуска AudioLoopbackCapture:", e.error);
              } catch (e) {
                console.error("❌ Исключение при запуске AudioLoopbackCapture:", e);
              }
            },
            t = async (e, t) => {
              const { sessionId: n } = t;
              console.log("🛑 Получена команда остановки захвата аудио:", n);
              try {
                const e = await k.default.stopCapture();
                e.success
                  ? console.log("✅ AudioLoopbackCapture остановлен успешно")
                  : console.error("❌ Ошибка остановки AudioLoopbackCapture:", e.error);
              } catch (e) {
                console.error("❌ Исключение при остановке AudioLoopbackCapture:", e);
              }
            },
            n = (e, t) => {
              if (L && t.sessionId && t.audioData) {
                const e = new Uint8Array(t.audioData),
                  n = {
                    sessionId: t.sessionId,
                    data: e,
                    format: "pcm",
                    isLast: !1,
                    speaker: "interviewer",
                  };
                L.sendChunk("sendSpeakerChunk", n);
              }
            },
            r = async (e, t) => {
              (console.error("Получено событие ошибки авторизации от main процесса:", t),
                await (0, m.handleAuthError)(t.error, {
                  navigate: X,
                  redirectUrl: "/setup",
                  resetWindowSettings: !0,
                  skipLogoutCall: !0,
                }));
            };
          if (window.api && window.api.ipcRenderer)
            return (
              window.api.ipcRenderer.on("start-audio-loopback-capture", e),
              window.api.ipcRenderer.on("stop-audio-loopback-capture", t),
              window.api.ipcRenderer.on("audio-loopback-data-from-main", n),
              window.api.ipcRenderer.on("auth:error", r),
              () => {
                (window.api.ipcRenderer.removeListener("start-audio-loopback-capture", e),
                  window.api.ipcRenderer.removeListener("stop-audio-loopback-capture", t),
                  window.api.ipcRenderer.removeListener("audio-loopback-data-from-main", n),
                  window.api.ipcRenderer.removeListener("auth:error", r));
              }
            );
        }, []),
        (0, l.useEffect)(() => {
          let t;
          try {
            (0, N.setupGlobalErrorHandlers)();
          } catch (e) {
            console.error("❌ Failed to setup global error handlers:", e);
          }
          window.api?.mainProcess?.onLog &&
            (t = window.api.mainProcess.onLog((e) => {
              if (e.message && "undefined" !== e.message && "" !== e.message.trim())
                try {
                  const t = console[e.level] || console.log;
                  void 0 !== e.data ? t(`[Main] ${e.message}`, e.data) : t(`[Main] ${e.message}`);
                } catch (t) {
                  console.log(`[Main] ${e.message}`);
                }
            }));
          try {
            (0, B.trackNavigation)("page_view", "app_startup");
          } catch (e) {
            console.error("❌ Failed to track app start:", e);
          }
          return (
            (async () => {
              const { user: t, token: n } = await (0, m.getUserData)();
              (console.log("useEffect в App.tsx", t, n),
                t && n
                  ? (D(t),
                    U(n),
                    (0, B.setUserContext)({
                      id: t.id,
                      email: t.email || "",
                      name: t.name || "",
                      platform: "electron",
                    }),
                    (0, I.setSentryReplayUser)({
                      id: t.id,
                      email: t.email,
                      name: t.name,
                      platform: "electron",
                    }),
                    se())
                  : j(!1),
                (0, R.logStatsigEvent)("app_open", void 0, {
                  initial_path: window.location.pathname,
                  initial_hash: window.location.hash,
                  window_type: e
                    ? "suggestion"
                    : window.location.hash.startsWith("#/sessions") ||
                        window.location.hash.startsWith("#/session/")
                      ? "sessions"
                      : "main",
                  is_authenticated: Boolean(t),
                }));
            })(),
            () => {
              t && t();
            }
          );
        }, [t]),
        (0, l.useEffect)(() => {
          const e = setInterval(async () => {
            const { token: e } = await (0, m.getUserData)();
            if (e && e.expiresAt) {
              const n = new Date(),
                r = new Date(e.expiresAt).getTime() - n.getTime(),
                o = Math.floor(r / 6e4);
              o <= 5 && o > 0
                ? (console.log(`Токен истекает через ${o} минут`),
                  (0, T.showToast)(t("session.expiringMinutes", { minutes: o }), "error"))
                : r <= 0 &&
                  (console.log("Токен истек, выполняем автоматический выход"),
                  (0, T.showToast)(t("session.expired"), "error"),
                  await (0, m.handleAuthError)(null, {
                    navigate: X,
                    redirectUrl: "/setup",
                    resetWindowSettings: !0,
                    onLogout: () => {
                      (D(null), U(null));
                    },
                  }));
            }
          }, 6e4);
          return () => clearInterval(e);
        }, [X]),
        (0, l.useEffect)(() => {
          const e = (e) => {
            const { expiresAt: n } = e.detail,
              r = new Date(),
              o = new Date(n).getTime() - r.getTime(),
              i = Math.floor(o / 6e4);
            i > 0 &&
              (0, T.showToast)(t("session.expiringMinutesRecommend", { minutes: i }), "error");
          };
          return (
            window.addEventListener("tokenExpiringSoon", e),
            () => window.removeEventListener("tokenExpiringSoon", e)
          );
        }, []));
      const se = async () => {
          try {
            const e = "true" === localStorage.getItem("isSetupCompleted"),
              t = await window.api.settings.getDeviceSettings();
            if (t.success && t.settings) {
              H(t.settings);
              const { microphone: n, permissions: r } = t.settings;
              e
                ? (console.log("Настройка уже была проведена ранее, пропускаем экран настройки"),
                  K(!1))
                : (n.deviceId && r.mic && r.screen) ||
                  (console.log("79 строка, setNeedsDeviceSetup(true)"), K(!0));
            } else
              e
                ? (console.log("Настройка уже была проведена ранее, пропускаем экран настройки"),
                  K(!1))
                : (console.log("81 строка, setNeedsDeviceSetup(true)"), K(!0));
          } catch (e) {
            (console.error("Error checking device settings:", e),
              "true" === localStorage.getItem("isSetupCompleted")
                ? (console.log("Настройка уже была проведена ранее, пропускаем экран настройки"),
                  K(!1))
                : (console.log("84 строка, setNeedsDeviceSetup(true)"), K(!0)));
          } finally {
            j(!1);
          }
        },
        [le, ce] = (0, l.useState)(null);
      ((0, l.useEffect)(() => {
        (async () => {
          try {
            const e = "true" === localStorage.getItem("autoDetectionEnabled");
            (await window.api.settings.setAutoDetectionEnabled(e),
              console.log(
                `🔄 [App] Настройка автораспознавания синхронизирована с main процессом: ${e}`,
              ));
          } catch (e) {
            console.error("Ошибка синхронизации настройки автораспознавания:", e);
          }
        })();
      }, []),
        (0, l.useEffect)(() => {
          const e = Z.pathname + Z.hash,
            t = e.includes("setup")
              ? "setup"
              : e.includes("live-widget")
                ? "live_widget"
                : e.includes("suggestion")
                  ? "suggestion"
                  : e.includes("transcription")
                    ? "transcription"
                    : e.includes("audio-test")
                      ? "audio_test"
                      : e.includes("update-notification")
                        ? "update_notification"
                        : "home";
          (0, B.trackNavigation)("page_view", t);
        }, [Z]));
      const de = (0, l.useCallback)(() => {
        try {
          (localStorage.removeItem("user"), localStorage.removeItem("token"));
        } catch (e) {
          console.warn("Не удалось очистить localStorage при выходе:", e);
        }
        (D(null), U(null), $(!1), j(!1), ae || e || X("/setup", { replace: !0 }));
      }, [ae, e, X]);
      return (
        (0, l.useEffect)(
          () => (
            window.addEventListener("auth:logout-complete", de),
            () => {
              window.removeEventListener("auth:logout-complete", de);
            }
          ),
          [de],
        ),
        (0, l.useEffect)(() => {
          const e = (e) => {
            if (e.key && "token" !== e.key && "user" !== e.key) return;
            if (null !== e.newValue) return;
            const t = localStorage.getItem("user"),
              n = localStorage.getItem("token");
            (t && n) || de();
          };
          return (
            window.addEventListener("storage", e),
            () => {
              window.removeEventListener("storage", e);
            }
          );
        }, [de]),
        (0, l.useEffect)(() => {
          const e = (e, t) => {
            const n = "ru" === t ? "ru" : "en";
            u.default.changeLanguage(n);
          };
          return (
            window.api?.ipcRenderer?.on?.("language:changed", e),
            () => {
              window.api?.ipcRenderer?.removeListener?.("language:changed", e);
            }
          );
        }, []),
        console.log("needsDeviceSetup в App.tsx, url", Q, window.location.hash),
        console.log("isSuggestionWindow в App.tsx", e),
        console.log("window.location.hash в App.tsx", window.location.hash),
        e
          ? (0, s.jsx)(N.ErrorBoundary, {
              children: (0, s.jsxs)(c.Routes, {
                children: [
                  (0, s.jsx)(c.Route, { path: "/suggestion", element: (0, s.jsx)(b.default, {}) }),
                  (0, s.jsx)(c.Route, { path: "*", element: (0, s.jsx)(P, { to: "/suggestion" }) }),
                ],
              }),
            })
          : re
            ? (0, s.jsx)(N.ErrorBoundary, {
                children: (0, s.jsxs)(c.Routes, {
                  children: [
                    (0, s.jsx)(c.Route, {
                      path: "/transcription",
                      element: (0, s.jsx)(_.default, {}),
                    }),
                    (0, s.jsx)(c.Route, {
                      path: "*",
                      element: (0, s.jsx)(P, { to: "/transcription" }),
                    }),
                  ],
                }),
              })
            : ae
              ? (0, s.jsx)(N.ErrorBoundary, {
                  children: (0, s.jsxs)(c.Routes, {
                    children: [
                      (0, s.jsx)(c.Route, {
                        path: "/sessions",
                        element: (0, s.jsx)(C.default, {}),
                      }),
                      (0, s.jsx)(c.Route, {
                        path: "/session/:sessionId",
                        element: (0, s.jsx)(E.default, {}),
                      }),
                      (0, s.jsx)(c.Route, {
                        path: "*",
                        element: (0, s.jsx)(P, { to: "/sessions" }),
                      }),
                    ],
                  }),
                })
              : !F || ee || te || ne
                ? oe
                  ? (0, s.jsx)(N.ErrorBoundary, {
                      children: (0, s.jsxs)(c.Routes, {
                        children: [
                          (0, s.jsx)(c.Route, {
                            path: "/update-notification",
                            element: (0, s.jsx)(g.default, {}),
                          }),
                          (0, s.jsx)(c.Route, {
                            path: "*",
                            element: (0, s.jsx)(P, { to: "/update-notification" }),
                          }),
                        ],
                      }),
                    })
                  : ne
                    ? (0, s.jsx)(N.ErrorBoundary, {
                        children: (0, s.jsxs)(c.Routes, {
                          children: [
                            (0, s.jsx)(c.Route, {
                              path: "/settings",
                              element: (0, s.jsx)(x.default, {}),
                            }),
                            (0, s.jsx)(c.Route, {
                              path: "*",
                              element: (0, s.jsx)(P, { to: "/settings" }),
                            }),
                          ],
                        }),
                      })
                    : te
                      ? (0, s.jsx)(N.ErrorBoundary, {
                          children: (0, s.jsxs)(c.Routes, {
                            children: [
                              (0, s.jsx)(c.Route, {
                                path: "/shortcuts-settings",
                                element: (0, s.jsx)(v.default, {}),
                              }),
                              (0, s.jsx)(c.Route, {
                                path: "*",
                                element: (0, s.jsx)(P, { to: "/shortcuts-settings" }),
                              }),
                            ],
                          }),
                        })
                      : ee
                        ? (0, s.jsx)(N.ErrorBoundary, {
                            children: (0, s.jsxs)(c.Routes, {
                              children: [
                                (0, s.jsx)(c.Route, {
                                  path: "/toolbar-settings",
                                  element: (0, s.jsx)(S.default, {}),
                                }),
                                (0, s.jsx)(c.Route, {
                                  path: "*",
                                  element: (0, s.jsx)(P, { to: "/toolbar-settings" }),
                                }),
                              ],
                            }),
                          })
                        : V
                          ? (0, s.jsx)(N.ErrorBoundary, {
                              children: (0, s.jsx)("div", {
                                className: "container",
                                children: (0, s.jsx)("div", {
                                  className: ie ? "content-live-widget" : "content",
                                  children: (0, s.jsxs)(c.Routes, {
                                    children: [
                                      (0, s.jsx)(c.Route, {
                                        path: "/suggestion",
                                        element: (0, s.jsx)(b.default, {}),
                                      }),
                                      (0, s.jsx)(c.Route, {
                                        path: "/setup",
                                        element: (0, s.jsx)(p.default, {
                                          onComplete: () => {
                                            const e = new Date().toISOString();
                                            (console.log(
                                              `🔄 [${e}] handleSetupComplete triggered in App.tsx`,
                                            ),
                                              console.log(
                                                `📍 [${e}] Current URL: ${window.location.href}`,
                                              ),
                                              console.log(`⚙️ [${e}] setNeedsDeviceSetup(false)`),
                                              K(!1),
                                              localStorage.setItem("isSetupCompleted", "true"),
                                              console.log(
                                                `💾 [${e}] localStorage.setItem('isSetupCompleted', 'true')`,
                                              ),
                                              console.log(
                                                `🧭 [${e}] Calling navigate('/live-widget', { replace: true })`,
                                              ),
                                              console.log(
                                                `📊 [${e}] App state: needsDeviceSetup=${Q}, user=${!!a}`,
                                              ),
                                              X("/live-widget", { replace: !0 }),
                                              console.log(`✅ [${e}] navigate() call completed`),
                                              window.api?.sessions?.show &&
                                                window.api.sessions.show().catch((e) => {
                                                  console.error(
                                                    "Ошибка при открытии окна сессий:",
                                                    e,
                                                  );
                                                }));
                                          },
                                        }),
                                      }),
                                      (0, s.jsx)(c.Route, {
                                        path: "/audio-test",
                                        element: (0, s.jsx)(y.default, {}),
                                      }),
                                      (0, s.jsx)(c.Route, {
                                        path: "/toolbar-settings",
                                        element: (0, s.jsx)(S.default, {}),
                                      }),
                                      (0, s.jsx)(c.Route, {
                                        path: "/context-setup",
                                        element: (0, s.jsx)(f.default, {
                                          children: (0, s.jsx)(w.default, {
                                            onComplete: () => X("/live-widget"),
                                            onCancel: () => X("/live-widget"),
                                          }),
                                        }),
                                      }),
                                      (0, s.jsx)(c.Route, {
                                        path: "/live-widget",
                                        element: Q
                                          ? (0, s.jsx)(P, { to: "/setup" })
                                          : (0, s.jsx)(f.default, {
                                              children: (0, s.jsx)("div", {
                                                className: "live-widget-container",
                                                children: (0, s.jsx)(A.default, {
                                                  onSessionStateChange: (e) => {
                                                    W(e);
                                                  },
                                                  onSessionIdChange: (e) => {
                                                    ce(e);
                                                  },
                                                }),
                                              }),
                                            }),
                                      }),
                                      (0, s.jsx)(c.Route, {
                                        path: "/",
                                        element: a
                                          ? Q
                                            ? (0, s.jsx)(P, { to: "/setup" })
                                            : (0, s.jsx)(P, { to: "/live-widget" })
                                          : (0, s.jsx)(P, { to: "/setup" }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            })
                          : null
                : (0, s.jsx)(N.ErrorBoundary, {
                    children: (0, s.jsx)("div", {
                      className: "container",
                      children: (0, s.jsx)("div", {
                        className: "content flex align-center justify-between",
                        children: (0, s.jsxs)("div", {
                          className: "loading-container",
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "16px",
                            padding: "20px",
                          },
                          children: [
                            (0, s.jsx)("div", {
                              className: "loading",
                              children: t("common.loading"),
                            }),
                            (0, s.jsx)("div", {
                              style: {
                                width: "200px",
                                height: "4px",
                                backgroundColor: "#333",
                                borderRadius: "2px",
                                overflow: "hidden",
                              },
                              children: (0, s.jsx)("div", {
                                style: {
                                  height: "100%",
                                  backgroundColor: "#555",
                                  borderRadius: "2px",
                                  animation: "loadingProgress 8s linear infinite",
                                },
                              }),
                            }),
                            (0, s.jsx)("div", {
                              style: { fontSize: "12px", color: "#888" },
                              children: t("interview.connectingToServer"),
                            }),
                          ],
                        }),
                      }),
                    }),
                  })
      );
    }));
}

export default AppWebpackModule;
