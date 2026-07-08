/*
 * Recovered from main webpack module 29953.
 * Inferred module name: AudioLoopbackController.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 79896 (fs)
 * - 70857 (os)
 * - 16928 (path)
 * - 12124 (SendToWindow)
 * - 84157 (electron)
 */

function AudioLoopbackControllerWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.macOSAudioCapture = t.MacOSAudioCapture = void 0));
  const i = r(n(79896)),
    o = r(n(70857)),
    s = r(n(16928)),
    a = n(12124),
    c = void 0 !== "MISSING_ENV_VAR".SHADOWHINT_DEBUG,
    l = "MISSING_ENV_VAR".SHADOWHINT_LOG_LEVEL || "INFO";
  function u(e, t = "INFO") {
    if (!c) return;
    if (d(t) < d(l)) return;
    const n = s.default.join(o.default.homedir(), "shadowhint-audio-debug.log"),
      r = `[${new Date().toISOString()}] [${t}] ${e}\n`;
    try {
      (i.default.appendFileSync(n, r), console.log(e));
    } catch (t) {
      (console.error("Failed to write to log file:", t), console.log(e));
    }
  }
  function d(e) {
    switch (e.toUpperCase()) {
      case "DEBUG":
        return 0;
      case "INFO":
      default:
        return 1;
      case "WARN":
        return 2;
      case "ERROR":
        return 3;
    }
  }
  class p {
    constructor() {
      ((this.isRecording = !1),
        (this.sessionId = null),
        (this.onAudioDataCallback = null),
        (this.onErrorCallback = null));
    }
    async startRecording(e, t, r) {
      try {
        if (this.isRecording) return { success: !1, error: "Запись уже в процессе" };
        ((this.sessionId = e),
          (this.onAudioDataCallback = t),
          (this.onErrorCallback = r),
          u("🎵 Начинаем запись системного аудио с помощью electron-audio-loopback", "INFO"),
          u("🎵 Отправляем команду начала захвата в renderer процесс", "INFO"),
          (this.sessionId = e),
          (this.onAudioDataCallback = t),
          (this.onErrorCallback = r));
        const { BrowserWindow: i } = n(84157),
          o = i.getAllWindows()[0];
        if (!o) throw new Error("Главное окно не найдено");
        return (
          (0, a.safeSenderSend)(o, "start-audio-loopback-capture", {
            sessionId: e,
            options: { sampleRate: 16e3, channelCount: 1, bufferSize: 2048 },
          }),
          (this.isRecording = !0),
          u("🔴 Команда запуска захвата отправлена в renderer", "INFO"),
          { success: !0 }
        );
      } catch (e) {
        return {
          success: !1,
          error: e instanceof Error ? e.message : "Неизвестная ошибка запуска записи",
        };
      }
    }
    stopRecording() {
      try {
        if (!this.isRecording) return { success: !1, error: "Запись не в процессе" };
        u("🛑 Останавливаем запись системного аудио...", "INFO");
        const { BrowserWindow: e } = n(84157),
          t = e.getAllWindows()[0];
        return (
          t &&
            (0, a.safeSenderSend)(t, "stop-audio-loopback-capture", { sessionId: this.sessionId }),
          (this.isRecording = !1),
          (this.sessionId = null),
          (this.onAudioDataCallback = null),
          (this.onErrorCallback = null),
          u("✅ Команда остановки захвата отправлена в renderer", "INFO"),
          { success: !0 }
        );
      } catch (e) {
        return {
          success: !1,
          error: e instanceof Error ? e.message : "Неизвестная ошибка остановки записи",
        };
      }
    }
    handleAudioData(e, t) {
      if (this.sessionId === e && this.onAudioDataCallback) {
        const e = new Uint8Array(t);
        this.onAudioDataCallback(e);
      }
    }
    handleError(e, t) {
      this.sessionId === e && this.onErrorCallback && this.onErrorCallback(t);
    }
    isCurrentlyRecording() {
      return this.isRecording;
    }
    getCurrentSessionId() {
      return this.sessionId;
    }
  }
  ((t.MacOSAudioCapture = p), (t.macOSAudioCapture = new p()));
}

export default AudioLoopbackControllerWebpackModule;
