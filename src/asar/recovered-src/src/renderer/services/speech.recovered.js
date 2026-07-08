/*
 * Recovered from renderer webpack module 19234.
 * Inferred module name: SpeechService.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - none detected
 */

function SpeechServiceWebpackModule(e, t) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.SpeechSynthesizer = void 0));
  class n {
    static getInstance() {
      return (n.instance || (n.instance = new n()), n.instance);
    }
    async synthesizeAndPlay(e, t, n = "", r = 80, o = "", i = !1, a) {
      console.log(`Синтезируем речь с sessionId: ${o}`);
      const s = (await this.getAvailableVoices()).find((e) => e.id === t);
      if (!s) return Promise.reject(new Error(`Голос с ID ${t} не найден`));
      const l = r / 100,
        c = a || {
          onStart: () => {
            console.log("Начало воспроизведения речи");
          },
          onEnd: () => {
            console.log("Завершение воспроизведения речи");
          },
          onError: (e) => {
            console.error("Ошибка синтеза речи:", e);
          },
        };
      return s && !s.isYandex
        ? this.playSpeechWithSystemVoice(e, t, n, l, c)
        : this.playSpeechWithYandexVoice(e, t, n, l, o, i, c);
    }
    playSpeechWithSystemVoice(e, t, n, r, o) {
      return new Promise((i) => {
        const a = new SpeechSynthesisUtterance(e),
          s = window.speechSynthesis.getVoices().find((e) => e.voiceURI === t);
        if (s) {
          ((a.voice = s),
            (a.volume = r),
            o &&
              ((a.onstart = o.onStart || (() => {})),
              (a.onend = o.onEnd || (() => {})),
              (a.onerror = (e) => {
                o.onError && o.onError(new Error(e.error || "Ошибка синтеза речи"));
              })),
            window.speechSynthesis.speak(a));
          try {
            const e = new Audio();
            "setSinkId" in e &&
              e.setSinkId(n).catch((e) => {
                console.error("Ошибка при установке устройства вывода для системной речи:", e);
              });
          } catch (e) {
            console.error("Устройство вывода не поддерживается для системной речи:", e);
          }
          i(() => {
            window.speechSynthesis.cancel();
          });
        } else
          ((a.volume = r),
            o &&
              ((a.onstart = o.onStart || (() => {})),
              (a.onend = o.onEnd || (() => {})),
              (a.onerror = (e) => {
                o.onError && o.onError(new Error(e.error || "Ошибка синтеза речи"));
              })),
            window.speechSynthesis.speak(a),
            i(() => {
              window.speechSynthesis.cancel();
            }));
      });
    }
    playSpeechWithYandexVoice(e, t, n, r, o = "", i = !1, a) {
      return new Promise(async (s, l) => {
        try {
          (console.log(
            `Синтезируем речь с параметрами: voiceId=${t}, sessionId=${o}, isTestMode=${i}`,
          ),
            a && a.onStart && a.onStart());
          const l = window.api.speech.synthesizeText,
            c = await l(e, t, i, o);
          if (!c.success) {
            const e = new Error(c.error || "Ошибка при синтезе речи");
            throw (a && a.onError && a.onError(e), e);
          }
          console.log(`Синтез начат, получен requestId: ${c.requestId}`);
          const { requestId: d } = c;
          let u = [];
          const p = window.api.speech.subscribeSynthesizedAudio(d, (e) => {
            if (!e.success)
              return (
                console.error("Ошибка при получении аудио:", e.error),
                a && a.onError && a.onError(new Error(e.error || "Ошибка получения аудио")),
                void p()
              );
            try {
              if (
                (e.audioData &&
                  e.audioData.length > 0 &&
                  (u.push(e.audioData), a && a.onData && a.onData(e.audioData)),
                e.isLast)
              ) {
                console.log(`Получены все аудио данные, количество фрагментов: ${u.length}`);
                const e = u.reduce((e, t) => e + t.length, 0),
                  t = new Uint8Array(e);
                let o = 0;
                for (const e of u) (t.set(e, o), (o += e.length));
                const i = `data:audio/wav;base64,${btoa(
                    Array.from(t)
                      .map((e) => String.fromCharCode(e))
                      .join(""),
                  )}`,
                  s = new Audio(i);
                s.volume = r;
                try {
                  "setSinkId" in s &&
                    s.setSinkId(n).catch((e) => {
                      console.error("Ошибка при установке устройства вывода:", e);
                    });
                } catch (e) {
                  console.error("Устройство вывода не поддерживается:", e);
                }
                (s.addEventListener("ended", () => {
                  (console.log("Воспроизведение завершено"),
                    a && a.onEnd && a.onEnd(),
                    p(),
                    window.api.speech && window.api.speech.cancelSynthesis(d));
                }),
                  s.play().catch((e) => {
                    (console.error("Ошибка запуска воспроизведения:", e),
                      a && a.onError && a.onError(e instanceof Error ? e : new Error(String(e))));
                  }),
                  p());
              }
            } catch (e) {
              (console.error("Ошибка обработки аудиоданных:", e),
                a && a.onError && a.onError(e instanceof Error ? e : new Error(String(e))),
                p());
            }
          });
          s(() => {
            (p(), window.api.speech.cancelSynthesis(d), a && a.onEnd && a.onEnd());
          });
        } catch (e) {
          (console.error("Ошибка при синтезе речи:", e),
            a && a.onError && a.onError(e instanceof Error ? e : new Error(String(e))),
            l(e));
        }
      });
    }
    async getAvailableVoices() {
      try {
        const e = await window.api.speech.getAvailableVoices();
        let t = [];
        e.success &&
          e.voices &&
          (t = e.voices
            .filter((e) => "24000" === e.quality)
            .map((e) => ({
              id: e.id,
              name: `${e.name}${e.language.startsWith("en") ? " — англ." : ""}`,
              lang: e.language,
              isYandex: !0,
              quality: e.quality,
              sortOrder: "number" == typeof e.sortOrder ? e.sortOrder : 999,
            })));
        let n = [];
        return (
          "speechSynthesis" in window &&
            (n = window.speechSynthesis
              .getVoices()
              .map((e) => ({
                id: e.voiceURI,
                name: e.name,
                lang: e.lang,
                isYandex: !1,
                sortOrder: 1e3,
              }))),
          [...t, ...n]
        );
      } catch (e) {
        return (console.error("Ошибка при загрузке голосов:", e), []);
      }
    }
    async getDefaultVoice() {
      const e = await this.getAvailableVoices();
      if (0 === e.length) return null;
      const t = e.find((e) => e.isYandex && e.name.toLowerCase().includes("тарас"));
      if (t) return t.id;
      const n = e.find((e) => e.isYandex && e.lang.startsWith("ru"));
      if (n) return n.id;
      const r = e.find((e) => !e.isYandex && e.lang.startsWith("ru"));
      return r ? r.id : e[0].id;
    }
  }
  ((t.SpeechSynthesizer = n), (n.instance = null), (t.default = n.getInstance()));
}

export default SpeechServiceWebpackModule;
