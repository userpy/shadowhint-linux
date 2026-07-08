/*
 * Recovered from renderer webpack module 36067.
 * Inferred module name: TranscriptionWindow.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 11557
 * - 723
 * - 5939
 */

function TranscriptionWindowWebpackModule(e, t, n) {
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
    c = a(n(11557));
  (n(723), n(5939));
  const d = (0, l.memo)(({ item: e }) =>
    (0, s.jsx)("div", {
      className: "transcription-message",
      "data-speaker": e.speaker,
      children: e.text,
    }),
  );
  ((d.displayName = "TranscriptionMessage"),
    (t.default = () => {
      const [e, t] = (0, l.useState)(() => {
          try {
            const e = localStorage.getItem("transcriptionMessages");
            if (e) {
              const t = JSON.parse(e);
              if (Array.isArray(t) && t.length > 0) {
                const e = t[t.length - 1];
                if (e && e.timestamp) {
                  const n = new Date(e.timestamp).getTime();
                  if (Date.now() - n < 864e5) return t.slice(-50);
                }
              }
            }
          } catch (e) {
            console.error("Ошибка при загрузке сохраненных сообщений транскрипции:", e);
          }
          return [];
        }),
        { ref: n, height: r } = (0, c.default)(),
        o = ((e, t) =>
          (0, l.useMemo)(() => {
            if (!t || 0 === e.length) return e.slice(-1);
            const n = t - 16;
            let r = 0;
            const o = [];
            for (let t = e.length - 1; t >= 0; t--) {
              const i = e[t],
                a = Math.ceil(i.text.length / 45),
                s = 18 * Math.max(1, a) + 16 + (o.length > 0 ? 4 : 0);
              if (!(r + s <= n)) break;
              ((r += s), o.unshift(i));
            }
            return 0 === o.length && e.length > 0 ? [e[e.length - 1]] : o;
          }, [e, t]))(e, r);
      return (
        (0, l.useEffect)(() => {
          if (e.length > 0)
            try {
              localStorage.setItem("transcriptionMessages", JSON.stringify(e));
            } catch (e) {
              console.error("Ошибка при сохранении сообщений транскрипции:", e);
            }
        }, [e]),
        (0, l.useEffect)(
          () => (
            window.api?.transcription &&
              (window.api.transcription.onUpdate((e) => {
                t((t) => {
                  const n = [...t, e];
                  return n.length > 50 ? n.slice(-50) : n;
                });
              }),
              window.api.transcription.onClear(() => {
                t([]);
                try {
                  localStorage.removeItem("transcriptionMessages");
                } catch (e) {
                  console.error("Ошибка при очистке сохраненных сообщений:", e);
                }
              })),
            () => {
              window.api?.transcription &&
                (window.api.transcription.offUpdate(), window.api.transcription.offClear());
            }
          ),
          [50],
        ),
        (0, s.jsx)("div", {
          className: "transcription-window",
          children:
            0 === e.length
              ? (0, s.jsx)("div", { className: "transcription-empty" })
              : (0, s.jsx)("div", {
                  ref: n,
                  className: "transcription-container",
                  children: o.map((e, t) =>
                    (0, s.jsx)(d, { item: e, index: t }, `${e.timestamp}-${t}`),
                  ),
                }),
        })
      );
    }));
}

export default TranscriptionWindowWebpackModule;
