/*
 * Recovered from renderer webpack module 81902.
 * Inferred module name: DeviceSetupDiagnostics.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 34775
 */

function DeviceSetupDiagnosticsWebpackModule(e, t, n) {
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
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const a = n(40285),
    s = i(n(68329));
  t.default = () => {
    const [e, t] = (0, s.useState)(!1),
      [r, o] = (0, s.useState)([]),
      [l, c] = (0, s.useState)(""),
      [d, u] = (0, s.useState)([]),
      [p, A] = (0, s.useState)(""),
      [g, m] = (0, s.useState)(!1),
      f = (0, s.useRef)(null),
      h = (0, s.useRef)(null),
      b = (0, s.useRef)(null),
      _ = (0, s.useRef)(null),
      C = (0, s.useRef)(null),
      E = (e) => {
        const t = new Date().toLocaleTimeString();
        o((n) => [...n, `[${t}] ${e}`]);
      };
    (0, s.useEffect)(() => {
      (async () => {
        try {
          c(navigator.platform);
        } catch (e) {
          c("Unknown");
        }
      })();
    }, []);
    const y = (e, t, n, r) => {
        const o = () => {
          if (!C.current) return;
          (requestAnimationFrame(o),
            t.getByteFrequencyData(n),
            (e.fillStyle = "#f3f3f3"),
            e.fillRect(0, 0, r.width, r.height));
          const i = (r.width / n.length) * 2.5;
          let a,
            s = 0;
          for (let t = 0; t < n.length; t++)
            ((a = n[t] / 2),
              (e.fillStyle = `rgb(50,${a + 100},50)`),
              e.fillRect(s, r.height - a, i, a),
              (s += i + 1));
        };
        o();
      },
      v = async () => {
        if ((E("📝 Запуск записи с выбранным источником..."), !p))
          throw new Error("Источник не выбран. Сначала загрузите и выберите источник.");
        const e = d.find((e) => e.id === p);
        if (!e) throw new Error("Выбранный источник не найден в списке доступных.");
        (E(`🎯 Используем источник: ${e.name} (${e.isScreen ? "ЭКРАН" : "ОКНО"})`),
          E("Включение loopback audio в main процессе..."));
        const t = await window.api.electronAudioLoopback.enableLoopbackAudio();
        if ((E(`Результат enableLoopbackAudio: ${JSON.stringify(t)}`), !t.success))
          throw new Error(`Не удалось включить loopback audio: ${t.error}`);
        if (
          (E("✅ Loopback audio включен в main процессе"),
          E(`Получение MediaStream для источника: ${e.id}...`),
          !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
        )
          throw new Error("navigator.mediaDevices.getUserMedia не доступен");
        let n = null;
        try {
          ((n = await navigator.mediaDevices.getUserMedia({
            audio: {
              mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: e.id,
                sampleRate: 16e3,
                channelCount: 1,
              },
              echoCancellation: !1,
              noiseSuppression: !1,
              autoGainControl: !1,
              googEchoCancellation: !1,
              googAutoGainControl: !1,
              googNoiseSuppression: !1,
              googHighpassFilter: !1,
              googAudioMirroring: !1,
            },
            video: {
              mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: e.id,
                minWidth: 1,
                maxWidth: 1,
                minHeight: 1,
                maxHeight: 1,
                maxFrameRate: 1,
              },
            },
          })),
            E("✅ MediaStream получен с выбранным источником"));
        } catch (e) {
          throw (E(`❌ Ошибка получения MediaStream: ${e}`), e);
        }
        if (!n) throw new Error("Не удалось получить MediaStream");
        const r = n.getVideoTracks();
        (E(`Найдено ${r.length} видео треков, удаляем их...`),
          r.forEach((e) => {
            (e.stop(), n && n.removeTrack(e));
          }),
          E("✅ Видео треки удалены, остались только аудио треки"),
          E("Отключение loopback audio в main процессе..."));
        const o = await window.api.electronAudioLoopback.disableLoopbackAudio();
        o.success
          ? E("✅ Loopback audio отключен в main процессе")
          : E(`⚠️ Предупреждение: не удалось отключить loopback audio: ${o.error}`);
        const i = n.getAudioTracks();
        if ((E(`Найдено ${i.length} аудио треков`), 0 === i.length))
          throw new Error("MediaStream не содержит аудио треков");
        if (
          (i.forEach((e, t) => {
            const n = e.getSettings();
            E(
              `Аудио трек ${t + 1}: ${e.label}, частота: ${n.sampleRate}Гц, каналов: ${n.channelCount}`,
            );
          }),
          (f.current = n),
          h.current &&
            ((h.current.srcObject = n),
            (h.current.volume = 0),
            await h.current.play(),
            E("Аудио элемент подключен и запущен")),
          b.current)
        ) {
          const e = b.current,
            t = e.getContext("2d");
          if (t) {
            ((e.width = 800), (e.height = 100));
            const r = new (window.AudioContext || window.webkitAudioContext)(),
              o = r.createMediaStreamSource(n),
              i = r.createAnalyser();
            i.fftSize = 256;
            const a = i.frequencyBinCount,
              s = new Uint8Array(a);
            (o.connect(i),
              (_.current = r),
              (C.current = i),
              y(t, i, s, e),
              E("Визуализатор запущен"));
          }
        }
        E("Запись успешно запущена!");
      };
    return (0, a.jsxs)("div", {
      style: {
        padding: "20px",
        fontFamily: "monospace",
        backgroundColor: "#f3f3f3",
        minHeight: "100vh",
      },
      children: [
        (0, a.jsx)("h1", { children: "Тест electron-audio-loopback" }),
        (0, a.jsxs)("div", {
          style: {
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "white",
            border: "1px solid #ccc",
          },
          children: [
            (0, a.jsxs)("div", {
              children: [(0, a.jsx)("strong", { children: "Платформа:" }), " ", l || "Загрузка..."],
            }),
            (0, a.jsxs)("div", {
              children: [(0, a.jsx)("strong", { children: "Electron:" }), " 31.0.1"],
            }),
            (0, a.jsxs)("div", {
              children: [(0, a.jsx)("strong", { children: "electron-audio-loopback:" }), " 1.0.3"],
            }),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("strong", { children: "Статус записи:" }),
                " ",
                e ? "Идет запись" : "Остановлена",
              ],
            }),
          ],
        }),
        (0, a.jsxs)("div", {
          style: { marginBottom: "20px" },
          children: [
            (0, a.jsx)("button", {
              onClick: async () => {
                try {
                  if (
                    (g ||
                      (await (async () => {
                        try {
                          E("🔍 Загрузка доступных источников захвата...");
                          const e = await window.api.audio.startSystemAudio();
                          if (e.success && e.sources) {
                            const t = e.sources.map((e) => ({
                              id: e.id,
                              name: e.name,
                              isScreen: e.isScreen || !1,
                            }));
                            (u(t),
                              E(`✅ Найдено ${t.length} источников:`),
                              t.forEach((e, t) => {
                                const n = e.isScreen ? "[ЭКРАН]" : "[ОКНО]";
                                E(`  ${t + 1}. ${n} ${e.name} (id: ${e.id})`);
                              }));
                            const n = t.find((e) => e.isScreen) || t[0];
                            (n && (A(n.id), E(`🎯 Автоматически выбран: ${n.name}`)), m(!0));
                          } else
                            E(`❌ Ошибка загрузки источников: ${e.error || "Неизвестная ошибка"}`);
                        } catch (e) {
                          E(`❌ Исключение при загрузке источников: ${e}`);
                        }
                      })()),
                    !p)
                  )
                    return void E("❌ Источник не выбран. Выберите источник из списка.");
                  await (async () => {
                    try {
                      (t(!0),
                        E("🎯 Запуск записи electron-audio-loopback в Direct Mode..."),
                        E("Проверка доступности API..."),
                        E(`window.api существует: ${!!window.api}`),
                        E(
                          `window.api.electronAudioLoopback существует: ${!!window.api?.electronAudioLoopback}`,
                        ));
                      const e = window.electronAudioLoopback;
                      if (
                        (E(`electronAudioLoopback в window: ${!!e}`),
                        e && e.getLoopbackAudioMediaStream)
                      ) {
                        (E("✅ Direct Mode доступен! Вызываем getLoopbackAudioMediaStream..."),
                          E("Тип функции: " + typeof e.getLoopbackAudioMediaStream),
                          E(`Доступные методы: ${Object.keys(e).join(", ")}`),
                          E("🔐 Проверка разрешений на запись экрана..."));
                        try {
                          const e = await window.api.permissions.checkScreenAccess();
                          E(`Результат проверки разрешений: ${JSON.stringify(e)}`);
                        } catch (e) {
                          E(`⚠️ Ошибка проверки разрешений: ${e}`);
                        }
                        let t;
                        E("🎯 Вызываем getLoopbackAudioMediaStream...");
                        try {
                          (E("Попытка 1: без параметров"),
                            (t = await e.getLoopbackAudioMediaStream()));
                        } catch (n) {
                          E(
                            `Попытка 1 неудачна: ${n instanceof Error ? n.message : JSON.stringify(n)}`,
                          );
                          try {
                            (E("Попытка 2: с пустым объектом опций"),
                              (t = await e.getLoopbackAudioMediaStream({})));
                          } catch (n) {
                            E(
                              `Попытка 2 неудачна: ${n instanceof Error ? n.message : JSON.stringify(n)}`,
                            );
                            try {
                              (E("Попытка 3: с базовыми опциями"),
                                (t = await e.getLoopbackAudioMediaStream({ audio: !0 })));
                            } catch (e) {
                              throw (
                                E(
                                  `Попытка 3 неудачна: ${e instanceof Error ? e.message : JSON.stringify(e)}`,
                                ),
                                e
                              );
                            }
                          }
                        }
                        E("✅ MediaStream получен через Direct Mode");
                        const n = t.getAudioTracks();
                        if ((E(`Найдено ${n.length} аудио треков`), 0 === n.length))
                          throw new Error("MediaStream не содержит аудио треков");
                        if (
                          ((f.current = t),
                          h.current &&
                            ((h.current.srcObject = t),
                            (h.current.volume = 0),
                            await h.current.play(),
                            E("Аудио элемент подключен и запущен")),
                          b.current)
                        ) {
                          const e = b.current,
                            n = e.getContext("2d");
                          if (n) {
                            ((e.width = 800), (e.height = 100));
                            const r = new (window.AudioContext || window.webkitAudioContext)(),
                              o = r.createMediaStreamSource(t),
                              i = r.createAnalyser();
                            i.fftSize = 256;
                            const a = i.frequencyBinCount,
                              s = new Uint8Array(a);
                            (o.connect(i),
                              (_.current = r),
                              (C.current = i),
                              y(n, i, s, e),
                              E("Визуализатор запущен"));
                          }
                        }
                        E("🎉 Direct Mode запись успешно запущена!");
                      } else (E("❌ Direct Mode недоступен, пробуем Manual Mode..."), await v());
                    } catch (e) {
                      (E(
                        `❌ Ошибка в Direct Mode: ${e instanceof Error ? e.message : JSON.stringify(e)}`,
                      ),
                        E(`❌ Стек ошибки: ${e instanceof Error ? e.stack : "Нет стека"}`),
                        E("🔄 Пробуем Manual Mode как fallback..."));
                      try {
                        await v();
                      } catch (e) {
                        (E(`❌ Manual Mode тоже не работает: ${e}`), t(!1));
                      }
                    }
                  })();
                } catch (e) {
                  (E(`❌ Ошибка запуска записи: ${e}`), t(!1));
                }
              },
              disabled: e,
              style: {
                marginRight: "10px",
                padding: "10px 20px",
                backgroundColor: e ? "#ccc" : "#4CAF50",
                color: "white",
                border: "none",
              },
              children: "Начать запись",
            }),
            (0, a.jsx)("button", {
              onClick: async () => {
                try {
                  if (
                    (E("Остановка записи..."),
                    f.current &&
                      (f.current.getTracks().forEach((e) => {
                        (e.stop(), E(`Остановлен трек: ${e.label}`));
                      }),
                      (f.current = null)),
                    _.current && (await _.current.close(), (_.current = null), (C.current = null)),
                    h.current && (h.current.srcObject = null),
                    b.current)
                  ) {
                    const e = b.current.getContext("2d");
                    e && e.clearRect(0, 0, b.current.width, b.current.height);
                  }
                  E("Запись остановлена");
                } catch (e) {
                  E(`Ошибка при остановке записи: ${e}`);
                } finally {
                  t(!1);
                }
              },
              disabled: !e,
              style: {
                marginRight: "10px",
                padding: "10px 20px",
                backgroundColor: e ? "#f44336" : "#ccc",
                color: "white",
                border: "none",
              },
              children: "Остановить запись",
            }),
            (0, a.jsx)("button", {
              onClick: () => {
                o([]);
              },
              style: {
                marginRight: "10px",
                padding: "10px 20px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
              },
              children: "Очистить логи",
            }),
            (0, a.jsx)("button", {
              onClick: async () => {
                try {
                  E("🔧 Тестирование интеграции с системой записи...");
                  const { default: e } = await Promise.resolve().then(() => i(n(34775)));
                  if (!e.constructor.isAvailable())
                    return void E("❌ electron-audio-loopback не доступен");
                  E("✅ electron-audio-loopback доступен");
                  const t = "test-session-" + Date.now();
                  E(`📝 Запуск тестовой сессии: ${t}`);
                  let r = 0;
                  const o = await e.startCapture(
                    t,
                    { sampleRate: 16e3, channels: 1, format: "wav" },
                    (e, t) => {
                      (r++,
                        r % 100 == 0 &&
                          E(`📊 Получено пакетов данных: ${r} (размер: ${t.length} байт)`));
                    },
                  );
                  if (!o.success) return void E(`❌ Ошибка запуска: ${o.error}`);
                  (E("✅ Захват запущен, ждем 5 секунд..."),
                    setTimeout(async () => {
                      const t = await e.stopCapture();
                      t.success
                        ? (E(`✅ Захват остановлен. Всего получено пакетов: ${r}`),
                          E(
                            r > 0
                              ? "🎉 Интеграция работает корректно!"
                              : "⚠️ Данные не получены, проверьте разрешения системы",
                          ))
                        : E(`❌ Ошибка остановки: ${t.error}`);
                    }, 5e3));
                } catch (e) {
                  E(
                    `❌ Ошибка тестирования: ${e instanceof Error ? e.message : JSON.stringify(e)}`,
                  );
                }
              },
              disabled: e,
              style: {
                padding: "10px 20px",
                backgroundColor: e ? "#ccc" : "#FF9800",
                color: "white",
                border: "none",
              },
              children: "Тест интеграции",
            }),
          ],
        }),
        (0, a.jsxs)("div", {
          style: { marginBottom: "20px" },
          children: [
            (0, a.jsx)("h3", { children: "Аудио элемент:" }),
            (0, a.jsx)("audio", { ref: h, controls: !0, style: { width: "100%" } }),
          ],
        }),
        (0, a.jsxs)("div", {
          style: { marginBottom: "20px" },
          children: [
            (0, a.jsx)("h3", { children: "Визуализатор:" }),
            (0, a.jsx)("canvas", {
              ref: b,
              style: {
                width: "100%",
                height: "100px",
                backgroundColor: "#f3f3f3",
                border: "1px solid #ccc",
              },
            }),
          ],
        }),
        (0, a.jsxs)("div", {
          style: {
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "10px",
            height: "300px",
            overflowY: "scroll",
          },
          children: [
            (0, a.jsx)("h3", { children: "Логи:" }),
            r.map((e, t) =>
              (0, a.jsx)(
                "div",
                { style: { marginBottom: "5px", fontSize: "12px" }, children: e },
                t,
              ),
            ),
          ],
        }),
        (0, a.jsxs)("div", {
          style: {
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#e8f5e8",
            border: "1px solid #4CAF50",
          },
          children: [
            (0, a.jsx)("strong", { children: "Информация:" }),
            " Эта страница тестирует electron-audio-loopback в Direct Mode (приоритет) и Manual Mode (fallback).",
            (0, a.jsx)("br", {}),
            (0, a.jsx)("strong", { children: "Direct Mode:" }),
            " Вызывает getLoopbackAudioMediaStream() напрямую в renderer процессе.",
            (0, a.jsx)("br", {}),
            (0, a.jsx)("strong", { children: "Manual Mode:" }),
            " Использует IPC + getDisplayMedia (может не работать в некоторых версиях Electron).",
            (0, a.jsx)("br", {}),
            "На macOS требуется разрешение на запись экрана.",
          ],
        }),
      ],
    });
  };
}

export default DeviceSetupDiagnosticsWebpackModule;
