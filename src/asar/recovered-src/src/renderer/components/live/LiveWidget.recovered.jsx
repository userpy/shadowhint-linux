/*
 * Recovered from renderer webpack module 59781.
 * Inferred module name: LiveWidget.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 20552 (I18nSetup)
 * - 723
 * - 33871
 * - 59134
 * - 45312
 * - 88635
 * - 24189
 * - 80367
 * - 86064
 * - 8502
 * - 19234 (SpeechService)
 * - 62254 (AuthService)
 * - 55644 (SettingsIcon)
 * - 49824
 * - 48679
 * - 33897 (StreamingMessage)
 * - 56728
 * - 8386
 * - 37279
 * - 57554 (MiniCombinedWaveform)
 * - 65356 (AnalyticsService)
 * - 57128 (Toast)
 * - 93197 (StatsigClient)
 * - 70541 (IconAsset)
 * - 64521 (ExamEasyAsset)
 * - 33894 (PsykitAsset)
 */

function LiveWidgetWebpackModule(e, t, n) {
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
    d = a(n(20552));
  (n(723), n(33871));
  const u = i(n(59134));
  (n(45312), n(88635), n(24189), n(80367), n(86064));
  const p = n(42e3),
    A = n(8502),
    g = a(n(19234)),
    m = n(62254),
    f = a(n(55644)),
    h = n(49824),
    b = n(48679),
    _ = n(33897),
    C = n(56728),
    E = n(8386),
    y = a(n(37279)),
    v = a(n(57554)),
    S = n(65356),
    x = n(57128),
    w = n(93197),
    k = (e) => Math.min(Math.max(Math.round(e), 40), 100),
    T = a(n(70541)),
    B = a(n(64521)),
    I = a(n(33894)),
    R = () =>
      (0, s.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        children: [
          (0, s.jsx)("rect", {
            x: "2",
            y: "2.5",
            width: "12",
            height: "11",
            rx: "2",
            stroke: "currentColor",
            strokeWidth: "1.2",
            fill: "none",
          }),
          (0, s.jsx)("path", {
            d: "M5 5h2",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "round",
          }),
          (0, s.jsx)("path", {
            d: "M5 11h2",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "round",
          }),
          (0, s.jsx)("path", {
            d: "M9 5h2",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "round",
          }),
          (0, s.jsx)("path", {
            d: "M9 11h2",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "round",
          }),
        ],
      }),
    N = () =>
      (0, s.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        "aria-hidden": "true",
        children: [
          (0, s.jsx)("rect", {
            x: "2",
            y: "2.5",
            width: "12",
            height: "11",
            rx: "2",
            stroke: "currentColor",
            strokeWidth: "1.2",
            fill: "none",
          }),
          (0, s.jsx)("rect", {
            x: "4.5",
            y: "5",
            width: "7",
            height: "4.5",
            rx: "1",
            stroke: "currentColor",
            strokeWidth: "1.2",
            fill: "currentColor",
            fillOpacity: "0.15",
          }),
        ],
      }),
    O = new b.AudioStreamer();
  ((window.globalAudioStreamer = O),
    (t.default = ({
      onSettingsClick: e,
      onStatusUpdate: t,
      onSessionStateChange: n,
      onSessionIdChange: r,
    }) => {
      const { t: o } = (0, c.useTranslation)(),
        [i, a] = (0, l.useState)(null),
        [b, D] = (0, l.useState)(!1),
        [M, P] = (0, l.useState)(!1),
        [L, z] = (0, l.useState)(""),
        U = () =>
          L ? o("liveWidget.personalizedWelcome", { userName: L }) : o("liveWidget.genericWelcome"),
        F = (0, l.useCallback)(
          (e) => {
            if (!e) return !1;
            const t = o("liveWidget.personalizedWelcome", { userName: L || "" }),
              n = o("liveWidget.genericWelcome");
            return (
              e === t ||
              e === n ||
              e.startsWith(o("liveWidget.hello") + ",") ||
              e.startsWith(o("liveWidget.helloI"))
            );
          },
          [o, L],
        ),
        [j, G] = (0, l.useState)(U()),
        [W, Y] = (0, l.useState)("idle"),
        [H, V] = (0, l.useState)(o("liveWidget.ready")),
        [q, Q] = (0, l.useState)(!1),
        [$, K] = (0, l.useState)(""),
        X = (0, l.useRef)(""),
        Z = (0, l.useRef)(!1),
        [J, ee] = (0, l.useState)(!1),
        [te, ne] = (0, l.useState)(!1),
        [re, oe] = (0, l.useState)(""),
        [ie, ae] = (0, l.useState)(0),
        [se, le] = (0, l.useState)(!1),
        [ce, de] = (0, l.useState)(!1),
        [ue, pe] = (0, l.useState)(!1),
        [Ae, ge] = (0, l.useState)(!1),
        [me, fe] = (0, l.useState)(!0),
        [he, be] = (0, l.useState)(!1),
        [_e, Ce] = (0, l.useState)(!1),
        Ee = !1,
        [ye, ve] = (0, l.useState)(!0),
        [Se, xe] = (0, l.useState)(!1),
        [we, ke] = (0, l.useState)(!0),
        Te = (0, h.useNavigate)();
      ((0, l.useEffect)(() => {
        (async () => {
          try {
            const e = await window.api?.smartModel?.getDefault();
            "boolean" == typeof e && xe(e);
          } catch {}
        })();
      }, []),
        (0, l.useEffect)(() => {
          window.currentSessionId = $ || "";
          try {
            window.api?.session?.setCurrentId && window.api.session.setCurrentId($ || "");
          } catch {}
        }, [$]),
        (0, l.useEffect)(() => {
          const e = (e, t) => {
            (console.log(`[LiveWidget] smartModel:changed received: ${t}`), xe(t));
          };
          return (
            window.ipc?.on("smartModel:changed", e),
            () => {
              window.ipc?.removeListener("smartModel:changed", e);
            }
          );
        }, []),
        (0, l.useEffect)(() => {
          const e = (e, t) => {
            (qt(t), localStorage.setItem("autoDetectionEnabled", String(t)));
          };
          return (
            window.ipc?.on("autoDetection:changed", e),
            () => {
              window.ipc?.removeListener("autoDetection:changed", e);
            }
          );
        }, []),
        (0, l.useEffect)(() => {
          (async () => {
            try {
              if (window.api?.invoke) {
                const e = await window.api.invoke("config:getVariant");
                a(e);
              }
            } catch (e) {
              console.error("Ошибка загрузки конфигурации варианта для LiveWidget:", e);
            }
          })();
        }, []));
      const Be = i?.productName,
        Ie = (0, l.useMemo)(() => {
          const e = i?.variant;
          switch (e) {
            case "deskhint":
            case "shadowhint":
              return T.default;
            case "exameasy":
              return B.default;
            case "psykit":
              return I.default;
            default:
              return null;
          }
        }, [i]),
        Re = Be;
      ((0, l.useEffect)(() => {
        X.current = $;
      }, [$]),
        (0, l.useEffect)(() => {
          Z.current = b;
        }, [b]));
      const [Ne, Oe] = (0, l.useState)(""),
        [De, Me] = (0, l.useState)(80),
        [, Pe] = (0, l.useState)([]),
        [Le, ze] = (0, l.useState)([]),
        [Ue, Fe] = (0, l.useState)(""),
        [je, Ge] = (0, l.useState)(!1),
        [We, Ye] = (0, l.useState)(!1),
        [He, Ve] = (0, l.useState)(!1),
        [qe, Qe] = (0, l.useState)(!1),
        [$e, Ke] = (0, l.useState)([]),
        [Xe, Ze] = (0, l.useState)(!0),
        [Je, et] = (0, l.useState)(!0),
        [tt, nt] = (0, l.useState)(0),
        [rt, ot] = (0, l.useState)(0),
        it = (0, l.useRef)(null);
      (0, l.useEffect)(() => {
        (async () => {
          let e = "ru";
          try {
            const t = localStorage.getItem("preferredLanguage");
            t && (e = t);
          } catch (e) {}
          (d.default.changeLanguage(e),
            localStorage.setItem("preferredLanguage", e),
            window.api?.settings?.setPreferredLanguage &&
              window.api.settings.setPreferredLanguage(e).catch(() => {}));
        })();
      }, []);
      const at = (0, l.useRef)(new Set()),
        [st, lt] = (0, l.useState)(null),
        [ct, dt] = (0, l.useState)(null),
        ut = (0, l.useMemo)(
          () =>
            navigator.userAgent.includes("Windows") ||
            navigator.platform.toLowerCase().includes("win"),
          [],
        ),
        pt = (0, l.useMemo)(
          () =>
            navigator.userAgent.includes("Mac") || navigator.platform.toLowerCase().includes("mac"),
          [],
        ),
        [At, gt] = (0, l.useState)(""),
        [mt, ft] = (0, l.useState)(90),
        [ht, bt] = (0, l.useState)(!1),
        _t = (0, l.useRef)(90),
        [Ct, Et] = (0, l.useState)(() => {
          try {
            return "partial" === localStorage.getItem("screenshotMode") ? "partial" : "fullscreen";
          } catch {
            return "fullscreen";
          }
        }),
        yt = (0, l.useMemo)(
          () =>
            o(
              "partial" === Ct
                ? "liveWidget.screenshotModeShortPartial"
                : "liveWidget.screenshotModeShortFullscreen",
            ),
          [Ct, o],
        );
      (0, l.useEffect)(() => {
        (async () => {
          if (!window.api?.suggestion?.getOpacity) return ((_t.current = mt), void bt(!0));
          try {
            const e = await window.api.suggestion.getOpacity(),
              t = e?.opacity;
            if (e?.success && "number" == typeof t) {
              const e = k(t);
              ((_t.current = e), ft((t) => (t === e ? t : e)));
            } else _t.current = mt;
          } catch (e) {
            (console.warn("Не удалось получить прозрачность окна подсказки из main процесса:", e),
              (_t.current = mt));
          } finally {
            bt(!0);
          }
        })();
      }, []);
      const vt = (0, l.useCallback)(
          (e, n) => {
            (Y(e), V(n), "error" !== e && st && lt(null), t && t(e, n));
          },
          [t, st],
        ),
        St = (0, l.useRef)(vt);
      ((0, l.useEffect)(() => {
        St.current = vt;
      }, [vt]),
        (0, l.useCallback)(async () => {
          (vt("idle", o("liveWidget.goingToSettings")), G(o("liveWidget.redirectToSettings")));
          try {
            localStorage.setItem("openingSettings", "true");
          } catch (e) {
            console.error("Не удалось сохранить флаг открытия настроек:", e);
          }
          const t = window.api?.window?.openSetup;
          if (t)
            try {
              const n = await t();
              return void (n && !1 === n.success && e && e());
            } catch (e) {
              console.error("Ошибка при открытии окна настроек:", e);
            }
          e && e();
        }, [o, e, vt, G]));
      const xt = 18e5,
        wt = 1e3,
        kt = (0, l.useRef)(0),
        Tt = (0, l.useRef)(0),
        Bt = (0, C.useSuggestionWindow)({
          onError: (e) => {
            console.error("[SuggestionWindow] Error:", e);
          },
          debug: !0,
        }),
        It = 15e5,
        Rt = 174e4,
        Nt = (0, l.useRef)(Date.now()),
        Ot = (0, l.useRef)({ warning5min: !1, warning1min: !1 }),
        [Dt, Mt] = (0, l.useState)(""),
        [Pt, Lt] = (0, l.useState)("both"),
        [zt, Ut] = (0, l.useState)(""),
        [Ft, jt] = (0, l.useState)(!1),
        [Gt, Wt] = (0, l.useState)(null),
        [Yt, Ht] = (0, l.useState)(null),
        [Vt, qt] = (0, l.useState)(() => {
          try {
            return "true" === localStorage.getItem("autoDetectionEnabled");
          } catch {
            return !1;
          }
        }),
        Qt = (0, l.useRef)(mt);
      (0, l.useEffect)(() => {
        Qt.current = mt;
      }, [mt]);
      const $t = (0, l.useCallback)(
          (e) => {
            if (window.api?.ipcRenderer?.send) {
              const t = { screenshotMode: Ct, autoDetectionEnabled: Vt, audioSource: Pt, ...e },
                n = e?.suggestionOpacity;
              ("number" == typeof n
                ? (t.suggestionOpacity = k(n))
                : ht && (t.suggestionOpacity = Qt.current),
                window.api.ipcRenderer.send("toolbar-settings:update-state", t));
            }
          },
          [Vt, Pt, ht, Ct],
        ),
        Kt =
          ((0, l.useMemo)(() => At || o("liveWidget.ready"), [At, o]),
          (0, l.useCallback)((e) => {
            gt(e);
          }, []),
          (0, l.useCallback)(() => {
            gt("");
          }, []),
          (0, l.useCallback)(
            async (e) => {
              try {
                await navigator.mediaDevices
                  .getUserMedia({ audio: !0 })
                  .then((e) => e.getTracks().forEach((e) => e.stop()))
                  .catch(() => {});
                const t = (await navigator.mediaDevices.enumerateDevices()).filter(
                  (e) => "audioinput" === e.kind,
                );
                if (!e) return o("titleBar.defaultMicrophone");
                const n = t.find((t) => t.deviceId === e);
                return n && n.label ? n.label : o("titleBar.defaultMicrophone");
              } catch (e) {
                return (
                  console.error("Ошибка получения названия микрофона:", e),
                  o("titleBar.microphone")
                );
              }
            },
            [o],
          )),
        Xt = (0, l.useCallback)(
          async (e) => {
            Mt(e);
            const t = await Kt(e);
            Ut(t);
          },
          [Kt],
        ),
        Zt = (0, l.useCallback)(
          async (e = "auto") => {
            const t = window?.api?.window;
            if (!t || "function" != typeof t.setHeightByElement) return;
            const n = !!ct,
              r = "expanded-support" === e || ("collapsed" !== e && (_e || n)),
              o = r ? (n ? 420 : 262) : Ft && b && !r ? 300 : 40;
            console.log("[LiveWidget] updateWindowLayout", {
              mode: e,
              premium: r,
              isTimeLimitReached: _e,
              hasAudioTroubleshooting: n,
              targetHeight: o,
            });
            try {
              const e = r
                ? n
                  ? "audio-troubleshooting-card"
                  : "support-card"
                : "live-widget-input";
              (await t.setHeightByElement(o, e),
                console.log("[LiveWidget] setHeightByElement called", {
                  targetHeight: o,
                  sourceId: e,
                }));
            } catch (e) {
              console.warn("Не удалось обновить высоту окна:", e);
            }
          },
          [ct, Ft, _e, b],
        ),
        Jt = (0, l.useCallback)(
          async (e, t) =>
            !(
              !ut ||
              _e ||
              (dt({ kind: e, message: t }),
              lt(null),
              G(""),
              vt("warning", ""),
              await Zt("expanded-support"),
              0)
            ),
          [ut, _e, vt, Zt],
        ),
        en = (0, l.useCallback)(() => {
          (dt(null), Zt("collapsed"));
        }, [Zt]),
        tn = (0, l.useCallback)(
          (e) => {
            if (!ut) return !1;
            const t = (e || "").toLowerCase();
            return (
              t.includes("микрофон") ||
              t.includes("microphone") ||
              t.includes("audio source") ||
              t.includes("notreadableerror") ||
              t.includes("исключительный доступ") ||
              t.includes("exclusive") ||
              t.includes("permission denied by system") ||
              t.includes("failed to receive first audio chunk") ||
              t.includes("audio chunk") ||
              t.includes("loopback") ||
              t.includes("speaker") ||
              t.includes("динамик") ||
              t.includes("system audio") ||
              t.includes("системное аудио")
            );
          },
          [ut],
        ),
        nn = (0, l.useCallback)((e) => {
          const t = (e || "").toLowerCase();
          return t.includes("loopback") ||
            t.includes("system audio") ||
            t.includes("системное аудио") ||
            t.includes("speaker") ||
            t.includes("динамик") ||
            t.includes("failed to receive first audio chunk") ||
            t.includes("audio chunk")
            ? "system-audio"
            : "microphone";
        }, []);
      ((0, l.useEffect)(() => {
        Zt();
      }, [Zt]),
        (0, l.useEffect)(() => {
          b && Zt();
        }, [Ft, b, Zt]),
        (0, l.useEffect)(() => {}, [Ft, b, Zt]));
      const rn = (0, l.useCallback)(async () => {
          try {
            await window.api.settings.openSettingsWindow("audio");
          } catch (e) {
            console.error("Ошибка открытия настроек аудио:", e);
          }
        }, []),
        on = (0, l.useCallback)(async () => {
          const e = ut
            ? "system-audio" === ct?.kind
              ? "ms-settings:sound"
              : "ms-settings:privacy-microphone"
            : pt
              ? "x-apple.systempreferences:com.apple.preference.security?Privacy_Microphone"
              : "";
          try {
            if (e) {
              const t = await window.api.shell.openExternal(e);
              if (t?.success) return;
            }
          } catch (e) {
            console.error("Ошибка открытия системных настроек аудио:", e);
          }
          await rn();
        }, [ct?.kind, rn, pt, ut]),
        an = (0, l.useCallback)(async () => {
          const e = i?.telegramSupport || "https://t.me/shadowhintsupport";
          try {
            if (window.api?.shell?.openExternal) {
              const t = await window.api.shell.openExternal(e);
              if (!t.success) throw new Error(t.error || "Failed to open support link");
            } else window.open(e, "_blank", "noopener");
          } catch (e) {
            (console.error("Ошибка открытия техподдержки:", e),
              (0, x.showToast)(o("common.error"), "error"));
          }
        }, [o, i?.telegramSupport]);
      ((0, l.useEffect)(() => {
        (async () => {
          const e = await Kt(Dt);
          Ut(e);
        })();
      }, [Kt, Dt]),
        (0, l.useEffect)(() => {
          const e = async (e, t) => {
            const n = t?.microphone?.deviceId ?? t?.deviceId;
            n && (await Xt(n));
          };
          return (
            window.api?.ipcRenderer?.on("settings:device-updated", e),
            window.api?.ipcRenderer?.on("audio:microphoneChangeRequested", e),
            () => {
              (window.api?.ipcRenderer?.removeListener?.("settings:device-updated", e),
                window.api?.ipcRenderer?.removeListener?.("audio:microphoneChangeRequested", e));
            }
          );
        }, [Xt]),
        (0, l.useEffect)(
          () => () => {
            const e = window.globalAudioStreamer;
            e?.stopMicrophonePreview && e.stopMicrophonePreview().catch(() => {});
          },
          [],
        ),
        (0, l.useEffect)(() => {
          ht && $t();
        }, [ht, $t]));
      const sn = (0, l.useRef)(""),
        ln = (0, l.useRef)(""),
        cn = (0, l.useRef)([]),
        dn = (0, l.useRef)(!1),
        un = (0, l.useRef)(null),
        pn = (0, l.useRef)(""),
        An = (0, l.useRef)(!1),
        gn = (0, l.useRef)(""),
        mn = (0, l.useCallback)((e) => e || "", []),
        fn = (0, l.useRef)(null),
        hn = (0, l.useRef)(null),
        bn = (0, l.useCallback)(() => {
          fn.current && (clearTimeout(fn.current), (fn.current = null));
        }, []),
        _n = (0, l.useCallback)(() => {
          (console.warn("Streaming timeout reached, forcing completion"),
            ge(!1),
            fe(!0),
            (fn.current = null));
        }, [ge, fe]),
        Cn = (0, l.useCallback)(() => {
          (bn(), (fn.current = setTimeout(_n, 6e4)));
        }, [bn, _n, 6e4]),
        En = (0, l.useCallback)(
          (e) => {
            e ? (ge(!0), Cn()) : (bn(), ge(!1));
          },
          [Cn, bn],
        ),
        yn = (0, l.useCallback)(() => {
          Cn();
        }, [Cn]),
        vn = (0, l.useCallback)(
          (e) => {
            ("string" == typeof e && e.length > 0 && G(e), bn(), ge(!1), fe(!0));
          },
          [bn, ge],
        ),
        [Sn, xn] = ((0, l.useRef)(null), (0, l.useState)([])),
        wn = (0, l.useRef)([]);
      (0, l.useEffect)(() => {
        ((wn.current = Sn),
          console.log(
            "🔄 [userShortcuts STATE] Изменилось состояние userShortcuts:",
            Sn.length,
            "элементов",
          ),
          Sn.length > 0 &&
            (console.log("🔄 [userShortcuts STATE] Первый элемент:", Sn[0]),
            console.log(
              "🔄 [userShortcuts STATE] send_manual:",
              Sn.find((e) => "send_manual" === e.id),
            )));
      }, [Sn]);
      const kn = (0, l.useRef)(null),
        Tn = (0, l.useRef)(null),
        Bn = (0, l.useRef)(null),
        In = (0, l.useCallback)((e) => {
          (null !== Bn.current && cancelAnimationFrame(Bn.current),
            (Bn.current = requestAnimationFrame(() => {
              ((Bn.current = null),
                window.api?.window?.setIgnoreMouseEvents &&
                  !1 !== Tn.current &&
                  (window.api.window.setIgnoreMouseEvents(!1), (Tn.current = !1)));
            })));
        }, []);
      ((0, l.useEffect)(() => {
        Xe && ((Tn.current = null), In(!1));
      }, [Xe, In]),
        (0, l.useEffect)(
          () => (
            In(!1),
            () => {
              (null !== Bn.current && (cancelAnimationFrame(Bn.current), (Bn.current = null)),
                In(!1));
            }
          ),
          [In],
        ));
      const Rn = o("liveWidget.stoppingPreviousGeneration");
      ((0, l.useEffect)(() => {
        (!An.current &&
          j &&
          !F(j) &&
          j !== Rn &&
          me &&
          Pe((e) => {
            if (e.length > 0 && e[e.length - 1].text === j) return e;
            const t = [...e, { text: j, timestamp: Date.now() }].slice(-50);
            return (
              console.log("Добавлена новая подсказка в историю, длина истории:", t.length),
              t
            );
          }),
          An.current && (An.current = !1));
      }, [F, j, Rn, me]),
        (0, l.useEffect)(() => {
          n && n(b);
        }, [b, n]),
        (0, l.useEffect)(() => {
          b ||
            _e ||
            (async () => {
              const e = window?.api?.window;
              if (e && "function" == typeof e.setHeightByElement)
                try {
                  await e.setHeightByElement(40, "session-ended");
                } catch (e) {
                  console.warn("Не удалось уменьшить высоту окна после завершения сессии:", e);
                }
            })();
        }, [b]),
        (0, l.useEffect)(() => {
          !b && F(j) && G(U());
        }, [L]),
        (0, l.useEffect)(
          () => () => {
            (console.log("🧹 LiveWidget размонтируется, отключаем click-through"),
              window.api?.window?.setIgnoreMouseEvents &&
                window.api.window.setIgnoreMouseEvents(!1));
          },
          [],
        ));
      const Nn = (0, l.useCallback)(() => {
          const e = Ot.current.warning5min || Ot.current.warning1min;
          ((Nt.current = Date.now()),
            e && (0, x.showToast)(o("liveWidget.sessionExtended"), "success"),
            (Ot.current = { warning5min: !1, warning1min: !1 }));
        }, []),
        On = (0, l.useCallback)(async (e) => {
          try {
            const t = window?.api?.window;
            if (!t) return;
            const n = t["show" === e ? "showToolbarSettings" : "hideToolbarSettings"];
            "function" == typeof n && (await Promise.resolve(n.call(t)));
          } catch (e) {
            console.error("Ошибка вызова окна настроек панели:", e);
          }
        }, []),
        Dn = (0, l.useCallback)(
          (e) => {
            Q((t) => (t ? (e?.skipRemote || On("hide"), !1) : t));
          },
          [On],
        ),
        Mn = (0, l.useCallback)(() => {
          (Nn(), q ? Dn() : (Q(!0), On("show")));
        }, [On, Dn, q, Nn]),
        Pn = (0, l.useCallback)(
          (e, t) => {
            Nn();
            const n = e();
            n && "function" == typeof n.then
              ? n
                  .catch((e) => console.error("Toolbar action error:", e))
                  .finally(() => {
                    t?.closeAfterAction && Dn();
                  })
              : t?.closeAfterAction && Dn();
          },
          [Dn, Nn],
        );
      (0, l.useEffect)(
        () => (
          (async () => {
            try {
              const e = await (0, m.checkAuthentication)();
              (pe(e),
                e
                  ? vt("idle", o("liveWidget.ready"))
                  : vt("warning", o("liveWidget.loginRequired")));
            } catch (e) {
              (console.error("Authentication check error:", e),
                pe(!1),
                vt("warning", o("liveWidget.loginRequired")));
            }
          })(),
          (async () => {
            try {
              if (window.api?.settings?.getDeviceSettings) {
                const e = await window.api.settings.getDeviceSettings();
                if (e.success && e.settings) {
                  (e.settings.voice &&
                    (Oe(e.settings.voice),
                    console.log("Загружен голос из настроек:", e.settings.voice)),
                    e.settings.output &&
                      "number" == typeof e.settings.output.volume &&
                      (Me(e.settings.output.volume),
                      console.log("Загружена громкость из настроек:", e.settings.output.volume)),
                    e.settings.microphone &&
                      e.settings.microphone.deviceId &&
                      (Mt(e.settings.microphone.deviceId),
                      console.log(
                        "Загружен микрофон из настроек:",
                        e.settings.microphone.deviceId,
                      )));
                  const t = e.settings.audioSource;
                  ("system" !== t && "microphone" !== t && "both" !== t) ||
                    (Lt(t), console.log("Загружен источник звука из настроек:", t));
                }
              }
            } catch (e) {
              console.error("Ошибка при загрузке настроек устройств:", e);
            }
          })(),
          console.log("globalAudioStreamer доступен:", !!window.globalAudioStreamer),
          console.log("getMicAnalyser доступен:", !!window.globalAudioStreamer?.getMicAnalyser),
          console.log(
            "getSpeakerAnalyser доступен:",
            !!window.globalAudioStreamer?.getSpeakerAnalyser,
          ),
          () => {
            (un.current && (un.current(), (un.current = null)), bn());
          }
        ),
        [bn],
      );
      const Ln = (0, l.useCallback)((e) => {
          (hn.current && (clearTimeout(hn.current), (hn.current = null)),
            be(e),
            e &&
              (hn.current = setTimeout(() => {
                (console.log("Buttons timeout reached, enabling buttons"),
                  be(!1),
                  (hn.current = null));
              }, 1e3)));
        }, []),
        zn = (0, l.useCallback)(
          async (e = "button", t) => {
            "auto" === e
              ? (0, S.trackInterview)("session_auto_stopped", {
                  sessionId: $,
                  context: "live_widget",
                  error: t,
                })
              : "hotkey" === e
                ? (0, S.trackFeature)("used", "stop_session_hotkey", { context: "live_widget" })
                : (0, S.trackButtonClick)("stop_session", "live_widget");
            try {
              (ne(!0), vt("active", o("liveWidget.endingSession")));
              const e = await p.sessionAPI.completeSession();
              (console.log("Получен ответ от API completeSession:", e),
                e.success
                  ? ((0, S.trackInterview)("session_completed", { sessionId: $ }),
                    oe(X.current),
                    ae(Date.now()),
                    K(""),
                    r?.(null),
                    D(!1),
                    vt("idle", o("liveWidget.sessionEnded")),
                    G(U()),
                    (cn.current = []),
                    (dn.current = !1),
                    window.speechSynthesis.speaking && window.speechSynthesis.cancel())
                  : e.error && e.error.includes(o("liveWidget.sessionAlreadyCompleted"))
                    ? (K(""), r?.(null), D(!1), vt("idle", o("liveWidget.sessionEnded")), G(U()))
                    : vt(
                        "warning",
                        `${o("common.warning")}: ${e.error || o("liveWidget.sessionEndError")}`,
                      ));
            } catch (e) {
              (vt(
                "error",
                `${o("common.error")}: ${e instanceof Error ? e.message : o("liveWidget.sessionEndGenericError")}`,
              ),
                K(""),
                r?.(null),
                D(!1));
            } finally {
              (ne(!1), bn(), ge(!1));
              try {
                const e = window?.api?.suggestion;
                e?.hideAll && (await e.hideAll());
              } catch (e) {
                console.error("Ошибка при скрытии окон подсказок после завершения сессии:", e);
              }
            }
          },
          [$, r, vt, bn, o],
        ),
        Un = (0, l.useRef)(zn);
      ((0, l.useEffect)(() => {
        Un.current = zn;
      }, [zn]),
        (0, l.useEffect)(() => {
          if (!re || b) return;
          const e = 3e5 - (Date.now() - ie);
          if (e <= 0) return void oe("");
          const t = setTimeout(() => {
            oe("");
          }, e);
          return () => clearTimeout(t);
        }, [re, ie, b]));
      const Fn = (0, l.useCallback)((e, t) => {
          const n = (e || "").toLowerCase(),
            r = (t || "").toLowerCase();
          return (
            "limit_exhausted" === r ||
            "resource_exhausted" === r ||
            n.includes("лимит часов") ||
            n.includes("лимит времени") ||
            n.includes("лимит интервью") ||
            n.includes("лимит") ||
            n.includes("ресурс") ||
            n.includes("resource_exhausted") ||
            n.includes("resource exhausted")
          );
        }, []),
        jn = (0, l.useCallback)(
          async (e) => {
            ((0, w.logStatsigEvent)("app_paywall_shown", e ?? "", { reason: e ?? "" }),
              Ce(!0),
              lt(null),
              G(""));
            try {
              window.api?.suggestion?.closeAll && (await window.api.suggestion.closeAll());
            } catch (e) {
              console.error("Ошибка при закрытии окон подсказок:", e);
            }
            if ((await Zt("expanded-support"), b))
              try {
                await zn("auto", e);
              } catch (e) {
                console.error(
                  "Ошибка при принудительном завершении сессии после исчерпания лимита:",
                  e,
                );
              }
            vt("warning", "");
          },
          [b, zn, vt, Zt],
        );
      ((0, l.useEffect)(() => {
        const e = async (e, t) => {
          console.log("🤖 Получено событие автоматического AI-ответа:", t);
          const n = "true" === localStorage.getItem("autoDetectionEnabled");
          if (
            (console.log(`🔍 [LiveWidget] Проверяем локальную настройку автораспознавания: ${n}`),
            n)
          )
            if (b && $ === t.sessionId) {
              (vt(
                "active",
                o("liveWidget.questionDetected", {
                  confidence: Math.round(100 * t.questionConfidence),
                }),
              ),
                Bt.startGeneration("auto", !1),
                Bt.setUserMessage(t.detectedQuestion),
                En(!0),
                Ln(!0),
                fe(!1),
                G(""),
                (sn.current = ""),
                (ln.current = ""),
                (cn.current = []),
                (dn.current = !1),
                un.current && (un.current(), (un.current = null)));
              try {
                const e = await p.sessionAPI.sendManualMessage(
                  t.sessionId,
                  t.detectedQuestion,
                  Se,
                  !0,
                  (e) => {
                    (yn(),
                      G((t) => {
                        const n = t + e;
                        if (M && Ne) {
                          const e = n.match(/[^.!?]+[.!?]+/g) || [];
                          if (e.length > 0) {
                            const t = e[e.length - 1].trim();
                            t && t !== ln.current && (cn.current.push(t), (ln.current = t));
                          }
                        }
                        return n;
                      }));
                  },
                );
                if (!e.success) throw new Error(e.error || o("liveWidget.answerGenerateError"));
                (vt("idle", o("liveWidget.answerReceived")), vn(e.message));
              } catch (e) {
                console.error("Ошибка при генерации автоматического ответа:", e);
                const t = e instanceof Error ? e.message : String(e);
                (Fn(t, e?.errorType)
                  ? await jn("auto_response_limit")
                  : vt("error", `${o("common.error")}: ${t || o("liveWidget.answerError")}`),
                  fe(!0));
              } finally {
                (bn(), ge(!1));
              }
            } else console.log("Игнорируем событие: сессия не активна или ID не совпадает");
          else
            console.log("🚫 [LiveWidget] Автораспознавание отключено локально, игнорируем событие");
        };
        return (
          window.api?.ipcRenderer?.on && window.api.ipcRenderer.on("auto-ai-response-triggered", e),
          () => {
            window.api?.ipcRenderer?.removeListener &&
              window.api.ipcRenderer.removeListener("auto-ai-response-triggered", e);
          }
        );
      }, [b, $, vt, M, Ne, vn, bn, yn, Fn, jn]),
        (0, l.useEffect)(() => {
          const t = async (t, n) => {
            if (
              (console.log("🔊 Получено событие статуса аудио соединения:", n),
              !n.connected && n.error)
            ) {
              if (
                (console.log("🔴 Аудио соединение разорвано:", n.error),
                Ce(!1),
                Zt("collapsed"),
                ce &&
                  (n.error.includes(o("liveWidget.serverCompleted")) ||
                    n.error.includes(o("liveWidget.serverClosed")) ||
                    n.error.includes("completed by server") ||
                    n.error.includes("closed") ||
                    n.error === o("liveWidget.interviewSessionEnded")))
              )
                return void console.log("🚫 Игнорируем повторное сообщение о завершении:", n.error);
              let t = o("liveWidget.sessionCompletedByServer"),
                r = !1;
              if (
                n.error.includes(o("liveWidget.timeLimitExhaustedLong")) ||
                n.error.includes(o("liveWidget.hoursLimitExhausted"))
              )
                ((t = ""), (r = !0), Ce(!0), lt(null), G(""), Zt("expanded-support"));
              else if (n.error.includes("useruuid not found"))
                ((t = o("liveWidget.authError")), (r = !0));
              else if (n.error.includes("context canceled"))
                ((t = o("liveWidget.sessionCompletedByServer")), (r = !0));
              else if (
                n.error.includes(o("liveWidget.serverCompleted")) ||
                n.error.includes(o("liveWidget.serverClosed")) ||
                n.error.includes("completed by server") ||
                n.error.includes("closed")
              ) {
                if (ce) return;
                ((t = o("liveWidget.sessionCompletedByServer")), (r = !1));
              } else ((t = o("liveWidget.connectionLost")), (r = !0));
              if (
                (b &&
                  (console.log("🛑 Принудительно завершаем сессию из-за разрыва соединения"),
                  await zn("auto", n.error)),
                tn(n.error) && (await Jt(nn(n.error), n.error)))
              )
                return void (r && de(!0));
              (vt("error", t),
                r && de(!0),
                (n.error.includes("useruuid not found") || n.error.includes("authorization")) &&
                  setTimeout(() => {
                    "function" == typeof e && e();
                  }, 3e3));
            }
          };
          return (
            window.api?.ipcRenderer?.on && window.api.ipcRenderer.on("audio:connectionStatus", t),
            () => {
              window.api?.ipcRenderer?.removeListener &&
                window.api.ipcRenderer.removeListener("audio:connectionStatus", t);
            }
          );
        }, [Jt, nn, ce, b, tn, e, zn, o, vt, Zt]));
      const Gn = (0, l.useRef)(null),
        Wn = (0, l.useRef)(null),
        Yn = (0, l.useRef)(null),
        Hn = (0, l.useRef)(!1),
        Vn = (0, l.useRef)(!1);
      ((0, l.useEffect)(() => {
        ("function" == typeof window.setGlobalAudioStreamer && window.setGlobalAudioStreamer(O),
          (window.globalAudioStreamer = O));
      }, []),
        (0, l.useEffect)(() => {
          if (
            ((window.globalAudioStreamer = O),
            (cn.current = []),
            (dn.current = !1),
            un.current && (un.current(), (un.current = null)),
            console.log("LiveWidget audio streamer effect:", {
              sessionId: $,
              selectedMicrophoneDeviceId: Dt,
            }),
            !$)
          )
            return (O.stop(), (Gn.current = null), void (Wn.current = null));
          ((Gn.current = $), (Wn.current = Dt));
          let e = !1;
          const t = setTimeout(() => {
            e ||
              (console.log("LiveWidget: Запуск audioStreamer.start()"),
              (0, S.trackInterview)("microphone_enabled", {
                sessionId: $,
                deviceId: Dt,
                audioSource: Pt,
              }),
              O.start($, Dt, Pt).catch((e) => {
                console.error("❌ LiveWidget: Ошибка запуска audioStreamer:", e);
              }));
          }, 100);
          return () => {
            ((e = !0), clearTimeout(t), O.stop());
          };
        }, [$]),
        (0, l.useEffect)(() => {
          Wn.current !== Dt &&
            ((Wn.current = Dt),
            $ &&
              b &&
              (Hn.current || Gt
                ? console.log("🔄 LiveWidget: перезапуск сессии из-за микрофона уже запланирован")
                : (console.log(
                    "🔄 LiveWidget: планируем перезапуск сессии из-за смены микрофона:",
                    Dt,
                  ),
                  Wt({ deviceId: Dt, timestamp: Date.now() }))));
        }, [Dt, $, b, Gt]),
        (0, l.useEffect)(() => {
          const e = $
            ? setInterval(async () => {
                try {
                  if (window.api?.settings?.getDeviceSettings) {
                    const e = await window.api.settings.getDeviceSettings();
                    if (e.success && e.settings?.microphone?.deviceId) {
                      const t = e.settings.microphone.deviceId;
                      t !== Dt && (console.log("Обнаружена смена микрофона:", Dt, "->", t), Mt(t));
                    }
                  }
                } catch (e) {
                  console.error("Ошибка проверки настроек микрофона:", e);
                }
              }, 2e3)
            : null;
          return () => {
            e && clearInterval(e);
          };
        }, [$, Dt]),
        (0, l.useEffect)(() => {
          if (Yn.current === Pt) return;
          const e = Yn.current;
          if (((Yn.current = Pt), null === e || !$)) return;
          console.log("LiveWidget: перезапуск аудио стримов из-за смены audioSource:", e, "->", Pt);
          let t = !1;
          return (
            (async () => {
              try {
                if ((O.stop(), await new Promise((e) => setTimeout(e, 150)), t)) return;
                (await O.start(X.current, Dt, Pt),
                  console.log("LiveWidget: аудио стримы перезапущены с audioSource:", Pt));
              } catch (e) {
                console.error("LiveWidget: ошибка перезапуска аудио стримов:", e);
              }
            })(),
            () => {
              t = !0;
            }
          );
        }, [Pt]),
        (0, l.useEffect)(() => {
          const e = () => {
            (console.log(
              "LiveWidget: получено событие смены VAD/STT настроек, sessionId:",
              X.current,
            ),
              X.current &&
                Z.current &&
                (Vn.current ||
                  Yt ||
                  (console.log(
                    "LiveWidget: планируем перезапуск сессии из-за смены VAD/STT настроек",
                  ),
                  Ht({ timestamp: Date.now() }))));
          };
          return (
            window.api.ipcRenderer.on("settings:vadSettingsChanged", e),
            window.api.ipcRenderer.on("settings:sttProviderChanged", e),
            () => {
              (window.api.ipcRenderer.removeListener("settings:vadSettingsChanged", e),
                window.api.ipcRenderer.removeListener("settings:sttProviderChanged", e));
            }
          );
        }, [Yt]));
      const qn = (0, l.useCallback)(async () => {
        try {
          console.log("[LiveWidget] Fetching user info for language/limits");
          const e = await window.api.auth.getUserInfo();
          if (e.success && e.userInfo) {
            e.userInfo.name && z(e.userInfo.name);
            const t = e.userInfo.user?.language;
            if (
              (t
                ? (console.log("[LiveWidget] Applying user language from profile:", t),
                  d.default.changeLanguage(t),
                  localStorage.setItem("preferredLanguage", t),
                  window.api?.settings?.setPreferredLanguage &&
                    window.api.settings.setPreferredLanguage(t).catch(() => {}))
                : console.log("[LiveWidget] User profile has no language, keeping current locale"),
              e.userInfo.limit)
            ) {
              const t = e.userInfo.limit,
                n = t.usageSeconds ?? 0,
                r = t.usageLimitSeconds ?? 0;
              if (
                (ot(n),
                nt(r),
                (0, S.setUserContext)({ limitSeconds: r, usageSeconds: n }),
                u.setContext("usage", {
                  usageLimitSeconds: r,
                  usageSeconds: n,
                  remainingSeconds: r - n,
                }),
                r > 0)
              ) {
                const e = r - n,
                  t = Math.floor(e / 60);
                (e <= 0 ? _e || (await jn("usage_limit_reached")) : _e && (Ce(!1), Zt("collapsed")),
                  t < 10 && t > 5 && !at.current.has("10min")
                    ? ((0, x.showToast)(o("liveWidget.timeWarning10min"), "success"),
                      at.current.add("10min"))
                    : t < 5 && t > 1 && !at.current.has("5min")
                      ? ((0, x.showToast)(o("liveWidget.timeWarning5min"), "success"),
                        at.current.add("5min"))
                      : t < 1 &&
                        e > 0 &&
                        !at.current.has("1min") &&
                        ((0, x.showToast)(o("liveWidget.timeWarning1min"), "success"),
                        at.current.add("1min")));
              } else _e && (Ce(!1), Zt("collapsed"));
            }
          }
          if (b) {
            const e = Date.now() - Nt.current;
            if (
              (e >= It && !Ot.current.warning5min
                ? ((0, x.showToast)(o("liveWidget.inactivityWarning5min"), "info"),
                  (Ot.current.warning5min = !0))
                : e >= Rt &&
                  !Ot.current.warning1min &&
                  ((0, x.showToast)(o("liveWidget.inactivityWarning1min"), "info"),
                  (Ot.current.warning1min = !0)),
              e >= xt)
            ) {
              (console.log("🕒 Завершаем сессию из-за неактивности пользователя:", {
                inactiveTime: Math.floor(e / 1e3 / 60),
                timeoutMinutes: 30,
              }),
                (0, x.showToast)(o("liveWidget.inactivitySessionEnd"), "info"),
                (0, S.trackInterview)("session_completed", {
                  sessionId: $,
                  duration: Math.floor(e / 1e3 / 60),
                }));
              try {
                (D(!1), K(""), G(""), n && n(!1), r && r(null));
              } catch (e) {
                console.error("Ошибка при автозавершении сессии:", e);
              }
              return;
            }
          }
        } catch (e) {
          console.error("Ошибка при проверке времени:", e);
        }
      }, [b, $, xt, It, Rt]);
      (0, l.useEffect)(() => {
        if (b && $) {
          qn();
          const e = setInterval(() => {
            qn();
          }, 6e4);
          return (
            (it.current = e),
            () => {
              (e && clearInterval(e), (it.current = null));
            }
          );
        }
        (it.current && (clearInterval(it.current), (it.current = null)), at.current.clear());
      }, [b, $, qn]);
      const Qn = async () => {
          ((0, S.trackButtonClick)("create_session", "live_widget"),
            Nn(),
            Ce(!1),
            Zt("collapsed"),
            Bt.cancel(),
            G(U()),
            ge(!1),
            fe(!0),
            bn(),
            lt(null),
            Pe([]),
            Ke([]),
            (sn.current = ""),
            (ln.current = ""),
            (pn.current = ""),
            (cn.current = []),
            (dn.current = !1),
            un.current && (un.current(), (un.current = null)),
            window.speechSynthesis.speaking && window.speechSynthesis.cancel());
          try {
            window.api?.suggestion?.closeAll && (await window.api.suggestion.closeAll());
          } catch (e) {
            console.error("Ошибка при закрытии окон подсказок при создании новой сессии:", e);
          }
          try {
            (localStorage.removeItem("transcriptionMessages"),
              window.api?.transcription?.clear && (await window.api.transcription.clear()));
          } catch (e) {
            console.error("Ошибка при очистке истории транскрипций:", e);
          }
          if (!ue)
            return (
              (0, S.trackInterview)("session_created", { error: "not_authenticated" }),
              vt("error", o("liveWidget.authRequired")),
              G(o("liveWidget.authRequiredMessage")),
              void setTimeout(() => {
                e && e();
              }, 2e3)
            );
          try {
            (ee(!0),
              vt("active", o("liveWidget.creatingSession")),
              vt("active", o("liveWidget.checkingPermissions")));
            const e = await window.api.permissions.checkMicrophoneAccess();
            if ((console.log("Microphone permission:", e), !e.success || !e.permitted)) {
              const t = e.message || o("liveWidget.microphoneAccessDenied");
              return (
                (await Jt("microphone", t)) || (vt("error", t), G(t)),
                ee(!1),
                void (0, S.trackInterview)("session_creation_failed", {
                  reason: "microphone_permission_denied",
                })
              );
            }
            const t = await window.api.permissions.checkScreenAccess();
            if ((console.log("Screen permission:", t), !t.success || !t.permitted)) {
              const e = t.message || o("liveWidget.screenAccessDenied");
              return (
                vt("error", e),
                G(e),
                ee(!1),
                void (0, S.trackInterview)("session_creation_failed", {
                  reason: "screen_permission_denied",
                })
              );
            }
            if (
              (je || (vt("active", o("liveWidget.loadingSources")), await Rr()),
              !Ue && Le.length > 0)
            ) {
              const e = Le.find((e) => e.isScreen) || Le[0];
              e && (Fe(e.id), console.log(`🎯 Автоматически выбран источник: ${e.name}`));
            }
            const n = `${o("liveWidget.sessionFrom")} ${new Date().toLocaleString("ru" === d.default.language ? "ru-RU" : "en-US")}`,
              i = "true" === localStorage.getItem("autoDetectionEnabled");
            console.log(
              `🎛️ [LiveWidget] Создаем сессию с autoDetectionEnabled=${i} (из localStorage)`,
            );
            const a = await p.sessionAPI.createSession(n, i);
            if (
              (console.log("Получен ответ от API createSession:", a),
              console.log("Структура ответа:", {
                success: a.success,
                error: a.error,
                message: a.message,
                session: a.session,
                sessionKeys: a.session ? Object.keys(a.session) : [],
                responseKeys: Object.keys(a),
                responseStringify: JSON.stringify(
                  a,
                  (e, t) =>
                    "object" == typeof t && null !== t
                      ? "" === e || Object.keys(t).length
                        ? t
                        : "[Object]"
                      : t,
                  2,
                ),
              }),
              a.success)
            ) {
              let e = "";
              if (a.session && a.session.id) e = a.session.id;
              else if (a.session) {
                console.log("Проверяем альтернативные способы получения ID из сессии");
                const t = a.session;
                Array.isArray(t.u) && t.u.length > 0
                  ? ((e = t.u[0] || ""), console.log("ID получен из массива u[0]:", e))
                  : "function" == typeof t.getId
                    ? ((e = t.getId() || ""), console.log("ID получен через геттер getId():", e))
                    : "sessionId" in t && t.sessionId
                      ? ((e = t.sessionId), console.log("ID получен через свойство sessionId:", e))
                      : "_id" in t &&
                        t._id &&
                        ((e = t._id), console.log("ID получен через свойство _id:", e));
              } else
                "id" in a && "string" == typeof a.id
                  ? ((e = a.id), console.log("ID получен напрямую из ответа:", e))
                  : "sessionId" in a && "string" == typeof a.sessionId
                    ? ((e = a.sessionId),
                      console.log("ID получен из свойства sessionId в корне ответа:", e))
                    : "u" in a &&
                      Array.isArray(a.u) &&
                      a.u.length > 0 &&
                      ((e = a.u[0] || ""), console.log("ID получен из корневого массива u[0]:", e));
              e
                ? (console.log("Сессия успешно создана, итоговый ID:", e),
                  (0, S.trackInterview)("session_created", {
                    sessionId: e,
                    autoDetectionEnabled: i,
                    sourcesCount: Le.length,
                  }),
                  K(e),
                  r?.(e),
                  D(!0),
                  de(!1),
                  vt("active", o("liveWidget.sessionSuccessCreated")),
                  G(o("liveWidget.sessionActiveMessage")))
                : (console.error("Ошибка: не удалось получить ID сессии из ответа:", a),
                  vt("error", o("liveWidget.sessionIdError")));
            } else {
              const e = a.errorType,
                t = a.userMessage,
                n = a.error || t || o("liveWidget.sessionCreateError");
              Fn(n, e)
                ? await jn("session_create_limit")
                : ((0, S.trackInterview)("session_created", {
                    error: a.error || "creation_failed",
                  }),
                  (await Jt("microphone", n)) ||
                    tn(n) ||
                    (vt("error", `${o("common.error")}: ${n}`),
                    lt({ error: n, errorType: e, userMessage: t })));
            }
          } catch (e) {
            console.error("Ошибка при создании сессии:", e);
            const t = e instanceof Error ? e.message : String(e);
            Fn(t, e?.errorType)
              ? await jn("session_create_limit")
              : (0, m.isAuthError)(e)
                ? await (0, m.handleAuthError)(e, {
                    navigate: Te,
                    resetWindowSettings: !1,
                    onLogout: () => {
                      (pe(!1), vt("warning", o("liveWidget.sessionExpiredReauth")));
                    },
                  })
                : (await Jt("microphone", t)) ||
                  tn(t) ||
                  vt("error", `${o("common.error")}: ${t || o("liveWidget.sessionCreateError")}`);
          } finally {
            ee(!1);
          }
        },
        $n = async () => {
          if (!se && !b && re) {
            le(!0);
            try {
              vt("active", o("liveWidget.creatingSession"));
              const e = await p.sessionAPI.resumeSession(re);
              if (!e || !e.success)
                return (console.error("[LiveWidget] Resume session failed:", e), oe(""), void Qn());
              const t = re;
              (K(t),
                (X.current = t),
                r?.(t),
                D(!0),
                (Z.current = !0),
                de(!1),
                vt("active", o("liveWidget.sessionSuccessCreated")));
              try {
                const e = await window.api.session.getDialogHistory(t);
                if (e && e.entries && e.entries.length > 0) {
                  const t = [...e.entries]
                    .reverse()
                    .find((e) => "ai_message" === e.entryType || "assistant" === e.speaker);
                  if (t && t.text) {
                    (G(t.text), fe(!0));
                    const e = mn(t.text);
                    (Bt.startGeneration("generate", !1),
                      setTimeout(() => {
                        Bt.complete(e);
                      }, 300));
                  }
                }
              } catch (e) {
                console.error("[LiveWidget] Failed to load dialog history:", e);
              }
              (oe(""), (0, S.trackInterview)("session_resumed", { sessionId: t }));
            } catch (e) {
              (console.error("[LiveWidget] Error resuming session:", e), oe(""));
              const t = e instanceof Error ? e.message : o("liveWidget.sessionCreateError");
              (await Jt("microphone", t)) || tn(t) || vt("error", `${o("common.error")}: ${t}`);
            } finally {
              le(!1);
            }
          }
        },
        Kn = (0, l.useCallback)(async () => {
          (dt(null), de(!1), lt(null), Zt("collapsed"), re ? await $n() : await Qn());
        }, [Qn, $n, re, Zt]),
        Xn = (0, l.useRef)(Qn);
      ((0, l.useEffect)(() => {
        Xn.current = Qn;
      }, [Qn]),
        (0, l.useEffect)(() => {
          const e = async (e, t) => {
            if (Z.current && Xn.current && Un.current)
              try {
                (await Un.current("auto", "language_change"), await Xn.current());
              } catch (e) {
                (console.error("Failed to restart session after language change:", e),
                  (0, x.showToast)(o("common.error"), "error"));
              }
          };
          return (
            window?.api?.ipcRenderer?.on?.("language:changed", e),
            () => {
              window?.api?.ipcRenderer?.removeListener?.("language:changed", e);
            }
          );
        }, [o]),
        (0, l.useEffect)(() => {
          if (!Gt) return;
          const e = Gt;
          let t = !1;
          return (
            (async () => {
              if (!Hn.current) {
                Hn.current = !0;
                try {
                  const e = { context: "microphone_change", deviceId: Gt.deviceId };
                  if (
                    (X.current && (e.sessionId = X.current),
                    (0, S.trackFeature)("used", "session_auto_restart", e),
                    Z.current &&
                      X.current &&
                      Un.current &&
                      (await Un.current("auto", "microphone_change"), t))
                  )
                    return;
                  Xn.current && (await Xn.current());
                } catch (e) {
                  console.error(
                    "❌ LiveWidget: Ошибка автоперезапуска сессии после смены микрофона:",
                    e,
                  );
                  const t = e instanceof Error ? e.message : o("liveWidget.sessionCreateError");
                  ((await Jt("microphone", t)) ||
                    tn(t) ||
                    St.current?.("error", `${o("common.error")}: ${t}`),
                    (0, x.showToast)(
                      o(
                        "liveWidget.micRestartFailed",
                        "Не удалось перезапустить сессию, попробуйте вручную",
                      ),
                    ));
                } finally {
                  ((Hn.current = !1),
                    t || Wt((t) => (t && t.timestamp === e.timestamp ? null : t)));
                }
              }
            })(),
            () => {
              t = !0;
            }
          );
        }, [Gt]),
        (0, l.useEffect)(() => {
          if (!Yt) return;
          const e = Yt;
          let t = !1;
          return (
            (async () => {
              if (!Vn.current) {
                Vn.current = !0;
                try {
                  if (
                    ((0, S.trackFeature)("used", "session_auto_restart", {
                      context: "vad_settings_change",
                    }),
                    Z.current &&
                      X.current &&
                      Un.current &&
                      (await Un.current("auto", "vad_settings_change"), t))
                  )
                    return;
                  Xn.current && (await Xn.current());
                } catch (e) {
                  console.error(
                    "LiveWidget: Ошибка автоперезапуска сессии после смены VAD настроек:",
                    e,
                  );
                } finally {
                  ((Vn.current = !1),
                    t || Ht((t) => (t && t.timestamp === e.timestamp ? null : t)));
                }
              }
            })(),
            () => {
              t = !0;
            }
          );
        }, [Yt]));
      const Zn = (e = "button") => {
          J || te || (b ? zn(e) : Qn());
        },
        Jn = (0, l.useCallback)(() => {
          (cn.current.shift(),
            (dn.current = !1),
            (un.current = null),
            cn.current.length > 0 &&
              setTimeout(() => {
                er();
              }, 100));
        }, []),
        er = (0, l.useCallback)(async () => {
          if (!dn.current && 0 !== cn.current.length) {
            dn.current = !0;
            try {
              const e = cn.current[0];
              if ((console.log("Озвучиваем:", e), !Ne))
                return (console.error("Не выбран голос для синтеза речи"), void Jn());
              const t = await g.default.synthesizeAndPlay(e, Ne, "", De, $, !1, {
                onEnd: () => {
                  (console.log("Озвучивание завершено"), Jn());
                },
                onError: (e) => {
                  (console.error("Ошибка при озвучивании:", e), Jn());
                },
              });
              un.current = () => {
                (t(), Jn());
              };
            } catch (e) {
              (console.error("Ошибка при синтезе речи:", e), Jn());
            }
          }
        }, [Ne, $, De]),
        tr = (0, l.useCallback)(
          (e) => {
            M && Ne && (cn.current.push(e), dn.current || er());
          },
          [M, Ne, er],
        ),
        nr = (0, l.useCallback)(
          (e) => {
            if (!M) return;
            const t = sn.current;
            if (e.length > t.length) {
              const n = e.substring(t.length);
              let r = pn.current + n;
              const i = [];
              let a;
              const s = /'''/g;
              let l = [];
              for (; null !== (a = s.exec(r)); ) l.push(a.index);
              let c = r.length;
              l.length % 2 == 1 && (c = l[l.length - 1]);
              let d = !1,
                u = 0;
              for (; u < c; ) {
                const e = r.indexOf("'''", u);
                if (-1 === e || e >= c) {
                  d || i.push(r.slice(u, c));
                  break;
                }
                (d || (e > u && i.push(r.slice(u, e)), i.push("'''")), (d = !d), (u = e + 3));
              }
              for (const e of i) {
                if ("'''" === e) {
                  tr(o("liveWidget.threeApostrophes"));
                  continue;
                }
                const t = /[^.!?]+[.!?]+/g,
                  n = e.match(t) || [];
                for (const e of n) {
                  const t = e.trim();
                  t && t !== ln.current && (tr(t), (ln.current = t));
                }
                const r = n.length > 0 ? n[n.length - 1] : "",
                  i = r ? e.lastIndexOf(r) + r.length : 0;
                e.endsWith("'''") || (pn.current = e.slice(i));
              }
              (l.length % 2 == 1 && (pn.current = ""), (sn.current = e));
            }
          },
          [M, tr],
        );
      (0, l.useEffect)(() => {
        const e = () => {
            (En(!0),
              Ln(!0),
              fe(!1),
              G(""),
              (sn.current = ""),
              (cn.current = []),
              un.current && (un.current(), (un.current = null)));
          },
          t = (e) => {
            const t = e,
              n = t.detail?.chunk;
            n &&
              (yn(),
              G((e) => {
                const t = e + n;
                return (nr(t), t);
              }));
          },
          n = () => {
            (fe(!0), bn(), ge(!1), be(!1));
          };
        return (
          window.addEventListener("codeExecution:streamingStart", e),
          window.addEventListener("codeExecution:responseChunk", t),
          window.addEventListener("codeExecution:streamingComplete", n),
          () => {
            (window.removeEventListener("codeExecution:streamingStart", e),
              window.removeEventListener("codeExecution:responseChunk", t),
              window.removeEventListener("codeExecution:streamingComplete", n));
          }
        );
      }, [En, Ln, yn, nr, bn]);
      const rr = (0, l.useCallback)(() => {
          const e = !M;
          ((0, S.trackFeature)(e ? "enabled" : "disabled", "speech_synthesis"),
            P(e),
            e ||
              ((cn.current = []),
              (dn.current = !1),
              un.current && (un.current(), (un.current = null))),
            vt(W, o(e ? "liveWidget.speechEnabled" : "liveWidget.speechDisabled")));
        }, [M, W, vt]),
        or = (0, l.useCallback)(
          async (e) => {
            (console.log("handleScreenshotAndAnswer вызван, текущий sessionId:", $),
              (0, S.trackButtonClick)("take_screenshot", "live_widget"));
            const t = e ?? Ct;
            if ($) {
              (Bt.startGeneration("screenshot", !0),
                console.log(o("liveWidget.screenshotSent")),
                vt("active", o("liveWidget.processingScreenshot")),
                G(o("liveWidget.stoppingPreviousGeneration")),
                En(!0),
                Ln(!0),
                fe(!1),
                (sn.current = ""),
                (ln.current = ""),
                (cn.current = []),
                (dn.current = !1),
                un.current && (un.current(), (un.current = null)),
                await new Promise((e) => setTimeout(e, 100)),
                G(o("liveWidget.takingScreenshotAndGettingAnswer")));
              try {
                let e;
                if (
                  ("partial" === t
                    ? (window.api &&
                        window.api.window &&
                        window.api.window.hide &&
                        (await window.api.window.hide()),
                      (e = await window.api.screen.captureRegion()),
                      window.api &&
                        window.api.window &&
                        window.api.window.show &&
                        (await window.api.window.show()))
                    : (e = await A.screenAPI.getMergedScreenshot()),
                  !e.success)
                )
                  throw new Error(e.error || o("liveWidget.couldNotTakeScreenshot"));
                (console.log(o("liveWidget.screenshotReceived"), $),
                  e.dataUrl && Bt.setScreenshot(e.dataUrl),
                  G(""));
                const n = await p.sessionAPI.sendImage($, e.dataUrl || "", Se, (e) => {
                  (yn(),
                    G((t) => {
                      const n = t + e;
                      return (nr(n), n);
                    }));
                });
                if (!n.success)
                  throw new Error(n.error || o("liveWidget.screenshotProcessingError"));
                (vt("idle", o("liveWidget.answerReceived")), vn(n.message));
              } catch (e) {
                console.error("Ошибка при обработке скриншота:", e);
                const t = e instanceof Error ? e.message : String(e);
                (Fn(t, e?.errorType)
                  ? await jn("screenshot_limit")
                  : (0, m.isAuthError)(e)
                    ? await (0, m.handleAuthError)(e, {
                        navigate: Te,
                        redirectUrl: "/setup",
                        resetWindowSettings: !0,
                        onLogout: () => {
                          (pe(!1),
                            D(!1),
                            K(""),
                            r?.(null),
                            vt("warning", o("liveWidget.sessionExpiredReauth")));
                        },
                      })
                    : vt(
                        "error",
                        `${o("common.error")}: ${t || o("liveWidget.couldNotProcessScreenshot")}`,
                      ),
                  fe(!0));
              } finally {
                (bn(), ge(!1), be(!1));
              }
            } else vt("warning", "Необходимо сначала создать сессию");
          },
          [$, nr, Te, Ct, vn, bn, yn, Fn, jn],
        ),
        ir = (0, l.useCallback)(async () => {
          const e = Vt,
            t = !e;
          try {
            (qt(t),
              localStorage.setItem("autoDetectionEnabled", String(t)),
              window.api?.settings?.setAutoDetectionEnabled &&
                (await window.api.settings.setAutoDetectionEnabled(t)),
              vt(
                "idle",
                o(
                  t
                    ? "liveWidget.autoDetectionEnabledStatus"
                    : "liveWidget.autoDetectionDisabledStatus",
                ),
              ),
              (0, S.trackFeature)(t ? "enabled" : "disabled", "auto_detection"),
              $t({ autoDetectionEnabled: t }));
          } catch (t) {
            (console.error("Ошибка переключения автоопределения вопросов:", t),
              qt(e),
              localStorage.setItem("autoDetectionEnabled", String(e)),
              (0, x.showToast)(o("liveWidget.autoDetectionToggleError"), "error"),
              $t({ autoDetectionEnabled: e }));
          }
        }, [Vt, $t, o, vt]),
        ar = (0, l.useCallback)(async () => {
          try {
            const e = await window.api.invoke("config:getVariant"),
              t = `${(e?.websiteUrl || "https://shadowhint.com").replace(/\/$/, "")}/subscription`;
            if (
              ((0, w.logStatsigEvent)("app_buy_click", void 0, { entry_point: "paywall", url: t }),
              window.api?.shell?.openExternal)
            ) {
              const e = await window.api.shell.openExternal(t);
              if (!e.success) throw new Error(e.error || "Failed to open pricing page");
            } else window.open(t, "_blank", "noopener");
            (Ce(!1), Zt("collapsed"));
          } catch (e) {
            (console.error("Ошибка при открытии страницы покупки безлимита:", e),
              (0, w.logStatsigEvent)("app_buy_click_failed", void 0, { entry_point: "paywall" }),
              (0, x.showToast)(o("common.error"), "error"));
          }
        }, [o]),
        sr = (0, l.useCallback)(async () => {
          try {
            const e = await window.api.invoke("config:getVariant"),
              t = `${(e?.websiteUrl || "https://shadowhint.com").replace(/\/$/, "")}/profile/context`;
            if (window.api?.shell?.openExternal) {
              const e = await window.api.shell.openExternal(t);
              if (!e.success) throw new Error(e.error || "Failed to open context page");
            } else window.open(t, "_blank", "noopener");
          } catch (e) {
            (console.error("Ошибка при открытии страницы контекста:", e),
              (0, x.showToast)(o("common.error"), "error"));
          }
        }, [o]),
        lr = (0, l.useCallback)(async () => {
          try {
            window.api?.window?.close && (await window.api.window.close());
          } catch (e) {
            console.error("Ошибка при завершении приложения:", e);
          }
        }, []),
        cr = (0, l.useCallback)(async () => {
          try {
            try {
              localStorage.removeItem("openingSettings");
            } catch (e) {
              console.warn("Не удалось очистить флаг openingSettings при выходе:", e);
            }
            window.api?.window?.show && (await window.api.window.show().catch(() => {}));
            const e = (e, t) => {
              "number" == typeof e ? Te(e) : Te(e, { ...(t ?? {}), replace: !0 });
            };
            await (0, m.logout)({
              navigate: e,
              redirectUrl: "/setup",
              resetWindowSettings: !0,
              onLogout: () => {
                window.dispatchEvent(new CustomEvent("auth:logout-complete"));
              },
            });
          } catch (e) {
            (console.error("Ошибка при выходе из профиля:", e),
              (0, x.showToast)(o("common.error"), "error"));
          } finally {
            (pe(!1), D(!1), K(""), r?.(null), vt("warning", o("liveWidget.authRequired")));
          }
        }, [Te, r, o, vt]),
        dr = async () => {
          (vt("idle", o("liveWidget.goingToSettings")),
            G(o("liveWidget.redirectToSettings")),
            setTimeout(() => {
              e && e();
            }, 500));
        },
        ur = async () => {
          try {
            const e = await window.api.settings.openShortcuts();
            e.success || console.error("Ошибка открытия настроек горячих клавиш:", e.error);
          } catch (e) {
            console.error("Ошибка при открытии настроек горячих клавиш:", e);
          }
        },
        pr = async () => {
          try {
            const e = `${(await window.api.invoke("config:getVariant")).websiteUrl}/profile`;
            if (window.api && window.api.shell) {
              const t = await window.api.shell.openExternal(e);
              t.success || console.error("Ошибка открытия страницы профиля:", t.error);
            }
          } catch (e) {
            console.error("Ошибка при открытии страницы профиля:", e);
          }
        };
      (0, l.useEffect)(() => {
        if (!window.api?.ipcRenderer?.on) return;
        const e = () => {
            $t();
          },
          t = (e, t) => {
            t ? Q(!0) : Dn({ skipRemote: !0 });
          },
          n = (e, t) => {
            if (
              (!t.screenshotMode ||
                ("fullscreen" !== t.screenshotMode && "partial" !== t.screenshotMode) ||
                Et(t.screenshotMode),
              "boolean" == typeof t.autoDetectionEnabled && qt(t.autoDetectionEnabled),
              "number" == typeof t.suggestionOpacity)
            ) {
              const e = k(t.suggestionOpacity);
              (e !== Qt.current && ((_t.current = e), ft(e)), bt(!0));
            }
            ("boolean" == typeof t.contentProtectionEnabled && et(t.contentProtectionEnabled),
              !t.audioSource ||
                ("system" !== t.audioSource &&
                  "microphone" !== t.audioSource &&
                  "both" !== t.audioSource) ||
                Lt(t.audioSource),
              "boolean" == typeof t.recordingEnabled && ke(t.recordingEnabled));
          },
          r = (e, t) => {
            switch (t.type) {
              case "set_screenshot_mode":
                "fullscreen" === t.mode
                  ? Pn(() => Et("fullscreen"))
                  : "partial" === t.mode && Pn(() => Et("partial"));
                break;
              case "set_display":
                if (void 0 !== t.displayId) {
                  const e = t.displayId || null;
                  (window.api?.screen?.setSelectedDisplay?.(e)?.catch(() => {}),
                    window.api?.settings?.saveSetting?.("selectedDisplayId", e)?.catch(() => {}),
                    $t({ selectedDisplayId: e }));
                }
                break;
              case "set_audio_source":
                ("system" !== t.audioSource &&
                  "microphone" !== t.audioSource &&
                  "both" !== t.audioSource) ||
                  (Lt(t.audioSource),
                  window.api.settings.saveSetting("audioSource", t.audioSource).catch(() => {}),
                  $t({ audioSource: t.audioSource }));
                break;
              case "set_language":
                if (t.code) {
                  const e = "ru" === t.code ? "ru" : "en";
                  (d.default.changeLanguage(e),
                    localStorage.setItem("preferredLanguage", e),
                    window.api?.settings?.setPreferredLanguage &&
                      window.api.settings.setPreferredLanguage(e).catch(() => {}),
                    window.api?.auth?.setLanguage(t.code).catch(() => {}),
                    window.api?.ipcRenderer?.send?.("language:changed", t.code),
                    $t({ language: t.code }));
                }
                break;
              case "set_suggestion_opacity": {
                const e = "number" == typeof t.opacity ? t.opacity : Number(t.opacity);
                if (!Number.isNaN(e)) {
                  const t = k(e);
                  if (t === _t.current && t === Qt.current) {
                    bt(!0);
                    break;
                  }
                  ((_t.current = t),
                    ft((e) => (e === t ? e : t)),
                    window.api?.suggestion?.setOpacity &&
                      window.api.suggestion.setOpacity(t).catch((e) => {
                        console.error("Ошибка при установке прозрачности окна подсказки:", e);
                      }),
                    bt(!0));
                }
                break;
              }
              case "open_settings":
                Pn(dr, { closeAfterAction: !0 });
                break;
              case "open_shortcuts":
                Pn(ur, { closeAfterAction: !0 });
                break;
              case "open_profile":
                Pn(pr, { closeAfterAction: !0 });
                break;
              case "toggle_auto_detection":
                Pn(ir);
                break;
              case "open_context_editor":
                Pn(sr, { closeAfterAction: !0 });
                break;
              case "logout":
                Pn(cr, { closeAfterAction: !0 });
                break;
              case "quit_app":
                Pn(lr, { closeAfterAction: !0 });
                break;
              case "toggle_content_protection":
                (async () => {
                  try {
                    const e = await window.api.window.toggleContentProtection();
                    e?.success
                      ? (et(e.enabled), (0, x.showToast)(e.message, "info"))
                      : (0, x.showToast)(e?.error || o("common.error"), "error");
                  } catch (e) {
                    (console.error("Ошибка переключения скрытого режима:", e),
                      (0, x.showToast)(o("common.error"), "error"));
                  }
                })();
            }
          };
        return (
          window.api.ipcRenderer.on("toolbar-settings:request-state", e),
          window.api.ipcRenderer.on("toolbar-settings:visibility", t),
          window.api.ipcRenderer.on("toolbar-settings:action", r),
          window.api.ipcRenderer.on("toolbar-settings:update-state", n),
          () => {
            (window.api?.ipcRenderer?.removeListener("toolbar-settings:request-state", e),
              window.api?.ipcRenderer?.removeListener("toolbar-settings:visibility", t),
              window.api?.ipcRenderer?.removeListener("toolbar-settings:action", r),
              window.api?.ipcRenderer?.removeListener("toolbar-settings:update-state", n));
          }
        );
      }, [Dn, sr, cr, pr, lr, dr, Pn, ur, $t, Et, ir, o]);
      const Ar = async () => {
          if (
            (console.log("handleManualMessageSend вызван, текущий sessionId:", $),
            (0, S.trackButtonClick)("send_manual_message", "live_widget"),
            Nn(),
            $)
          ) {
            (Bt.startGeneration("generate", !1),
              st && lt(null),
              console.log("Отправка запроса на генерацию ответа"),
              vt("active", o("liveWidget.processingRequest")),
              G(o("liveWidget.stoppingPreviousGeneration")),
              En(!0),
              Ln(!0),
              fe(!1),
              (sn.current = ""),
              (ln.current = ""),
              (cn.current = []),
              (dn.current = !1),
              un.current && (un.current(), (un.current = null)),
              await new Promise((e) => setTimeout(e, 100)),
              G(""));
            try {
              const e = await p.sessionAPI.sendManualMessage($, "", Se, !1, (e) => {
                (yn(),
                  G((t) => {
                    const n = t + e;
                    return (nr(n), n);
                  }));
              });
              if (!e.success) throw new Error(e.error || o("liveWidget.messageProcessingError"));
              ((0, S.trackInterview)("manual_message_sent", { sessionId: $ }),
                vt("idle", o("liveWidget.answerReceived")),
                vn(e.message));
            } catch (e) {
              console.error("Ошибка при обработке сообщения:", e);
              const t = e instanceof Error ? e.message : String(e);
              (Fn(t, e?.errorType)
                ? await jn("manual_message_limit")
                : (0, m.isAuthError)(e)
                  ? await (0, m.handleAuthError)(e, {
                      navigate: Te,
                      redirectUrl: "/setup",
                      resetWindowSettings: !0,
                      onLogout: () => {
                        (pe(!1),
                          D(!1),
                          K(""),
                          r?.(null),
                          vt("warning", o("liveWidget.sessionExpiredReauth")));
                      },
                    })
                  : vt(
                      "error",
                      `${o("common.error")}: ${t || o("liveWidget.couldNotProcessMessage")}`,
                    ),
                fe(!0));
            } finally {
              (bn(), ge(!1), be(!1));
            }
          } else vt("warning", "Необходимо сначала создать сессию");
        },
        gr = (0, l.useCallback)(() => {
          b && !he && (Nn(), Ar());
        }, [Ar, he, b, Nn]),
        mr = (0, l.useCallback)(async () => {
          if (!window.api || "object" != typeof window.api)
            return (console.error("API window.api недоступно"), null);
          const e = window.api.suggestion;
          if (!e || !e.openInNewWindow)
            return (console.error("API suggestion.openInNewWindow недоступно"), null);
          const t = mn(j);
          try {
            const n = await e.openInNewWindow(t);
            return n && "object" == typeof n && !1 !== n.success
              ? "windowId" in n && "number" == typeof n.windowId
                ? n.windowId
                : null
              : (console.error("Не удалось открыть подсказку в новом окне", n), null);
          } catch (e) {
            return (console.error("Ошибка при открытии подсказки в новом окне:", e), null);
          }
        }, [F, j, mn]),
        fr = (0, l.useCallback)(
          async (e, t) => {
            if ((console.log(`Выбран вариант ${t + 1}: ${e}`), Nn(), $)) {
              (Bt.startGeneration("generate", !1),
                Bt.setUserMessage(e),
                st && lt(null),
                console.log("Отправлено сообщение из варианта выбора:", e),
                vt("active", o("liveWidget.processingSelectedOption")),
                G(o("liveWidget.stoppingPreviousGeneration")),
                En(!0),
                Ln(!0),
                fe(!1),
                (sn.current = ""),
                (ln.current = ""),
                (cn.current = []),
                (dn.current = !1),
                un.current && (un.current(), (un.current = null)),
                Ke([]),
                await new Promise((e) => setTimeout(e, 100)),
                G(""));
              try {
                const t = await p.sessionAPI.sendManualMessage($, e, Se, !1, (e) => {
                  (yn(),
                    G((t) => {
                      const n = t + e;
                      return (nr(n), n);
                    }));
                });
                if (!t.success) throw new Error(t.error || o("liveWidget.optionProcessingError"));
                (vt("idle", o("liveWidget.answerReceived")), vn(t.message));
              } catch (e) {
                console.error("Ошибка при обработке выбранного варианта:", e);
                const t = e instanceof Error ? e.message : String(e);
                (Fn(t, e?.errorType)
                  ? await jn("choice_limit")
                  : (0, m.isAuthError)(e)
                    ? await (0, m.handleAuthError)(e, {
                        navigate: Te,
                        redirectUrl: "/setup",
                        resetWindowSettings: !0,
                        onLogout: () => {
                          (pe(!1),
                            D(!1),
                            K(""),
                            r?.(null),
                            vt("warning", o("liveWidget.sessionExpiredReauth")));
                        },
                      })
                    : vt(
                        "error",
                        `${o("common.error")}: ${t || o("liveWidget.couldNotProcessOption")}`,
                      ),
                  fe(!0));
              } finally {
                (bn(), ge(!1), be(!1));
              }
            } else vt("warning", "Необходимо сначала создать сессию");
          },
          [$, nr, Te, st, vn, bn, yn, Fn, jn, Bt],
        ),
        hr = (0, l.useCallback)(
          (e) => {
            if ($e.length > 0 && e >= 1 && e <= $e.length) {
              const t = e - 1,
                n = $e[t];
              (console.log(`Выбран вариант ${e} через горячую клавишу: ${n}`), fr(n, t));
            }
          },
          [$e, fr],
        );
      ((0, l.useEffect)(() => {
        if (j && me) {
          const e = /<choices>([\s\S]*?)<\/choices>/gi.exec(j);
          if (e) {
            const t = e[1],
              n = /<choice>([\s\S]*?)<\/choice>/gi,
              r = [];
            let o;
            for (; null !== (o = n.exec(t)); ) r.push(o[1].trim());
            (Ke(r), console.log(`Найдено ${r.length} активных вариантов выбора:`, r));
          } else Ke([]);
        }
      }, [j, me]),
        (0, l.useEffect)(() => {
          const e = (e) => {
            e.ctrlKey && e.shiftKey && "x" === e.key && (e.preventDefault(), rr());
          };
          return (
            document.addEventListener("keydown", e),
            () => {
              document.removeEventListener("keydown", e);
            }
          );
        }, [rr]));
      const br = (0, l.useCallback)(() => {
          Ar();
        }, [Ar]),
        _r = (0, l.useCallback)(() => {
          or();
        }, [or]),
        Cr = (0, l.useCallback)(() => {
          or("partial");
        }, [or]),
        Er = (0, l.useCallback)(() => {
          or("fullscreen");
        }, [or]),
        yr = (0, l.useCallback)(() => {
          mr();
        }, [mr]),
        vr = (0, l.useCallback)(() => {
          rr();
        }, [rr]),
        Sr = (0, l.useCallback)(() => hr(1), [hr]),
        xr = (0, l.useCallback)(() => hr(2), [hr]),
        wr = (0, l.useCallback)(() => hr(3), [hr]),
        kr = (0, l.useCallback)(() => hr(4), [hr]),
        Tr = (0, l.useCallback)(
          (e) => {
            Nn();
            const t = Date.now();
            switch (e) {
              case "send_manual":
                if (t - kt.current < wt) return;
                ((kt.current = t), br());
                break;
              case "screenshot":
                if (t - Tt.current < wt) return;
                ((Tt.current = t), _r());
                break;
              case "scroll_up":
                kn.current && kn.current.scrollBy({ top: -100, behavior: "smooth" });
                break;
              case "scroll_down":
                kn.current && kn.current.scrollBy({ top: 100, behavior: "smooth" });
                break;
              case "choice_1":
                Sr();
                break;
              case "choice_2":
                xr();
                break;
              case "choice_3":
                wr();
                break;
              case "choice_4":
                kr();
                break;
              case "execute_code":
                window.dispatchEvent(new CustomEvent("codeExecution:execute"));
                break;
              case "generate_response":
                window.dispatchEvent(
                  new CustomEvent("codeExecution:generateResponse", { detail: { sessionId: $ } }),
                );
                break;
              case "cmd_scroll_up":
                kn.current && kn.current.scrollBy({ top: -200, behavior: "smooth" });
                break;
              case "cmd_scroll_down":
                kn.current && kn.current.scrollBy({ top: 200, behavior: "smooth" });
                break;
              case "hide_suggestion":
                break;
              case "start_stop_session":
                Zn("hotkey");
                break;
              case "hide_show_all_windows":
                window.api.window.toggleAllVisibility();
                break;
              case "toggle_virtual_cursor":
                window.api?.virtualCursor?.toggle?.();
                break;
              case "screenshot_area":
                if (t - Tt.current < wt) return;
                ((Tt.current = t), Cr());
                break;
              case "screenshot_fullscreen":
                if (t - Tt.current < wt) return;
                ((Tt.current = t), Er());
            }
          },
          [br, _r, Cr, Er, yr, vr, Sr, xr, wr, kr, $, Zn, Ee],
        ),
        Br =
          Sn.length > 0
            ? Sn
            : [
                {
                  id: "previous",
                  accelerator: "CommandOrControl+Left",
                  description: o("liveWidget.previousSuggestion"),
                },
                {
                  id: "next",
                  accelerator: "CommandOrControl+Right",
                  description: o("liveWidget.nextSuggestion"),
                },
                {
                  id: "send_manual",
                  accelerator: "CommandOrControl+Enter",
                  description: o("liveWidget.sendRequest"),
                },
                {
                  id: "screenshot",
                  accelerator: "CommandOrControl+Shift+Enter",
                  description: o("liveWidget.shareImage"),
                },
                {
                  id: "choice_1",
                  accelerator: "CommandOrControl+1",
                  description: o("liveWidget.selectOption1"),
                },
                {
                  id: "choice_2",
                  accelerator: "CommandOrControl+2",
                  description: o("liveWidget.selectOption2"),
                },
                {
                  id: "choice_3",
                  accelerator: "CommandOrControl+3",
                  description: o("liveWidget.selectOption3"),
                },
                {
                  id: "choice_4",
                  accelerator: "CommandOrControl+4",
                  description: o("liveWidget.selectOption4"),
                },
                {
                  id: "execute_code",
                  accelerator: "CommandOrControl+G",
                  description: o("liveWidget.runCode"),
                },
                {
                  id: "generate_response",
                  accelerator: "CommandOrControl+Shift+G",
                  description: o("liveWidget.generateResponse"),
                },
                {
                  id: "toggle_click_through",
                  accelerator: "CommandOrControl+Shift+T",
                  description: o("liveWidget.toggleClickThrough"),
                },
                {
                  id: "hide_suggestion",
                  accelerator: "CommandOrControl+Shift+C",
                  description: o("liveWidget.toggleSuggestionText"),
                },
                {
                  id: "start_stop_session",
                  accelerator: "CommandOrControl+Shift+S",
                  description: o("liveWidget.startStopSession"),
                },
                {
                  id: "hide_show_all_windows",
                  accelerator: "CommandOrControl+Shift+H",
                  description: o("liveWidget.hideShowAllWindows"),
                },
                {
                  id: "cmd_scroll_up",
                  accelerator: "CommandOrControl+Up",
                  description: o("liveWidget.scrollUp"),
                },
                {
                  id: "cmd_scroll_down",
                  accelerator: "CommandOrControl+Down",
                  description: o("liveWidget.scrollDown"),
                },
              ],
        Ir = (e) => {
          const t = ((e) => {
            if (Array.isArray(Sn) && Sn.length > 0) {
              const t = Sn.find((t) => t.id === e);
              if (t) return t.accelerator;
            }
            if (!Array.isArray(Br)) return "";
            const t = Br.find((t) => t.id === e);
            return t ? t.accelerator : "";
          })(e);
          return t ? (0, E.formatKeyDisplay)(t.replace(/CommandOrControl/g, "Ctrl")) : "";
        };
      ((0, l.useEffect)(() => {
        if ((console.log("Регистрация горячих клавиш, userShortcuts:", Sn), window.api?.shortcuts))
          return (
            window.api.shortcuts
              .register(Br)
              .then((e) => {
                e.success
                  ? console.log("Горячие клавиши успешно зарегистрированы")
                  : console.error("Не удалось зарегистрировать горячие клавиши:", e.error);
              })
              .catch((e) => {
                console.error("Ошибка при регистрации горячих клавиш:", e);
              }),
            window.api.shortcuts.onTriggered(Tr),
            () => {
              window.api.shortcuts.offTriggered();
            }
          );
        console.error("API для глобальных горячих клавиш недоступно");
      }, [Sn, o]),
        (0, l.useEffect)(() => {
          window.api?.shortcuts &&
            (window.api.shortcuts.offTriggered(), window.api.shortcuts.onTriggered(Tr));
        }, [Tr]),
        (0, l.useEffect)(() => (Qe(!1), void Ye(!1)), [j, me, He, Ee]),
        (0, l.useEffect)(() => {
          const e = "true" === localStorage.getItem("dontShowScrollHint");
          Ve(e);
        }, []),
        (0, l.useEffect)(() => {
          const e = localStorage.getItem("screenshotMode");
          ("fullscreen" !== e && "partial" !== e) || Et(e);
        }, []),
        (0, l.useEffect)(() => {
          localStorage.setItem("screenshotMode", Ct);
        }, [Ct]),
        (0, l.useEffect)(() => {
          console.log("🚀 [LiveWidget useEffect] Инициализация загрузки настроек горячих клавиш");
          const e = async () => {
            try {
              if (
                (console.log("📥 [loadUserShortcuts] Загружаем настройки горячих клавиш..."),
                console.log("📥 [loadUserShortcuts] Проверяем window.api:", !!window.api),
                console.log("📥 [loadUserShortcuts] Проверяем settings:", !!window.api?.settings),
                console.log(
                  "📥 [loadUserShortcuts] Проверяем getShortcuts:",
                  !!window.api?.settings?.getShortcuts,
                ),
                !window.api?.settings?.getShortcuts)
              )
                return void console.error(
                  "❌ [loadUserShortcuts] API метод settings.getShortcuts недоступен",
                );
              const e = await window.api.settings.getShortcuts();
              (console.log("📥 [loadUserShortcuts] Результат загрузки:", e),
                e.success && e.shortcuts
                  ? (console.log(
                      "📥 [loadUserShortcuts] Устанавливаем userShortcuts длина:",
                      e.shortcuts.length,
                    ),
                    console.log("📥 [loadUserShortcuts] Первый элемент:", e.shortcuts[0]),
                    xn(e.shortcuts))
                  : console.warn(
                      "📥 [loadUserShortcuts] Не удалось загрузить настройки, используем дефолты. result:",
                      e,
                    ));
            } catch (e) {
              console.error("❌ [loadUserShortcuts] Ошибка загрузки настроек горячих клавиш:", e);
            }
          };
          (console.log("🚀 [LiveWidget useEffect] Вызываем loadUserShortcuts"), e());
          const t = (e, t) => {
              (console.log("🔄 [handleShortcutsUpdate] Получено обновление горячих клавиш:", t),
                t && Array.isArray(t)
                  ? 0 !== t.length
                    ? t.every(
                        (e) =>
                          e &&
                          "object" == typeof e &&
                          "string" == typeof e.id &&
                          "string" == typeof e.accelerator &&
                          "string" == typeof e.description,
                      )
                      ? (console.log(
                          "✅ [handleShortcutsUpdate] Валидация прошла успешно, обновляем состояние",
                        ),
                        xn(t),
                        console.log(
                          "🔄 [handleShortcutsUpdate] userShortcuts обновлен, новая длина:",
                          t.length,
                        ))
                      : console.warn(
                          "❌ [handleShortcutsUpdate] Неверная структура элементов shortcuts, игнорируем обновление",
                        )
                    : console.warn(
                        "⚠️ [handleShortcutsUpdate] Получен пустой массив shortcuts, игнорируем обновление",
                      )
                  : console.warn(
                      "❌ [handleShortcutsUpdate] Некорректные данные shortcuts:updated, игнорируем обновление:",
                      t,
                    ));
            },
            n = () => {
              (console.log(
                "🔄 [handleShortcutsSettingsClosed] Получено событие закрытия настроек, перезагружаем горячие клавиши",
              ),
                e());
            };
          return (
            window.api?.on &&
              (window.api.on("shortcuts:updated", t),
              window.api.on("shortcuts:settings-closed", n)),
            () => {
              window.api?.off &&
                (window.api.off("shortcuts:updated", t),
                window.api.off("shortcuts:settings-closed", n));
            }
          );
        }, []),
        (0, l.useEffect)(() => {
          if (j && j !== gn.current && !An.current) {
            if (Bt.isActive) return void (gn.current = j);
            gn.current = j;
          }
          An.current && (An.current = !1);
        }, [j, Ee]),
        (0, l.useEffect)(() => {
          Bt.isActive && ve(!0);
        }, [Bt.isActive]),
        (0, l.useEffect)(() => {
          if (!Bt.isActive) return;
          const e = mn(j);
          me ? Bt.complete(e) : Bt.updateContent(e);
        }, [j, mn, me, Bt]));
      const Rr = async () => {
          try {
            console.log("🔍 Загрузка доступных источников захвата...");
            const e = await window.api.audio.startSystemAudio();
            if (e.success && e.sources) {
              const t = e.sources.map((e) => ({
                id: e.id,
                name: e.name,
                isScreen: e.isScreen || !1,
              }));
              (ze(t), console.log(`✅ Найдено ${t.length} источников захвата`));
              const n = t.find((e) => e.isScreen) || t[0];
              (n && (Fe(n.id), console.log(`🎯 Автоматически выбран источник: ${n.name}`)), Ge(!0));
            } else
              console.error(`❌ Ошибка загрузки источников: ${e.error || "Неизвестная ошибка"}`);
          } catch (e) {
            console.error(`❌ Исключение при загрузке источников: ${e}`);
          }
        },
        Nr = (0, l.useMemo)(
          () => [
            o("liveWidget.premiumFeatureStart"),
            o("liveWidget.premiumFeatureAnswer"),
            o("liveWidget.premiumFeatureScreenshot"),
            o("liveWidget.premiumFeatureFullscreen"),
            o("liveWidget.premiumFeatureSupport"),
          ],
          [o],
        ),
        Or = (0, l.useMemo)(() => {
          const e = [
            o("liveWidget.audioTroubleshootingIntro"),
            "",
            `1. ${o("liveWidget.audioTroubleshootingStepPermissions")}`,
            `2. ${o("liveWidget.audioTroubleshootingStepExclusive")}`,
            "",
            o("liveWidget.audioTroubleshootingQuestionsTitle"),
            `1) ${o("liveWidget.audioTroubleshootingQuestionApps")}`,
            `2) ${o("liveWidget.audioTroubleshootingQuestionCorporate")}`,
            "",
            o("liveWidget.audioTroubleshootingAppsHint"),
            o("liveWidget.audioTroubleshootingLogitechHint"),
            o("liveWidget.audioTroubleshootingOtherAppsHint"),
            o("liveWidget.audioTroubleshootingCorporateHint"),
          ];
          return (ct?.message && e.push("", `${o("common.error")}: ${ct.message}`), e.join("\n"));
        }, [ct?.message, o]),
        Dr = (0, l.useCallback)(async () => {
          try {
            (await navigator.clipboard.writeText(Or),
              (0, x.showToast)(o("liveWidget.audioTroubleshootingCopied"), "success"));
          } catch (e) {
            (console.error("Не удалось скопировать инструкции по аудио:", e),
              (0, x.showToast)(o("common.error"), "error"));
          }
        }, [Or, o]),
        Mr = (0, l.useCallback)(() => {
          (Ce(!1), Zt("collapsed"));
        }, [Zt]);
      ((0, l.useEffect)(() => {
        _e && lt(null);
      }, [_e]),
        (0, l.useEffect)(() => {
          ct && lt(null);
        }, [ct]),
        (0, l.useEffect)(() => {
          const e = (e) => {
            const t = e.detail;
            t && Jt(t.kind, t.message);
          };
          return (
            window.addEventListener("audio-troubleshooting-required", e),
            () => {
              window.removeEventListener("audio-troubleshooting-required", e);
            }
          );
        }, [Jt]));
      const Pr = _e || !!ct;
      return (0, s.jsxs)("div", {
        className: `live-widget ${b ? "session-active" : ""} ${Pr ? "has-premium-offer" : ""}`,
        children: [
          (0, s.jsxs)("div", {
            className: "widget-toolbar " + (Pr ? "premium-toolbar" : ""),
            children: [
              ct
                ? (0, s.jsxs)("div", {
                    className: "premium-card support-card",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "premium-card-header",
                        children: [
                          (0, s.jsx)("h3", { children: o("liveWidget.audioTroubleshootingTitle") }),
                          (0, s.jsx)("div", {
                            className: "premium-header-actions",
                            children: (0, s.jsx)("button", {
                              type: "button",
                              className: "premium-close-button",
                              onClick: (e) => {
                                (e.preventDefault(), e.stopPropagation(), en());
                              },
                              "aria-label": o("common.close"),
                              children: (0, s.jsx)("span", {
                                "aria-hidden": "true",
                                children: "×",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        className: "premium-card-description",
                        children: o("liveWidget.audioTroubleshootingShortIntro"),
                      }),
                      (0, s.jsxs)("div", {
                        className: "support-card-section",
                        children: [
                          (0, s.jsx)("div", {
                            className: "support-card-section-title",
                            children: o("liveWidget.audioTroubleshootingStepsTitle"),
                          }),
                          (0, s.jsxs)("ol", {
                            className: "premium-feature-list support-step-list",
                            children: [
                              (0, s.jsx)("li", {
                                children: o("liveWidget.audioTroubleshootingStepPermissions"),
                              }),
                              (0, s.jsx)("li", {
                                children: o("liveWidget.audioTroubleshootingStepExclusive"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "premium-actions support-card-actions",
                        children: [
                          (0, s.jsx)("button", {
                            className: "toolbar-button support-card-primary-button",
                            type: "button",
                            onClick: on,
                            children: o("liveWidget.audioTroubleshootingOpenSystemSettings"),
                          }),
                          (0, s.jsx)("button", {
                            className: "toolbar-button",
                            type: "button",
                            onClick: Kn,
                            children: o("liveWidget.audioTroubleshootingRetry"),
                          }),
                          (0, s.jsx)("button", {
                            className: "toolbar-button",
                            type: "button",
                            onClick: an,
                            children: o("liveWidget.audioTroubleshootingContactSupport"),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: "support-card-divider" }),
                      (0, s.jsxs)("div", {
                        className: "support-card-details",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "support-card-section",
                            children: [
                              (0, s.jsx)("div", {
                                className: "support-card-section-title",
                                children: o("liveWidget.audioTroubleshootingQuestionsTitle"),
                              }),
                              (0, s.jsxs)("ul", {
                                className: "premium-feature-list support-step-list",
                                children: [
                                  (0, s.jsx)("li", {
                                    children: o("liveWidget.audioTroubleshootingQuestionApps"),
                                  }),
                                  (0, s.jsx)("li", {
                                    children: o("liveWidget.audioTroubleshootingQuestionCorporate"),
                                  }),
                                  (0, s.jsx)("li", {
                                    children: o("liveWidget.audioTroubleshootingLogitechHint"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "support-card-note",
                            children: [
                              (0, s.jsx)("p", {
                                children: o("liveWidget.audioTroubleshootingAppsHint"),
                              }),
                              (0, s.jsx)("p", {
                                children: o("liveWidget.audioTroubleshootingOtherAppsHint"),
                              }),
                              (0, s.jsx)("p", {
                                children: o("liveWidget.audioTroubleshootingCorporateHint"),
                              }),
                              ct.message
                                ? (0, s.jsx)("p", {
                                    className: "support-card-technical",
                                    children: `${o("common.error")}: ${ct.message}`,
                                  })
                                : null,
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "premium-actions support-card-actions",
                            children: (0, s.jsx)("button", {
                              className: "toolbar-button",
                              type: "button",
                              onClick: Dr,
                              children: o("liveWidget.audioTroubleshootingCopy"),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : _e
                  ? (0, s.jsxs)("div", {
                      className: "premium-card",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "premium-card-header",
                          children: [
                            (0, s.jsx)("h3", {
                              children: o("liveWidget.premiumLimitTitle", {
                                productName: Be || "ShadowHint",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "premium-header-actions",
                              children: (0, s.jsx)("button", {
                                type: "button",
                                className: "premium-close-button",
                                onClick: (e) => {
                                  (e.preventDefault(), e.stopPropagation(), Mr());
                                },
                                "aria-label": o("liveWidget.premiumClose"),
                                children: (0, s.jsx)("span", {
                                  "aria-hidden": "true",
                                  children: "×",
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className: "premium-card-description",
                          children: o("liveWidget.premiumLimitDescription"),
                        }),
                        (0, s.jsx)("ul", {
                          className: "premium-feature-list",
                          children: Nr.map((e, t) => (0, s.jsx)("li", { children: e }, t)),
                        }),
                        (0, s.jsx)("div", {
                          className: "premium-actions",
                          children: (0, s.jsx)("button", {
                            className: "toolbar-button buy-unlimited-button",
                            type: "button",
                            onClick: ar,
                            children: o("liveWidget.buyUnlimited"),
                          }),
                        }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", {
                          className: "toolbar-logo",
                          children: Ie
                            ? (0, s.jsx)("img", { src: Ie, alt: Re ?? "", draggable: !1 })
                            : null,
                        }),
                        !b &&
                          re &&
                          (0, s.jsxs)("button", {
                            className: "toolbar-button primary",
                            onClick: $n,
                            disabled: se || J,
                            children: [
                              (0, s.jsx)("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                "aria-hidden": "true",
                                children: (0, s.jsx)("polygon", { points: "6,4 20,12 6,20" }),
                              }),
                              (0, s.jsx)("span", { children: o("liveWidget.resumeSession") }),
                            ],
                          }),
                        (0, s.jsx)("button", {
                          className: `toolbar-button ${!b && re ? "secondary icon-only" : "primary"} has-shortcut ${b ? "active session-stop-button" : ""}`,
                          onClick: () => Zn("button"),
                          disabled: J || te,
                          "data-shortcut": Ir("start_stop_session"),
                          title: !b && re ? o("liveWidget.startNewSession") : void 0,
                          "aria-label": `${o(b ? "liveWidget.endSession" : "liveWidget.startSession")} (${Ir("start_stop_session")})`,
                          children: b
                            ? (0, s.jsx)("span", {
                                className: "session-stop-icon",
                                "aria-hidden": "true",
                              })
                            : re
                              ? (0, s.jsxs)("svg", {
                                  width: "14",
                                  height: "14",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  "aria-hidden": "true",
                                  children: [
                                    (0, s.jsx)("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
                                    (0, s.jsx)("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                                  ],
                                })
                              : (0, s.jsx)("span", {
                                  className: "shortcut-label",
                                  children: o("liveWidget.startSession"),
                                }),
                        }),
                        b &&
                          (0, s.jsxs)("div", {
                            className: "titlebar-audio-container widget-toolbar-audio",
                            children: [
                              (0, s.jsx)(v.default, {
                                isActive: b,
                                width: 40,
                                height: 16,
                                updateFrequency: 100,
                                showVolume: !0,
                              }),
                              (0, s.jsx)("button", {
                                className: "mic-settings-button",
                                onClick: rn,
                                "aria-label": o("settings.sections.audio", "Audio"),
                                type: "button",
                                children: (0, s.jsxs)("svg", {
                                  width: "14",
                                  height: "14",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  "aria-hidden": "true",
                                  children: [
                                    (0, s.jsx)("rect", {
                                      x: "9",
                                      y: "2",
                                      width: "6",
                                      height: "12",
                                      rx: "3",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                    }),
                                    (0, s.jsx)("path", {
                                      d: "M5 11a7 7 0 0 0 14 0",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                    }),
                                    (0, s.jsx)("line", {
                                      x1: "12",
                                      y1: "18",
                                      x2: "12",
                                      y2: "22",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        (0, s.jsx)("button", {
                          className: "toolbar-button has-shortcut",
                          onClick: gr,
                          disabled: !b || he,
                          "data-shortcut": Ir("send_manual"),
                          "aria-label": `${o("liveWidget.askAI")} (${Ir("send_manual")})`,
                          children: (0, s.jsx)("span", {
                            className: "shortcut-label",
                            children: o("liveWidget.askAI"),
                          }),
                        }),
                        (0, s.jsxs)("button", {
                          className: "toolbar-button has-shortcut",
                          onClick: () => or(),
                          disabled: !b || he,
                          "data-shortcut": Ir("screenshot"),
                          "aria-label": `${o("liveWidget.shareImage")}: ${yt} (${Ir("screenshot")})`,
                          children: [
                            (0, s.jsx)("span", {
                              className: "screenshot-icon",
                              "aria-hidden": "true",
                              children: "partial" === Ct ? (0, s.jsx)(N, {}) : (0, s.jsx)(R, {}),
                            }),
                            (0, s.jsx)("span", {
                              className: "shortcut-label",
                              children: o("liveWidget.shareImage"),
                            }),
                          ],
                        }),
                      ],
                    }),
              (0, s.jsx)("div", {
                className: "toolbar-settings",
                role: "button",
                tabIndex: 0,
                onClick: Mn,
                onKeyDown: (e) => {
                  ("Enter" !== e.key && " " !== e.key) || (e.preventDefault(), Mn());
                },
                "aria-haspopup": "menu",
                "aria-expanded": q,
                "aria-label": o("liveWidget.openSettings"),
                children: (0, s.jsx)("div", {
                  className: "toolbar-icon-button " + (q ? "active" : ""),
                  children: (0, s.jsx)(f.default, { size: 16, color: "#FFFFFF" }),
                }),
              }),
            ],
          }),
          (0, s.jsxs)("div", {
            ref: kn,
            className: "suggestion-container",
            tabIndex: 0,
            children: [
              Ee,
              st
                ? (0, s.jsx)(y.default, {
                    error: st.error,
                    errorType: st.errorType,
                    userMessage: st.userMessage,
                    className: "mb-4",
                  })
                : (0, s.jsx)(_.SuggestionContainer, {
                    suggestion: j,
                    isStreaming: Ae,
                    streamingComplete: me,
                    onChoiceClick: fr,
                    isHidden: !0,
                  }),
            ],
          }),
        ],
      });
    }));
}

export default LiveWidgetWebpackModule;
