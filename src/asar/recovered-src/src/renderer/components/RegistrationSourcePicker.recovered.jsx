/*
 * Recovered from renderer webpack module 42461.
 * Inferred module name: RegistrationSourcePicker.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 90971
 */

function RegistrationSourcePickerWebpackModule(e, t, n) {
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
    s = i(n(68329));
  n(90971);
  const l = [
    {
      id: "yandex",
      icon: (0, a.jsx)(
        () =>
          (0, a.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "6 5 12 14",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsx)("path", {
              d: "M13.32 7.666h-.924c-1.694 0-2.585.858-2.585 2.123 0 1.43.616 2.1 1.881 2.959l1.045.704-3.003 4.487H7.49l2.695-4.014c-1.55-1.111-2.42-2.19-2.42-4.015 0-2.288 1.595-3.85 4.62-3.85h3.003v11.868H13.32V7.666z",
            }),
          }),
        {},
      ),
      label: "Яндекс",
    },
    {
      id: "telegram",
      icon: (0, a.jsx)(
        () =>
          (0, a.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, a.jsx)("path", { d: "m22 2-7 20-4-9-9-4Z" }),
              (0, a.jsx)("path", { d: "M22 2 11 13" }),
            ],
          }),
        {},
      ),
      label: "Telegram",
    },
    {
      id: "google",
      icon: (0, a.jsx)(
        () =>
          (0, a.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, a.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
              (0, a.jsx)("path", { d: "m21 21-4.3-4.3" }),
            ],
          }),
        {},
      ),
      label: "Google",
    },
    {
      id: "friend",
      icon: (0, a.jsx)(
        () =>
          (0, a.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, a.jsx)("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
              (0, a.jsx)("circle", { cx: "9", cy: "7", r: "4" }),
              (0, a.jsx)("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
              (0, a.jsx)("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
            ],
          }),
        {},
      ),
      label: "От знакомых",
    },
    {
      id: "youtube",
      icon: (0, a.jsx)(
        () =>
          (0, a.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0, a.jsx)("polygon", { points: "6 3 20 12 6 21 6 3" }),
          }),
        {},
      ),
      label: "YouTube",
    },
    {
      id: "instagram",
      icon: (0, a.jsx)(
        () =>
          (0, a.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, a.jsx)("path", {
                d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
              }),
              (0, a.jsx)("circle", { cx: "12", cy: "13", r: "3" }),
            ],
          }),
        {},
      ),
      label: "Instagram",
    },
    {
      id: "tiktok",
      icon: (0, a.jsx)(
        () =>
          (0, a.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, a.jsx)("path", { d: "M9 18V5l12-2v13" }),
              (0, a.jsx)("circle", { cx: "6", cy: "18", r: "3" }),
              (0, a.jsx)("circle", { cx: "18", cy: "16", r: "3" }),
            ],
          }),
        {},
      ),
      label: "TikTok",
    },
    {
      id: "other",
      icon: (0, a.jsx)(
        () =>
          (0, a.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, a.jsx)("circle", { cx: "12", cy: "12", r: "1" }),
              (0, a.jsx)("circle", { cx: "19", cy: "12", r: "1" }),
              (0, a.jsx)("circle", { cx: "5", cy: "12", r: "1" }),
            ],
          }),
        {},
      ),
      label: "Другое",
    },
  ];
  t.default = ({ onComplete: e }) => {
    const [t, n] = (0, s.useState)(!1);
    return (0, a.jsx)("div", {
      className: "registration-source-picker",
      children: (0, a.jsxs)("div", {
        className: "card mt-lg",
        children: [
          (0, a.jsx)("h2", {
            className: "registration-source-title",
            children: "Откуда вы узнали о нас?",
          }),
          (0, a.jsx)("p", {
            className: "registration-source-subtitle",
            children: "Это поможет нам стать лучше",
          }),
          t
            ? (0, a.jsx)("div", {
                className: "registration-source-loading",
                children: (0, a.jsx)("div", { className: "loading-spinner" }),
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", {
                    className: "registration-source-grid",
                    children: l.map((t) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className: "registration-source-card",
                          onClick: () =>
                            (async (t) => {
                              n(!0);
                              try {
                                await window.api.user.setRegistrationSource(t);
                              } catch (e) {
                                console.error("Failed to set registration source:", e);
                              }
                              e();
                            })(t.id),
                          children: [
                            (0, a.jsx)("span", {
                              className: "registration-source-card-emoji",
                              children: t.icon,
                            }),
                            (0, a.jsx)("span", {
                              className: "registration-source-card-label",
                              children: t.label,
                            }),
                          ],
                        },
                        t.id,
                      ),
                    ),
                  }),
                  (0, a.jsx)("div", {
                    style: { textAlign: "center" },
                    children: (0, a.jsx)("button", {
                      type: "button",
                      className: "registration-source-skip",
                      onClick: () => {
                        e();
                      },
                      children: "Пропустить",
                    }),
                  }),
                ],
              }),
        ],
      }),
    });
  };
}

export default RegistrationSourcePickerWebpackModule;
