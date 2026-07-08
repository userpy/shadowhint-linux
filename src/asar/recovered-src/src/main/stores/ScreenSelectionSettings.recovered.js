/*
 * Recovered from main webpack module 65264.
 * Inferred module name: ScreenSelectionSettings.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 66012 (ElectronStoreBridge)
 */

function ScreenSelectionSettingsWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.screenSelectionSettings = void 0));
  const i = r(n(66012));
  t.screenSelectionSettings = new (class {
    constructor() {
      ((this.SETTINGS_KEY = "screenSelection"),
        (this.store = new i.default({ name: "screen-selection-settings" })));
    }
    getSelectedDisplayId() {
      const e = this.store.get(this.SETTINGS_KEY);
      return e && "string" == typeof e.selectedDisplayId ? e.selectedDisplayId : null;
    }
    setSelectedDisplayId(e) {
      const t = { selectedDisplayId: e, lastModified: Date.now() };
      this.store.set(this.SETTINGS_KEY, t);
    }
  })();
}

export default ScreenSelectionSettingsWebpackModule;
