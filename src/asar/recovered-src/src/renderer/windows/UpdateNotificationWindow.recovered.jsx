/*
 * Recovered from renderer webpack module 6141.
 * Inferred module name: UpdateNotificationWindow.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 85585
 */

function UpdateNotificationWindowWebpackModule(e, t, n) {
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
    s = i(n(68329)),
    l = n(99163);
  (n(85585),
    (t.default = ({ onUpdateNow: e, onUpdateLater: t, onClose: n }) => {
      const { t: r } = (0, l.useTranslation)(),
        [o, i] = (0, s.useState)(null),
        [c, d] = (0, s.useState)(null),
        [u, p] = (0, s.useState)("available"),
        [A, g] = (0, s.useState)(null),
        [m, f] = (0, s.useState)("");
      (0, s.useEffect)(() => {
        if (
          (console.log("🔄 UpdateNotificationWindow: Инициализация компонента"),
          window.api?.updater &&
            window.api.updater
              .getVersion()
              .then((e) => {
                (console.log("📋 UpdateNotificationWindow: Текущая версия:", e), f(e));
              })
              .catch((e) => {
                console.warn(
                  `UpdateNotificationWindow: ${r("notifications.currentVersionFailed")}`,
                  e,
                );
              }),
          window.api?.updater)
        ) {
          console.log("🔗 UpdateNotificationWindow: Подписываемся на события updater");
          const e = window.api.updater.onUpdateDownloadProgress((e) => {
              (console.log("📥 UpdateNotificationWindow: Прогресс скачивания:", e),
                d(e),
                p("downloading"));
            }),
            t = window.api.updater.onUpdateDownloaded(() => {
              (console.log("✅ UpdateNotificationWindow: Скачивание завершено"),
                p("installing"),
                d(null));
            }),
            n = window.api.updater.onUpdateError((e) => {
              (console.error("❌ UpdateNotificationWindow: Ошибка обновления:", e),
                p("error"),
                g(e.message));
            });
          return () => {
            (console.log("🧹 UpdateNotificationWindow: Отписываемся от событий"),
              e?.(),
              t?.(),
              n?.());
          };
        }
        const e = (e, t) => {
            (console.log("📨 UpdateNotificationWindow: Получено IPC событие:", t),
              ((e) => {
                (console.log("📦 UpdateNotificationWindow: Получены данные:", e),
                  e.updateInfo && i(e.updateInfo),
                  e.status && p(e.status),
                  e.error && (p("error"), g(e.error)));
              })(t));
          },
          t = (e, t) => {
            (console.log("📥 UpdateNotificationWindow: Прямое событие прогресса:", t),
              d(t),
              p("downloading"));
          },
          n = (e, t) => {
            (console.log("✅ UpdateNotificationWindow: Прямое событие завершения:", t),
              p("installing"),
              d(null));
          };
        if (window.api?.ipcRenderer)
          return (
            console.log("🔗 UpdateNotificationWindow: Подписываемся на IPC события"),
            window.api.ipcRenderer.on("updateNotificationWindow:updateData", e),
            window.api.ipcRenderer.on("updater:updateDownloadProgress", t),
            window.api.ipcRenderer.on("updater:updateDownloaded", n),
            () => {
              (console.log("🧹 UpdateNotificationWindow: Отписываемся от IPC событий"),
                window.api?.ipcRenderer.removeListener("updateNotificationWindow:updateData", e),
                window.api?.ipcRenderer.removeListener("updater:updateDownloadProgress", t),
                window.api?.ipcRenderer.removeListener("updater:updateDownloaded", n));
            }
          );
      }, []);
      const h = (e) => {
          const t = Math.floor(Math.log(e) / Math.log(1024));
          return (e / Math.pow(1024, t)).toFixed(1) + " " + ["B", "KB", "MB", "GB"][t];
        },
        b = () => (c ? Math.round(c.percent) : 0);
      return (0, a.jsxs)("div", {
        className: "update-notification-window",
        children: [
          (0, a.jsxs)("div", {
            className: "update-notification-content",
            children: [
              (0, a.jsx)("div", {
                className: "update-status-header",
                children: (0, a.jsx)("span", {
                  className: "update-status-text",
                  children: (() => {
                    switch (u) {
                      case "available":
                        return r("notifications.updateAvailable");
                      case "downloading":
                        return r("notifications.updateDownloading");
                      case "installing":
                        return r("notifications.updateInstalling");
                      case "error":
                        return r("notifications.updateError");
                      default:
                        return r("notifications.updateGeneral");
                    }
                  })(),
                }),
              }),
              "available" === u &&
                o &&
                (0, a.jsxs)("div", {
                  className: "update-info",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "version-update",
                      children: [
                        (0, a.jsx)("span", {
                          className: "version-label",
                          children: r("notifications.newVersion"),
                        }),
                        (0, a.jsx)("span", { className: "version-number", children: o.version }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "update-description",
                      children: r("notifications.updateDescription"),
                    }),
                  ],
                }),
              "downloading" === u &&
                (0, a.jsx)("div", {
                  className: "download-info",
                  children: c
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "download-stats",
                            children: [
                              (0, a.jsxs)("span", {
                                className: "download-percent",
                                children: [b(), "%"],
                              }),
                              (0, a.jsxs)("span", {
                                className: "download-size",
                                children: [h(c.transferred), " / ", h(c.total)],
                              }),
                              (0, a.jsx)("span", {
                                className: "download-speed",
                                children:
                                  c.bytesPerSecond > 1048576
                                    ? `${(c.bytesPerSecond / 1024 / 1024).toFixed(1)} MB/s`
                                    : `${Math.round(c.bytesPerSecond / 1024)} KB/s`,
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "progress-bar",
                            children: (0, a.jsx)("div", {
                              className: "progress-fill",
                              style: { width: `${b()}%`, transition: "width 0.3s ease" },
                            }),
                          }),
                        ],
                      })
                    : (0, a.jsxs)("div", {
                        className: "download-initializing",
                        children: [
                          (0, a.jsx)("div", { className: "download-spinner" }),
                          (0, a.jsx)("span", { children: r("notifications.downloadInitializing") }),
                        ],
                      }),
                }),
              "installing" === u &&
                (0, a.jsx)("div", {
                  className: "install-info",
                  children: (0, a.jsx)("div", {
                    className: "install-message",
                    children: r("notifications.updateInstalled"),
                  }),
                }),
              "error" === u &&
                (0, a.jsx)("div", {
                  className: "error-info",
                  children: (0, a.jsx)("div", {
                    className: "error-message",
                    children: A || r("notifications.updateErrorGeneral"),
                  }),
                }),
            ],
          }),
          ("available" === u || "error" === u) &&
            (0, a.jsxs)("div", {
              className: "update-notification-actions",
              children: [
                (0, a.jsx)("button", {
                  className: "update-btn-primary",
                  onClick: async () => {
                    if (window.api?.updater)
                      try {
                        (p("downloading"), g(null));
                        const t = await window.api.updater.downloadUpdate();
                        t.success
                          ? e?.()
                          : (p("error"), g(t.message || r("notifications.downloadError")));
                      } catch (e) {
                        (p("error"), g(r("notifications.downloadError")));
                      }
                  },
                  disabled: "error" === u,
                  children: r("error" === u ? "notifications.retry" : "notifications.updateNow"),
                }),
                (0, a.jsx)("button", {
                  className: "update-btn-secondary",
                  onClick: () => {
                    (t?.(), "undefined" != typeof window && window.close && window.close(), n?.());
                  },
                  children: r("notifications.later"),
                }),
              ],
            }),
        ],
      });
    }));
}

export default UpdateNotificationWindowWebpackModule;
