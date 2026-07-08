/*
 * Recovered from main webpack module 66012.
 * Inferred module name: ElectronStoreBridge.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 16928 (path)
 * - 84157 (electron)
 * - 44079
 */

function ElectronStoreBridgeWebpackModule(e, t, n) {
  "use strict";
  const r = n(16928),
    { app: i, ipcMain: o, ipcRenderer: s, shell: a } = n(84157),
    c = n(44079);
  let l = !1;
  const u = () => {
    if (!o || !i)
      throw new Error("Electron Store: You need to call `.initRenderer()` from the main process.");
    const e = { defaultCwd: i.getPath("userData"), appVersion: i.getVersion() };
    return (
      l ||
        (o.on("electron-store-get-data", (t) => {
          t.returnValue = e;
        }),
        (l = !0)),
      e
    );
  };
  e.exports = class extends c {
    constructor(e) {
      let t, n;
      if (s) {
        const e = s.sendSync("electron-store-get-data");
        if (!e)
          throw new Error(
            "Electron Store: You need to call `.initRenderer()` from the main process.",
          );
        ({ defaultCwd: t, appVersion: n } = e);
      } else o && i && ({ defaultCwd: t, appVersion: n } = u());
      ((e = { name: "config", ...e }).projectVersion || (e.projectVersion = n),
        e.cwd ? (e.cwd = r.isAbsolute(e.cwd) ? e.cwd : r.join(t, e.cwd)) : (e.cwd = t),
        (e.configName = e.name),
        delete e.name,
        super(e));
    }
    static initRenderer() {
      u();
    }
    async openInEditor() {
      const e = await a.openPath(this.path);
      if (e) throw new Error(e);
    }
  };
}

export default ElectronStoreBridgeWebpackModule;
