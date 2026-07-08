/*
 * Recovered from renderer webpack module 52939.
 * Inferred module name: GeneralSettings.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 55099 (SettingsGroup)
 * - 97432 (SettingsToggle)
 * - 62531 (SettingsSlider)
 * - 69682
 */

function GeneralSettingsWebpackModule(e, t, n) {
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
    d = a(n(55099)),
    u = a(n(97432)),
    p = a(n(62531)),
    A = a(n(69682));
  t.default = ({ settings: e, onSettingChange: t }) => {
    const { t: n } = (0, c.useTranslation)(),
      r = navigator.userAgent.includes("Windows"),
      [o, i] = (0, l.useState)([]),
      [a, g] = (0, l.useState)("default"),
      [m, f] = (0, l.useState)(!1),
      [h, b] = (0, l.useState)(!1),
      [_, C] = (0, l.useState)(""),
      [E, y] = (0, l.useState)(""),
      [v, S] = (0, l.useState)(null),
      [x, w] = (0, l.useState)(null);
    ((0, l.useEffect)(() => {
      r &&
        Promise.all([window.api?.disguise?.getPresets?.(), window.api?.disguise?.getCurrent?.()])
          .then(([e, t]) => {
            (e && i(e),
              t &&
                (g(t.presetId),
                "custom" === t.presetId &&
                  t.custom &&
                  (C(t.custom.name), y(t.custom.company), b(!0))));
          })
          .catch(() => {});
    }, [r]),
      (0, l.useEffect)(() => {
        r &&
          (async () => {
            try {
              const e = await window.api?.auth?.getUserSubscription?.();
              if (e?.success && e.data) {
                const t = e.data.subscription?.plan?.name?.toLowerCase() || "",
                  n = !t || t.includes("free") || t.includes("бесплатн");
                w(!n);
              } else w(!1);
            } catch {
              w(!1);
            }
          })();
      }, []));
    const k = (0, l.useCallback)(async (e) => {
        f(!0);
        try {
          const t = await window.api?.disguise?.apply?.(e);
          if (!t?.success) {
            const e = t?.error || "Unknown error";
            (console.error("Disguise apply failed:", e), alert("Error: " + e), f(!1));
          }
        } catch (e) {
          (console.error("Disguise apply error:", e),
            alert("Error: " + (e instanceof Error ? e.message : String(e))),
            f(!1));
        }
      }, []),
      T = (0, l.useCallback)(async () => {
        if (_.trim()) {
          f(!0);
          try {
            const e = { name: _, company: E };
            v && (e.iconPath = v);
            const t = await window.api?.disguise?.apply?.("custom", e);
            if (!t?.success) {
              const e = t?.error || "Unknown error";
              (console.error("Custom disguise apply failed:", e), alert("Error: " + e), f(!1));
            }
          } catch (e) {
            (console.error("Custom disguise apply error:", e),
              alert("Error: " + (e instanceof Error ? e.message : String(e))),
              f(!1));
          }
        }
      }, [_, E, v]),
      B = (0, l.useCallback)(async () => {
        f(!0);
        try {
          const e = await window.api?.disguise?.remove?.();
          if (!e?.success) {
            const t = e?.error || "Unknown error";
            (console.error("Disguise remove failed:", t), alert("Error: " + t), f(!1));
          }
        } catch (e) {
          (console.error("Disguise remove error:", e),
            alert("Error: " + (e instanceof Error ? e.message : String(e))),
            f(!1));
        }
      }, []),
      I = (0, l.useCallback)(async () => {
        try {
          const e = await window.api?.disguise?.pickIcon?.();
          e?.success && e.iconPath && S(e.iconPath);
        } catch (e) {
          console.error("Pick icon error:", e);
        }
      }, []);
    return (0, s.jsxs)("div", {
      children: [
        (0, s.jsx)("h2", {
          className: "settings-section-title",
          children: n("settings.sections.general", "General"),
        }),
        (0, s.jsx)(d.default, {
          title: n("settings.general.languageGroup", "Language"),
          children: (0, s.jsx)(A.default, {
            className: "compact",
            disableI18n: !0,
            value: e.language,
            onChange: (e) => {
              (window.api?.auth?.setLanguage &&
                window.api.auth.setLanguage(e).catch((e) => {
                  console.error("Failed to set language:", e);
                }),
                window.api?.ipcRenderer?.send &&
                  window.api.ipcRenderer.send("language:changed", e));
            },
          }),
        }),
        (0, s.jsxs)(d.default, {
          title: n("settings.general.appearanceGroup", "Appearance"),
          children: [
            (0, s.jsx)(u.default, {
              label: n("settings.general.contentProtection", "Content protection"),
              description: n(
                "settings.general.contentProtectionDesc",
                "Hide the application from screen sharing and screenshots",
              ),
              checked: e.contentProtectionEnabled,
              onChange: (e) => {
                t("contentProtectionEnabled", e);
              },
            }),
            (0, s.jsx)(u.default, {
              label: n("settings.general.cursorProtection"),
              description: n("settings.general.cursorProtectionDesc"),
              checked: e.cursorProtectionEnabled,
              onChange: (e) => t("cursorProtectionEnabled", e),
            }),
            (0, s.jsx)(p.default, {
              label: n("settings.general.suggestionOpacity", "Suggestion opacity"),
              value: e.suggestionOpacity,
              min: 40,
              max: 100,
              step: 5,
              onChange: (e) => {
                t("suggestionOpacity", e);
              },
              formatValue: (e) => `${e}%`,
            }),
          ],
        }),
        (0, s.jsxs)(d.default, {
          title: n("settings.general.behaviorGroup", "Behavior"),
          children: [
            (0, s.jsx)(u.default, {
              label: n("settings.general.autoDetection", "Auto detection"),
              description: n(
                "settings.general.autoDetectionDesc",
                "Automatically detect questions and generate suggestions",
              ),
              checked: e.autoDetectionEnabled,
              onChange: (e) => {
                (t("autoDetectionEnabled", e),
                  window.api?.settings?.setAutoDetectionEnabled?.(e)?.catch((e) => {
                    console.error("Failed to set auto detection:", e);
                  }));
              },
            }),
            (0, s.jsx)(u.default, {
              label: n("settings.general.defaultSmartModel", "Smart model by default"),
              description: n(
                "settings.general.defaultSmartModelDesc",
                "Use the advanced model by default. Can be toggled per request.",
              ),
              checked: e.defaultSmartModel,
              onChange: (e) => t("defaultSmartModel", e),
            }),
            (0, s.jsx)(u.default, {
              label: n("settings.general.knowledgeBase", "Knowledge base"),
              description: n(
                "settings.general.knowledgeBaseDesc",
                "Use uploaded documents to improve AI responses",
              ),
              checked: e.ragEnabled,
              onChange: (e) => t("ragEnabled", e),
            }),
          ],
        }),
        o.length > 0 &&
          (() => {
            const e = !r || !x,
              t = r ? (x ? null : "subscription") : "platform";
            return (0, s.jsx)(d.default, {
              title: n("settings.general.disguiseGroup", "Process Disguise"),
              children: (0, s.jsxs)("div", {
                className: "settings-disguise-wrapper",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "settings-disguise-content" +
                      (e ? " settings-disguise-content--blocked" : ""),
                    children: [
                      (0, s.jsx)("div", {
                        className: "settings-disguise-description",
                        children: n(
                          "settings.general.disguiseDesc",
                          "Change process name and icon in Windows Task Manager",
                        ),
                      }),
                      (0, s.jsxs)("div", {
                        className: "settings-disguise-presets",
                        children: [
                          o.map((e) => {
                            const t = e.id === a;
                            return (0, s.jsxs)(
                              "button",
                              {
                                type: "button",
                                className: "settings-disguise-preset" + (t ? " active" : ""),
                                disabled: m,
                                onClick: () => {
                                  t || ("default" === e.id ? B() : k(e.id));
                                },
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "settings-disguise-preset-name",
                                    children: e.name,
                                  }),
                                  (0, s.jsx)("span", {
                                    className: "settings-disguise-preset-company",
                                    children: e.company,
                                  }),
                                  t &&
                                    (0, s.jsx)("span", {
                                      className: "settings-disguise-preset-badge",
                                      children: n("settings.general.disguiseActive", "Active"),
                                    }),
                                ],
                              },
                              e.id,
                            );
                          }),
                          (0, s.jsxs)("button", {
                            type: "button",
                            className: `settings-disguise-preset settings-disguise-preset--custom${"custom" === a ? " active" : ""}${h ? " expanded" : ""}`,
                            disabled: m,
                            onClick: () => {
                              b(!h);
                            },
                            children: [
                              (0, s.jsx)("span", {
                                className: "settings-disguise-preset-name",
                                children:
                                  "custom" === a
                                    ? _
                                    : n("settings.general.disguiseCustom", "Custom"),
                              }),
                              (0, s.jsx)("span", {
                                className: "settings-disguise-preset-company",
                                children:
                                  "custom" === a
                                    ? E
                                    : n(
                                        "settings.general.disguiseCustomDesc",
                                        "Set your own process name",
                                      ),
                              }),
                              "custom" === a &&
                                (0, s.jsx)("span", {
                                  className: "settings-disguise-preset-badge",
                                  children: n("settings.general.disguiseActive", "Active"),
                                }),
                            ],
                          }),
                        ],
                      }),
                      h &&
                        (0, s.jsxs)("div", {
                          className: "settings-disguise-custom-form",
                          children: [
                            (0, s.jsxs)("label", {
                              className: "settings-disguise-custom-label",
                              children: [
                                n("settings.general.disguiseCustomName", "Process name"),
                                (0, s.jsx)("input", {
                                  type: "text",
                                  className: "settings-disguise-custom-input",
                                  placeholder: "e.g., notepad.exe",
                                  value: _,
                                  onChange: (e) => C(e.target.value),
                                  disabled: m,
                                  maxLength: 100,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("label", {
                              className: "settings-disguise-custom-label",
                              children: [
                                n("settings.general.disguiseCustomCompany", "Company"),
                                (0, s.jsx)("input", {
                                  type: "text",
                                  className: "settings-disguise-custom-input",
                                  placeholder: "e.g., Microsoft Corporation",
                                  value: E,
                                  onChange: (e) => y(e.target.value),
                                  disabled: m,
                                  maxLength: 100,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "settings-disguise-icon-picker",
                              children: [
                                (0, s.jsx)("button", {
                                  type: "button",
                                  className: "settings-disguise-icon-picker-btn",
                                  disabled: m,
                                  onClick: I,
                                  children: n("settings.general.disguisePickIcon", "Choose icon"),
                                }),
                                (0, s.jsx)("span", {
                                  className: "settings-disguise-icon-picker-status",
                                  children: v
                                    ? v.split(/[\\/]/).pop()
                                    : n("settings.general.disguiseNoIcon", "No icon selected"),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "settings-disguise-custom-actions",
                              children: [
                                (0, s.jsx)("button", {
                                  type: "button",
                                  className: "settings-disguise-custom-apply",
                                  disabled: m || !_.trim(),
                                  onClick: T,
                                  children: n("settings.general.disguiseCustomApply", "Apply"),
                                }),
                                (0, s.jsx)("button", {
                                  type: "button",
                                  className: "settings-disguise-custom-cancel",
                                  disabled: m,
                                  onClick: () => {
                                    (b(!1), C(""), y(""), S(null));
                                  },
                                  children: n("settings.general.disguiseCustomCancel", "Cancel"),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  e &&
                    (0, s.jsxs)("div", {
                      className: "settings-disguise-overlay",
                      children: [
                        (0, s.jsx)("div", {
                          className: "settings-disguise-overlay-text",
                          children:
                            "platform" === t
                              ? n(
                                  "settings.general.disguiseBlockedPlatform",
                                  "This feature is only available on Windows",
                                )
                              : n(
                                  "settings.general.disguiseBlockedSubscription",
                                  "This feature is available for subscribers only",
                                ),
                        }),
                        "subscription" === t &&
                          (0, s.jsx)("button", {
                            className: "settings-disguise-subscribe-btn",
                            onClick: () => {
                              window.api?.shell?.openExternal?.("https://shadowhint.com");
                            },
                            children: n(
                              "settings.general.disguiseSubscribeBtn",
                              "Get Subscription",
                            ),
                          }),
                      ],
                    }),
                ],
              }),
            });
          })(),
      ],
    });
  };
}

export default GeneralSettingsWebpackModule;
