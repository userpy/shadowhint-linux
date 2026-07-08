/*
 * Recovered from renderer webpack module 20552.
 * Inferred module name: I18nSetup.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 44520
 * - 99163
 * - 44362 (EnglishTranslations)
 * - 36252 (RussianTranslations)
 */

function I18nSetupWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = r(n(44520)),
    i = n(99163),
    a = r(n(44362)),
    s = r(n(36252)),
    l = { en: { translation: a.default }, ru: { translation: s.default } },
    c = Object.keys(l);
  (o.default.use(i.initReactI18next).init({
    resources: l,
    lng: ((e) => {
      try {
        const t = localStorage.getItem("preferredLanguage");
        if (t && e.includes(t)) return t;
      } catch {}
      return e.includes("ru") ? "ru" : e[0] || "en";
    })(c),
    fallbackLng: "en",
    interpolation: { escapeValue: !1 },
    load: "languageOnly",
    debug: !1,
    pluralSeparator: "_",
    contextSeparator: "_",
    saveMissing: !1,
    defaultNS: "translation",
    ns: ["translation"],
  }),
    o.default.on("languageChanged", (e) => {
      try {
        (c.includes(e) && localStorage.setItem("preferredLanguage", e),
          "undefined" != typeof window &&
            window?.api?.settings?.setPreferredLanguage &&
            window.api.settings.setPreferredLanguage(e).catch(() => {}));
      } catch (e) {
        console.warn("Не удалось сохранить язык в localStorage:", e);
      }
    }),
    (t.default = o.default));
}

export default I18nSetupWebpackModule;
