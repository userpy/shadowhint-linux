/*
 * Recovered from renderer webpack module 65356.
 * Inferred module name: AnalyticsService.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 93197 (StatsigClient)
 */

function AnalyticsServiceWebpackModule(e, t, n) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.setUserContext =
      t.trackPageViewEvent =
      t.trackButtonClick =
      t.trackFeature =
      t.trackUI =
      t.trackSettings =
      t.trackInterview =
      t.trackNavigation =
      t.trackAuth =
      t.eventTracker =
      t.EventTracker =
        void 0));
  const r = n(93197);
  class o {
    constructor() {
      this.userContext = {};
    }
    static getInstance() {
      return (o.instance || (o.instance = new o()), o.instance);
    }
    setUserContext(e) {
      if (((this.userContext = { ...this.userContext, ...e }), e.id)) {
        const t = {
          platform: e.platform || "electron",
          environment: "production",
          app_variant: "shadowhint",
        };
        ("MISSING_ENV_VAR".npm_package_version &&
          (t.app_version = "MISSING_ENV_VAR".npm_package_version),
          void 0 !== e.limitSeconds && (t.limit_seconds = String(e.limitSeconds)),
          void 0 !== e.usageSeconds && (t.usage_seconds = String(e.usageSeconds)),
          (0, r.setStatsigUser)({ userID: String(e.id), email: e.email, custom: t }));
      }
    }
    track(e, t) {
      const n = `${e.category}_${e.action}`,
        o = {
          ...e,
          ...t,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          platform: "electron",
          version: "MISSING_ENV_VAR".npm_package_version || "1.0.0",
          environment: "production",
        };
      (console.log(`📊 Tracking event: ${n}`, o),
        (0, r.logStatsigEvent)(n, void 0, { ...o, ...this.userContext }));
    }
    trackAuth(e, t) {
      this.track({ category: "auth", action: e, ...t });
    }
    trackNavigation(e, t, n) {
      this.track({ category: "navigation", action: e, page: t, ...n });
    }
    trackInterview(e, t) {
      this.track({ category: "interview", action: e, ...t });
    }
    trackSettings(e, t) {
      this.track({ category: "settings", action: e, ...t });
    }
    trackUI(e, t, n) {
      this.track({ category: "ui", action: e, element: t, ...n });
    }
    trackFeature(e, t, n) {
      this.track({ category: "feature", action: e, feature: t, ...n });
    }
    trackButtonClick(e, t) {
      this.trackUI("button_clicked", e, { context: t });
    }
    trackPageView(e, t) {
      this.trackNavigation("page_view", e, { from: t });
    }
    trackError(e, t, n) {
      const r = { category: e, action: "error", error: t, context: n };
      ("feature" === e
        ? (r.feature = "unknown")
        : "ui" === e
          ? (r.element = "unknown")
          : "navigation" === e && (r.page = "unknown"),
        this.track(r));
    }
  }
  ((t.EventTracker = o),
    (t.eventTracker = o.getInstance()),
    (t.trackAuth = (e, n) => t.eventTracker.trackAuth(e, n)),
    (t.trackNavigation = (e, n, r) => t.eventTracker.trackNavigation(e, n, r)),
    (t.trackInterview = (e, n) => t.eventTracker.trackInterview(e, n)),
    (t.trackSettings = (e, n) => t.eventTracker.trackSettings(e, n)),
    (t.trackUI = (e, n, r) => t.eventTracker.trackUI(e, n, r)),
    (t.trackFeature = (e, n, r) => t.eventTracker.trackFeature(e, n, r)),
    (t.trackButtonClick = (e, n) => t.eventTracker.trackButtonClick(e, n)),
    (t.trackPageViewEvent = (e, n) => t.eventTracker.trackPageView(e, n)),
    (t.setUserContext = (e) => t.eventTracker.setUserContext(e)),
    (t.default = t.eventTracker));
}

export default AnalyticsServiceWebpackModule;
