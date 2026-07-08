/*
 * Recovered from renderer webpack module 3302.
 * Inferred module name: SettingsWindow.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 94435
 * - 95132 (SettingsSidebar)
 * - 52939 (GeneralSettings)
 * - 20768 (ShortcutsSettingsSection)
 * - 45673 (ScreenSettings)
 * - 91833 (AudioSettings)
 * - 77504 (AccountSettings)
 * - 89402 (AboutSettings)
 * - 52040 (RecordingSettings)
 */

function SettingsWindowWebpackModule(e, t, n) {
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
    c = n(99163);
  n(94435);
  const d = a(n(95132)),
    u = a(n(52939)),
    p = a(n(20768)),
    A = a(n(45673)),
    g = a(n(91833)),
    m = a(n(77504)),
    f = a(n(89402)),
    h = a(n(52040));
  t.default = () => {
    const { t: e } = (0, c.useTranslation)(),
      [t, n] = (0, l.useState)("general"),
      [r, o] = (0, l.useState)(null),
      [i, a] = (0, l.useState)(!0);
    ((0, l.useEffect)(() => {
      (async () => {
        try {
          const e = await window.api.settings.getAllSettings();
          e.success && o(e.settings);
        } catch (e) {
          console.error("Failed to load settings:", e);
        } finally {
          a(!1);
        }
      })();
    }, []),
      (0, l.useEffect)(
        () =>
          window.api.settings.onNavigateToSection((e) => {
            ["general", "shortcuts", "screen", "audio", "recording", "account", "about"].includes(
              e,
            ) && n(e);
          }),
        [],
      ),
      (0, l.useEffect)(() => {
        const e = window.api?.ipcRenderer;
        if (!e) return;
        const t = (e, t) => {
            o((e) => (e ? { ...e, suggestionWindowWidth: t } : e));
          },
          n = (e, t) => {
            o((e) => (e ? { ...e, suggestionWindowHeight: t } : e));
          };
        return (
          e.on("suggestion:width-changed", t),
          e.on("suggestion:height-changed", n),
          () => {
            (e.removeListener("suggestion:width-changed", t),
              e.removeListener("suggestion:height-changed", n));
          }
        );
      }, []),
      (0, l.useEffect)(() => {
        const e = window.api?.ipcRenderer;
        if (!e) return;
        const t = (e, t) => {
          o((e) => (e ? { ...e, autoDetectionEnabled: t } : e));
        };
        return (
          e.on("autoDetection:changed", t),
          () => {
            e.removeListener("autoDetection:changed", t);
          }
        );
      }, []),
      (0, l.useEffect)(() => {
        const e = window.api?.ipcRenderer;
        if (!e) return;
        const t = (e, t) => {
          t &&
            "object" == typeof t &&
            o((e) => {
              if (!e) return e;
              const n = {};
              return (
                ("fullscreen" !== t.screenshotMode && "partial" !== t.screenshotMode) ||
                  (n.screenshotMode = t.screenshotMode),
                void 0 !== t.selectedDisplayId && (n.selectedDisplayId = t.selectedDisplayId),
                t.language && "string" == typeof t.language && (n.language = t.language),
                ("system" !== t.audioSource &&
                  "microphone" !== t.audioSource &&
                  "both" !== t.audioSource) ||
                  (n.audioSource = t.audioSource),
                0 === Object.keys(n).length ? e : { ...e, ...n }
              );
            });
        };
        return (
          e.on("toolbar-settings:update-state", t),
          () => {
            e.removeListener("toolbar-settings:update-state", t);
          }
        );
      }, []));
    const b = (0, l.useCallback)(async () => {
      try {
        await window.api.settings.closeSettingsWindow();
      } catch (e) {
        console.error("Failed to close settings:", e);
      }
    }, []);
    (0, l.useEffect)(() => {
      const e = (e) => {
        "Escape" === e.key && (e.preventDefault(), b());
      };
      return (
        document.addEventListener("keydown", e),
        () => document.removeEventListener("keydown", e)
      );
    }, [b]);
    const _ = (0, l.useCallback)(async (e, t) => {
      o((n) => (n ? { ...n, [e]: t } : n));
      try {
        await window.api.settings.saveSetting(e, t);
      } catch (t) {
        console.error(`Failed to save setting ${e}:`, t);
      }
    }, []);
    return (0, s.jsxs)("div", {
      className: "settings-window",
      children: [
        (0, s.jsxs)("div", {
          className: "settings-titlebar",
          children: [
            (0, s.jsx)("div", {
              className: "settings-titlebar-title",
              children: e("settings.windowTitle", "Settings"),
            }),
            (0, s.jsx)("button", {
              className: "settings-titlebar-close",
              onClick: b,
              "aria-label": "Close",
              children: "×",
            }),
          ],
        }),
        (0, s.jsxs)("div", {
          className: "settings-body",
          children: [
            (0, s.jsx)(d.default, { activeSection: t, onSectionChange: n }),
            (0, s.jsx)("div", {
              className: "settings-content",
              children: (() => {
                if (i || !r)
                  return (0, s.jsx)("div", {
                    className: "settings-loading",
                    children: e("settings.loading", "Loading..."),
                  });
                switch (t) {
                  case "general":
                    return (0, s.jsx)(u.default, { settings: r, onSettingChange: _ });
                  case "shortcuts":
                    return (0, s.jsx)(p.default, {});
                  case "screen":
                    return (0, s.jsx)(A.default, { settings: r, onSettingChange: _ });
                  case "audio":
                    return (0, s.jsx)(g.default, { settings: r, onSettingChange: _ });
                  case "recording":
                    return (0, s.jsx)(h.default, {
                      settings: {
                        recordingEnabled: r.recordingEnabled,
                        keystrokeOverlayEnabled: r.keystrokeOverlayEnabled,
                        showMainWindowOnRecording: r.showMainWindowOnRecording,
                        recordingOutputPath: r.recordingOutputPath,
                      },
                      onSettingChange: _,
                    });
                  case "account":
                    return (0, s.jsx)(m.default, {});
                  case "about":
                    return (0, s.jsx)(f.default, {});
                  default:
                    return null;
                }
              })(),
            }),
          ],
        }),
      ],
    });
  };
}

export default SettingsWindowWebpackModule;
