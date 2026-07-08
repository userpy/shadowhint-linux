/*
 * Recovered from renderer webpack module 910.
 * Inferred module name: ShortcutEditor.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 */

function ShortcutEditorWebpackModule(e, t, n) {
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
  t.default = ({ currentAccelerator: e, onSave: t, onCancel: n, existingShortcuts: r }) => {
    const [o, i] = (0, s.useState)(e),
      [l, c] = (0, s.useState)(!1),
      [d, u] = (0, s.useState)(!1),
      [p, A] = (0, s.useState)(""),
      g = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      g.current && g.current.focus();
    }, []);
    const m = (e) =>
      e
        .replace(/Ctrl/g, "Ctrl")
        .replace(/Alt/g, "Alt")
        .replace(/Shift/g, "Shift")
        .replace(/Cmd/g, "⌘")
        .replace(/Meta/g, "⌘");
    return (0, a.jsxs)("div", {
      className: "shortcut-editor",
      children: [
        (0, a.jsx)("div", {
          className: "shortcut-input-container",
          children: (0, a.jsx)("input", {
            ref: g,
            type: "text",
            className: `shortcut-input ${l ? "capturing" : ""} ${d ? "error" : ""}`,
            value: l ? (o ? m(o) : "Нажмите клавиши...") : m(o),
            onKeyDown: (t) => {
              if (!l) return;
              if (
                (t.preventDefault(),
                t.stopPropagation(),
                ["Control", "Alt", "Shift", "Meta", "Cmd"].includes(t.key))
              )
                return;
              const n = [];
              if (
                (t.ctrlKey && n.push("Ctrl"),
                t.altKey && n.push("Alt"),
                t.shiftKey && n.push("Shift"),
                t.metaKey)
              ) {
                const e = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
                n.push(e ? "Cmd" : "Meta");
              }
              let o = t.key;
              const a = {
                  " ": "Space",
                  ArrowUp: "Up",
                  ArrowDown: "Down",
                  ArrowLeft: "Left",
                  ArrowRight: "Right",
                  Escape: "Escape",
                  Tab: "Tab",
                  Enter: "Return",
                  Backspace: "Backspace",
                  Delete: "Delete",
                  Home: "Home",
                  End: "End",
                  PageUp: "PageUp",
                  PageDown: "PageDown",
                },
                s = {
                  й: "q",
                  ц: "w",
                  у: "e",
                  к: "r",
                  е: "t",
                  н: "y",
                  г: "u",
                  ш: "i",
                  щ: "o",
                  з: "p",
                  х: "[",
                  ъ: "]",
                  ф: "a",
                  ы: "s",
                  в: "d",
                  а: "f",
                  п: "g",
                  р: "h",
                  о: "j",
                  л: "k",
                  д: "l",
                  ж: ";",
                  э: "'",
                  я: "z",
                  ч: "x",
                  с: "c",
                  м: "v",
                  и: "b",
                  т: "n",
                  ь: "m",
                  б: ",",
                  ю: ".",
                  ".": "/",
                };
              if (a[o]) o = a[o];
              else if (1 === o.length) {
                const e = o.toLowerCase();
                (s[e] &&
                  ((o = s[e]),
                  console.log("🔍 [ShortcutEditor] Russian to English:", t.key, "→", o)),
                  (o = o.toUpperCase()));
              }
              const c = [...n, o].join("+");
              (console.log("🔍 [ShortcutEditor] Captured key:", t.key, "→", o),
                console.log("🔍 [ShortcutEditor] Modifiers:", n),
                console.log("🔍 [ShortcutEditor] Final accelerator:", c),
                i(c),
                ((t) => {
                  if (
                    (console.log("🔍 [ShortcutEditor] Validating accelerator:", t),
                    u(!1),
                    A(""),
                    t && t !== e)
                  )
                    return /[^\x00-\x7F]/.test(t)
                      ? (console.log("❌ [ShortcutEditor] ASCII validation failed:", t),
                        u(!0),
                        void A(
                          "Используйте только английские буквы и символы (A-Z, 0-9, +, стрелки)",
                        ))
                      : [
                            "Ctrl+C",
                            "Ctrl+V",
                            "Ctrl+X",
                            "Ctrl+Z",
                            "Ctrl+Y",
                            "Ctrl+A",
                            "Ctrl+S",
                            "Ctrl+O",
                            "Ctrl+N",
                            "Ctrl+W",
                            "Alt+F4",
                            "Ctrl+Alt+Del",
                            "Ctrl+Shift+Esc",
                          ].includes(t)
                        ? (console.log("❌ [ShortcutEditor] System shortcut blocked:", t),
                          u(!0),
                          void A("Это системное сочетание клавиш"))
                        : r.includes(t)
                          ? (console.log("❌ [ShortcutEditor] Conflict with existing shortcut:", t),
                            u(!0),
                            void A("Это сочетание уже используется"))
                          : void console.log("✅ [ShortcutEditor] Validation passed:", t);
                  console.log(
                    "🔍 [ShortcutEditor] Empty or unchanged accelerator, skipping validation",
                  );
                })(c));
            },
            onFocus: () => {
              (c(!0), i(""), u(!1), A(""), g.current && g.current.focus());
            },
            onBlur: () => c(!1),
            placeholder: "Нажмите для записи",
            readOnly: !0,
          }),
        }),
        d && (0, a.jsx)("div", { className: "error-message", children: p }),
        (0, a.jsxs)("div", {
          className: "shortcut-editor-actions",
          children: [
            (0, a.jsx)("button", {
              className: "btn btn-small btn-secondary",
              onClick: n,
              children: "Отменить",
            }),
            (0, a.jsx)("button", {
              className: "btn btn-small btn-primary",
              onClick: () => {
                !d && o && o !== e && t(o);
              },
              disabled: d || !o || o === e,
              children: "Сохранить",
            }),
          ],
        }),
        l &&
          (0, a.jsxs)("div", {
            className: "capture-hint",
            children: ["Нажмите желаемое сочетание клавиш...", (0, a.jsx)("br", {})],
          }),
      ],
    });
  };
}

export default ShortcutEditorWebpackModule;
