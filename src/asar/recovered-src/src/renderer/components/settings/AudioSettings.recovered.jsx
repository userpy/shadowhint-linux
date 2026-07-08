/*
 * Recovered from renderer webpack module 91833.
 * Inferred module name: AudioSettings.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 55099 (SettingsGroup)
 * - 26160 (SettingsSelect)
 * - 62531 (SettingsSlider)
 */

function AudioSettingsWebpackModule(e, t, n) {
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
    d = a(n(55099)),
    u = a(n(26160)),
    p = a(n(62531));
  t.default = ({ settings: e, onSettingChange: t }) => {
    const { t: n } = (0, c.useTranslation)(),
      [r, o] = (0, l.useState)([]),
      [i, a] = (0, l.useState)(""),
      [A, g] = (0, l.useState)(!1),
      [m, f] = (0, l.useState)(0),
      h = (0, l.useRef)(0),
      b = (0, l.useRef)(null),
      _ = (0, l.useRef)(null),
      C = (0, l.useRef)(null);
    (0, l.useEffect)(() => {
      (async () => {
        try {
          const e = (await navigator.mediaDevices.enumerateDevices())
            .filter((e) => "audioinput" === e.kind)
            .map((e) => ({
              value: e.deviceId,
              label:
                e.label ||
                `${n("settings.audio.microphone", "Microphone")} ${e.deviceId.slice(0, 5)}`,
            }));
          o(e);
          const t = await window.api?.settings?.getDeviceSettings?.();
          t?.success && t.settings?.microphone?.deviceId
            ? a(t.settings.microphone.deviceId)
            : e.length > 0 && a(e[0].value);
        } catch (e) {
          console.error("Failed to enumerate devices:", e);
        }
      })();
    }, [n]);
    const E = (0, l.useCallback)(async (e) => {
        a(e);
        try {
          await window.api?.audio?.changeMicrophone?.(e);
          const t = await window.api?.settings?.getDeviceSettings?.();
          if (t?.success && t.settings) {
            const n = { ...t.settings, microphone: { ...t.settings.microphone, deviceId: e } };
            await window.api?.settings?.saveDeviceSettings?.(n);
          }
        } catch (e) {
          console.error("Failed to change microphone:", e);
        }
      }, []),
      y = (0, l.useCallback)(() => {
        (h.current && (cancelAnimationFrame(h.current), (h.current = 0)),
          b.current && (b.current.getTracks().forEach((e) => e.stop()), (b.current = null)),
          C.current && (C.current.close(), (C.current = null)),
          (_.current = null),
          g(!1),
          f(0));
      }, []),
      v = (0, l.useCallback)(async () => {
        try {
          const e = { audio: !i || { deviceId: { exact: i } } },
            t = await navigator.mediaDevices.getUserMedia(e);
          b.current = t;
          const n = new AudioContext();
          C.current = n;
          const r = n.createMediaStreamSource(t),
            o = n.createAnalyser();
          ((o.fftSize = 256), r.connect(o), (_.current = o), g(!0));
          const a = new Uint8Array(o.frequencyBinCount),
            s = () => {
              if (!_.current) return;
              _.current.getByteFrequencyData(a);
              const e = a.reduce((e, t) => e + t, 0) / a.length;
              (f(Math.min(1, e / 128)), (h.current = requestAnimationFrame(s)));
            };
          s();
        } catch (e) {
          console.error("Failed to start mic test:", e);
        }
      }, [i]);
    ((0, l.useEffect)(
      () => () => {
        (h.current && cancelAnimationFrame(h.current),
          b.current && b.current.getTracks().forEach((e) => e.stop()),
          C.current && (C.current.close(), (C.current = null)));
      },
      [],
    ),
      (0, l.useEffect)(() => {
        if (b.current && i) {
          y();
          const e = setTimeout(() => {
            v();
          }, 100);
          return () => clearTimeout(e);
        }
      }, [i, y, v]));
    const S = [
      { value: "both", label: n("settings.audio.audioSourceBoth", "System audio + Microphone") },
      { value: "system", label: n("settings.audio.audioSourceSystem", "System audio only") },
      { value: "microphone", label: n("settings.audio.audioSourceMicrophone", "Microphone only") },
    ];
    return (0, s.jsxs)("div", {
      children: [
        (0, s.jsx)("h2", {
          className: "settings-section-title",
          children: n("settings.sections.audio", "Audio"),
        }),
        (0, s.jsxs)(d.default, {
          title: n("settings.audio.captureGroup", "Захват звука"),
          children: [
            (0, s.jsx)(u.default, {
              label: n("settings.audio.sourceLabel", "Источник"),
              value: e.audioSource || "both",
              options: S,
              onChange: (e) => {
                t("audioSource", e);
              },
            }),
            "system" !== e.audioSource &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(u.default, {
                    label: n("settings.audio.microphoneLabel", "Микрофон"),
                    value: i,
                    options: r,
                    onChange: E,
                  }),
                  (0, s.jsx)("div", {
                    style: { marginTop: 12 },
                    children: A
                      ? (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsxs)("div", {
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                marginBottom: 8,
                              },
                              children: [
                                (0, s.jsx)("div", {
                                  style: {
                                    flex: 1,
                                    height: 6,
                                    background: "#333",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                  },
                                  children: (0, s.jsx)("div", {
                                    style: {
                                      width: 100 * m + "%",
                                      height: "100%",
                                      background: m > 0.7 ? "#ff6b6b" : "#bb86fc",
                                      borderRadius: 3,
                                      transition: "width 0.1s ease",
                                    },
                                  }),
                                }),
                                (0, s.jsxs)("span", {
                                  style: { fontSize: 13, color: "#999", minWidth: 36 },
                                  children: [Math.round(100 * m), "%"],
                                }),
                              ],
                            }),
                            (0, s.jsx)("button", {
                              className: "settings-btn settings-btn-secondary",
                              onClick: y,
                              type: "button",
                              children: n("settings.audio.stopTest", "Stop test"),
                            }),
                          ],
                        })
                      : (0, s.jsx)("button", {
                          className: "settings-btn settings-btn-primary",
                          onClick: v,
                          type: "button",
                          disabled: 0 === r.length,
                          children: n("settings.audio.testMicrophone", "Test microphone"),
                        }),
                  }),
                ],
              }),
          ],
        }),
        (0, s.jsxs)(d.default, {
          title: n("settings.audio.processingGroup", "Обработка"),
          children: [
            (0, s.jsx)(u.default, {
              label: n("settings.audio.sttProvider", "Движок транскрипции"),
              value: e.sttProvider || "deepgram",
              options: [
                { value: "deepgram", label: "Deepgram" },
                { value: "groq", label: "Whisper Large V3 Turbo" },
              ],
              onChange: (e) => t("sttProvider", e),
            }),
            "groq" === e.sttProvider &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(u.default, {
                    label: n("settings.audio.vadMode", "Чувствительность VAD"),
                    value: String(e.vadMode),
                    onChange: (e) => t("vadMode", e),
                    options: [
                      { value: "0", label: n("settings.audio.vadModeMax", "Максимальная") },
                      { value: "1", label: n("settings.audio.vadModeHigh", "Высокая") },
                      { value: "2", label: n("settings.audio.vadModeMedium", "Средняя") },
                      { value: "3", label: n("settings.audio.vadModeLow", "Низкая") },
                    ],
                  }),
                  (0, s.jsx)(p.default, {
                    label: n("settings.audio.maxSpeechSeconds", "Макс. длительность фрагмента"),
                    min: 5,
                    max: 30,
                    step: 1,
                    value: e.maxSpeechSeconds,
                    onChange: (e) => t("maxSpeechSeconds", e),
                    formatValue: (e) => `${e} сек`,
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  };
}

export default AudioSettingsWebpackModule;
