/*
 * Recovered from main webpack module 10105.
 * Inferred module name: LoopbackRenderer.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 84157 (electron)
 * - 78716
 */

function LoopbackRendererWebpackModule(e, t, n) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getLoopbackAudioMediaStream = void 0));
  const r = n(84157),
    i = n(78716);
  t.getLoopbackAudioMediaStream = async (e = {}) => {
    const { removeVideo: t = !0 } = e;
    await r.ipcRenderer.invoke(i.ipcEvents.enableLoopbackAudio);
    const n = await navigator.mediaDevices.getDisplayMedia({ video: !0, audio: !0 });
    return (
      t &&
        n.getVideoTracks().forEach((e) => {
          (e.stop(), n.removeTrack(e));
        }),
      await r.ipcRenderer.invoke(i.ipcEvents.disableLoopbackAudio),
      n
    );
  };
}

export default LoopbackRendererWebpackModule;
