/*
 * Recovered from renderer webpack module 15724.
 * Inferred module name: MicrophoneSelector.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 50360
 * - 99163
 * - 369
 */

function MicrophoneSelectorWebpackModule(e, t, n) {
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
    l = n(50360),
    c = n(99163);
  (n(369),
    (t.default = ({
      isOpen: e,
      onToggle: t,
      onMicrophoneSelect: n,
      selectedDeviceId: r,
      currentMicrophoneName: o,
    }) => {
      const { t: i } = (0, c.useTranslation)(),
        [d, u] = (0, s.useState)([]),
        [p, A] = (0, s.useState)(!1),
        g = (0, s.useRef)(null),
        m = (0, s.useRef)(null),
        [f, h] = (0, s.useState)({ top: 0, left: 0 }),
        b = async () => {
          try {
            (A(!0), console.log("Начинаем загрузку аудио устройств..."));
            let e = await navigator.mediaDevices.enumerateDevices();
            if (
              (console.log("Устройства без getUserMedia:", e),
              !e.some((e) => "audioinput" === e.kind && e.label && e.label.length > 0))
            ) {
              console.log("Labels пустые, запрашиваем getUserMedia...");
              try {
                ((await navigator.mediaDevices.getUserMedia({ audio: !0 }))
                  .getTracks()
                  .forEach((e) => e.stop()),
                  console.log("getUserMedia успешно, повторно получаем устройства..."),
                  (e = await navigator.mediaDevices.enumerateDevices()),
                  console.log("Устройства после getUserMedia:", e));
              } catch (e) {
                console.error(i("microphoneSelector.getUserMediaError"), e);
              }
            }
            const t = (e) => {
                const t = e.toLowerCase();
                return [
                  "virtual",
                  "vb-audio",
                  "voicemeeter",
                  "obs",
                  "blackhole",
                  "soundflower",
                  "loopback",
                  "elgato",
                  "wave link",
                  "nvidia broadcast",
                  "rtx voice",
                  "krisp",
                  "virtual cable",
                  "vac",
                  "virtual microphone",
                ].some((e) => t.includes(e));
              },
              n = !0,
              o = e.filter((e) => "audioinput" === e.kind),
              a = o.some(
                (e) => e.deviceId && "default" !== e.deviceId && "communications" !== e.deviceId,
              ),
              s = o.filter((e) => {
                const o = e.label || "";
                return (
                  !!o.trim() &&
                  (!n && t(o)
                    ? (console.log(i("microphoneSelector.virtualDeviceExcluded"), o), !1)
                    : !a ||
                      ("default" !== e.deviceId && "communications" !== e.deviceId) ||
                      e.deviceId === r)
                );
              });
            if (r && !s.some((e) => e.deviceId === r)) {
              const e = o.find((e) => e.deviceId === r);
              e && e.label && s.push(e);
            }
            const l = new Map();
            s.forEach((e) => {
              const t = e.deviceId || e.label;
              if (!l.has(t)) {
                const n = (
                  i("microphoneSelector.microphoneLabel") +
                  " " +
                  (t || "").slice(0, 8)
                ).trim();
                l.set(t, { deviceId: e.deviceId || "", label: e.label || n, kind: e.kind });
              }
            });
            const c = Array.from(l.values());
            (console.log(i("microphoneSelector.devicesFound"), c.length, c), u(c));
          } catch (e) {
            console.error(i("microphoneSelector.loadDevicesError"), e);
          } finally {
            A(!1);
          }
        };
      ((0, s.useEffect)(() => {
        (console.log("MicrophoneSelector: isOpen изменился на", e), e && b());
      }, [e]),
        (0, s.useEffect)(() => {
          const t = () => {
            if (!e || !g.current || !m.current) return;
            const t = g.current.getBoundingClientRect(),
              n = m.current.getBoundingClientRect(),
              r = window.innerWidth,
              o = window.innerHeight;
            let i = t.bottom + 8;
            if (i + n.height - o > 0) {
              const e = t.top - n.height - 8;
              i = e >= 8 ? e : Math.max(8, o - n.height - 8);
            }
            let a = t.left;
            (a + n.width - r > 0 && (a = Math.max(8, t.right - n.width)),
              (a = Math.max(8, a)),
              h({ top: i, left: a }));
          };
          return (
            t(),
            e && (window.addEventListener("resize", t), window.addEventListener("scroll", t, !0)),
            () => {
              (window.removeEventListener("resize", t),
                window.removeEventListener("scroll", t, !0));
            }
          );
        }, [e]),
        (0, s.useEffect)(() => {
          const n = (n) => {
            e &&
              g.current &&
              !g.current.contains(n.target) &&
              m.current &&
              !m.current.contains(n.target) &&
              t(!1);
          };
          return (
            document.addEventListener("mousedown", n),
            () => document.removeEventListener("mousedown", n)
          );
        }, [e, t]));
      const _ = async () => {
        try {
          let e = "https://t.me/shadowhintsupport";
          try {
            const t = await window.api?.invoke?.("config:getVariant");
            t?.telegramSupport && (e = t.telegramSupport);
          } catch {}
          if (window.api && window.api.shell) {
            const t = await window.api.shell.openExternal(e);
            t.success ||
              (console.error("Failed to open Telegram support:", t.error),
              window.open(e, "_blank"));
          } else window.open(e, "_blank");
        } catch (e) {
          console.error("Error opening Telegram support:", e);
        }
      };
      return (0, a.jsxs)(a.Fragment, {
        children: [
          (0, a.jsxs)("button", {
            ref: g,
            "data-testid": "microphone-selector-button",
            className: "microphone-selector-button " + (e ? "open" : ""),
            onClick: () => {
              (console.log("Клик по селектору микрофона, текущее состояние isOpen:", e), t(!e));
            },
            children: [
              (0, a.jsxs)("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                className: "microphone-icon",
                children: [
                  (0, a.jsx)("path", {
                    d: "M6 8.5A2.5 2.5 0 0 1 3.5 6V3.5A2.5 2.5 0 0 1 6 1a2.5 2.5 0 0 1 2.5 2.5V6A2.5 2.5 0 0 1 6 8.5z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("path", {
                    d: "M6 10a4 4 0 0 1-4-4H1a5 5 0 0 0 5 5 5 5 0 0 0 5-5h-1a4 4 0 0 1-4 4z",
                    fill: "currentColor",
                  }),
                  (0, a.jsx)("line", {
                    x1: "6",
                    y1: "10",
                    x2: "6",
                    y2: "11",
                    stroke: "currentColor",
                    strokeWidth: "1",
                  }),
                ],
              }),
              (0, a.jsx)("svg", {
                width: "8",
                height: "8",
                viewBox: "0 0 8 8",
                className: "dropdown-arrow",
                children: (0, a.jsx)("path", {
                  d: "M2 3l2 2 2-2",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  fill: "none",
                }),
              }),
            ],
          }),
          (0, a.jsx)(
            () =>
              e
                ? (0, l.createPortal)(
                    (0, a.jsxs)("div", {
                      ref: m,
                      "data-testid": "microphone-selector-menu",
                      className: "microphone-selector-menu",
                      style: { top: f.top, left: f.left },
                      children: [
                        (0, a.jsxs)("div", {
                          className: "microphone-selector-header",
                          children: [
                            (0, a.jsx)("span", {
                              className: "microphone-selector-title",
                              children: i("microphoneSelector.selectMicrophone"),
                            }),
                            (0, a.jsxs)("div", {
                              className: "microphone-selector-header-buttons",
                              children: [
                                (0, a.jsx)("button", {
                                  "data-testid": "microphone-refresh-button",
                                  className: "microphone-selector-refresh",
                                  onClick: b,
                                  disabled: p,
                                  children: (0, a.jsx)("svg", {
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 12 12",
                                    children: (0, a.jsx)("path", {
                                      d: "M2 6a4 4 0 1 1 4 4v-1.5a2.5 2.5 0 1 0-2.5-2.5H5L3 4 1 6h1z",
                                      fill: "currentColor",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("button", {
                                  className: "microphone-selector-support-button",
                                  onClick: _,
                                  children: i("deviceSetup.supportButton"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "microphone-selector-list",
                          "data-testid": "microphone-device-list",
                          children: p
                            ? (0, a.jsx)("div", {
                                className: "microphone-selector-loading",
                                "data-testid": "microphone-loading",
                                children: (0, a.jsx)("span", {
                                  children: i("microphoneSelector.loadingDevices"),
                                }),
                              })
                            : 0 === d.length
                              ? (0, a.jsx)("div", {
                                  className: "microphone-selector-empty",
                                  "data-testid": "microphone-empty",
                                  children: (0, a.jsx)("span", {
                                    children: i("microphoneSelector.noDevicesFound"),
                                  }),
                                })
                              : d.map((e) =>
                                  (0, a.jsxs)(
                                    "button",
                                    {
                                      "data-testid": `microphone-option-${e.deviceId}`,
                                      "data-device-label": e.label,
                                      className:
                                        "microphone-selector-item " +
                                        (e.deviceId === r ? "selected" : ""),
                                      onClick: () => {
                                        return ((r = e.deviceId), n(r), void t(!1));
                                        var r;
                                      },
                                      children: [
                                        (0, a.jsxs)("svg", {
                                          width: "12",
                                          height: "12",
                                          viewBox: "0 0 12 12",
                                          className: "microphone-icon",
                                          children: [
                                            (0, a.jsx)("path", {
                                              d: "M6 8.5A2.5 2.5 0 0 1 3.5 6V3.5A2.5 2.5 0 0 1 6 1a2.5 2.5 0 0 1 2.5 2.5V6A2.5 2.5 0 0 1 6 8.5z",
                                              fill: "currentColor",
                                            }),
                                            (0, a.jsx)("path", {
                                              d: "M6 10a4 4 0 0 1-4-4H1a5 5 0 0 0 5 5 5 5 0 0 0 5-5h-1a4 4 0 0 1-4 4z",
                                              fill: "currentColor",
                                            }),
                                            (0, a.jsx)("line", {
                                              x1: "6",
                                              y1: "10",
                                              x2: "6",
                                              y2: "11",
                                              stroke: "currentColor",
                                              strokeWidth: "1",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "microphone-label",
                                          children: e.label,
                                        }),
                                        e.deviceId === r &&
                                          (0, a.jsx)("svg", {
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 12 12",
                                            className: "check-icon",
                                            children: (0, a.jsx)("path", {
                                              d: "M10 3L4.5 8.5 2 6",
                                              stroke: "currentColor",
                                              strokeWidth: "2",
                                              fill: "none",
                                            }),
                                          }),
                                      ],
                                    },
                                    e.deviceId,
                                  ),
                                ),
                        }),
                      ],
                    }),
                    document.body,
                  )
                : null,
            {},
          ),
        ],
      });
    }));
}

export default MicrophoneSelectorWebpackModule;
