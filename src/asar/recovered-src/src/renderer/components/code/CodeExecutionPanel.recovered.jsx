/*
 * Recovered from renderer webpack module 47860.
 * Inferred module name: CodeExecutionPanel.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 98825
 */

function CodeExecutionPanelWebpackModule(e, t, n) {
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
  n(98825);
  const c = n(42e3);
  t.default = ({ code: e, language: t, fileName: n = "main", onExecute: r }) => {
    const { t: o } = (0, l.useTranslation)(),
      [i, d] = (0, s.useState)(!1),
      [u, p] = (0, s.useState)(null),
      [A, g] = (0, s.useState)(!1),
      [m, f] = (0, s.useState)(!1);
    (0, s.useEffect)(() => {
      const e = (e, t) => {
        f(t);
      };
      return (
        window.ipc?.on("smartModel:changed", e),
        () => {
          window.ipc?.removeListener("smartModel:changed", e);
        }
      );
    }, []);
    const h = (e) => {
        switch (e.toLowerCase()) {
          case "go":
            return "main.go";
          case "java":
            return "Main.java";
          case "csharp":
            return "Program.cs";
          default:
            return (
              n +
              ((e) =>
                ({
                  python: ".py",
                  javascript: ".js",
                  java: ".java",
                  cpp: ".cpp",
                  c: ".c",
                  csharp: ".cs",
                  go: ".go",
                  rust: ".rs",
                  php: ".php",
                  ruby: ".rb",
                  swift: ".swift",
                  kotlin: ".kt",
                  typescript: ".ts",
                  scala: ".scala",
                  haskell: ".hs",
                  lua: ".lua",
                  perl: ".pl",
                  r: ".r",
                  bash: ".sh",
                  html: ".html",
                  css: ".css",
                })[e] || ".txt")(e)
            );
        }
      },
      b = async () => {
        if (window.api && window.api.executeCode) {
          (d(!0), p(null));
          try {
            const n = [{ name: h(t), content: e }],
              i = await window.api.executeCode({ language: t, files: n, stdin: "" });
            i.success && i.data
              ? i.data.status || i.data.stdout || i.data.stderr || i.data.error
                ? ("success" === i.data.status && i.data.stderr && !i.data.stdout
                    ? p({ ...i.data, status: "failed" })
                    : p(i.data),
                  r?.(i.data))
                : p({
                    status: "failed",
                    stdout: "",
                    stderr: "",
                    exception: "",
                    executionTimeMs: 0,
                    limitRemaining: 0,
                    error: o("codeExecution.emptyResponseError"),
                  })
              : p({
                  status: "failed",
                  stdout: "",
                  stderr: "",
                  exception: "",
                  executionTimeMs: 0,
                  limitRemaining: 0,
                  error: i.error || o("codeExecution.unknownError"),
                });
          } catch (e) {
            (console.error("Ошибка выполнения кода:", e),
              p({
                status: "failed",
                stdout: "",
                stderr: "",
                exception: "",
                executionTimeMs: 0,
                limitRemaining: 0,
                error: o("codeExecution.connectionError"),
              }));
          } finally {
            d(!1);
          }
        } else console.error("API для выполнения кода недоступен");
      };
    ((0, s.useEffect)(() => {
      const e = () => {
          i || b();
        },
        t = (e) => {
          if (u && !A) {
            const t = e,
              n = t.detail?.sessionId;
            n ? _(n) : console.error("SessionId не получен из события");
          }
        };
      return (
        window.addEventListener("codeExecution:execute", e),
        window.addEventListener("codeExecution:generateResponse", t),
        () => {
          (window.removeEventListener("codeExecution:execute", e),
            window.removeEventListener("codeExecution:generateResponse", t));
        }
      );
    }, [i, A, u]),
      (0, s.useEffect)(() => {
        const e = (e) => {
          const t = navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? e.metaKey : e.ctrlKey;
          (!t || e.shiftKey || "g" !== e.key || i || (e.preventDefault(), b()),
            t && e.shiftKey && "g" === e.key && u && !A && (e.preventDefault(), _()));
        };
        return (
          document.addEventListener("keydown", e),
          () => {
            document.removeEventListener("keydown", e);
          }
        );
      }, [i, u, A]));
    const _ = async (n) => {
      if (!u) return void console.warn("Нет результата выполнения для генерации ответа");
      let r = n;
      if (r || ((r = localStorage.getItem("currentSessionId") || ""), r)) {
        g(!0);
        try {
          let n = `${o("codeExecution.explainResult")} ${t} кода:\n\`\`\`${t}\n${e}\n\`\`\`\n\n`;
          ("success" === u.status && u.stdout
            ? (n += `Программа выполнилась успешно и вывела:\n\`\`\`\n${u.stdout}\n\`\`\`\n`)
            : u.stderr
              ? (n += `Произошла ошибка, напиши полностью исправленный код:\n\`\`\`\n${u.stderr}\n\`\`\`\n`)
              : u.error && (n += `Ошибка API:\n\`\`\`\n${u.error}\n\`\`\`\n`),
            (n += "\n" + o("codeExecution.explainResult")),
            window.dispatchEvent(new CustomEvent("codeExecution:streamingStart")),
            await c.sessionAPI.sendManualMessage(r, n, m, !1, (e) => {
              window.dispatchEvent(
                new CustomEvent("codeExecution:responseChunk", { detail: { chunk: e } }),
              );
            }),
            window.dispatchEvent(new CustomEvent("codeExecution:streamingComplete")));
        } catch (e) {
          console.error("Ошибка при генерации ответа:", e);
        } finally {
          g(!1);
        }
      } else console.error("SessionId не найден ни в параметрах, ни в localStorage");
    };
    return (0, a.jsxs)("div", {
      className: "code-execution-panel",
      children: [
        (0, a.jsx)("div", {
          className: "code-execution-footer",
          children:
            u &&
            (0, a.jsx)("button", {
              type: "button",
              className: "generate-response-button button-secondary",
              onClick: () => _(),
              disabled: A,
              children: A
                ? o("codeExecution.generating")
                : `${o("codeExecution.generateResponse")} ${navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? "(⌘ Shift G)" : "(Ctrl Shift G)"}`,
            }),
        }),
        u &&
          (0, a.jsxs)("div", {
            className: "execution-result",
            children: [
              (0, a.jsxs)("div", {
                className: "result-header",
                children: [
                  (0, a.jsx)("span", {
                    className: `status-badge ${u.status}`,
                    children:
                      "success" === u.status
                        ? o("codeExecution.success")
                        : o("codeExecution.error"),
                  }),
                  u.executionTimeMs > 0 &&
                    (0, a.jsx)("span", {
                      className: "execution-time",
                      children:
                        ((C = u.executionTimeMs), C < 1e3 ? `${C}мс` : `${(C / 1e3).toFixed(2)}с`),
                    }),
                  u.limitRemaining > 0 &&
                    (0, a.jsxs)("span", {
                      className: "api-limit",
                      children: ["Осталось вызовов: ", u.limitRemaining],
                    }),
                ],
              }),
              u.stdout &&
                (0, a.jsxs)("div", {
                  className: "output-section",
                  children: [
                    (0, a.jsx)("h4", { children: "Вывод программы:" }),
                    (0, a.jsx)("pre", { className: "output stdout", children: u.stdout }),
                  ],
                }),
              u.stderr &&
                (0, a.jsxs)("div", {
                  className: "output-section",
                  children: [
                    (0, a.jsx)("h4", { children: "Ошибки:" }),
                    (0, a.jsx)("pre", { className: "output stderr", children: u.stderr }),
                  ],
                }),
              u.exception &&
                (0, a.jsxs)("div", {
                  className: "output-section",
                  children: [
                    (0, a.jsx)("h4", { children: "Исключение:" }),
                    (0, a.jsx)("pre", { className: "output exception", children: u.exception }),
                  ],
                }),
              u.error &&
                (0, a.jsxs)("div", {
                  className: "output-section",
                  children: [
                    (0, a.jsx)("h4", { children: "Ошибка API:" }),
                    (0, a.jsx)("pre", { className: "output error", children: u.error }),
                  ],
                }),
            ],
          }),
      ],
    });
    var C;
  };
}

export default CodeExecutionPanelWebpackModule;
