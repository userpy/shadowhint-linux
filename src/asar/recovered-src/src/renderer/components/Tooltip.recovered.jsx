/*
 * Recovered from renderer webpack module 51270.
 * Inferred module name: Tooltip.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 53588
 */

function TooltipWebpackModule(e, t, n) {
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
    s = i(n(68329));
  (n(53588),
    (t.default = ({ children: e, text: t, position: n = "top" }) => {
      const [r, o] = (0, s.useState)(n),
        i = (0, s.useRef)(null),
        l = (0, s.useRef)(null),
        c = (0, s.useCallback)(() => {
          if (!i.current || !l.current) return void o(n);
          const e = i.current.getBoundingClientRect(),
            t = l.current.getBoundingClientRect();
          let r = n;
          if (
            ("top" === n
              ? e.top - t.height - 8 < 0 && (r = "bottom")
              : "bottom" === n
                ? e.bottom + t.height + 8 > window.innerHeight && (r = "top")
                : "left" === n
                  ? e.left - t.width - 8 < 0 && (r = "right")
                  : "right" === n && e.right + t.width + 8 > window.innerWidth && (r = "left"),
            "top" === r || "bottom" === r)
          ) {
            const n = e.left + e.width / 2,
              o = t.width / 2;
            n - o < 0 ? (r = "right") : n + o > window.innerWidth && (r = "left");
          }
          o(r);
        }, [n]),
        d = (0, s.useCallback)(() => {
          c();
        }, [c]);
      return (0, a.jsxs)("div", {
        ref: i,
        className: `tooltip-wrapper tooltip-${r}`,
        onMouseEnter: d,
        children: [e, (0, a.jsx)("span", { ref: l, className: "tooltip-text", children: t })],
      });
    }));
}

export default TooltipWebpackModule;
