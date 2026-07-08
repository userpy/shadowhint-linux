/*
 * Recovered from renderer webpack module 98162.
 * Inferred module name: TitleBar.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 50360
 * - 99163
 * - 84382
 * - 80367
 * - 369
 * - 8386
 * - 57554 (MiniCombinedWaveform)
 * - 15724 (MicrophoneSelector)
 * - 65356 (AnalyticsService)
 */

function TitleBarWebpackModule(e, t, n) {
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
    c = n(50360),
    d = n(99163);
  (n(84382), n(80367), n(369));
  const u = n(8386),
    p = a(n(57554)),
    A = a(n(15724)),
    g = n(65356);
  t.default = ({
    title: e,
    isSuggestionWindow: t = !1,
    status: n,
    statusMessage: r,
    isSessionActive: o = !1,
    isAutoDetectionEnabled: i = !1,
    onToggleAutoDetection: a,
    variantConfig: m,
  }) => {
    const { t: f } = (0, d.useTranslation)(),
      [h, b] = (0, l.useState)(!1),
      _ = (0, l.useRef)(null),
      [C, E] = (0, l.useState)({ top: 0, right: 0 }),
      [y, v] = (0, l.useState)(!1),
      S = (0, l.useRef)(null),
      [x, w] = (0, l.useState)({ top: 0, right: 0 }),
      k = (0, l.useRef)(null),
      [T, B] = (0, l.useState)(""),
      [I, R] = (0, l.useState)(""),
      [N, O] = (0, l.useState)(!1),
      [D, M] = (0, l.useState)([]),
      P =
        D.length > 0
          ? D
          : [
              {
                id: "send_manual",
                accelerator: "CommandOrControl+Enter",
                description: f("titleBar.sendRequest"),
              },
              {
                id: "screenshot",
                accelerator: "CommandOrControl+Shift+Enter",
                description: f("titleBar.sendScreenshot"),
              },
              {
                id: "previous",
                accelerator: "CommandOrControl+Left",
                description: f("titleBar.previousNext"),
              },
              {
                id: "next",
                accelerator: "CommandOrControl+Right",
                description: f("titleBar.previousNext"),
              },
              {
                id: "hide_suggestion",
                accelerator: "CommandOrControl+Shift+C",
                description: f("titleBar.toggleText"),
              },
              {
                id: "toggle_click_through",
                accelerator: "CommandOrControl+Shift+T",
                description: f("titleBar.clickThrough"),
              },
            ],
      L = m?.telegramChannel || "https://t.me/shadowhint",
      z = m?.telegramSupport || "https://t.me/shadowhintsupport",
      U = !1 !== m?.showTelegramChannel && Boolean(m?.telegramChannel),
      F = (e) => {
        const t = ((e) => {
          if (!Array.isArray(P)) return "";
          const t = P.find((t) => t.id === e);
          return t ? t.accelerator : "";
        })(e);
        return t ? (0, u.formatKeyDisplay)(t.replace(/CommandOrControl/g, "Ctrl")) : "";
      },
      j = (0, l.useCallback)(
        async (e) => {
          try {
            await navigator.mediaDevices
              .getUserMedia({ audio: !0 })
              .then((e) => {
                e.getTracks().forEach((e) => e.stop());
              })
              .catch(() => {});
            const t = (await navigator.mediaDevices.enumerateDevices()).filter(
              (e) => "audioinput" === e.kind,
            );
            if (!e || "" === e) return f("titleBar.defaultMicrophone");
            const n = t.find((t) => t.deviceId === e);
            return n && n.label ? n.label : f("titleBar.defaultMicrophone");
          } catch (e) {
            return (
              console.error("Ошибка получения названия микрофона:", e),
              f("titleBar.microphone")
            );
          }
        },
        [f],
      ),
      G = (0, l.useCallback)(
        async (e) => {
          B(e);
          const t = await j(e);
          R(t);
        },
        [j],
      ),
      W = (0, l.useCallback)((e) => {
        const t = e.toLowerCase();
        return [
          "virtual",
          "vb-audio",
          "voicemeeter",
          "obs",
          "blackhole",
          "soundflower",
          "loopback",
          "elgato",
          "wave link",
          "nvidia broadcast",
          "rtx voice",
          "krisp",
          "virtual cable",
          "vac",
          "virtual microphone",
        ].some((e) => t.includes(e));
      }, []),
      Y = (0, l.useCallback)(async () => {
        try {
          const e = await window.api.system.getPlatform(),
            t = "darwin" === e;
          (console.log("Определение дефолтного микрофона, платформа:", e),
            await navigator.mediaDevices
              .getUserMedia({ audio: !0 })
              .then((e) => {
                e.getTracks().forEach((e) => e.stop());
              })
              .catch(() => {}));
          const n = (await navigator.mediaDevices.enumerateDevices()).filter(
              (e) => "audioinput" === e.kind,
            ),
            r = n.filter((e) => e.label && e.label.trim().length > 0),
            o = r.length > 0 ? r : n,
            i = o.filter(
              (e) =>
                e.deviceId &&
                "default" !== e.deviceId &&
                "communications" !== e.deviceId &&
                !W(e.label),
            ),
            a = i.length > 0 ? i : o;
          if (
            (console.log(
              "Все доступные микрофоны:",
              a.map((e) => (e.deviceId || "unknown") + ": " + (e.label || "")),
            ),
            console.log("Найдено физических микрофонов:", i.length),
            t && a.length > 0)
          ) {
            const e = a.find((e) => {
              const t = (e.label || "").toLowerCase();
              return (
                t.includes("macbook") ||
                t.includes("built-in") ||
                t.includes("встроенный") ||
                t.includes("internal")
              );
            });
            if (e)
              return (
                console.log("Найден встроенный микрофон MacBook:", e.label, e.deviceId),
                { deviceId: e.deviceId || "", name: e.label || f("titleBar.defaultMicrophone") }
              );
          }
          if (i.length > 0) {
            const e = i[0];
            return (
              console.log("Используем первый доступный микрофон:", e.label, e.deviceId),
              { deviceId: e.deviceId || "", name: e.label || f("titleBar.defaultMicrophone") }
            );
          }
          if (a.length > 0) {
            const e = a[0];
            return (
              console.log("Используем fallback аудио устройство:", e.label, e.deviceId),
              { deviceId: e.deviceId || "", name: e.label || f("titleBar.defaultMicrophone") }
            );
          }
          return (
            console.log("Не найдено доступных физических микрофонов"),
            { deviceId: "", name: f("titleBar.defaultMicrophone") }
          );
        } catch (e) {
          return (
            console.error("Ошибка определения дефолтного микрофона:", e),
            { deviceId: "", name: f("titleBar.microphone") }
          );
        }
      }, [W, f]);
    ((0, l.useEffect)(() => {
      ((async () => {
        try {
          const e = await window.api.settings.getDeviceSettings();
          if (e.success && e.settings?.microphone?.deviceId) {
            const t = e.settings.microphone.deviceId;
            (await G(t), console.log("Загружен сохраненный микрофон:", t));
          } else {
            console.log("Сохраненного микрофона нет, определяем дефолтный...");
            const t = await Y();
            if ((await G(t.deviceId), t.deviceId))
              try {
                const n =
                    e.success && e.settings
                      ? e.settings
                      : {
                          microphone: { deviceId: "", volume: 80 },
                          output: { deviceId: "", volume: 80 },
                          permissions: { mic: !0, screen: !1 },
                        },
                  r = {
                    ...n,
                    microphone: {
                      ...(n.microphone || { deviceId: "", volume: 80 }),
                      deviceId: t.deviceId,
                    },
                  };
                (await window.api.settings.saveDeviceSettings(r),
                  console.log("Дефолтный микрофон сохранен в настройках:", t.deviceId, t.name));
              } catch (e) {
                console.error("Ошибка сохранения дефолтного микрофона:", e);
              }
          }
        } catch (e) {
          (console.error("Ошибка загрузки настроек микрофона:", e),
            B(""),
            R(f("titleBar.microphone")));
        }
      })(),
        "#/live-widget" === window.location.hash &&
          (console.log("TitleBar: На странице LiveWidget, запрашиваем разрешения..."),
          (async () => {
            try {
              (await navigator.mediaDevices.enumerateDevices()).some(
                (e) => "audioinput" === e.kind && e.label && e.label.length > 0,
              )
                ? console.log("TitleBar: Разрешения на микрофон уже есть")
                : (console.log("TitleBar: Запрашиваем разрешение на микрофон для селектора..."),
                  (await navigator.mediaDevices.getUserMedia({ audio: !0 }))
                    .getTracks()
                    .forEach((e) => e.stop()),
                  console.log("TitleBar: Разрешение на микрофон получено"));
            } catch (e) {
              console.error("TitleBar: Ошибка запроса разрешения на микрофон:", e);
            }
          })()));
    }, [G, Y, f]),
      (0, l.useEffect)(() => {
        const e = async (e, t) => {
          const n = t?.microphone?.deviceId ?? t?.deviceId;
          n && (await G(n));
        };
        return (
          window.api?.ipcRenderer?.on("settings:device-updated", e),
          window.api?.ipcRenderer?.on("audio:microphoneChangeRequested", e),
          () => {
            (window.api?.ipcRenderer?.removeListener?.("settings:device-updated", e),
              window.api?.ipcRenderer?.removeListener?.("audio:microphoneChangeRequested", e));
          }
        );
      }, [G]),
      (0, l.useEffect)(
        () => () => {
          const e = window.globalAudioStreamer;
          e?.stopMicrophonePreview && e.stopMicrophonePreview().catch(() => {});
        },
        [],
      ),
      (0, l.useEffect)(() => {
        if (h && _.current) {
          const e = _.current.getBoundingClientRect(),
            t = 150,
            n = window.innerHeight,
            r = e.top,
            o = n - e.bottom;
          let i = e.top - t - 10;
          (r < t && o > t ? (i = e.bottom + 5) : r < t && o < t && (i = Math.max(10, (n - t) / 2)),
            E({ top: Math.max(30, i), right: window.innerWidth - e.right }));
        }
      }, [h]),
      (0, l.useEffect)(() => {
        if (y && S.current) {
          const e = S.current.getBoundingClientRect(),
            t = 80,
            n = window.innerHeight,
            r = e.top,
            o = n - e.bottom;
          let i = e.top - t - 10;
          (r < t && o > t ? (i = e.bottom + 5) : r < t && o < t && (i = Math.max(10, (n - t) / 2)),
            w({ top: Math.max(30, i), right: window.innerWidth - e.right }));
        }
      }, [y]),
      (0, l.useEffect)(
        () => () => {
          k.current && clearTimeout(k.current);
        },
        [],
      ),
      (0, l.useEffect)(() => {
        (async () => {
          try {
            const e = await window.api.settings.getShortcuts();
            e.success && e.shortcuts && M(e.shortcuts);
          } catch (e) {
            console.error("Ошибка загрузки настроек горячих клавиш в TitleBar:", e);
          }
        })();
        const e = (e) => {
          (console.log("TitleBar: Получено обновление горячих клавиш:", e), M(e));
        };
        return (
          window.api?.on && window.api.on("shortcuts:updated", e),
          () => {
            window.api?.off && window.api.off("shortcuts:updated", e);
          }
        );
      }, []));
    const H = () => {
        (k.current && (clearTimeout(k.current), (k.current = null)), v(!0));
      },
      V = () => {
        k.current = setTimeout(() => {
          v(!1);
        }, 100);
      };
    return (0, s.jsxs)("div", {
      className: "titlebar",
      children: [
        (0, s.jsxs)("div", {
          className: "titlebar-drag-region",
          children: [
            (0, s.jsx)("div", { className: "titlebar-title", children: e }),
            n &&
              r &&
              (0, s.jsxs)("div", {
                className: "titlebar-status-container",
                children: [
                  (0, s.jsx)("div", {
                    className: `titlebar-status-indicator ${(() => {
                      if (!n) return "";
                      switch (n) {
                        case "active":
                          return "status-active";
                        case "warning":
                          return "status-warning";
                        case "error":
                          return "status-error";
                        default:
                          return "status-idle";
                      }
                    })()}`,
                  }),
                  (0, s.jsx)("div", { className: "titlebar-status-message", children: r }),
                ],
              }),
            o &&
              (0, s.jsx)("div", {
                className: "titlebar-auto-detection",
                children: (0, s.jsxs)("button", {
                  className: "auto-detection-btn " + (i ? "enabled" : "disabled"),
                  onClick: a,
                  children: [
                    f("titleBar.autoAnswers"),
                    (0, s.jsx)("span", { className: "toggle-dot " + (i ? "on" : "off") }),
                  ],
                }),
              }),
            o &&
              (0, s.jsxs)("div", {
                className: "titlebar-audio-container",
                children: [
                  (0, s.jsx)(p.default, {
                    isActive: o,
                    width: 40,
                    height: 16,
                    updateFrequency: 100,
                    showVolume: !0,
                  }),
                  (0, s.jsx)(A.default, {
                    isOpen: N,
                    onToggle: async (e) => {
                      const t = "boolean" == typeof e ? e : !N;
                      if (t === N) return;
                      O(t);
                      const n = window.globalAudioStreamer;
                      if (n)
                        try {
                          const e = n.getAudioStatus?.();
                          t && T && !e?.isRecording
                            ? await n.startMicrophonePreview(T)
                            : "function" == typeof n.stopMicrophonePreview &&
                              (await n.stopMicrophonePreview());
                        } catch (e) {
                          console.error("Ошибка управления preview микрофона:", e);
                        }
                    },
                    onMicrophoneSelect: async (e) => {
                      (0, g.trackSettings)("device_changed", { device: "microphone", value: e });
                      try {
                        await G(e);
                        const t = window.globalAudioStreamer,
                          n = t?.getAudioStatus?.().isRecording;
                        if (n)
                          try {
                            const t = await window.api.audio.changeMicrophone(e);
                            t.success || console.error("❌ Ошибка смены микрофона:", t.error);
                          } catch (e) {
                            console.error("❌ Ошибка API changeMicrophone:", e);
                          }
                        else if (!n && N && t?.startMicrophonePreview)
                          try {
                            await t.startMicrophonePreview(e);
                          } catch (e) {
                            console.error("Ошибка переключения preview на новый микрофон:", e);
                          }
                        const r = await window.api.settings.getDeviceSettings();
                        if (r.success && r.settings) {
                          const t = {
                            ...r.settings,
                            microphone: {
                              ...(r.settings.microphone || { deviceId: "", volume: 80 }),
                              deviceId: e,
                            },
                          };
                          await window.api.settings.saveDeviceSettings(t);
                        }
                      } catch (e) {
                        console.error("Ошибка сохранения настроек микрофона:", e);
                      }
                    },
                    selectedDeviceId: T,
                    currentMicrophoneName: I,
                  }),
                ],
              }),
          ],
        }),
        (0, s.jsxs)("div", {
          className: "titlebar-controls",
          children: [
            (0, s.jsx)("button", {
              className: "titlebar-button help-button",
              ref: _,
              onMouseEnter: () => {
                ((0, g.trackUI)("button_clicked", "help_tooltip", { context: "titlebar" }), b(!0));
              },
              onMouseLeave: () => {
                b(!1);
              },
              children: (0, s.jsxs)("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                children: [
                  (0, s.jsx)("circle", {
                    cx: "6",
                    cy: "6",
                    r: "5",
                    stroke: "#E0E0E0",
                    strokeWidth: "1",
                    fill: "none",
                  }),
                  (0, s.jsx)("text", {
                    x: "6",
                    y: "8",
                    fontSize: "8",
                    textAnchor: "middle",
                    fill: "#E0E0E0",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: "bold",
                    children: "?",
                  }),
                ],
              }),
            }),
            (0, s.jsx)("button", {
              className: "titlebar-button telegram-button",
              ref: S,
              onMouseEnter: () => {
                H();
              },
              onMouseLeave: () => {
                V();
              },
              onClick: async () => {
                (0, g.trackUI)("button_clicked", "telegram_support", { context: "titlebar" });
                const e = z;
                try {
                  if (window.api && window.api.shell) {
                    const t = await window.api.shell.openExternal(e);
                    t.success ||
                      (console.error("Shell openExternal failed:", t.error),
                      window.open(e, "_blank"));
                  } else window.open(e, "_blank");
                } catch (t) {
                  (console.error("Ошибка открытия ссылки техподдержки:", t),
                    window.open(e, "_blank"));
                }
              },
              children: (0, s.jsx)("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: (0, s.jsx)("path", {
                  d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                  fill: "#E0E0E0",
                }),
              }),
            }),
            (0, s.jsx)("button", {
              className: "titlebar-button close-button",
              onClick: () => {
                (0, g.trackUI)("button_clicked", "close_window", { context: "titlebar" });
                try {
                  if (!window.api?.window) return void console.error("Window API недоступно");
                  t
                    ? window.api.window.closeSuggestionWindow().catch((e) => {
                        console.error("Ошибка при закрытии окна подсказки:", e);
                      })
                    : window.api.window.close().catch((e) => {
                        console.error("Ошибка при закрытии окна:", e);
                      });
                } catch (e) {
                  console.error("Ошибка в handleClose:", e);
                }
              },
              children: (0, s.jsxs)("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                children: [
                  (0, s.jsx)("line", {
                    x1: "2",
                    y1: "2",
                    x2: "10",
                    y2: "10",
                    stroke: "#E0E0E0",
                    strokeWidth: "1.5",
                  }),
                  (0, s.jsx)("line", {
                    x1: "10",
                    y1: "2",
                    x2: "2",
                    y2: "10",
                    stroke: "#E0E0E0",
                    strokeWidth: "1.5",
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, c.createPortal)(
          (0, s.jsx)(
            () =>
              (0, s.jsx)("div", {
                className: "help-tooltip-portal " + (h ? "visible" : ""),
                style: { top: C.top, right: C.right },
                children: (0, s.jsx)("div", {
                  className: "help-tooltip-content",
                  children: (0, s.jsxs)("div", {
                    className: "help-section",
                    children: [
                      (0, s.jsx)("h4", { children: f("titleBar.hotkeys") }),
                      (0, s.jsxs)("div", {
                        className: "shortcut-item",
                        children: [
                          (0, s.jsx)("span", {
                            className: "shortcut-key",
                            children: F("send_manual"),
                          }),
                          (0, s.jsx)("span", {
                            className: "shortcut-desc",
                            children: f("titleBar.sendRequest"),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "shortcut-item",
                        children: [
                          (0, s.jsx)("span", {
                            className: "shortcut-key",
                            children: F("screenshot"),
                          }),
                          (0, s.jsx)("span", {
                            className: "shortcut-desc",
                            children: f("titleBar.sendScreenshot"),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "shortcut-item",
                        children: [
                          (0, s.jsxs)("span", {
                            className: "shortcut-key",
                            children: [F("cmd_scroll_up"), "/", F("cmd_scroll_down")],
                          }),
                          (0, s.jsx)("span", {
                            className: "shortcut-desc",
                            children: f("titleBar.scrollSuggestion"),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "shortcut-item",
                        children: [
                          (0, s.jsxs)("span", {
                            className: "shortcut-key",
                            children: [F("previous"), "/", F("next")],
                          }),
                          (0, s.jsx)("span", {
                            className: "shortcut-desc",
                            children: f("titleBar.previousNext"),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "shortcut-item",
                        children: [
                          (0, s.jsx)("span", {
                            className: "shortcut-key",
                            children: (0, u.formatKeyDisplay)("Ctrl+ Shift ←↑↓→"),
                          }),
                          (0, s.jsx)("span", {
                            className: "shortcut-desc",
                            children: f("titleBar.moveWindow"),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "shortcut-item",
                        children: [
                          (0, s.jsx)("span", {
                            className: "shortcut-key",
                            children: (0, u.formatKeyDisplay)("Ctrl+ Shift C"),
                          }),
                          (0, s.jsx)("span", {
                            className: "shortcut-desc",
                            children: f("titleBar.toggleText"),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "shortcut-item",
                        children: [
                          (0, s.jsx)("span", {
                            className: "shortcut-key",
                            children: F("toggle_click_through"),
                          }),
                          (0, s.jsx)("span", {
                            className: "shortcut-desc",
                            children: f("titleBar.clickThrough"),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            {},
          ),
          document.body,
        ),
        (0, c.createPortal)(
          (0, s.jsx)(
            () =>
              (0, s.jsx)("div", {
                className: "help-tooltip-portal " + (y ? "visible" : ""),
                style: { top: x.top, right: x.right },
                onMouseEnter: H,
                onMouseLeave: V,
                children: (0, s.jsx)("div", {
                  className: "help-tooltip-content",
                  children: (0, s.jsxs)("div", {
                    className: "help-section",
                    children: [
                      U &&
                        (0, s.jsxs)("div", {
                          className: "telegram-link-item",
                          children: [
                            (0, s.jsxs)("span", {
                              className: "shortcut-desc",
                              children: [f("titleBar.ourChannel"), "  "],
                            }),
                            (0, s.jsx)("span", {
                              className: "shortcut-desc",
                              children: (0, s.jsxs)("a", {
                                href: L,
                                onClick: (e) => {
                                  (e.stopPropagation(),
                                    e.preventDefault(),
                                    (0, g.trackUI)("button_clicked", "telegram_channel", {
                                      context: "titlebar",
                                    }));
                                  const t = L;
                                  window.api && window.api.shell
                                    ? window.api.shell.openExternal(t)
                                    : window.open(t, "_blank");
                                },
                                style: { color: "#29abe2", textDecoration: "none" },
                                children: [
                                  (0, s.jsx)("svg", {
                                    width: "8",
                                    height: "8",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    style: { marginRight: "2px" },
                                    children: (0, s.jsx)("path", {
                                      d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                                    }),
                                  }),
                                  L.replace("https://t.me/", ""),
                                ],
                              }),
                            }),
                          ],
                        }),
                      (0, s.jsxs)("div", {
                        className: "telegram-link-item",
                        children: [
                          (0, s.jsxs)("span", {
                            className: "shortcut-desc",
                            children: [f("titleBar.support"), "  "],
                          }),
                          (0, s.jsx)("span", {
                            className: "shortcut-desc",
                            children: (0, s.jsxs)("a", {
                              href: z,
                              onClick: (e) => {
                                (e.stopPropagation(),
                                  e.preventDefault(),
                                  (0, g.trackUI)("button_clicked", "telegram_support_tooltip", {
                                    context: "titlebar",
                                  }));
                                const t = z;
                                window.api && window.api.shell
                                  ? window.api.shell.openExternal(t)
                                  : window.open(t, "_blank");
                              },
                              style: { color: "#29abe2", textDecoration: "none" },
                              children: [
                                (0, s.jsx)("svg", {
                                  width: "8",
                                  height: "8",
                                  viewBox: "0 0 24 24",
                                  fill: "currentColor",
                                  style: { marginRight: "2px" },
                                  children: (0, s.jsx)("path", {
                                    d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                                  }),
                                }),
                                z.replace("https://t.me/", ""),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            {},
          ),
          document.body,
        ),
      ],
    });
  };
}

export default TitleBarWebpackModule;
