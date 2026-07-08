/*
 * Recovered from renderer webpack module 127.
 * Inferred module name: SessionsPage.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 49824
 * - 99163
 * - 46193 (SessionRow)
 * - 25861 (DateGroupHeader)
 * - 8859 (SessionsHeader)
 * - 51028 (NoteEditor)
 * - 46260 (ZoomTipModal)
 * - 2941 (SessionDates)
 * - 62254 (AuthService)
 * - 65356 (AnalyticsService)
 * - 723
 * - 69568
 */

function SessionsPageWebpackModule(e, t, n) {
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
    u = a(n(46193)),
    p = a(n(25861)),
    A = a(n(8859)),
    g = a(n(51028)),
    m = a(n(46260)),
    f = n(2941),
    h = n(62254),
    b = n(65356);
  (n(723), n(69568));
  const _ = (e, t) => {
      if (0 === t.length) return e;
      const n = new Set(e.map((e) => e.id)),
        r = [...e];
      return (
        t.forEach((e) => {
          n.has(e.id) || r.push(e);
        }),
        r
      );
    },
    C = new Set(["shadowhint", "exameasy"]);
  t.default = () => {
    const { t: e } = (0, d.useTranslation)(),
      t = (0, c.useNavigate)(),
      [n, r] = (0, l.useState)("sessions"),
      o = (e) => {
        ((0, b.trackUI)("button_clicked", "switch_hub_tab", { context: e }),
          r(e),
          H(""),
          q([]),
          U(""));
      },
      [i, a] = (0, l.useState)([]),
      E = (0, l.useRef)([]),
      [y, v] = (0, l.useState)(!0),
      [S, x] = (0, l.useState)(null),
      [w, k] = (0, l.useState)(1),
      [T, B] = (0, l.useState)(!0),
      [I, R] = (0, l.useState)(0),
      [N, O] = (0, l.useState)([]),
      [D, M] = (0, l.useState)(!1),
      [P, L] = (0, l.useState)(!1),
      [z, U] = (0, l.useState)(""),
      [F, j] = (0, l.useState)(null),
      [G, W] = (0, l.useState)(!1),
      [Y, H] = (0, l.useState)(""),
      [V, q] = (0, l.useState)([]),
      [Q, $] = (0, l.useState)(!1),
      [K, X] = (0, l.useState)(0),
      [Z, J] = (0, l.useState)("ShadowHint"),
      [ee, te] = (0, l.useState)(),
      [ne, re] = (0, l.useState)(),
      [oe, ie] = (0, l.useState)(null),
      [ae, se] = (0, l.useState)(),
      [le, ce] = (0, l.useState)(),
      [de, ue] = (0, l.useState)(),
      [pe, Ae] = (0, l.useState)(!1),
      ge = oe?.variant?.toLowerCase(),
      me = Z?.toLowerCase(),
      fe = "exameasy" === ge || "exameasy" === me ? "ExamEast" : Z;
    ((0, l.useEffect)(() => {
      if (!ge) return;
      const e = navigator.platform.toLowerCase().includes("mac"),
        t = localStorage.getItem("dontShowZoomTip"),
        n = C.has(ge);
      Ae(!(!e || t || !n));
    }, [ge]),
      (0, l.useEffect)(() => {
        ((async () => {
          try {
            if (window.api?.invoke) {
              const e = await window.api.invoke("config:getVariant");
              e && (J(e.productName || "ShadowHint"), ie(e));
            }
          } catch (e) {
            console.error("Error loading variant config:", e);
          }
        })(),
          (async () => {
            try {
              const { user: e } = await (0, h.getUserData)();
              e && (te(e.name), re(e.email));
            } catch (e) {
              console.error("Error loading user data:", e);
            }
          })(),
          (async () => {
            try {
              const e = await window.api.auth.getUserSubscription();
              e.success &&
                e.data &&
                (se(e.data.subscription?.plan?.name),
                ce(e.data.subscription?.endDate),
                ue(e.data.daysRemaining));
            } catch (e) {
              console.error("Error loading subscription:", e);
            }
          })());
      }, []));
    const he = (0, l.useCallback)(
      async (t, n = !1) => {
        try {
          (v(!0), x(null));
          const r = await window.api.session.listSessions(t, 20);
          if (r.success && r.sessions) {
            const e = n ? E.current : [],
              t = n ? _(r.sessions || [], e) : r.sessions || [],
              o = n ? t.length - e.length : t.length;
            ((E.current = t), a(t));
            const i = "number" == typeof r.total && Number.isFinite(r.total) ? r.total : void 0,
              s = "number" == typeof i && i >= 0,
              l = s ? i : t.length;
            (R(l), B(s ? t.length < i : (!n || 0 !== o) && 20 === r.sessions.length));
          } else x(r.error || e("sessions.error"));
        } catch (t) {
          (console.error("Error loading sessions:", t), x(e("sessions.error")));
        } finally {
          v(!1);
        }
      },
      [e],
    );
    ((0, l.useEffect)(() => {
      he(1);
    }, [he]),
      (0, l.useEffect)(() => {
        E.current = i;
      }, [i]));
    const be = (0, l.useCallback)(async () => {
      try {
        M(!0);
        const e = await window.api.notes.list();
        (e.success && e.notes && O(e.notes), L(!0));
      } catch (e) {
        console.error("Error loading notes:", e);
      } finally {
        M(!1);
      }
    }, []);
    (0, l.useEffect)(() => {
      "notes" !== n || P || D || be();
    }, [n, P, D, be]);
    const _e = (0, l.useRef)(null),
      Ce = (0, l.useCallback)(
        (e) => {
          (U(e),
            _e.current && clearTimeout(_e.current),
            e.trim()
              ? (_e.current = setTimeout(async () => {
                  try {
                    M(!0);
                    const t = await window.api.notes.search(e);
                    t.success && t.notes && O(t.notes);
                  } catch (e) {
                    console.error("Notes search error:", e);
                  } finally {
                    M(!1);
                  }
                }, 300))
              : be());
        },
        [be],
      ),
      Ee = async (t) => {
        if (confirm(e("notes.deleteConfirm"))) {
          (0, b.trackUI)("button_clicked", "delete_note", { context: t });
          try {
            (await window.api.notes.delete(t), j(null), be());
          } catch (e) {
            console.error("Error deleting note:", e);
          }
        }
      },
      ye = (0, l.useCallback)(async () => {
        if (!(y || Q || Y.trim() || "sessions" !== n))
          try {
            const e = await window.api.session.listSessions(1, 20);
            if (e.success && e.sessions) {
              const t = _(e.sessions || [], E.current);
              ((E.current = t), a(t));
              const n = "number" == typeof e.total && Number.isFinite(e.total) ? e.total : void 0;
              "number" == typeof n && n >= 0 && (R(n), B(t.length < n));
            }
          } catch (e) {
            console.error("Error refreshing sessions:", e);
          }
      }, [n, Q, y, Y]);
    (0, l.useEffect)(() => {
      if ("sessions" !== n) return;
      const e = setInterval(() => {
        ye();
      }, 15e3);
      return () => clearInterval(e);
    }, [n, ye]);
    const ve = (0, f.groupSessionsByDate)(i, e),
      Se = (e) => {
        ((0, b.trackUI)("button_clicked", "view_session", { context: e }), t(`/session/${e}`));
      },
      xe = (0, l.useRef)(null),
      we = (0, l.useCallback)((e) => {
        if ((H(e), xe.current && clearTimeout(xe.current), !e.trim()))
          return (q([]), X(0), void $(!1));
        ($(!0),
          (xe.current = setTimeout(async () => {
            try {
              const t = await window.api.session.searchSessions(e, 20, 0);
              t.success && t.results && (q(t.results), X(t.total || 0));
            } catch (e) {
              console.error("Search error:", e);
            } finally {
              $(!1);
            }
          }, 400)));
      }, []);
    return (0, s.jsxs)("div", {
      className: "sessions-page",
      children: [
        (0, s.jsx)(A.default, {
          productName: Z,
          variant: oe?.variant,
          userName: ee,
          userEmail: ne,
          subscriptionName: ae,
          subscriptionEndDate: le,
          daysRemaining: de,
          onBilling: async () => {
            (0, b.trackUI)("button_clicked", "open_billing", { context: "sessions_header" });
            const e = oe?.websiteUrl
              ? `${oe.websiteUrl}/profile/subscription`
              : "https://shadowhint.com/profile/subscription";
            window.api?.shell ? window.api.shell.openExternal(e) : window.open(e, "_blank");
          },
          onCheckUpdates: async () => {
            ((0, b.trackUI)("button_clicked", "check_updates", { context: "sessions_header" }),
              await window.api.updater.checkForUpdates());
          },
          onHelp: async () => {
            (0, b.trackUI)("button_clicked", "open_help", { context: "sessions_header" });
            const e = oe?.telegramSupport || "https://t.me/shadowhintsupport";
            window.api?.shell ? window.api.shell.openExternal(e) : window.open(e, "_blank");
          },
          onLogout: async () => {
            (0, b.trackUI)("button_clicked", "logout", { context: "sessions_header" });
            try {
              (await (0, h.logout)({ skipRedirect: !0 }), await window.api.sessions.hide());
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
          searchQuery: "notes" === n ? z : Y,
          onSearchChange: "notes" === n ? Ce : we,
          searchResults: V,
          isSearching: "notes" === n ? D : Q,
          onResultClick: Se,
          searchMode: n,
          noteResults: N.map((e) => ({
            id: e.id,
            title: e.title,
            content: e.content,
            updatedAt: e.updatedAt,
          })),
          onNoteClick: (e) => {
            const t = N.find((t) => t.id === e);
            t && j(t);
          },
        }),
        (0, s.jsxs)("div", {
          className: "sessions-content " + (F || G ? "editing-note" : ""),
          children: [
            (0, s.jsx)("div", {
              className: "sessions-page-header",
              children: (0, s.jsxs)("div", {
                className: "sessions-content-inner",
                children: [
                  (0, s.jsxs)("div", {
                    className: "sessions-page-header-left",
                    children: [
                      (0, s.jsx)("h1", {
                        className: "sessions-page-title",
                        children: e("sessions" === n ? "sessions.myTitle" : "notes.myTitle", {
                          productName: Z,
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "hub-tabs",
                        children: [
                          (0, s.jsx)("button", {
                            className: "hub-tab " + ("sessions" === n ? "active" : ""),
                            onClick: () => o("sessions"),
                            children: e("sessions.hubTabs.sessions"),
                          }),
                          (0, s.jsx)("button", {
                            className: "hub-tab " + ("notes" === n ? "active" : ""),
                            onClick: () => o("notes"),
                            children: e("sessions.hubTabs.notes"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  "sessions" === n
                    ? (0, s.jsxs)("button", {
                        className: "sessions-start-btn",
                        onClick: async () => {
                          ((0, b.trackUI)("button_clicked", "start_new_session", {
                            context: "sessions_page",
                          }),
                            await window.api.sessions.hide(),
                            await window.api.suggestion.openInNewWindow(" "));
                        },
                        children: [
                          (0, s.jsx)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: (0, s.jsx)("path", {
                              d: "M4 2l10 6-10 6V2z",
                              fill: "currentColor",
                            }),
                          }),
                          e("sessions.startSession"),
                        ],
                      })
                    : (0, s.jsxs)("button", {
                        className: "sessions-start-btn",
                        onClick: () => W(!0),
                        children: [
                          (0, s.jsx)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: (0, s.jsx)("path", {
                              d: "M8 2v12M2 8h12",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                            }),
                          }),
                          e("notes.create"),
                        ],
                      }),
                ],
              }),
            }),
            (0, s.jsx)("div", {
              className: "sessions-content-inner " + (F || G ? "editing-note" : ""),
              children:
                "sessions" === n
                  ? (0, s.jsx)(s.Fragment, {
                      children:
                        y && 0 === i.length
                          ? (0, s.jsxs)("div", {
                              className: "sessions-loading",
                              children: [
                                (0, s.jsx)("div", { className: "sessions-spinner" }),
                                (0, s.jsx)("span", { children: e("sessions.loading") }),
                              ],
                            })
                          : S
                            ? (0, s.jsxs)("div", {
                                className: "sessions-error",
                                children: [
                                  (0, s.jsx)("p", { children: S }),
                                  (0, s.jsx)("button", {
                                    onClick: () => {
                                      ((0, b.trackUI)("button_clicked", "refresh_sessions", {
                                        context: "sessions_page",
                                      }),
                                        k(1),
                                        he(1));
                                    },
                                    children: e("sessions.retry"),
                                  }),
                                ],
                              })
                            : 0 === i.length
                              ? (0, s.jsxs)("div", {
                                  className: "sessions-empty",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: "sessions-empty-icon",
                                      children: (0, s.jsxs)("svg", {
                                        width: "48",
                                        height: "48",
                                        viewBox: "0 0 48 48",
                                        fill: "none",
                                        children: [
                                          (0, s.jsx)("path", {
                                            d: "M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.822 0-16-7.178-16-16S15.178 8 24 8s16 7.178 16 16-7.178 16-16 16z",
                                            fill: "currentColor",
                                            opacity: "0.3",
                                          }),
                                          (0, s.jsx)("path", {
                                            d: "M24 14v12l8 4",
                                            stroke: "currentColor",
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            opacity: "0.5",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, s.jsx)("p", { children: e("sessions.empty") }),
                                  ],
                                })
                              : (0, s.jsxs)("div", {
                                  className: "sessions-list",
                                  children: [
                                    Object.entries(ve).map(([e, t]) =>
                                      (0, s.jsxs)(
                                        "div",
                                        {
                                          className: "sessions-group",
                                          children: [
                                            (0, s.jsx)(p.default, { label: e }),
                                            t.map((e) =>
                                              (0, s.jsx)(
                                                u.default,
                                                { session: e, onClick: () => Se(e.id) },
                                                e.id,
                                              ),
                                            ),
                                          ],
                                        },
                                        e,
                                      ),
                                    ),
                                    T &&
                                      (0, s.jsx)("button", {
                                        className: "sessions-load-more",
                                        onClick: () => {
                                          if (!y && T) {
                                            (0, b.trackUI)("button_clicked", "load_more_sessions", {
                                              context: "sessions_page",
                                            });
                                            const e = w + 1;
                                            (k(e), he(e, !0));
                                          }
                                        },
                                        disabled: y,
                                        children: e(y ? "sessions.loading" : "sessions.loadMore"),
                                      }),
                                  ],
                                }),
                    })
                  : (0, s.jsx)(s.Fragment, {
                      children:
                        F || G
                          ? (0, s.jsx)(g.default, {
                              note: F || void 0,
                              onSave: async (e, t) => {
                                (0, b.trackUI)("button_clicked", F ? "save_note" : "create_note", {
                                  context: F?.id || "new",
                                });
                                try {
                                  (F
                                    ? await window.api.notes.update(F.id, e, t)
                                    : await window.api.notes.create(e, t),
                                    j(null),
                                    W(!1),
                                    be());
                                } catch (e) {
                                  console.error("Error saving note:", e);
                                }
                              },
                              onCancel: () => {
                                (j(null), W(!1));
                              },
                              onDelete: F ? () => Ee(F.id) : void 0,
                            })
                          : (0, s.jsx)(s.Fragment, {
                              children:
                                D && 0 === N.length
                                  ? (0, s.jsxs)("div", {
                                      className: "sessions-loading",
                                      children: [
                                        (0, s.jsx)("div", { className: "sessions-spinner" }),
                                        (0, s.jsx)("span", { children: e("common.loading") }),
                                      ],
                                    })
                                  : 0 === N.length
                                    ? (0, s.jsxs)("div", {
                                        className: "notes-empty",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className: "notes-empty-icon",
                                            children: (0, s.jsxs)("svg", {
                                              width: "48",
                                              height: "48",
                                              viewBox: "0 0 48 48",
                                              fill: "none",
                                              children: [
                                                (0, s.jsx)("path", {
                                                  d: "M12 8h24a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z",
                                                  stroke: "currentColor",
                                                  strokeWidth: "2",
                                                  opacity: "0.3",
                                                }),
                                                (0, s.jsx)("path", {
                                                  d: "M16 16h16M16 24h12M16 32h8",
                                                  stroke: "currentColor",
                                                  strokeWidth: "2",
                                                  strokeLinecap: "round",
                                                  opacity: "0.5",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, s.jsx)("p", {
                                            children: e(z ? "notes.noResults" : "notes.empty"),
                                          }),
                                        ],
                                      })
                                    : (0, s.jsx)("div", {
                                        className: "notes-list",
                                        children: N.map((t) =>
                                          (0, s.jsxs)(
                                            "div",
                                            {
                                              className: "note-card",
                                              onClick: () => j(t),
                                              children: [
                                                (0, s.jsxs)("div", {
                                                  className: "note-card-header",
                                                  children: [
                                                    (0, s.jsx)("h3", {
                                                      className: "note-card-title",
                                                      children: t.title || e("notes.untitled"),
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      className: "note-card-actions",
                                                      children: [
                                                        (0, s.jsx)("button", {
                                                          className: "note-card-action",
                                                          onClick: (e) => {
                                                            (e.stopPropagation(), j(t));
                                                          },
                                                          children: (0, s.jsx)("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 14 14",
                                                            fill: "none",
                                                            children: (0, s.jsx)("path", {
                                                              d: "M10 2l2 2-7 7H3v-2l7-7z",
                                                              stroke: "currentColor",
                                                              strokeWidth: "1.5",
                                                              strokeLinecap: "round",
                                                              strokeLinejoin: "round",
                                                            }),
                                                          }),
                                                        }),
                                                        (0, s.jsx)("button", {
                                                          className:
                                                            "note-card-action note-card-action-delete",
                                                          onClick: (e) => {
                                                            (e.stopPropagation(), Ee(t.id));
                                                          },
                                                          children: (0, s.jsx)("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 14 14",
                                                            fill: "none",
                                                            children: (0, s.jsx)("path", {
                                                              d: "M3 4h8l-.5 8H3.5L3 4zM5 4V2h4v2M2 4h10",
                                                              stroke: "currentColor",
                                                              strokeWidth: "1.5",
                                                              strokeLinecap: "round",
                                                              strokeLinejoin: "round",
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, s.jsxs)("p", {
                                                  className: "note-card-preview",
                                                  children: [
                                                    t.content.slice(0, 150),
                                                    t.content.length > 150 ? "..." : "",
                                                  ],
                                                }),
                                                t.updatedAt &&
                                                  (0, s.jsx)("span", {
                                                    className: "note-card-date",
                                                    children: new Date(
                                                      t.updatedAt,
                                                    ).toLocaleDateString(),
                                                  }),
                                              ],
                                            },
                                            t.id,
                                          ),
                                        ),
                                      }),
                            }),
                    }),
            }),
          ],
        }),
        (0, s.jsx)(m.default, {
          isOpen: pe,
          onClose: () => {
            (localStorage.setItem("dontShowZoomTip", "true"), Ae(!1));
          },
          productName: fe,
        }),
      ],
    });
  };
}

export default SessionsPageWebpackModule;
