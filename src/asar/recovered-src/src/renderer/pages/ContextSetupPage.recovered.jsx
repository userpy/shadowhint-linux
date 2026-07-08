/*
 * Recovered from renderer webpack module 73807.
 * Inferred module name: ContextSetupPage.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 65356 (AnalyticsService)
 * - 59345
 * - 44150
 */

function ContextSetupPageWebpackModule(e, t, n) {
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
    l = n(99163),
    c = n(65356);
  (n(59345),
    n(44150),
    (t.default = ({ onComplete: e, onCancel: t }) => {
      const { t: n } = (0, l.useTranslation)(),
        [r, o] = (0, s.useState)(null),
        [i, d] = (0, s.useState)(""),
        [u, p] = (0, s.useState)(!1),
        [A, g] = (0, s.useState)(!1),
        [m, f] = (0, s.useState)(null);
      (0, s.useEffect)(() => {
        h().then(() => {
          b();
        });
      }, []);
      const h = async () => {
          try {
            const e = localStorage.getItem("token");
            if (e) {
              const t = JSON.parse(e);
              t && t.token && (await window.api.context.setAuthToken(t.token));
            }
          } catch (e) {
            console.error(n("contextSetup.authTokenError"), e);
          }
        },
        b = async () => {
          try {
            p(!0);
            const e = await window.api.context.getUserContext();
            e.success
              ? e.context &&
                (o({ fileId: e.context.fileId || "", fileName: e.context.fileName || "" }),
                e.context.text && d(e.context.text))
              : console.error(n("contextSetup.loadContextError"), e.error);
          } catch (e) {
            console.error(n("contextSetup.loadContextError"), e);
          } finally {
            p(!1);
          }
        },
        _ = async () => {
          (0, c.trackUI)("button_clicked", "save_context", { value: String(i.length) });
          try {
            if ((p(!0), g(!1), f(null), !i.trim()))
              return void f(n("contextSetup.emptyContextError"));
            const e = await window.api.context.setUserContext(i);
            if (!e.success) throw new Error(e.error || n("contextSetup.saveError"));
            (g(!0),
              e.context &&
                o({
                  fileId: e.context.fileId || "",
                  fileName: e.context.fileName || "user-context.txt",
                }),
              setTimeout(() => g(!1), 3e3));
          } catch (e) {
            (console.error("Error saving context:", e),
              f(e instanceof Error ? e.message : n("contextSetup.saveError")));
          } finally {
            p(!1);
          }
        };
      return (0, a.jsxs)("div", {
        className: "device-setup-container",
        children: [
          (0, a.jsx)("h2", { children: n("contextSetup.title") }),
          u &&
            (0, a.jsxs)("div", {
              className: "loading-overlay",
              children: [
                (0, a.jsx)("div", { className: "loading-spinner" }),
                (0, a.jsx)("span", { children: n("common.loading") }),
              ],
            }),
          (0, a.jsx)("div", {
            className: "setup-content",
            children: (0, a.jsxs)("div", {
              className: "setup-section",
              children: [
                A &&
                  (0, a.jsxs)("div", {
                    className: "success-message",
                    children: [
                      (0, a.jsx)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: (0, a.jsx)("path", {
                          d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
                        }),
                      }),
                      (0, a.jsx)("span", { children: n("contextSetup.saveSuccess") }),
                    ],
                  }),
                m &&
                  (0, a.jsxs)("div", {
                    className: "error-message",
                    children: [
                      (0, a.jsx)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: (0, a.jsx)("path", {
                          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
                        }),
                      }),
                      (0, a.jsx)("span", { children: m }),
                    ],
                  }),
                (0, a.jsxs)("div", {
                  className: "context-text-section",
                  children: [
                    (0, a.jsx)("label", {
                      htmlFor: "context-textarea",
                      children: n("contextSetup.textAreaLabel"),
                    }),
                    (0, a.jsx)("textarea", {
                      id: "context-textarea",
                      value: i,
                      onChange: (e) => {
                        const t = e.target.value;
                        t.length <= 5e3 && (d(t), f(null));
                      },
                      placeholder: n("contextSetup.textAreaPlaceholder"),
                      className: "context-textarea",
                      rows: 8,
                      disabled: u,
                    }),
                    (0, a.jsxs)("div", {
                      className: "char-counter",
                      children: [i.length, " / ", 5e3],
                    }),
                    i.trim() &&
                      (0, a.jsx)("button", {
                        type: "button",
                        className: "button button-primary save-context-button",
                        onClick: _,
                        disabled: u || 0 === i.length,
                        children: n("contextSetup.saveContext"),
                      }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "context-web-card",
                  children: (0, a.jsxs)("button", {
                    type: "button",
                    className: "button button-secondary button-with-icon",
                    onClick: async () => {
                      (0, c.trackUI)("button_clicked", "upload_context_via_web", {
                        context: "context_setup",
                      });
                      try {
                        const e = await window.api.invoke("config:getVariant"),
                          t = `${(e?.websiteUrl || "https://shadowhint.com").replace(/\/$/, "")}/profile/context`;
                        if (window.api?.shell?.openExternal) {
                          const e = await window.api.shell.openExternal(t);
                          e.success || console.error("Failed to open external URL:", e.error);
                        }
                      } catch (e) {
                        console.error("Error opening external URL:", e);
                      }
                    },
                    children: [
                      (0, a.jsx)("span", { children: n("contextSetup.uploadFilesThroughWeb") }),
                      (0, a.jsx)("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: (0, a.jsx)("path", {
                          d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, a.jsxs)("div", {
            className: "button-group",
            children: [
              t &&
                (0, a.jsx)("button", {
                  className: "button button-secondary",
                  onClick: t,
                  disabled: u,
                  children: n("common.back"),
                }),
              (0, a.jsx)("button", {
                className: "button button-primary",
                onClick: () => {
                  i.trim() && !r?.fileId
                    ? _()
                        .then(() => {
                          e();
                        })
                        .catch(() => {
                          e();
                        })
                    : e();
                },
                disabled: u,
                children: n("common.next"),
              }),
            ],
          }),
        ],
      });
    }));
}

export default ContextSetupPageWebpackModule;
