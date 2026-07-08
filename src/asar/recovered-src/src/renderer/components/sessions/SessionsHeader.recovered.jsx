/*
 * Recovered from renderer webpack module 8859.
 * Inferred module name: SessionsHeader.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 7680
 * - 70541 (IconAsset)
 * - 64521 (ExamEasyAsset)
 * - 33894 (PsykitAsset)
 */

function SessionsHeaderWebpackModule(e, t, n) {
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
    d = a(n(7680)),
    u = a(n(70541)),
    p = a(n(64521)),
    A = a(n(33894));
  t.default = ({
    productName: e,
    variant: t,
    userName: n,
    userEmail: r,
    subscriptionName: o,
    subscriptionEndDate: i,
    daysRemaining: a,
    showBackButton: g,
    onBack: m,
    onBilling: f,
    onCheckUpdates: h,
    onHelp: b,
    onLogout: _,
    onMinimize: C,
    onMaximize: E,
    onClose: y,
    searchQuery: v = "",
    onSearchChange: S,
    searchResults: x = [],
    isSearching: w = !1,
    onResultClick: k,
    searchMode: T = "sessions",
    noteResults: B = [],
    onNoteClick: I,
  }) => {
    const { t: R } = (0, c.useTranslation)(),
      [N, O] = (0, l.useState)(!1),
      [D, M] = (0, l.useState)(!1),
      P = (0, l.useRef)(null),
      L = (0, l.useRef)(null),
      z = (0, l.useMemo)(() => {
        switch (t) {
          case "exameasy":
            return p.default;
          case "psykit":
            return A.default;
          default:
            return u.default;
        }
      }, [t]);
    (0, l.useEffect)(() => {
      const e = (e) => {
        (P.current && !P.current.contains(e.target) && O(!1),
          L.current && !L.current.contains(e.target) && M(!1));
      };
      return (
        (N || D) && document.addEventListener("mousedown", e),
        () => {
          document.removeEventListener("mousedown", e);
        }
      );
    }, [N, D]);
    const U = (e) => {
        (O(!1), e());
      },
      F = "notes" === T ? B.length > 0 : x.length > 0,
      j = D && (v.length > 0 || F);
    return (0, s.jsxs)("header", {
      className: "sessions-header",
      children: [
        (0, s.jsxs)("div", {
          className: "sessions-header-left",
          children: [
            (0, s.jsx)("div", {
              className: "sessions-header-logo",
              children: (0, s.jsx)("img", { src: z, alt: e, draggable: !1 }),
            }),
            (0, s.jsx)("span", { className: "sessions-header-title", children: e }),
            g &&
              m &&
              (0, s.jsx)("button", {
                type: "button",
                className: "sessions-header-back",
                onClick: m,
                children: (0, s.jsx)("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  children: (0, s.jsx)("path", {
                    d: "M10 4L6 8l4 4",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
              }),
          ],
        }),
        S &&
          (0, s.jsxs)("div", {
            className: "sessions-header-search",
            ref: L,
            children: [
              (0, s.jsxs)("div", {
                className: "sessions-header-search-container " + (D || v ? "active" : ""),
                children: [
                  !v &&
                    (0, s.jsxs)("div", {
                      className: "sessions-header-search-placeholder",
                      children: [
                        (0, s.jsx)("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          children: (0, s.jsx)("path", {
                            d: "M14.5 14.5L10.5 10.5M11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5Z",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                          }),
                        }),
                        (0, s.jsx)("span", {
                          children: R(
                            "notes" === T
                              ? "notes.searchPlaceholder"
                              : "sessions.searchPlaceholder",
                          ),
                        }),
                      ],
                    }),
                  (0, s.jsx)("input", {
                    type: "text",
                    className: "sessions-header-search-input",
                    value: v,
                    onChange: (e) => S(e.target.value),
                    onFocus: () => M(!0),
                  }),
                  v &&
                    (0, s.jsx)("button", {
                      type: "button",
                      className: "sessions-header-search-clear",
                      onClick: () => S(""),
                      children: (0, s.jsx)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        children: (0, s.jsx)("path", {
                          d: "M9 3L3 9M3 3L9 9",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          strokeLinecap: "round",
                        }),
                      }),
                    }),
                ],
              }),
              j &&
                (0, s.jsx)("div", {
                  className: "sessions-search-dropdown",
                  children: w
                    ? (0, s.jsxs)("div", {
                        className: "sessions-search-dropdown-loading",
                        children: [
                          (0, s.jsx)("div", { className: "sessions-spinner-small" }),
                          (0, s.jsx)("span", { children: R("sessions.searching") }),
                        ],
                      })
                    : "notes" === T
                      ? 0 === B.length && v
                        ? (0, s.jsx)("div", {
                            className: "sessions-search-dropdown-empty",
                            children: R("notes.noResults"),
                          })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)("div", {
                                className: "sessions-search-dropdown-header",
                                children: v
                                  ? R("notes.searchResultsCount", { count: B.length })
                                  : R("notes.recentNotes"),
                              }),
                              (0, s.jsx)("div", {
                                className: "sessions-search-dropdown-list",
                                children: B.map((e) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className: "sessions-search-result-item",
                                      onClick: () => {
                                        return ((t = e.id), M(!1), void I?.(t));
                                        var t;
                                      },
                                      children: [
                                        (0, s.jsxs)("svg", {
                                          className: "sessions-search-result-icon",
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 16 16",
                                          fill: "none",
                                          children: [
                                            (0, s.jsx)("path", {
                                              d: "M4 2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z",
                                              stroke: "currentColor",
                                              strokeWidth: "1.2",
                                            }),
                                            (0, s.jsx)("path", {
                                              d: "M5 5h6M5 8h6M5 11h3",
                                              stroke: "currentColor",
                                              strokeWidth: "1.2",
                                              strokeLinecap: "round",
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: "sessions-search-result-content",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className: "sessions-search-result-title",
                                              children: e.title || R("notes.untitled"),
                                            }),
                                            e.content &&
                                              (0, s.jsx)("div", {
                                                className: "sessions-search-result-preview",
                                                children:
                                                  e.content.length > 80
                                                    ? e.content.slice(0, 80) + "..."
                                                    : e.content,
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                            ],
                          })
                      : 0 === x.length && v
                        ? (0, s.jsx)("div", {
                            className: "sessions-search-dropdown-empty",
                            children: R("sessions.searchNoResults"),
                          })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)("div", {
                                className: "sessions-search-dropdown-header",
                                children: v
                                  ? R("sessions.searchResultsCount", { count: x.length })
                                  : R("sessions.recentSessions"),
                              }),
                              (0, s.jsx)("div", {
                                className: "sessions-search-dropdown-list",
                                children: x.map((e) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className: "sessions-search-result-item",
                                      onClick: () => {
                                        return ((t = e.sessionId), M(!1), void k?.(t));
                                        var t;
                                      },
                                      children: [
                                        (0, s.jsxs)("svg", {
                                          className: "sessions-search-result-icon",
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 16 16",
                                          fill: "none",
                                          children: [
                                            (0, s.jsx)("path", {
                                              d: "M3 2.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5z",
                                              stroke: "currentColor",
                                              strokeWidth: "1.2",
                                            }),
                                            (0, s.jsx)("path", {
                                              d: "M5 5h6M5 8h6M5 11h4",
                                              stroke: "currentColor",
                                              strokeWidth: "1.2",
                                              strokeLinecap: "round",
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: "sessions-search-result-content",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className: "sessions-search-result-title",
                                              children: e.sessionTitle,
                                            }),
                                            e.text &&
                                              (0, s.jsx)("div", {
                                                className: "sessions-search-result-preview",
                                                children:
                                                  e.text.length > 80
                                                    ? e.text.slice(0, 80) + "..."
                                                    : e.text,
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                }),
            ],
          }),
        (0, s.jsxs)("div", {
          className: "sessions-header-right",
          children: [
            (0, s.jsxs)("div", {
              className: "sessions-profile-wrapper",
              ref: P,
              children: [
                (0, s.jsx)("button", {
                  type: "button",
                  className: "sessions-profile-btn",
                  onClick: () => O(!N),
                  "aria-expanded": N,
                  "aria-haspopup": "true",
                  children: (0, s.jsx)(d.default, { size: 24, color: "rgba(255, 255, 255, 0.8)" }),
                }),
                N &&
                  (0, s.jsxs)("div", {
                    className: "sessions-profile-menu",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "sessions-profile-menu-header",
                        children: [
                          n &&
                            (0, s.jsx)("div", { className: "sessions-profile-name", children: n }),
                          r &&
                            (0, s.jsx)("div", { className: "sessions-profile-email", children: r }),
                          o &&
                            (0, s.jsxs)("div", {
                              className: "sessions-profile-subscription",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "sessions-profile-plan",
                                  children: o,
                                }),
                                i &&
                                  (0, s.jsx)("div", {
                                    className: "sessions-profile-expires",
                                    children: R("sessions.subscription.validUntil", {
                                      date: new Date(i).toLocaleString(void 0, {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      }),
                                    }),
                                  }),
                                void 0 !== a &&
                                  a > 0 &&
                                  !i &&
                                  (0, s.jsx)("div", {
                                    className: "sessions-profile-expires",
                                    children: R("sessions.subscription.daysLeft", { count: a }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: "sessions-profile-menu-divider" }),
                      (0, s.jsxs)("button", {
                        type: "button",
                        className: "sessions-profile-menu-item",
                        onClick: () => U(f),
                        children: [
                          (0, s.jsxs)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: [
                              (0, s.jsx)("rect", {
                                x: "1",
                                y: "3",
                                width: "14",
                                height: "10",
                                rx: "1",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                              }),
                              (0, s.jsx)("path", {
                                d: "M1 6h14",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                              }),
                            ],
                          }),
                          (0, s.jsx)("span", { children: R("sessions.menu.billing") }),
                        ],
                      }),
                      (0, s.jsxs)("button", {
                        type: "button",
                        className: "sessions-profile-menu-item",
                        onClick: () => U(h),
                        children: [
                          (0, s.jsxs)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: [
                              (0, s.jsx)("path", {
                                d: "M8 2v3M8 11v3M2 8h3M11 8h3",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                              }),
                              (0, s.jsx)("path", {
                                d: "M4.5 4.5l2 2M9.5 9.5l2 2M4.5 11.5l2-2M9.5 6.5l2-2",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                              }),
                            ],
                          }),
                          (0, s.jsx)("span", { children: R("versionInfo.checkUpdates") }),
                        ],
                      }),
                      (0, s.jsxs)("button", {
                        type: "button",
                        className: "sessions-profile-menu-item",
                        onClick: () => U(b),
                        children: [
                          (0, s.jsxs)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: [
                              (0, s.jsx)("circle", {
                                cx: "8",
                                cy: "8",
                                r: "6",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                              }),
                              (0, s.jsx)("path", {
                                d: "M6 6.5a2 2 0 1 1 2 2v1",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                              }),
                              (0, s.jsx)("circle", {
                                cx: "8",
                                cy: "11.5",
                                r: "0.5",
                                fill: "currentColor",
                              }),
                            ],
                          }),
                          (0, s.jsx)("span", { children: R("sessions.menu.help") }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: "sessions-profile-menu-divider" }),
                      (0, s.jsxs)("button", {
                        type: "button",
                        className: "sessions-profile-menu-item sessions-profile-menu-item-danger",
                        onClick: () => U(_),
                        children: [
                          (0, s.jsx)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: (0, s.jsx)("path", {
                              d: "M6 14H3a1 1 0 01-1-1V3a1 1 0 011-1h3M11 11l3-3-3-3M14 8H6",
                              stroke: "currentColor",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          }),
                          (0, s.jsx)("span", { children: R("sessions.menu.logout") }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "sessions-window-controls",
              children: [
                (0, s.jsx)("button", {
                  type: "button",
                  className: "sessions-window-btn",
                  onClick: C,
                  children: (0, s.jsx)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: (0, s.jsx)("path", {
                      d: "M2 6h8",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                    }),
                  }),
                }),
                (0, s.jsx)("button", {
                  type: "button",
                  className: "sessions-window-btn",
                  onClick: E,
                  children: (0, s.jsx)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: (0, s.jsx)("rect", {
                      x: "2",
                      y: "2",
                      width: "8",
                      height: "8",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      rx: "1",
                    }),
                  }),
                }),
                (0, s.jsx)("button", {
                  type: "button",
                  className: "sessions-window-btn sessions-window-btn-close",
                  onClick: y,
                  children: (0, s.jsx)("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: (0, s.jsx)("path", {
                      d: "M2 2l8 8M10 2l-8 8",
                      stroke: "currentColor",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
}

export default SessionsHeaderWebpackModule;
