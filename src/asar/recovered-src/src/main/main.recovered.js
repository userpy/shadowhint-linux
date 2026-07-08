/*
 * Recovered from main webpack module 75458.
 * Inferred module name: MainProcess.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 84157 (electron)
 * - 35317 (child_process)
 * - 90139 (InterviewerClient)
 * - 16798
 * - 41312
 * - 24815
 * - 75374 (ShortcutManager)
 * - 15739 (UpdaterService)
 * - 1722 (UpdateNotificationWindowManager)
 * - 29953 (AudioLoopbackController)
 * - 16928 (path)
 * - 79896 (fs)
 * - 24884 (ErrorNormalizer)
 * - 59963 (SentryMain)
 * - 17292
 * - 12124 (SendToWindow)
 * - 57991 (CursorLock)
 * - 66012 (ElectronStoreBridge)
 * - 15598 (DeviceFingerprint)
 * - 88251 (SuggestionWindowManager)
 * - 97653 (SuggestionWindowHandlers)
 * - 73114 (VideoRecorder)
 * - 28680 (ElectronAudioLoopback)
 * - 70857 (os)
 * - 11544 (SquirrelStartup)
 * - 65264 (ScreenSelectionSettings)
 * - 81906 (SuggestionWindowSettings)
 * - 38741 (DisguiseService)
 * - 57343
 */

