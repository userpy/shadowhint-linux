/*
 * Recovered from main webpack module 59963.
 * Inferred module name: SentryMain.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 17292
 * - 72031
 * - 84157 (electron)
 * - 58611 (http)
 * - 87016 (url)
 * - 21325
 */

function SentryMainWebpackModule(e, t, n) {
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
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.flushSentry =
      t.updateConsoleWrapper =
      t.wrapConsoleMethods =
      t.captureSentryError =
      t.trackSentryEvent =
      t.setSentryUser =
      t.stopMetrics =
      t.initSentryMain =
      t.getSentryConfig =
        void 0));
  const s = o(n(17292)),
    a = n(72031),
    c = n(84157),
    l = o(n(58611)),
    u = n(87016);
  let d = null;
  try {
    const e = n(21325);
    d = e.nodeProfilingIntegration;
  } catch {
    console.log("Sentry Profiling: @sentry/profiling-node не найден, профилирование отключено");
  }
  t.getSentryConfig = () => ({
    dsn:
      "MISSING_ENV_VAR".SENTRY_DSN || "http://d94e52461bf110bb92ee62993de6519e@5.129.238.94:9000/2",
    environment: "production",
    sampleRate: "MISSING_ENV_VAR".SENTRY_SAMPLE_RATE
      ? parseFloat("MISSING_ENV_VAR".SENTRY_SAMPLE_RATE)
      : 0.1,
    enabled: "false" !== "MISSING_ENV_VAR".SENTRY_ENABLED,
  });
  let p = null,
    f = null;
  t.initSentryMain = () => {
    const e = (0, t.getSentryConfig)();
    if (e.enabled)
      try {
        const t = [];
        (d && (t.push(d()), console.log("Sentry Profiling: интеграция подключена")),
          s.init({
            dsn: e.dsn,
            environment: e.environment,
            sampleRate: e.sampleRate,
            integrations: t,
            transport: (e) =>
              (0, a.createTransport)(
                e,
                (t) =>
                  new Promise((n, r) => {
                    const i = new u.URL(e.url),
                      o = l.request(
                        {
                          method: "POST",
                          hostname: i.hostname,
                          port: parseInt(i.port, 10) || 9e3,
                          path: `${i.pathname}${i.search}`,
                          protocol: i.protocol,
                          headers: { "Content-Type": "application/x-sentry-envelope" },
                        },
                        (e) => {
                          (e.on("data", () => {}),
                            e.on("end", () => {
                              n({
                                statusCode: e.statusCode,
                                headers: {
                                  "retry-after": e.headers["retry-after"] || null,
                                  "x-sentry-rate-limits": e.headers["x-sentry-rate-limits"] || null,
                                },
                              });
                            }));
                        },
                      );
                    (o.on("error", r), o.write(t.body), o.end());
                  }),
              ),
            beforeSend: (t) => (
              "development" === e.environment && console.log("Sentry Main Event:", t),
              t
            ),
            maxBreadcrumbs: 50,
            attachStacktrace: !0,
            tracesSampleRate: "development" === e.environment ? 1 : 0.1,
            profilesSampleRate: d ? ("development" === e.environment ? 1 : 0.1) : 0,
          }),
          s.setContext("app", {
            name: "ShadowHint",
            version: "MISSING_ENV_VAR".npm_package_version || "1.0.0",
            process: "main",
          }),
          console.log("Sentry Main процесс инициализирован"),
          "development" === e.environment &&
            s.addBreadcrumb({
              message: "ShadowHint Main процесс запущен",
              level: "info",
              category: "app.lifecycle",
            }),
          h());
      } catch (e) {
        console.error("Ошибка инициализации Sentry Main:", e);
      }
    else console.log("Sentry отключен через переменную окружения");
  };
  const h = () => {
    p && clearInterval(p);
    const e = () => {
      try {
        const e = process.memoryUsage(),
          t = {
            rss_mb: Math.round((e.rss / 1024 / 1024) * 100) / 100,
            heap_used_mb: Math.round((e.heapUsed / 1024 / 1024) * 100) / 100,
            heap_total_mb: Math.round((e.heapTotal / 1024 / 1024) * 100) / 100,
            external_mb: Math.round((e.external / 1024 / 1024) * 100) / 100,
            array_buffers_mb: Math.round((e.arrayBuffers / 1024 / 1024) * 100) / 100,
          };
        s.setContext("memory", t);
        const n = process.cpuUsage();
        let r;
        ((r = f
          ? {
              user_ms: Math.round((n.user - f.user) / 1e3),
              system_ms: Math.round((n.system - f.system) / 1e3),
            }
          : { user_ms: 0, system_ms: 0 }),
          (f = { user: n.user, system: n.system }),
          s.setContext("cpu", r));
        let i = { count: 0 },
          o = null,
          a = 0;
        try {
          const e = c.app.getAppMetrics();
          i = {
            count: e.length,
            processes: e.map((e) => ({
              pid: e.pid,
              type: e.type,
              cpuPercent: (100 * e.cpu.percentCPUUsage).toFixed(1),
              memoryMB: e.memory ? (e.memory.workingSetSize / 1024).toFixed(1) : "N/A",
            })),
          };
          const t = e.find((e) => "Browser" === e.type);
          (t && (o = Math.round(100 * t.cpu.percentCPUUsage * 100) / 100),
            (a = Math.round(600 * e.reduce((e, t) => e + t.cpu.percentCPUUsage, 0))));
        } catch {}
        s.setContext("processes", i);
        try {
          s.startSpan({ name: "system.metrics", op: "metrics.collect" }, () => {
            (s.setMeasurement("memory_rss_mb", t.rss_mb, "none"),
              s.setMeasurement("memory_heap_used_mb", t.heap_used_mb, "none"),
              s.setMeasurement("memory_heap_total_mb", t.heap_total_mb, "none"),
              s.setMeasurement("memory_external_mb", t.external_mb, "none"),
              s.setMeasurement("memory_array_buffers_mb", t.array_buffers_mb, "none"),
              s.setMeasurement("cpu_user_ms", r.user_ms, "none"),
              s.setMeasurement("cpu_system_ms", r.system_ms, "none"),
              null !== o && s.setMeasurement("cpu_percent", o, "none"),
              s.setMeasurement("cpu_total_ms", a, "none"),
              s.setMeasurement("processes_count", i.count, "none"));
          });
        } catch {}
        s.addBreadcrumb({
          message: `Metrics: RSS ${t.rss_mb}MB, Heap ${t.heap_used_mb}/${t.heap_total_mb}MB, CPU user ${r.user_ms}ms sys ${r.system_ms}ms, ${i.count} processes`,
          level: "info",
          category: "performance.metrics",
          data: { ...t, ...r, processCount: i.count },
        });
        const l = { ...t, ...r, processCount: i.count };
        for (const e of c.BrowserWindow.getAllWindows())
          try {
            e.webContents &&
              !e.webContents.isDestroyed() &&
              e.webContents.send("sentry:metrics", l);
          } catch {}
      } catch {}
    };
    (e(), (p = setInterval(e, 6e4)));
  };
  ((t.stopMetrics = () => {
    (p && (clearInterval(p), (p = null)), (f = null));
  }),
    (t.setSentryUser = (e) => {
      try {
        (s.setUser({ id: e.id, email: e.email, username: e.name || e.email }),
          s.addBreadcrumb({
            message: "Пользователь аутентифицирован",
            level: "info",
            category: "auth",
            data: { userId: e.id },
          }));
      } catch (e) {
        console.error("Ошибка установки пользователя Sentry:", e);
      }
    }),
    (t.trackSentryEvent = (e, t) => {
      try {
        (s.addBreadcrumb({ message: e, level: "info", category: "user.action", data: t }),
          ["session_started", "session_completed", "auth_success", "error"].includes(e) &&
            s.captureMessage(e, { level: "error" === e ? "error" : "info", extra: t }));
      } catch (e) {
        console.error("Ошибка трекинга события Sentry:", e);
      }
    }),
    (t.captureSentryError = (e, t) => {
      try {
        t
          ? s.withScope((n) => {
              (Object.keys(t).forEach((e) => {
                n.setExtra(e, t[e]);
              }),
                s.captureException(e));
            })
          : s.captureException(e);
      } catch (e) {
        console.error("Ошибка отправки ошибки в Sentry:", e);
      }
    }),
    (t.wrapConsoleMethods = () => {}),
    (t.updateConsoleWrapper = (e) => {}),
    (t.flushSentry = async (e = 2e3) => {
      try {
        return ((0, t.stopMetrics)(), await s.flush(e));
      } catch {
        return !1;
      }
    }),
    (t.default = {
      init: t.initSentryMain,
      setUser: t.setSentryUser,
      trackEvent: t.trackSentryEvent,
      captureError: t.captureSentryError,
    }));
}

export default SentryMainWebpackModule;
