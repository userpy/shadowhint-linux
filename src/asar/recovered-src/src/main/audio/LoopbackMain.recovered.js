/*
 * Recovered from main webpack module 17071.
 * Inferred module name: LoopbackMain.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 84157 (electron)
 * - 78716
 */

function LoopbackMainWebpackModule(e, t, n) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.initMain = void 0));
  const r = n(84157),
    i = n(78716);
  t.initMain = (e = {}) => {
    const {
        forceCoreAudioTap: t = !1,
        loopbackWithMute: n = !1,
        onAfterGetSources: o,
        sessionOverride: s,
        sourcesOptions: a = i.defaultSourcesOptions,
      } = e,
      c = r.app.commandLine.getSwitchValue(i.featureSwitchKey)?.split(",");
    r.app.commandLine.hasSwitch(i.featureSwitchKey) &&
      r.app.commandLine.removeSwitch(i.featureSwitchKey);
    const l = (0, i.buildFeatureFlags)({ otherEnabledFeatures: c, forceCoreAudioTap: t });
    (r.app.commandLine.appendSwitch(i.featureSwitchKey, l),
      r.ipcMain.handle(i.ipcEvents.enableLoopbackAudio, () => {
        (s || r.session.defaultSession).setDisplayMediaRequestHandler(async (e, t) => {
          let s;
          try {
            ((s = await r.desktopCapturer.getSources(a)), o && (s = o(s)));
          } catch {
            throw new Error("Failed to get sources for system audio loopback capture.");
          }
          if (0 === s.length)
            throw new Error("No sources found for system audio loopback capture.");
          t({
            video: s[0],
            audio: n ? i.loopbackAudioTypes.loopbackWithMute : i.loopbackAudioTypes.loopback,
          });
        });
      }),
      r.ipcMain.handle(i.ipcEvents.disableLoopbackAudio, () => {
        (s || r.session.defaultSession).setDisplayMediaRequestHandler(null);
      }));
  };
}

export default LoopbackMainWebpackModule;
