/*
 * Recovered from renderer webpack module 89402.
 * Inferred module name: AboutSettings.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 55099 (SettingsGroup)
 */

function AboutSettingsWebpackModule(e, t, n) {
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
      },
    a =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const s = n(40285),
    l = i(n(68329)),
    c = n(99163),
    d = a(n(55099));
  t.default = () => {
    const { t: e } = (0, c.useTranslation)(),
      [t, n] = (0, l.useState)(""),
      [r, o] = (0, l.useState)(""),
      [i, a] = (0, l.useState)(""),
      [u, p] = (0, l.useState)("idle"),
      [A, g] = (0, l.useState)("");
    (0, l.useEffect)(() => {
      (async () => {
        try {
          const e = await window.api?.updater?.getVersion?.();
          e && n(e);
        } catch {}
        try {
          const e = await window.api?.invoke?.("config:getVariant");
          e &&
            (e.telegramChannel && o(e.telegramChannel), e.telegramSupport && a(e.telegramSupport));
        } catch {}
      })();
    }, []);
    const m = (0, l.useCallback)(async () => {
        p("checking");
        try {
          const e = await window.api?.updater?.checkForUpdates?.();
          e?.updateInfo ? (p("available"), g(e.updateInfo.version)) : p("not_available");
        } catch {
          p("error");
        }
      }, []),
      f = (0, l.useCallback)(async (e) => {
        try {
          await window.api?.shell?.openExternal?.(e);
        } catch (e) {
          console.error("Failed to open link:", e);
        }
      }, []);
    return (0, s.jsxs)("div", {
      children: [
        (0, s.jsx)("h2", {
          className: "settings-section-title",
          children: e("settings.sections.about", "About"),
        }),
        (0, s.jsxs)(d.default, {
          children: [
            (0, s.jsx)("div", { className: "about-version", children: t ? `v${t}` : "ShadowHint" }),
            (0, s.jsxs)("div", {
              style: { marginTop: 12 },
              children: [
                (0, s.jsx)("button", {
                  className: "settings-btn settings-btn-primary",
                  onClick: m,
                  disabled: "checking" === u,
                  type: "button",
                  children:
                    "checking" === u
                      ? e("settings.about.checking", "Checking...")
                      : e("settings.about.checkUpdates", "Check for updates"),
                }),
                "available" === u &&
                  (0, s.jsxs)("div", {
                    style: { marginTop: 8, fontSize: 13, color: "#bb86fc" },
                    children: [e("settings.about.updateAvailable", "Update available"), ": v", A],
                  }),
                "not_available" === u &&
                  (0, s.jsx)("div", {
                    style: { marginTop: 8, fontSize: 13, color: "#999" },
                    children: e("settings.about.upToDate", "You are using the latest version"),
                  }),
                "error" === u &&
                  (0, s.jsx)("div", {
                    style: { marginTop: 8, fontSize: 13, color: "#ff6b6b" },
                    children: e("settings.about.updateError", "Failed to check for updates"),
                  }),
              ],
            }),
          ],
        }),
        (r || i) &&
          (0, s.jsx)(d.default, {
            title: e("settings.about.linksGroup", "Links"),
            children: (0, s.jsxs)("div", {
              className: "about-links",
              children: [
                r &&
                  (0, s.jsxs)("button", {
                    className: "settings-link",
                    onClick: () => f(r),
                    type: "button",
                    style: {
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      padding: 0,
                      cursor: "pointer",
                    },
                    children: ["Telegram ", e("settings.about.channel", "Channel")],
                  }),
                i &&
                  (0, s.jsxs)("button", {
                    className: "settings-link",
                    onClick: () => f(i),
                    type: "button",
                    style: {
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      padding: 0,
                      cursor: "pointer",
                    },
                    children: ["Telegram ", e("settings.about.support", "Support")],
                  }),
              ],
            }),
          }),
      ],
    });
  };
}

export default AboutSettingsWebpackModule;
