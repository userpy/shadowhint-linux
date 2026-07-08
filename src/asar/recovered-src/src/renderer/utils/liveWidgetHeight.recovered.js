/*
 * Recovered from renderer webpack module 21183.
 * Inferred module name: LiveWidgetHeight.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 68329
 */

function LiveWidgetHeightWebpackModule(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  const r = n(68329);
  t.default = ({
    selector: e = ".live-widget",
    contentSelector: t = ".suggestion-container",
    extraPadding: n = 28,
    isSuggestionWindow: o = !1,
    maxHeight: i,
  }) => {
    const a = (0, r.useRef)(null),
      s = (0, r.useRef)(null),
      l = (0, r.useRef)(!1),
      c = (0, r.useRef)(null);
    return (
      (0, r.useEffect)(() => {
        const r = () => !!window.disableAutoResize,
          d = () => {
            if (!o) return;
            if (r()) return void (c.current = null);
            if (l.current) return void (c.current = null);
            const t = document.querySelector(e);
            if (!t)
              return void console.warn(`[ResizeHandler] Элемент не найден по селектору: ${e}`);
            const a = t.clientHeight + n,
              s = void 0 !== i ? Math.min(a, i) : a,
              d = window.devicePixelRatio ?? 1,
              u = Math.round(s * d) / d,
              p = 1 / d;
            if (!(null !== c.current && Math.abs(c.current - u) < p))
              try {
                window.api?.window?.setSuggestionWindowHeight
                  ? ((c.current = u),
                    window.api.window.setSuggestionWindowHeight(u).catch((e) => {
                      (console.error("Ошибка при изменении высоты окна подсказки:", e),
                        (c.current = null));
                    }))
                  : console.warn("setSuggestionWindowHeight не является функцией");
              } catch (e) {
                console.warn("Ошибка при вызове метода setSuggestionWindowHeight:", e);
              }
          },
          u = () => {
            "/setup" === window.location.hash.replace("#", "") &&
              (console.log("Переход на страницу настроек, устанавливаем флаг"),
              (l.current = !0),
              setTimeout(() => {
                ((l.current = !1),
                  console.log("Сброс локального флага перехода на страницу настроек"));
              }, 2e3));
          };
        (window.addEventListener("hashchange", u),
          "/setup" !== window.location.hash.replace("#", "")
            ? d()
            : console.log("Инициализация на странице настроек, пропускаем изменение высоты"),
          (a.current = new ResizeObserver(() => {
            r() || d();
          })));
        const p = document.querySelector(e);
        p && a.current.observe(p);
        const A = document.querySelector(t);
        return (
          A &&
            ((s.current = new MutationObserver(() => {
              r() || d();
            })),
            s.current.observe(A, {
              childList: !0,
              subtree: !0,
              characterData: !0,
              attributes: !1,
            })),
          () => {
            (a.current && a.current.disconnect(),
              s.current && s.current.disconnect(),
              window.removeEventListener("hashchange", u));
          }
        );
      }, [e, t, o]),
      null
    );
  };
}

export default LiveWidgetHeightWebpackModule;
