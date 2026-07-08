/*
 * Recovered from renderer webpack module 70369.
 * Inferred module name: FormattedMarkdown.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 55484
 * - 86064
 * - 48477
 * - 6704
 * - 47860 (CodeExecutionPanel)
 * - 4426
 * - 8386
 */

function FormattedMarkdownWebpackModule(e, t, n) {
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
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.formatTextWithInlineCode = t.formatTextWithHighlightedCode = t.HighlightedCode = void 0));
  const s = n(40285),
    l = i(n(68329)),
    c = a(n(55484));
  n(86064);
  const d = n(48477);
  n(6704);
  const u = a(n(47860)),
    p = n(4426),
    A = n(8386);
  console.log("Доступные языки highlight.js:", c.default.listLanguages());
  const g = {
    js: "javascript",
    ts: "typescript",
    jsx: "jsx",
    tsx: "tsx",
    py: "python",
    css: "css",
    html: "html",
    xml: "xml",
    java: "java",
    cs: "csharp",
    "c#": "csharp",
    sql: "sql",
    json: "json",
    bash: "bash",
    sh: "bash",
    shell: "bash",
    yaml: "yaml",
    yml: "yaml",
  };
  t.HighlightedCode = ({
    code: e,
    language: t = "",
    isIncomplete: n = !1,
    showExecuteButton: r = !0,
  }) => {
    const o = (0, l.useRef)(null),
      [i, a] = l.default.useState(""),
      d = g[t.toLowerCase()] || t,
      A = e.trim();
    (0, l.useEffect)(() => {
      if (n && d && A)
        try {
          const e = c.default.highlight(A, { language: d, ignoreIllegals: !0 });
          a(e.value);
        } catch (e) {
          console.error("Ошибка при принудительной подсветке:", e);
          try {
            const e = c.default.highlightAuto(A);
            a(e.value);
          } catch (e) {
            (console.error("Ошибка при автоматической подсветке:", e), a(""));
          }
        }
      else if (o.current && !n)
        try {
          c.default.highlightElement(o.current);
        } catch (e) {
          console.error("Ошибка при подсветке:", e);
        }
    }, [A, d, n]);
    const m = r && !n && t && (0, p.isSupportedLanguage)(t);
    return (0, s.jsxs)("div", {
      className: "formatted-code " + (n ? "incomplete-code" : ""),
      children: [
        t &&
          (0, s.jsxs)("div", {
            className: "code-language",
            children: [
              (0, s.jsx)("span", { children: t }),
              n &&
                (0, s.jsx)("span", {
                  className: "incomplete-indicator",
                  children: " (печатается...)",
                }),
              !n &&
                (0, s.jsx)("button", {
                  className: "copy-code-button",
                  onClick: async () => {
                    try {
                      await navigator.clipboard.writeText(A);
                    } catch (e) {
                      console.error("Ошибка при копировании:", e);
                      const t = document.createElement("textarea");
                      ((t.value = A), document.body.appendChild(t), t.select());
                      try {
                        document.execCommand("copy");
                      } catch (e) {
                        console.error("Ошибка fallback копирования:", e);
                      }
                      document.body.removeChild(t);
                    }
                  },
                  title: "Копировать код",
                  children: (0, s.jsx)("svg", {
                    viewBox: "0 0 699.428 699.428",
                    width: "14",
                    height: "14",
                    fill: "currentColor",
                    children: (0, s.jsx)("path", {
                      d: "M502.714,0c-2.71,0-262.286,0-262.286,0C194.178,0,153,42.425,153,87.429l-25.267,0.59 c-46.228,0-84.019,41.834-84.019,86.838V612c0,45.004,41.179,87.428,87.429,87.428H459c46.249,0,87.428-42.424,87.428-87.428 h21.857c46.25,0,87.429-42.424,87.429-87.428v-349.19L502.714,0z M459,655.715H131.143c-22.95,0-43.714-21.441-43.714-43.715 V174.857c0-22.272,18.688-42.993,41.638-42.993L153,131.143v393.429C153,569.576,194.178,612,240.428,612h262.286 C502.714,634.273,481.949,655.715,459,655.715z M612,524.572c0,22.271-20.765,43.713-43.715,43.713H240.428 c-22.95,0-43.714-21.441-43.714-43.713V87.429c0-22.272,20.764-43.714,43.714-43.714H459c-0.351,50.337,0,87.975,0,87.975 c0,45.419,40.872,86.882,87.428,86.882c0,0,23.213,0,65.572,0V524.572z M546.428,174.857c-23.277,0-43.714-42.293-43.714-64.981 c0,0,0-22.994,0-65.484v-0.044L612,174.857H546.428z M502.714,306.394H306c-12.065,0-21.857,9.77-21.857,21.835 c0,12.065,9.792,21.835,21.857,21.835h196.714c12.065,0,21.857-9.771,21.857-21.835 C524.571,316.164,514.779,306.394,502.714,306.394z M502.714,415.57H306c-12.065,0-21.857,9.77-21.857,21.834 c0,12.066,9.792,21.836,21.857,21.836h196.714c12.065,0,21.857-9.77,21.857-21.836C524.571,425.34,514.779,415.57,502.714,415.57 z",
                    }),
                  }),
                }),
            ],
          }),
        (0, s.jsx)("pre", {
          children: (0, s.jsx)("code", {
            ref: o,
            className: d ? `language-${d}` : "",
            dangerouslySetInnerHTML: n && i ? { __html: i } : void 0,
            children: n && i ? void 0 : A,
          }),
        }),
        n && (0, s.jsx)("div", { className: "cursor-blink code-cursor", children: "▌" }),
        m &&
          (0, s.jsx)(u.default, {
            code: A,
            language: (0, p.normalizeLanguage)(t),
            fileName: `code_${Date.now()}`,
            onExecute: (e) => {
              console.log("Результат выполнения кода:", e);
            },
          }),
      ],
    });
  };
  const m = ({ choices: e, onChoiceClick: t }) => {
    const n = (e, n) => {
      t && t(e, n);
    };
    return (0, s.jsxs)("div", {
      className: "interactive-choices-compact",
      children: [
        e.map((t, r) =>
          (0, s.jsxs)(
            "span",
            {
              className: "choice-wrapper",
              children: [
                (0, s.jsxs)("span", {
                  className: "choice-link",
                  onClick: () => n(t, r),
                  onKeyDown: (e) =>
                    ((e, t, r) => {
                      ("Enter" !== e.key && " " !== e.key) || (e.preventDefault(), n(t, r));
                    })(e, t, r),
                  tabIndex: 0,
                  role: "button",
                  children: [
                    (0, s.jsx)("span", { className: "choice-number-compact", children: r + 1 }),
                    (0, s.jsx)("span", { className: "choice-text-compact", children: t }),
                  ],
                }),
                r < e.length - 1 &&
                  (0, s.jsx)("span", { className: "choice-separator", children: " • " }),
              ],
            },
            `choice-${r}`,
          ),
        ),
        (0, s.jsxs)("span", {
          className: "choices-hint-compact",
          children: [
            " (",
            (0, A.formatKeyDisplay)("Ctrl+1").replace(/1/, `1-${Math.min(e.length, 9)}`),
            ")",
          ],
        }),
      ],
    });
  };
  ((t.formatTextWithHighlightedCode = (e, n) => {
    if (!e) return [];
    const r = /```([\w-]*)?\s*\n([\s\S]*?)```/g,
      o = /```([\w-]*)?\s*\n([\s\S]*?)$/g,
      i = /<choices>([\s\S]*?)<\/choices>/gi,
      a = /\\\[([\s\S]*?)\\\]|\$\$([\s\S]*?)\$\$/g,
      l = [];
    let c = 0;
    const u = [];
    let p, A, g, f;
    for (; null !== (p = r.exec(e)); )
      u.push({
        type: "code",
        match: p,
        language: p[1]?.trim() || "",
        content: p[2],
        isIncomplete: !1,
      });
    for (; null !== (A = o.exec(e)); )
      u.some((e) => "code" === e.type && e.match.index === A.index) ||
        u.push({
          type: "incompleteCode",
          match: A,
          language: A[1]?.trim() || "",
          content: A[2],
          isIncomplete: !0,
        });
    for (; null !== (g = i.exec(e)); ) {
      const e = g[1],
        t = /<choice>([\s\S]*?)<\/choice>/gi,
        n = [];
      let r;
      for (; null !== (r = t.exec(e)); ) n.push(r[1].trim());
      n.length > 0 && u.push({ type: "choices", match: g, choices: n });
    }
    for (; null !== (f = a.exec(e)); )
      u.push({ type: "blockMath", match: f, mathContent: f[1] || f[2] });
    u.sort((e, t) => e.match.index - t.match.index);
    for (const r of u) {
      const o = r.match;
      if (o.index > c) {
        const n = e.substring(c, o.index),
          r = (0, t.formatTextWithInlineCode)(n);
        null !== r && l.push((0, s.jsx)("span", { children: r }, `text-before-${o.index}`));
      }
      ("code" === r.type || "incompleteCode" === r.type
        ? l.push(
            (0, s.jsx)(
              t.HighlightedCode,
              { code: r.content || "", language: r.language || "", isIncomplete: r.isIncomplete },
              `code-${o.index}`,
            ),
          )
        : "choices" === r.type
          ? l.push(
              (0, s.jsx)(m, { choices: r.choices || [], onChoiceClick: n }, `choices-${o.index}`),
            )
          : "blockMath" === r.type &&
            l.push(
              (0, s.jsx)(
                "div",
                {
                  className: "math-block",
                  children: (0, s.jsx)(d.BlockMath, { math: r.mathContent || "" }),
                },
                `blockmath-${o.index}`,
              ),
            ),
        (c = o.index + o[0].length));
    }
    if (c < e.length) {
      const n = (0, t.formatTextWithInlineCode)(e.substring(c));
      null !== n && l.push((0, s.jsx)("span", { children: n }, `text-remaining-${c}`));
    }
    return l;
  }),
    (t.formatTextWithInlineCode = (e) => {
      if (!e) return null;
      const t = /`([^`]+)`/g,
        n = e.split("\n");
      function r(e) {
        const t = [];
        let n = 0;
        const r = /\*\*((?:[^*]|`[^`]*`)+?)\*\*|__((?:[^_]|`[^`]*`)+?)__/g;
        let a;
        for (; null !== (a = r.exec(e)); ) {
          a.index > n && t.push(...o(e.substring(n, a.index)));
          const r = a[1] || a[2];
          (t.push((0, s.jsx)("strong", { children: i(r) }, `bold-${a.index}-${n}`)),
            (n = a.index + a[0].length));
        }
        return (n < e.length && t.push(...o(e.substring(n))), t.flat());
      }
      function o(e) {
        const t = [];
        let n = 0;
        const r = /\*((?:[^*]|`[^`]*`)+?)\*|_((?:[^_]|`[^`]*`)+?)_/g;
        let o;
        for (; null !== (o = r.exec(e)); ) {
          o.index > n && t.push(i(e.substring(n, o.index)));
          const r = o[1] || o[2];
          (t.push((0, s.jsx)("em", { children: i(r) }, `italic-${o.index}-${n}`)),
            (n = o.index + o[0].length));
        }
        return (n < e.length && t.push(i(e.substring(n))), t);
      }
      function i(e) {
        const t = /`([^`]+)`/g,
          n = /\\\(([\s\S]*?)\\\)|\$([^$\n]+?)\$/g,
          r = [];
        let o = 0;
        const i = [];
        let a, l;
        for (; null !== (a = t.exec(e)); ) i.push({ type: "code", match: a, content: a[1] });
        for (; null !== (l = n.exec(e)); )
          i.push({ type: "math", match: l, content: l[1] || l[2] });
        i.sort((e, t) => e.match.index - t.match.index);
        for (const t of i)
          (t.match.index > o && r.push(e.substring(o, t.match.index)),
            "code" === t.type
              ? r.push(
                  (0, s.jsx)(
                    "code",
                    { className: "inline-code", children: t.content },
                    `nested-inline-${t.match.index}-${o}`,
                  ),
                )
              : "math" === t.type &&
                r.push(
                  (0, s.jsx)(
                    "span",
                    {
                      className: "math-inline",
                      children: (0, s.jsx)(d.InlineMath, { math: t.content }),
                    },
                    `nested-math-${t.match.index}-${o}`,
                  ),
                ),
            (o = t.match.index + t.match[0].length));
        return (o < e.length && r.push(e.substring(o)), 0 === r.length && r.push(e), r);
      }
      function a(e, t) {
        function n(e) {
          const n = /`([^`]+)`/g,
            o = [];
          let i,
            a = 0;
          for (; null !== (i = n.exec(e)); )
            (i.index > a && o.push(...r(e.substring(a, i.index))),
              o.push(
                (0, s.jsx)(
                  "code",
                  { className: "inline-code", children: i[1] },
                  `inline-markup-${t}-${i.index}-${a}`,
                ),
              ),
              (a = i.index + i[0].length));
          return (
            a < e.length && o.push(...r(e.substring(a))),
            0 === o.length && o.push(...r(e)),
            o
          );
        }
        if (/^###\s+/.test(e)) {
          const r = e.replace(/^###\s+/, "");
          return (0, s.jsx)(
            "div",
            { style: { fontWeight: "bold", fontSize: "1.3em", margin: "2px 0" }, children: n(r) },
            `header-${t}`,
          );
        }
        if (/^\s*\d+\.\s+/.test(e)) {
          const r = e.match(/^(\s*)(\d+)\.\s+(.*)$/);
          if (r) {
            const [, e, o, i] = r,
              a = 20 + 15 * e.length;
            return (0, s.jsxs)(
              "span",
              { style: { marginLeft: a, display: "block" }, children: [o, ". ", n(i)] },
              `numbered-list-${t}`,
            );
          }
        }
        if (/^\s*-\s+/.test(e)) {
          const r = e.match(/^(\s*)-\s+(.*)$/);
          if (r) {
            const [, e, o] = r,
              i = 20 + 15 * e.length;
            return (0, s.jsxs)(
              "span",
              { style: { marginLeft: i, display: "block" }, children: ["• ", n(o)] },
              `list-${t}`,
            );
          }
        }
        return (0, s.jsx)(l.default.Fragment, { children: n(e) }, `line-${t}`);
      }
      return (0, s.jsx)(s.Fragment, {
        children: n.map((e, n, o) => {
          if (/^###\s+/.test(e) || /^\s*-\s+/.test(e) || /^\s*\d+\.\s+/.test(e))
            return (0, s.jsxs)(
              l.default.Fragment,
              {
                children: [a(e, n), /^###\s+/.test(e) && n < o.length - 1 && (0, s.jsx)("br", {})],
              },
              `markup-line-${n}`,
            );
          const i = [];
          let c,
            d = 0;
          for (; null !== (c = t.exec(e)); )
            (c.index > d && i.push(...r(e.substring(d, c.index))),
              i.push(
                (0, s.jsx)(
                  "code",
                  { className: "inline-code", children: c[1] },
                  `inline-${n}-${c.index}-${d}`,
                ),
              ),
              (d = c.index + c[0].length));
          return (
            d < e.length && i.push(...r(e.substring(d))),
            0 === i.length && i.push(...r(e)),
            (0, s.jsxs)(
              l.default.Fragment,
              { children: [i, n < o.length - 1 && (0, s.jsx)("br", {})] },
              `text-line-${n}`,
            )
          );
        }),
      });
    }),
    (t.default = {
      HighlightedCode: t.HighlightedCode,
      formatTextWithHighlightedCode: t.formatTextWithHighlightedCode,
      formatTextWithInlineCode: t.formatTextWithInlineCode,
    }));
}

export default FormattedMarkdownWebpackModule;
