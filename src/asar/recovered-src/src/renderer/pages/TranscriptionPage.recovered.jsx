/*
 * Recovered from renderer webpack module 49468.
 * Inferred module name: TranscriptionPage.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 36067 (TranscriptionWindow)
 * - 723
 */

function TranscriptionPageWebpackModule(e, t, n) {
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
    c = a(n(36067));
  (n(723),
    (t.default = () => (
      (0, l.useEffect)(() => {
        (document.documentElement.setAttribute("data-transcription-window", "true"),
          document.body.setAttribute("data-transcription-window", "true"));
        const e = document.getElementById("root");
        return (
          e && e.setAttribute("data-transcription-window", "true"),
          () => {
            (document.documentElement.removeAttribute("data-transcription-window"),
              document.body.removeAttribute("data-transcription-window"));
            const e = document.getElementById("root");
            e && e.removeAttribute("data-transcription-window");
          }
        );
      }, []),
      (0, s.jsx)("div", { className: "transcription-page", children: (0, s.jsx)(c.default, {}) })
    )));
}

export default TranscriptionPageWebpackModule;
