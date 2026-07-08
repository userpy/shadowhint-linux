/*
 * Recovered from renderer webpack module 93197.
 * Inferred module name: StatsigClient.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 3517
 * - 19827
 * - 36510
 */

function StatsigClientWebpackModule(e, t, n) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.flushStatsig =
      t.logStatsigEvent =
      t.setStatsigUser =
      t.initStatsig =
      t.isStatsigEnabled =
        void 0));
  const r = n(3517),
    o = n(19827),
    i = n(36510),
    a = {
      shadowhint: "client-uozvOYQ3Ym61E6Nq0x9mSJGKth2OFdmEqgdUh1VQn8D",
      deskhint: "client-Kbe3kiEJaKGnhUW69zOzm2GOuR1KkIiPlcQz2KSW79g",
      exameasy: "client-B2HB4oEQbbGlIr1MkTYmmzXaPrAJiWPANV8DB0D0dH1",
      psykit: "client-ytreibkEigum78NhoQqaqPpJj7oVRxq3ta04TPXut1Q",
    },
    s = "false" !== "MISSING_ENV_VAR".STATSIG_SESSION_REPLAY_ENABLED,
    l = "undefined" != typeof window && "undefined" != typeof document;
  let c = null,
    d = null,
    u = null;
  const p = async () => {
      if (!l) return null;
      const e = await (async () => {
        if (u) return u;
        try {
          if (window.api?.invoke) {
            const e = await window.api.invoke("config:getVariant");
            if (e?.statsigClientKey) return ((u = e.statsigClientKey), u);
            if (e?.variant && a[e.variant]) return ((u = a[e.variant]), u);
          }
        } catch {}
        return ((u = a.shadowhint), u);
      })();
      if (!e) return null;
      if (!c) {
        const t = [new o.StatsigAutoCapturePlugin()];
        (s && t.push(new i.StatsigSessionReplayPlugin()),
          (c = new r.StatsigClient(e, {}, { plugins: t, environment: { tier: "production" } })));
      }
      return c;
    },
    A = (e) => {
      if (null == e) return null;
      if ("string" == typeof e) return e;
      if ("number" == typeof e || "boolean" == typeof e) return String(e);
      if (Array.isArray(e)) {
        const t = e.map(A).filter((e) => null != e);
        return t.length ? t.join(",") : null;
      }
      return null;
    };
  ((t.isStatsigEnabled = () => l),
    (t.initStatsig = async () => {
      const e = await p();
      e &&
        (d ||
          (d = e
            .initializeAsync({ timeoutMs: 3e3 })
            .then(() => {})
            .catch((e) => {
              console.warn("Statsig initializeAsync failed:", e);
            })),
        await d);
    }),
    (t.setStatsigUser = async (e) => {
      const n = await p();
      if (n) {
        await (0, t.initStatsig)();
        try {
          await n.updateUserAsync(e);
        } catch (e) {
          console.warn("Statsig updateUserAsync failed:", e);
        }
      }
    }),
    (t.logStatsigEvent = (e, n, r) => {
      (async () => {
        const o = await p();
        if (o) {
          await (0, t.initStatsig)();
          try {
            o.logEvent(
              e,
              n,
              ((e) => {
                if (!e) return;
                const t = {};
                for (const [n, r] of Object.entries(e)) {
                  const e = A(r);
                  null != e && (t[n] = e.length > 200 ? e.slice(0, 200) : e);
                }
                return Object.keys(t).length ? t : void 0;
              })(r),
            );
          } catch (e) {
            console.warn("Statsig logEvent failed:", e);
          }
        }
      })();
    }),
    (t.flushStatsig = () => {
      (async () => {
        const e = await p();
        if (e)
          try {
            await e.flush();
          } catch (e) {
            console.warn("Statsig flush failed:", e);
          }
      })();
    }));
}

export default StatsigClientWebpackModule;