function MainProcessWebpackModule(e, t, n) {
  "use strict";
  var r =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(t, n);
            ((i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
              (i = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, i));
          }
        : function (e, t, n, r) {
            (void 0 === r && (r = n), (e[r] = t[n]));
          }),
    i =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    o =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
        return (i(t, e), t);
      },
    s =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.sendLogToRenderer = void 0));
  const a = Date.now(),
    c = n(84157),
    l = n(35317),
    u = n(90139),
    d = o(n(16798)),
    p = n(41312),
    f = o(n(24815)),
    h = n(75374),
    m = s(n(15739)),
    g = n(1722),
    S = n(29953),
    y = n(16928),
    b = s(n(79896)),
    v = n(24884),
    _ = n(59963),
    T = o(n(17292)),
    E = n(12124),
    I = n(57991),
    A = s(n(66012)),
    R = n(15598),
    C = n(88251),
    w = n(97653),
    N = n(73114);
  const { initMain: O } = n(28680);
  function P(e) {
    return e.includes("Лимит времени интервью исчерпан") || e.includes("Лимит часов исчерпан")
      ? e
      : e.includes("useruuid not found")
        ? "Authorization error. Re-login required"
        : e.includes("context canceled") ||
            e.includes("failed to get session") ||
            e.includes("use of closed network connection") ||
            e.includes("Client streaming error") ||
            (e.includes("INTERNAL") && e.includes("failed to get session"))
          ? "Interview session completed"
          : e;
  }
  function k(e) {
    if (
      !(function (e) {
        try {
          const t = e,
            n = (t?.message || t?.details || String(e || "")).toLowerCase();
          return (
            n.includes("failed to receive first audio chunk") ||
            n.includes("permission denied by system") ||
            n.includes("notreadableerror") ||
            n.includes("audio chunk") ||
            n.includes("system audio")
          );
        } catch {
          return !1;
        }
      })(e)
    )
      return !1;
    const t = e,
      n = t?.message || t?.details || String(e || "Unknown audio error"),
      r = { connected: !1, error: P(n) };
    console.warn("[MAIN] Intercepted recoverable audio bootstrap error:", n);
    for (const e of c.BrowserWindow.getAllWindows())
      e.isDestroyed() || (0, E.safeSenderSend)(e, "audio:connectionStatus", r);
    return !0;
  }
  function M(e) {
    try {
      const t = e;
      if (t && (4 === t.code || 14 === t.code)) return !0;
      const n = (t?.message || t?.details || "").toString().toLowerCase();
      return (
        n.includes("timeout") ||
        n.includes("deadline") ||
        n.includes("unavailable") ||
        n.includes("econnrefused") ||
        n.includes("enotfound")
      );
    } catch {
      return !1;
    }
  }
  ((0, _.initSentryMain)(),
    (t.sendLogToRenderer = (e, t, n) => {}),
    process.on("uncaughtException", (e) => {
      k(e) || console.error("[MAIN] Uncaught exception:", e);
    }),
    process.on("unhandledRejection", (e) => {
      k(e) || console.error("[MAIN] Unhandled rejection:", e);
    }),
    c.app.commandLine.appendSwitch("--disable-webrtc-aec-recording"),
    c.app.commandLine.appendSwitch("--disable-webrtc-agc-recording"),
    c.app.commandLine.appendSwitch("--disable-webrtc-ns-recording"),
    c.app.commandLine.appendSwitch("--autoplay-policy", "no-user-gesture-required"),
    c.app.commandLine.appendSwitch("--disable-web-security"),
    c.app.commandLine.appendSwitch("--allow-running-insecure-content"));
  const L = ["WebRTCHideLocalIpsWithMdns", "VizDisplayCompositor"];
  if ("darwin" === process.platform) {
    L.push("IOSurfaceCapturer", "DesktopCaptureMacV2");
    const e = n(70857).release();
    parseInt(e.split(".")[0]) >= 24 &&
      (console.log("🎤 macOS 15.0+ обнаружена, добавляем флаги для системного аудио"),
      c.app.commandLine.appendSwitch("enable-features", "MacSckSystemAudioLoopbackOverride"));
  } else
    "win32" === process.platform
      ? console.log("🪟 Windows обнаружена")
      : "linux" === process.platform &&
        (console.log("🐧 Linux обнаружена, добавляем флаги для системного аудио"),
        c.app.commandLine.appendSwitch("enable-features", "WebRTCPipeWireCapturer"));
  (c.app.commandLine.appendSwitch("--disable-features", L.join(",")),
    n(11544) && c.app.quit(),
    O(),
    console.log("🔒 Проверяем блокировку единственного экземпляра..."),
    c.app.requestSingleInstanceLock()
      ? (console.log(
          "✅ Блокировка единственного экземпляра получена успешно. Продолжаем инициализацию...",
        ),
        (async function () {
          console.log("🚀 Начало инициализации приложения (initializeApp)");
          let e = null;
          const r = (e) => (Number.isFinite(e) ? Math.trunc(e) : 0),
            i = (e, t, n, i = "setPosition") => {
              try {
                if (!e || e.isDestroyed()) return;
                const i = r(Number(t)),
                  o = r(Number(n));
                e.setPosition(i, o);
              } catch (e) {
                console.warn(`[safeSetPosition] Ошибка (${i}):`, { x: t, y: n, err: e });
              }
            },
            o = (e, t, n = !1, i = "setBounds") => {
              try {
                if (!e || e.isDestroyed() || !t) return;
                const i = e.getBounds(),
                  o = {
                    x: r(Number(t.x ?? i.x)),
                    y: r(Number(t.y ?? i.y)),
                    width: r(Number(t.width ?? i.width)),
                    height: r(Number(t.height ?? i.height)),
                  };
                e.setBounds(o, n);
              } catch (e) {
                console.warn(`[safeSetBounds] Ошибка (${i}):`, { rect: t, err: e });
              }
            },
            s = (e, t, n) => {
              try {
                if (!e || e.isDestroyed()) return;
                t
                  ? e.setIgnoreMouseEvents(!0, { forward: !!n?.forward })
                  : e.setIgnoreMouseEvents(!1);
              } catch (e) {
                console.warn("[safeSetIgnoreMouseEvents] Ошибка:", {
                  ignore: t,
                  options: n,
                  err: e,
                });
              }
            },
            O = (e) => {
              if ("darwin" !== process.platform) return !0;
              const t = (0, I.getCursorLock)();
              if (t.checkAccessibilityPermission?.()) return !0;
              const n = t.requestAccessibilityPermission?.() ?? !1,
                r = t.checkAccessibilityPermission?.() ?? !1,
                i = n || r;
              if (!i) {
                const e =
                  "x-apple.systempreferences:com.apple.preference.security?Privacy_Accessibility";
                c.shell.openExternal(e).catch(() => {});
              }
              return i;
            },
            k = (t) => {
              const n = {
                move_window_up: "up",
                move_window_down: "down",
                move_window_left: "left",
                move_window_right: "right",
              }[t];
              if (!n) return;
              let r = c.BrowserWindow.getFocusedWindow() || e;
              if (!r) {
                const e = c.BrowserWindow.getAllWindows();
                e.length > 0 && (r = e[0]);
              }
              if (!r || r.isDestroyed()) return;
              const [o, s] = r.getPosition();
              let a = o,
                l = s;
              switch (n) {
                case "up":
                  l = Math.max(0, s - 40);
                  break;
                case "down":
                  l = s + 40;
                  break;
                case "left":
                  a = Math.max(0, o - 40);
                  break;
                case "right":
                  a = o + 40;
              }
              try {
                (r.isMinimized() && r.restore(),
                  r.isFullScreen() && r.setFullScreen(!1),
                  r.isMaximized() && r.unmaximize());
                const e = r.isAlwaysOnTop();
                (e && r.setAlwaysOnTop(!1),
                  i(r, a, l, "hotkey-move-window"),
                  e &&
                    setTimeout(() => {
                      r && !r.isDestroyed() && r.setAlwaysOnTop(!0, "screen-saver");
                    }, 100));
              } catch (e) {
                console.error("Ошибка при перемещении окна:", e);
              }
            },
            L = process.argv.includes("--devtools") || "1" === "MISSING_ENV_VAR".DEVTOOLS,
            x = (e) => {
              try {
                L && e && !e.isDestroyed() && e.webContents.openDevTools({ mode: "detach" });
              } catch {}
            },
            D = () => {
              if (e && !e.isDestroyed())
                try {
                  const t = c.screen.getCursorScreenPoint(),
                    n = c.screen.getDisplayNearestPoint(t),
                    r = e.getBounds(),
                    o = n.workArea ?? n.bounds,
                    s = Math.round(o.x + (o.width - r.width) / 2),
                    a = o.y + 30;
                  i(e, s, a, "positionMainWindowToActiveDisplay");
                } catch (e) {
                  console.warn("Не удалось позиционировать главное окно:", e);
                }
            },
            U = 500,
            B = {
              width: Math.max(360, 405),
              minWidth: 360,
              baseHeight: 40,
              minHeight: 40,
              maxHeight: 1200,
              maxWidth: U,
              resizable: !1,
              title: d.default.app.productName,
              padding: { width: 48, height: 80 },
            },
            G = {
              width: Math.max(U, 580),
              minWidth: Math.max(520, 520),
              baseHeight: 720,
              minHeight: 560,
              maxHeight: 840,
              maxWidth: Math.max(U, 600),
              resizable: !0,
              title: `${d.default.app.productName} — Авторизация`,
              padding: { width: 64, height: 120 },
            };
          let F = "auth",
            V = G.width,
            j = G.baseHeight,
            H = G.minHeight,
            W = G.maxHeight,
            $ = { transparent: !0, backgroundColor: "#00000000", width: V, height: j },
            q = null,
            z = null,
            J = !1;
          const Y = () => {
              const e = null != q && "" !== q && "widget" === F;
              return { alwaysOnTop: e, skipTaskbar: e };
            },
            K = (t) => {
              const n = F;
              F = t;
              const r = "auth" === t ? G : B,
                i = "widget" === t;
              if (
                ((V = r.width),
                "auth" === t
                  ? ((j = r.baseHeight), (H = r.minHeight), (W = r.maxHeight))
                  : ((j = Math.max(j, r.minHeight)), (H = Math.min(r.minHeight, j)), (W = 0)),
                e && !e.isDestroyed())
              )
                try {
                  const o = c.screen.getCursorScreenPoint(),
                    s = c.screen.getDisplayNearestPoint(o),
                    a = s?.workArea ?? s.bounds,
                    l = r.padding?.width ?? 48,
                    u = (r.padding, Math.max(r.minWidth, a.width - l)),
                    d = Math.min(r.width, r.maxWidth, u),
                    p = "auth" === t ? r.baseHeight : j,
                    f = Math.max(p, r.minHeight),
                    h = Math.min(r.minWidth, d),
                    m = Math.max(r.minHeight, 0),
                    g = Math.max(h, Math.min(r.maxWidth, a.width)),
                    S = Math.min(Math.max(240, h), g),
                    y = Math.max(r.minHeight, m),
                    b = "auth" === t ? Math.max(r.maxHeight, y) : f;
                  (e.setResizable(!0),
                    e.setSize(d, f, !0),
                    i
                      ? (e.setMinimumSize(d, f), e.setMaximumSize(d, f), e.setResizable(!1))
                      : (e.setMinimumSize(S, y),
                        e.setMaximumSize(g, b),
                        e.setResizable(r.resizable)),
                    (V = d),
                    (j = f),
                    (H = i ? f : y),
                    (W = i ? f : b),
                    n !== t && D(),
                    e.setTitle(r.title),
                    "darwin" === process.platform &&
                      "function" == typeof e.setWindowButtonVisibility &&
                      e.setWindowButtonVisibility("auth" === t),
                    ($ = { ...$, width: d, height: f }),
                    vt());
                } catch (e) {
                  console.warn("Не удалось применить конфигурацию окна:", e);
                }
            },
            X = async () => {
              if (z || J)
                console.log("⏭️ Device info sync already running or starting, skipping...");
              else {
                J = !0;
                try {
                  if ((console.log("🔄 Starting device info sync (every 1 hour)..."), q))
                    try {
                      console.log("📤 Sending initial device info...");
                      const e = await (0, R.collectDeviceFingerprint)(),
                        t = (0, R.formatDeviceInfoForProto)(e),
                        n = await se.saveDevice(t);
                      console.log("✅ Initial device info sent successfully:", n);
                    } catch (e) {
                      console.error("❌ Failed to send initial device info:", e);
                    }
                  z = setInterval(async () => {
                    if (q)
                      try {
                        console.log("📤 Syncing device info...");
                        const e = await (0, R.collectDeviceFingerprint)(),
                          t = (0, R.formatDeviceInfoForProto)(e),
                          n = await se.saveDevice(t);
                        console.log("✅ Device info synced successfully:", n);
                      } catch (e) {
                        console.error("❌ Failed to sync device info:", e);
                      }
                  }, 36e5);
                } finally {
                  J = !1;
                }
              }
            };
          let Z = !1,
            Q = !0,
            ee = !1,
            te = null;
          const ne = new A.default({ name: "grpc", defaults: { preferredAddress: "" } }),
            re = (e) => {
              if ("string" != typeof e) return null;
              const t = e.trim();
              return t.length > 0 ? t : null;
            },
            ie = async () => {
              const e = re(d.default.grpc.serverAddress) || d.default.grpc.serverAddress,
                t = re(d.default.grpc.fallbackAddress),
                n = re(ne.get("preferredAddress")),
                r = ((e) => {
                  const t = new Set(),
                    n = [];
                  for (const r of e) r && !t.has(r) && (t.add(r), n.push(r));
                  return n;
                })([n, e, t]),
                i = Number("MISSING_ENV_VAR".GRPC_STARTUP_TIMEOUT_MS),
                o = Number.isFinite(i) ? i : 3e3;
              if (r.length <= 1) {
                const t = r[0] || e,
                  n = new u.InterviewerClient(t);
                try {
                  return (
                    await n.waitForReady(o),
                    console.log(`✅ [gRPC] Используем адрес: ${t}`),
                    { address: t, verified: !0 }
                  );
                } catch (e) {
                  return (
                    console.warn(`⚠️ [gRPC] Адрес недоступен: ${t}`, e),
                    { address: t, verified: !1 }
                  );
                } finally {
                  n.close();
                }
              }
              for (const e of r) {
                const t = new u.InterviewerClient(e);
                try {
                  return (
                    await t.waitForReady(o),
                    n !== e && ne.set("preferredAddress", e),
                    console.log(`✅ [gRPC] Используем адрес: ${e}`),
                    { address: e, verified: !0 }
                  );
                } catch (t) {
                  (console.warn(`⚠️ [gRPC] Адрес недоступен: ${e}`, t),
                    n && e === n && ne.delete("preferredAddress"));
                } finally {
                  t.close();
                }
              }
              return (
                console.warn(
                  `⚠️ [gRPC] Не удалось подтвердить доступность адресов, используем primary: ${e}`,
                ),
                { address: e, verified: !1 }
              );
            };
          ((d.default.grpc.serverAddress = (() => {
            const e = re(d.default.grpc.serverAddress) || d.default.grpc.serverAddress,
              t = re(ne.get("preferredAddress")) || e;
            return (console.log(`[gRPC] Начальный адрес (из кэша): ${t}`), t);
          })()),
            console.log("[PERF] grpc.initialAddress: " + (Date.now() - a) + "ms"));
          const oe = (e, t) => {
            const n = (t && e) || d.default.grpc.serverAddress,
              r = t ?? e;
            return new u.InterviewerClient(n, r);
          };
          let se = oe();
          let ae = {
            microphone: { deviceId: "", volume: 80 },
            output: { deviceId: "", volume: 80 },
            voice: "",
            audioSource: "both",
            permissions: { mic: !1, screen: !1 },
          };
          const ce = new Map(),
            le = [
              {
                id: "Nec_24000",
                name: "Natalya",
                quality: "24000",
                language: "ru-RU",
                gender: "female",
              },
              {
                id: "Bys_24000",
                name: "Boris",
                quality: "24000",
                language: "ru-RU",
                gender: "male",
              },
              {
                id: "May_24000",
                name: "Marfa",
                quality: "24000",
                language: "ru-RU",
                gender: "female",
              },
              {
                id: "Tur_24000",
                name: "Taras",
                quality: "24000",
                language: "ru-RU",
                gender: "male",
              },
              {
                id: "Ost_24000",
                name: "Alexandra",
                quality: "24000",
                language: "ru-RU",
                gender: "female",
              },
              {
                id: "Pon_24000",
                name: "Sergey",
                quality: "24000",
                language: "ru-RU",
                gender: "male",
              },
              {
                id: "Kin_24000",
                name: "Kira",
                quality: "24000",
                language: "en-US",
                gender: "female",
              },
            ];
          let ue = null,
            de = null,
            pe = !1,
            fe = 0,
            he = null,
            me = [],
            ge = null,
            Se = null,
            ye = null,
            be = null,
            ve = null,
            _e = null,
            Te = null,
            Ee = !1,
            Ie = "inactive",
            Ae = 0,
            Re = 0,
            Ce = null,
            we = null,
            Ne = !1,
            Oe = null,
            Pe = !1;
          const ke = 220,
            Me = 1200,
            Le = 300,
            xe = 366;
          let De = 90,
            Ue = null,
            Be = null,
            Ge = "";
          const Fe = new N.VideoRecorder();
          c.ipcMain.on("video-recorder:chunk", (e, t) => {
            try {
              Fe.handleChunk(t);
            } catch (e) {
              console.error("[VideoRecorder] Failed to handle chunk:", e);
            }
          });
          let Ve = null,
            je = null,
            He = {
              screenshotMode: "fullscreen",
              autoDetectionEnabled: !1,
              suggestionOpacity: 90,
              contentProtectionEnabled: Q,
              selectedDisplayId: null,
              language: "en",
              audioSource: "both",
              keystrokeOverlayEnabled: !0,
              showMainWindowOnRecording: !0,
              recordingEnabled: !1,
            },
            We = !1,
            $e = !1,
            qe = !1;
          const ze = (e) => Math.min(Math.max(Math.round(e), 40), 100),
            Je = new A.default({
              name: "settings",
              defaults: {
                shortcuts: [],
                suggestionOpacity: 90,
                preferredLanguage: "en",
                sttProvider: "deepgram",
                vadMode: 0,
                maxSpeechSeconds: 7,
              },
            }),
            Ye = Je.get("suggestionOpacity", 90);
          De = ze(Number(Ye));
          const Ke = async (t, n = !1) => {
            if (!Je.get("recordingEnabled", !1)) return;
            if (!e || e.isDestroyed()) return;
            const r = Je.get("recordingOutputPath", ""),
              i = ((e, t = !1) => {
                const n = (e) =>
                    e
                      .replace(/[<>:"/\\|?*]/g, "_")
                      .replace(/\s+/g, "_")
                      .substring(0, 80),
                  r = (e.id || "").substring(0, 8),
                  i = r ? `${n(e.title || "Untitled")}_${r}` : n(e.title || "Untitled");
                return t ? `${i}_resume_${Date.now()}` : i;
              })(t, n),
              o = (() => {
                const t = new Map();
                return Je.get("showMainWindowOnRecording", !0)
                  ? (me.forEach((e) => {
                      e.window &&
                        !e.window.isDestroyed() &&
                        t.set(`suggestion-${e.window.id}`, e.window);
                    }),
                    ve && !ve.isDestroyed() && t.set("transcription", ve),
                    e && !e.isDestroyed() && t.set("main", e),
                    Ve && !Ve.isDestroyed() && t.set("toolbar", Ve),
                    je && !je.isDestroyed() && t.set("settings", je),
                    t)
                  : t;
              })();
            await Fe.startRecording(i, e, o, r || void 0);
          };
          Z = !!Je.get("autoDetectionEnabled", !1);
          const Xe = Je.get("deviceSettings");
          Xe && (ae = { ...ae, ...Xe });
          {
            const { screenSelectionSettings: e } = n(65264);
            He = {
              ...He,
              suggestionOpacity: De,
              contentProtectionEnabled: Q,
              selectedDisplayId: e.getSelectedDisplayId() || null,
              language: String(Je.get("preferredLanguage", "en")),
              keystrokeOverlayEnabled: Je.get("keystrokeOverlayEnabled", !0),
              showMainWindowOnRecording: Je.get("showMainWindowOnRecording", !0),
              recordingEnabled: Je.get("recordingEnabled", !1),
            };
          }
          const Ze = (e) => {
              const t = ze(e);
              it().forEachWindow((e) => {
                e && !e.isDestroyed() && (0, E.safeSenderSend)(e, "suggestion:set-opacity", t);
              });
            },
            Qe = (e, t) => {
              if (((We = e), e || (($e = !1), (qe = !1)), Ve && !Ve.isDestroyed()))
                try {
                  (0, E.safeSenderSend)(Ve, "toolbar-settings:visibility", e);
                } catch (e) {
                  console.warn(
                    "Не удалось отправить событие toolbar-settings:visibility в окно настроек:",
                    e,
                  );
                }
              if (t && !t.isDestroyed())
                try {
                  (0, E.safeSenderSend)(t, "toolbar-settings:visibility", e);
                } catch (e) {
                  console.warn(
                    "Не удалось отправить событие toolbar-settings:visibility в основное окно:",
                    e,
                  );
                }
            },
            et = () => {
              if (Ve && !Ve.isDestroyed())
                try {
                  (0, E.safeSenderSend)(Ve, "toolbar-settings:update-state", He);
                } catch (e) {
                  console.warn("Не удалось обновить состояние панели настроек:", e);
                }
              if (e && !e.isDestroyed())
                try {
                  (0, E.safeSenderSend)(e, "toolbar-settings:update-state", He);
                } catch (e) {
                  console.warn("Не удалось обновить состояние в основном окне:", e);
                }
              if (je && !je.isDestroyed())
                try {
                  (0, E.safeSenderSend)(je, "toolbar-settings:update-state", He);
                } catch (e) {
                  console.warn("Не удалось обновить состояние в окне настроек:", e);
                }
            },
            tt = (e) => {
              if (!e || e.isDestroyed()) return;
              if (!Ve || Ve.isDestroyed()) return;
              const t = e.getBounds(),
                n = Ve.getBounds(),
                r = c.screen.getDisplayMatching(t),
                o = r?.workArea ?? r.bounds;
              let s = t.x + t.width + 12,
                a = t.y;
              (s + n.width > o.x + o.width && (s = t.x - n.width - 12),
                s < o.x && (s = Math.max(o.x, t.x + t.width - n.width)),
                a + n.height > o.y + o.height && (a = Math.max(o.y, t.y + t.height - n.height)),
                a < o.y && (a = o.y),
                i(Ve, Math.round(s), Math.round(a), "positionToolbarSettingsWindow"));
            },
            nt = (e) => {
              try {
                if (!e || e.isDestroyed())
                  return { success: !1, error: "Main window is not available" };
                if (!Ve || Ve.isDestroyed()) return (ht("toolbar-settings"), { success: !0 });
                tt(e);
                const t = () => {
                  if (Ve && !Ve.isDestroyed())
                    try {
                      Ve.focus();
                    } catch {}
                  setTimeout(() => {
                    qe = !1;
                  }, 150);
                };
                if (Ve.isVisible()) ((qe = !0), setTimeout(t, 0));
                else
                  try {
                    ((qe = !0), Ve.show(), setTimeout(t, 0));
                  } catch {
                    (setTimeout(() => {
                      qe = !1;
                    }, 150),
                      Ve.show());
                  }
                return (Qe(!0, e), et(), { success: !0 });
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            },
            rt = () => {
              try {
                return !Ve || Ve.isDestroyed()
                  ? ((Ve = null), (We = !1), ($e = !1), (qe = !1), { success: !0 })
                  : Ve.isVisible()
                    ? (($e = !1), (qe = !1), Ve.hide(), { success: !0 })
                    : (($e = !1), (qe = !1), { success: !0 });
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            },
            it = () => {
              if (!Ue) {
                const { suggestionWindowSettings: t } = n(81906),
                  r = t.getWidth();
                ((Ue = new C.SuggestionWindowManager({
                  verticalGap: 12,
                  animationDuration: 220,
                  fixedSize: { width: r },
                  allowWorkAreaOverflow: !0,
                  getMainWindow: () => e,
                  onWindowsChanged: (e) => {
                    me = e.map((e) => ({ window: e.window, position: { ...e.position } }));
                  },
                })),
                  Ue.setWindowWidth(r));
                const i = t.getHeight();
                i && Ue.setTrackedHeight(i);
              }
              return Ue;
            },
            ot = (e) => {
              it().forEachWindow(e);
            },
            st = () => (
              Be ||
                (Be = new C.SuggestionWindowManager({
                  verticalGap: 0,
                  animationDuration: 260,
                  getMainWindow: () => e,
                  fixedSize: { width: Le, height: xe },
                  allowWorkAreaOverflow: !0,
                  positionResolver: ({ mainBounds: e, windowBounds: t }) => {
                    const n = it(),
                      r = n.getPrimaryWindow?.();
                    let i, o;
                    if (r && !r.isDestroyed()) {
                      const e = r.getBounds();
                      ((i = e.x - t.width - 20), (o = e.y));
                    } else ((i = e.x - t.width - 20), (o = e.y));
                    return { x: Math.round(i), y: Math.round(o) };
                  },
                })),
              Be
            );
          let at = {
            mainWindow: !1,
            suggestionWindows: [],
            updateNotificationWindow: !1,
            toolbarSettingsWindow: !1,
            sessionsWindow: !1,
            cursorOverlay: !1,
            clickCatcher: !1,
            allHidden: !1,
          };
          function ct(e) {
            return e
              ? 9 !== e.code ||
                ("Session is not active" !== e.details &&
                  !e.message?.includes("Session is not active"))
                ? 13 === e.code &&
                  pe &&
                  (e.message?.includes("use of closed network connection") ||
                    e.message?.includes("Client streaming error"))
                  ? "expected_termination"
                  : 14 === e.code
                    ? "connection_error"
                    : "other"
                : (function (e) {
                      if (!e || 9 !== e.code) return !1;
                      if (
                        "Session is not active" !== e.details &&
                        !e.message?.includes("Session is not active")
                      )
                        return !1;
                      const t = Date.now() - fe;
                      return pe && t <= 5e3;
                    })(e)
                  ? "expected_termination"
                  : "session_timeout"
              : "other";
          }
          function lt() {
            if (e)
              try {
                if (!e.isVisible())
                  try {
                    e.showInactive();
                  } catch {
                    e.show();
                  }
                (e.isMinimized() && e.restore(),
                  "win32" === process.platform
                    ? e.flashFrame(!0)
                    : "darwin" === process.platform && c.app.dock.bounce("informational"),
                  console.log("✅ Главное окно успешно восстановлено и сфокусировано"));
              } catch (e) {
                console.log(`❌ Ошибка при восстановлении главного окна: ${e}`);
              }
            else console.log("⚠️ Попытка восстановления главного окна, но окно не найдено");
          }
          (c.ipcMain.handle("window:toggleAllVisibility", () =>
            (function () {
              try {
                if (at.allHidden) {
                  if (he && !he.isDestroyed() && at.mainWindow)
                    try {
                      he.showInactive();
                    } catch {
                      he.show();
                    }
                  if (
                    (me.forEach((e, t) => {
                      if (e.window && !e.window.isDestroyed() && at.suggestionWindows[t])
                        try {
                          e.window.showInactive();
                        } catch {
                          e.window.show();
                        }
                    }),
                    Se)
                  ) {
                    const e = Se.getWindow();
                    if (e && !e.isDestroyed() && at.updateNotificationWindow)
                      try {
                        e.showInactive();
                      } catch {
                        e.show();
                      }
                  }
                  if (
                    (at.toolbarSettingsWindow && nt(he),
                    be && !be.isDestroyed() && at.sessionsWindow)
                  )
                    try {
                      be.showInactive();
                    } catch {
                      be.show();
                    }
                  (_e && !_e.isDestroyed() && at.cursorOverlay && _e.showInactive(),
                    Te && !Te.isDestroyed() && at.clickCatcher && Te.showInactive(),
                    (at = {
                      mainWindow: !1,
                      suggestionWindows: [],
                      updateNotificationWindow: !1,
                      toolbarSettingsWindow: !1,
                      sessionsWindow: !1,
                      cursorOverlay: !1,
                      clickCatcher: !1,
                      allHidden: !1,
                    }),
                    console.log("🔍 Все окна показаны"));
                } else {
                  if (
                    ((at.mainWindow = !(!he || he.isDestroyed() || !he.isVisible())),
                    at.mainWindow && he.hide(),
                    (at.suggestionWindows = me.map((e) => {
                      const t = e.window && !e.window.isDestroyed() && e.window.isVisible();
                      return (t && e.window.hide(), t);
                    })),
                    Se)
                  ) {
                    const e = Se.getWindow();
                    ((at.updateNotificationWindow = !(!e || e.isDestroyed() || !e.isVisible())),
                      at.updateNotificationWindow && e.hide());
                  }
                  ((at.toolbarSettingsWindow = !(!Ve || Ve.isDestroyed() || !Ve.isVisible())),
                    at.toolbarSettingsWindow && rt(),
                    (at.sessionsWindow = !(!be || be.isDestroyed() || !be.isVisible())),
                    at.sessionsWindow && be.hide(),
                    (at.cursorOverlay = !(!_e || _e.isDestroyed() || !_e.isVisible())),
                    at.cursorOverlay && _e.hide(),
                    (at.clickCatcher = !(!Te || Te.isDestroyed() || !Te.isVisible())),
                    at.clickCatcher && Te.hide(),
                    (at.allHidden = !0),
                    console.log("👻 Все окна скрыты"));
                }
                return { success: !0 };
              } catch (e) {
                return (
                  console.error("Ошибка при переключении видимости окон:", e),
                  { success: !1, error: String(e) }
                );
              }
            })(),
          ),
            (0, w.registerSuggestionWindowHandlers)(
              () => it(),
              () => je,
            ));
          const ut = new m.default(),
            dt = new g.UpdateNotificationWindow();
          Se = dt;
          const pt = () => {
              (console.log("Закрываем все дополнительные окна..."),
                it().closeAll(),
                st().closeAll(),
                be && !be.isDestroyed() && (be.close(), (be = null)),
                ve && !ve.isDestroyed() && (ve.close(), (ve = null)),
                (me = []),
                Ve && !Ve.isDestroyed() && (Qe(!1, e), Ve.close(), (Ve = null), (We = !1)),
                je && !je.isDestroyed() && (je.close(), (je = null)),
                ge && !ge.isDestroyed() && (ge.close(), (ge = null)),
                ye && !ye.isDestroyed() && (ye.close(), (ye = null)),
                _e && !_e.isDestroyed() && (_e.close(), (_e = null)),
                Te && !Te.isDestroyed() && (Te.close(), (Te = null)),
                dt.destroy(),
                ut.destroy(),
                console.log("Все дополнительные окна закрыты"));
            },
            ft = (t) => {
              (console.error("Ошибка авторизации обнаружена, уведомляем renderer процесс: ", t),
                (q = null),
                K("auth"),
                vt(),
                e &&
                  !e.isDestroyed() &&
                  (0, E.safeSenderSend)(e, "auth:error", {
                    error: t instanceof Error ? t.message : String(t),
                    timestamp: new Date().toISOString(),
                  }),
                ot((e) => {
                  (0, E.safeSenderSend)(e, "auth:error", {
                    error: t instanceof Error ? t.message : String(t),
                    timestamp: new Date().toISOString(),
                  });
                }));
            };
          (c.ipcMain.on("audio-loopback-started", (e, t) => {
            const { sessionId: n } = t;
            console.log(`🔴 Захват аудио запущен в renderer для сессии: ${n}`);
          }),
            c.ipcMain.on("audio-loopback-stopped", (e, t) => {
              const { sessionId: n } = t;
              console.log(`🛑 Захват аудио остановлен в renderer для сессии: ${n}`);
            }),
            c.ipcMain.on("audio-loopback-error", (e, t) => {
              const { sessionId: n, error: r } = t;
              (console.log(`❌ Ошибка захвата аудио в renderer для сессии ${n}: ${r}`),
                S.macOSAudioCapture.handleError(n, r));
            }),
            c.ipcMain.on("audio-loopback-data", (e, t) => {
              const { sessionId: n, audioData: r } = t;
              S.macOSAudioCapture.handleAudioData(n, r);
            }),
            c.ipcMain.handle("set-ignore-mouse-events", async (t, n, r) => {
              try {
                if (e && !e.isDestroyed()) {
                  return !e.webContents.getURL().includes("#/live-widget") && n
                    ? (console.log("🚫 Click-through разрешен только на странице LiveWidget"),
                      { success: !0, ignored: !0 })
                    : (s(e, n, r),
                      console.log(
                        `🖱️ Игнорирование событий мыши: ${n}, options: ${JSON.stringify(r)}`,
                      ),
                      { success: !0 });
                }
                return { success: !1, error: "Главное окно недоступно" };
              } catch (e) {
                const t = e instanceof Error ? e.message : String(e);
                return (
                  console.log(`❌ Ошибка управления игнорированием событий мыши: ${t}`),
                  { success: !1, error: t }
                );
              }
            }),
            console.log("✅ IPC обработчик set-ignore-mouse-events зарегистрирован"));
          const ht = (t = "main") => {
            let n;
            if ("shortcuts-settings" === t)
              n = {
                width: 600,
                height: 450,
                frame: !1,
                transparent: !0,
                backgroundColor: "#00000000",
                titleBarStyle: "hidden",
                show: !1,
                center: !0,
                resizable: !1,
                autoHideMenuBar: !0,
                useContentSize: !0,
                minWidth: 600,
                minHeight: 450,
                maxWidth: 600,
                maxHeight: 450,
                parent: e || void 0,
                modal: !0,
                skipTaskbar: !0,
                alwaysOnTop: Y().alwaysOnTop,
                focusable: !0,
                acceptFirstMouse: !0,
                webPreferences: {
                  preload: require("path").resolve(
                    __dirname,
                    "../renderer",
                    "main_window",
                    "preload.js",
                  ),
                  nodeIntegration: !0,
                  contextIsolation: !1,
                  webSecurity: !1,
                },
              };
            else if ("toolbar-settings" === t)
              n = {
                width: 320,
                height: 500,
                minWidth: 320,
                minHeight: 500,
                maxWidth: 320,
                maxHeight: 500,
                frame: !1,
                transparent: !1,
                backgroundColor: "#141414",
                show: !1,
                resizable: !1,
                autoHideMenuBar: !0,
                skipTaskbar: Y().skipTaskbar,
                parent: e || void 0,
                modal: !1,
                type: "toolbar",
                alwaysOnTop: Y().alwaysOnTop,
                focusable: !0,
                acceptFirstMouse: !0,
                webPreferences: {
                  preload: require("path").resolve(
                    __dirname,
                    "../renderer",
                    "main_window",
                    "preload.js",
                  ),
                  nodeIntegration: !0,
                  contextIsolation: !1,
                  webSecurity: !1,
                  backgroundThrottling: !1,
                },
              };
            else if ("setup" === t)
              n = {
                width: 900,
                height: 720,
                minWidth: 720,
                minHeight: 600,
                show: !1,
                resizable: !0,
                frame: !0,
                autoHideMenuBar: !0,
                backgroundColor: "#111111",
                center: !0,
                focusable: !0,
                acceptFirstMouse: !0,
                webPreferences: {
                  preload: require("path").resolve(
                    __dirname,
                    "../renderer",
                    "main_window",
                    "preload.js",
                  ),
                  nodeIntegration: !0,
                  contextIsolation: !1,
                  webSecurity: !1,
                  backgroundThrottling: !1,
                },
              };
            else if ("microphone-selector" === t)
              n = {
                width: 320,
                height: 420,
                minWidth: 300,
                minHeight: 360,
                show: !1,
                resizable: !1,
                frame: !1,
                autoHideMenuBar: !0,
                backgroundColor: "#2e2e2e",
                parent: e || void 0,
                modal: !1,
                titleBarStyle: "hiddenInset",
                ...("darwin" === process.platform ? { type: "panel" } : {}),
                focusable: !0,
                acceptFirstMouse: !0,
                webPreferences: {
                  preload: require("path").resolve(
                    __dirname,
                    "../renderer",
                    "main_window",
                    "preload.js",
                  ),
                  nodeIntegration: !0,
                  contextIsolation: !1,
                  webSecurity: !1,
                  backgroundThrottling: !1,
                },
              };
            else if ("settings" === t)
              n = {
                width: 800,
                height: 600,
                minWidth: 700,
                minHeight: 500,
                frame: !1,
                transparent: !1,
                backgroundColor: "#121212",
                show: !1,
                resizable: !0,
                center: !0,
                autoHideMenuBar: !0,
                modal: !1,
                alwaysOnTop: Y().alwaysOnTop,
                focusable: !0,
                acceptFirstMouse: !0,
                webPreferences: {
                  preload: require("path").resolve(
                    __dirname,
                    "../renderer",
                    "main_window",
                    "preload.js",
                  ),
                  nodeIntegration: !0,
                  contextIsolation: !1,
                  webSecurity: !1,
                  backgroundThrottling: !1,
                },
              };
            else {
              if (!q) {
                const e = Je.get("authToken", null);
                e && ((q = e), se.setAuthToken(e));
              }
              const e = null != q && "" !== q,
                t = e ? B : G;
              ((F = e ? "widget" : "auth"),
                (V = t.width),
                (j = t.baseHeight),
                (H = t.minHeight),
                (W = t.maxHeight),
                (n = {
                  width: V,
                  height: j,
                  frame: !1,
                  transparent: !0,
                  backgroundColor: "#00000000",
                  icon:
                    "linux" === process.platform &&
                    require("fs").existsSync("/usr/share/icons/hicolor/256x256/apps/shadowhint.png")
                      ? "/usr/share/icons/hicolor/256x256/apps/shadowhint.png"
                      : void 0,
                  ...("darwin" === process.platform ? { type: "panel", roundedCorners: !1 } : {}),
                  hasShadow: !1,
                  show: !1,
                  ...(process.platform, {}),
                  focusable: !0,
                  acceptFirstMouse: !0,
                  webPreferences: {
                    preload: require("path").resolve(
                      __dirname,
                      "../renderer",
                      "main_window",
                      "preload.js",
                    ),
                    nodeIntegration: !0,
                    contextIsolation: !1,
                    webSecurity: !1,
                    backgroundThrottling: !1,
                  },
                  autoHideMenuBar: !0,
                  useContentSize: !0,
                  resizable: t.resizable,
                  minWidth: t.resizable ? t.width : 360,
                  maxWidth: t.maxWidth,
                  minHeight: H,
                  maxHeight: 0,
                  skipTaskbar: Y().skipTaskbar,
                  hiddenInMissionControl: !0,
                }));
            }
            const r = new c.BrowserWindow(n);
            if ("main" !== t) {
              if ("shortcuts-settings" === t) {
                ge = r;
                try {
                  ge.setContentProtection(Q);
                } catch {}
                return (
                  "darwin" === process.platform &&
                    "function" == typeof ge.setWindowButtonVisibility &&
                    ge.setWindowButtonVisibility(!1),
                  ge.loadURL(
                    `file://${require("path").resolve(__dirname, "..", "renderer", "main_window", "index.html")}#/shortcuts-settings`,
                  ),
                  ge.on("ready-to-show", () => {
                    if (ge && !ge.isDestroyed()) {
                      try {
                        ge.showInactive();
                      } catch {}
                      try {
                        ge.isVisible() || ge.show();
                      } catch {
                        ge.show();
                      }
                      x(ge);
                    }
                  }),
                  ge.on("closed", () => {
                    ge = null;
                  }),
                  ge
                );
              }
              if ("toolbar-settings" === t) {
                if (((Ve = r), Je.get("showMainWindowOnRecording", !0)))
                  try {
                    Fe.registerWindow("toolbar", Ve);
                  } catch (e) {
                    console.error("[VideoRecorder] Failed to register toolbar:", e);
                  }
                ((e) => {
                  Ve &&
                    !Ve.isDestroyed() &&
                    (Ve.setMenuBarVisibility(!1),
                    Ve.on("show", () => {
                      (tt(e),
                        Qe(!0, e),
                        setImmediate(() => {
                          et();
                        }));
                    }),
                    Ve.on("hide", () => {
                      ((qe = !1), Qe(!1, e));
                    }),
                    Ve.on("blur", () => {
                      qe ||
                        setTimeout(() => {
                          !Ve || Ve.isDestroyed() || Ve.isFocused() || Ve.hide();
                        }, 150);
                    }),
                    Ve.on("closed", () => {
                      try {
                        Fe.unregisterWindow("toolbar");
                      } catch (e) {
                        console.error("[VideoRecorder] Failed to unregister toolbar:", e);
                      }
                      ((Ve = null), (We = !1), Qe(!1, e));
                    }));
                })(e);
                const t = Y();
                return (
                  Ve.setAlwaysOnTop(t.alwaysOnTop, t.alwaysOnTop ? "screen-saver" : void 0),
                  Ve.setSkipTaskbar(t.skipTaskbar),
                  t.alwaysOnTop && Ve.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
                  Ve.setContentProtection(Q),
                  Ve.loadURL(
                    `file://${require("path").resolve(__dirname, "..", "renderer", "main_window", "index.html")}#/toolbar-settings`,
                  ),
                  Ve.once("ready-to-show", () => {
                    if (Ve && !Ve.isDestroyed()) {
                      tt(e);
                      try {
                        ((qe = !0),
                          Ve.show(),
                          setTimeout(() => {
                            if (Ve && !Ve.isDestroyed())
                              try {
                                Ve.focus();
                              } catch {}
                            setTimeout(() => {
                              qe = !1;
                            }, 150);
                          }, 0));
                      } catch {
                        (setTimeout(() => {
                          qe = !1;
                        }, 150),
                          Ve.show());
                      }
                      x(Ve);
                    }
                  }),
                  Ve
                );
              }
              if ("settings" === t) {
                if (((je = r), Je.get("showMainWindowOnRecording", !0)))
                  try {
                    Fe.registerWindow("settings", je);
                  } catch (e) {
                    console.error("[VideoRecorder] Failed to register settings:", e);
                  }
                try {
                  je.setContentProtection(Q);
                } catch {}
                return (
                  je.loadURL(
                    `file://${require("path").resolve(__dirname, "..", "renderer", "main_window", "index.html")}#/settings`,
                  ),
                  je.on("ready-to-show", () => {
                    je && !je.isDestroyed() && (je.show(), je.focus(), x(je));
                  }),
                  je.on("closed", () => {
                    try {
                      Fe.unregisterWindow("settings");
                    } catch (e) {
                      console.error("[VideoRecorder] Failed to unregister settings:", e);
                    }
                    je = null;
                  }),
                  je
                );
              }
              return (
                (ye = r),
                ye.setMenuBarVisibility(!1),
                ye.loadURL(
                  `file://${require("path").resolve(__dirname, "..", "renderer", "main_window", "index.html")}#/setup`,
                ),
                ye.on("ready-to-show", () => {
                  if (ye && !ye.isDestroyed()) {
                    try {
                      ye.showInactive();
                    } catch {
                      ye.show();
                    }
                    x(ye);
                  }
                }),
                ye.on("closed", () => {
                  ye = null;
                }),
                ye
              );
            }
            e = r;
            try {
              e.setHasShadow(!1);
            } catch (e) {
              console.warn("Не удалось отключить тень главного окна:", e);
            }
            (K(F),
              Y().alwaysOnTop &&
                (e.setAlwaysOnTop(!0, "screen-saver", 1),
                e.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 })),
              e.setFullScreenable(!1),
              it().attachMainWindow(e),
              "darwin" === process.platform &&
                "darwin" === process.platform &&
                "function" == typeof e.setWindowButtonVisibility &&
                e.setWindowButtonVisibility(!1),
              e.setContentProtection(Q),
              (he = e),
              e.webContents.session.setPermissionRequestHandler((e, t, n) => {
                if (["media", "display-capture", "mediaKeySystem"].includes(t))
                  return (console.log(`Предоставляем разрешение: ${t}`), n(!0));
                n(!1);
              }),
              e.loadURL(
                `file://${require("path").resolve(__dirname, "..", "renderer", "main_window", "index.html")}`,
              ),
              e.on("ready-to-show", () => {
                if ((console.log("[PERF] ready-to-show: " + (Date.now() - a) + "ms"), e)) {
                  D();
                  try {
                    e.showInactive();
                  } catch {
                    e.show();
                  }
                  (x(e),
                    ut.setMainWindow(e),
                    ut.setUpdateNotificationWindow(dt),
                    ut.init(),
                    be &&
                      !be.isDestroyed() &&
                      (be.show(), console.log("📋 Окно истории сессий показано после mainWindow")));
                }
              }),
              e.on("moved", () => {
                tt(e);
              }));
            let i = "";
            return (
              e.webContents.on("did-navigate-in-page", () => {
                if (!e || e.isDestroyed()) return;
                const t = e.webContents.getURL(),
                  n = i.includes("#/live-widget"),
                  r = t.includes("#/live-widget");
                (n &&
                  !r &&
                  (console.log(`🔄 Переход с live-widget страницы: ${i} → ${t}`),
                  console.log("🖱️ Принудительно отключаем click-through при уходе с live-widget"),
                  s(e, !1)),
                  "darwin" === process.platform &&
                    "darwin" === process.platform &&
                    "function" == typeof e.setWindowButtonVisibility &&
                    e.setWindowButtonVisibility(!1),
                  (i = t));
              }),
              e.on("closed", () => {
                ((he = null), pt());
              }),
              e
            );
          };
          async function mt(t) {
            console.log("Processing auth callback URL:", t.substring(0, 100) + "...");
            try {
              let n = t;
              if (t.includes("%"))
                try {
                  n = decodeURIComponent(t);
                } catch (e) {
                  console.warn("Failed to decode URL, using original:", e);
                }
              console.log("Processed URL length:", n.length);
              const r = new URL(n);
              if (
                (console.log("Parsed URL object:", {
                  protocol: r.protocol,
                  host: r.host,
                  pathname: r.pathname,
                  searchParamsCount: Array.from(r.searchParams.keys()).length,
                }),
                "/callback" === r.pathname)
              ) {
                const t = r.searchParams.get("token"),
                  n = r.searchParams.get("error"),
                  i = r.searchParams.get("user_id"),
                  o = r.searchParams.get("user_email"),
                  s = "true" === r.searchParams.get("is_new");
                (console.log("Auth callback params:", {
                  hasToken: !!t,
                  tokenLength: t ? t.length : 0,
                  hasError: !!n,
                  hasUserId: !!i,
                  hasUserEmail: !!o,
                  isNewUser: s,
                  error: n,
                }),
                  n
                    ? ((te = { success: !1, error: decodeURIComponent(n) }),
                      console.log("Auth error received:", te.error))
                    : t && i && o
                      ? ((te = {
                          success: !0,
                          user: { id: i, email: decodeURIComponent(o), isNew: s },
                          token: { token: t },
                        }),
                        console.log("Auth success received for user:", decodeURIComponent(o)),
                        (q = t),
                        Je.set("authToken", t),
                        se.setAuthToken(t),
                        K("widget"),
                        setImmediate(() => {
                          X().catch((e) => console.error("Device info sync start failed:", e));
                        }))
                      : ((te = { success: !1, error: "Получены неполные данные авторизации" }),
                        console.log("Incomplete auth data received")),
                  e &&
                    (e.isMinimized() && e.restore(), console.log("Main window shown (no focus)")));
              } else console.log("URL is not an auth callback, pathname:", r.pathname);
            } catch (e) {
              (console.error("Error parsing auth callback URL:", e),
                (te = {
                  success: !1,
                  error:
                    "Ошибка при обработке ответа авторизации: " +
                    (e instanceof Error ? e.message : String(e)),
                }));
            }
          }
          (c.app.whenReady().then(async () => {
            if (
              (console.log("[PERF] app.ready: " + (Date.now() - a) + "ms"),
              "win32" === process.platform)
            )
              try {
                const e = Je.get("disguise.presetId", "default"),
                  t = Je.get("disguise.version", "");
                if (e && "default" !== e) {
                  const { checkAndReapplyAfterUpdate: r } = n(38741),
                    i = "custom" === e ? Je.get("disguise.custom") : void 0,
                    o = await r(e, t, i);
                  if (o)
                    return (
                      Je.set("disguise.version", c.app.getVersion()),
                      Je.set("disguise.originalExePath", o.originalExePath),
                      Je.set("disguise.newExePath", o.newExePath),
                      (0, h.updateShortcutForDisguise)(o.originalExePath, o.newExePath),
                      c.app.releaseSingleInstanceLock(),
                      await new Promise((e) => setTimeout(e, 300)),
                      (0, l.spawn)(o.newExePath, [], {
                        detached: !0,
                        stdio: "ignore",
                        env: { ..."MISSING_ENV_VAR" },
                      }).unref(),
                      void c.app.exit(0)
                    );
                }
              } catch (e) {
                console.error("[processDisguise] Startup error:", e);
              }
            if ("win32" === process.platform)
              try {
                const e = c.app.getPath("exe"),
                  t = e.substring(0, e.lastIndexOf("\\")) || e.substring(0, e.lastIndexOf("/")),
                  n = b.default
                    .readdirSync(t)
                    .filter((e) => e.startsWith("app_old_") && e.endsWith(".exe"));
                for (const e of n)
                  try {
                    (b.default.unlinkSync((0, y.join)(t, e)),
                      console.log("[Disguise] Cleaned up temp file:", e));
                  } catch (t) {
                    console.warn("[Disguise] Could not delete temp file:", e, t);
                  }
              } catch (e) {
                console.warn("[Disguise] Cleanup failed:", e);
              }
            if ("win32" === process.platform) {
              const e = Je.get("disguise.presetId", "default");
              if (e && "default" !== e) {
                let t = null;
                if ("custom" === e) {
                  const e = Je.get("disguise.custom");
                  t = e?.name || null;
                } else {
                  const { getPresetById: r } = n(38741),
                    i = r(e);
                  t = i?.name || null;
                }
                t &&
                  ((B.title = t),
                  (G.title = t),
                  console.log("[Disguise] Window title overridden to:", t));
              }
            }
            if (((0, _.updateConsoleWrapper)(t.sendLogToRenderer), "darwin" === process.platform)) {
              const { systemPreferences: e, desktopCapturer: t } = n(84157),
                r = e.getMediaAccessStatus("screen");
              (console.log(`Screen Recording access status: ${r}`),
                "granted" !== r
                  ? (console.log("Screen Recording permission not granted yet"),
                    t
                      .getSources({ types: ["screen"] })
                      .then((e) => {
                        e.length > 0
                          ? console.log(`✅ Screen sources available: ${e.length}`)
                          : console.log(
                              "⚠️ No screen sources available - permission may be needed",
                            );
                      })
                      .catch((e) => {
                        console.log(`⚠️ Screen capture check failed: ${e.message}`);
                      }))
                  : console.log("✅ Screen Recording permission already granted"));
            }
            let r = ["https://api.deskhint.com"];
            try {
              if (d.variantConfig) {
                const e = d.variantConfig.grpcServerAddress
                    ? String(d.variantConfig.grpcServerAddress).replace(/:.*/, "")
                    : null,
                  t = d.variantConfig.updateServerUrl
                    ? String(d.variantConfig.updateServerUrl).replace(/\/$/, "")
                    : null;
                r = [t || "https://api.deskhint.com", e ? `https://${e}` : void 0].filter(Boolean);
              }
            } catch {}
            try {
              (c.session.defaultSession.webRequest.onHeadersReceived((e, t) => {
                const n = e.responseHeaders || {};
                (delete n["content-security-policy"],
                  delete n["Content-Security-Policy"],
                  delete n["content-security-policy-report-only"],
                  delete n["Content-Security-Policy-Report-Only"]);
                const i = [
                  "default-src 'self'",
                  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://browser.sentry-cdn.com",
                  "style-src 'self' 'unsafe-inline'",
                  `connect-src 'self' ${r.join(" ")} http://89.23.119.218:9000 http://localhost:9090 https://featureassets.org https://statsigapi.net https://prodregistryv2.org https://api.statsig.com https://*.ingest.sentry.io`,
                  "img-src 'self' data: https: blob:",
                  "media-src 'self' data: blob:",
                  "font-src 'self' data:",
                  "frame-src 'none'",
                  "worker-src 'self' blob:",
                  "child-src 'self' blob:",
                  "script-src-elem 'self' 'unsafe-inline' https://browser.sentry-cdn.com",
                  "object-src 'none'",
                  "base-uri 'self'",
                ].join("; ");
                ((n["Content-Security-Policy"] = [i]), t({ responseHeaders: n }));
              }),
                console.log("✅ CSP настройки обновлены для Sentry Session Replay"));
            } catch (e) {
              console.error("❌ Ошибка настройки CSP:", e);
            }
            if (
              (console.log("Registering protocol for platform:", process.platform),
              console.log("Process info:", {
                execPath: process.execPath,
                argv0: process.argv0,
                argv1: process.argv[1],
                defaultApp: process.defaultApp,
                nodeEnv: "production",
              }),
              "win32" === process.platform)
            ) {
              let e = !1;
              if (process.defaultApp) {
                console.log("Registering protocol for development mode");
                try {
                  e = c.app.setAsDefaultProtocolClient("ai-assistant", process.execPath, [
                    process.argv[1],
                  ]);
                } catch (e) {
                  console.error("Failed to register protocol in dev mode:", e);
                }
              }
              if (!e) {
                console.log("Registering protocol for production mode");
                try {
                  e = c.app.setAsDefaultProtocolClient("ai-assistant");
                } catch (e) {
                  console.error("Failed to register protocol in production mode:", e);
                }
              }
              console.log("Protocol registration result:", e);
            } else c.app.setAsDefaultProtocolClient("ai-assistant");
            (console.log("Protocol ai-assistant:// registered for platform:", process.platform),
              ht(),
              console.log("[PERF] window.created: " + (Date.now() - a) + "ms"),
              ie()
                .then((e) => {
                  if (
                    (console.log("[PERF] grpc.probeCompleted: " + (Date.now() - a) + "ms"),
                    e.address !== d.default.grpc.serverAddress)
                  ) {
                    console.log(
                      `[gRPC] Probe нашёл лучший адрес: ${e.address} (был: ${d.default.grpc.serverAddress})`,
                    );
                    const t = se;
                    ((d.default.grpc.serverAddress = e.address), (se = oe()));
                    const n = t.getAuthToken();
                    (n && se.setAuthToken(n), t.close());
                  } else
                    console.log(
                      `[gRPC] Probe подтвердил текущий адрес: ${e.address} (verified: ${e.verified})`,
                    );
                })
                .catch((e) => {
                  console.warn("[gRPC] Фоновая проверка адресов завершилась с ошибкой:", e);
                }));
            const i = "darwin" === process.platform ? "Cmd+Shift+H" : "Ctrl+Shift+H";
            try {
              c.globalShortcut.register(i, () => {
                if (
                  (console.log("Глобальная горячая клавиша нажата, показываем главное окно"),
                  e && !e.isDestroyed())
                ) {
                  e.isMinimized() && e.restore();
                  try {
                    e.showInactive();
                  } catch {
                    e.show();
                  }
                }
              })
                ? console.log(`✅ Глобальная горячая клавиша ${i} зарегистрирована для показа окна`)
                : console.warn(`⚠️ Не удалось зарегистрировать глобальную горячую клавишу ${i}`);
            } catch (e) {
              console.error("❌ Ошибка при регистрации глобальной горячей клавиши:", e);
            }
            if (
              (c.app.on("activate", () => {
                0 === c.BrowserWindow.getAllWindows().length && ht();
              }),
              "win32" === process.platform)
            ) {
              (console.log("Process arguments:", process.argv.length, "total args"),
                process.argv.forEach((e, t) => {
                  e.startsWith("ai-assistant://") &&
                    console.log(`Found callback URL at arg[${t}]:`, e.substring(0, 100) + "...");
                }));
              const e = process.argv.find((e) => e.startsWith("ai-assistant://"));
              e &&
                (console.log("Found auth callback URL in process args, length:", e.length),
                setTimeout(() => mt(e), 1e3));
            }
            let o = null;
            (o && clearInterval(o),
              (o = setInterval(() => {
                if (q)
                  try {
                    const t = n(57343).decode(q);
                    if (t && t.exp) {
                      const n = Math.floor(Date.now() / 1e3),
                        r = t.exp - n,
                        i = Math.floor(r / 60);
                      (console.log(`[TOKEN-CHECK] Токен истекает через ${i} минут`),
                        i <= 5 && i > 0
                          ? (console.log(
                              `[TOKEN-CHECK] Токен истекает через ${i} минут, уведомляем renderer`,
                            ),
                            e &&
                              !e.isDestroyed() &&
                              (0, E.safeSenderSend)(e, "token-expiring-soon", {
                                minutesUntilExpiry: i,
                                expiresAt: new Date(1e3 * t.exp).toISOString(),
                              }))
                          : r <= 0 &&
                            (console.log(
                              "[TOKEN-CHECK] Токен истек, очищаем токен в main процессе",
                            ),
                            (q = null),
                            K("auth"),
                            vt(),
                            e && !e.isDestroyed() && (0, E.safeSenderSend)(e, "token-expired")));
                    }
                  } catch (e) {
                    console.error("[TOKEN-CHECK] Ошибка при проверке токена:", e);
                  }
              }, 3e5)),
              console.log("[TOKEN-CHECK] Мониторинг токена запущен"));
          }),
            c.app.on("open-url", (e, t) => {
              (e.preventDefault(), console.log("Received open-url event:", t), mt(t));
            }),
            c.app.on("second-instance", (t, n) => {
              const r = new Date().toISOString();
              (console.log(`🔄 [${r}] Обнаружена попытка запуска второго экземпляра`),
                console.log(
                  `📋 Аргументы командной строки (${n.length} элементов): ${n.slice(0, 3).join(" ")}${n.length > 3 ? "..." : ""}`,
                ),
                (function () {
                  try {
                    if (c.Notification.isSupported()) {
                      const e = new c.Notification({
                        title: `${d.default.app.productName} is already running`,
                        body: "Application is already running. Switching to active window.",
                        icon: (0, y.join)(__dirname, "../../assets/icon.png"),
                        silent: !1,
                        urgency: "normal",
                      });
                      (e.show(),
                        e.on("click", () => {
                          lt();
                        }),
                        console.log("📢 Показано уведомление о запущенном экземпляре"));
                    } else console.log("⚠️ Системные уведомления не поддерживаются");
                  } catch (e) {
                    console.log(`❌ Ошибка при показе уведомления: ${e}`);
                  }
                })(),
                lt());
              const i = n.find((e) => e.startsWith("ai-assistant://"));
              (i &&
                (console.log(
                  `🔗 Найден URL обратного вызова авторизации в аргументах второго экземпляра: ${i.substring(0, 50)}...`,
                ),
                mt(i)),
                console.log(
                  `📊 Главное окно состояние: видимо=${e?.isVisible()}, минимизировано=${e?.isMinimized()}, сфокусировано=${e?.isFocused()}`,
                ));
            }),
            c.app.on("window-all-closed", () => {
              "darwin" !== process.platform && c.app.quit();
            }),
            c.ipcMain.handle("config:getVariant", async () =>
              d.variantConfig
                ? d.variantConfig
                : {
                    variant: "shadowhint",
                    productName: "ShadowHint",
                    telegramChannel: "https://t.me/shadowhint",
                    telegramSupport: "https://t.me/shadowhintsupport",
                    showTelegramChannel: !0,
                  },
            ),
            c.ipcMain.handle("auth:login", async (e, t) => {
              try {
                return (
                  console.log("Login attempt with:", t),
                  "test" === t.username && "password" === t.password
                    ? { success: !0, user: { id: 1, name: "Test User" } }
                    : { success: !1, error: "Неверные учетные данные" }
                );
              } catch (e) {
                return (
                  console.error("Login error:", e),
                  { success: !1, error: "Ошибка аутентификации" }
                );
              }
            }),
            c.ipcMain.handle("auth:startEmailLogin", async (e, t) => {
              try {
                console.log("Starting email login for:", t);
                const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                console.log("User timezone:", e);
                const n = await se.startEmailLogin(t, e);
                return (console.log("StartEmailLogin result:", n), { success: !0 });
              } catch (e) {
                return (
                  console.error("Email login error:", e),
                  (0, v.isAuthError)(e) && ft(e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка отправки кода на email",
                  }
                );
              }
            }),
            c.ipcMain.handle("auth:confirmEmailLogin", async (e, t, n) => {
              try {
                console.log("Confirming email login for:", t, "with code:", n);
                const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                console.log("User timezone:", e);
                const r = await se.confirmEmailLogin(t, n, e);
                r.token &&
                  ((q = r.token),
                  Je.set("authToken", r.token),
                  se.setAuthToken(r.token),
                  K("widget"),
                  vt());
                const i = {
                  success: !0,
                  user: {
                    id: r.user?.id || "",
                    email: r.user?.email || "",
                    createdAt: r.user?.createdAt,
                  },
                  token: { token: r.token || "", expiresAt: void 0 },
                };
                return (
                  r.user &&
                    (0, _.setSentryUser)({
                      id: r.user.id || "",
                      email: r.user.email || "",
                      name:
                        `${r.user.firstName || ""} ${r.user.lastName || ""}`.trim() ||
                        r.user.email ||
                        "",
                    }),
                  (0, _.trackSentryEvent)("auth_success", {
                    method: "email",
                    userId: r.user?.id || "",
                  }),
                  setImmediate(() => {
                    X().catch((e) => console.error("Device info sync start failed:", e));
                  }),
                  i
                );
              } catch (e) {
                return (
                  console.error("Email confirmation error:", e),
                  (0, _.captureSentryError)(e instanceof Error ? e : new Error(String(e)), {
                    context: "auth:confirmEmailLogin",
                    email: t,
                  }),
                  (0, v.isAuthError)(e) && ft(e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка проверки кода" }
                );
              }
            }),
            c.ipcMain.handle("auth:startEmailRegistration", async (e, t) => {
              try {
                console.log("Starting email registration for:", t);
                const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                console.log("User timezone:", e);
                const n = await se.startEmailRegistration(t, "", "");
                return (console.log("StartEmailRegistration result:", n), { success: !0 });
              } catch (e) {
                return (
                  console.error("Email registration error:", e),
                  (0, v.isAuthError)(e) && ft(e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка отправки кода на email",
                  }
                );
              }
            }),
            c.ipcMain.handle("auth:confirmEmailRegistration", async (e, t, n, r) => {
              try {
                console.log("Confirming email registration for:", t, "with code:", n);
                const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
                console.log("User timezone:", e);
                const r = await se.confirmEmailRegistration(t, n, e);
                r.token &&
                  ((q = r.token),
                  Je.set("authToken", r.token),
                  se.setAuthToken(r.token),
                  K("widget"),
                  vt());
                const i = {
                  success: !0,
                  user: {
                    id: r.user?.id || "",
                    email: r.user?.email || "",
                    createdAt: r.user?.createdAt,
                  },
                  token: { token: r.token || "", expiresAt: void 0 },
                };
                return (
                  r.user &&
                    (0, _.setSentryUser)({
                      id: r.user.id || "",
                      email: r.user.email || "",
                      name:
                        `${r.user.firstName || ""} ${r.user.lastName || ""}`.trim() ||
                        r.user.email ||
                        "",
                    }),
                  (0, _.trackSentryEvent)("auth_success", {
                    method: "email_registration",
                    userId: r.user?.id || "",
                  }),
                  setImmediate(() => {
                    X().catch((e) => console.error("Device info sync start failed:", e));
                  }),
                  i
                );
              } catch (e) {
                return (
                  console.error("Registration confirmation error:", e),
                  (0, _.captureSentryError)(e instanceof Error ? e : new Error(String(e)), {
                    context: "auth:confirmEmailRegistration",
                    email: t,
                  }),
                  (0, v.isAuthError)(e) && ft(e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка проверки кода" }
                );
              }
            }),
            c.ipcMain.handle("window:close", () => {
              (console.log("🔴 Window close requested via navbar button"), pt(), c.app.quit());
            }),
            c.ipcMain.handle("window:minimize", () => {
              e && e.minimize();
            }),
            c.ipcMain.handle("window:maximize", () => {
              e && (e.isMaximized() ? e.unmaximize() : e.maximize());
            }),
            c.ipcMain.handle("window:hide", () => {
              (e && e.hide(), rt());
            }),
            c.ipcMain.handle("window:show", () => {
              if (e)
                try {
                  e.showInactive();
                } catch {
                  e.show();
                }
            }),
            c.ipcMain.handle("window:showToolbarSettings", () => nt(e)),
            c.ipcMain.handle("window:hideToolbarSettings", () => rt()),
            c.ipcMain.handle("session:list", async (e, t = 1, n = 10) => {
              try {
                if ((console.log("Fetching sessions for page:", t, "pageSize:", n), !q))
                  return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                const e = await se.listSessions(t, n);
                return { success: !0, sessions: e.sessions || [], total: e.total || 0 };
              } catch (e) {
                return (
                  console.error("Error fetching sessions:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка получения списка сессий",
                  }
                );
              }
            }),
            c.ipcMain.handle("session:searchSessions", async (e, t, n, r) => {
              try {
                if ((console.log("Searching sessions with query:", t), !q))
                  return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                const e = await se.searchSessions(t, n, r);
                return { success: !0, results: e.results || [], total: e.total || 0 };
              } catch (e) {
                return (
                  console.error("Error searching sessions:", e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка поиска" }
                );
              }
            }),
            c.ipcMain.handle("session:getDialogHistory", async (e, t) => {
              try {
                return (
                  console.log("Fetching dialog history for session:", t),
                  q
                    ? (se.setAuthToken(q),
                      { success: !0, entries: (await se.getDialogHistory(t)).entries || [] })
                    : { success: !1, error: "Токен авторизации не найден" }
                );
              } catch (e) {
                return (
                  console.error("Error fetching dialog history:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка получения истории диалога",
                  }
                );
              }
            }));
          const gt = () => {
            console.log("📋 Создаём окно истории сессий...");
            const e = new c.BrowserWindow({
              width: 1150,
              height: 720,
              minWidth: 600,
              minHeight: 400,
              frame: !1,
              transparent: !1,
              backgroundColor: "#121212",
              show: !1,
              resizable: !0,
              webPreferences: {
                preload: require("path").resolve(
                  __dirname,
                  "../renderer",
                  "main_window",
                  "preload.js",
                ),
                nodeIntegration: !0,
                contextIsolation: !1,
                webSecurity: !1,
                backgroundThrottling: !1,
              },
              autoHideMenuBar: !0,
            });
            return (
              e.loadURL(
                `file://${require("path").resolve(__dirname, "..", "renderer", "main_window", "index.html")}#/sessions`,
              ),
              e.once("ready-to-show", () => {
                console.log("📋 Окно истории сессий готово к показу");
              }),
              e.on("closed", () => {
                ((be = null), console.log("📋 Окно истории сессий закрыто"));
              }),
              x(e),
              e.setContentProtection(Q),
              e
            );
          };
          (c.ipcMain.handle("sessions:show", (e) => {
            try {
              return (
                be && !be.isDestroyed() ? (be.show(), be.focus()) : (be = gt()),
                { success: !0 }
              );
            } catch (e) {
              return (
                console.error("Error showing sessions window:", e),
                { success: !1, error: String(e) }
              );
            }
          }),
            c.ipcMain.handle("sessions:hide", () => {
              try {
                return (be && !be.isDestroyed() && be.hide(), { success: !0 });
              } catch (e) {
                return (
                  console.error("Error hiding sessions window:", e),
                  { success: !1, error: String(e) }
                );
              }
            }),
            c.ipcMain.handle("sessions:toggle", () => {
              try {
                return (
                  be && !be.isDestroyed()
                    ? be.isVisible()
                      ? be.hide()
                      : (be.show(), be.focus())
                    : (be = gt()),
                  { success: !0 }
                );
              } catch (e) {
                return (
                  console.error("Error toggling sessions window:", e),
                  { success: !1, error: String(e) }
                );
              }
            }),
            c.ipcMain.handle("sessions:isVisible", () => be && !be.isDestroyed() && be.isVisible()),
            c.ipcMain.handle("sessions:minimize", () => {
              try {
                return (be && !be.isDestroyed() && be.minimize(), { success: !0 });
              } catch (e) {
                return (
                  console.error("Error minimizing sessions window:", e),
                  { success: !1, error: String(e) }
                );
              }
            }),
            c.ipcMain.handle("sessions:maximize", () => {
              try {
                return (
                  be && !be.isDestroyed() && (be.isMaximized() ? be.unmaximize() : be.maximize()),
                  { success: !0 }
                );
              } catch (e) {
                return (
                  console.error("Error maximizing sessions window:", e),
                  { success: !1, error: String(e) }
                );
              }
            }),
            c.ipcMain.handle("auth:logout", () => {
              console.log("🚪 Начало процесса выхода из аккаунта...");
              const t = q;
              ((q = null),
                Je.set("authToken", null),
                se.setAuthToken(""),
                console.log(`🔑 Токен очищен: "${t}" → "${q}"`),
                K("auth"),
                z && (console.log("⏹️ Stopping device info sync..."), clearInterval(z), (z = null)),
                (J = !1));
              const n = Y();
              if (
                (console.log(
                  `📊 Новый overlay режим: alwaysOnTop=${n.alwaysOnTop}, skipTaskbar=${n.skipTaskbar}`,
                ),
                vt(),
                e && !e.isDestroyed())
              ) {
                console.log("👁️ Принудительно показываем главное окно...");
                try {
                  e.showInactive();
                } catch {
                  e.show();
                }
                (e.isMinimized() &&
                  (e.restore(),
                  console.log("📤 Окно восстановлено из минимизированного состояния")),
                  e.focus(),
                  D(),
                  (0, E.safeSenderSend)(e, "auth:error", {
                    error: "User logged out",
                    timestamp: new Date().toISOString(),
                  }),
                  setTimeout(() => {
                    if (e && !e.isDestroyed()) {
                      const t = e.isVisible(),
                        r = e.isAlwaysOnTop(),
                        i = n.skipTaskbar;
                      console.log(
                        `✅ Состояние окна после выхода: visible=${t}, alwaysOnTop=${r}, expectedSkipTaskbar=${i}`,
                      );
                    }
                  }, 100));
              } else console.log("❌ Главное окно недоступно или уничтожено");
              return (
                je &&
                  !je.isDestroyed() &&
                  (console.log("🪟 Закрываем окно настроек..."), je.close()),
                Ve &&
                  !Ve.isDestroyed() &&
                  (console.log("🪟 Закрываем окно настроек тулбара..."), Ve.close()),
                ge &&
                  !ge.isDestroyed() &&
                  (console.log("🪟 Закрываем окно настроек горячих клавиш..."), ge.close()),
                be && !be.isDestroyed() && (console.log("🪟 Закрываем окно сессий..."), be.close()),
                ot((e) => {
                  e && !e.isDestroyed() && e.close();
                }),
                console.log("🪟 Все дополнительные окна закрыты"),
                (ee = !1),
                (te = null),
                console.log("🧹 Состояние браузерной авторизации сброшено"),
                console.log("✅ Процесс выхода из аккаунта завершен"),
                { success: !0 }
              );
            }),
            c.ipcMain.handle("settings:saveDeviceSettings", (e, t) => {
              try {
                (console.log("Saving device settings:", t),
                  (ae = { ...t }),
                  Je.set("deviceSettings", ae));
                for (const e of c.BrowserWindow.getAllWindows())
                  try {
                    e && !e.isDestroyed() && (0, E.safeSenderSend)(e, "settings:device-updated", t);
                  } catch (e) {
                    console.warn("Не удалось отправить settings:device-updated окну:", e);
                  }
                return { success: !0 };
              } catch (e) {
                return (
                  console.error("Error saving device settings:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка сохранения настроек устройств",
                  }
                );
              }
            }),
            c.ipcMain.handle("settings:getDeviceSettings", () => {
              try {
                return (console.log("Getting device settings"), { success: !0, settings: ae });
              } catch (e) {
                return (
                  console.error("Error getting device settings:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка получения настроек устройств",
                  }
                );
              }
            }),
            c.ipcMain.handle("settings:getPreferredLanguage", () => {
              try {
                let e = Je.get("preferredLanguage", "ru");
                return (
                  Je.get("preferredLanguageMigratedToRu", !1) ||
                    "en" !== e ||
                    ((e = "ru"),
                    Je.set("preferredLanguage", e),
                    Je.set("preferredLanguageMigratedToRu", !0)),
                  { success: !0, language: e }
                );
              } catch (e) {
                return (
                  console.error("Error getting preferred language:", e),
                  { success: !1, error: "Failed to get preferred language" }
                );
              }
            }),
            c.ipcMain.handle("settings:setPreferredLanguage", (e, t) => {
              try {
                return "string" == typeof t && t.trim().length > 0
                  ? (Je.set("preferredLanguage", t), { success: !0 })
                  : { success: !1, error: "Invalid language" };
              } catch (e) {
                return (
                  console.error("Error setting preferred language:", e),
                  { success: !1, error: "Failed to set preferred language" }
                );
              }
            }),
            c.ipcMain.handle("speech:getAvailableVoices", () => {
              try {
                return (console.log("Getting available voices"), { success: !0, voices: le });
              } catch (e) {
                return (
                  console.error("Error getting available voices:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка получения списка голосов",
                  }
                );
              }
            }),
            c.ipcMain.handle("speech:synthesizeText", async (t, n, r, i = !1, o = "") => {
              try {
                if (
                  (console.log(
                    `Synthesizing text with voice ${r}, sessionId: ${o}, isTestMode: ${i}: "${n.substring(0, 30)}${n.length > 30 ? "..." : ""}"${i ? " (test mode)" : ""}`,
                  ),
                  !i && !q)
                )
                  return (
                    console.warn("Token required for non-test synthesis"),
                    { success: !1, error: "Для синтеза речи требуется авторизация" }
                  );
                !i && q && se.setAuthToken(q);
                const s = (0, p.v4)();
                let a = o || "";
                if ((a || (a = i ? "test-session" : ""), !a))
                  try {
                    const e = await t.sender.executeJavaScript('window.currentSessionId || ""');
                    e &&
                      "string" == typeof e &&
                      e.length > 0 &&
                      ((a = e), console.log(`Using sessionId from renderer: ${a}`));
                  } catch (e) {
                    console.error("Error getting sessionId from renderer:", e);
                  }
                if (!a && !i)
                  return { success: !1, error: "session_id is required for speech synthesis" };
                console.log(`Using sessionId for synthesis: "${a}"`);
                const c = se.synthesizeText(n, r, a);
                return (
                  ce.set(s, c),
                  c.on("data", (t) => {
                    e &&
                      (0, E.safeSenderSend)(e, `speech:audioData:${s}`, {
                        success: !0,
                        audioData: t.getAudioData ? t.getAudioData() : null,
                        isLast: !!t.getIsLast && t.getIsLast(),
                      });
                  }),
                  c.on("error", (t) => {
                    (console.error(`Error synthesizing speech: ${t.message}`),
                      e &&
                        (0, E.safeSenderSend)(e, `speech:audioData:${s}`, {
                          success: !1,
                          error: t.message,
                        }),
                      ce.delete(s));
                  }),
                  c.on("end", () => {
                    (console.log(`Speech synthesis completed for request ${s}`), ce.delete(s));
                  }),
                  { success: !0, requestId: s }
                );
              } catch (e) {
                return (
                  console.error("Error initiating speech synthesis:", e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка синтеза речи" }
                );
              }
            }),
            c.ipcMain.handle("speech:cancelSynthesis", (e, t) => {
              try {
                console.log(`Cancelling speech synthesis for request ${t}`);
                const e = ce.get(t);
                return (e && (e.cancel(), ce.delete(t)), { success: !0 });
              } catch (e) {
                return (console.error("Error cancelling speech synthesis:", e), { success: !1 });
              }
            }),
            c.ipcMain.handle("code:execute", async (e, t) => {
              try {
                console.log("Executing code via OneCompiler API:", t);
                const e = await se.executeCode(t);
                return (console.log("Code execution response:", e), { success: !0, data: e });
              } catch (e) {
                return (
                  console.error("Error executing code:", e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка выполнения кода" }
                );
              }
            }),
            c.ipcMain.handle("permissions:checkScreenAccess", async () => {
              try {
                if ((console.log("Checking screen access permissions"), !e))
                  return { success: !1, permitted: !1, error: "Главное окно не инициализировано" };
                if ("darwin" === process.platform) {
                  const { systemPreferences: e, shell: t } = n(84157),
                    r = e.getMediaAccessStatus("screen");
                  if (
                    (console.log("Current screen recording permission status:", r), "granted" === r)
                  )
                    return {
                      success: !0,
                      permitted: !0,
                      message: "Доступ к записи экрана предоставлен",
                    };
                  if ("denied" === r)
                    return (
                      console.log(
                        "Screen recording permission was denied, opening System Preferences...",
                      ),
                      t.openExternal(
                        "x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture",
                      ),
                      {
                        success: !0,
                        permitted: !1,
                        message: "Запрашиваем доступ к голосу интервьюера и экрану",
                      }
                    );
                  console.log(
                    "Permission not determined, attempting to trigger permission dialog...",
                  );
                }
                try {
                  console.log("Attempting to get screen sources...");
                  const t = await c.desktopCapturer.getSources({
                    types: ["screen"],
                    thumbnailSize: { width: 150, height: 150 },
                  });
                  if (
                    (console.log(`Found ${t.length} screen sources`),
                    t.length > 0 &&
                      "darwin" === process.platform &&
                      e &&
                      !e.isDestroyed() &&
                      e.webContents.send("trigger-screen-permission-request", t[0].id),
                    t.length > 0)
                  )
                    return {
                      success: !0,
                      permitted: !0,
                      message:
                        "darwin" === process.platform
                          ? "Доступ к записи экрана предоставлен"
                          : "Доступ к экрану разрешен",
                    };
                  if ("darwin" === process.platform) {
                    const { shell: e } = n(84157);
                    return (
                      console.log("No screen sources found, opening System Preferences..."),
                      e.openExternal(
                        "x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture",
                      ),
                      {
                        success: !0,
                        permitted: !1,
                        message:
                          'Необходимо предоставить разрешение на "Запись экрана" в Системных настройках > Защита и безопасность > Конфиденциальность',
                      }
                    );
                  }
                  return {
                    success: !0,
                    permitted: !1,
                    message: "Не найдено доступных экранов для захвата",
                  };
                } catch (e) {
                  if (
                    (console.error("Error testing screen access:", e),
                    "darwin" === process.platform)
                  ) {
                    const { shell: e } = n(84157);
                    return (
                      console.log("Error getting sources, opening System Preferences..."),
                      e.openExternal(
                        "x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture",
                      ),
                      {
                        success: !0,
                        permitted: !1,
                        message:
                          'Необходимо предоставить разрешение на "Запись экрана" в Системных настройках > Защита и безопасность > Конфиденциальность',
                      }
                    );
                  }
                  return { success: !0, permitted: !1, message: "Ошибка доступа к экрану" };
                }
              } catch (e) {
                return (
                  console.error("Error checking screen access:", e),
                  {
                    success: !1,
                    permitted: !1,
                    error: e instanceof Error ? e.message : "Ошибка при проверке доступа к экрану",
                  }
                );
              }
            }),
            c.ipcMain.handle("context:setAuthToken", async (e, t) => {
              try {
                return (
                  console.log("Setting auth token for context operations"),
                  t
                    ? ((q = t), K("widget"), se.setAuthToken(t), vt(), await X(), { success: !0 })
                    : { success: !1, error: "Не предоставлен токен авторизации" }
                );
              } catch (e) {
                return (
                  console.error("Error setting auth token:", e),
                  {
                    success: !1,
                    error:
                      e instanceof Error ? e.message : "Ошибка при установке токена авторизации",
                  }
                );
              }
            }),
            c.ipcMain.handle("context:getUserContext", async () => {
              try {
                if ((console.log("Getting user context"), !q))
                  return (
                    console.warn("Token required for getting user context"),
                    { success: !1, error: "Для получения контекста требуется авторизация" }
                  );
                se.setAuthToken(q);
                const e = await se.getUserContext();
                return {
                  success: !0,
                  context: { text: e.text || "", fileId: e.fileId || "", fileName: "" },
                };
              } catch (e) {
                return (
                  console.error("Error getting user context:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка при получении контекста",
                  }
                );
              }
            }),
            c.ipcMain.handle("context:setUserContext", async (e, t) => {
              try {
                if (
                  (console.log(
                    "Setting user context:",
                    t.substring(0, 30) + (t.length > 30 ? "..." : ""),
                  ),
                  !q)
                )
                  return (
                    console.warn("Token required for setting user context"),
                    { success: !1, error: "Для установки контекста требуется авторизация" }
                  );
                se.setAuthToken(q);
                const e = await se.setUserContext(t);
                return {
                  success: !0,
                  context: { text: e.text || "", fileId: e.fileId || "", fileName: "" },
                };
              } catch (e) {
                return (
                  console.error("Error setting user context:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка при установке контекста",
                  }
                );
              }
            }),
            c.ipcMain.handle("context:deleteUserContext", async () => {
              try {
                return (
                  console.log("Deleting user context"),
                  q
                    ? (se.setAuthToken(q), await se.deleteUserContext(), { success: !0 })
                    : (console.warn("Token required for deleting user context"),
                      { success: !1, error: "Для удаления контекста требуется авторизация" })
                );
              } catch (e) {
                return (
                  console.error("Error deleting user context:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка при удалении контекста",
                  }
                );
              }
            }),
            c.ipcMain.handle("context:uploadFile", async (e, t, n) => {
              try {
                if ((console.log(`Uploading file ${t}, size: ${n.length} bytes`), !q))
                  return (
                    console.warn("Token required for uploading files"),
                    { success: !1, error: "Для загрузки файла требуется авторизация" }
                  );
                se.setAuthToken(q);
                const e = new Uint8Array(n);
                return { success: !0, fileId: (await se.uploadFile(t, e)).fileId || "" };
              } catch (e) {
                return (
                  console.error("Error uploading file:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка при загрузке файла",
                  }
                );
              }
            }),
            c.ipcMain.handle("screen:captureRegion", async () => {
              try {
                console.log("Capturing screen region");
                const e = { suggestion: [], toolbar: !1, notification: !1 };
                Ee && (Ne = !0);
                try {
                  if (
                    ((e.suggestion = me.map(({ window: e }) => {
                      const t = !(!e || e.isDestroyed() || !e.isVisible());
                      return (t && e.hide(), t);
                    })),
                    Ve &&
                      !Ve.isDestroyed() &&
                      ((e.toolbar = Ve.isVisible()), e.toolbar && Ve.hide()),
                    Se)
                  ) {
                    const t = Se.getWindow?.();
                    t &&
                      !t.isDestroyed() &&
                      ((e.notification = t.isVisible()), e.notification && t.hide());
                  }
                } catch {}
                const t = () => {
                    try {
                      if (
                        (me.forEach(({ window: t }, n) => {
                          if (e.suggestion[n] && t && !t.isDestroyed())
                            try {
                              t.showInactive();
                            } catch {
                              t.show();
                            }
                        }),
                        e.toolbar && Ve && !Ve.isDestroyed())
                      )
                        try {
                          Ve.showInactive();
                        } catch {
                          Ve.show();
                        }
                      if (e.notification && Se) {
                        const e = Se.getWindow?.();
                        if (e && !e.isDestroyed())
                          try {
                            e.showInactive();
                          } catch {
                            e.show();
                          }
                      }
                    } catch {}
                    Ne = !1;
                  },
                  n = c.screen.getCursorScreenPoint(),
                  r = c.screen.getDisplayNearestPoint(n),
                  { x: i, y: o, width: s, height: a } = r.bounds;
                Oe = new c.BrowserWindow({
                  x: i,
                  y: o,
                  width: s,
                  height: a,
                  transparent: !0,
                  frame: !1,
                  alwaysOnTop: !0,
                  skipTaskbar: !0,
                  movable: !1,
                  resizable: !1,
                  hasShadow: !1,
                  focusable: !1,
                  show: !1,
                  acceptFirstMouse: !0,
                  ...("darwin" === process.platform ? { type: "panel" } : {}),
                  webPreferences: {
                    nodeIntegration: !1,
                    contextIsolation: !0,
                    preload: require("path").resolve(
                      __dirname,
                      "../renderer",
                      "main_window",
                      "preload.js",
                    ),
                  },
                });
                const l = Oe;
                l.setContentProtection(!0);
                try {
                  "darwin" === process.platform &&
                    (l.setAlwaysOnTop(!0, "screen-saver"),
                    l.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
                    l.setFullScreenable(!1));
                } catch {}
                l.once("ready-to-show", () => {
                  try {
                    l.showInactive();
                  } catch {
                    l.show();
                  }
                  Fe && Fe.registerWindow("region", l);
                });
                const u =
                  "<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody { margin: 0; padding: 0; background: rgba(0, 0, 0, 0.2); user-select: none; overflow: hidden; cursor: default; }\n#selection { position: absolute; border: none; background: rgba(187, 134, 252, 0.15); display: none; }\n#hint { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0, 0, 0, 0.8); color: white; padding: 12px 24px; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; z-index: 10000; }\n#preview-container { position: fixed; bottom: 150px; right: 20px; background: rgba(0, 0, 0, 0.9); padding: 8px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); display: none; z-index: 10000; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); }\n#preview-info { color: white; font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; margin-bottom: 6px; text-align: center; }\n/* Не меняем курсор при наведении/перетаскивании */\n#selection, html, body, * { cursor: default !important; }\n</style>\n</head>\n<body>\n<div id=\"hint\">Нажмите и перетащите для выбора области • ESC для отмены</div>\n<div id=\"selection\"></div>\n<div id=\"preview-container\">\n\t<div id=\"preview-info\">Выделенная область</div>\n\t<img id=\"preview-image\" src=\"\" alt=\"Preview\" style=\"max-width: 200px; max-height: 150px; display: none; border-radius: 4px;\">\n</div>\n<script>\nlet isSelecting = false;\nlet startX, startY;\nconst selection = document.getElementById('selection');\nconst previewContainer = document.getElementById('preview-container');\nconst previewInfo = document.getElementById('preview-info');\nconst previewImage = document.getElementById('preview-image');\n\n// Функция для установки превью изображения\nwindow.setPreviewImage = function(dataUrl) {\n\tconst img = document.getElementById('preview-image');\n\tif (img) {\n\t\timg.src = dataUrl;\n\t\timg.style.display = 'block';\n\t\tconsole.log('Preview image set via window function, URL length:', dataUrl.length);\n\t} else {\n\t\tconsole.log('Preview image element not found in setPreviewImage');\n\t}\n}\n\ndocument.addEventListener('mousedown', (e) => {\n\tif (e.button === 0) {\n\t\tisSelecting = true;\n\t\tstartX = e.clientX;\n\t\tstartY = e.clientY;\n\t\tselection.style.display = 'block';\n\t\tselection.style.left = startX + 'px';\n\t\tselection.style.top = startY + 'px';\n\t\tselection.style.width = '0px';\n\t\tselection.style.height = '0px';\n\t\tpreviewContainer.style.display = 'none';\n\t}\n});\n\ndocument.addEventListener('mousemove', (e) => {\n\tif (isSelecting) {\n\t\tconst currentX = e.clientX;\n\t\tconst currentY = e.clientY;\n\t\tconst width = Math.abs(currentX - startX);\n\t\tconst height = Math.abs(currentY - startY);\n\t\tselection.style.left = Math.min(currentX, startX) + 'px';\n\t\tselection.style.top = Math.min(currentY, startY) + 'px';\n\t\tselection.style.width = width + 'px';\n\t\tselection.style.height = height + 'px';\n\t}\n});\n\ndocument.addEventListener('mouseup', async (e) => {\n\tif (isSelecting && e.button === 0) {\n\t\tisSelecting = false;\n\t\tconst endX = e.clientX;\n\t\tconst endY = e.clientY;\n\t\tconst bounds = {\n\t\t\tx: Math.min(startX, endX),\n\t\t\ty: Math.min(startY, endY),\n\t\t\twidth: Math.abs(endX - startX),\n\t\t\theight: Math.abs(endY - startY)\n\t\t};\n\t\t\n\t\tif (bounds.width > 10 && bounds.height > 10) {\n\t\t\t// Показываем превью контейнер\n\t\t\tpreviewInfo.textContent = 'Выделенная область';\n\t\t\tpreviewContainer.style.display = 'block';\n\t\t\t\n\t\t\t// Показываем изображение элемент (будет пустым пока не загрузится превью)\n\t\t\tif (previewImage) {\n\t\t\t\tpreviewImage.style.display = 'block';\n\t\t\t\tconsole.log('Preview image element shown, waiting for data...');\n\t\t\t}\n\t\t\t\n\t\t\t// Отправляем границы для создания превью\n\t\t\tconsole.log('PREVIEW_REQUEST:' + JSON.stringify(bounds));\n\t\t\t\n\t\t\t// Ждем немного и отправляем финальные границы\n\t\t\tsetTimeout(() => {\n\t\t\t\tconsole.log('REGION:' + JSON.stringify(bounds));\n\t\t\t}, 1500);\n\t\t} else {\n\t\t\twindow.close();\n\t\t}\n\t}\n});\n\ndocument.addEventListener('keydown', (e) => {\n\tif (e.key === 'Escape') {\n\t\twindow.close();\n\t}\n});\n\n<\/script>\n</body>\n</html>";
                await l.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(u)}`);
                let d = !1;
                try {
                  c.globalShortcut.isRegistered("Escape") ||
                    (d = c.globalShortcut.register("Escape", () => {
                      try {
                        l.close();
                      } catch {}
                    }));
                } catch {}
                const p = () => {
                  try {
                    d && (c.globalShortcut.unregister("Escape"), (d = !1));
                  } catch {}
                };
                return new Promise((e) => {
                  let n = !1;
                  (l.on("closed", () => {
                    ((Oe = null),
                      Fe && Fe.unregisterWindow("region"),
                      p(),
                      n || (t(), e({ success: !1, error: "Выбор области отменен" })));
                  }),
                    l.webContents.on("console-message", async (i, o, s) => {
                      if (s.startsWith("PREVIEW_REQUEST:"))
                        try {
                          const e = JSON.parse(s.substring(16)),
                            t = r,
                            n = t.scaleFactor,
                            i = await c.desktopCapturer.getSources({
                              types: ["screen"],
                              thumbnailSize: {
                                width: Math.round(t.bounds.width * n),
                                height: Math.round(t.bounds.height * n),
                              },
                            });
                          let o =
                            i.find((e) => String(e.display_id || "").trim() === String(t.id)) ||
                            i.find((e) => e.id && e.id.includes(String(t.id))) ||
                            i[0];
                          if (o) {
                            const r = o.thumbnail;
                            if (r.isEmpty())
                              return void console.error(
                                "[RegionCapture] Thumbnail is empty - cannot capture preview",
                              );
                            const i = Math.max(0, (t.workArea?.y ?? 0) - (t.bounds?.y ?? 0)),
                              s = r
                                .crop({
                                  x: Math.round(e.x * n),
                                  y: Math.round((e.y + i) * n),
                                  width: Math.round(e.width * n),
                                  height: Math.round(e.height * n),
                                })
                                .toDataURL();
                            (console.log("Preview data URL length:", s.length),
                              l.webContents.executeJavaScript(
                                `\n\t\t\t\t\t\t\t\t\tif (window.setPreviewImage) {\n\t\t\t\t\t\t\t\t\t\twindow.setPreviewImage(${JSON.stringify(s)});\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\tconsole.log('setPreviewImage function not found');\n\t\t\t\t\t\t\t\t\t\t// Fallback: попробуем установить напрямую\n\t\t\t\t\t\t\t\t\t\tconst previewImage = document.getElementById('preview-image');\n\t\t\t\t\t\t\t\t\t\tif (previewImage) {\n\t\t\t\t\t\t\t\t\t\t\tpreviewImage.src = ${JSON.stringify(s)};\n\t\t\t\t\t\t\t\t\t\t\tpreviewImage.style.display = 'block';\n\t\t\t\t\t\t\t\t\t\t\tconsole.log('Preview image set directly');\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t`,
                              ));
                          }
                        } catch (e) {
                          console.error("Error creating preview:", e);
                        }
                      else if (s.startsWith("REGION:"))
                        try {
                          const i = JSON.parse(s.substring(7));
                          ((n = !0),
                            p(),
                            l.close(),
                            (async function (e, t) {
                              try {
                                const n = t ?? c.screen.getPrimaryDisplay(),
                                  r = n.scaleFactor,
                                  i = await c.desktopCapturer.getSources({
                                    types: ["screen"],
                                    thumbnailSize: {
                                      width: Math.round(n.bounds.width * r),
                                      height: Math.round(n.bounds.height * r),
                                    },
                                  });
                                if (0 === i.length)
                                  return {
                                    success: !1,
                                    error: "Не удалось получить скриншот экрана",
                                  };
                                const o = (
                                  i.find(
                                    (e) => String(e.display_id || "").trim() === String(n.id),
                                  ) ||
                                  i.find((e) => e.id && e.id.includes(String(n.id))) ||
                                  i[0]
                                ).thumbnail;
                                if (o.isEmpty())
                                  return {
                                    success: !1,
                                    error:
                                      "darwin" === process.platform
                                        ? "Не удалось получить изображение экрана. Попробуйте перезапустить приложение."
                                        : "Не удалось получить изображение экрана.",
                                  };
                                const s = Math.max(0, (n.workArea?.y ?? 0) - (n.bounds?.y ?? 0)),
                                  a = o.crop({
                                    x: Math.round(e.x * r),
                                    y: Math.round((e.y + s) * r),
                                    width: Math.round(e.width * r),
                                    height: Math.round(e.height * r),
                                  });
                                return {
                                  success: !0,
                                  dataUrl: a.toDataURL(),
                                  screens: [
                                    {
                                      id: "region",
                                      name: "Selected Region",
                                      thumbnail: a.toDataURL(),
                                    },
                                  ],
                                };
                              } catch (e) {
                                return (
                                  console.error("Error capturing region screenshot:", e),
                                  {
                                    success: !1,
                                    error:
                                      e instanceof Error
                                        ? e.message
                                        : "Ошибка при захвате области экрана",
                                  }
                                );
                              }
                            })(i, r).then((n) => {
                              (t(), e(n));
                            }));
                        } catch (n) {
                          (console.error("Error parsing region bounds:", n),
                            t(),
                            e({ success: !1, error: "Ошибка при обработке выбранной области" }));
                        }
                    }));
                });
              } catch (e) {
                return (
                  (Ne = !1),
                  console.error("Error capturing screen region:", e),
                  {
                    success: !1,
                    error:
                      e instanceof Error
                        ? e.message
                        : "Неизвестная ошибка при захвате области экрана",
                  }
                );
              }
            }),
            c.ipcMain.handle("screen:captureScreenshot", async () => {
              try {
                (console.log("Capturing screenshot of all screens"),
                  "darwin" === process.platform &&
                    console.log("Running on macOS - screen recording permission may be required"));
                const e = await c.desktopCapturer.getSources({
                  types: ["screen"],
                  thumbnailSize: { width: 1920, height: 1080 },
                });
                if (0 === e.length)
                  return {
                    success: !1,
                    error:
                      "darwin" === process.platform
                        ? 'Не удалось найти доступные экраны. На macOS необходимо предоставить разрешение на "Запись экрана" в Настройках системы → Конфиденциальность и безопасность → Запись экрана. После предоставления разрешения перезапустите приложение.'
                        : "Не удалось найти доступные экраны. Убедитесь, что приложению предоставлены необходимые разрешения.",
                  };
                const t = e
                  .map((e, t) => {
                    let n = e.name || `Screen ${t + 1}`;
                    (n.toLowerCase().includes("entire screen") ||
                      n.toLowerCase().includes("весь экран")) &&
                      (n = "Entire Screen");
                    const r = e.thumbnail.getSize();
                    if (
                      (console.log(
                        `[Screenshot] Source "${e.name}" thumbnail size: ${r.width}x${r.height}, isEmpty: ${e.thumbnail.isEmpty()}`,
                      ),
                      e.thumbnail.isEmpty())
                    )
                      return (
                        console.error(`[Screenshot] Thumbnail is empty for source: ${e.name}`),
                        { id: e.id, name: n, thumbnail: "" }
                      );
                    const i = e.thumbnail.toDataURL();
                    return (
                      (!i || i.length < 100) &&
                        (console.error("Invalid thumbnail URL for source:", e.name),
                        console.error("Thumbnail URL length:", i?.length)),
                      { id: e.id, name: n, thumbnail: i }
                    );
                  })
                  .filter((e) => e.thumbnail && e.thumbnail.length > 100);
                if (0 === t.length)
                  return {
                    success: !1,
                    error:
                      "darwin" === process.platform
                        ? 'Не удалось получить изображение экрана. Попробуйте перезапустить приложение. Если проблема повторяется, проверьте разрешение "Запись экрана" в Настройках системы.'
                        : "Не удалось получить изображение экрана. Попробуйте перезапустить приложение.",
                  };
                const { screenSelectionSettings: r } = n(65264),
                  i = r.getSelectedDisplayId(),
                  o = i ? t.filter((e) => e.id === i) : t,
                  s = o.length > 0 ? o : t;
                return (
                  console.log(
                    `Successfully captured ${s.length} screen(s), selectedDisplayId: ${i}`,
                  ),
                  { success: !0, dataUrl: s[0]?.thumbnail, screens: s }
                );
              } catch (e) {
                return (
                  console.error("Error capturing screenshot:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка при захвате скриншота",
                  }
                );
              }
            }),
            c.ipcMain.handle("window:setTransparent", (t, n) => {
              if (!e) return;
              const { opacity: r = 0.7, backgroundColor: i = "#00000000" } = n ?? {};
              if (e.isDestroyed()) return;
              const o = Math.min(Math.max(r, 0), 1),
                a = /^#[0-9A-Fa-f]{8}$/.test(i) ? i : "#00000000";
              (($ = {
                backgroundColor: e.getBackgroundColor(),
                width: e.getSize()[0],
                height: e.getSize()[1],
                transparent: !0,
              }),
                e.setOpacity(o),
                e.setBackgroundColor(a),
                s(e, o < 1 && o <= 0.15, { forward: !0 }),
                Y().alwaysOnTop &&
                  (e.setAlwaysOnTop(!0, "screen-saver", 1),
                  e.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 })),
                e.setFullScreenable(!1),
                e.setResizable(!0),
                "darwin" === process.platform &&
                  "function" == typeof e.setWindowButtonVisibility &&
                  e.setWindowButtonVisibility(!1));
            }),
            c.ipcMain.handle("window:resetTransparent", () => {
              if (e && !e.isDestroyed()) {
                (e.setOpacity(1), e.setBackgroundColor("#00000000"), s(e, !1));
                try {
                  e.setHasShadow(!1);
                } catch (e) {
                  console.warn("Не удалось отключить тень при resetTransparent:", e);
                }
                "darwin" === process.platform &&
                  "function" == typeof e.setWindowButtonVisibility &&
                  e.setWindowButtonVisibility(!1);
              }
            }),
            c.ipcMain.handle("window:setLayout", (t, n) =>
              !e || e.isDestroyed()
                ? { success: !1, error: "Window not found" }
                : (K(n), { success: !0 }),
            ),
            c.ipcMain.handle("window:setHeightByElement", (t, n, r) => {
              if (e) {
                const t = e.getBounds(),
                  i = t.x,
                  s = t.y,
                  a = "string" == typeof r && r.includes("premium"),
                  l = "auth" === F ? G : B,
                  u = "widget" === F,
                  d = c.screen.getCursorScreenPoint(),
                  p = c.screen.getDisplayNearestPoint(d),
                  f = p?.workArea ?? p.bounds,
                  h = l.padding?.width ?? 48,
                  m = l.padding?.height ?? 80,
                  g = Math.max(l.minWidth, f.width - h),
                  S = Math.max(l.minHeight, f.height - m),
                  y = "auth" === F ? l.width : a ? l.maxWidth : l.width,
                  b = Math.min(Math.max(y, l.minWidth), l.maxWidth, g),
                  v = n,
                  _ = Math.min(l.minWidth, b),
                  T = Math.max(_, Math.min(l.maxWidth, f.width)),
                  E = Math.min(Math.max(240, _), T),
                  I = u ? v : Math.min(Math.max(l.minHeight, v), S),
                  A = u ? v : Math.max(I, Math.min(l.maxHeight, S));
                if ("darwin" === process.platform) {
                  const t = e.isResizable();
                  (t ||
                    (e.setResizable(!0),
                    console.log("Временно включено изменение размера для macOS")),
                    o(e, { x: i, y: s, width: b, height: v }, !0, "applyMainWindowLayout-macOS"),
                    u
                      ? (e.setMinimumSize(b, v), e.setMaximumSize(b, v), e.setResizable(!1))
                      : l.resizable
                        ? (e.setMinimumSize(E, I), e.setMaximumSize(T, A))
                        : (e.setMinimumSize(b, v), e.setMaximumSize(b, v)),
                    setTimeout(() => {
                      if (e && !e.isDestroyed()) {
                        const [n, r] = e.getSize();
                        l.resizable || t || e.setResizable(!1);
                      }
                    }, 100));
                } else
                  (o(e, { x: i, y: s, width: b, height: v }, !0, "applyMainWindowLayout-others"),
                    e.setResizable(!0),
                    u
                      ? (e.setMinimumSize(b, v), e.setMaximumSize(b, v), e.setResizable(!1))
                      : (e.setMinimumSize(E, I),
                        e.setMaximumSize(T, A),
                        e.setResizable(l.resizable)));
                ((V = b), (j = v), (H = u ? v : I), (W = u ? v : A));
              } else console.error("mainWindow не найдено для изменения высоты");
            }),
            c.ipcMain.handle("window:setIgnoreMouseEvents", (t, n, r) =>
              e
                ? e.webContents.getURL().includes("#/live-widget")
                  ? (e.setIgnoreMouseEvents(n, r), { success: !0 })
                  : n
                    ? (console.log("🚫 Click-through разрешен только на странице LiveWidget"),
                      { success: !0, ignored: !0 })
                    : (console.log(
                        "🔄 Принудительное отключение click-through на НЕ live-widget странице",
                      ),
                      e.setIgnoreMouseEvents(!1),
                      { success: !0 })
                : (console.error("mainWindow не найдено для setIgnoreMouseEvents"),
                  { success: !1, error: "Окно не найдено" }),
            ),
            c.ipcMain.handle("window:setClickableRegion", (t, n) => {
              if (e) {
                const t = e.webContents.getURL().includes("#/live-widget");
                return (
                  n
                    ? (console.log("Установка области для кликов:", n),
                      t
                        ? s(e, !0, { forward: !0 })
                        : (console.log(
                            "🚫 Click-through разрешен только на странице LiveWidget, принудительно отключаем",
                          ),
                          e.setIgnoreMouseEvents(!1)))
                    : (console.log("Сброс областей для кликов"), s(e, !1)),
                  { success: !0 }
                );
              }
              return (
                console.error("mainWindow не найдено для setClickableRegion"),
                { success: !1, error: "Окно не найдено" }
              );
            }),
            c.ipcMain.handle("window:toggleContentProtection", () => {
              try {
                ((Q = !Q),
                  console.log("🛡️ Content protection " + (Q ? "enabled" : "disabled")),
                  e && !e.isDestroyed() && e.setContentProtection(Q),
                  ot((e) => {
                    e.setContentProtection(Q);
                  }),
                  ye && !ye.isDestroyed() && ye.setContentProtection(Q),
                  Ve && !Ve.isDestroyed() && Ve.setContentProtection(Q),
                  ge && !ge.isDestroyed() && ge.setContentProtection(Q),
                  be && !be.isDestroyed() && be.setContentProtection(Q),
                  _e && !_e.isDestroyed() && _e.setContentProtection(Q),
                  Te && !Te.isDestroyed() && Te.setContentProtection(Q),
                  je && !je.isDestroyed() && je.setContentProtection(Q));
                const t = dt.getWindow();
                return (
                  t && !t.isDestroyed() && t.setContentProtection(Q),
                  (He = { ...He, contentProtectionEnabled: Q }),
                  et(),
                  e &&
                    !e.isDestroyed() &&
                    (0, E.safeSenderSend)(e, "toolbar-settings:update-state", He),
                  {
                    success: !0,
                    enabled: Q,
                    message: Q
                      ? "Приложение скрыто от записи экрана"
                      : "Приложение теперь видно при записи экрана",
                  }
                );
              } catch (e) {
                return (
                  console.error("Ошибка при переключении защиты контента:", e),
                  { success: !1, error: String(e) }
                );
              }
            }),
            c.ipcMain.handle("permissions:checkMicrophoneAccess", async () => {
              try {
                if (
                  (console.log("Checking microphone access permissions"),
                  "darwin" === process.platform)
                ) {
                  const { systemPreferences: e, shell: t } = n(84157),
                    r = e.getMediaAccessStatus("microphone");
                  if ((console.log("Current microphone permission status:", r), "granted" === r))
                    return {
                      success: !0,
                      permitted: !0,
                      message: "Доступ к микрофону предоставлен",
                    };
                  if ("denied" === r)
                    return (
                      console.log(
                        "Microphone permission was denied, opening System Preferences...",
                      ),
                      t.openExternal(
                        "x-apple.systempreferences:com.apple.preference.security?Privacy_Microphone",
                      ),
                      {
                        success: !0,
                        permitted: !1,
                        message:
                          'Необходимо предоставить разрешение на "Микрофон" в Системных настройках > Защита и безопасность > Конфиденциальность',
                      }
                    );
                  console.log(
                    "Microphone permission not determined, attempting to trigger permission dialog...",
                  );
                  try {
                    const { desktopCapturer: r } = n(84157);
                    return (
                      await r.getSources({ types: ["screen"] }),
                      "granted" === e.getMediaAccessStatus("microphone")
                        ? { success: !0, permitted: !0, message: "Доступ к микрофону предоставлен" }
                        : (t.openExternal(
                            "x-apple.systempreferences:com.apple.preference.security?Privacy_Microphone",
                          ),
                          {
                            success: !0,
                            permitted: !1,
                            message:
                              'Необходимо предоставить разрешение на "Микрофон" в Системных настройках > Защита и безопасность > Конфиденциальность',
                          })
                    );
                  } catch (e) {
                    return (
                      console.error("Error checking microphone access:", e),
                      t.openExternal(
                        "x-apple.systempreferences:com.apple.preference.security?Privacy_Microphone",
                      ),
                      {
                        success: !0,
                        permitted: !1,
                        message:
                          'Необходимо предоставить разрешение на "Микрофон" в Системных настройках',
                      }
                    );
                  }
                }
                return { success: !0, permitted: !0, message: "Доступ к микрофону доступен" };
              } catch (e) {
                return (
                  console.error("Error checking microphone access:", e),
                  {
                    success: !1,
                    permitted: !1,
                    error:
                      e instanceof Error ? e.message : "Ошибка при проверке доступа к микрофону",
                  }
                );
              }
            }),
            c.ipcMain.handle("session:createSession", async (e, t, n = !1) => {
              try {
                if (
                  (console.log("Creating new session with title:", t, "autoDetectionEnabled:", n),
                  (Z = n),
                  console.log(
                    `💾 [MAIN] Настройка автораспознавания инициализирована в main процессе: ${Z}`,
                  ),
                  kt(),
                  !q)
                )
                  return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                try {
                  const e = await se.createSession(t, n);
                  console.log("📦 [MAIN] Session created, full session:", JSON.stringify(e));
                  try {
                    await Ke(e, !1);
                  } catch (e) {
                    console.error("[VideoRecorder] Failed to start recording:", e);
                  }
                  return (0, v.createSuccessResponse)(e, { session: e });
                } catch (e) {
                  return (0, v.handleError)(e, "Ошибка создания сессии", {
                    context: "session:createSession",
                    showTechnicalDetails: !1,
                  });
                }
              } catch (e) {
                return (
                  console.error("Error creating session:", e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка создания сессии" }
                );
              }
            }),
            c.ipcMain.handle("session:completeSession", async () => {
              try {
                console.log("Completing session");
                try {
                  e && !e.isDestroyed() && (await Fe.stopRecording(e));
                } catch (e) {
                  console.error("[VideoRecorder] Failed to stop recording:", e);
                }
                return (
                  kt(),
                  q
                    ? (se.setAuthToken(q),
                      await se.completeSession(),
                      { success: !0, message: "Сессия успешно завершена" })
                    : { success: !1, error: "Токен авторизации не найден" }
                );
              } catch (e) {
                return (
                  console.log("CompleteSession returned error, but treating as success:", e),
                  { success: !0, message: "Сессия успешно завершена (ошибка проигнорирована)" }
                );
              }
            }),
            c.ipcMain.handle("session:getSession", async (e, t) => {
              try {
                if ((console.log("Getting session:", t), !q))
                  return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                const e = await se.getSession(t);
                return (
                  console.log("📦 [MAIN] getSession response:", JSON.stringify(e)),
                  {
                    success: !0,
                    session: { id: e.id, userId: e.userId, title: e.title, status: e.status },
                  }
                );
              } catch (e) {
                return (
                  console.error("Error getting session:", e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка получения сессии" }
                );
              }
            }),
            c.ipcMain.handle("session:resumeSession", async (e, t) => {
              try {
                if ((console.log("Resuming session:", t), !q))
                  return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                const e = await se.resumeSession(t);
                console.log("[MAIN] resumeSession response:", JSON.stringify(e));
                try {
                  await Ke(e, !0);
                } catch (e) {
                  console.error("[VideoRecorder] Failed to start recording on resume:", e);
                }
                return {
                  success: !0,
                  session: { id: e.id, userId: e.userId, title: e.title, status: e.status },
                };
              } catch (e) {
                return (
                  console.error("Error resuming session:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка возобновления сессии",
                  }
                );
              }
            }),
            c.ipcMain.handle(
              "smartModel:set",
              (e, t) => (
                console.log(`[smartModel:set] Broadcasting value: ${t}`),
                c.BrowserWindow.getAllWindows().forEach((e) => {
                  e.isDestroyed() || e.webContents.send("smartModel:changed", t);
                }),
                { success: !0 }
              ),
            ),
            c.ipcMain.handle("smartModel:getDefault", () => Je.get("defaultSmartModel", !1)),
            c.ipcMain.handle(
              "ragEnabled:set",
              (e, t) => (
                Je.set("ragEnabled", !!t),
                c.BrowserWindow.getAllWindows().forEach((e) => {
                  e.isDestroyed() || e.webContents.send("ragEnabled:changed", t);
                }),
                { success: !0 }
              ),
            ),
            c.ipcMain.handle("ragEnabled:get", () => Je.get("ragEnabled", !1)),
            c.ipcMain.handle(
              "autoDetection:set",
              (e, t) => (
                console.log(`[autoDetection:set] Broadcasting value: ${t}`),
                (Z = t),
                (He = { ...He, autoDetectionEnabled: t }),
                c.BrowserWindow.getAllWindows().forEach((e) => {
                  e.isDestroyed() || e.webContents.send("autoDetection:changed", t);
                }),
                et(),
                { success: !0 }
              ),
            ),
            c.ipcMain.handle("session:sendManualMessage", async (t, n, r, i, o, s) => {
              const a = Date.now();
              let c = !0;
              const l = Je.get("ragEnabled", !1);
              try {
                if (
                  (console.log(
                    `Sending manual message: "${r.substring(0, 30)}${r.length > 30 ? "..." : ""}"`,
                  ),
                  console.log(
                    `[DEBUG] useSmartModel value: ${i}, type: ${typeof i}, ragEnabled: ${l}`,
                  ),
                  !q)
                )
                  return { success: !1, error: "Токен авторизации не найден" };
                if (!n)
                  return (
                    console.error("Error: sessionId is empty or not provided"),
                    { success: !1, error: "Идентификатор сессии не указан или недействителен" }
                  );
                (se.setAuthToken(q), Mt(n));
                const u = se.sendManualMessage(n, r, i, o || !1, void 0, l);
                let d = "",
                  p = 0;
                return (
                  s && Pt.set(s, { stream: u, requestId: s, type: "manual", sessionId: n }),
                  u.on("data", (n) => {
                    p++;
                    const r = n.content || "";
                    (n.sessionId, n.isDone, n.error);
                    try {
                      "function" == typeof n.toJSON && console.log("toJSON() result:", n.toJSON());
                    } catch (e) {
                      console.log("Error inspecting response:", e);
                    }
                    ((d += r),
                      c &&
                        r.length > 0 &&
                        ((c = !1), console.log(`First chunk received in ${Date.now() - a}ms`)),
                      s &&
                        ((0, E.safeSenderSend)(t, "session:manualMessageChunk", {
                          requestId: s,
                          chunk: r,
                        }),
                        e &&
                          !e.isDestroyed() &&
                          t.sender !== e.webContents &&
                          (0, E.safeSenderSend)(e, "session:manualMessageChunk", {
                            requestId: s,
                            chunk: r,
                          })));
                  }),
                  u.on("error", (n) => {
                    (console.error("Error in message stream:", n),
                      s &&
                        (Pt.delete(s),
                        (0, E.safeSenderSend)(t, "session:manualMessageEnd", {
                          requestId: s,
                          error: n.message || "Ошибка при получении ответа",
                          fullMessage: d,
                        }),
                        e &&
                          !e.isDestroyed() &&
                          t.sender !== e.webContents &&
                          (0, E.safeSenderSend)(e, "session:manualMessageEnd", {
                            requestId: s,
                            error: n.message || "Ошибка при получении ответа",
                            fullMessage: d,
                          })));
                  }),
                  u.on("end", () => {
                    (console.log(
                      `Manual message sent in ${Date.now() - a}ms, received ${p} chunks, total length: ${d.length} chars`,
                    ),
                      s &&
                        (Pt.delete(s),
                        (0, E.safeSenderSend)(t, "session:manualMessageEnd", {
                          requestId: s,
                          fullMessage: d,
                        }),
                        e &&
                          !e.isDestroyed() &&
                          t.sender !== e.webContents &&
                          (0, E.safeSenderSend)(e, "session:manualMessageEnd", {
                            requestId: s,
                            fullMessage: d,
                          })));
                  }),
                  { success: !0 }
                );
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка отправки сообщения", {
                  context: "session:sendManualMessage",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("session:sendImage", async (t, n, r, i, o) => {
              const s = Je.get("ragEnabled", !1);
              try {
                if ((console.log(`Sending image in session ${n}, ragEnabled: ${s}`), !q))
                  return { success: !1, error: "Токен авторизации не найден" };
                if (!n)
                  return (
                    console.error("Error: sessionId is empty or not provided for image sending"),
                    { success: !1, error: "Идентификатор сессии не указан или недействителен" }
                  );
                (console.log("Image data URL preview:", r.substring(0, 100)),
                  console.log("Image data URL length:", r.length));
                const a = r.split(",")[1];
                if (!a)
                  return (
                    console.error("Failed to extract base64 data from image URL"),
                    console.error("Image data URL starts with:", r.substring(0, 50)),
                    {
                      success: !1,
                      error:
                        "Некорректный формат изображения. Убедитесь, что скриншот был успешно захвачен.",
                    }
                  );
                const c = Buffer.from(a, "base64"),
                  l = r.match(/^data:image\/(\w+);base64,/);
                let u = l ? l[1].toLowerCase() : "png";
                ("jpg" === u && (u = "jpeg"),
                  ["png", "jpeg"].includes(u) ||
                    (console.warn(`Unsupported image format: ${u}, falling back to png`),
                    (u = "png")),
                  console.log("Normalized image format:", u),
                  se.setAuthToken(q),
                  Mt(n));
                const d = se.sendImage(n, c, u, i, void 0, s);
                let p = "";
                return (
                  o && Pt.set(o, { stream: d, requestId: o, type: "image", sessionId: n }),
                  d.on("data", (n) => {
                    const r = n.content || "";
                    ((p += r),
                      o &&
                        ((0, E.safeSenderSend)(t, "session:imageMessageChunk", {
                          requestId: o,
                          chunk: r,
                        }),
                        e &&
                          !e.isDestroyed() &&
                          t.sender !== e.webContents &&
                          (0, E.safeSenderSend)(e, "session:imageMessageChunk", {
                            requestId: o,
                            chunk: r,
                          })));
                  }),
                  d.on("error", (n) => {
                    (console.error("Error in image stream:", n),
                      o &&
                        (Pt.delete(o),
                        (0, E.safeSenderSend)(t, "session:imageMessageEnd", {
                          requestId: o,
                          error: n.message || "Ошибка при получении ответа на изображение",
                          fullMessage: p,
                        }),
                        e &&
                          !e.isDestroyed() &&
                          t.sender !== e.webContents &&
                          (0, E.safeSenderSend)(e, "session:imageMessageEnd", {
                            requestId: o,
                            error: n.message || "Ошибка при получении ответа на изображение",
                            fullMessage: p,
                          })));
                  }),
                  d.on("end", () => {
                    o &&
                      (Pt.delete(o),
                      (0, E.safeSenderSend)(t, "session:imageMessageEnd", {
                        requestId: o,
                        fullMessage: p,
                      }),
                      e &&
                        !e.isDestroyed() &&
                        t.sender !== e.webContents &&
                        (0, E.safeSenderSend)(e, "session:imageMessageEnd", {
                          requestId: o,
                          fullMessage: p,
                        }));
                  }),
                  { success: !0 }
                );
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка отправки изображения", {
                  context: "session:sendImage",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("session:sendSessionChatMessage", async (e, t, n, r, i) => {
              try {
                if (
                  (console.log(
                    `Sending session chat message: "${n.substring(0, 30)}${n.length > 30 ? "..." : ""}"`,
                  ),
                  !q)
                )
                  return { success: !1, error: "Токен авторизации не найден" };
                if (!t) return { success: !1, error: "Идентификатор сессии не указан" };
                se.setAuthToken(q);
                const o = se.sendSessionChatMessage(t, n, r);
                return (
                  o.on("data", (t) => {
                    (t.content &&
                      e.sender.send("session-chat:chunk", {
                        sessionId: t.sessionId,
                        chunk: t.content,
                        requestId: i,
                      }),
                      t.isDone &&
                        e.sender.send("session-chat:complete", {
                          sessionId: t.sessionId,
                          requestId: i,
                        }),
                      t.error &&
                        e.sender.send("session-chat:error", {
                          sessionId: t.sessionId,
                          error: t.error,
                          requestId: i,
                        }));
                  }),
                  o.on("error", (n) => {
                    (console.error("Session chat stream error:", n),
                      e.sender.send("session-chat:error", {
                        sessionId: t,
                        error: n.message,
                        requestId: i,
                      }));
                  }),
                  o.on("end", () => {
                    console.log("Session chat stream ended");
                  }),
                  { success: !0 }
                );
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка отправки сообщения в чат", {
                  context: "session:sendSessionChatMessage",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("session:getSessionChatHistory", async (e, t) => {
              try {
                return q
                  ? t
                    ? (se.setAuthToken(q),
                      { success: !0, messages: (await se.getSessionChatHistory(t)).messages })
                    : { success: !1, error: "Идентификатор сессии не указан" }
                  : { success: !1, error: "Токен авторизации не найден" };
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка получения истории чата", {
                  context: "session:getSessionChatHistory",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("session:generateSummary", async (e, t, n) => {
              try {
                if ((console.log(`Generating session summary for session: ${t}`), !q))
                  return { success: !1, error: "Токен авторизации не найден" };
                if (!t) return { success: !1, error: "Идентификатор сессии не указан" };
                se.setAuthToken(q);
                const r = se.generateSessionSummary(t);
                return (
                  r.on("data", (t) => {
                    (t.content &&
                      e.sender.send("session-summary:chunk", {
                        sessionId: t.sessionId,
                        chunk: t.content,
                        requestId: n,
                      }),
                      t.isDone &&
                        e.sender.send("session-summary:complete", {
                          sessionId: t.sessionId,
                          requestId: n,
                        }),
                      t.error &&
                        e.sender.send("session-summary:error", {
                          sessionId: t.sessionId,
                          error: t.error,
                          requestId: n,
                        }));
                  }),
                  r.on("error", (r) => {
                    (console.error("Session summary stream error:", r),
                      e.sender.send("session-summary:error", {
                        sessionId: t,
                        error: r.message,
                        requestId: n,
                      }));
                  }),
                  r.on("end", () => {
                    console.log("Session summary stream ended");
                  }),
                  { success: !0 }
                );
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка генерации анализа сессии", {
                  context: "session:generateSummary",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("session:getSummary", async (e, t) => {
              try {
                if (!q) return { success: !1, error: "Токен авторизации не найден" };
                if (!t) return { success: !1, error: "Идентификатор сессии не указан" };
                se.setAuthToken(q);
                const e = await se.getSessionSummary(t);
                return {
                  success: !0,
                  sessionId: e.sessionId,
                  content: e.content,
                  generatedAt: e.generatedAt || null,
                  exists: e.exists,
                };
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка получения анализа сессии", {
                  context: "session:getSummary",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("session:updateSessionSettings", async (e, t, n) => {
              try {
                if (
                  (console.log(
                    `📞 [MAIN] Получен IPC запрос updateSessionSettings: sessionId=${t}, autoDetectionEnabled=${n}`,
                  ),
                  (Z = n),
                  console.log(
                    `💾 [MAIN] Настройка автораспознавания сохранена в main процессе: ${Z}`,
                  ),
                  !q)
                )
                  return (
                    console.log("❌ [MAIN] Токен авторизации отсутствует"),
                    { success: !1, error: "Токен авторизации не найден" }
                  );
                if (!t)
                  return (
                    console.log("❌ [MAIN] SessionId отсутствует"),
                    { success: !1, error: "Идентификатор сессии не указан" }
                  );
                (console.log(
                  `🌐 [MAIN] Создаем gRPC клиент для отправки на сервер ${d.default.grpc.serverAddress}`,
                ),
                  se.setAuthToken(q),
                  console.log("📡 [MAIN] Отправляем gRPC запрос updateSessionSettings"));
                const e = await se.updateSessionSettings(t, n);
                return (
                  console.log("✅ [MAIN] gRPC ответ получен:", e),
                  console.log("Session settings updated successfully"),
                  { success: !0, message: "Настройки сессии обновлены" }
                );
              } catch (e) {
                return (
                  console.error("❌ [MAIN] Error updating session settings:", e),
                  (0, v.handleError)(e, "Ошибка обновления настроек сессии", {
                    context: "session:updateSessionSettings",
                    showTechnicalDetails: !1,
                  })
                );
              }
            }),
            c.ipcMain.handle("notes:list", async () => {
              try {
                if (!q) return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                return {
                  success: !0,
                  notes: ((await se.listUserNotes()).notes || []).map((e) => ({
                    id: e.id,
                    title: e.title,
                    content: e.content,
                    createdAt: e.createdAt?.seconds ? new Date(1e3 * e.createdAt.seconds) : void 0,
                    updatedAt: e.updatedAt?.seconds ? new Date(1e3 * e.updatedAt.seconds) : void 0,
                  })),
                };
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка получения заметок", {
                  context: "notes:list",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("notes:get", async (e, t) => {
              try {
                if (!q) return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                const e = await se.getUserNote(t);
                return {
                  success: !0,
                  note: {
                    id: e.id,
                    title: e.title,
                    content: e.content,
                    createdAt: e.createdAt?.seconds ? new Date(1e3 * e.createdAt.seconds) : void 0,
                    updatedAt: e.updatedAt?.seconds ? new Date(1e3 * e.updatedAt.seconds) : void 0,
                  },
                };
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка получения заметки", {
                  context: "notes:get",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("notes:create", async (e, t, n) => {
              try {
                if (!q) return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                const e = await se.createUserNote(t, n);
                return {
                  success: !0,
                  note: {
                    id: e.id,
                    title: e.title,
                    content: e.content,
                    createdAt: e.createdAt?.seconds ? new Date(1e3 * e.createdAt.seconds) : void 0,
                    updatedAt: e.updatedAt?.seconds ? new Date(1e3 * e.updatedAt.seconds) : void 0,
                  },
                };
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка создания заметки", {
                  context: "notes:create",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("notes:update", async (e, t, n, r) => {
              try {
                if (!q) return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                const e = await se.updateUserNote(t, n, r);
                return {
                  success: !0,
                  note: {
                    id: e.id,
                    title: e.title,
                    content: e.content,
                    createdAt: e.createdAt?.seconds ? new Date(1e3 * e.createdAt.seconds) : void 0,
                    updatedAt: e.updatedAt?.seconds ? new Date(1e3 * e.updatedAt.seconds) : void 0,
                  },
                };
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка обновления заметки", {
                  context: "notes:update",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("notes:delete", async (e, t) => {
              try {
                return q
                  ? (se.setAuthToken(q), { success: (await se.deleteUserNote(t)).success })
                  : { success: !1, error: "Токен авторизации не найден" };
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка удаления заметки", {
                  context: "notes:delete",
                  showTechnicalDetails: !1,
                });
              }
            }),
            c.ipcMain.handle("notes:search", async (e, t) => {
              try {
                if (!q) return { success: !1, error: "Токен авторизации не найден" };
                se.setAuthToken(q);
                return {
                  success: !0,
                  notes: ((await se.searchUserNotes(t)).notes || []).map((e) => ({
                    id: e.id,
                    title: e.title,
                    content: e.content,
                    createdAt: e.createdAt?.seconds ? new Date(1e3 * e.createdAt.seconds) : void 0,
                    updatedAt: e.updatedAt?.seconds ? new Date(1e3 * e.updatedAt.seconds) : void 0,
                  })),
                };
              } catch (e) {
                return (0, v.handleError)(e, "Ошибка поиска заметок", {
                  context: "notes:search",
                  showTechnicalDetails: !1,
                });
              }
            }));
          let St = null;
          let yt = null;
          (c.ipcMain.handle("auth:checkAuthentication", async () => {
            const e = Date.now();
            console.log("[AUTH-IPC] 🔍 Получен запрос на проверку аутентификации");
            try {
              if (!q) {
                const t = Date.now() - e;
                return (
                  console.log(`[AUTH-IPC] ✗ Токен не найден в main процессе (${t}ms)`),
                  { success: !1, error: "Токен авторизации не найден" }
                );
              }
              if (
                (console.log("[AUTH-IPC] ✓ Токен найден в main процессе"),
                St && Date.now() - St.timestamp < 3e4)
              ) {
                const t = Date.now() - St.timestamp,
                  n = Date.now() - e;
                return (
                  console.log(
                    `[AUTH-IPC] 💾 Используем кэшированный результат (возраст: ${t}ms, ответ за ${n}ms)`,
                  ),
                  St.result
                );
              }
              return yt
                ? (console.log("[AUTH-IPC] ⏳ Переиспользуем текущий запрос (debounce)"), yt)
                : (console.log("[AUTH-IPC] 🌐 Начинаем новую проверку через gRPC..."),
                  (yt = (async () => {
                    const t = Date.now();
                    try {
                      (se.setAuthToken(q),
                        console.log(
                          `[AUTH-IPC] 📡 Отправка getUserInfo на ${d.default.grpc.serverAddress}...`,
                        ));
                      const n = await se.getUserInfo(),
                        r = Date.now() - t,
                        i = Date.now() - e;
                      console.log(
                        `[AUTH-IPC] ✓ getUserInfo успешно выполнен за ${r}ms (общее время: ${i}ms)`,
                      );
                      const o = { success: !0, user: n };
                      return (
                        n?.user?.language && ((He = { ...He, language: n.user.language }), et()),
                        (St = { result: o, timestamp: Date.now() }),
                        console.log("[AUTH-IPC] 💾 Результат сохранен в кэш (TTL: 30000ms)"),
                        o
                      );
                    } catch (n) {
                      const r = Date.now() - t,
                        i = Date.now() - e;
                      return (
                        console.error(
                          `[AUTH-IPC] ❌ Ошибка проверки за ${r}ms (общее время: ${i}ms):`,
                          n,
                        ),
                        (0, v.isAuthError)(n)
                          ? (console.log(
                              "[AUTH-IPC] 🚨 Обнаружена ошибка авторизации, отправка уведомления",
                            ),
                            ft(n),
                            {
                              success: !1,
                              error:
                                n instanceof Error ? n.message : "Ошибка проверки аутентификации",
                            })
                          : M(n)
                            ? (console.log(
                                "[AUTH-IPC] 🌐 Сетевая ошибка/таймаут при проверке, сохраняем авторизацию и возвращаем degraded=true",
                              ),
                              {
                                success: !0,
                                degraded: !0,
                                error: n instanceof Error ? n.message : "Network error",
                              })
                            : (console.log(
                                "[AUTH-IPC] ⚠️  Нестандартная ошибка, считаем проверку неуспешной",
                              ),
                              {
                                success: !1,
                                error:
                                  n instanceof Error ? n.message : "Ошибка проверки аутентификации",
                              })
                      );
                    } finally {
                      ((yt = null), console.log("[AUTH-IPC] 🧹 Promise очищен"));
                    }
                  })()),
                  yt);
            } catch (t) {
              const n = Date.now() - e;
              return (
                console.error(`[AUTH-IPC] ❌ Критическая ошибка (${n}ms):`, t),
                (0, v.isAuthError)(t)
                  ? (ft(t),
                    {
                      success: !1,
                      error: t instanceof Error ? t.message : "Ошибка проверки аутентификации",
                    })
                  : M(t)
                    ? (console.log(
                        "[AUTH-IPC] 🌐 Сетевая ошибка/таймаут в критическом обработчике, сохраняем авторизацию",
                      ),
                      {
                        success: !0,
                        degraded: !0,
                        error: t instanceof Error ? t.message : "Network error",
                      })
                    : {
                        success: !1,
                        error: t instanceof Error ? t.message : "Ошибка проверки аутентификации",
                      }
              );
            }
          }),
            c.ipcMain.handle("user:getUserInfo", async () => {
              try {
                return q
                  ? (se.setAuthToken(q), { success: !0, userInfo: await se.getUserInfo() })
                  : { success: !1, error: "Токен авторизации не найден" };
              } catch (e) {
                return (
                  console.error("Error getting user info:", e),
                  (0, v.isAuthError)(e) && ft(e),
                  {
                    success: !1,
                    error:
                      e instanceof Error ? e.message : "Ошибка получения информации о пользователе",
                  }
                );
              }
            }),
            c.ipcMain.handle(
              "auth:setAuthToken",
              async (e, t) => (
                (q = t),
                Je.set("authToken", t || null),
                K(t ? "widget" : "auth"),
                t && se.setAuthToken(t),
                vt(),
                q && (await X()),
                { success: !0 }
              ),
            ),
            c.ipcMain.handle("auth:setLanguage", async (e, t) => {
              try {
                return q
                  ? (se.setAuthToken(q), { success: !0, user: (await se.setUserLanguage(t)).user })
                  : { success: !1, error: "Токен авторизации не найден" };
              } catch (e) {
                return (
                  console.error("auth:setLanguage failed", e),
                  { success: !1, error: e instanceof Error ? e.message : String(e) }
                );
              }
            }),
            c.ipcMain.handle("user:setRegistrationSource", async (e, t) => {
              try {
                return q
                  ? (se.setAuthToken(q),
                    { success: !0, user: (await se.setRegistrationSource(t)).user })
                  : { success: !1, error: "Токен авторизации не найден" };
              } catch (e) {
                return (
                  console.error("user:setRegistrationSource failed", e),
                  { success: !1, error: e instanceof Error ? e.message : String(e) }
                );
              }
            }),
            c.ipcMain.handle("languages:getAll", async () => {
              try {
                return (
                  q && se.setAuthToken(q),
                  { success: !0, languages: (await se.getLanguages()).languages }
                );
              } catch (e) {
                return (
                  console.error("languages:getAll failed", e),
                  { success: !1, error: e instanceof Error ? e.message : String(e) }
                );
              }
            }),
            c.ipcMain.handle("auth:getUserSubscription", async () => {
              try {
                return q
                  ? (se.setAuthToken(q),
                    { success: !0, data: (await se.getUserSubscription()).subscriptionInfo })
                  : { success: !1, error: "Токен авторизации не найден" };
              } catch (e) {
                return (
                  console.error("auth:getUserSubscription failed", e),
                  { success: !1, error: e instanceof Error ? e.message : String(e) }
                );
              }
            }),
            c.ipcMain.on("language:changed", (t, n) => {
              ((He = { ...He, language: String(n) }),
                et(),
                [e, be, Ve, je, ge].forEach((e) => {
                  e && !e.isDestroyed() && e.webContents.send("language:changed", n);
                }),
                ot((e) => {
                  e && !e.isDestroyed() && e.webContents.send("language:changed", n);
                }));
            }));
          let bt = null;
          const vt = () => {
            (bt && clearTimeout(bt),
              (bt = setTimeout(() => {
                ((() => {
                  const t = Date.now(),
                    n = Y(),
                    r = n.alwaysOnTop,
                    i = n.skipTaskbar;
                  if ("darwin" === process.platform)
                    try {
                      i ? c.app.dock.hide() : c.app.dock.show();
                    } catch (e) {
                      console.error("❌ Ошибка управления Dock на macOS:", e);
                    }
                  (e &&
                    !e.isDestroyed() &&
                    (e.setAlwaysOnTop(r, r ? "screen-saver" : void 0, r ? 1 : 0),
                    e.setSkipTaskbar(i),
                    r && e.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 })),
                    ot((e) => {
                      (e.setAlwaysOnTop(r, r ? "screen-saver" : void 0),
                        e.setSkipTaskbar(i),
                        r && e.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }));
                    }),
                    Ve &&
                      !Ve.isDestroyed() &&
                      (Ve.setAlwaysOnTop(r, r ? "screen-saver" : void 0),
                      Ve.setSkipTaskbar(i),
                      r && Ve.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 })));
                  const o = Date.now() - t;
                  console.log(
                    `🔄 Overlay режим обновлен для всех окон за ${o}ms: alwaysOnTop=${r}, skipTaskbar=${i} (hiddenInMissionControl всегда true)`,
                  );
                })(),
                  (bt = null));
              }, 50)));
          };
          (c.ipcMain.handle(
            "window:updateAlwaysOnTopForAllWindows",
            async () => (vt(), { success: !0 }),
          ),
            c.ipcMain.handle(
              "settings:setAutoDetectionEnabled",
              async (e, t) => (
                (Z = t),
                console.log(`💾 [MAIN] Настройка автораспознавания синхронизирована: ${Z}`),
                (He = { ...He, autoDetectionEnabled: !!t }),
                et(),
                c.BrowserWindow.getAllWindows().forEach((e) => {
                  e.isDestroyed() || e.webContents.send("autoDetection:changed", !!t);
                }),
                { success: !0 }
              ),
            ),
            c.ipcMain.handle("settings:openShortcuts", async () => {
              try {
                if (ge && !ge.isDestroyed()) {
                  try {
                    ge.setContentProtection(Q);
                  } catch {}
                  try {
                    ge.showInactive();
                  } catch {}
                  try {
                    ge.isVisible() || ge.show();
                  } catch {
                    ge.show();
                  }
                  return { success: !0 };
                }
                return (ht("shortcuts-settings"), { success: !0 });
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            }),
            c.ipcMain.handle("window:openSetup", async () => {
              try {
                if (ye && !ye.isDestroyed()) {
                  ye.isMinimized() && ye.restore();
                  try {
                    ye.showInactive();
                  } catch {
                    ye.show();
                  }
                  return { success: !0 };
                }
                return (ht("setup"), { success: !0 });
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            }),
            c.ipcMain.handle("settings:closeShortcuts", async () => {
              try {
                return (
                  ge && !ge.isDestroyed() && ge.close(),
                  e &&
                    !e.isDestroyed() &&
                    (console.log(
                      "🔄 [closeShortcuts] Отправляем событие shortcuts:settings-closed для обновления LiveWidget",
                    ),
                    (0, E.safeSenderSend)(e, "shortcuts:settings-closed")),
                  { success: !0 }
                );
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            }),
            c.ipcMain.on("toolbar-settings:update-state", (e, t) => {
              if (t && "object" == typeof t) {
                let e = { ...t },
                  n = !1;
                if ("number" == typeof t.suggestionOpacity) {
                  const r = ze(t.suggestionOpacity);
                  (r !== De && ((De = r), Je.set("suggestionOpacity", r), (n = !0)),
                    (e = { ...e, suggestionOpacity: De }));
                }
                const r = { ...He, ...e },
                  i = Object.keys(r).some((e) => r[e] !== He[e]);
                ((He = r), n && Ze(De), i && et());
              }
            }),
            c.ipcMain.handle(
              "session:setCurrentId",
              (e, t) => ((Ge = "string" == typeof t ? t : ""), { success: !0 }),
            ),
            c.ipcMain.handle("session:getCurrentId", () => ({ success: !0, sessionId: Ge })),
            c.ipcMain.on("toolbar-settings:request-state", (t) => {
              (t.sender.send("toolbar-settings:update-state", He),
                e &&
                  !e.isDestroyed() &&
                  t.sender !== e.webContents &&
                  e.webContents.send("toolbar-settings:request-state"));
            }),
            c.ipcMain.on("toolbar-settings:action", (t, n) => {
              try {
                if (n && "open_shortcuts" === n.type) {
                  if (ge && !ge.isDestroyed())
                    try {
                      ge.showInactive();
                    } catch {
                      ge.show();
                    }
                  else ht("shortcuts-settings");
                  return;
                }
                e && !e.isDestroyed() && e.webContents.send("toolbar-settings:action", n);
              } catch (e) {
                console.error("Ошибка обработки toolbar-settings:action:", e);
              }
            }),
            c.ipcMain.on("toolbar-settings:hover", (t, n) => {
              (($e = !!n),
                e && !e.isDestroyed() && e.webContents.send("toolbar-settings:hover", !!n));
            }),
            c.ipcMain.handle("settings:getShortcuts", async () => {
              try {
                const e = [
                    {
                      id: "send_manual",
                      accelerator: "CommandOrControl+Enter",
                      description: "Отправить сообщение AI",
                    },
                    {
                      id: "screenshot",
                      accelerator: "CommandOrControl+Shift+Enter",
                      description: "Скриншот и анализ",
                    },
                    {
                      id: "previous",
                      accelerator: "CommandOrControl+Left",
                      description: "Предыдущий совет",
                    },
                    {
                      id: "next",
                      accelerator: "CommandOrControl+Right",
                      description: "Следующий совет",
                    },
                    {
                      id: "choice_1",
                      accelerator: "CommandOrControl+1",
                      description: "Выбрать вариант 1",
                    },
                    {
                      id: "choice_2",
                      accelerator: "CommandOrControl+2",
                      description: "Выбрать вариант 2",
                    },
                    {
                      id: "choice_3",
                      accelerator: "CommandOrControl+3",
                      description: "Выбрать вариант 3",
                    },
                    {
                      id: "choice_4",
                      accelerator: "CommandOrControl+4",
                      description: "Выбрать вариант 4",
                    },
                    {
                      id: "toggle_click_through",
                      accelerator: "CommandOrControl+Shift+T",
                      description: "Режим кликов сквозь окно подсказок",
                    },
                    {
                      id: "hide_suggestion",
                      accelerator: "CommandOrControl+Shift+C",
                      description: "Скрыть/показать подсказку",
                    },
                    {
                      id: "start_stop_session",
                      accelerator: "CommandOrControl+Shift+S",
                      description: "Старт/стоп сессии",
                    },
                    {
                      id: "hide_show_all_windows",
                      accelerator: "CommandOrControl+Shift+H",
                      description: "Скрыть/показать все окна",
                    },
                    {
                      id: "screenshot_area",
                      accelerator: "CommandOrControl+Shift+A",
                      description: "Скриншот с выделением области",
                    },
                    {
                      id: "screenshot_fullscreen",
                      accelerator: "CommandOrControl+Shift+F",
                      description: "Скриншот полного экрана",
                    },
                    {
                      id: "cmd_scroll_up",
                      accelerator: "CommandOrControl+Up",
                      description: "Прокрутить подсказку вверх",
                    },
                    {
                      id: "cmd_scroll_down",
                      accelerator: "CommandOrControl+Down",
                      description: "Прокрутить подсказку вниз",
                    },
                    {
                      id: "move_window_up",
                      accelerator: "CommandOrControl+Shift+Up",
                      description: "Переместить окно вверх",
                    },
                    {
                      id: "move_window_down",
                      accelerator: "CommandOrControl+Shift+Down",
                      description: "Переместить окно вниз",
                    },
                    {
                      id: "move_window_left",
                      accelerator: "CommandOrControl+Shift+Left",
                      description: "Переместить окно влево",
                    },
                    {
                      id: "move_window_right",
                      accelerator: "CommandOrControl+Shift+Right",
                      description: "Переместить окно вправо",
                    },
                    {
                      id: "toggle_virtual_cursor",
                      accelerator: "CommandOrControl+Shift+V",
                      description: "Включить/выключить виртуальный курсор",
                    },
                    {
                      id: "toggle_cursor_protection",
                      accelerator: "CommandOrControl+Shift+P",
                      description: "Включить/выключить защиту курсора",
                    },
                  ],
                  t = Je.get("shortcuts", []),
                  n = Array.isArray(t)
                    ? t.filter((e) => e && "open" !== e.id && "toggle_speech" !== e.id)
                    : [],
                  r = new Set(n.map((e) => e.id)),
                  i = [...n, ...e.filter((e) => !r.has(e.id))];
                return { success: !0, shortcuts: i.length > 0 ? i : e };
              } catch (e) {
                const t = e instanceof Error ? e.message : String(e);
                return (
                  console.error("Ошибка при загрузке настроек горячих клавиш:", t),
                  { success: !1, error: t }
                );
              }
            }),
            c.ipcMain.handle("settings:saveShortcuts", async (t, n) => {
              try {
                if (
                  (console.log(
                    "🔍 [saveShortcuts] Получены данные:",
                    typeof n,
                    Array.isArray(n),
                    n,
                  ),
                  !Array.isArray(n))
                )
                  return (
                    console.error("❌ [saveShortcuts] shortcuts не является массивом:", n),
                    { success: !1, error: "Некорректный формат данных shortcuts" }
                  );
                if (0 === n.length)
                  return (
                    console.warn("⚠️ [saveShortcuts] Пустой массив shortcuts"),
                    { success: !1, error: "Массив shortcuts пустой" }
                  );
                const t = n.filter((e) =>
                  e && "object" == typeof e && e.accelerator
                    ? "open" === e.id || "toggle_speech" === e.id
                      ? (console.warn(
                          `⚠️ [saveShortcuts] Shortcut "${e.id}" больше не поддерживается и будет проигнорирован`,
                        ),
                        !1)
                      : !/[^\x00-\x7F]/.test(e.accelerator) ||
                        (console.warn(
                          `Отфильтрован shortcut с non-ASCII символами: ${e.accelerator} для ${e.id}`,
                        ),
                        !1)
                    : (console.warn("⚠️ [saveShortcuts] Пропускаем некорректный shortcut:", e), !1),
                );
                (Je.set("shortcuts", t),
                  console.log(`Настройки сохранены в electron-store (${t.length} из ${n.length})`),
                  e &&
                    !e.isDestroyed() &&
                    (console.log(
                      "🔄 [saveShortcuts] Отправляем shortcuts:updated:",
                      JSON.stringify(t, null, 2),
                    ),
                    (0, E.safeSenderSend)(e, "shortcuts:updated", t)),
                  c.globalShortcut.unregisterAll(),
                  Ct.clear());
                for (const n of t)
                  try {
                    if (!n.accelerator) continue;
                    if (Array.from(Ct.values()).includes(n.accelerator)) continue;
                    c.globalShortcut.register(n.accelerator, () => {
                      n.id.startsWith("move_window_")
                        ? k(n.id)
                        : (e &&
                            !e.isDestroyed() &&
                            ((0, E.safeSenderSend)(e, "shortcuts:triggered", n.id),
                            He.keystrokeOverlayEnabled &&
                              (0, E.safeSenderSend)(e, "video-recorder:keystroke", {
                                label: n.accelerator,
                                timestamp: Date.now(),
                              })),
                          ot((e) => {
                            (0, E.safeSenderSend)(e, "shortcuts:triggered", n.id);
                          }));
                    })
                      ? (Ct.set(n.id, n.accelerator),
                        console.log(`Горячая клавиша ${n.accelerator} (${n.id}) зарегистрирована`))
                      : console.warn(
                          `Не удалось зарегистрировать горячую клавишу ${n.accelerator} (${n.id})`,
                        );
                  } catch (e) {
                    console.error(`Ошибка регистрации горячей клавиши ${n.accelerator}:`, e);
                  }
                return (
                  console.log(`Перерегистрировано ${Ct.size} горячих клавиш из ${t.length}`),
                  { success: !0 }
                );
              } catch (e) {
                const t = e instanceof Error ? e.message : String(e);
                return (
                  console.error("Ошибка при сохранении настроек горячих клавиш:", t),
                  { success: !1, error: t }
                );
              }
            }),
            c.ipcMain.handle("settings:resetToDefaults", async () => {
              try {
                const t = [
                  {
                    id: "send_manual",
                    accelerator: "CommandOrControl+Enter",
                    description: "Отправить сообщение AI",
                  },
                  {
                    id: "screenshot",
                    accelerator: "CommandOrControl+Shift+Enter",
                    description: "Скриншот и анализ",
                  },
                  {
                    id: "previous",
                    accelerator: "CommandOrControl+Left",
                    description: "Предыдущий совет",
                  },
                  {
                    id: "next",
                    accelerator: "CommandOrControl+Right",
                    description: "Следующий совет",
                  },
                  {
                    id: "choice_1",
                    accelerator: "CommandOrControl+1",
                    description: "Выбрать вариант 1",
                  },
                  {
                    id: "choice_2",
                    accelerator: "CommandOrControl+2",
                    description: "Выбрать вариант 2",
                  },
                  {
                    id: "choice_3",
                    accelerator: "CommandOrControl+3",
                    description: "Выбрать вариант 3",
                  },
                  {
                    id: "choice_4",
                    accelerator: "CommandOrControl+4",
                    description: "Выбрать вариант 4",
                  },
                  {
                    id: "toggle_click_through",
                    accelerator: "CommandOrControl+Shift+T",
                    description: "Режим кликов сквозь окно подсказок",
                  },
                  {
                    id: "hide_suggestion",
                    accelerator: "CommandOrControl+Shift+C",
                    description: "Скрыть/показать подсказку",
                  },
                  {
                    id: "start_stop_session",
                    accelerator: "CommandOrControl+Shift+S",
                    description: "Старт/стоп сессии",
                  },
                  {
                    id: "hide_show_all_windows",
                    accelerator: "CommandOrControl+Shift+H",
                    description: "Скрыть/показать все окна",
                  },
                  {
                    id: "screenshot_area",
                    accelerator: "CommandOrControl+Shift+A",
                    description: "Скриншот с выделением области",
                  },
                  {
                    id: "screenshot_fullscreen",
                    accelerator: "CommandOrControl+Shift+F",
                    description: "Скриншот полного экрана",
                  },
                  {
                    id: "cmd_scroll_up",
                    accelerator: "CommandOrControl+Up",
                    description: "Прокрутить подсказку вверх",
                  },
                  {
                    id: "cmd_scroll_down",
                    accelerator: "CommandOrControl+Down",
                    description: "Прокрутить подсказку вниз",
                  },
                  {
                    id: "move_window_up",
                    accelerator: "CommandOrControl+Shift+Up",
                    description: "Переместить окно вверх",
                  },
                  {
                    id: "move_window_down",
                    accelerator: "CommandOrControl+Shift+Down",
                    description: "Переместить окно вниз",
                  },
                  {
                    id: "move_window_left",
                    accelerator: "CommandOrControl+Shift+Left",
                    description: "Переместить окно влево",
                  },
                  {
                    id: "move_window_right",
                    accelerator: "CommandOrControl+Shift+Right",
                    description: "Переместить окно вправо",
                  },
                  {
                    id: "toggle_virtual_cursor",
                    accelerator: "CommandOrControl+Shift+V",
                    description: "Включить/выключить виртуальный курсор",
                  },
                  {
                    id: "toggle_cursor_protection",
                    accelerator: "CommandOrControl+Shift+P",
                    description: "Включить/выключить защиту курсора",
                  },
                ];
                (Je.set("shortcuts", t),
                  console.log("Настройки горячих клавиш сброшены к дефолтным и сохранены в store"),
                  e &&
                    !e.isDestroyed() &&
                    (console.log(
                      "🔄 [resetToDefaults] Отправляем shortcuts:updated:",
                      JSON.stringify(t, null, 2),
                    ),
                    (0, E.safeSenderSend)(e, "shortcuts:updated", t)),
                  c.globalShortcut.unregisterAll(),
                  Ct.clear());
                for (const n of t)
                  try {
                    if (!n.accelerator) continue;
                    if (Array.from(Ct.values()).includes(n.accelerator)) continue;
                    c.globalShortcut.register(n.accelerator, () => {
                      n.id.startsWith("move_window_")
                        ? k(n.id)
                        : (e &&
                            !e.isDestroyed() &&
                            ((0, E.safeSenderSend)(e, "shortcuts:triggered", n.id),
                            He.keystrokeOverlayEnabled &&
                              (0, E.safeSenderSend)(e, "video-recorder:keystroke", {
                                label: n.accelerator,
                                timestamp: Date.now(),
                              })),
                          ot((e) => {
                            (0, E.safeSenderSend)(e, "shortcuts:triggered", n.id);
                          }));
                    }) && Ct.set(n.id, n.accelerator);
                  } catch (e) {
                    console.error(`Ошибка регистрации горячей клавиши ${n.accelerator}:`, e);
                  }
                return (
                  console.log(`Перерегистрировано ${Ct.size} горячих клавиш (defaults)`),
                  { success: !0, shortcuts: t }
                );
              } catch (e) {
                const t = e instanceof Error ? e.message : String(e);
                return (
                  console.error("Ошибка при сбросе настроек горячих клавиш:", t),
                  { success: !1, error: t }
                );
              }
            }),
            c.ipcMain.handle("settings:openSettingsWindow", async (e, t) => {
              try {
                return je && !je.isDestroyed()
                  ? (je.show(),
                    je.focus(),
                    t && (0, E.safeSenderSend)(je, "settings:navigate-to-section", t),
                    { success: !0 })
                  : (ht("settings"),
                    t &&
                      je &&
                      je.once("ready-to-show", () => {
                        je &&
                          !je.isDestroyed() &&
                          (0, E.safeSenderSend)(je, "settings:navigate-to-section", t);
                      }),
                    { success: !0 });
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            }),
            c.ipcMain.handle("settings:closeSettingsWindow", async () => {
              try {
                return (je && !je.isDestroyed() && je.close(), { success: !0 });
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            }),
            c.ipcMain.handle("settings:getAllSettings", async () => {
              try {
                const { suggestionWindowSettings: e } = n(81906),
                  { screenSelectionSettings: t } = n(65264);
                return {
                  success: !0,
                  settings: {
                    language: He.language || Je.get("preferredLanguage", "en"),
                    shortcuts: Je.get("shortcuts", []),
                    suggestionOpacity: Je.get("suggestionOpacity", 90),
                    contentProtectionEnabled: Q,
                    cursorProtectionEnabled: Je.get("cursorProtectionEnabled", !1),
                    screenshotMode: He?.screenshotMode || "fullscreen",
                    autoDetectionEnabled: Je.get("autoDetectionEnabled", !1),
                    selectedDisplayId: t.getSelectedDisplayId() || null,
                    suggestionWindowWidth: e.getWidth(),
                    suggestionWindowHeight: e.getHeight(),
                    suggestionFontSize: e.getFontSize(),
                    defaultSmartModel: Je.get("defaultSmartModel", !1),
                    ragEnabled: Je.get("ragEnabled", !1),
                    audioSource: ae.audioSource || "both",
                    recordingEnabled: Je.get("recordingEnabled", !1),
                    keystrokeOverlayEnabled: Je.get("keystrokeOverlayEnabled", !0),
                    showMainWindowOnRecording: Je.get("showMainWindowOnRecording", !0),
                    recordingOutputPath: Je.get("recordingOutputPath", ""),
                    sttProvider: Je.get("sttProvider", "deepgram"),
                    vadMode: Je.get("vadMode", 0),
                    maxSpeechSeconds: Je.get("maxSpeechSeconds", 7),
                  },
                };
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            }),
            c.ipcMain.handle("settings:saveSetting", async (t, r, i) => {
              try {
                switch (r) {
                  case "language":
                    (Je.set("preferredLanguage", i), (He = { ...He, language: String(i) }), et());
                    break;
                  case "suggestionOpacity": {
                    const e = ze(Number(i));
                    ((De = e),
                      Je.set("suggestionOpacity", e),
                      Ze(e),
                      (He = { ...He, suggestionOpacity: e }),
                      et());
                    break;
                  }
                  case "contentProtectionEnabled": {
                    ((Q = !!i),
                      e && !e.isDestroyed() && e.setContentProtection(Q),
                      je && !je.isDestroyed() && je.setContentProtection(Q),
                      ot((e) => {
                        e.setContentProtection(Q);
                      }),
                      ye && !ye.isDestroyed() && ye.setContentProtection(Q),
                      Ve && !Ve.isDestroyed() && Ve.setContentProtection(Q),
                      ge && !ge.isDestroyed() && ge.setContentProtection(Q),
                      be && !be.isDestroyed() && be.setContentProtection(Q),
                      ve && !ve.isDestroyed() && ve.setContentProtection(Q));
                    const t = dt.getWindow();
                    (t && !t.isDestroyed() && t.setContentProtection(Q),
                      (He = { ...He, contentProtectionEnabled: Q }),
                      et(),
                      e &&
                        !e.isDestroyed() &&
                        (0, E.safeSenderSend)(e, "toolbar-settings:update-state", He));
                    break;
                  }
                  case "screenshotMode":
                    ((He = { ...He, screenshotMode: "partial" === i ? "partial" : "fullscreen" }),
                      et());
                    break;
                  case "autoDetectionEnabled":
                    ((Z = !!i),
                      Je.set("autoDetectionEnabled", !!i),
                      (He = { ...He, autoDetectionEnabled: !!i }),
                      et(),
                      c.BrowserWindow.getAllWindows().forEach((e) => {
                        e.isDestroyed() || e.webContents.send("autoDetection:changed", !!i);
                      }));
                    break;
                  case "selectedDisplayId": {
                    const { screenSelectionSettings: e } = n(65264);
                    (e.setSelectedDisplayId(i),
                      (He = { ...He, selectedDisplayId: i || null }),
                      et());
                    break;
                  }
                  case "suggestionWindowWidth": {
                    const { suggestionWindowSettings: e } = n(81906);
                    e.setWidth(Number(i));
                    const t = it();
                    t && t.setWindowWidth(Number(i));
                    break;
                  }
                  case "suggestionWindowHeight": {
                    const { suggestionWindowSettings: e } = n(81906);
                    e.setHeight(Number(i));
                    const t = it();
                    t && t.setWindowHeight(Number(i));
                    break;
                  }
                  case "suggestionFontSize": {
                    const { suggestionWindowSettings: e } = n(81906);
                    (e.setFontSize(Number(i)),
                      (o = Number(i)),
                      it().forEachWindow((e) => {
                        e &&
                          !e.isDestroyed() &&
                          (0, E.safeSenderSend)(e, "suggestion:font-size-changed", o);
                      }));
                    break;
                  }
                  case "defaultSmartModel":
                    Je.set("defaultSmartModel", !!i);
                    break;
                  case "ragEnabled":
                    (Je.set("ragEnabled", !!i),
                      c.BrowserWindow.getAllWindows().forEach((e) => {
                        e.isDestroyed() || e.webContents.send("ragEnabled:changed", !!i);
                      }));
                    break;
                  case "audioSource":
                    ("system" !== i && "microphone" !== i && "both" !== i) ||
                      ((ae.audioSource = i),
                      Je.set("deviceSettings", ae),
                      (He = { ...He, audioSource: i }),
                      et());
                    break;
                  case "cursorProtectionEnabled":
                    (Je.set("cursorProtectionEnabled", !!i),
                      c.BrowserWindow.getAllWindows().forEach((e) => {
                        e.isDestroyed() || e.webContents.send("cursorProtection:changed", !!i);
                      }));
                    break;
                  case "recordingEnabled":
                    (Je.set("recordingEnabled", !!i),
                      (He = { ...He, recordingEnabled: !!i }),
                      et(),
                      e &&
                        !e.isDestroyed() &&
                        (0, E.safeSenderSend)(e, "toolbar-settings:update-state", He));
                    break;
                  case "keystrokeOverlayEnabled":
                    (Je.set("keystrokeOverlayEnabled", !!i),
                      (He = { ...He, keystrokeOverlayEnabled: !!i }),
                      et(),
                      e &&
                        !e.isDestroyed() &&
                        (0, E.safeSenderSend)(e, "toolbar-settings:update-state", He));
                    break;
                  case "showMainWindowOnRecording":
                    (Je.set("showMainWindowOnRecording", !!i),
                      (He = { ...He, showMainWindowOnRecording: !!i }),
                      et(),
                      e &&
                        !e.isDestroyed() &&
                        (0, E.safeSenderSend)(e, "toolbar-settings:update-state", He));
                    break;
                  case "recordingOutputPath":
                    Je.set("recordingOutputPath", String(i));
                    break;
                  case "sttProvider":
                    (Je.set("sttProvider", i),
                      e &&
                        !e.isDestroyed() &&
                        (0, E.safeSenderSend)(e, "settings:sttProviderChanged", i));
                    break;
                  case "vadMode":
                    (Je.set("vadMode", Number(i)),
                      e &&
                        !e.isDestroyed() &&
                        (0, E.safeSenderSend)(e, "settings:vadSettingsChanged"));
                    break;
                  case "maxSpeechSeconds":
                    (Je.set("maxSpeechSeconds", Number(i)),
                      e &&
                        !e.isDestroyed() &&
                        (0, E.safeSenderSend)(e, "settings:vadSettingsChanged"));
                    break;
                  default:
                    return { success: !1, error: `Unknown setting key: ${r}` };
                }
                return { success: !0 };
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
              var o;
            }),
            c.ipcMain.handle("disguise:getPresets", () => {
              const { getPresets: e } = n(38741);
              return e();
            }),
            c.ipcMain.handle("disguise:getCurrent", () => ({
              presetId: Je.get("disguise.presetId", "default"),
              custom: Je.get("disguise.custom"),
            })),
            c.ipcMain.handle("disguise:apply", async (e, t, r) => {
              try {
                if (!q) return { success: !1, error: "Authentication required" };
                se.setAuthToken(q);
                const e = await se.getUserSubscription(),
                  t = e.subscriptionInfo?.subscription?.plan?.name?.toLowerCase() || "";
                if (!t || t.includes("free") || t.includes("бесплатн"))
                  return { success: !1, error: "Disguise feature requires a paid subscription" };
              } catch (e) {
                return (
                  console.error("[Disguise] Subscription check failed:", e),
                  { success: !1, error: "Subscription verification failed" }
                );
              }
              const { getPresetById: i, applyDisguise: o, sanitizeExeName: s } = n(38741);
              let a;
              if ("custom" === t && r) {
                if (!r.name.trim()) return { success: !1, error: "Name is required" };
                const e = r.iconPath && b.default.existsSync(r.iconPath) ? "custom.ico" : "",
                  t = s(r.name.trim()) + ".exe";
                a = {
                  id: "custom",
                  name: r.name.trim(),
                  company: r.company.trim(),
                  iconName: e,
                  exeName: t,
                };
              } else a = i(t);
              if (!a) return { success: !1, error: "Unknown preset" };
              try {
                const e = Je.get("disguise.presetId", "default");
                if (e && "default" !== e) {
                  const { restoreOriginal: e } = n(38741),
                    t = Je.get("disguise.originalExePath");
                  try {
                    (await e(t),
                      console.log("[Disguise] Restored original before applying new disguise"));
                  } catch (e) {
                    console.warn("[Disguise] Failed to restore before re-apply:", e);
                  }
                }
                const i = await o(a);
                return (
                  (0, h.updateShortcutForDisguise)(i.originalExePath, i.newExePath),
                  Je.set("disguise.presetId", t),
                  "custom" === t && r
                    ? Je.set("disguise.custom", { name: r.name.trim(), company: r.company.trim() })
                    : Je.delete("disguise.custom"),
                  Je.set("disguise.version", c.app.getVersion()),
                  Je.set("disguise.originalExePath", i.originalExePath),
                  Je.set("disguise.newExePath", i.newExePath),
                  c.app.releaseSingleInstanceLock(),
                  await new Promise((e) => setTimeout(e, 300)),
                  (0, l.spawn)(i.newExePath, [], {
                    detached: !0,
                    stdio: "ignore",
                    env: { ..."MISSING_ENV_VAR" },
                  }).unref(),
                  c.app.exit(0),
                  { success: !0 }
                );
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            }),
            c.ipcMain.handle("disguise:pickIcon", async () => {
              try {
                const e = await c.dialog.showOpenDialog({
                  filters: [{ name: "Icons", extensions: ["ico"] }],
                  properties: ["openFile"],
                });
                if (e.canceled || !e.filePaths.length) return { success: !1 };
                const t = e.filePaths[0],
                  n = (0, y.join)(c.app.getPath("userData"), "disguise");
                b.default.existsSync(n) || b.default.mkdirSync(n, { recursive: !0 });
                const r = (0, y.join)(n, "custom.ico");
                return (b.default.copyFileSync(t, r), { success: !0, iconPath: r });
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            }),
            c.ipcMain.handle("recording:pickOutputFolder", async () => {
              const e = await c.dialog.showOpenDialog({
                title: "Выберите папку для записей",
                properties: ["openDirectory", "createDirectory"],
              });
              if (e.canceled || !e.filePaths.length) return { success: !1 };
              const t = e.filePaths[0];
              return (Je.set("recordingOutputPath", t), { success: !0, path: t });
            }),
            c.ipcMain.handle("recording:openOutputFolder", async () => {
              const e =
                Je.get("recordingOutputPath", "") ||
                (0, y.join)(c.app.getPath("documents"), "ShadowHint", "Recordings");
              (await b.default.promises.mkdir(e, { recursive: !0 }), c.shell.openPath(e));
            }),
            c.ipcMain.handle("disguise:remove", async () => {
              const { restoreOriginal: e } = n(38741);
              try {
                const t = c.app.getPath("exe"),
                  n = Je.get("disguise.originalExePath"),
                  r = await e(n);
                return (
                  (0, h.restoreShortcutFromDisguise)(t, r),
                  Je.set("disguise.presetId", "default"),
                  Je.delete("disguise.version"),
                  Je.delete("disguise.custom"),
                  Je.delete("disguise.originalExePath"),
                  Je.delete("disguise.newExePath"),
                  c.app.releaseSingleInstanceLock(),
                  await new Promise((e) => setTimeout(e, 300)),
                  (0, l.spawn)(r, [], {
                    detached: !0,
                    stdio: "ignore",
                    env: { ..."MISSING_ENV_VAR" },
                  }).unref(),
                  c.app.exit(0),
                  { success: !0 }
                );
              } catch (e) {
                return { success: !1, error: e instanceof Error ? e.message : String(e) };
              }
            }),
            c.ipcMain.handle("audio:startStreams", async (t, n, r) => {
              try {
                const i = "system" === r || "microphone" === r || "both" === r ? r : "both";
                console.log(`Starting audio streams for session: ${n}, audioSource: ${i}`);
                const o = T.startInactiveSpan({
                  name: "audio:startStreams",
                  op: "audio.streaming",
                  attributes: { "audio.session_id": n || "", "audio.source": i },
                });
                globalThis.__sentryAudioSpan = o;
                const s = (n, r = "") => {
                  try {
                    const i = { connected: n, error: r ? P(r) : "" };
                    (console.log("Отправляем статус соединения: ", i),
                      t && t.sender && (0, E.safeSenderSend)(t, "audio:connectionStatus", i),
                      e && (0, E.safeSenderSend)(e, "audio:connectionStatus", i));
                  } catch (e) {
                    console.error("Ошибка при отправке статуса соединения:", e);
                  }
                };
                if (!q)
                  return (
                    console.error("Ошибка авторизации: токен отсутствует"),
                    s(!1, "Токен авторизации не найден"),
                    { success: !1, error: "Токен авторизации не найден" }
                  );
                if (!n)
                  return (
                    console.error("Ошибка: sessionId не указан при запуске аудио потоков"),
                    s(!1, "ID сессии не указан"),
                    { success: !1, error: "ID сессии не указан" }
                  );
                (se.setAuthToken(q),
                  console.log(
                    "[AUDIO-DEBUG] Creating audio streams with token:",
                    q ? q.substring(0, 50) + "..." : "NO TOKEN",
                  ),
                  console.log("[AUDIO-DEBUG] Session ID for audio streams:", n));
                try {
                  const t = (e) => {
                      switch (ct(e)) {
                        case "expected_termination":
                          console.log("Поток микрофона завершен сервером");
                          break;
                        case "session_timeout":
                          (console.warn("Сессия истекла - поток микрофона закрыт сервером"),
                            s(!1, "Сессия интервью истекла"));
                          break;
                        case "connection_error":
                          (console.error("Соединение с сервером потеряно (микрофон):", e),
                            s(!1, "Соединение с сервером потеряно"));
                          break;
                        default:
                          (console.error("Ошибка в потоке микрофона:", e),
                            pe || s(!1, e?.message || "Ошибка соединения микрофона с сервером"));
                      }
                    },
                    n = (e) => {
                      switch (ct(e)) {
                        case "expected_termination":
                          console.log("🔚 Поток динамиков завершен сервером");
                          break;
                        case "session_timeout":
                          (console.warn("⏰ Сессия истекла - поток динамиков закрыт сервером"),
                            s(!1, "Сессия интервью истекла"));
                          break;
                        case "connection_error":
                          (console.error("🌐 Соединение с сервером потеряно (динамики):", e),
                            s(!1, "Соединение с сервером потеряно"));
                          break;
                        default:
                          (console.error("❌ Ошибка в потоке динамиков:", e),
                            pe || s(!1, e?.message || "Ошибка соединения динамиков с сервером"));
                      }
                    };
                  return (
                    "system" !== i
                      ? (console.log("[AUDIO-DEBUG] Creating microphone stream..."),
                        (ue = se.processAudio(t)))
                      : (console.log(
                          "[AUDIO-DEBUG] Skipping microphone stream (audioSource=system)",
                        ),
                        (ue = null)),
                    "microphone" !== i
                      ? (console.log("[AUDIO-DEBUG] Creating speaker stream..."),
                        (de = se.processAudio(n)))
                      : (console.log(
                          "[AUDIO-DEBUG] Skipping speaker stream (audioSource=microphone)",
                        ),
                        (de = null)),
                    console.log("✅ Создали потоки:", {
                      micStream: !!ue,
                      speakerStream: !!de,
                      audioSource: i,
                    }),
                    ue && ue.on("error", t),
                    ue &&
                      ue.on("data", (t) => {
                        if (
                          (console.log("📥 Получен ответ от сервера (mic):", t),
                          console.log(
                            `🔍 [MIC] Проверяем автоопределение: questionDetected=${t.questionDetected}, questionConfidence=${t.questionConfidence}, autoAiTriggered=${t.autoAiTriggered}`,
                          ),
                          t.text)
                        ) {
                          const e = {
                            text: t.text,
                            speaker: t.speaker || "user",
                            confidence: t.confidence,
                            timestamp: new Date().toLocaleTimeString(),
                          };
                          if (Ue) {
                            const t = Ue.getWindowsSnapshot();
                            for (const { window: n } of t)
                              n.isDestroyed() ||
                                (0, E.safeSenderSend)(n, "transcription-update", e);
                          }
                          ve &&
                            !ve.isDestroyed() &&
                            (0, E.safeSenderSend)(ve, "transcription-update", e);
                        }
                        t.autoAiTriggered &&
                          (console.log(
                            `🤖 [MIC] Сервер запросил autoAiTriggered, локальная настройка: ${Z}`,
                          ),
                          Z
                            ? (console.log("🤖 Обнаружен вопрос, автоматически генерируем ответ"),
                              e &&
                                !e.isDestroyed() &&
                                (0, E.safeSenderSend)(e, "auto-ai-response-triggered", {
                                  sessionId: t.sessionId,
                                  detectedQuestion: t.text,
                                  questionConfidence: t.questionConfidence,
                                }))
                            : console.log(
                                "🚫 Автораспознавание отключено локально, игнорируем серверный триггер",
                              ));
                      }),
                    ue &&
                      ue.on("end", () => {
                        console.log("🔚 Поток микрофона завершен сервером");
                      }),
                    ue &&
                      ue.on("close", () => {
                        console.log("🔒 Поток микрофона закрыт");
                      }),
                    de && de.on("error", n),
                    de &&
                      de.on("data", (t) => {
                        if (
                          (console.log("📥 Получен ответ от сервера (speaker):", t),
                          console.log(
                            `🔍 [SPEAKER] Проверяем автоопределение: questionDetected=${t.questionDetected}, questionConfidence=${t.questionConfidence}, autoAiTriggered=${t.autoAiTriggered}`,
                          ),
                          t.text)
                        ) {
                          const e = {
                            text: t.text,
                            speaker: t.speaker || "system",
                            confidence: t.confidence,
                            timestamp: new Date().toLocaleTimeString(),
                          };
                          if (Ue) {
                            const t = Ue.getWindowsSnapshot();
                            for (const { window: n } of t)
                              n.isDestroyed() ||
                                (0, E.safeSenderSend)(n, "transcription-update", e);
                          }
                          ve &&
                            !ve.isDestroyed() &&
                            (0, E.safeSenderSend)(ve, "transcription-update", e);
                        }
                        t.autoAiTriggered &&
                          (console.log(
                            `🤖 [SPEAKER] Сервер запросил autoAiTriggered, локальная настройка: ${Z}`,
                          ),
                          Z
                            ? (console.log(
                                "🤖 [SPEAKER] Обнаружен вопрос, автоматически генерируем ответ",
                              ),
                              e &&
                                !e.isDestroyed() &&
                                (0, E.safeSenderSend)(e, "auto-ai-response-triggered", {
                                  sessionId: t.sessionId,
                                  detectedQuestion: t.text,
                                  questionConfidence: t.questionConfidence,
                                }))
                            : console.log(
                                "🚫 Автораспознавание отключено локально, игнорируем серверный триггер",
                              ));
                      }),
                    de &&
                      de.on("end", () => {
                        console.log("🔚 Поток динамиков завершен сервером");
                      }),
                    de &&
                      de.on("close", () => {
                        console.log("🔒 Поток динамиков закрыт");
                      }),
                    console.log("Отправляем статус подключения: connected=true"),
                    s(!0),
                    console.log("Аудио-потоки успешно запущены"),
                    { success: !0 }
                  );
                } catch (e) {
                  (console.error("Ошибка создания аудио-потоков:", e),
                    s(!1, e instanceof Error ? e.message : "Ошибка при создании аудио-потоков"));
                  const t = globalThis.__sentryAudioSpan;
                  return (
                    t &&
                      (t.setStatus({
                        code: 2,
                        message: e instanceof Error ? e.message : "start_failed",
                      }),
                      t.end(),
                      (globalThis.__sentryAudioSpan = null)),
                    {
                      success: !1,
                      error: e instanceof Error ? e.message : "Ошибка при создании аудио-потоков",
                    }
                  );
                }
              } catch (e) {
                console.error("Ошибка при запуске аудио-потоков:", e);
                const n = globalThis.__sentryAudioSpan;
                return (
                  n &&
                    (n.setStatus({
                      code: 2,
                      message: e instanceof Error ? e.message : "start_failed",
                    }),
                    n.end(),
                    (globalThis.__sentryAudioSpan = null)),
                  t &&
                    t.sender &&
                    (0, E.safeSenderSend)(t, "audio:connectionStatus", {
                      connected: !1,
                      error: e instanceof Error ? e.message : "Неизвестная ошибка",
                    }),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка запуска аудио-потоков",
                  }
                );
              }
            }),
            c.ipcMain.handle("audio:stopStreams", () => {
              try {
                console.log("Stopping audio streams");
                const e = globalThis.__sentryAudioSpan;
                return (
                  e &&
                    (e.setStatus({ code: 1, message: "ok" }),
                    e.end(),
                    (globalThis.__sentryAudioSpan = null)),
                  (pe = !0),
                  (fe = Date.now()),
                  ue && (ue.removeAllListeners(), ue.end(), (ue = null)),
                  de && (de.removeAllListeners(), de.end(), (de = null)),
                  setTimeout(() => {
                    pe = !1;
                  }, 2e3),
                  { success: !0 }
                );
              } catch (e) {
                return (
                  console.error("Ошибка при остановке аудио-потоков:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка остановки аудио-потоков",
                  }
                );
              }
            }),
            c.ipcMain.handle("audio:changeMicrophone", async (t, n) => {
              try {
                return (
                  console.log("🔄 Changing microphone to deviceId:", n),
                  ue
                    ? (t &&
                        t.sender &&
                        (0, E.safeSenderSend)(t, "audio:microphoneChangeRequested", {
                          deviceId: n,
                        }),
                      e &&
                        !e.isDestroyed() &&
                        (0, E.safeSenderSend)(e, "audio:microphoneChangeRequested", {
                          deviceId: n,
                        }),
                      console.log("✅ Microphone change request sent to renderer"),
                      { success: !0 })
                    : (console.warn(
                        "⚠️ Попытка смены микрофона без активного gRPC потока микрофона",
                      ),
                      { success: !1, error: "Поток микрофона не активен" })
                );
              } catch (e) {
                return (
                  console.error("❌ Ошибка при смене микрофона:", e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка смены микрофона" }
                );
              }
            }),
            c.ipcMain.on("audio:micChunk", (t, n) => {
              try {
                const r = (n, r = "") => {
                  try {
                    const i = { connected: n, error: r ? P(r) : "" };
                    (t && t.sender && (0, E.safeSenderSend)(t, "audio:connectionStatus", i),
                      e && (0, E.safeSenderSend)(e, "audio:connectionStatus", i));
                  } catch (e) {
                    console.error("Ошибка при отправке статуса соединения:", e);
                  }
                };
                if (!ue)
                  return (
                    console.warn("Поток микрофона не инициализирован"),
                    (0, E.safeSenderSend)(t, "audio:chunkSent", {
                      success: !1,
                      type: "mic",
                      error: "Поток не инициализирован",
                    }),
                    void r(!1, "Поток микрофона не инициализирован")
                  );
                if (!n || !n.data)
                  return (
                    console.warn("Получен пустой чанк аудио с микрофона"),
                    n && "test" === n.format
                      ? (console.log("Получен тестовый чанк для проверки соединения"),
                        r(!0),
                        void (0, E.safeSenderSend)(t, "audio:chunkSent", {
                          success: !0,
                          type: "mic",
                        }))
                      : void (0, E.safeSenderSend)(t, "audio:chunkSent", {
                          success: !1,
                          type: "mic",
                          error: "Пустые аудио данные",
                        })
                  );
                if (!n.sessionId)
                  return (
                    console.warn("Отсутствует sessionId в чанке микрофона"),
                    void (0, E.safeSenderSend)(t, "audio:chunkSent", {
                      success: !1,
                      type: "mic",
                      error: "Отсутствует ID сессии",
                    })
                  );
                try {
                  const e = Je.get("ragEnabled", !1),
                    i = f.AudioChunk.fromPartial({
                      sessionId: n.sessionId,
                      data: n.data,
                      format: n.format || "pcm",
                      isLast: !!n.isLast,
                      speaker: n.speaker || "user",
                      ragEnabled: e,
                      sttProvider: "groq" === Je.get("sttProvider", "deepgram") ? "groq" : "",
                      vadMode: Je.get("vadMode", 0),
                      maxSpeechSeconds: Je.get("maxSpeechSeconds", 7),
                    });
                  (ue.write(i) ||
                    console.warn("[BACKPRESSURE] micStream.write returned false, buffer full"),
                    (0, E.safeSenderSend)(t, "audio:chunkSent", { success: !0, type: "mic" }),
                    n.isFirst &&
                      (r(!0),
                      console.log(
                        "Отправлен статус соединения после первого успешного чанка микрофона",
                      )));
                } catch (e) {
                  (console.error("Ошибка сериализации аудио чанка микрофона:", e),
                    (0, E.safeSenderSend)(t, "audio:chunkSent", {
                      success: !1,
                      type: "mic",
                      error: `Ошибка сериализации: ${e instanceof Error ? e.message : String(e)}`,
                    }),
                    r(
                      !1,
                      `Ошибка сериализации аудио: ${e instanceof Error ? e.message : String(e)}`,
                    ));
                }
              } catch (e) {
                (console.error("Ошибка отправки аудио чанка микрофона:", e),
                  (0, E.safeSenderSend)(t, "audio:chunkSent", {
                    success: !1,
                    type: "mic",
                    error: e instanceof Error ? e.message : "Ошибка отправки данных",
                  }),
                  t &&
                    t.sender &&
                    (0, E.safeSenderSend)(t, "audio:connectionStatus", {
                      connected: !1,
                      error: e instanceof Error ? e.message : "Ошибка при отправке аудио",
                    }));
              }
            }),
            c.ipcMain.on("audio:speakerChunk", (t, n) => {
              try {
                const r = (n, r = "") => {
                  try {
                    const i = { connected: n, error: r ? P(r) : "" };
                    (t && t.sender && (0, E.safeSenderSend)(t, "audio:connectionStatus", i),
                      e && (0, E.safeSenderSend)(e, "audio:connectionStatus", i));
                  } catch (e) {
                    console.error("Ошибка при отправке статуса соединения:", e);
                  }
                };
                if (!de) return;
                if (!n || !n.data)
                  return (
                    console.warn("Получен пустой чанк аудио с динамиков"),
                    n && "test" === n.format
                      ? (console.log("Получен тестовый чанк для проверки соединения (speaker)"),
                        r(!0),
                        void (0, E.safeSenderSend)(t, "audio:chunkSent", {
                          success: !0,
                          type: "speaker",
                        }))
                      : void (0, E.safeSenderSend)(t, "audio:chunkSent", {
                          success: !1,
                          type: "speaker",
                          error: "Пустые аудио данные",
                        })
                  );
                if (!n.sessionId)
                  return (
                    console.warn("Отсутствует sessionId в чанке динамиков"),
                    void (0, E.safeSenderSend)(t, "audio:chunkSent", {
                      success: !1,
                      type: "speaker",
                      error: "Отсутствует ID сессии",
                    })
                  );
                try {
                  const e = Je.get("ragEnabled", !1),
                    i = f.AudioChunk.fromPartial({
                      sessionId: n.sessionId,
                      data: n.data,
                      format: n.format || "pcm",
                      isLast: !!n.isLast,
                      speaker: n.speaker || "interviewer",
                      ragEnabled: e,
                      sttProvider: "groq" === Je.get("sttProvider", "deepgram") ? "groq" : "",
                      vadMode: Je.get("vadMode", 0),
                      maxSpeechSeconds: Je.get("maxSpeechSeconds", 7),
                    });
                  try {
                    de.write(i) ||
                      console.warn(
                        "[BACKPRESSURE] speakerStream.write returned false, buffer full",
                      );
                  } catch (e) {
                    return (
                      console.error("❌ Ошибка записи в gRPC поток:", e),
                      void r(
                        !1,
                        `Ошибка записи в поток: ${e instanceof Error ? e.message : String(e)}`,
                      )
                    );
                  }
                  ((0, E.safeSenderSend)(t, "audio:chunkSent", { success: !0, type: "speaker" }),
                    n.isFirst &&
                      (r(!0),
                      console.log(
                        "Отправлен статус соединения после первого успешного чанка динамиков",
                      )));
                } catch (e) {
                  (console.error("Ошибка сериализации аудио чанка динамиков:", e),
                    (0, E.safeSenderSend)(t, "audio:chunkSent", {
                      success: !1,
                      type: "speaker",
                      error: `Ошибка сериализации: ${e instanceof Error ? e.message : String(e)}`,
                    }),
                    r(
                      !1,
                      `Ошибка сериализации аудио: ${e instanceof Error ? e.message : String(e)}`,
                    ));
                }
              } catch (e) {
                (console.error("Ошибка отправки аудио чанка динамиков:", e),
                  (0, E.safeSenderSend)(t, "audio:chunkSent", {
                    success: !1,
                    type: "speaker",
                    error: e instanceof Error ? e.message : "Ошибка отправки данных",
                  }),
                  t &&
                    t.sender &&
                    (0, E.safeSenderSend)(t, "audio:connectionStatus", {
                      connected: !1,
                      error:
                        e instanceof Error ? e.message : "Ошибка при отправке аудио с динамиков",
                    }));
              }
            }),
            c.ipcMain.handle("audio:checkStatus", (e, t) => {
              try {
                return (
                  console.log(`Checking audio connection status for session: ${t}`),
                  ue || de
                    ? (e &&
                        e.sender &&
                        (0, E.safeSenderSend)(e, "audio:connectionStatus", {
                          connected: !0,
                          error: "",
                        }),
                      { connected: !0, error: "" })
                    : (console.warn("Потоки аудио не инициализированы"),
                      e &&
                        e.sender &&
                        (0, E.safeSenderSend)(e, "audio:connectionStatus", {
                          connected: !1,
                          error: "Потоки аудио не инициализированы",
                        }),
                      { connected: !1, error: "Потоки аудио не инициализированы" })
                );
              } catch (t) {
                return (
                  console.error("Ошибка при проверке статуса аудио-соединения:", t),
                  e &&
                    e.sender &&
                    (0, E.safeSenderSend)(e, "audio:connectionStatus", {
                      connected: !1,
                      error: t instanceof Error ? t.message : "Ошибка проверки статуса соединения",
                    }),
                  {
                    connected: !1,
                    error: t instanceof Error ? t.message : "Ошибка проверки статуса соединения",
                  }
                );
              }
            }),
            c.ipcMain.handle("audio:startSystemAudio", async () => {
              try {
                console.log("Инициализация захвата системного аудио...");
                const e = await c.desktopCapturer.getSources({
                  types: ["screen"],
                  thumbnailSize: { width: 0, height: 0 },
                });
                return e && 0 !== e.length
                  ? {
                      success: !0,
                      sources: e.map((e) => ({
                        id: e.id,
                        name: e.name,
                        isScreen: e.id.startsWith("screen:"),
                      })),
                    }
                  : (console.error("Не удалось найти источники для захвата экрана"),
                    { success: !1, error: "Не удалось найти источники для захвата экрана" });
              } catch (e) {
                return (
                  console.error("Ошибка инициализации захвата системного аудио:", e),
                  {
                    success: !1,
                    error:
                      e instanceof Error
                        ? e.message
                        : "Неизвестная ошибка при инициализации захвата аудио",
                  }
                );
              }
            }),
            c.ipcMain.handle("audio:checkSystemAudioCapability", async () => {
              try {
                const e = {
                    platform: process.platform,
                    electronVersion: process.versions.electron,
                    chromeVersion: process.versions.chrome,
                  },
                  t = "win32" === process.platform,
                  n =
                    "darwin" === process.platform &&
                    parseInt(process.versions.electron.split(".")[0]) >= 9;
                return {
                  success: !0,
                  canCaptureSystemAudio: t || n,
                  systemInfo: e,
                  needsVirtualCable: !t && !n,
                };
              } catch (e) {
                return (
                  console.error("Ошибка при проверке возможности захвата аудио:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Неизвестная ошибка",
                    needsVirtualCable: !0,
                  }
                );
              }
            }),
            c.ipcMain.handle("system:getPlatform", () => process.platform),
            c.ipcMain.handle("system:checkScreenRecordingPermission", () => {
              try {
                if ("darwin" !== process.platform) return !0;
                const { systemPreferences: e } = n(84157);
                return "granted" === e.getMediaAccessStatus("screen");
              } catch (e) {
                return (console.error("Ошибка проверки разрешения Screen Recording:", e), !1);
              }
            }),
            c.ipcMain.handle("shell:openExternal", async (e, t) => {
              try {
                return (await c.shell.openExternal(t), { success: !0 });
              } catch (e) {
                return (
                  console.error("Error opening external URL:", e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка открытия ссылки" }
                );
              }
            }),
            c.ipcMain.handle("clipboard:writeText", async (e, t) => {
              try {
                return (c.clipboard.writeText(t), { success: !0 });
              } catch (e) {
                return (
                  console.error("Error writing to clipboard:", e),
                  { success: !1, error: e instanceof Error ? e.message : "Ошибка копирования" }
                );
              }
            }));
          const _t = (e, t) => {
            const { suggestionWindowSettings: r } = n(81906),
              i = r.getWidth(),
              o = r.getHeight(),
              s = new c.BrowserWindow({
                width: i,
                height: o || 220,
                frame: !1,
                transparent: !0,
                backgroundColor: "#00000000",
                type: "panel",
                show: !1,
                minWidth: 360,
                maxWidth: 2400,
                minHeight: ke,
                maxHeight: Me,
                titleBarStyle: "hidden",
                focusable: !0,
                acceptFirstMouse: !0,
                webPreferences: {
                  preload: require("path").resolve(
                    __dirname,
                    "../renderer",
                    "main_window",
                    "preload.js",
                  ),
                  nodeIntegration: !0,
                  contextIsolation: !1,
                  webSecurity: !1,
                  backgroundThrottling: !1,
                },
                autoHideMenuBar: !0,
                useContentSize: !0,
                resizable: !1,
                skipTaskbar: Y().skipTaskbar,
                hiddenInMissionControl: !0,
              }),
              a = (e) => {
                if (!Number.isFinite(e)) return 220;
                const t = Math.max(ke, Math.min(e, Me));
                return Math.round(t);
              };
            let l = a(o || 220);
            const u = (e) => {
              const t = a(e);
              return ((l = t), t);
            };
            s.__setSuggestionLockedHeight = u;
            let d = !1;
            const p = () => {
              try {
                Be && Be.scheduleUpdate(void 0, { animate: !1, immediate: !0 });
              } catch (e) {
                console.warn(
                  "Не удалось обновить позицию окна транскрипции при перемещении подсказки:",
                  e,
                );
              }
            };
            (s.on("move", p),
              s.on("moved", p),
              s.on("will-resize", (e, t) => {
                if (s.isDestroyed()) return;
                const n = a(t.height),
                  r = it().getWindowHeight() ?? l;
                n !== r &&
                  (e.preventDefault(),
                  ((e) => {
                    if (!d && !s.isDestroyed())
                      try {
                        d = !0;
                        const t = "number" == typeof e ? u(e) : l,
                          n = it().getWindowWidth(),
                          [r] = s.getSize();
                        s.setSize(n ?? r, t);
                      } catch (e) {
                        console.warn("Не удалось восстановить размеры окна подсказки:", e);
                      } finally {
                        d = !1;
                      }
                  })(r));
              }),
              Y().alwaysOnTop &&
                (s.setAlwaysOnTop(!0, "screen-saver"),
                s.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 })),
              s.setFullScreenable(!1),
              s.setContentProtection(Q),
              s.setBackgroundColor("#00000000"),
              "darwin" === process.platform &&
                ("darwin" === process.platform &&
                  "function" == typeof s.setWindowButtonVisibility &&
                  s.setWindowButtonVisibility(!1),
                s.setHasShadow(!1)),
              it().registerWindow(s));
            const f = `suggestion-${s.id}`;
            if (Je.get("showMainWindowOnRecording", !0))
              try {
                Fe.registerWindow(f, s);
              } catch (e) {
                console.error("[VideoRecorder] Failed to register suggestion:", e);
              }
            setTimeout(() => {
              const [e, t] = s.getPosition();
              console.log(`Окно подсказки позиционировано на: x=${e}, y=${t}`);
            }, 100);
            let h = "";
            try {
              const t = e
                .replace(/\%/g, "%25")
                .replace(/\#/g, "%23")
                .replace(/\?/g, "%3F")
                .replace(/\&/g, "%26");
              ((h = encodeURIComponent(t)),
                console.log("Подсказка успешно закодирована для URL:", h.substring(0, 50) + "..."));
            } catch (e) {
              (console.error("Ошибка при кодировании подсказки:", e),
                (h = encodeURIComponent("Ошибка при кодировании подсказки")));
            }
            return (
              s.loadURL(
                `file://${require("path").resolve(__dirname, "..", "renderer", "main_window", "index.html")}#/suggestion?text=${h}`,
              ),
              s.once("ready-to-show", () => {
                try {
                  if (!1 !== t?.showOnReady)
                    try {
                      s.showInactive();
                    } catch {
                      s.show();
                    }
                } catch {}
              }),
              s.webContents.once("did-finish-load", () => {
                try {
                  ((0, E.safeSenderSend)(s, "suggestion:set-opacity", De), x(s));
                } catch (e) {
                  console.warn("Не удалось отправить начальную прозрачность окну подсказки:", e);
                }
              }),
              s.on("closed", () => {
                delete s.__setSuggestionLockedHeight;
                try {
                  Fe.unregisterWindow(f);
                } catch (e) {
                  console.error("[VideoRecorder] Failed to unregister suggestion:", e);
                }
                console.log("Окно подсказки закрыто, обновлен список открытых окон");
              }),
              s.on("blur", () => {
                Ee && !Ne && It();
              }),
              s
            );
          };
          c.ipcMain.handle("open-suggestion-window", async (e, t) => {
            try {
              const e = it(),
                n = e.getPrimaryWindow();
              if (n && !n.isDestroyed()) {
                const t = () => {
                  try {
                    if (!n.isVisible())
                      try {
                        n.showInactive();
                      } catch {
                        n.show();
                      }
                    (e.invalidatePositionCache(), e.scheduleUpdate(void 0, { animate: !0 }));
                  } catch {}
                };
                return (
                  n.webContents.isLoading()
                    ? n.webContents.once("did-finish-load", t)
                    : setTimeout(t, 0),
                  { success: !0, windowId: n.id }
                );
              }
              const r = _t(t, { showOnReady: !0 });
              return r
                ? { success: !0, windowId: r.id }
                : { success: !1, error: "Не удалось создать окно подсказки" };
            } catch (e) {
              const t =
                e instanceof Error ? e.message : "Неизвестная ошибка при создании окна подсказки";
              return (
                console.error("Ошибка при создании окна подсказки:", t),
                { success: !1, error: t }
              );
            }
          });
          const Tt = (e, t) => {
              if (Oe && !Oe.isDestroyed() && Oe.isVisible()) {
                const n = Oe.getBounds();
                if (e >= n.x && e < n.x + n.width && t >= n.y && t < n.y + n.height) return Oe;
              }
              if (Ve && !Ve.isDestroyed() && Ve.isVisible()) {
                const n = Ve.getBounds();
                if (e >= n.x && e < n.x + n.width && t >= n.y && t < n.y + n.height) return Ve;
              }
              for (const n of me) {
                if (!n.window || n.window.isDestroyed() || !n.window.isVisible()) continue;
                const r = n.window.getBounds();
                if (e >= r.x && e < r.x + r.width && t >= r.y && t < r.y + r.height)
                  return n.window;
              }
              if (ve && !ve.isDestroyed() && ve.isVisible()) {
                const n = ve.getBounds();
                if (e >= n.x && e < n.x + n.width && t >= n.y && t < n.y + n.height) return ve;
              }
              if (je && !je.isDestroyed() && je.isVisible()) {
                const n = je.getBounds();
                if (e >= n.x && e < n.x + n.width && t >= n.y && t < n.y + n.height) return je;
              }
              if (ge && !ge.isDestroyed() && ge.isVisible()) {
                const n = ge.getBounds();
                if (e >= n.x && e < n.x + n.width && t >= n.y && t < n.y + n.height) return ge;
              }
              if (he && !he.isDestroyed() && he.isVisible()) {
                const n = he.getBounds();
                if (e >= n.x && e < n.x + n.width && t >= n.y && t < n.y + n.height) return he;
              }
              if (be && !be.isDestroyed() && be.isVisible()) {
                const n = be.getBounds();
                if (e >= n.x && e < n.x + n.width && t >= n.y && t < n.y + n.height) return be;
              }
              return null;
            },
            Et = () => {
              if (!O()) return;
              Rt();
              const e = (0, I.getCursorLock)(),
                t =
                  ((_e && !_e.isDestroyed()) ||
                    ((_e = new c.BrowserWindow({
                      width: 64,
                      height: 64,
                      frame: !1,
                      transparent: !0,
                      backgroundColor: "#00000000",
                      type: "panel",
                      show: !1,
                      focusable: !1,
                      skipTaskbar: !0,
                      hasShadow: !1,
                      resizable: !1,
                      movable: !1,
                      minimizable: !1,
                      maximizable: !1,
                      fullscreenable: !1,
                      hiddenInMissionControl: !0,
                      webPreferences: {
                        nodeIntegration: !1,
                        contextIsolation: !0,
                        backgroundThrottling: !1,
                      },
                    })),
                    _e.setAlwaysOnTop(!0, "screen-saver", 2),
                    _e.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
                    _e.setIgnoreMouseEvents(!0),
                    "darwin" === process.platform &&
                      (_e.setHasShadow(!1), _e.setWindowButtonVisibility(!1)),
                    _e.setContentProtection(Q),
                    _e.loadURL(
                      `data:text/html;charset=utf-8,${encodeURIComponent('<!DOCTYPE html>\n<html><head><style>\n  * { margin: 0; padding: 0; }\n  html, body { background: rgba(0,0,0,0); overflow: hidden; }\n  svg { position: fixed; top: 0; left: 0; }\n</style></head><body>\n<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M1 1L1 19L5.5 14.5L9.5 22L12.5 20.5L8.5 13L15 13L1 1Z"\n    fill="#FFD700" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>\n</svg>\n</body></html>')}`,
                    ),
                    _e.once("ready-to-show", () => {
                      _e?.setBackgroundColor("#00000000");
                    }),
                    _e.on("closed", () => {
                      _e = null;
                    })),
                  _e),
                n = c.screen.getCursorScreenPoint();
              ((Ae = n.x), (Re = n.y), e.freezeCursor(n.x, n.y));
              let r = !1;
              e.onMouseEvent &&
                (e.onMouseEvent((e, t) => {
                  if (!Ee) return;
                  if ("mouseUp" === e) {
                    const e = we;
                    if (((we = null), e && !e.isDestroyed())) {
                      const t = e.getBounds(),
                        n = Ae - t.x,
                        r = Re - t.y;
                      e === Oe
                        ? e.webContents
                            .executeJavaScript(
                              `document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: ${n}, clientY: ${r}, button: 0 }))`,
                            )
                            .catch(() => {})
                        : e.webContents.send("virtualCursor:mouseUp", { x: n, y: r });
                    }
                    return;
                  }
                  const n = Tt(Ae, Re);
                  if (!n) return;
                  const r = n.getBounds(),
                    i = Ae - r.x,
                    o = Re - r.y;
                  "mouseDown" === e
                    ? (n === Oe
                        ? n.webContents
                            .executeJavaScript(
                              `document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: ${i}, clientY: ${o}, button: 0 }))`,
                            )
                            .catch(() => {})
                        : n.webContents.send("virtualCursor:mouseDown", { x: i, y: o }),
                      (we = n))
                    : "scroll" === e &&
                      n.webContents.send("virtualCursor:scroll", { x: i, y: o, deltaY: t ?? 0 });
                }),
                (r = e.isMouseEventCaptureActive?.() ?? !1));
              const o =
                ((s = n.x),
                (a = n.y),
                Te && !Te.isDestroyed()
                  ? (Te.setPosition(s - 25, a - 25), Te)
                  : ((Te = new c.BrowserWindow({
                      width: 50,
                      height: 50,
                      x: s - 25,
                      y: a - 25,
                      frame: !1,
                      transparent: !0,
                      backgroundColor: "#00000000",
                      type: "panel",
                      show: !1,
                      focusable: !1,
                      skipTaskbar: !0,
                      hasShadow: !1,
                      resizable: !1,
                      movable: !1,
                      minimizable: !1,
                      maximizable: !1,
                      fullscreenable: !1,
                      hiddenInMissionControl: !0,
                      webPreferences: {
                        nodeIntegration: !1,
                        contextIsolation: !0,
                        backgroundThrottling: !1,
                      },
                    })),
                    Te.setAlwaysOnTop(!0, "screen-saver", 3),
                    Te.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
                    Te.setContentProtection(Q),
                    Te.setBackgroundColor("#00000000"),
                    "darwin" === process.platform && Te.setWindowButtonVisibility(!1),
                    Te.webContents.on("console-message", (e, t, n) => {
                      if (Ee)
                        if ("__CLICK_CATCHER__:mouseDown" === n) {
                          const e = Tt(Ae, Re);
                          if (e && !e.isDestroyed()) {
                            const t = e.getBounds(),
                              n = Ae - t.x,
                              r = Re - t.y;
                            (e === Oe
                              ? e.webContents
                                  .executeJavaScript(
                                    `document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, clientX: ${n}, clientY: ${r}, button: 0 }))`,
                                  )
                                  .catch(() => {})
                              : e.webContents.send("virtualCursor:mouseDown", { x: n, y: r }),
                              (we = e));
                          }
                        } else if ("__CLICK_CATCHER__:mouseUp" === n) {
                          const e = we || Tt(Ae, Re);
                          if (((we = null), e && !e.isDestroyed())) {
                            const t = e.getBounds(),
                              n = Ae - t.x,
                              r = Re - t.y;
                            e === Oe
                              ? e.webContents
                                  .executeJavaScript(
                                    `document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: ${n}, clientY: ${r}, button: 0 }))`,
                                  )
                                  .catch(() => {})
                              : e.webContents.send("virtualCursor:mouseUp", { x: n, y: r });
                          }
                        } else if (n.startsWith("__CLICK_CATCHER__:scroll:")) {
                          const e = parseFloat(n.split(":")[2]);
                          if (!isNaN(e)) {
                            const t = Tt(Ae, Re);
                            if (t && !t.isDestroyed()) {
                              const n = t.getBounds();
                              t.webContents.send("virtualCursor:scroll", {
                                x: Ae - n.x,
                                y: Re - n.y,
                                deltaY: e,
                              });
                            }
                          }
                        }
                    }),
                    Te.loadURL(
                      `data:text/html;charset=utf-8,${encodeURIComponent("<!DOCTYPE html>\n<html><head><style>\n  * { margin: 0; padding: 0; cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/QualzQAAAABJRU5ErkJggg==') 0 0, none !important; }\n  html, body { background: transparent; overflow: hidden; width: 100%; height: 100%; cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQABNjN9GQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAA0lEQVQI12P4z8BQDwAEgAF/QualzQAAAABJRU5ErkJggg==') 0 0, none !important; }\n</style></head><body>\n<script>\n  document.addEventListener('mousedown', function(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    console.log('__CLICK_CATCHER__:mouseDown');\n  }, true);\n  document.addEventListener('mouseup', function(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    console.log('__CLICK_CATCHER__:mouseUp');\n  }, true);\n  document.addEventListener('wheel', function(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    console.log('__CLICK_CATCHER__:scroll:' + e.deltaY);\n  }, { passive: false, capture: true });\n  document.addEventListener('contextmenu', function(e) {\n    e.preventDefault();\n  });\n<\/script>\n</body></html>")}`,
                    ),
                    Te.on("closed", () => {
                      Te = null;
                    }),
                    Te));
              var s, a;
              (r
                ? ((Ie = "native-capture"), o.setIgnoreMouseEvents(!0))
                : ((Ie = "click-catcher-fallback"), o.setIgnoreMouseEvents(!1)),
                o.showInactive());
              const l = () => {
                t && !t.isDestroyed() && (t.showInactive(), i(t, Ae, Re, "virtualCursor:activate"));
              };
              (t.webContents.isLoading() ? t.once("ready-to-show", l) : l(),
                Ce && clearTimeout(Ce));
              let u = 0,
                d = null,
                p = 0,
                f = Ae,
                h = Re;
              const m = () => {
                const t = Date.now();
                if (!_e || _e.isDestroyed()) return void It();
                const n = (0, I.getCursorLock)().getMouseDelta();
                if ((e.warpToFrozenPosition?.(), 0 !== n.deltaX || 0 !== n.deltaY)) {
                  const e = t;
                  if (!d || e - p > 1e3) {
                    const t = c.screen.getDisplayNearestPoint({ x: Ae, y: Re });
                    ((d = t.bounds), (p = e));
                  }
                  const r = d;
                  ((Ae = Math.max(r.x, Math.min(Ae + n.deltaX, r.x + r.width - 1))),
                    (Re = Math.max(r.y, Math.min(Re + n.deltaY, r.y + r.height - 1))));
                  const o = Math.round(Ae),
                    s = Math.round(Re);
                  if (
                    (o !== f || s !== h) &&
                    (i(_e, o, s, "virtualCursor:poll"),
                    "win32" !== process.platform || (Oe && !Oe.isDestroyed()) || _e.moveTop(),
                    (f = o),
                    (h = s),
                    we && !we.isDestroyed())
                  ) {
                    const e = we.getBounds(),
                      t = o - e.x,
                      n = s - e.y;
                    we === Oe
                      ? we.webContents
                          .executeJavaScript(
                            `document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: ${t}, clientY: ${n} }))`,
                          )
                          .catch(() => {})
                      : we.webContents.send("virtualCursor:mouseMove", { x: t, y: n });
                  }
                }
                if ((u++, u >= 4)) {
                  u = 0;
                  const e = Tt(Ae, Re);
                  if (e && !e.isDestroyed()) {
                    const t = e.getBounds();
                    e.webContents.send("virtualCursor:hover", { x: Ae - t.x, y: Re - t.y });
                  }
                }
                const r = Math.max(1, 4 - (Date.now() - t));
                Ce = setTimeout(m, r);
              };
              (m(),
                (Ee = !0),
                me.forEach((e) => {
                  e.window &&
                    !e.window.isDestroyed() &&
                    e.window.webContents.send("virtualCursor:stateChanged", { active: !0 });
                }),
                ve &&
                  !ve.isDestroyed() &&
                  ve.webContents.send("virtualCursor:stateChanged", { active: !0 }),
                be &&
                  !be.isDestroyed() &&
                  be.webContents.send("virtualCursor:stateChanged", { active: !0 }),
                Ve &&
                  !Ve.isDestroyed() &&
                  Ve.webContents.send("virtualCursor:stateChanged", { active: !0 }),
                je &&
                  !je.isDestroyed() &&
                  je.webContents.send("virtualCursor:stateChanged", { active: !0 }),
                ge &&
                  !ge.isDestroyed() &&
                  ge.webContents.send("virtualCursor:stateChanged", { active: !0 }),
                he &&
                  !he.isDestroyed() &&
                  he.webContents.send("virtualCursor:stateChanged", { active: !0 }));
            },
            It = () => {
              Ce && (clearTimeout(Ce), (Ce = null));
              const e = (0, I.getCursorLock)();
              (e.unfreezeCursor(),
                e.removeMouseEventListener && e.removeMouseEventListener(),
                _e && !_e.isDestroyed() && _e.hide(),
                Te && !Te.isDestroyed() && Te.hide(),
                (Ee = !1),
                (Ie = "inactive"),
                (we = null),
                me.forEach((e) => {
                  e.window &&
                    !e.window.isDestroyed() &&
                    e.window.webContents.send("virtualCursor:stateChanged", { active: !1 });
                }),
                ve &&
                  !ve.isDestroyed() &&
                  ve.webContents.send("virtualCursor:stateChanged", { active: !1 }),
                be &&
                  !be.isDestroyed() &&
                  be.webContents.send("virtualCursor:stateChanged", { active: !1 }),
                Ve &&
                  !Ve.isDestroyed() &&
                  Ve.webContents.send("virtualCursor:stateChanged", { active: !1 }),
                je &&
                  !je.isDestroyed() &&
                  je.webContents.send("virtualCursor:stateChanged", { active: !1 }),
                ge &&
                  !ge.isDestroyed() &&
                  ge.webContents.send("virtualCursor:stateChanged", { active: !1 }),
                he &&
                  !he.isDestroyed() &&
                  he.webContents.send("virtualCursor:stateChanged", { active: !1 }));
            };
          (c.ipcMain.handle("transcription:open-window", async () => {
            try {
              return (
                (() => {
                  if (ve && !ve.isDestroyed()) {
                    try {
                      ve.showInactive();
                    } catch {
                      ve.show();
                    }
                    return void (Be && Be.setPrimaryWindow(ve, { reposition: !0, animate: !0 }));
                  }
                  const e = Y();
                  ((ve = new c.BrowserWindow({
                    width: Le,
                    height: xe,
                    frame: !1,
                    transparent: !0,
                    backgroundColor: "#00000000",
                    minWidth: Le,
                    maxWidth: Le,
                    minHeight: xe,
                    maxHeight: xe,
                    focusable: !1,
                    acceptFirstMouse: !0,
                    webPreferences: {
                      preload: require("path").resolve(
                        __dirname,
                        "../renderer",
                        "main_window",
                        "preload.js",
                      ),
                      nodeIntegration: !0,
                      contextIsolation: !1,
                      webSecurity: !1,
                      backgroundThrottling: !1,
                    },
                    autoHideMenuBar: !0,
                    useContentSize: !0,
                    resizable: !1,
                    show: !1,
                    skipTaskbar: e.skipTaskbar,
                    hasShadow: !1,
                    hiddenInMissionControl: !0,
                  })),
                    e.alwaysOnTop &&
                      (ve.setAlwaysOnTop(!0, "screen-saver"),
                      ve.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 })),
                    ve.setFullScreenable(!1),
                    ve.setContentProtection(Q),
                    ve.setBackgroundColor("#00000000"),
                    ve.setOpacity(1));
                  try {
                    ve.setIgnoreMouseEvents(!0, { forward: !0 });
                  } catch {}
                  ("darwin" === process.platform &&
                    (ve.setHasShadow(!1),
                    "function" == typeof ve.setWindowButtonVisibility &&
                      ve.setWindowButtonVisibility(!1)),
                    ve.loadURL(
                      `file://${require("path").resolve(__dirname, "..", "renderer", "main_window", "index.html")}#/transcription`,
                    ));
                  const t = st();
                  if (
                    (t.registerWindow(ve),
                    t.setPrimaryWindow(ve, { reposition: !0, animate: !1 }),
                    Je.get("showMainWindowOnRecording", !0))
                  )
                    try {
                      Fe.registerWindow("transcription", ve);
                    } catch (e) {
                      console.error("[VideoRecorder] Failed to register transcription:", e);
                    }
                  (ve.on("closed", () => {
                    const e = ve;
                    Be && e && Be.unregisterWindow(e);
                    try {
                      Fe.unregisterWindow("transcription");
                    } catch (e) {
                      console.error("[VideoRecorder] Failed to unregister transcription:", e);
                    }
                    ((ve = null), console.log("Окно транскрипций закрыто"));
                    const t = it(),
                      n = t.getPrimaryWindow?.();
                    n &&
                      !n.isDestroyed() &&
                      (0, E.safeSenderSend)(n, "transcription:window-closed");
                  }),
                    ve.once("ready-to-show", () => {
                      try {
                        ve?.showInactive();
                      } catch {
                        ve?.show();
                      }
                      (st().setPrimaryWindow(ve, { reposition: !0, animate: !1 }), x(ve));
                    }),
                    console.log("Создано окно транскрипций"));
                })(),
                ve
                  ? { success: !0, windowId: ve.id }
                  : { success: !1, error: "Не удалось создать окно транскрипций" }
              );
            } catch (e) {
              const t = e instanceof Error ? e.message : "Неизвестная ошибка";
              return (
                console.error("Ошибка при создании окна транскрипций:", t),
                { success: !1, error: t }
              );
            }
          }),
            c.ipcMain.handle("transcription:close-window", async () => {
              try {
                return ve && !ve.isDestroyed()
                  ? (ve.close(), { success: !0 })
                  : { success: !1, error: "Окно транскрипций не открыто" };
              } catch (e) {
                return {
                  success: !1,
                  error: e instanceof Error ? e.message : "Неизвестная ошибка",
                };
              }
            }),
            c.ipcMain.handle("transcription:clear", async () => {
              try {
                ve && !ve.isDestroyed() && (0, E.safeSenderSend)(ve, "transcription-clear");
                for (const e of me)
                  e.window &&
                    !e.window.isDestroyed() &&
                    (0, E.safeSenderSend)(e.window, "transcription-clear");
                return { success: !0 };
              } catch (e) {
                return {
                  success: !1,
                  error: e instanceof Error ? e.message : "Неизвестная ошибка",
                };
              }
            }),
            c.ipcMain.handle("transcription:is-window-open", async () => ({
              success: !0,
              isOpen: !(!ve || ve.isDestroyed()),
            })),
            c.ipcMain.handle("suggestion:update-content", async (e, t, n, r) => {
              try {
                const e = c.BrowserWindow.fromId(t);
                return !e || e.isDestroyed()
                  ? { success: !1, error: "Окно подсказки не найдено" }
                  : (it().setPrimaryWindow(e),
                    (0, E.safeSenderSend)(e, "suggestion:update", {
                      content: n,
                      streaming: r?.streaming ?? !1,
                      actionType: r?.actionType,
                      userMessage: r?.userMessage,
                      screenshot: r?.screenshot,
                    }),
                    { success: !0 });
              } catch (e) {
                const t =
                  e instanceof Error ? e.message : "Неизвестная ошибка при обновлении подсказки";
                return (
                  console.error("Ошибка при обновлении содержимого окна подсказки:", t),
                  { success: !1, error: t }
                );
              }
            }),
            c.ipcMain.handle("window:closeSuggestionWindow", (t) => {
              const n = c.BrowserWindow.fromWebContents(t.sender);
              if (n && n !== e)
                try {
                  (n.isVisible() && n.hide(), console.log("Окно подсказки скрыто через IPC"));
                } catch (e) {
                  (console.warn("Не удалось скрыть окно подсказки, выполняю close():", e),
                    n.close());
                }
              return { success: !0 };
            }),
            c.ipcMain.handle("suggestion:close-all", () => {
              try {
                return (
                  it().forEachWindow((e) => {
                    e && !e.isDestroyed() && e.close();
                  }),
                  (me = []),
                  { success: !0 }
                );
              } catch (e) {
                return (
                  console.error("Ошибка при закрытии всех окон подсказок:", e),
                  { success: !1, error: String(e) }
                );
              }
            }),
            c.ipcMain.handle("suggestion:hide-all", () => {
              try {
                return (
                  it().forEachWindow((e) => {
                    e && !e.isDestroyed() && e.isVisible() && e.hide();
                  }),
                  { success: !0 }
                );
              } catch (e) {
                return (
                  console.error("Ошибка при скрытии всех окон подсказок:", e),
                  { success: !1, error: String(e) }
                );
              }
            }),
            c.ipcMain.handle("suggestion:show", () => {
              try {
                const e = it(),
                  t = e.getPrimaryWindow();
                if (t && !t.isDestroyed()) {
                  if (!t.isVisible())
                    try {
                      t.showInactive();
                    } catch {
                      t.show();
                    }
                  return (
                    e.invalidatePositionCache(),
                    e.scheduleUpdate(void 0, { animate: !0 }),
                    { success: !0, windowId: t.id }
                  );
                }
                const n = _t(" ", { showOnReady: !0 });
                return n
                  ? { success: !0, windowId: n.id }
                  : { success: !1, error: "Не удалось создать окно подсказки" };
              } catch (e) {
                return (
                  console.error("Ошибка при показе окна подсказки:", e),
                  { success: !1, error: String(e) }
                );
              }
            }),
            c.ipcMain.handle("suggestion:toggle-visibility", (e) => {
              try {
                const t = c.BrowserWindow.fromWebContents(e.sender);
                if (!t || t.isDestroyed()) return { success: !1, error: "Окно не найдено" };
                if (t.isVisible()) return (t.hide(), { success: !0, visible: !1 });
                try {
                  t.showInactive();
                } catch {
                  t.show();
                }
                return { success: !0, visible: !0 };
              } catch (e) {
                return { success: !1, error: String(e) };
              }
            }),
            c.ipcMain.handle("suggestion:setIgnoreMouseEvents", (e, t, n) => {
              try {
                const r = c.BrowserWindow.fromWebContents(e.sender);
                return !r || r.isDestroyed()
                  ? { success: !1, error: "Окно не найдено" }
                  : (r.setIgnoreMouseEvents(!!t, n), { success: !0 });
              } catch (e) {
                return { success: !1, error: String(e) };
              }
            }),
            c.ipcMain.handle("cursorLock:isAvailable", () => ({
              available: (0, I.getCursorLock)().isAvailable(),
            })));
          const At = () => {
              if (Pe || Ee) return;
              if (!O()) return;
              const e = (0, I.getCursorLock)();
              if (!e.startCursorProtectionTap || !e.checkAccessibilityPermission?.()) return;
              let t = !1,
                n = null;
              (e.startCursorProtectionTap((e, r, i, o) => {
                if (!Pe || Ee) return !1;
                const s = Tt(r, i),
                  a = s && ((c = s), me.some((e) => e.window === c));
                var c;
                if ("mouseDown" === e) {
                  if (
                    (console.log(
                      `[CursorProtection] callback: mouseDown (${r}, ${i}), target=${s ? "found" : "null"}, isSuggestion=${a}`,
                    ),
                    s)
                  ) {
                    const e = s.getBounds();
                    console.log(
                      `[CursorProtection] window bounds: (${e.x}, ${e.y}, ${e.width}x${e.height})`,
                    );
                  }
                  if (!a || !s) return ((t = !1), (n = null), !1);
                  ((t = !0), (n = s));
                  const e = s.getBounds();
                  return (
                    s.isDestroyed() ||
                      s.webContents.send("cursorProtection:mouseDown", { x: r - e.x, y: i - e.y }),
                    !0
                  );
                }
                if ("mouseUp" === e) {
                  const e = t,
                    o = n;
                  if (((t = !1), (n = null), e && o && !o.isDestroyed())) {
                    const e = o.getBounds();
                    o.webContents.send("cursorProtection:mouseUp", { x: r - e.x, y: i - e.y });
                  }
                  return e;
                }
                if ("scroll" === e) {
                  if (!a || !s) return !1;
                  const e = s.getBounds();
                  return (
                    s.isDestroyed() ||
                      s.webContents.send("cursorProtection:scroll", {
                        x: r - e.x,
                        y: i - e.y,
                        deltaY: o ?? 0,
                      }),
                    !0
                  );
                }
                return !1;
              }),
                (Pe = !0),
                console.log(
                  "Cursor protection tap activated, accessibility:",
                  e.checkAccessibilityPermission?.(),
                ));
            },
            Rt = () => {
              if (!Pe) return;
              const e = (0, I.getCursorLock)();
              (e.stopCursorProtectionTap?.(),
                (Pe = !1),
                console.log("Cursor protection tap deactivated"));
            };
          (c.ipcMain.handle("cursorProtection:enable", () => (At(), { success: !0 })),
            c.ipcMain.handle("cursorProtection:disable", () => (Rt(), { success: !0 })),
            c.ipcMain.handle("virtualCursor:toggle", () => (Ee ? It() : Et(), { active: Ee })),
            c.ipcMain.handle("virtualCursor:isActive", () => ({ active: Ee })),
            c.ipcMain.handle("suggestion:set-opacity", (e, t) => {
              const n = Number(t);
              if (Number.isNaN(n)) return { success: !1, error: "Invalid opacity value" };
              const r = ze(n);
              if (r === De) return { success: !0, opacity: De };
              ((De = r), Je.set("suggestionOpacity", r), (He = { ...He, suggestionOpacity: r }));
              try {
                return (Ze(r), et(), { success: !0, opacity: r });
              } catch (e) {
                return (
                  console.error("Ошибка при установке прозрачности окон подсказок:", e),
                  { success: !1, error: e instanceof Error ? e.message : String(e) }
                );
              }
            }),
            c.ipcMain.handle("suggestion:get-opacity", () => ({ success: !0, opacity: De })),
            c.ipcMain.handle("screen:getDisplayList", () => {
              try {
                const { screenSelectionSettings: e } = n(65264),
                  t = c.screen.getAllDisplays(),
                  r = c.screen.getPrimaryDisplay();
                return {
                  success: !0,
                  displays: [...t]
                    .sort((e, t) => e.bounds.x - t.bounds.x)
                    .map((e, t) => ({
                      id: `screen:${t}:0`,
                      name: `Экран ${t + 1}`,
                      isPrimary: e.id === r.id,
                    })),
                  selectedDisplayId: e.getSelectedDisplayId(),
                };
              } catch (e) {
                return { success: !1, displays: [], selectedDisplayId: null };
              }
            }),
            c.ipcMain.handle("screen:getAvailableDisplays", async () => {
              try {
                const e = await c.desktopCapturer.getSources({
                    types: ["screen"],
                    thumbnailSize: { width: 160, height: 90 },
                  }),
                  { screenSelectionSettings: t } = n(65264),
                  r = c.screen.getAllDisplays(),
                  i = c.screen.getPrimaryDisplay(),
                  o = [...r].sort((e, t) => e.bounds.x - t.bounds.x);
                return {
                  success: !0,
                  displays: e.map((e, t) => {
                    const n = o[t],
                      r = n && n.id === i.id;
                    return {
                      id: e.id,
                      name: `Экран ${t + 1}`,
                      isPrimary: r,
                      thumbnail: e.thumbnail.toDataURL(),
                    };
                  }),
                  selectedDisplayId: t.getSelectedDisplayId(),
                };
              } catch (e) {
                return { success: !1, displays: [], selectedDisplayId: null };
              }
            }),
            c.ipcMain.handle("screen:getSelectedDisplay", () => {
              const { screenSelectionSettings: e } = n(65264);
              return { success: !0, displayId: e.getSelectedDisplayId() };
            }),
            c.ipcMain.handle("screen:setSelectedDisplay", (e, t) => {
              const { screenSelectionSettings: r } = n(65264);
              return (r.setSelectedDisplayId(t), { success: !0 });
            }),
            c.ipcMain.handle("window:setSuggestionWindowHeight", (t, n) => {
              const r = c.BrowserWindow.fromWebContents(t.sender);
              if (r && r !== e) {
                const e = Number(n);
                if (!Number.isFinite(e) || e < ke || e > Me)
                  return { success: !1, error: "Invalid height" };
                const t = r.getBounds(),
                  i = it().getWindowWidth() ?? t.width,
                  s = c.screen.getDisplayMatching(t),
                  a = s?.scaleFactor ?? 1,
                  l = (e) => Math.floor(e * a) / a,
                  u = {
                    x: Math.round(t.x),
                    y: Math.round(t.y),
                    width: Math.trunc(l(i)),
                    height: Math.trunc(l(e)),
                  };
                if (
                  (console.log(`Установка высоты окна подсказки до ${n} при текущей ширине ${i}`),
                  "darwin" === process.platform)
                ) {
                  console.log("Обработка изменения размера окна подсказки для macOS");
                  const e = r.isResizable();
                  (console.log(`Окно подсказки было изменяемым: ${e}`),
                    e ||
                      (r.setResizable(!0),
                      console.log(
                        "Временно включено изменение размера для окна подсказки на macOS",
                      )),
                    r.setMinimumSize(360, ke),
                    r.setMaximumSize(2400, Me),
                    o(r, u, !0, "setSuggestionWindowHeight-macOS"),
                    console.log(`Установлена новая высота окна подсказки: ${n}`));
                  const [t, i] = r.getSize();
                  (console.log(`Размеры окна подсказки после изменения: ширина ${t}, высота ${i}`),
                    setTimeout(() => {
                      if (r && !r.isDestroyed()) {
                        const [t, n] = r.getSize();
                        (console.log(`Финальные размеры окна подсказки: ширина ${t}, высота ${n}`),
                          e ||
                            (r.setResizable(!1),
                            console.log(
                              "Изменение размера отключено обратно для окна подсказки на macOS",
                            )));
                      }
                    }, 100));
                } else {
                  (r.setMinimumSize(360, ke),
                    r.setMaximumSize(2400, Me),
                    o(r, u, !0, "setSuggestionWindowHeight-others"));
                  const [e, t] = r.getSize();
                  if (!r.isResizable()) {
                    o(r, u, !0, "setSuggestionWindowHeight-others-resize");
                    const [e, t] = r.getSize();
                  }
                }
                const d = it();
                (d.setTrackedHeight(e), d.setPrimaryWindow(r, { reposition: !0, animate: !1 }));
                const p = r.__setSuggestionLockedHeight;
                "function" == typeof p && p(e);
              } else console.log("Окно подсказки не найдено или это основное окно");
              return { success: !0 };
            }));
          const Ct = new Map();
          let wt = null,
            Nt = null;
          (c.ipcMain.handle(
            "shortcuts:register",
            (t, n) =>
              new Promise((r) => {
                (wt && (clearTimeout(wt), Nt && (Nt({ success: !0, debounced: !0 }), (Nt = null))),
                  (Nt = r),
                  (wt = setTimeout(() => {
                    try {
                      (c.globalShortcut.unregisterAll(), Ct.clear());
                      const i = c.BrowserWindow.fromWebContents(t.sender);
                      console.log(
                        "Регистрация горячих клавиш из окна:",
                        i ? "Окно существует" : "Окно не найдено",
                      );
                      for (const t of n)
                        /[^\x00-\x7F]/.test(t.accelerator)
                          ? console.error(
                              `Пропускаем регистрацию горячей клавиши с non-ASCII символами: ${t.accelerator} для ${t.id}`,
                            )
                          : c.globalShortcut.register(t.accelerator, () => {
                                t.id.startsWith("move_window_")
                                  ? k(t.id)
                                  : (i &&
                                      !i.isDestroyed() &&
                                      (0, E.safeSenderSend)(i, "shortcuts:triggered", t.id),
                                    e &&
                                      e !== i &&
                                      !e.isDestroyed() &&
                                      (0, E.safeSenderSend)(e, "shortcuts:triggered", t.id),
                                    He.keystrokeOverlayEnabled &&
                                      e &&
                                      !e.isDestroyed() &&
                                      (0, E.safeSenderSend)(e, "video-recorder:keystroke", {
                                        label: t.accelerator,
                                        timestamp: Date.now(),
                                      }),
                                    ot((e) => {
                                      e !== i &&
                                        (0, E.safeSenderSend)(e, "shortcuts:triggered", t.id);
                                    }));
                              })
                            ? Ct.set(t.id, t.accelerator)
                            : console.error(
                                `Не удалось зарегистрировать горячую клавишу: ${t.accelerator} для ${t.id}`,
                              );
                      ((Nt = null), r({ success: !0, registeredCount: Ct.size }));
                    } catch (e) {
                      console.error("Ошибка при регистрации горячих клавиш:", e);
                      const t = e instanceof Error ? e.message : "Неизвестная ошибка";
                      ((Nt = null),
                        r({
                          success: !1,
                          error: `Не удалось зарегистрировать горячие клавиши: ${t}`,
                        }));
                    }
                  }, 100)));
              }),
          ),
            c.ipcMain.handle("shortcuts:unregister", () => {
              try {
                return (c.globalShortcut.unregisterAll(), Ct.clear(), { success: !0 });
              } catch (e) {
                return (
                  console.error("Ошибка при отмене регистрации горячих клавиш:", e),
                  {
                    success: !1,
                    error: `Не удалось отменить регистрацию горячих клавиш: ${e instanceof Error ? e.message : "Неизвестная ошибка"}`,
                  }
                );
              }
            }),
            c.ipcMain.handle("window:moveWindow", (t, n, r = 20) => {
              try {
                const o = c.BrowserWindow.fromWebContents(t.sender) || e;
                if (!o) return { success: !1, error: "Окно не найдено" };
                const [s, a] = o.getPosition();
                let l = s,
                  u = a;
                switch (n) {
                  case "up":
                    u = Math.max(0, a - r);
                    break;
                  case "down":
                    u = a + r;
                    break;
                  case "left":
                    l = Math.max(0, s - r);
                    break;
                  case "right":
                    l = s + r;
                }
                return (
                  i(o, l, u, "ipc-moveWindow"),
                  console.log(`Окно перемещено ${n}: (${s}, ${a}) -> (${l}, ${u})`),
                  { success: !0, position: { x: l, y: u }, direction: n, distance: r }
                );
              } catch (e) {
                return (
                  console.error("Ошибка при перемещении окна:", e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка при перемещении окна",
                  }
                );
              }
            }));
          const Ot = () => {
            try {
              (Ee && It(), Rt(), (0, I.getCursorLock)().unfreezeCursor());
            } catch {}
          };
          (process.on("exit", Ot),
            process.on("SIGTERM", Ot),
            process.on("SIGINT", Ot),
            c.app.on("will-quit", () => {
              Ot();
              try {
                Fe.forceStop();
              } catch (e) {
                console.error("[VideoRecorder] forceStop error:", e);
              }
              (pt(),
                c.globalShortcut.unregisterAll(),
                ut.destroy(),
                dt.destroy(),
                (0, _.flushSentry)());
            }),
            c.ipcMain.handle("auth:startBrowserAuth", async () => {
              try {
                (console.log("Starting browser authentication"), (te = null), (ee = !0));
                const e = c.app.getVersion(),
                  t = process.platform,
                  n = `${d.default.frontend?.authUrl || "https://shadowhint.com/auth"}?redirect_uri=ai-assistant://auth/callback&version=${encodeURIComponent(e)}&platform=${encodeURIComponent(t)}`;
                return (
                  console.log("Opening browser with auth URL:", n),
                  await c.shell.openExternal(n),
                  { success: !0, authUrl: n }
                );
              } catch (e) {
                return (
                  console.error("Browser auth error:", e),
                  (ee = !1),
                  {
                    success: !1,
                    error:
                      e instanceof Error
                        ? e.message
                        : "Ошибка при открытии браузера для авторизации",
                  }
                );
              }
            }),
            c.ipcMain.handle("auth:resetBrowserAuth", async () => {
              try {
                return (
                  console.log("Resetting browser authentication state"),
                  (ee = !1),
                  (te = null),
                  { success: !0 }
                );
              } catch (e) {
                return (
                  console.error("Error resetting browser auth state:", e),
                  {
                    success: !1,
                    error:
                      e instanceof Error ? e.message : "Ошибка при сбросе состояния авторизации",
                  }
                );
              }
            }),
            c.ipcMain.handle("auth:checkBrowserAuthStatus", async () => {
              try {
                if ((console.log("Checking browser auth status"), !ee))
                  return { success: !1, error: "Авторизация через браузер не была инициирована" };
                if (te) {
                  if (
                    ((ee = !1),
                    te.success &&
                      te.token &&
                      ((q = te.token.token), se.setAuthToken(q), K("widget"), vt(), te.user))
                  ) {
                    const e = te.user;
                    ((0, _.setSentryUser)({
                      id: e.id || "",
                      email: e.email || "",
                      name: `${e.firstName || ""} ${e.lastName || ""}`.trim() || e.email || "",
                    }),
                      (0, _.trackSentryEvent)("auth_success", {
                        method: "browser",
                        userId: e.id || "",
                      }));
                  }
                  const e = { ...te };
                  return ((te = null), e);
                }
                return { success: !1, error: "Ожидание завершения авторизации в браузере" };
              } catch (e) {
                return (
                  console.error("Error checking browser auth status:", e),
                  (ee = !1),
                  (te = null),
                  {
                    success: !1,
                    error:
                      e instanceof Error ? e.message : "Ошибка при проверке статуса авторизации",
                  }
                );
              }
            }),
            c.ipcMain.handle("auth:handleCallbackUrl", async (e, t) => {
              try {
                return (
                  console.log("Manual callback URL handling requested"),
                  mt(t),
                  { success: !0 }
                );
              } catch (e) {
                return (
                  console.error("Error handling manual callback URL:", e),
                  (0, v.isAuthError)(e) && ft(e),
                  {
                    success: !1,
                    error: e instanceof Error ? e.message : "Ошибка при обработке callback URL",
                  }
                );
              }
            }));
          const Pt = new Map();
          function kt() {
            console.log(`Cancelling ${Pt.size} active streams`);
            for (const [e, t] of Pt)
              try {
                (console.log(`Cancelling stream ${e} of type ${t.type}`),
                  t.stream && "function" == typeof t.stream.destroy && t.stream.destroy());
              } catch (t) {
                console.error(`Error cancelling stream ${e}:`, t);
              }
            Pt.clear();
          }
          function Mt(e) {
            console.log(`Cancelling streams for session ${e}`);
            const t = Array.from(Pt.entries()).filter(([t, n]) => n.sessionId === e);
            for (const [n, r] of t)
              try {
                (console.log(`Cancelling stream ${n} for session ${e}`),
                  r.stream && "function" == typeof r.stream.destroy && r.stream.destroy(),
                  Pt.delete(n));
              } catch (e) {
                console.error(`Error cancelling stream ${n}:`, e);
              }
          }
        })().catch((e) => {
          (console.error("❌ initializeApp failed:", e), c.app.quit());
        }))
      : (console.log(
          `❌ Не удалось получить блокировку - ${d.default.app.productName} уже запущен. Завершаем текущий процесс.`,
        ),
        c.app.quit()));
}

export default MainProcessWebpackModule;
