/*
 * Recovered from renderer webpack module 46193.
 * Inferred module name: SessionRow.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 2941 (SessionDates)
 */

function SessionRowWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285),
    i = (r(n(68329)), n(99163)),
    a = n(2941);
  t.default = ({ session: e, onClick: t }) => {
    const { t: n } = (0, i.useTranslation)(),
      r = (0, a.formatDuration)(e.startTime, e.endTime),
      s = ((e) => {
        if (!e) return "";
        const t = new Date(e);
        return `${t.getHours().toString().padStart(2, "0")}:${t.getMinutes().toString().padStart(2, "0")}`;
      })(e.startTime);
    return (0, o.jsxs)("div", {
      className: "session-row",
      onClick: t,
      children: [
        (0, o.jsx)("span", {
          className: "session-row-title",
          children: e.title || n("sessions.untitled"),
        }),
        (0, o.jsxs)("div", {
          className: "session-row-meta",
          children: [
            r && (0, o.jsx)("span", { className: "session-row-duration", children: r }),
            s && (0, o.jsx)("span", { className: "session-row-time", children: s }),
          ],
        }),
      ],
    });
  };
}

export default SessionRowWebpackModule;
