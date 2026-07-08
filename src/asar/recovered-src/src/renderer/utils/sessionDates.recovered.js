/*
 * Recovered from renderer webpack module 2941.
 * Inferred module name: SessionDates.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - none detected
 */

function SessionDatesWebpackModule(e, t) {
  "use strict";
  function n(e, t) {
    return (
      e.getFullYear() === t.getFullYear() &&
      e.getMonth() === t.getMonth() &&
      e.getDate() === t.getDate()
    );
  }
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.formatDuration = t.formatTime = t.groupSessionsByDate = void 0),
    (t.groupSessionsByDate = function (e, t) {
      const r = {};
      return (
        [...e]
          .sort((e, t) => {
            const n = e.createdAt ? new Date(e.createdAt).getTime() : 0;
            return (t.createdAt ? new Date(t.createdAt).getTime() : 0) - n;
          })
          .forEach((e) => {
            const o = (function (e, t) {
              const r = new Date(),
                o = new Date(r);
              return (
                o.setDate(o.getDate() - 1),
                n(e, r)
                  ? t("sessions.today")
                  : n(e, o)
                    ? t("sessions.yesterday")
                    : e.toLocaleDateString(void 0, {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: e.getFullYear() !== r.getFullYear() ? "numeric" : void 0,
                      })
              );
            })(e.createdAt ? new Date(e.createdAt) : new Date(), t);
            (r[o] || (r[o] = []), r[o].push(e));
          }),
        r
      );
    }),
    (t.formatTime = function (e) {
      return e
        ? ("string" == typeof e ? new Date(e) : e).toLocaleTimeString(void 0, {
            hour: "2-digit",
            minute: "2-digit",
            hour12: !1,
          })
        : "";
    }),
    (t.formatDuration = function (e, t) {
      if (!e || !t) return null;
      const n = "string" == typeof e ? new Date(e) : e,
        r = ("string" == typeof t ? new Date(t) : t).getTime() - n.getTime();
      if (r < 0) return null;
      const o = Math.floor(r / 1e3),
        i = Math.floor(o / 60),
        a = Math.floor(i / 60),
        s = i % 60;
      return 0 === i ? (o % 60) + "s" : 0 === a ? `${s}m` : `${a}h ${s}m`;
    }));
}

export default SessionDatesWebpackModule;
