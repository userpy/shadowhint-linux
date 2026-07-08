/*
 * Recovered from renderer webpack module 46260.
 * Inferred module name: ZoomTipModal.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 69568
 */

function ZoomTipModalWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285),
    i = (r(n(68329)), n(99163));
  (n(69568),
    (t.default = ({ isOpen: e, onClose: t, productName: n }) => {
      const { t: r } = (0, i.useTranslation)();
      return e
        ? (0, o.jsx)("div", {
            className: "zoom-tip-overlay",
            onClick: t,
            children: (0, o.jsxs)("div", {
              className: "zoom-tip-modal",
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, o.jsxs)("div", {
                  className: "zoom-tip-header",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "zoom-tip-header-left",
                      children: [
                        (0, o.jsx)("div", {
                          className: "zoom-tip-icon",
                          children: (0, o.jsxs)("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                              (0, o.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
                              (0, o.jsx)("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
                              (0, o.jsx)("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
                            ],
                          }),
                        }),
                        (0, o.jsx)("h2", {
                          className: "zoom-tip-title",
                          children: r("sessions.zoomTipTitle"),
                        }),
                      ],
                    }),
                    (0, o.jsx)("button", {
                      className: "zoom-tip-close-btn",
                      onClick: t,
                      children: "×",
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "zoom-tip-content",
                  children: [
                    (0, o.jsx)("p", {
                      className: "zoom-tip-description",
                      children: r("sessions.zoomTipDescription", { productName: n }),
                    }),
                    (0, o.jsxs)("div", {
                      className: "zoom-tip-steps",
                      children: [
                        (0, o.jsxs)("div", {
                          className: "zoom-tip-step",
                          children: [
                            (0, o.jsx)("span", {
                              className: "zoom-tip-step-number",
                              children: "1",
                            }),
                            (0, o.jsx)("span", {
                              className: "zoom-tip-step-text",
                              children: r("sessions.zoomTipStep1"),
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "zoom-tip-step",
                          children: [
                            (0, o.jsx)("span", {
                              className: "zoom-tip-step-number",
                              children: "2",
                            }),
                            (0, o.jsx)("span", {
                              className: "zoom-tip-step-text",
                              children: r("sessions.zoomTipStep2"),
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "zoom-tip-step",
                          children: [
                            (0, o.jsx)("span", {
                              className: "zoom-tip-step-number",
                              children: "3",
                            }),
                            (0, o.jsx)("span", {
                              className: "zoom-tip-step-text",
                              children: r("sessions.zoomTipStep3"),
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "zoom-tip-step",
                          children: [
                            (0, o.jsx)("span", {
                              className: "zoom-tip-step-number",
                              children: "4",
                            }),
                            (0, o.jsx)("span", {
                              className: "zoom-tip-step-text",
                              children: r("sessions.zoomTipStep4"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)("img", {
                      src: "https://shadowhint.com/images/zoom-hide.png",
                      alt: "Zoom settings",
                      className: "zoom-tip-image",
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: "zoom-tip-footer",
                  children: (0, o.jsx)("button", {
                    className: "zoom-tip-dismiss-btn",
                    onClick: t,
                    children: r("sessions.zoomTipDismiss"),
                  }),
                }),
              ],
            }),
          })
        : null;
    }));
}

export default ZoomTipModalWebpackModule;
