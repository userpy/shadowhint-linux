/*
 * Recovered from renderer webpack module 66856.
 * Inferred module name: StatsigService.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 59134
 */

function StatsigServiceWebpackModule(e, t, n) {
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
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.captureReplayEvent =
      t.startReplaySession =
      t.captureSentryReplayError =
      t.trackSentryReplayEvent =
      t.setSentryReplayUser =
      t.initSentryReplay =
      t.getSentryReplayConfig =
        void 0));
  const a = i(n(59134));
  t.getSentryReplayConfig = () => ({
    dsn:
      "MISSING_ENV_VAR".SENTRY_DSN || "http://d94e52461bf110bb92ee62993de6519e@5.129.238.94:9000/2",
    environment: "production",
    replaysSessionSampleRate: "MISSING_ENV_VAR".SENTRY_REPLAY_SESSION_SAMPLE_RATE
      ? parseFloat("MISSING_ENV_VAR".SENTRY_REPLAY_SESSION_SAMPLE_RATE)
      : 1,
    replaysOnErrorSampleRate: "MISSING_ENV_VAR".SENTRY_REPLAY_ERROR_SAMPLE_RATE
      ? parseFloat("MISSING_ENV_VAR".SENTRY_REPLAY_ERROR_SAMPLE_RATE)
      : 1,
    enabled: "false" !== "MISSING_ENV_VAR".SENTRY_ENABLED,
  });
  let s = !1;
  t.initSentryReplay = () => {
    const e = (0, t.getSentryReplayConfig)();
    if (e.enabled) {
      if (!s)
        try {
          (a.init({
            dsn: e.dsn,
            environment: e.environment,
            replaysSessionSampleRate: e.replaysSessionSampleRate,
            replaysOnErrorSampleRate: e.replaysOnErrorSampleRate,
            integrations: [
              a.replayIntegration({
                maskAllText: !1,
                blockAllMedia: !1,
                maskAllInputs: !1,
                networkDetailAllowUrls: [/.*/],
                networkCaptureBodies: !0,
                networkRequestHeaders: ["*"],
                networkResponseHeaders: ["*"],
              }),
            ],
            tracesSampleRate: "development" === e.environment ? 1 : 0.1,
            beforeSend: (t) => (
              "development" === e.environment && console.log("Sentry Renderer Event:", t),
              t
            ),
            maxBreadcrumbs: 50,
            attachStacktrace: !0,
          }),
            a.setContext("app", {
              name: "ShadowHint",
              version: "MISSING_ENV_VAR".npm_package_version || "1.0.0",
              process: "renderer",
            }),
            a.setContext("device", {
              platform: process.platform,
              arch: process.arch,
              electron_version: process.versions.electron,
              chrome_version: process.versions.chrome,
              node_version: process.versions.node,
            }),
            (s = !0),
            console.log("Sentry Renderer с Session Replay инициализирован"),
            "development" === e.environment &&
              a.addBreadcrumb({
                message: "ShadowHint Renderer процесс запущен",
                level: "info",
                category: "app.lifecycle",
              }),
            l());
        } catch (e) {
          console.error("Ошибка инициализации Sentry Renderer:", e);
        }
    } else console.log("Sentry Replay отключен через переменную окружения");
  };
  const l = () => {
    try {
      const e = window.api;
      e &&
        e.on &&
        e.on("sentry:metrics", (e, t) => {
          t &&
            a.addBreadcrumb({
              message: `Metrics: RSS ${t.rss_mb}MB, Heap ${t.heap_used_mb}/${t.heap_total_mb}MB, CPU user ${t.user_ms}ms sys ${t.system_ms}ms, ${t.processCount} procs`,
              level: "info",
              category: "performance.metrics",
              data: t,
            });
        });
    } catch {}
  };
  ((t.setSentryReplayUser = (e) => {
    try {
      (a.setUser({ id: e.id, email: e.email, username: e.name || e.email, ip_address: "{{auto}}" }),
        a.setContext("app", {
          name: "ShadowHint",
          version: "MISSING_ENV_VAR".npm_package_version || "1.0.0",
          process: "renderer",
        }),
        a.setContext("user_info", {
          platform: e.platform || "electron",
          authenticated_at: new Date().toISOString(),
        }),
        a.addBreadcrumb({
          message: "Пользователь аутентифицирован в renderer",
          level: "info",
          category: "auth",
          data: { userId: e.id },
        }));
    } catch (e) {
      console.error("Ошибка установки пользователя Sentry Renderer:", e);
    }
  }),
    (t.trackSentryReplayEvent = (e, t) => {
      try {
        (a.addBreadcrumb({ message: e, level: "info", category: "user.interaction", data: t }),
          ["page_view", "button_click", "session_started", "session_completed"].includes(e) &&
            a.captureMessage(e, {
              level: "info",
              extra: t,
              tags: { component: t?.component || "unknown", action: t?.action || e },
            }));
      } catch (e) {
        console.error("Ошибка трекинга события Sentry Renderer:", e);
      }
    }),
    (t.captureSentryReplayError = (e, t) => {
      try {
        t
          ? a.withScope((n) => {
              (Object.keys(t).forEach((e) => {
                n.setExtra(e, t[e]);
              }),
                n.setTag("error_boundary", t.component || "unknown"),
                n.setContext("ui_state", {
                  url: window.location.href,
                  timestamp: new Date().toISOString(),
                }),
                a.captureException(e));
            })
          : a.captureException(e);
      } catch (e) {
        console.error("Ошибка отправки ошибки в Sentry Renderer:", e);
      }
    }),
    (t.startReplaySession = () => {
      try {
        a.addBreadcrumb({
          message: "Manual replay session started",
          level: "info",
          category: "replay.session",
        });
      } catch (e) {
        console.error("Ошибка старта replay сессии:", e);
      }
    }),
    (t.captureReplayEvent = (e, t) => {
      try {
        a.captureMessage(e, { level: "info", extra: t, tags: { replay_event: "true" } });
      } catch (e) {
        console.error("Ошибка отправки replay события:", e);
      }
    }),
    (t.default = {
      init: t.initSentryReplay,
      setUser: t.setSentryReplayUser,
      trackEvent: t.trackSentryReplayEvent,
      captureError: t.captureSentryReplayError,
      startSession: t.startReplaySession,
      captureEvent: t.captureReplayEvent,
    }));
}

export default StatsigServiceWebpackModule;
