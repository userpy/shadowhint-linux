/*
 * Recovered from renderer webpack module 45673.
 * Inferred module name: ScreenSettings.
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

function ScreenSettingsWebpackModule(e, t, n) {
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
      i = (0, l.useCallback)(async () => {
        try {
          const e = await window.api?.screen?.getAvailableDisplays?.();
          e?.success && e.displays && o(e.displays);
        } catch {}
      }, []);
    ((0, l.useEffect)(() => {
      i();
    }, [i]),
      (0, l.useEffect)(() => {
        const e = () => {
          i();
        };
        return (window.addEventListener("focus", e), () => window.removeEventListener("focus", e));
      }, [i]));
    const a = [
        { value: "fullscreen", label: n("settings.screen.fullscreen", "Full screen") },
        { value: "partial", label: n("settings.screen.partial", "Partial (selected area)") },
      ],
      A = e.selectedDisplayId || "";
    return (0, s.jsxs)("div", {
      children: [
        (0, s.jsx)("h2", {
          className: "settings-section-title",
          children: n("settings.sections.screen", "Screen"),
        }),
        (0, s.jsxs)(d.default, {
          title: n("settings.screen.screenshotGroup", "Screenshot"),
          children: [
            (0, s.jsx)(u.default, {
              label: n("settings.screen.screenshotMode", "Screenshot mode"),
              value: e.screenshotMode,
              options: a,
              onChange: (e) => {
                t("screenshotMode", e);
              },
            }),
            r.length > 1 &&
              (0, s.jsx)("div", {
                className: "display-previews",
                children: r.map((e, r) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: "display-preview-card" + (A === e.id ? " selected" : ""),
                      onClick: () =>
                        ((e) => {
                          const n = e || null;
                          (t("selectedDisplayId", n),
                            window.api?.screen?.setSelectedDisplay?.(n)?.catch(() => {}));
                        })(e.id),
                      children: [
                        (0, s.jsx)("div", {
                          className: "display-preview-thumbnail",
                          children:
                            e.thumbnail && e.thumbnail.length > 50
                              ? (0, s.jsx)("img", {
                                  src: e.thumbnail,
                                  alt: e.name,
                                  onError: (e) => {
                                    e.target.style.display = "none";
                                  },
                                })
                              : (0, s.jsxs)("svg", {
                                  viewBox: "0 0 64 48",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, s.jsx)("rect", {
                                      x: "4",
                                      y: "2",
                                      width: "56",
                                      height: "38",
                                      rx: "3",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                    }),
                                    (0, s.jsx)("line", {
                                      x1: "20",
                                      y1: "44",
                                      x2: "44",
                                      y2: "44",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                    }),
                                  ],
                                }),
                        }),
                        (0, s.jsx)("div", {
                          className: "display-preview-name",
                          children: e.name || `${n("settings.screen.monitor", "Monitor")} ${r + 1}`,
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
          ],
        }),
        (0, s.jsxs)(d.default, {
          title: n("settings.screen.suggestionWindowGroup", "Suggestion window"),
          children: [
            (0, s.jsx)(p.default, {
              label: n("settings.screen.windowWidth", "Width"),
              value: e.suggestionWindowWidth,
              min: 360,
              max: 2400,
              step: 50,
              onChange: (e) => {
                t("suggestionWindowWidth", e);
              },
              formatValue: (e) => `${e}px`,
            }),
            (0, s.jsx)(p.default, {
              label: n("settings.screen.windowHeight", "Height"),
              value: e.suggestionWindowHeight,
              min: 200,
              max: 900,
              step: 50,
              onChange: (e) => {
                t("suggestionWindowHeight", e);
              },
              formatValue: (e) => `${e}px`,
            }),
            (0, s.jsx)(p.default, {
              label: n("settings.screen.fontSize", "Font size"),
              value: e.suggestionFontSize,
              min: 10,
              max: 24,
              step: 1,
              onChange: (e) => {
                t("suggestionFontSize", e);
              },
              formatValue: (e) => `${e}px`,
            }),
          ],
        }),
      ],
    });
  };
}

export default ScreenSettingsWebpackModule;
