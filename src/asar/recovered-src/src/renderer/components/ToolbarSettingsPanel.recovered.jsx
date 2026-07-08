/*
 * Recovered from renderer webpack module 66223.
 * Inferred module name: ToolbarSettingsPanel.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 46008
 * - 41534
 * - 16738
 * - 54064
 * - 7680
 * - 77916
 * - 65356 (AnalyticsService)
 * - 96197
 */

function ToolbarSettingsPanelWebpackModule(e, t, n) {
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
  n(46008);
  const d = a(n(41534)),
    u = a(n(16738)),
    p = a(n(54064)),
    A = a(n(7680)),
    g = a(n(77916)),
    m = n(65356),
    f = n(96197);
  t.default = () => {
    const { t: e } = (0, c.useTranslation)(),
      [t, n] = (0, l.useState)("fullscreen"),
      [r, o] = (0, l.useState)(null),
      [i, a] = (0, l.useState)("en"),
      [h, b] = (0, l.useState)("both"),
      [_, C] = (0, l.useState)([]),
      [E, y] = (0, l.useState)(!1),
      [v, S] = (0, l.useState)(!1),
      [x, w] = (0, l.useState)(""),
      [k, T] = (0, l.useState)(""),
      [B, I] = (0, l.useState)(""),
      [R, N] = (0, l.useState)(f.fallbackLanguages),
      O = (0, l.useRef)(null),
      D = (0, l.useRef)(null),
      M = (0, l.useCallback)(() => {
        const e = window?.api?.window;
        e?.hideToolbarSettings && Promise.resolve(e.hideToolbarSettings()).catch(() => {});
      }, []),
      P = (0, l.useCallback)((e) => {
        window.api?.ipcRenderer?.send && window.api.ipcRenderer.send("toolbar-settings:hover", e);
      }, []),
      [L, z] = (0, l.useState)(!1),
      U = (0, l.useCallback)(async () => {
        try {
          const e = await window.api?.screen?.getDisplayList?.();
          e?.success &&
            e.displays &&
            (C(e.displays), void 0 !== e.selectedDisplayId && o(e.selectedDisplayId));
        } catch {}
      }, []),
      F = (0, l.useCallback)(async () => {
        if (!L)
          try {
            const e = await window.api?.screen?.getAvailableDisplays?.();
            e?.success && e.displays && (C(e.displays), z(!0));
          } catch {}
      }, [L]),
      j = (0, l.useCallback)(async () => {
        try {
          if (!window.api?.languages?.getAll) return;
          const e = await window.api.languages.getAll();
          e.success &&
            e.languages &&
            e.languages.length > 0 &&
            N(e.languages.map((e) => ({ code: e.code, name: e.displayName })));
        } catch {}
      }, []);
    ((0, l.useEffect)(() => {
      j();
    }, [j]),
      (0, l.useEffect)(() => {
        if (!window.api?.ipcRenderer?.on) return;
        const e = (e, t) => {
            t ? (U(), z(!1), j()) : (P(!1), M());
          },
          t = (e, t) => {
            t &&
              "object" == typeof t &&
              (("fullscreen" !== t.screenshotMode && "partial" !== t.screenshotMode) ||
                n(t.screenshotMode),
              void 0 !== t.selectedDisplayId && o(t.selectedDisplayId),
              t.language && a(t.language),
              ("system" !== t.audioSource &&
                "microphone" !== t.audioSource &&
                "both" !== t.audioSource) ||
                b(t.audioSource));
          };
        return (
          window.api.ipcRenderer.on("toolbar-settings:visibility", e),
          window.api.ipcRenderer.on("toolbar-settings:update-state", t),
          window.api.ipcRenderer.send("toolbar-settings:request-state"),
          () => {
            (P(!1),
              window.api?.ipcRenderer?.removeListener("toolbar-settings:visibility", e),
              window.api?.ipcRenderer?.removeListener("toolbar-settings:update-state", t));
          }
        );
      }, [M, U, j, P]),
      (0, l.useEffect)(() => {
        U();
      }, [U]),
      (0, l.useEffect)(() => {
        (async () => {
          try {
            const e = await window.api?.updater?.getVersion?.();
            e && w(e);
          } catch {}
          try {
            const e = await window.api?.invoke?.("config:getVariant");
            e &&
              (e.telegramChannel && T(e.telegramChannel),
              e.telegramSupport && I(e.telegramSupport));
          } catch {}
        })();
      }, []),
      (0, l.useEffect)(() => {
        const e = (e) => {
          (O.current && !O.current.contains(e.target) && y(!1),
            D.current && !D.current.contains(e.target) && S(!1));
        };
        return (
          document.addEventListener("mousedown", e),
          () => document.removeEventListener("mousedown", e)
        );
      }, []));
    const G = (0, l.useCallback)((e, t) => {
        window.api?.ipcRenderer?.send &&
          window.api.ipcRenderer.send("toolbar-settings:action", { type: e, ...t });
      }, []),
      W = (0, l.useCallback)(() => {
        M();
      }, [M]),
      Y = (0, l.useCallback)(async () => {
        ((0, m.trackUI)("button_clicked", "open_settings_window", { context: "toolbar_settings" }),
          M(),
          await window.api.settings.openSettingsWindow());
      }, [M]),
      H = (0, l.useCallback)(
        (e) => {
          (n(e),
            G("set_screenshot_mode", { mode: e }),
            (0, m.trackUI)("button_clicked", "screenshot_mode", { context: "toolbar_settings" }));
        },
        [G],
      ),
      V = (0, l.useCallback)(
        (e) => {
          (o(e),
            y(!1),
            G("set_display", { displayId: e || "" }),
            (0, m.trackUI)("button_clicked", "display_select", { context: "toolbar_settings" }));
        },
        [G],
      ),
      q = (0, l.useCallback)(
        (e) => {
          (a(e),
            S(!1),
            G("set_language", { code: e }),
            (0, m.trackUI)("button_clicked", "language_select", { context: "toolbar_settings" }));
        },
        [G],
      ),
      Q = (0, l.useCallback)(async (e) => {
        (0, m.trackUI)("button_clicked", "open_telegram_link", { context: "toolbar_settings" });
        try {
          await window.api?.shell?.openExternal?.(e);
        } catch {}
      }, []),
      $ =
        _.find((e) => e.id === r)?.name ||
        _[0]?.name ||
        e("liveWidget.displaySelectMonitor", "Display"),
      K = R.find((e) => e.code === i)?.name || i;
    return (0, s.jsxs)("div", {
      className: "toolbar-settings-panel-window",
      onMouseEnter: () => P(!0),
      onMouseLeave: () => P(!1),
      children: [
        (0, s.jsxs)("div", {
          className: "toolbar-settings-panel-header",
          children: [
            (0, s.jsx)("span", { children: e("liveWidget.settingsTitle", "Settings") }),
            (0, s.jsx)("button", {
              type: "button",
              className: "toolbar-settings-panel-close",
              onClick: W,
              "aria-label": e("common.close", "Close"),
              children: "×",
            }),
          ],
        }),
        (0, s.jsxs)("div", {
          className: "toolbar-settings-panel-body",
          children: [
            (0, s.jsx)("div", {
              className: "toolbar-dropdown-label",
              children: e("liveWidget.screenshotModeLabel", "Screenshot mode"),
            }),
            (0, s.jsxs)("div", {
              className: "toolbar-screenshot-options",
              children: [
                (0, s.jsx)("button", {
                  type: "button",
                  className: "toolbar-dropdown-item" + ("fullscreen" === t ? " active" : ""),
                  onClick: () => H("fullscreen"),
                  children: e("liveWidget.screenshotModeShortFullscreen", "Full"),
                }),
                (0, s.jsx)("button", {
                  type: "button",
                  className: "toolbar-dropdown-item" + ("partial" === t ? " active" : ""),
                  onClick: () => H("partial"),
                  children: e("liveWidget.screenshotModeShortPartial", "Area"),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "toolbar-display-row",
              ref: O,
              children: [
                (0, s.jsx)("span", {
                  className: "toolbar-display-row-label",
                  children: e("liveWidget.displaySelectMonitor", "Display"),
                }),
                (0, s.jsxs)("div", {
                  className: "toolbar-display-select",
                  children: [
                    (0, s.jsxs)("button", {
                      type: "button",
                      className: "toolbar-display-select-trigger",
                      onClick: () => {
                        const e = !E;
                        (y(e), e && F());
                      },
                      children: [
                        (0, s.jsx)("span", { children: $ }),
                        (0, s.jsx)("svg", {
                          width: "10",
                          height: "6",
                          viewBox: "0 0 10 6",
                          fill: "none",
                          children: (0, s.jsx)("path", {
                            d: "M1 1L5 5L9 1",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        }),
                      ],
                    }),
                    E &&
                      (0, s.jsx)("div", {
                        className: "toolbar-display-dropdown",
                        children: _.map((e) =>
                          (0, s.jsxs)(
                            "button",
                            {
                              type: "button",
                              className: "toolbar-display-option" + (r === e.id ? " active" : ""),
                              onClick: () => V(e.id),
                              children: [
                                e.thumbnail &&
                                  e.thumbnail.length > 50 &&
                                  (0, s.jsx)("img", {
                                    className: "toolbar-display-option-thumb",
                                    src: e.thumbnail,
                                    alt: e.name,
                                    onError: (e) => {
                                      e.target.style.display = "none";
                                    },
                                  }),
                                e.name,
                                e.isPrimary &&
                                  (0, s.jsx)("span", {
                                    className: "toolbar-display-star",
                                    children: "★",
                                  }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "toolbar-display-row",
              ref: D,
              children: [
                (0, s.jsx)("span", {
                  className: "toolbar-display-row-label",
                  children: e("common.language", "Language"),
                }),
                (0, s.jsxs)("div", {
                  className: "toolbar-display-select",
                  children: [
                    (0, s.jsxs)("button", {
                      type: "button",
                      className: "toolbar-display-select-trigger",
                      onClick: () => S((e) => !e),
                      children: [
                        (0, s.jsx)("span", { children: K }),
                        (0, s.jsx)("svg", {
                          width: "10",
                          height: "6",
                          viewBox: "0 0 10 6",
                          fill: "none",
                          children: (0, s.jsx)("path", {
                            d: "M1 1L5 5L9 1",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        }),
                      ],
                    }),
                    v &&
                      (0, s.jsx)("div", {
                        className: "toolbar-display-dropdown",
                        children: R.map((e) =>
                          (0, s.jsx)(
                            "button",
                            {
                              type: "button",
                              className: "toolbar-display-option" + (i === e.code ? " active" : ""),
                              onClick: () => q(e.code),
                              children: e.name,
                            },
                            e.code,
                          ),
                        ),
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", { className: "toolbar-dropdown-separator" }),
            (0, s.jsxs)("button", {
              type: "button",
              className: "toolbar-dropdown-item",
              onClick: () => {
                Y();
              },
              role: "menuitem",
              children: [
                (0, s.jsx)("span", {
                  className: "toolbar-dropdown-icon",
                  children: (0, s.jsx)(d.default, { size: 16 }),
                }),
                e("common.settings", "Settings"),
              ],
            }),
            (0, s.jsx)("div", { className: "toolbar-dropdown-separator" }),
            (0, s.jsxs)("button", {
              type: "button",
              className: "toolbar-dropdown-item",
              onClick: () => {
                ((0, m.trackUI)("button_clicked", "open_context_editor", {
                  context: "toolbar_settings",
                }),
                  G("open_context_editor"));
              },
              role: "menuitem",
              children: [
                (0, s.jsx)("span", {
                  className: "toolbar-dropdown-icon",
                  children: (0, s.jsx)(u.default, { size: 16 }),
                }),
                (0, s.jsxs)("span", {
                  className: "toolbar-dropdown-text with-trailing-icon",
                  children: [
                    e("liveWidget.openContextEditor"),
                    (0, s.jsx)(p.default, { size: 14 }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("button", {
              type: "button",
              className: "toolbar-dropdown-item",
              onClick: () => {
                ((0, m.trackUI)("button_clicked", "open_sessions", { context: "toolbar_settings" }),
                  M(),
                  window.api?.sessions?.show?.());
              },
              role: "menuitem",
              children: [
                (0, s.jsx)("span", {
                  className: "toolbar-dropdown-icon",
                  children: (0, s.jsx)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0, s.jsx)("path", {
                      d: "M2 4h12M2 8h12M2 12h8",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                    }),
                  }),
                }),
                e("liveWidget.openSessions"),
              ],
            }),
            (0, s.jsxs)("button", {
              type: "button",
              className: "toolbar-dropdown-item",
              onClick: () => {
                ((0, m.trackUI)("button_clicked", "open_profile", { context: "toolbar_settings" }),
                  M(),
                  G("open_settings"));
              },
              role: "menuitem",
              children: [
                (0, s.jsx)("span", {
                  className: "toolbar-dropdown-icon",
                  children: (0, s.jsx)(A.default, { size: 16 }),
                }),
                e("liveWidget.openProfile"),
              ],
            }),
            (0, s.jsx)("div", { className: "toolbar-dropdown-separator" }),
            (0, s.jsxs)("button", {
              type: "button",
              className: "toolbar-dropdown-item",
              onClick: () => {
                ((0, m.trackUI)("button_clicked", "quit_app", { context: "toolbar_settings" }),
                  G("quit_app"));
              },
              role: "menuitem",
              children: [
                (0, s.jsx)("span", {
                  className: "toolbar-dropdown-icon",
                  children: (0, s.jsx)(g.default, { size: 16 }),
                }),
                e("liveWidget.quitApp"),
              ],
            }),
            (x || k || B) &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", { className: "toolbar-dropdown-separator" }),
                  (0, s.jsxs)("div", {
                    className: "toolbar-telegram-row",
                    children: [
                      k &&
                        (0, s.jsxs)("button", {
                          type: "button",
                          className: "toolbar-telegram-link",
                          onClick: () => {
                            Q(k);
                          },
                          children: [
                            (0, s.jsx)("svg", {
                              width: "14",
                              height: "14",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              children: (0, s.jsx)("path", {
                                d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                              }),
                            }),
                            e("settings.about.channel", "Channel"),
                          ],
                        }),
                      x &&
                        (0, s.jsxs)("span", {
                          className: "toolbar-telegram-version",
                          children: ["v", x],
                        }),
                      B &&
                        (0, s.jsxs)("button", {
                          type: "button",
                          className: "toolbar-telegram-link",
                          onClick: () => {
                            Q(B);
                          },
                          children: [
                            (0, s.jsx)("svg", {
                              width: "14",
                              height: "14",
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              children: (0, s.jsx)("path", {
                                d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                              }),
                            }),
                            e("settings.about.support", "Support"),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  };
}

export default ToolbarSettingsPanelWebpackModule;
