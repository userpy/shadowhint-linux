/*
 * Recovered from renderer webpack module 77504.
 * Inferred module name: AccountSettings.
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

function AccountSettingsWebpackModule(e, t, n) {
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
      [r, o] = (0, l.useState)(null),
      [i, a] = (0, l.useState)(!0),
      [u, p] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
      (async () => {
        try {
          const e = await window.api?.auth?.getUserInfo?.();
          if (e?.success && e.userInfo) {
            const t = e.userInfo.user || e.userInfo;
            n(t.email || t.name || t.firstName || "");
          }
          const t = await window.api?.auth?.getUserSubscription?.();
          t?.success && t.data && o(t.data);
        } catch (e) {
          console.error("Failed to load account info:", e);
        } finally {
          a(!1);
        }
      })();
    }, []);
    const A = (0, l.useCallback)(async () => {
        try {
          (await window.api?.auth?.logout?.(), n(""), o(null));
        } catch (e) {
          console.error("Failed to logout:", e);
        }
        p(!1);
      }, []),
      g = (0, l.useCallback)(async () => {
        try {
          await window.api?.auth?.logout?.();
        } catch (e) {
          console.error("Failed to trigger login:", e);
        }
      }, []),
      m = (0, l.useCallback)(async () => {
        try {
          const e = await window.api?.invoke?.("config:getVariant"),
            t = e?.profileUrl || e?.webAppUrl || "https://shadowhint.com/profile";
          await window.api?.shell?.openExternal?.(t);
        } catch (e) {
          console.error("Failed to open profile:", e);
        }
      }, []),
      f = (0, l.useCallback)(async () => {
        try {
          const e = await window.api?.invoke?.("config:getVariant"),
            t = e?.websiteUrl
              ? `${e.websiteUrl}/profile/subscription`
              : "https://shadowhint.com/profile/subscription";
          await window.api?.shell?.openExternal?.(t);
        } catch (e) {
          console.error("Failed to open subscription page:", e);
        }
      }, []),
      h = !!t,
      b = r?.subscription?.plan?.name?.toLowerCase() || "",
      _ = !b || b.includes("free") || b.includes("бесплатн"),
      C = h && !_,
      E = (0, l.useMemo)(
        () => [
          e("settings.account.featureUnlimited", "Unlimited interview sessions"),
          e("settings.account.featureAI", "Instant AI answers"),
          e("settings.account.featureScreenshot", "Screenshots with analysis"),
          e("settings.account.featureSupport", "Priority support"),
        ],
        [e],
      );
    return i
      ? (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("h2", {
              className: "settings-section-title",
              children: e("settings.sections.account", "Account"),
            }),
            (0, s.jsx)("div", {
              className: "settings-loading",
              children: e("settings.loading", "Loading..."),
            }),
          ],
        })
      : h
        ? C
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("h2", {
                  className: "settings-section-title",
                  children: e("settings.sections.account", "Account"),
                }),
                (0, s.jsx)(d.default, {
                  children: (0, s.jsxs)("div", {
                    className: "account-info",
                    children: [
                      (0, s.jsx)("div", { className: "account-email", children: t }),
                      (0, s.jsx)("div", {
                        className: "account-plan",
                        children:
                          r?.subscription?.plan?.name || e("settings.account.freePlan", "Free"),
                      }),
                      r?.subscription?.endDate &&
                        (0, s.jsxs)("div", {
                          className: "account-plan",
                          style: { fontSize: 13, marginTop: 4 },
                          children: [
                            e("settings.account.until", "Until"),
                            ": ",
                            new Date(r.subscription.endDate).toLocaleDateString("ru-RU", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }),
                            ", ",
                            new Date(r.subscription.endDate).toLocaleTimeString("ru-RU", {
                              hour: "2-digit",
                              minute: "2-digit",
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                (0, s.jsx)(d.default, {
                  children: u
                    ? (0, s.jsxs)("div", {
                        className: "account-actions-row",
                        children: [
                          (0, s.jsx)("span", {
                            style: { fontSize: 13, color: "#999" },
                            children: e(
                              "settings.account.logoutConfirm",
                              "Are you sure you want to log out?",
                            ),
                          }),
                          (0, s.jsx)("button", {
                            className: "settings-btn settings-btn-danger",
                            onClick: A,
                            type: "button",
                            style: { padding: "4px 12px", fontSize: 13 },
                            children: e("settings.account.confirmLogout", "Log out"),
                          }),
                          (0, s.jsx)("button", {
                            className: "settings-btn settings-btn-secondary",
                            onClick: () => p(!1),
                            type: "button",
                            style: { padding: "4px 12px", fontSize: 13 },
                            children: e("common.cancel", "Cancel"),
                          }),
                        ],
                      })
                    : (0, s.jsxs)("div", {
                        className: "account-actions-row",
                        children: [
                          (0, s.jsx)("button", {
                            className: "settings-btn settings-btn-secondary",
                            onClick: m,
                            type: "button",
                            children: e("settings.account.openProfile", "Open profile"),
                          }),
                          (0, s.jsx)("button", {
                            className: "settings-btn settings-btn-danger",
                            onClick: () => p(!0),
                            type: "button",
                            children: e("settings.account.logout", "Log out"),
                          }),
                        ],
                      }),
                }),
              ],
            })
          : (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("h2", {
                  className: "settings-section-title",
                  children: e("settings.sections.account", "Account"),
                }),
                (0, s.jsx)(d.default, {
                  children: (0, s.jsxs)("div", {
                    className: "account-info",
                    children: [
                      (0, s.jsx)("div", { className: "account-email", children: t }),
                      (0, s.jsx)("div", {
                        className: "account-plan",
                        children:
                          r?.subscription?.plan?.name || e("settings.account.freePlan", "Free"),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(d.default, {
                  children: (0, s.jsxs)("div", {
                    className: "account-card",
                    children: [
                      (0, s.jsx)("div", {
                        className: "account-card-header",
                        children: (0, s.jsx)("h3", {
                          children: e("settings.account.upgradeTitle", "ShadowHint without limits"),
                        }),
                      }),
                      (0, s.jsx)("p", {
                        className: "account-card-description",
                        children: e(
                          "settings.account.upgradeDescription",
                          "Subscribe to use all features without restrictions.",
                        ),
                      }),
                      (0, s.jsx)("ul", {
                        className: "account-feature-list",
                        children: E.map((e, t) => (0, s.jsx)("li", { children: e }, t)),
                      }),
                      (0, s.jsx)("div", {
                        className: "account-card-actions",
                        children: (0, s.jsx)("button", {
                          className: "account-upgrade-btn",
                          onClick: f,
                          type: "button",
                          children: e("settings.account.buySubscription", "Buy subscription"),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(d.default, {
                  children: u
                    ? (0, s.jsxs)("div", {
                        className: "account-actions-row",
                        children: [
                          (0, s.jsx)("span", {
                            style: { fontSize: 13, color: "#999" },
                            children: e(
                              "settings.account.logoutConfirm",
                              "Are you sure you want to log out?",
                            ),
                          }),
                          (0, s.jsx)("button", {
                            className: "settings-btn settings-btn-danger",
                            onClick: A,
                            type: "button",
                            style: { padding: "4px 12px", fontSize: 13 },
                            children: e("settings.account.confirmLogout", "Log out"),
                          }),
                          (0, s.jsx)("button", {
                            className: "settings-btn settings-btn-secondary",
                            onClick: () => p(!1),
                            type: "button",
                            style: { padding: "4px 12px", fontSize: 13 },
                            children: e("common.cancel", "Cancel"),
                          }),
                        ],
                      })
                    : (0, s.jsxs)("div", {
                        className: "account-actions-row",
                        children: [
                          (0, s.jsx)("button", {
                            className: "settings-btn settings-btn-secondary",
                            onClick: m,
                            type: "button",
                            children: e("settings.account.openProfile", "Open profile"),
                          }),
                          (0, s.jsx)("button", {
                            className: "settings-btn settings-btn-danger",
                            onClick: () => p(!0),
                            type: "button",
                            children: e("settings.account.logout", "Log out"),
                          }),
                        ],
                      }),
                }),
              ],
            })
        : (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("h2", {
                className: "settings-section-title",
                children: e("settings.sections.account", "Account"),
              }),
              (0, s.jsx)(d.default, {
                children: (0, s.jsxs)("div", {
                  className: "account-card",
                  children: [
                    (0, s.jsx)("div", {
                      className: "account-card-header",
                      children: (0, s.jsx)("h3", {
                        children: e("settings.account.loginTitle", "Sign in to your account"),
                      }),
                    }),
                    (0, s.jsx)("p", {
                      className: "account-card-description",
                      children: e(
                        "settings.account.loginDescription",
                        "Sign in to access all ShadowHint features.",
                      ),
                    }),
                    (0, s.jsx)("div", {
                      className: "account-card-actions",
                      children: (0, s.jsx)("button", {
                        className: "account-login-btn",
                        onClick: g,
                        type: "button",
                        children: e("settings.account.loginButton", "Sign in"),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
  };
}

export default AccountSettingsWebpackModule;
