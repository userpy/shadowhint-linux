/*
 * Recovered from main webpack module 15739.
 * Inferred module name: UpdaterService.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 56910
 * - 84157 (electron)
 * - 12124 (SendToWindow)
 * - 16798
 * - 79896 (fs)
 * - 16928 (path)
 * - 66012 (ElectronStoreBridge)
 * - 38741 (DisguiseService)
 * - 75374 (ShortcutManager)
 */

function UpdaterServiceWebpackModule(e, t, n) {
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
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(56910),
    a = n(84157),
    c = n(12124),
    l = (n(16798), o(n(79896))),
    u = o(n(16928));
  let d = null;
  t.default = class {
    constructor() {
      ((this.mainWindow = null),
        (this.periodicCheckTimer = null),
        (this.updateConfig = {
          enabled: !0,
          checkInterval: 60,
          updateServerUrl: "https://api.shadowhint.com",
        }),
        this.createAppUpdateYmlIfNeeded(),
        this.setupAutoUpdater(),
        this.setupIpcHandlers());
    }
    createAppUpdateYmlIfNeeded() {
      try {
        const e = "app-update.yml",
          t = a.app.getAppPath(),
          n = u.dirname(t),
          r = u.join(n, e);
        if (l.existsSync(r)) console.log(`📋 Файл ${e} уже существует: ${r}`);
        else {
          console.log(`📝 Файл ${e} не найден, создаем: ${r}`);
          const t = `provider: generic\nurl: ${this.updateConfig.updateServerUrl}/api/updates\nchannel: latest`,
            n = u.dirname(r);
          (l.existsSync(n) || l.mkdirSync(n, { recursive: !0 }),
            l.writeFileSync(r, t, "utf8"),
            console.log(`✅ Файл ${e} успешно создан`));
        }
      } catch (e) {
        console.error("❌ Ошибка при создании файла конфигурации автообновления:", e);
      }
    }
    setupAutoUpdater() {
      (console.log("🔧 Настройка автообновления:", {
        platform: process.platform,
        arch: process.arch,
        electronVersion: process.versions.electron,
        nodeVersion: process.versions.node,
      }),
        s.autoUpdater.setFeedURL({
          provider: "generic",
          url: `${this.updateConfig.updateServerUrl}/api/updates`,
          channel: "latest",
        }),
        (s.autoUpdater.autoDownload = !1),
        (s.autoUpdater.autoInstallOnAppQuit = !1),
        (s.autoUpdater.disableWebInstaller = !0),
        (s.autoUpdater.allowPrerelease = !1),
        (s.autoUpdater.allowDowngrade = !0),
        (s.autoUpdater.forceDevUpdateConfig = !0),
        (s.autoUpdater.verifyUpdateCodeSignature = (e, t) => (
          console.log("⚠️ Проверка подписи отключена для dev/test среды"),
          console.log(`📦 Путь к файлу: ${t}`),
          console.log(`👤 Издатель: ${e.join(", ")}`),
          Promise.resolve(null)
        )),
        s.autoUpdater.on("checking-for-update", () => {
          (console.log("🔍 Проверка наличия обновлений..."),
            this.sendToRenderer("updater:updateChecking"));
        }),
        s.autoUpdater.on("update-available", (e) => {
          (console.log("✅ Доступно обновление:", e.version),
            console.log("📋 Информация об обновлении:", {
              version: e.version,
              releaseDate: e.releaseDate,
              releaseName: e.releaseName,
              files: e.files?.length || 0,
            }),
            d &&
              d.showWindow({
                updateInfo: {
                  version: e.version,
                  releaseDate: e.releaseDate,
                  releaseName: e.releaseName,
                  releaseNotes: e.releaseNotes,
                },
                status: "available",
              }),
            this.sendToRenderer("updater:updateAvailable", {
              version: e.version,
              releaseDate: e.releaseDate,
              releaseName: e.releaseName,
            }));
        }),
        s.autoUpdater.on("update-not-available", () => {
          (console.log("ℹ️ Обновления не найдены"),
            this.sendToRenderer("updater:updateNotAvailable"));
        }),
        s.autoUpdater.on("error", (e) => {
          if (
            (console.error("❌ Ошибка автообновления:", e),
            console.error("🔍 Детали ошибки:", {
              message: e.message,
              name: e.name,
              stack: e.stack?.split("").slice(0, 3).join(""),
            }),
            e.message?.includes("not signed") || e.message?.includes("not digitally signed"))
          )
            return (
              console.warn("⚠️ Предупреждение: Обновление не подписано цифровой подписью"),
              console.log("💡 Совет: Для production необходимо настроить подпись кода Windows"),
              d &&
                d.isWindowVisible() &&
                d.updateWindowData({
                  status: "error",
                  error:
                    "Обновление не может быть установлено автоматически из-за отсутствия цифровой подписи. Пожалуйста, скачайте и установите обновление вручную.",
                }),
              void this.sendToRenderer("updater:signatureError", {
                message: "Обновление не подписано цифровой подписью",
                updateServerUrl: this.updateConfig.updateServerUrl,
              })
            );
          (e.message?.includes("ENOENT") &&
          (e.message?.includes("app-update.yml") || e.message?.includes("dev-app-update.yml"))
            ? (console.log(
                "🔄 Пробуем пересоздать файл конфигурации автообновления и повторить попытку",
              ),
              this.createAppUpdateYmlIfNeeded(),
              setTimeout(() => {
                this.checkForUpdates();
              }, 2e3))
            : d &&
              d.isWindowVisible() &&
              d.updateWindowData({
                status: "error",
                error: e.message || "Произошла ошибка при обновлении",
              }),
            this.sendToRenderer("updater:updateError", {
              message: e.message,
              stack: e.stack,
              name: e.name,
              updateServerUrl: this.updateConfig.updateServerUrl,
            }));
        }),
        s.autoUpdater.on("download-progress", (e) => {
          const t = {
            percent: Math.round(e.percent),
            bytesPerSecond: e.bytesPerSecond,
            transferred: e.transferred,
            total: e.total,
          };
          if (
            (console.log(
              `📥 Скачивание: ${t.percent}% (${Math.round(t.bytesPerSecond / 1024)} KB/s)`,
            ),
            console.log("📊 Данные прогресса:", t),
            this.sendToRenderer("updater:updateDownloadProgress", t),
            d && d.getWindow)
          ) {
            const e = d.getWindow();
            e &&
              !e.isDestroyed() &&
              (d.cancelAutoClose && d.cancelAutoClose(),
              d.updateWindowData({ status: "downloading", downloadProgress: t }));
          }
        }),
        s.autoUpdater.on("update-downloaded", (e) => {
          (console.log("✅ Обновление скачано:", e.version),
            console.log("🔄 Автоматический перезапуск через 3 секунды..."),
            this.sendToRenderer("updater:updateDownloaded", { version: e.version }),
            setTimeout(async () => {
              try {
                const e = new (n(66012))({ name: "settings" }),
                  t = e.get("disguise.presetId", "default");
                if (t && "default" !== t) {
                  const { restoreOriginal: t } = n(38741),
                    { restoreShortcutFromDisguise: r } = n(75374),
                    i = e.get("disguise.originalExePath"),
                    o = e.get("disguise.newExePath");
                  (o && i && r(o, i), await t(i));
                }
              } catch (e) {
                console.error("[Updater] Failed to restore original before update:", e);
              }
              s.autoUpdater.quitAndInstall(!0, !0);
            }, 3e3));
        }));
    }
    setupIpcHandlers() {
      (a.ipcMain.handle("updater:checkForUpdates", async () => {
        if (!this.updateConfig.enabled)
          return { success: !1, message: "Автообновление отключено в режиме разработки" };
        try {
          const e = await s.autoUpdater.checkForUpdates();
          return { success: !0, updateInfo: e?.updateInfo };
        } catch (e) {
          return (
            console.error("Ошибка проверки обновлений:", e),
            { success: !1, message: e instanceof Error ? e.message : "Неизвестная ошибка" }
          );
        }
      }),
        a.ipcMain.handle("updater:downloadUpdate", async () => {
          try {
            return (await s.autoUpdater.downloadUpdate(), { success: !0 });
          } catch (e) {
            return (
              console.error("Ошибка скачивания обновления:", e),
              { success: !1, message: e instanceof Error ? e.message : "Неизвестная ошибка" }
            );
          }
        }),
        a.ipcMain.handle("updater:quitAndInstall", async () => {
          try {
            const e = new (n(66012))({ name: "settings" }),
              t = e.get("disguise.presetId", "default");
            if (t && "default" !== t) {
              const { restoreOriginal: t } = n(38741),
                { restoreShortcutFromDisguise: r } = n(75374),
                i = e.get("disguise.originalExePath"),
                o = e.get("disguise.newExePath");
              (o && i && r(o, i), await t(i));
            }
          } catch (e) {
            console.error("[Updater] Failed to restore original before update:", e);
          }
          s.autoUpdater.quitAndInstall(!0, !0);
        }),
        a.ipcMain.handle("updater:getVersion", () => a.app.getVersion()),
        a.ipcMain.handle(
          "updater:setEnabled",
          (e, t) => (
            (this.updateConfig.enabled = t),
            t && this.updateConfig.checkInterval > 0
              ? this.startPeriodicCheck()
              : this.stopPeriodicCheck(),
            { success: !0, enabled: this.updateConfig.enabled }
          ),
        ),
        a.ipcMain.handle(
          "updater:setCheckInterval",
          (e, t) => (
            (this.updateConfig.checkInterval = t),
            this.updateConfig.enabled &&
              t > 0 &&
              (this.stopPeriodicCheck(), this.startPeriodicCheck()),
            { success: !0, interval: this.updateConfig.checkInterval }
          ),
        ),
        a.ipcMain.handle("updater:testServer", async () => {
          try {
            return await this.testUpdateServer();
          } catch (e) {
            return (
              console.error("Ошибка тестирования сервера обновлений:", e),
              {
                success: !1,
                message:
                  e instanceof Error ? e.message : "Неизвестная ошибка при тестировании сервера",
              }
            );
          }
        }),
        a.ipcMain.handle("updater:getDiagnostics", () => {
          const e = "darwin" === process.platform ? "universal" : process.arch;
          return {
            platform: process.platform,
            actualArch: process.arch,
            targetArch: e,
            electronVersion: process.versions.electron,
            updateServerUrl: this.updateConfig.updateServerUrl,
            enabled: this.updateConfig.enabled,
          };
        }));
    }
    setMainWindow(e) {
      this.mainWindow = e;
    }
    setUpdateNotificationWindow(e) {
      d = e;
    }
    sendToRenderer(e, t) {
      if (((0, c.safeSenderSend)(this.mainWindow, e, t), d && d.getWindow)) {
        const n = d.getWindow();
        (0, c.safeSenderSend)(n, e, t);
      }
    }
    async checkForUpdates() {
      if (this.updateConfig.enabled)
        try {
          const e = "darwin" === process.platform ? "universal" : process.arch;
          (console.log(
            `🔍 Проверка обновлений на сервере: ${this.updateConfig.updateServerUrl}/api/updates/latest.yml (platform: ${process.platform}, target arch: ${e})`,
          ),
            "darwin" === process.platform &&
              console.log(
                "🍎 macOS обнаружена, сервер автоматически будет использовать universal архитектуру через latest-mac.yml",
              ),
            await s.autoUpdater.checkForUpdates());
        } catch (e) {
          (console.error("❌ Ошибка автоматической проверки обновлений:", e),
            e instanceof Error &&
              (e.message.includes("YAML")
                ? console.error("🔧 Возможная проблема с форматом YAML файла на сервере обновлений")
                : e.message.includes("net::") &&
                  console.error("🌐 Проблема с сетевым подключением к серверу обновлений")));
        }
    }
    async testUpdateServer() {
      try {
        const e = `${this.updateConfig.updateServerUrl}/api/updates/latest.yml`;
        console.log(`🧪 Тестирование соединения с сервером обновлений: ${e}`);
        const { net: t } = n(84157);
        return new Promise((n) => {
          const r = t.request(e);
          (r.on("response", (e) => {
            if (
              (console.log(`📡 Ответ сервера: ${e.statusCode} ${e.statusMessage}`),
              200 === e.statusCode)
            ) {
              let t = "";
              (e.on("data", (e) => {
                t += e.toString();
              }),
                e.on("end", () => {
                  (console.log(`📄 Первые 200 символов ответа: ${t.substring(0, 200)}...`),
                    n({ success: !0, message: `Сервер доступен. Статус: ${e.statusCode}` }));
                }));
            } else
              n({
                success: !1,
                message: `Сервер вернул ошибку: ${e.statusCode} ${e.statusMessage}`,
              });
          }),
            r.on("error", (e) => {
              (console.error("🔌 Ошибка соединения с сервером:", e),
                n({ success: !1, message: `Ошибка соединения: ${e.message}` }));
            }),
            r.end());
        });
      } catch (e) {
        return (
          console.error("⚠️ Ошибка при тестировании сервера:", e),
          {
            success: !1,
            message: `Ошибка тестирования: ${e instanceof Error ? e.message : "Неизвестная ошибка"}`,
          }
        );
      }
    }
    startPeriodicCheck() {
      (this.periodicCheckTimer && clearInterval(this.periodicCheckTimer),
        setTimeout(() => {
          this.checkForUpdates();
        }, 1e4),
        (this.periodicCheckTimer = setInterval(
          () => {
            this.checkForUpdates();
          },
          60 * this.updateConfig.checkInterval * 1e3,
        )));
    }
    stopPeriodicCheck() {
      this.periodicCheckTimer &&
        (clearInterval(this.periodicCheckTimer), (this.periodicCheckTimer = null));
    }
    init() {
      this.updateConfig.enabled
        ? (this.startPeriodicCheck(), console.log("🚀 Автообновление инициализировано"))
        : console.log("ℹ️ Автообновление отключено (режим разработки)");
    }
    destroy() {
      this.stopPeriodicCheck();
    }
  };
}

export default UpdaterServiceWebpackModule;
