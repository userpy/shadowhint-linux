/*
 * Recovered from renderer webpack module 57554.
 * Inferred module name: MiniCombinedWaveform.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 80367
 */

function MiniCombinedWaveformWebpackModule(e, t, n) {
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
  (n(80367),
    (t.default = ({
      isActive: e = !1,
      width: t = 60,
      height: n = 20,
      updateFrequency: r = 50,
      showVolume: o = !0,
    }) => {
      const { t: i } = (0, l.useTranslation)(),
        c = (0, s.useRef)(null),
        d = (0, s.useRef)(),
        u = (0, s.useRef)({
          micVolume: 0,
          systemVolume: 0,
          combinedVolume: 0,
          micFrequencyData: null,
          systemFrequencyData: null,
        }),
        p = (0, s.useRef)(null),
        A = (0, s.useRef)(null),
        g = (0, s.useRef)(null),
        m = (0, s.useRef)(null),
        [f, h] = (0, s.useState)(!1),
        b = (0, s.useRef)(!1),
        _ = (0, s.useCallback)((e, t) => {
          if (!e || !t) return null;
          try {
            const n = e.createAnalyser();
            return (
              (n.fftSize = 256),
              (n.minDecibels = -60),
              (n.maxDecibels = -10),
              (n.smoothingTimeConstant = 0.3),
              t.connect(n),
              console.log("🎵 MiniCombinedWaveform: Анализатор инициализирован", {
                sampleRate: e.sampleRate,
                fftSize: n.fftSize,
                frequencyBinCount: n.frequencyBinCount,
              }),
              n
            );
          } catch (e) {
            return (
              console.error("Ошибка инициализации анализатора в MiniCombinedWaveform:", e),
              null
            );
          }
        }, []),
        C = (0, s.useCallback)(() => {
          const t = window.globalAudioStreamer,
            n = e || (t?.isPreviewActive?.() ?? !1);
          if (!t || !n)
            return {
              micVolume: 0,
              systemVolume: 0,
              combinedVolume: 0,
              micFrequencyData: null,
              systemFrequencyData: null,
            };
          const r = t.getMicAnalyser?.(),
            o = t.getSpeakerAnalyser?.();
          let i = null,
            a = null;
          if (r)
            try {
              const e = new Uint8Array(r.frequencyBinCount);
              r.getByteFrequencyData(e);
              const t = Math.floor(300 / (16e3 / e.length)),
                n = Math.floor(3e3 / (16e3 / e.length));
              let o = 0,
                a = 0;
              for (let r = 0; r < e.length; r++) {
                let i = 1;
                (r >= t && r <= n && (i = 2.5), (o += e[r] * i), (a += i));
              }
              const s = o / a,
                l = Math.min(1, Math.max(0, s / 60));
              i = { volume: Math.round(100 * l), frequencyData: e };
            } catch (e) {
              console.error("Ошибка получения данных микрофона:", e);
            }
          if (o)
            try {
              const e = new Uint8Array(o.frequencyBinCount);
              o.getByteFrequencyData(e);
              const t = Math.floor(300 / (16e3 / e.length)),
                n = Math.floor(3e3 / (16e3 / e.length));
              let r = 0,
                i = 0;
              for (let o = 0; o < e.length; o++) {
                let a = 1;
                (o >= t && o <= n && (a = 2.5), (r += e[o] * a), (i += a));
              }
              const s = r / i,
                l = Math.min(1, Math.max(0, s / 120));
              a = { volume: Math.round(100 * l), frequencyData: e };
            } catch (e) {
              console.error("Ошибка получения данных системного звука:", e);
            }
          else {
            const e = t.getSystemAudioPCM?.();
            e && e.length > 0 && (a = x(e));
          }
          const s = i?.volume || 0,
            l = a?.volume || 0;
          return {
            micVolume: s,
            systemVolume: l,
            combinedVolume: Math.round(Math.max(s, l)),
            micFrequencyData: i?.frequencyData || null,
            systemFrequencyData: a?.frequencyData || null,
          };
        }, [e]),
        E = (0, s.useCallback)((e, t) => {
          if (!e && !t) return new Uint8Array(32).fill(0);
          if (!e) return t;
          if (!t) return e;
          const n = Math.min(e.length, t.length),
            r = new Uint8Array(n);
          for (let o = 0; o < n; o++) r[o] = Math.round(0.6 * e[o] + 0.4 * t[o]);
          return r;
        }, []),
        y = (0, s.useCallback)(
          (e) => {
            const t = b.current,
              n = (e) => {
                if (!t) return 0.1;
                const n = Math.max(0, Math.min(1, e / 100));
                return Math.max(0.1, n);
              },
              r = [A, g, m],
              o = [e.micVolume, (e.micVolume + e.systemVolume) / 2, e.systemVolume];
            for (let e = 0; e < 3; e++) {
              const t = r[e].current;
              if (!t) continue;
              const i = t.querySelector("rect");
              if (!i) continue;
              const a = 4 + 12 * Math.max(0, Math.min(1, n(o[e]))),
                s = (16 - a) / 2;
              (i.setAttribute("height", String(a)), i.setAttribute("y", String(s)));
            }
            if (p.current)
              if (t)
                if (e.combinedVolume < 1) p.current.textContent = " 0%";
                else {
                  const t = e.combinedVolume.toString().padStart(1, " ");
                  p.current.textContent = ` ${t}%`;
                }
              else p.current.textContent = ` ${i("audio.readyToRecord")}`;
          },
          [i],
        ),
        v = (0, s.useCallback)(() => {
          const r = c.current;
          if (!r) return;
          const o = r.getContext("2d");
          if (!o) return;
          const i = C();
          if (
            ((u.current = i),
            y(i),
            (o.fillStyle = "rgba(0, 0, 0, 0.8)"),
            o.fillRect(0, 0, t, n),
            !e || i.combinedVolume < 1)
          )
            return (
              (o.strokeStyle = "rgba(255, 255, 255, 0.3)"),
              (o.lineWidth = 1),
              o.beginPath(),
              o.moveTo(0, n / 2),
              o.lineTo(t, n / 2),
              void o.stroke()
            );
          const a = E(i.micFrequencyData, i.systemFrequencyData),
            s = t / 7,
            l = Math.floor(a.length / 7),
            d = window.globalAudioStreamer;
          let p = "rgba(138, 43, 226, 0.9)";
          (d?.isPreviewActive?.()
            ? (p = "rgba(255, 165, 0, 0.8)")
            : i.micVolume > 1.5 * i.systemVolume
              ? (p = "rgba(0, 255, 65, 0.8)")
              : i.systemVolume > 1.5 * i.micVolume && (p = "rgba(0, 153, 255, 0.8)"),
            (o.fillStyle = p));
          for (let e = 0; e < 7; e++) {
            const t = Math.min(e * l, a.length - 1),
              r = Math.max(2, (a[t] / 255) * n),
              i = e * s,
              c = n - r;
            (a[t] > 100 ? ((o.shadowColor = p), (o.shadowBlur = 2)) : (o.shadowBlur = 0),
              o.fillRect(i, c, s - 1, r));
          }
          o.shadowBlur = 0;
        }, [t, n, e, C, E, y]),
        S = (0, s.useCallback)(() => {
          (v(),
            e &&
              (d.current = window.setTimeout(() => {
                requestAnimationFrame(S);
              }, r)));
        }, [v, e, r]);
      ((0, s.useEffect)(
        () => (
          e
            ? (h(!0), (b.current = !0), S())
            : (h(!1), (b.current = !1), d.current && window.clearTimeout(d.current), v()),
          () => {
            d.current && window.clearTimeout(d.current);
          }
        ),
        [e, S, v],
      ),
        (0, s.useEffect)(() => {
          const e = window.globalAudioStreamer;
          return (
            e &&
              "function" == typeof e.registerWaveform &&
              (e.registerWaveform("user", {
                initializeAnalyser: _,
                component: "MiniCombinedWaveform-mic",
              }),
              e.registerWaveform("interviewer", {
                initializeAnalyser: _,
                component: "MiniCombinedWaveform-system",
              }),
              console.log(
                "🎵 MiniCombinedWaveform: Зарегистрирован для микрофона и системного звука",
              )),
            () => {
              e &&
                "function" == typeof e.unregisterWaveform &&
                (e.unregisterWaveform("user"), e.unregisterWaveform("interviewer"));
            }
          );
        }, [_]));
      const x = (0, s.useCallback)((e) => {
        try {
          const t = new Int16Array(e.buffer);
          let n = 0;
          for (let e = 0; e < t.length; e++) {
            const r = t[e] / 32768;
            n += r * r;
          }
          const r = 600 * Math.sqrt(n / t.length),
            o = Math.min(1, Math.max(0, r / 120));
          return { volume: Math.round(100 * o), frequencyData: null };
        } catch (e) {
          return (
            console.error("Ошибка расчета громкости из PCM данных:", e),
            { volume: 0, frequencyData: null }
          );
        }
      }, []);
      return (0, a.jsxs)("div", {
        className: "audio-unified-status " + (f ? "recording" : ""),
        children: [
          (0, a.jsx)("canvas", {
            ref: c,
            width: t,
            height: n,
            className: "mini-waveform-canvas",
            style: { display: "none" },
          }),
          o &&
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("span", {
                  className: "unified-wave-display",
                  children: (0, a.jsxs)("span", {
                    className: "unified-wave-bars",
                    children: [
                      (0, a.jsx)("svg", {
                        ref: A,
                        width: 4,
                        height: 16,
                        viewBox: "0 0 4 16",
                        fill: "none",
                        "aria-hidden": "true",
                        children: (0, a.jsx)("rect", {
                          x: 0,
                          y: 6,
                          width: 4,
                          height: 4,
                          rx: 1.5,
                          fill: "#BB86FC",
                        }),
                      }),
                      (0, a.jsx)("svg", {
                        ref: g,
                        width: 4,
                        height: 16,
                        viewBox: "0 0 4 16",
                        fill: "none",
                        "aria-hidden": "true",
                        children: (0, a.jsx)("rect", {
                          x: 0,
                          y: 6,
                          width: 4,
                          height: 4,
                          rx: 1.5,
                          fill: "#BB86FC",
                        }),
                      }),
                      (0, a.jsx)("svg", {
                        ref: m,
                        width: 4,
                        height: 16,
                        viewBox: "0 0 4 16",
                        fill: "none",
                        "aria-hidden": "true",
                        children: (0, a.jsx)("rect", {
                          x: 0,
                          y: 6,
                          width: 4,
                          height: 4,
                          rx: 1.5,
                          fill: "#BB86FC",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("span", {
                  ref: p,
                  className: "unified-volume-display",
                  children: " 0%",
                }),
              ],
            }),
        ],
      });
    }));
}

export default MiniCombinedWaveformWebpackModule;
