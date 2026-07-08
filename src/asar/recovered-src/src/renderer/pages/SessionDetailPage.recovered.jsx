/*
 * Recovered from renderer webpack module 56503.
 * Inferred module name: SessionDetailPage.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 49824
 * - 99163
 * - 55698
 * - 19129
 * - 2941 (SessionDates)
 * - 62254 (AuthService)
 * - 33897 (StreamingMessage)
 * - 65356 (AnalyticsService)
 * - 8859 (SessionsHeader)
 * - 70541 (IconAsset)
 * - 77861 (SendIconAsset)
 * - 723
 * - 15677
 * - 69568
 */

function SessionDetailPageWebpackModule(e, t, n) {
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
    c = n(49824),
    d = n(99163),
    u = a(n(55698)),
    p = a(n(19129)),
    A = n(2941),
    g = n(62254),
    m = n(33897),
    f = n(42e3),
    h = n(65356),
    b = a(n(8859)),
    _ = a(n(70541)),
    C = a(n(77861));
  (n(723), n(15677), n(69568));
  const E = (e, t = "ru") =>
    e ? new Date(e).toLocaleDateString(t, { weekday: "long", day: "numeric", month: "long" }) : "";
  t.default = () => {
    const { sessionId: e } = (0, c.useParams)(),
      { t, i18n: n } = (0, d.useTranslation)(),
      r = (0, c.useNavigate)(),
      [o, i] = (0, l.useState)(null),
      [a, y] = (0, l.useState)([]),
      [v, S] = (0, l.useState)(!0),
      [x, w] = (0, l.useState)(null),
      [k, T] = (0, l.useState)("transcript"),
      [B, I] = (0, l.useState)(""),
      [R, N] = (0, l.useState)(new Set()),
      [O, D] = (0, l.useState)([]),
      [M, P] = (0, l.useState)(!1),
      L = (0, l.useRef)(null),
      [z, U] = (0, l.useState)(null),
      [F, j] = (0, l.useState)(!1),
      [G, W] = (0, l.useState)(!1);
    (0, l.useEffect)(() => {
      L.current && (L.current.scrollTop = L.current.scrollHeight);
    }, [O]);
    const [Y, H] = (0, l.useState)("ShadowHint"),
      [V, q] = (0, l.useState)(),
      [Q, $] = (0, l.useState)(),
      [K, X] = (0, l.useState)(null),
      [Z, J] = (0, l.useState)(),
      [ee, te] = (0, l.useState)(),
      [ne, re] = (0, l.useState)();
    ((0, l.useEffect)(() => {
      (async () => {
        if (e)
          try {
            (S(!0), w(null));
            const n = await window.api.session.getDialogHistory(e);
            if (n.success && n.entries) {
              y(n.entries);
              const t = await window.api.session.listSessions(1, 100);
              if (t.success && t.sessions) {
                const n = t.sessions.find((t) => t.id === e);
                n && i(n);
              }
              const r = await f.sessionAPI.getSessionChatHistory(e);
              r.success &&
                r.messages &&
                D(r.messages.map((e) => ({ role: e.role, content: e.content })));
              const o = await f.sessionAPI.getSessionSummary(e);
              o.success && o.exists && (W(!0), U(o.content || null));
            } else w(n.error || t("sessionDetail.error"));
          } catch (e) {
            (console.error("Error loading session data:", e), w(t("sessionDetail.error")));
          } finally {
            S(!1);
          }
      })();
    }, [e, t]),
      (0, l.useEffect)(() => {
        ((async () => {
          try {
            if (window.api?.invoke) {
              const e = await window.api.invoke("config:getVariant");
              e && (H(e.productName || "ShadowHint"), X(e));
            }
          } catch (e) {
            console.error("Error loading variant config:", e);
          }
        })(),
          (async () => {
            try {
              const { user: e } = await (0, g.getUserData)();
              e && (q(e.name), $(e.email));
            } catch (e) {
              console.error("Error loading user data:", e);
            }
          })(),
          (async () => {
            try {
              const e = await window.api.auth.getUserSubscription();
              e.success &&
                e.data &&
                (J(e.data.subscription?.plan?.name),
                te(e.data.subscription?.endDate),
                re(e.data.daysRemaining));
            } catch (e) {
              console.error("Error loading subscription:", e);
            }
          })());
      }, []));
    const oe = (0, l.useCallback)(async () => {
        if (!B.trim() || !e || M) return;
        (0, h.trackUI)("button_clicked", "send_chat_message", { context: "session_detail" });
        const t = B.trim();
        (I(""),
          P(!0),
          D((e) => [...e, { role: "user", content: t }]),
          D((e) => [...e, { role: "assistant", content: "" }]));
        let n = "";
        try {
          await f.sessionAPI.sendSessionChatMessage(
            e,
            t,
            !1,
            (e) => {
              ((n += e),
                D((e) => {
                  const t = [...e],
                    r = t.length - 1;
                  return (
                    r >= 0 && "assistant" === t[r].role && (t[r] = { ...t[r], content: n }),
                    t
                  );
                }));
            },
            (e, t) => {
              (P(!1),
                t &&
                  (console.error("Chat error:", t),
                  D((e) => {
                    const n = [...e],
                      r = n.length - 1;
                    return (
                      r >= 0 &&
                        "assistant" === n[r].role &&
                        (n[r] = { ...n[r], content: "Ошибка: " + t }),
                      n
                    );
                  })));
            },
          );
        } catch (e) {
          (console.error("Failed to send chat message:", e), P(!1));
        }
      }, [B, e, M]),
      ie = (0, l.useCallback)(async () => {
        if (e && !F && !G) {
          ((0, h.trackUI)("button_clicked", "generate_session_summary", { context: e }),
            j(!0),
            U(""));
          try {
            await f.sessionAPI.generateSessionSummary(
              e,
              (e) => {
                U((t) => (t || "") + e);
              },
              (e, t) => {
                (j(!1),
                  t ? (console.error("Summary generation error:", t), U(null)) : (W(!0), U(e)));
              },
            );
          } catch (e) {
            (console.error("Failed to generate summary:", e), j(!1));
          }
        }
      }, [e, F, G]),
      ae = () => a.filter((e) => "transcription" === e.entryType),
      se = (0, l.useCallback)(() => {
        (0, h.trackUI)("button_clicked", "copy_content", { context: k });
        let e = "";
        ((e =
          "summary" === k
            ? (() => {
                const e = [];
                return (
                  a.forEach((t) => {
                    if ("ai_message" === t.entryType && t.text.length > 50) {
                      const n = t.text.split(/[.!?]/)[0];
                      n && n.length > 20 && e.push(n + ".");
                    }
                  }),
                  e.slice(0, 5)
                );
              })().join("\n")
            : "transcript" === k
              ? ae()
                  .map(
                    (e) =>
                      `${"user" === e.speaker ? t("sessionDetail.speakerYou") : t("sessionDetail.speakerInterviewer")} [${e.createdAt ? (0, A.formatTime)(e.createdAt) : ""}]: ${e.text}`,
                  )
                  .join("\n")
              : a.map((e) => `[${le(e.entryType)}]\n${e.text}`).join("\n\n")),
          window.api.clipboard.writeText(e));
      }, [k, a]),
      le = (e) => {
        switch (e) {
          case "transcription":
            return t("sessionDetail.transcription");
          case "ai_message":
            return t("sessionDetail.aiMessage");
          case "user_input":
            return t("sessionDetail.userInput");
          case "system":
            return t("sessionDetail.system");
          default:
            return e;
        }
      };
    return (0, s.jsxs)("div", {
      className: "session-detail-page",
      children: [
        (0, s.jsx)(b.default, {
          productName: Y,
          variant: K?.variant,
          userName: V,
          userEmail: Q,
          subscriptionName: Z,
          subscriptionEndDate: ee,
          daysRemaining: ne,
          showBackButton: !0,
          onBack: () => {
            r("/sessions");
          },
          onBilling: async () => {
            const e = K?.websiteUrl
              ? `${K.websiteUrl}/profile/subscription`
              : "https://shadowhint.com/profile/subscription";
            window.api?.shell ? window.api.shell.openExternal(e) : window.open(e, "_blank");
          },
          onCheckUpdates: async () => {
            await window.api.updater.checkForUpdates();
          },
          onHelp: async () => {
            const e = K?.telegramSupport || "https://t.me/shadowhintsupport";
            window.api?.shell ? window.api.shell.openExternal(e) : window.open(e, "_blank");
          },
          onLogout: async () => {
            try {
              (await window.api.auth.logout(), await window.api.sessions.hide());
            } catch (e) {
              console.error("Logout error:", e);
            }
          },
          onMinimize: async () => {
            await window.api.sessions.minimize();
          },
          onMaximize: async () => {
            await window.api.sessions.maximize();
          },
          onClose: async () => {
            await window.api.sessions.hide();
          },
        }),
        (0, s.jsxs)("div", {
          className: "session-detail-body",
          children: [
            (0, s.jsx)("div", {
              className: "session-detail-main",
              children: v
                ? (0, s.jsxs)("div", {
                    className: "session-detail-loading",
                    children: [
                      (0, s.jsx)("div", { className: "sessions-spinner" }),
                      (0, s.jsx)("span", { children: t("sessionDetail.loading") }),
                    ],
                  })
                : x
                  ? (0, s.jsxs)("div", {
                      className: "session-detail-error",
                      children: [
                        (0, s.jsx)("p", { children: x }),
                        (0, s.jsx)("button", {
                          onClick: () => r("/sessions"),
                          children: t("sessionDetail.back"),
                        }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsxs)("div", {
                          className: "session-detail-info",
                          children: [
                            (0, s.jsx)("div", {
                              className: "session-detail-date",
                              children: E(o?.startTime || o?.createdAt, n.language),
                            }),
                            (0, s.jsx)("h1", {
                              className: "session-detail-title",
                              children: o?.title || t("sessions.untitled"),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "session-detail-tabs",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "session-tabs-list",
                              children: [
                                (0, s.jsx)("button", {
                                  className: "session-tab " + ("summary" === k ? "active" : ""),
                                  onClick: () => {
                                    ((0, h.trackUI)("button_clicked", "switch_session_tab", {
                                      context: "summary",
                                    }),
                                      T("summary"));
                                  },
                                  children: t("sessionDetail.tabs.summary"),
                                }),
                                (0, s.jsx)("button", {
                                  className: "session-tab " + ("transcript" === k ? "active" : ""),
                                  onClick: () => {
                                    ((0, h.trackUI)("button_clicked", "switch_session_tab", {
                                      context: "transcript",
                                    }),
                                      T("transcript"));
                                  },
                                  children: t("sessionDetail.tabs.transcript"),
                                }),
                                (0, s.jsx)("button", {
                                  className: "session-tab " + ("usage" === k ? "active" : ""),
                                  onClick: () => {
                                    ((0, h.trackUI)("button_clicked", "switch_session_tab", {
                                      context: "usage",
                                    }),
                                      T("usage"));
                                  },
                                  children: t("sessionDetail.tabs.usage"),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("button", {
                              className: "session-copy-btn",
                              onClick: se,
                              children: [
                                (0, s.jsxs)("svg", {
                                  width: "14",
                                  height: "14",
                                  viewBox: "0 0 16 16",
                                  fill: "none",
                                  children: [
                                    (0, s.jsx)("rect", {
                                      x: "5",
                                      y: "5",
                                      width: "9",
                                      height: "9",
                                      rx: "1",
                                      stroke: "currentColor",
                                      strokeWidth: "1.5",
                                    }),
                                    (0, s.jsx)("path", {
                                      d: "M11 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h2",
                                      stroke: "currentColor",
                                      strokeWidth: "1.5",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("span", {
                                  children: t("sessionDetail.copyFullTranscript"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", {
                          className: "session-detail-tab-content",
                          children:
                            0 === a.length && "usage" !== k
                              ? (0, s.jsx)("div", {
                                  className: "session-detail-empty",
                                  children: (0, s.jsx)("p", { children: t("sessionDetail.empty") }),
                                })
                              : (() => {
                                  switch (k) {
                                    case "summary":
                                      return (0, s.jsx)("div", {
                                        className: "session-detail-summary",
                                        children:
                                          G || F || z
                                            ? (0, s.jsx)("div", {
                                                className: "session-summary-content",
                                                children: z
                                                  ? (0, s.jsx)(u.default, {
                                                      remarkPlugins: [p.default],
                                                      children: z,
                                                    })
                                                  : F &&
                                                    (0, s.jsxs)("div", {
                                                      className: "session-summary-loading",
                                                      children: [
                                                        (0, s.jsx)("div", {
                                                          className: "sessions-spinner",
                                                        }),
                                                        (0, s.jsx)("span", {
                                                          children: t(
                                                            "sessionDetail.summaryGenerating",
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                              })
                                            : (0, s.jsx)("div", {
                                                className: "session-summary-empty",
                                                children:
                                                  ae().length > 0
                                                    ? (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                          (0, s.jsx)("p", {
                                                            className: "summary-empty",
                                                            children: t(
                                                              "sessionDetail.summaryNotGenerated",
                                                            ),
                                                          }),
                                                          (0, s.jsx)("button", {
                                                            className: "generate-summary-btn",
                                                            onClick: ie,
                                                            disabled: F,
                                                            children: t(
                                                              "sessionDetail.generateSummary",
                                                            ),
                                                          }),
                                                        ],
                                                      })
                                                    : (0, s.jsxs)(s.Fragment, {
                                                        children: [
                                                          (0, s.jsx)("p", {
                                                            className: "summary-empty",
                                                            children: t(
                                                              "sessionDetail.noTranscriptData",
                                                            ),
                                                          }),
                                                          (0, s.jsx)("button", {
                                                            className: "support-link",
                                                            onClick: () => {
                                                              const e =
                                                                K?.telegramSupport ||
                                                                "https://t.me/shadowhintsupport";
                                                              window.api?.shell?.openExternal(e);
                                                            },
                                                            children: t(
                                                              "sessionDetail.contactSupport",
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                              }),
                                      });
                                    case "transcript":
                                      const e = ae();
                                      return (0, s.jsx)("div", {
                                        className: "transcript-chat",
                                        children: e.map((e) => {
                                          const n = "user" === e.speaker;
                                          return (0, s.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "transcript-bubble " +
                                                (n
                                                  ? "transcript-bubble-user"
                                                  : "transcript-bubble-interviewer"),
                                              children: [
                                                (0, s.jsxs)("div", {
                                                  className: "transcript-bubble-header",
                                                  children: [
                                                    (0, s.jsx)("span", {
                                                      className: "transcript-bubble-speaker",
                                                      children: t(
                                                        n
                                                          ? "sessionDetail.speakerYou"
                                                          : "sessionDetail.speakerInterviewer",
                                                      ),
                                                    }),
                                                    e.createdAt &&
                                                      (0, s.jsx)("span", {
                                                        className: "transcript-bubble-time",
                                                        children: (0, A.formatTime)(e.createdAt),
                                                      }),
                                                  ],
                                                }),
                                                (0, s.jsx)("div", {
                                                  className: "transcript-bubble-text",
                                                  children: e.text,
                                                }),
                                              ],
                                            },
                                            e.id,
                                          );
                                        }),
                                      });
                                    case "usage":
                                      const n = (() => {
                                        const e = [];
                                        let t = [],
                                          n = 0;
                                        for (const r of a)
                                          if ("transcription" === r.entryType) t.push(r);
                                          else {
                                            if (t.length > 0) {
                                              const r = t.some((e) => e.isAutoTrigger);
                                              (e.push({
                                                type: "transcription_group",
                                                entries: t,
                                                id: "group-" + n++,
                                                isAutoTrigger: r,
                                              }),
                                                (t = []));
                                            }
                                            "user_input" === r.entryType ||
                                            "manual_message" === r.entryType
                                              ? e.push({
                                                  type: "user_input",
                                                  entry: r,
                                                  isAutoTrigger: r.isAutoTrigger,
                                                })
                                              : "ai_message" === r.entryType
                                                ? e.push({ type: "ai_message", entry: r })
                                                : "system" === r.entryType
                                                  ? e.push({ type: "system", entry: r })
                                                  : "image" === r.entryType &&
                                                    e.push({
                                                      type: "image",
                                                      entry: r,
                                                      isAutoTrigger: r.isAutoTrigger,
                                                    });
                                          }
                                        if (t.length > 0) {
                                          const r = t.some((e) => e.isAutoTrigger);
                                          e.push({
                                            type: "transcription_group",
                                            entries: t,
                                            id: `group-${n}`,
                                            isAutoTrigger: r,
                                          });
                                        }
                                        return e;
                                      })();
                                      return (0, s.jsx)("div", {
                                        className: "usage-chat",
                                        children: n.map((e, n) => {
                                          if ("user_input" === e.type)
                                            return (0, s.jsx)(
                                              "div",
                                              {
                                                className: "usage-user-input",
                                                children: (0, s.jsxs)("div", {
                                                  className: "usage-user-input-bubble",
                                                  children: [
                                                    (0, s.jsxs)("div", {
                                                      className: "usage-user-header",
                                                      children: [
                                                        (0, s.jsx)("span", {
                                                          className: "usage-user-time",
                                                          children: e.entry.createdAt
                                                            ? (0, A.formatTime)(e.entry.createdAt)
                                                            : "",
                                                        }),
                                                        e.isAutoTrigger &&
                                                          (0, s.jsx)("span", {
                                                            className: "usage-auto-trigger-badge",
                                                            children: t(
                                                              "sessionDetail.autoTrigger",
                                                            ),
                                                          }),
                                                      ],
                                                    }),
                                                    e.entry.imageUrl &&
                                                      (0, s.jsx)("div", {
                                                        className: "usage-image-container",
                                                        children: (0, s.jsx)("img", {
                                                          src: e.entry.imageUrl,
                                                          alt: "Screenshot",
                                                          className: "usage-image",
                                                          onClick: () =>
                                                            window.open(e.entry.imageUrl, "_blank"),
                                                        }),
                                                      }),
                                                    e.entry.text,
                                                  ],
                                                }),
                                              },
                                              e.entry.id,
                                            );
                                          if ("ai_message" === e.type)
                                            return (0, s.jsxs)(
                                              "div",
                                              {
                                                className: "usage-ai-message",
                                                children: [
                                                  (0, s.jsxs)("div", {
                                                    className: "usage-ai-header",
                                                    children: [
                                                      (0, s.jsx)("img", {
                                                        src: _.default,
                                                        alt: "ShadowHint",
                                                        className: "usage-ai-icon",
                                                      }),
                                                      (0, s.jsx)("span", {
                                                        className: "usage-ai-time",
                                                        children: e.entry.createdAt
                                                          ? (0, A.formatTime)(e.entry.createdAt)
                                                          : "",
                                                      }),
                                                      e.entry.isAutoGenerated &&
                                                        (0, s.jsx)("span", {
                                                          className: "usage-ai-auto-badge",
                                                          children: t(
                                                            "sessionDetail.autoGenerated",
                                                          ),
                                                        }),
                                                    ],
                                                  }),
                                                  (0, s.jsx)(m.SuggestionContainer, {
                                                    suggestion: e.entry.text,
                                                    isStreaming: !1,
                                                    streamingComplete: !0,
                                                    className: "usage-ai-text",
                                                  }),
                                                ],
                                              },
                                              e.entry.id,
                                            );
                                          if ("system" === e.type)
                                            return (0, s.jsx)(
                                              "div",
                                              {
                                                className: "usage-system-message",
                                                children: (0, s.jsx)("span", {
                                                  className: "usage-system-text",
                                                  children: e.entry.text,
                                                }),
                                              },
                                              e.entry.id,
                                            );
                                          if ("image" === e.type)
                                            return (0, s.jsx)(
                                              "div",
                                              {
                                                className: "usage-user-input",
                                                children: (0, s.jsxs)("div", {
                                                  className: "usage-user-input-bubble",
                                                  children: [
                                                    (0, s.jsxs)("div", {
                                                      className: "usage-user-header",
                                                      children: [
                                                        (0, s.jsx)("span", {
                                                          className: "usage-user-time",
                                                          children: e.entry.createdAt
                                                            ? (0, A.formatTime)(e.entry.createdAt)
                                                            : "",
                                                        }),
                                                        e.isAutoTrigger &&
                                                          (0, s.jsx)("span", {
                                                            className: "usage-auto-trigger-badge",
                                                            children: t(
                                                              "sessionDetail.autoTrigger",
                                                            ),
                                                          }),
                                                      ],
                                                    }),
                                                    e.entry.imageUrl &&
                                                      (0, s.jsx)("div", {
                                                        className: "usage-image-container",
                                                        children: (0, s.jsx)("img", {
                                                          src: e.entry.imageUrl,
                                                          alt: "Screenshot",
                                                          className: "usage-image",
                                                          onClick: () =>
                                                            window.open(e.entry.imageUrl, "_blank"),
                                                        }),
                                                      }),
                                                  ],
                                                }),
                                              },
                                              e.entry.id,
                                            );
                                          if ("transcription_group" === e.type) {
                                            const n = R.has(e.id),
                                              r = e.entries[e.entries.length - 1],
                                              o =
                                                r.text.length > 60
                                                  ? r.text.substring(0, 60) + "..."
                                                  : r.text;
                                            return (0, s.jsxs)(
                                              "div",
                                              {
                                                className: "usage-transcription-group",
                                                children: [
                                                  (0, s.jsxs)("div", {
                                                    className: "usage-transcription-header",
                                                    onClick: () => {
                                                      return (
                                                        (t = e.id),
                                                        void N((e) => {
                                                          const n = new Set(e);
                                                          return (
                                                            n.has(t) ? n.delete(t) : n.add(t),
                                                            n
                                                          );
                                                        })
                                                      );
                                                      var t;
                                                    },
                                                    children: [
                                                      (0, s.jsx)("span", {
                                                        className: "usage-transcription-icon",
                                                        children: "↻",
                                                      }),
                                                      (0, s.jsxs)("span", {
                                                        className: "usage-transcription-title",
                                                        children: [
                                                          t("sessionDetail.audioTranscription"),
                                                          " (",
                                                          e.entries.length,
                                                          ")",
                                                        ],
                                                      }),
                                                      e.isAutoTrigger &&
                                                        (0, s.jsx)("span", {
                                                          className: "usage-auto-trigger-badge",
                                                          children: t("sessionDetail.autoTrigger"),
                                                        }),
                                                      (0, s.jsx)("span", {
                                                        className:
                                                          "usage-transcription-chevron " +
                                                          (n ? "expanded" : ""),
                                                        children: "▼",
                                                      }),
                                                    ],
                                                  }),
                                                  !n &&
                                                    (0, s.jsxs)("div", {
                                                      className: "usage-transcription-preview",
                                                      children: [
                                                        (0, s.jsxs)("svg", {
                                                          width: "12",
                                                          height: "12",
                                                          viewBox: "0 0 12 12",
                                                          className:
                                                            "usage-transcription-preview-icon",
                                                          children: [
                                                            (0, s.jsx)("path", {
                                                              d: "M6 8.5A2.5 2.5 0 0 1 3.5 6V3.5A2.5 2.5 0 0 1 6 1a2.5 2.5 0 0 1 2.5 2.5V6A2.5 2.5 0 0 1 6 8.5z",
                                                              fill: "currentColor",
                                                            }),
                                                            (0, s.jsx)("path", {
                                                              d: "M6 10a4 4 0 0 1-4-4H1a5 5 0 0 0 5 5 5 5 0 0 0 5-5h-1a4 4 0 0 1-4 4z",
                                                              fill: "currentColor",
                                                            }),
                                                            (0, s.jsx)("line", {
                                                              x1: "6",
                                                              y1: "10",
                                                              x2: "6",
                                                              y2: "11",
                                                              stroke: "currentColor",
                                                              strokeWidth: "1",
                                                            }),
                                                          ],
                                                        }),
                                                        o,
                                                      ],
                                                    }),
                                                  n &&
                                                    (0, s.jsx)("div", {
                                                      className: "usage-transcription-expanded",
                                                      children: e.entries.map((e) =>
                                                        (0, s.jsxs)(
                                                          "div",
                                                          {
                                                            className: "usage-transcription-item",
                                                            children: [
                                                              (0, s.jsx)("span", {
                                                                className:
                                                                  "usage-transcription-speaker",
                                                                children:
                                                                  "user" === e.speaker
                                                                    ? t("sessionDetail.speakerYou")
                                                                    : t(
                                                                        "sessionDetail.speakerInterviewer",
                                                                      ),
                                                              }),
                                                              (0, s.jsx)("span", {
                                                                className:
                                                                  "usage-transcription-time",
                                                                children: e.createdAt
                                                                  ? (0, A.formatTime)(e.createdAt)
                                                                  : "",
                                                              }),
                                                              (0, s.jsx)("div", {
                                                                className:
                                                                  "usage-transcription-text",
                                                                children: e.text,
                                                              }),
                                                            ],
                                                          },
                                                          e.id,
                                                        ),
                                                      ),
                                                    }),
                                                ],
                                              },
                                              e.id,
                                            );
                                          }
                                          return null;
                                        }),
                                      });
                                    default:
                                      return null;
                                  }
                                })(),
                        }),
                      ],
                    }),
            }),
            !v &&
              !x &&
              (0, s.jsxs)("div", {
                className: "session-detail-chat",
                children: [
                  (0, s.jsxs)("div", {
                    className: "session-chat-header",
                    children: [
                      (0, s.jsx)("img", {
                        src: _.default,
                        alt: "ShadowHint",
                        className: "session-chat-icon",
                      }),
                      (0, s.jsx)("h3", { children: t("sessionDetail.chatTitle") }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "session-chat-messages",
                    ref: L,
                    children:
                      0 === O.length
                        ? (0, s.jsx)("div", {
                            className: "session-chat-welcome",
                            children: (0, s.jsx)("p", { children: t("sessionDetail.chatWelcome") }),
                          })
                        : O.map((e, t) =>
                            (0, s.jsxs)(
                              "div",
                              {
                                className: `session-chat-message session-chat-message-${e.role}`,
                                children: [
                                  "assistant" === e.role &&
                                    (0, s.jsx)("img", {
                                      src: _.default,
                                      alt: "ShadowHint",
                                      className: "session-chat-avatar",
                                    }),
                                  (0, s.jsx)("div", {
                                    className: "session-chat-message-content",
                                    children: e.content
                                      ? (0, s.jsx)(u.default, {
                                          remarkPlugins: [p.default],
                                          children: e.content,
                                        })
                                      : M && t === O.length - 1
                                        ? (0, s.jsxs)("span", {
                                            className: "session-chat-typing",
                                            children: [
                                              (0, s.jsx)("span", {}),
                                              (0, s.jsx)("span", {}),
                                              (0, s.jsx)("span", {}),
                                            ],
                                          })
                                        : null,
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                  }),
                  (0, s.jsxs)("div", {
                    className: "session-chat-input-container",
                    children: [
                      (0, s.jsx)("input", {
                        type: "text",
                        className: "session-chat-input",
                        placeholder: t("sessionDetail.chatPlaceholder"),
                        value: B,
                        onChange: (e) => I(e.target.value),
                        onKeyDown: (e) => {
                          "Enter" !== e.key || e.shiftKey || (e.preventDefault(), oe());
                        },
                      }),
                      (0, s.jsx)("button", {
                        className: "session-chat-submit",
                        onClick: oe,
                        disabled: !B.trim() || M,
                        children: (0, s.jsx)("img", {
                          src: C.default,
                          alt: "Send",
                          className: "session-chat-submit-icon",
                        }),
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

export default SessionDetailPageWebpackModule;
