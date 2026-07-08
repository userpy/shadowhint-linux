/*
 * Recovered from main webpack module 81906.
 * Inferred module name: SuggestionWindowSettings.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 66012 (ElectronStoreBridge)
 */

function SuggestionWindowSettingsWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.suggestionWindowSettings =
      t.FONT_SIZE_CONSTRAINTS =
      t.HEIGHT_CONSTRAINTS =
      t.WIDTH_CONSTRAINTS =
        void 0));
  const i = r(n(66012));
  ((t.WIDTH_CONSTRAINTS = { MIN: 360, MAX: 2400, DEFAULT: 600, STEP: 50 }),
    (t.HEIGHT_CONSTRAINTS = { MIN: 200, MAX: 900, DEFAULT: 400, STEP: 50 }),
    (t.FONT_SIZE_CONSTRAINTS = { MIN: 10, MAX: 24, DEFAULT: 13, STEP: 1 }),
    (t.suggestionWindowSettings = new (class {
      constructor() {
        ((this.SETTINGS_KEY = "suggestionWindow"),
          (this.store = new i.default({ name: "suggestion-window-settings" })));
      }
      getWidth() {
        const e = this.store.get(this.SETTINGS_KEY);
        return e && "number" == typeof e.width
          ? this.clampWidth(e.width)
          : t.WIDTH_CONSTRAINTS.DEFAULT;
      }
      setWidth(e) {
        const n = this.clampWidth(e),
          r = this.store.get(this.SETTINGS_KEY),
          i = {
            width: n,
            height: r?.height ?? t.HEIGHT_CONSTRAINTS.DEFAULT,
            fontSize: r?.fontSize ?? t.FONT_SIZE_CONSTRAINTS.DEFAULT,
            lastModified: Date.now(),
          };
        this.store.set(this.SETTINGS_KEY, i);
      }
      increaseWidth(e, n = t.WIDTH_CONSTRAINTS.STEP) {
        const r = e + n,
          i = this.clampWidth(r);
        return (this.setWidth(i), i);
      }
      decreaseWidth(e, n = t.WIDTH_CONSTRAINTS.STEP) {
        const r = e - n,
          i = this.clampWidth(r);
        return (this.setWidth(i), i);
      }
      resetToDefault() {
        return (this.setWidth(t.WIDTH_CONSTRAINTS.DEFAULT), t.WIDTH_CONSTRAINTS.DEFAULT);
      }
      getHeight() {
        const e = this.store.get(this.SETTINGS_KEY);
        return e && "number" == typeof e.height
          ? this.clampHeight(e.height)
          : t.HEIGHT_CONSTRAINTS.DEFAULT;
      }
      setHeight(e) {
        const n = this.clampHeight(e),
          r = this.store.get(this.SETTINGS_KEY),
          i = {
            width: r?.width ?? t.WIDTH_CONSTRAINTS.DEFAULT,
            height: n,
            fontSize: r?.fontSize ?? t.FONT_SIZE_CONSTRAINTS.DEFAULT,
            lastModified: Date.now(),
          };
        this.store.set(this.SETTINGS_KEY, i);
      }
      clampHeight(e) {
        return Math.max(
          t.HEIGHT_CONSTRAINTS.MIN,
          Math.min(t.HEIGHT_CONSTRAINTS.MAX, Math.round(e)),
        );
      }
      clampWidth(e) {
        return Math.max(t.WIDTH_CONSTRAINTS.MIN, Math.min(t.WIDTH_CONSTRAINTS.MAX, Math.round(e)));
      }
      getFontSize() {
        const e = this.store.get(this.SETTINGS_KEY);
        return e && "number" == typeof e.fontSize
          ? this.clampFontSize(e.fontSize)
          : t.FONT_SIZE_CONSTRAINTS.DEFAULT;
      }
      setFontSize(e) {
        const n = this.clampFontSize(e),
          r = this.store.get(this.SETTINGS_KEY),
          i = {
            width: r?.width ?? t.WIDTH_CONSTRAINTS.DEFAULT,
            height: r?.height ?? t.HEIGHT_CONSTRAINTS.DEFAULT,
            fontSize: n,
            lastModified: Date.now(),
          };
        this.store.set(this.SETTINGS_KEY, i);
      }
      clampFontSize(e) {
        return Math.max(
          t.FONT_SIZE_CONSTRAINTS.MIN,
          Math.min(t.FONT_SIZE_CONSTRAINTS.MAX, Math.round(e)),
        );
      }
    })()));
}

export default SuggestionWindowSettingsWebpackModule;
