/*
 * Recovered from main webpack module 28680.
 * Inferred module name: ElectronAudioLoopback.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 10105 (LoopbackRenderer)
 * - 17071 (LoopbackMain)
 */

function ElectronAudioLoopbackWebpackModule(e, t, n) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.initMain = t.getLoopbackAudioMediaStream = void 0));
  const r = n(10105);
  Object.defineProperty(t, "getLoopbackAudioMediaStream", {
    enumerable: !0,
    get: function () {
      return r.getLoopbackAudioMediaStream;
    },
  });
  const i = n(17071);
  (Object.defineProperty(t, "initMain", {
    enumerable: !0,
    get: function () {
      return i.initMain;
    },
  }),
    "renderer" === process.type
      ? (e.exports = { getLoopbackAudioMediaStream: r.getLoopbackAudioMediaStream })
      : (e.exports = { initMain: i.initMain }));
}

export default ElectronAudioLoopbackWebpackModule;
