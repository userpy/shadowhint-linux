/*
 * Recovered from renderer webpack module 86596.
 * Inferred module name: CustomSelect.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 50360
 * - 5301
 */

function CustomSelectWebpackModule(e, t, n) {
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
    l = n(50360);
  (n(5301),
    (t.default = ({
      value: e,
      options: t,
      onChange: n,
      placeholder: r,
      disabled: o = !1,
      className: i = "",
      size: c = "default",
      label: d,
      id: u,
    }) => {
      const [p, A] = (0, s.useState)(!1),
        [g, m] = (0, s.useState)(-1),
        [f, h] = (0, s.useState)({ top: 0, left: 0, minWidth: 0 }),
        b = (0, s.useRef)(null),
        _ = (0, s.useRef)(null),
        C = (0, s.useRef)(null),
        E = (0, s.useRef)([]),
        y = t.find((t) => t.value === e),
        v = y?.label || r || "",
        S = (0, s.useCallback)(() => {
          (A(!1), m(-1));
        }, []),
        x = (0, s.useCallback)(() => {
          if (!_.current) return;
          const e = _.current.getBoundingClientRect(),
            n = window.innerHeight,
            r = Math.min(36 * t.length + 12, 220),
            o = n - e.bottom - 4 < r && e.top > r;
          h({ top: o ? e.top - r - 4 : e.bottom + 4, left: e.left, minWidth: e.width });
        }, [t.length]),
        w = (0, s.useCallback)(() => {
          o ||
            A((n) => {
              if (!n) {
                x();
                const n = t.findIndex((t) => t.value === e);
                m(n >= 0 ? n : 0);
              }
              return !n;
            });
        }, [o, t, e, x]),
        k = (0, s.useCallback)(
          (e) => {
            (n(e), S());
          },
          [n, S],
        );
      ((0, s.useEffect)(() => {
        if (!p) return;
        const e = (e) => {
          const t = e.target;
          b.current && !b.current.contains(t) && C.current && !C.current.contains(t) && S();
        };
        return (
          document.addEventListener("mousedown", e),
          () => document.removeEventListener("mousedown", e)
        );
      }, [p, S]),
        (0, s.useEffect)(() => {
          if (!p) return;
          const e = (e) => {
            "Escape" === e.key && S();
          };
          return (
            document.addEventListener("keydown", e),
            () => document.removeEventListener("keydown", e)
          );
        }, [p, S]),
        (0, s.useEffect)(() => {
          if (!p) return;
          const n = t.findIndex((t) => t.value === e);
          n >= 0 && E.current[n] && E.current[n]?.scrollIntoView({ block: "nearest" });
        }, [p, t, e]));
      const T = (0, s.useCallback)(
          (e) => {
            if (p)
              switch (e.key) {
                case "ArrowDown":
                  (e.preventDefault(),
                    m((e) => {
                      const n = e < t.length - 1 ? e + 1 : 0;
                      return (E.current[n]?.scrollIntoView({ block: "nearest" }), n);
                    }));
                  break;
                case "ArrowUp":
                  (e.preventDefault(),
                    m((e) => {
                      const n = e > 0 ? e - 1 : t.length - 1;
                      return (E.current[n]?.scrollIntoView({ block: "nearest" }), n);
                    }));
                  break;
                case "Enter":
                case " ":
                  (e.preventDefault(), g >= 0 && g < t.length && k(t[g].value));
              }
            else
              ("ArrowDown" !== e.key &&
                "ArrowUp" !== e.key &&
                "Enter" !== e.key &&
                " " !== e.key) ||
                (e.preventDefault(), w());
          },
          [p, w, g, t, k],
        ),
        B = "compact" === c ? "compact" : "",
        I = p
          ? (0, l.createPortal)(
              (0, a.jsx)("div", {
                ref: C,
                className: `custom-select-dropdown ${B}`,
                role: "listbox",
                style: { position: "fixed", top: f.top, left: f.left, minWidth: f.minWidth },
                children: t.map((t, n) =>
                  (0, a.jsx)(
                    "button",
                    {
                      ref: (e) => {
                        E.current[n] = e;
                      },
                      type: "button",
                      className: `custom-select-option${t.value === e ? " selected" : ""}${n === g ? " focused" : ""}`,
                      onClick: () => k(t.value),
                      role: "option",
                      "aria-selected": t.value === e,
                      children: t.label,
                    },
                    t.value,
                  ),
                ),
              }),
              document.body,
            )
          : null;
      return (0, a.jsxs)("div", {
        ref: b,
        className: `custom-select ${B} ${i}`.trim(),
        id: u,
        onKeyDown: T,
        children: [
          d && (0, a.jsx)("span", { className: "custom-select-label", children: d }),
          (0, a.jsxs)("button", {
            ref: _,
            type: "button",
            className: "custom-select-trigger",
            onClick: w,
            disabled: o,
            "aria-haspopup": "listbox",
            "aria-expanded": p,
            children: [
              (0, a.jsx)("span", { className: "custom-select-trigger-text", children: v }),
              (0, a.jsx)("svg", {
                className: "custom-select-chevron" + (p ? " open" : ""),
                width: "10",
                height: "6",
                viewBox: "0 0 10 6",
                fill: "none",
                children: (0, a.jsx)("path", {
                  d: "M1 1L5 5L9 1",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              }),
            ],
          }),
          I,
        ],
      });
    }));
}

export default CustomSelectWebpackModule;
