/*
 * Recovered from renderer webpack module 26292.
 * Inferred module name: LiveWidgetComposer.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 49824
 * - 99163
 * - 33897 (StreamingMessage)
 * - 723
 * - 8652
 * - 77861 (SendIconAsset)
 * - 75302
 * - 51270 (Tooltip)
 * - 38105
 * - 44901
 * - 18524
 * - 8386
 * - 57128 (Toast)
 * - 70369 (FormattedMarkdown)
 * - 90651
 * - 17772
 */

function LiveWidgetComposerWebpackModule(e, t, n) {
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
    u = n(33897);
  (n(723), n(8652));
  const p = a(n(77861)),
    A = a(n(75302)),
    g = a(n(51270)),
    m = a(n(38105)),
    f = a(n(44901)),
    h = a(n(18524)),
    b = n(8386),
    _ = n(42e3),
    C = n(57128),
    E = n(70369),
    y = n(90651),
    v = n(17772),
    S = [
      { id: "send_manual", accelerator: "CommandOrControl+Enter", description: "Send message" },
      { id: "previous", accelerator: "CommandOrControl+Left", description: "Previous suggestion" },
      { id: "next", accelerator: "CommandOrControl+Right", description: "Next suggestion" },
    ],
    x = (e) => Math.min(Math.max(Math.round(e), 40), 100),
    w = l.default.memo(({ useSmartModel: e, onToggle: t, windowWidth: n, t: r }) => {
      const o =
        n < 370
          ? r("liveWidget.useSmartModelShort") || "Умная"
          : r("liveWidget.useSmartModel") || "Умная модель";
      return (0, s.jsx)(g.default, {
        text: r("liveWidget.smartModelTooltip") || "Использовать более продвинутую AI модель",
        children: (0, s.jsxs)("button", {
          type: "button",
          className: "smart-model-chip " + (e ? "active" : ""),
          onClick: t,
          children: [
            (0, s.jsx)("img", {
              src: A.default,
              alt: "",
              className: "smart-model-icon",
              width: "12",
              height: "12",
            }),
            (0, s.jsx)("span", { children: o }),
          ],
        }),
      });
    });
  w.displayName = "SmartModelToggle";
  const k = l.default.memo(({ autoDetectionEnabled: e, onToggle: t, t: n }) =>
    (0, s.jsx)(g.default, {
      text: n("liveWidget.autoDetectionLabel"),
      children: (0, s.jsxs)("button", {
        type: "button",
        className: "smart-model-chip " + (e ? "active" : ""),
        onClick: t,
        children: [
          (0, s.jsx)(f.default, { size: 12 }),
          (0, s.jsx)("span", { children: n("liveWidget.autoDetectionShort") || "Авто" }),
        ],
      }),
    }),
  );
  k.displayName = "AutoDetectionToggle";
  const T = l.default.memo(({ ragEnabled: e, onToggle: t, t: n }) =>
    (0, s.jsx)(g.default, {
      text:
        n("liveWidget.knowledgeBaseTooltip") || "Use uploaded documents to improve AI responses",
      children: (0, s.jsxs)("button", {
        type: "button",
        className: "smart-model-chip " + (e ? "active" : ""),
        onClick: t,
        children: [
          (0, s.jsx)(h.default, { size: 12 }),
          (0, s.jsx)("span", { children: n("liveWidget.knowledgeBaseShort") || "KB" }),
        ],
      }),
    }),
  );
  T.displayName = "RagToggle";
  const B = l.default.memo(
    ({
      inputMessage: e,
      isStreaming: t,
      useSmartModel: n,
      autoDetectionEnabled: r,
      ragEnabled: o,
      windowWidth: i,
      onInputChange: a,
      onSend: l,
      onKeyPress: c,
      onSmartModelToggle: d,
      onAutoDetectionToggle: u,
      onRagToggle: A,
      aiMessagesCount: m,
      currentAiMessageIndex: f,
      onPrevious: h,
      onNext: b,
      inputRef: _,
      formatShortcutById: C,
      t: E,
    }) =>
      (0, s.jsxs)("div", {
        className: "chat-input-container",
        children: [
          (0, s.jsxs)("div", {
            className: "chat-input-wrapper",
            children: [
              (0, s.jsx)(g.default, {
                text: E("liveWidget.enterRequestManually") || "Введите запрос вручную",
                children: (0, s.jsx)("input", {
                  ref: _,
                  type: "text",
                  className: "chat-input",
                  placeholder: E("liveWidget.enterRequestManually") || "Введите сообщение...",
                  value: e,
                  onChange: a,
                  onKeyPress: c,
                  disabled: t,
                }),
              }),
              (0, s.jsx)(g.default, {
                text: `${E("common.send") || "Отправить"} (${C("send_manual") || "Ctrl+Enter"})`,
                children: (0, s.jsx)("button", {
                  className: "chat-send-button",
                  onClick: l,
                  disabled: t || !e.trim(),
                  "aria-label": E("common.send") || "Отправить",
                  children: (0, s.jsx)("img", {
                    src: p.default,
                    alt: "Send",
                    width: "16",
                    height: "16",
                  }),
                }),
              }),
            ],
          }),
          (0, s.jsxs)("div", {
            className: "chat-input-actions",
            children: [
              (0, s.jsx)(w, { useSmartModel: n, onToggle: d, windowWidth: i, t: E }),
              (0, s.jsx)(k, { autoDetectionEnabled: r, onToggle: u, t: E }),
              (0, s.jsx)(T, { ragEnabled: o, onToggle: A, t: E }),
              m > 1 &&
                (0, s.jsxs)("div", {
                  className: "suggestion-nav-indicator",
                  children: [
                    (0, s.jsx)(g.default, {
                      text: "⌘ + ←",
                      position: "bottom",
                      children: (0, s.jsx)("button", {
                        className: "suggestion-nav-btn",
                        onClick: h,
                        disabled: f <= 0,
                        children: "←",
                      }),
                    }),
                    (0, s.jsxs)("span", {
                      className: "suggestion-nav-count",
                      children: [f + 1, " / ", m],
                    }),
                    (0, s.jsx)(g.default, {
                      text: "⌘ + →",
                      position: "bottom",
                      children: (0, s.jsx)("button", {
                        className: "suggestion-nav-btn",
                        onClick: b,
                        disabled: f >= m - 1,
                        children: "→",
                      }),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
  );
  ((B.displayName = "ChatInputBar"),
    (t.default = () => {
      const e = (0, c.useLocation)(),
        { t } = (0, d.useTranslation)(),
        { active: n, toggle: r } = (0, y.useVirtualCursor)(),
        [o, i] = (0, l.useState)(""),
        [a, p] = (0, l.useState)(!1);
      (0, l.useEffect)(
        () => (
          console.log("[SuggestionPage] Компонент смонтирован", {
            url: window.location.href,
            hash: window.location.hash,
            timestamp: new Date().toISOString(),
          }),
          () => {
            console.log("[SuggestionPage] Компонент размонтирован");
          }
        ),
        [],
      );
      const A = (0, l.useRef)(!1),
        [f, h] = (0, l.useState)(!1),
        w = (0, l.useCallback)(() => {
          ((A.current = !0),
            h(!0),
            n ||
              (window.api?.suggestion?.setIgnoreMouseEvents(!0, { forward: !0 }),
              window.api?.cursorProtection?.enable()));
        }, [n]),
        k = (0, l.useCallback)(() => {
          ((A.current = !1),
            h(!1),
            window.api?.suggestion?.setIgnoreMouseEvents(!1),
            window.api?.cursorProtection?.disable());
        }, []);
      ((0, l.useEffect)(() => {
        (async () => {
          try {
            const e = await window.api?.settings?.getAllSettings();
            e?.settings?.cursorProtectionEnabled && w();
          } catch {}
        })();
        const e = window.api?.cursorProtection?.onChanged?.((e) => {
          e ? w() : k();
        });
        return () => {
          (e?.(), k());
        };
      }, [w, k]),
        (0, v.useCursorProtectionEvents)(n, A));
      const [T, I] = (0, l.useState)(!0),
        [R, N] = (0, l.useState)([]),
        [O, D] = (0, l.useState)(-1),
        [M, P] = (0, l.useState)(S),
        [L, z] = (0, l.useState)(90),
        [U, F] = (0, l.useState)(13),
        [j, G] = (0, l.useState)(600),
        [W, Y] = (0, l.useState)(400),
        [H, V] = (0, l.useState)(!1),
        [q, Q] = (0, l.useState)(!1),
        $ = l.default.useRef(!1),
        K = (0, l.useRef)([]),
        [X, Z] = (0, l.useState)(null),
        [J, ee] = (0, l.useState)([]),
        [te, ne] = (0, l.useState)(""),
        re = (0, l.useRef)(null),
        oe = (0, l.useRef)(null),
        ie = (0, l.useRef)(!1),
        [ae, se] = (0, l.useState)(
          () => (console.log("[SuggestionPage] Инициализация activeTab: chat"), "chat"),
        ),
        [le, ce] = (0, l.useState)([]),
        [de, ue] = (0, l.useState)([]),
        [pe, Ae] = (0, l.useState)(!1),
        [ge, me] = (0, l.useState)(""),
        [fe, he] = (0, l.useState)(null),
        [be, _e] = (0, l.useState)(!1),
        [Ce, Ee] = (0, l.useState)(-1),
        ye = (0, l.useCallback)(
          async (e) => {
            e.stopPropagation();
            try {
              be
                ? window.api?.transcription?.closeWindow &&
                  (await window.api.transcription.closeWindow()).success &&
                  _e(!1)
                : window.api?.transcription?.openWindow &&
                  (await window.api.transcription.openWindow()).success &&
                  _e(!0);
            } catch (e) {
              console.error("[SuggestionPage] Ошибка toggle окна транскрипций:", e);
            }
          },
          [be],
        ),
        [ve, Se] = (0, l.useState)(!1);
      (0, l.useEffect)(() => {
        (async () => {
          try {
            const e = await window.api?.smartModel?.getDefault();
            "boolean" == typeof e && Se(e);
          } catch {}
        })();
      }, []);
      const [xe, we] = (0, l.useState)(!1);
      (0, l.useEffect)(() => {
        (async () => {
          try {
            const e = await window.api?.ragEnabled?.get();
            "boolean" == typeof e && we(e);
          } catch {}
        })();
        const e = (e, t) => {
          we(t);
        };
        return (
          window.api?.ipcRenderer?.on("ragEnabled:changed", e),
          () => {
            window.api?.ipcRenderer?.removeListener("ragEnabled:changed", e);
          }
        );
      }, []);
      const [ke, Te] = (0, l.useState)(() => {
        try {
          return "true" === localStorage.getItem("autoDetectionEnabled");
        } catch {
          return !1;
        }
      });
      ((0, l.useEffect)(() => {
        (async () => {
          try {
            if (window.api?.invoke) {
              const e = await window.api.invoke("config:getVariant");
              Z(e);
            }
          } catch (e) {
            console.error("SuggestionPage: ошибка загрузки конфигурации варианта", e);
          }
        })();
      }, []),
        (0, l.useEffect)(() => {
          const e = (e, t) => {
            Te(t);
          };
          return (
            window.ipc?.on("autoDetection:changed", e),
            () => {
              window.ipc?.removeListener("autoDetection:changed", e);
            }
          );
        }, []),
        (0, l.useEffect)(() => {
          try {
            const e = localStorage.getItem("transcriptionMessages");
            if (e) {
              const t = JSON.parse(e);
              Array.isArray(t) && ce(t);
            }
          } catch (e) {
            console.error("SuggestionPage: ошибка загрузки транскрипции:", e);
          }
        }, []),
        (0, l.useEffect)(
          () => (
            (async () => {
              if (window.api?.transcription?.isWindowOpen) {
                const e = await window.api.transcription.isWindowOpen();
                e.success && _e(e.isOpen ?? !1);
              }
            })(),
            window.api?.transcription?.onWindowClosed &&
              window.api.transcription.onWindowClosed(() => {
                _e(!1);
              }),
            () => {
              window.api?.transcription?.offWindowClosed &&
                window.api.transcription.offWindowClosed();
            }
          ),
          [],
        ),
        (0, l.useEffect)(
          () => (
            window.api?.transcription?.onUpdate &&
              window.api.transcription.onUpdate((e) => {
                (console.log("[SuggestionPage] Новая транскрипция:", {
                  speaker: e.speaker,
                  textLength: e.text?.length,
                }),
                  ce((t) => [...t, e]));
              }),
            () => {
              window.api?.transcription?.offUpdate && window.api.transcription.offUpdate();
            }
          ),
          [],
        ),
        (0, l.useEffect)(() => {
          (async () => {
            try {
              if (window.api?.invoke) {
                const e = await window.api.invoke("suggestion:get-width");
                e.success && "number" == typeof e.width && G(e.width);
              }
            } catch (e) {
              console.error("SuggestionPage: ошибка загрузки ширины окна", e);
            }
          })();
        }, []),
        (0, l.useEffect)(() => {
          (async () => {
            try {
              if (window.api?.invoke) {
                const e = await window.api.invoke("suggestion:get-height");
                e.success && "number" == typeof e.height && Y(e.height);
              }
            } catch (e) {
              console.error("SuggestionPage: ошибка загрузки высоты окна", e);
            }
          })();
        }, []),
        (0, l.useEffect)(() => {
          const e = (e, t) => {
            H || "number" != typeof t || Number.isNaN(t) || G(t);
          };
          return (
            window.api?.ipcRenderer?.on && window.api.ipcRenderer.on("suggestion:width-changed", e),
            () => {
              window.api?.ipcRenderer?.removeListener?.("suggestion:width-changed", e);
            }
          );
        }, [H]),
        (0, l.useEffect)(() => {
          const e = (e, t) => {
            H || "number" != typeof t || Number.isNaN(t) || Y(t);
          };
          return (
            window.api?.ipcRenderer?.on &&
              window.api.ipcRenderer.on("suggestion:height-changed", e),
            () => {
              window.api?.ipcRenderer?.removeListener?.("suggestion:height-changed", e);
            }
          );
        }, [H]));
      const Be = X?.productName ?? "",
        Ie = t("liveWidget.stoppingPreviousGeneration"),
        Re = t("liveWidget.takingScreenshotAndGettingAnswer"),
        Ne = (0, l.useCallback)(
          (e) => {
            if (!e) return !0;
            const t = e.trim();
            return t === Ie.trim() || t === Re.trim();
          },
          [Ie, Re],
        ),
        Oe = (0, l.useCallback)(
          (e) => {
            e &&
              !Ne(e) &&
              N((t) => {
                if (t.length > 0 && t[t.length - 1] === e) return t;
                const n = [...t, e];
                return (D(n.length - 1), n);
              });
          },
          [Ne],
        ),
        De = (0, l.useCallback)(
          () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          [],
        ),
        Me = (0, l.useRef)(0),
        Pe = (0, l.useRef)(!0),
        Le = (0, l.useRef)(!0),
        ze = (0, l.useRef)(null),
        Ue = (0, l.useRef)(null),
        Fe = (0, l.useCallback)(() => {
          re.current && (re.current.scrollTop = re.current.scrollHeight);
        }, []),
        je =
          ((0, l.useCallback)(() => {
            a ||
              (Pe.current &&
                Le.current &&
                (Ue.current && cancelAnimationFrame(Ue.current),
                (Ue.current = requestAnimationFrame(() => {
                  (ze.current?.scrollIntoView({ block: "end" }), (Ue.current = null));
                }))));
          }, [a]),
          (0, l.useCallback)(
            (e) => {
              a ||
                (e &&
                  (Ue.current && cancelAnimationFrame(Ue.current),
                  (Ue.current = requestAnimationFrame(() => {
                    (ze.current?.scrollIntoView({ block: "end" }), (Ue.current = null));
                  }))));
            },
            [a],
          )),
        Ge =
          ((0, l.useCallback)(() => {
            (Fe(), (Pe.current = !0));
          }, [Fe]),
          (0, l.useCallback)(async () => {
            Ae(!0);
            try {
              const e = await window.api.notes.list();
              e.success && e.notes && ue(e.notes);
            } catch (e) {
              console.error("Ошибка загрузки заметок:", e);
            } finally {
              Ae(!1);
            }
          }, [])),
        We = (0, l.useCallback)(
          async (e) => {
            if (e.trim()) {
              Ae(!0);
              try {
                const t = await window.api.notes.search(e);
                t.success && t.notes && ue(t.notes);
              } catch (e) {
                console.error("Ошибка поиска заметок:", e);
              } finally {
                Ae(!1);
              }
            } else await Ge();
          },
          [Ge],
        ),
        Ye = (0, l.useCallback)(async () => {
          try {
            await window.api.sessions.show();
          } catch (e) {
            console.error("Ошибка открытия окна сессий:", e);
          }
        }, []);
      ((0, l.useEffect)(() => {
        const e = re.current;
        if (!e) return;
        const t = () => {
          const t = e.scrollHeight - e.scrollTop - e.clientHeight < 80;
          Pe.current = t;
        };
        return (e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t));
      }, []),
        (0, l.useEffect)(() => {
          const e = re.current,
            t = ze.current;
          if (!e || !t || "undefined" == typeof IntersectionObserver) return;
          const n = new IntersectionObserver(
            (e) => {
              const t = e[0],
                n = !!t?.isIntersecting;
              ((Pe.current = n), (Le.current = n));
            },
            { root: e, threshold: 1, rootMargin: "0px 0px 64px 0px" },
          );
          return (n.observe(t), () => n.disconnect());
        }, []),
        (0, l.useEffect)(() => {
          const e = J.length;
          (e > Me.current && Pe.current && Fe(), (Me.current = e));
        }, [J.length, Fe]));
      const He = (0, l.useCallback)(
          (e, t) => {
            if (!t || Ne(t)) return;
            const n = Pe.current,
              r = { id: De(), role: e, content: t, timestamp: Date.now() };
            (ee((e) => [...e, r].slice(-200)), je(n));
          },
          [De, Ne, je],
        ),
        Ve = (0, l.useCallback)((e) => {
          ee((t) => {
            if (0 === t.length) return t;
            const n = t[t.length - 1];
            return "ai" !== n.role ? t : [...t.slice(0, -1), { ...n, content: e }];
          });
        }, []),
        qe = (0, l.useCallback)(() => {
          Se((e) => {
            const t = !e;
            return (
              console.log(`[RENDERER DEBUG] SmartModel toggle clicked, current: ${e}, new: ${t}`),
              window.api?.smartModel?.set(t),
              t
            );
          });
        }, []),
        Qe = (0, l.useCallback)(() => {
          Te((e) => {
            const t = !e;
            return (
              console.log("[SuggestionPage] AutoDetection toggle:", { from: e, to: t }),
              localStorage.setItem("autoDetectionEnabled", String(t)),
              window.api?.autoDetection?.set(t),
              (async () => {
                let e = window.currentSessionId || "";
                if (!e && window.api?.session?.getCurrentId) {
                  const t = await window.api.session.getCurrentId();
                  t?.success && "string" == typeof t.sessionId && (e = t.sessionId);
                }
                e && (await _.sessionAPI.updateSessionSettings(e, { auto_detection_enabled: t }));
              })(),
              t
            );
          });
        }, []),
        $e = (0, l.useCallback)(() => {
          we((e) => {
            const t = !e;
            return (window.api?.ragEnabled?.set(t), t);
          });
        }, []),
        Ke = (0, l.useCallback)(async () => {
          const e = te.trim();
          if (!e || a) return;
          (console.log("[SuggestionPage] Отправка сообщения:", {
            messageLength: e.length,
            useSmartModel: ve,
            timestamp: new Date().toISOString(),
          }),
            ne(""),
            He("user", e));
          let n = window.currentSessionId || "";
          if (!n && window.api?.session?.getCurrentId) {
            const e = await window.api.session.getCurrentId();
            e?.success && "string" == typeof e.sessionId && (n = e.sessionId);
          }
          if (!n)
            return (
              console.warn("Нет активной сессии для отправки сообщения"),
              void He("ai", t("liveWidget.noActiveSession") || "Нет активной сессии")
            );
          I(!1);
          const r = De();
          (ee((e) => [...e, { id: r, role: "ai", content: "", timestamp: Date.now() }].slice(-200)),
            p(!0));
          let o = "";
          try {
            (console.log(`[RENDERER DEBUG] useSmartModel before send: ${ve}`),
              await _.sessionAPI.sendManualMessage(
                n,
                e,
                ve,
                !1,
                (e) => {
                  ((o += e), i(o), Ve(o));
                },
                (e, t) => {
                  (p(!1),
                    I(!0),
                    t ? console.error("Ошибка стриминга:", t) : e && (i(e), Ve(e), Oe(e)));
                },
              ));
          } catch (e) {
            (console.error("Ошибка отправки сообщения:", e), p(!1), I(!0));
          }
        }, [te, a, ve, He, De, Ve, t]),
        Xe = (0, l.useCallback)(
          (e) => {
            "Enter" !== e.key || e.shiftKey || (e.preventDefault(), Ke());
          },
          [Ke],
        ),
        Ze = (0, l.useCallback)((e) => {
          ne(e.target.value);
        }, []),
        Je = (0, l.useCallback)(() => {
          Ke();
        }, [Ke]),
        et = (e) => {
          try {
            return decodeURIComponent(e);
          } catch (e) {
            return (
              console.error("Ошибка при декодировании URL параметра:", e),
              "Ошибка при декодировании подсказки"
            );
          }
        };
      ((0, l.useEffect)(() => {
        (console.log("SuggestionPage: location обновлен", e),
          console.log("SuggestionPage: полный URL", window.location.href));
        const t = new URLSearchParams(e.search).get("text");
        if (t) {
          console.log("SuggestionPage: текст получен из location.search", t);
          const e = et(t);
          (i(e), I(!0), p(!1));
          const n = Ne(e) ? [] : [e];
          return (
            N(n),
            D(n.length > 0 ? 0 : -1),
            void (
              Ne(e) ||
              ee([
                { id: `msg_${Date.now()}_initial`, role: "ai", content: e, timestamp: Date.now() },
              ])
            )
          );
        }
        const n = window.location.hash.split("?");
        if (n.length > 1) {
          const e = new URLSearchParams(n[1]).get("text");
          if (e) {
            console.log("SuggestionPage: текст получен из hash части", e);
            const t = et(e);
            (i(t), I(!0), p(!1));
            const n = Ne(t) ? [] : [t];
            return (
              N(n),
              D(n.length > 0 ? 0 : -1),
              void (
                Ne(t) ||
                ee([
                  {
                    id: `msg_${Date.now()}_initial`,
                    role: "ai",
                    content: t,
                    timestamp: Date.now(),
                  },
                ])
              )
            );
          }
        }
        try {
          const e = window.location.href.match(/text=([^&]*)/);
          if (e && e[1]) {
            console.log("SuggestionPage: текст получен через регулярное выражение", e[1]);
            const t = et(e[1]);
            (i(t), I(!0), p(!1));
            const n = Ne(t) ? [] : [t];
            return (
              N(n),
              D(n.length > 0 ? 0 : -1),
              void (
                Ne(t) ||
                ee([
                  {
                    id: `msg_${Date.now()}_initial`,
                    role: "ai",
                    content: t,
                    timestamp: Date.now(),
                  },
                ])
              )
            );
          }
        } catch (e) {
          console.error("Ошибка при обработке URL с помощью регулярного выражения:", e);
        }
        (console.warn("SuggestionPage: текст подсказки не найден, ожидаем данные"),
          i(""),
          I(!0),
          p(!1),
          N([]),
          D(-1),
          ee([]));
      }, [e, Ne]),
        (0, l.useEffect)(() => {
          (async () => {
            try {
              if (!window.api?.settings?.getShortcuts)
                return void console.warn("API настроек горячих клавиш недоступно в SuggestionPage");
              const e = await window.api.settings.getShortcuts();
              e.success && Array.isArray(e.shortcuts)
                ? P(e.shortcuts)
                : e.success || console.warn("Не удалось загрузить горячие клавиши:", e.error);
            } catch (e) {
              console.error("Ошибка при загрузке горячих клавиш в SuggestionPage:", e);
            }
          })();
        }, []),
        (0, l.useEffect)(() => {
          Array.isArray(M) &&
            0 !== M.length &&
            window.api?.shortcuts?.register &&
            window.api.shortcuts.register(M).catch((e) => {
              console.error("SuggestionPage: ошибка регистрации горячих клавиш:", e);
            });
        }, [M]),
        (0, l.useEffect)(() => {
          (document.documentElement.setAttribute("data-suggestion-window", "true"),
            document.body.setAttribute("data-suggestion-window", "true"));
          const e = document.getElementById("root");
          return (
            e && e.setAttribute("data-suggestion-window", "true"),
            () => {
              (document.documentElement.removeAttribute("data-suggestion-window"),
                document.body.removeAttribute("data-suggestion-window"));
              const e = document.getElementById("root");
              e && e.removeAttribute("data-suggestion-window");
            }
          );
        }, []));
      const tt = (0, l.useCallback)(
          (e) => {
            const t = M.find((t) => t.id === e);
            return t?.accelerator ?? "";
          },
          [M],
        ),
        nt = (0, l.useCallback)(
          (e) => {
            const t = tt(e);
            return t ? (0, b.formatKeyDisplay)(t.replace(/CommandOrControl/g, "Ctrl")) : "";
          },
          [tt],
        ),
        rt =
          ((0, l.useMemo)(() => nt("previous"), [nt]),
          (0, l.useMemo)(() => nt("next"), [nt]),
          (0, l.useMemo)(() => J.filter((e) => "ai" === e.role), [J]));
      ((0, l.useEffect)(() => {
        K.current = R;
      }, [R]),
        (0, l.useEffect)(() => {
          rt.length > 0 ? Ee(rt.length - 1) : Ee(-1);
        }, [rt.length]),
        (0, l.useEffect)(() => {
          const e = re.current;
          if (!e) return;
          const n = async (e) => {
            const n = e.target;
            if (!n) return;
            const r = n.closest(".choice-link");
            if (!r) return;
            if ((e.preventDefault(), ie.current)) return;
            ie.current = !0;
            let a = "";
            const s = r.querySelector(".choice-text-compact");
            if (((a = (s?.textContent || r.textContent || "").trim()), a))
              try {
                (Oe(o), p(!0), I(!1), i(t("liveWidget.processingRequest")));
                let e = window.currentSessionId || "";
                if (!e && window.api?.session?.getCurrentId) {
                  const t = await window.api.session.getCurrentId();
                  t?.success && "string" == typeof t.sessionId && (e = t.sessionId);
                }
                if (!e) return void console.warn("Нет активной сессии для отправки уточнения");
                let n = "";
                const r = (e) => {
                    (p(!1), I(!0), Ve(e));
                  },
                  s = await _.sessionAPI.sendManualMessage(
                    e,
                    a,
                    ve,
                    !1,
                    (e) => {
                      ((n += e), i(n), Ve(n));
                    },
                    (e, o) => {
                      (p(!1),
                        I(!0),
                        o
                          ? (console.error("Ошибка стриминга уточнения (delegated):", o),
                            r(t("suggestionPage.streamError") || `Ошибка: ${o}`))
                          : e
                            ? (i(e), Ve(e), Oe(e))
                            : n
                              ? (i(n), Ve(n), Oe(n))
                              : r(
                                  t("suggestionPage.emptyResponse") ||
                                    "Ответ не получен. Попробуйте ещё раз.",
                                ));
                    },
                  );
                s.success ||
                  r(s.error || t("suggestionPage.streamError") || "Не удалось получить ответ");
              } catch (e) {
                (console.error("Ошибка отправки уточнения (delegated) из SuggestionPage:", e),
                  p(!1),
                  I(!0));
              } finally {
                ie.current = !1;
              }
          };
          return (
            e.addEventListener("click", n),
            () => {
              e.removeEventListener("click", n);
            }
          );
        }, []),
        (0, l.useEffect)(() => {
          const e = (e, t) => {
            "number" != typeof t || Number.isNaN(t) || z(x(t));
          };
          return (
            window.api?.ipcRenderer?.on && window.api.ipcRenderer.on("suggestion:set-opacity", e),
            (async () => {
              try {
                const e = await window.api?.invoke?.("suggestion:get-opacity");
                e?.success && "number" == typeof e.opacity && z(x(e.opacity));
              } catch {}
            })(),
            () => {
              window.api?.ipcRenderer?.removeListener?.("suggestion:set-opacity", e);
            }
          );
        }, []),
        (0, l.useEffect)(() => {
          (async () => {
            try {
              const e = await window.api?.invoke?.("suggestion:get-font-size");
              e?.success && "number" == typeof e.fontSize && F(e.fontSize);
            } catch {}
          })();
          const e = (e, t) => {
            "number" != typeof t || Number.isNaN(t) || F(t);
          };
          return (
            window.api?.ipcRenderer?.on &&
              window.api.ipcRenderer.on("suggestion:font-size-changed", e),
            () => {
              window.api?.ipcRenderer?.removeListener?.("suggestion:font-size-changed", e);
            }
          );
        }, []));
      const ot = (0, l.useMemo)(() => {
          const e = x(L) / 100,
            t = `rgba(30, 30, 30, ${e})`,
            n = Math.max(0.12, Math.min(0.3, 0.4 * e)),
            r = `rgba(255, 255, 255, ${n})`,
            o = `rgba(255, 255, 255, ${Math.min(0.42, n + 0.08)})`,
            i = `rgba(255, 255, 255, ${Math.min(0.48, n + 0.12)})`,
            a = Math.max(0, 26),
            s = Math.max(0, 28),
            l = `rgba(${a}, ${a}, ${a}, ${Math.min(1, e + 0.04)})`,
            c = `rgba(${s}, ${s}, ${s}, ${Math.min(1, e + 0.08)})`,
            d = `rgba(30, 30, 30, ${Math.min(1, e + 0.12)})`,
            u = Math.max(0, 38);
          return {
            "--suggestion-surface-color": t,
            "--suggestion-element-color": r,
            "--suggestion-element-hover-color": o,
            "--suggestion-element-active-color": i,
            "--suggestion-button-color": l,
            "--suggestion-button-hover-color": c,
            "--suggestion-button-active-color": d,
            "--suggestion-code-bg": `rgba(${u}, ${u}, ${u}, ${Math.min(1, e + 0.1)})`,
            "--suggestion-code-border": `rgba(255, 255, 255, ${Math.min(0.14, e + 0.08)})`,
            "--suggestion-code-chip": `rgba(255, 255, 255, ${Math.min(0.8, 0.55 + 0.5 * e)})`,
            "--suggestion-font-size": `${U}px`,
            backgroundColor: t,
          };
        }, [L, U]),
        it = (0, l.useRef)(null),
        at = (0, l.useRef)(!1);
      ((0, l.useEffect)(() => {
        const e = (e, n) => {
          if (!n) return;
          console.log("[SuggestionPage] Получено обновление от main:", {
            actionType: n.actionType,
            streaming: n.streaming,
            contentLength: n.content?.length,
            hasScreenshot: !!n.screenshot,
            userMessage: n.userMessage?.substring(0, 50),
          });
          const r = "string" == typeof n.content ? n.content : o,
            s = "boolean" == typeof n.streaming ? n.streaming : a;
          let l = n.userMessage;
          if (
            (l ||
              "generate" !== n.actionType ||
              (l = t("liveWidget.getAnswer") || "Получить ответ"),
            l ||
              "screenshot" !== n.actionType ||
              (l = t("liveWidget.screenshotRequest") || "Скриншот"),
            "auto" === n.actionType)
          ) {
            const e = t("liveWidget.autoResponse") || "Автоответ",
              r = n.userMessage || "";
            l = r ? `${e}: "${r}"` : e;
          }
          if (
            (n.actionType && (it.current = null),
            l &&
              !Ne(l) &&
              ee((e) => {
                const t = e.filter((e) => "user" === e.role).pop(),
                  r = e[e.length - 1];
                if (t && t.content === l && "user" === r?.role) {
                  if (t.screenshot === n.screenshot) return e;
                  if (!t.screenshot && n.screenshot)
                    return e.map((e) => (e.id === t.id ? { ...e, screenshot: n.screenshot } : e));
                }
                return [
                  ...e,
                  {
                    id: `msg_${Date.now()}_user`,
                    role: "user",
                    content: l,
                    timestamp: Date.now(),
                    screenshot: n.screenshot,
                  },
                ].slice(-200);
              }),
            s)
          ) {
            if (
              (console.log("[SuggestionPage] Стриминг начат, contentLength:", r.length),
              i(r),
              p(!0),
              I(!1),
              D(K.current.length),
              (at.current = !0),
              !it.current)
            ) {
              const e = `msg_${Date.now()}_ai_stream`;
              ((it.current = e),
                ee((t) =>
                  [...t, { id: e, role: "ai", content: "", timestamp: Date.now() }].slice(-200),
                ));
            }
            const e = it.current;
            return void ee((t) => t.map((t) => (t.id === e ? { ...t, content: r } : t)));
          }
          (console.log("[SuggestionPage] Стриминг завершён, finalContentLength:", r.length),
            i(r),
            p(!1),
            I(!0));
          const c = Pe.current;
          (ee((e) => {
            if (!r || Ne(r)) return e;
            if (it.current) {
              const t = e.map((e) => (e.id === it.current ? { ...e, content: r } : e));
              return ((it.current = null), (at.current = !1), je(c), t);
            }
            const t = e[e.length - 1];
            if (t && "ai" === t.role && t.content === r) return e;
            ((it.current = null), (at.current = !1));
            const n = { id: `msg_${Date.now()}_ai`, role: "ai", content: r, timestamp: Date.now() },
              o = [...e, n].slice(-200);
            return (je(c), o);
          }),
            Oe(r),
            ee((e) =>
              e.some((e) => e.screenshot)
                ? e.map((e) => (e.screenshot ? { ...e, screenshot: void 0 } : e))
                : e,
            ));
        };
        return (
          window.api?.on && window.api.on("suggestion:update", e),
          () => {
            window.api?.off && window.api.off("suggestion:update", e);
          }
        );
      }, [Ne]),
        (0, l.useCallback)((e) => {
          const t = K.current;
          e < 0 || e >= t.length || (D(e), i(t[e]), p(!1), I(!0));
        }, []));
      const st = (0, l.useCallback)(() => {
          if (0 === rt.length) return;
          const e = Ce <= 0 ? 0 : Ce - 1;
          (console.log("[SuggestionPage] Навигация: previous", {
            from: Ce,
            to: e,
            total: rt.length,
          }),
            Ee(e));
          const t = rt[e]?.id;
          if (t && re.current) {
            const e = re.current.querySelector(`[data-msg-id="${t}"]`);
            e?.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, [rt, Ce]),
        lt = (0, l.useCallback)(() => {
          if (0 === rt.length) return;
          const e = Ce >= rt.length - 1 ? rt.length - 1 : Ce + 1;
          (console.log("[SuggestionPage] Навигация: next", { from: Ce, to: e, total: rt.length }),
            Ee(e));
          const t = rt[e]?.id;
          if (t && re.current) {
            const e = re.current.querySelector(`[data-msg-id="${t}"]`);
            e?.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, [rt, Ce]);
      (rt.length > 1 && !a && rt.length,
        (0, l.useEffect)(() => {
          if (window.api?.shortcuts?.onTriggered)
            return (
              window.api.shortcuts.onTriggered((e) => {
                if (("scroll_up" !== e && "cmd_scroll_up" !== e) || !re.current)
                  if (("scroll_down" !== e && "cmd_scroll_down" !== e) || !re.current)
                    if ("send_manual" !== e)
                      if ("previous" !== e)
                        if ("next" !== e)
                          if ("hide_suggestion" !== e)
                            if ("toggle_click_through" !== e)
                              if ("execute_code" !== e)
                                if ("generate_response" !== e)
                                  if ("toggle_virtual_cursor" !== e) {
                                    if ("toggle_cursor_protection" === e) {
                                      const e = !A.current;
                                      return (
                                        e ? w() : k(),
                                        void window.api?.settings?.saveSetting?.(
                                          "cursorProtectionEnabled",
                                          e,
                                        )
                                      );
                                    }
                                  } else r();
                                else
                                  window.dispatchEvent(
                                    new CustomEvent("codeExecution:generateResponse"),
                                  );
                              else window.dispatchEvent(new CustomEvent("codeExecution:execute"));
                            else
                              try {
                                Q((e) => {
                                  const n = !e;
                                  window.api?.suggestion?.setIgnoreMouseEvents
                                    ? window.api.suggestion.setIgnoreMouseEvents(n, { forward: !0 })
                                    : window.api?.window?.setIgnoreMouseEvents?.(n, {
                                        forward: !0,
                                      });
                                  const r = `${t("liveWidget.clickThroughHint")}: ${t(n ? "liveWidget.enableClickThrough" : "liveWidget.disableClickThrough")}`;
                                  return ((0, C.showToast)(r, "info"), n);
                                });
                              } catch {}
                          else
                            try {
                              if (window.api?.suggestion?.toggleVisibility)
                                return void window.api.suggestion.toggleVisibility();
                              throw new Error("toggleVisibility API not available");
                            } catch (e) {
                              if ($.current) {
                                const e = o || "";
                                (window.api?.suggestion?.openInNewWindow?.(e), ($.current = !1));
                              } else
                                (window.api?.window?.closeSuggestionWindow?.(), ($.current = !0));
                            }
                        else lt();
                      else st();
                    else Ke();
                  else
                    (re.current.querySelector(".suggestion-fullscreen") || re.current).scrollBy({
                      top: 100,
                      behavior: "smooth",
                    });
                else
                  (re.current.querySelector(".suggestion-fullscreen") || re.current).scrollBy({
                    top: -100,
                    behavior: "smooth",
                  });
              }),
              () => {
                window.api?.shortcuts?.offTriggered && window.api.shortcuts.offTriggered();
              }
            );
        }, [st, lt, Ke, r, w, k]));
      const ct = (0, l.useCallback)(() => {
          V(!0);
        }, []),
        dt = (0, l.useCallback)((e) => {
          G(e);
        }, []),
        ut = (0, l.useCallback)((e) => {
          (V(!1), G(e), console.log("Изменение размера завершено:", e));
        }, []),
        pt = (0, l.useCallback)((e) => {
          Y(e);
        }, []),
        At = (0, l.useCallback)((e) => {
          (V(!1), Y(e), console.log("Изменение высоты завершено:", e));
        }, []);
      return (0, s.jsx)("div", {
        className: "live-widget suggestion-window-page",
        style: { borderRadius: "0" },
        children: (0, s.jsxs)("div", {
          className: "suggestion-window-shell",
          style: { ...ot, width: `${j}px` },
          children: [
            !f &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(m.default, {
                    side: "left",
                    minWidth: 360,
                    maxWidth: 2400,
                    onResizeStart: ct,
                    onResize: dt,
                    onResizeEnd: ut,
                  }),
                  (0, s.jsx)(m.default, {
                    side: "right",
                    minWidth: 360,
                    maxWidth: 2400,
                    onResizeStart: ct,
                    onResize: dt,
                    onResizeEnd: ut,
                  }),
                  (0, s.jsx)(m.default, {
                    side: "bottom",
                    minHeight: 200,
                    maxHeight: 900,
                    onResizeStart: ct,
                    onResize: pt,
                    onResizeEnd: At,
                  }),
                ],
              }),
            (0, s.jsx)("div", {
              className: "suggestion-toolbar",
              children: (0, s.jsx)("button", {
                className: "suggestion-close-button",
                onClick: () => {
                  window.api?.window?.closeSuggestionWindow
                    ? window.api.window.closeSuggestionWindow().catch(() => window.close())
                    : window.close && window.close();
                },
                "aria-label": t("common.close"),
                children: "×",
              }),
            }),
            (0, s.jsxs)("div", {
              className: "suggestion-content chat-layout",
              children: [
                (0, s.jsxs)("div", {
                  className: "suggestion-header-row",
                  children: [
                    (0, s.jsx)("span", {
                      className: "suggestion-header-title",
                      "aria-hidden": "true",
                      children: Be,
                    }),
                    (0, s.jsxs)("div", {
                      className: "suggestion-tabs-header",
                      children: [
                        (0, s.jsx)("button", {
                          className: "suggestion-tab " + ("chat" === ae ? "active" : ""),
                          onClick: () => {
                            (console.log("[SuggestionPage] Переключение на таб: chat"), se("chat"));
                          },
                          children: t("suggestionPage.tabs.chat", "Chat"),
                        }),
                        (0, s.jsx)("button", {
                          className: "suggestion-tab " + ("transcript" === ae ? "active" : ""),
                          onClick: () => {
                            (console.log("[SuggestionPage] Переключение на таб: transcript"),
                              se("transcript"),
                              setTimeout(Fe, 0));
                          },
                          children: t("suggestionPage.tabs.transcript", "Transcript"),
                        }),
                        (0, s.jsx)("button", {
                          className: "suggestion-tab " + ("notes" === ae ? "active" : ""),
                          onClick: () => {
                            (console.log("[SuggestionPage] Переключение на таб: notes"),
                              se("notes"),
                              Ge());
                          },
                          children: t("suggestionPage.tabs.notes", "Notes"),
                        }),
                        "transcript" === ae &&
                          (0, s.jsx)(g.default, {
                            text: be ? "Закрыть отдельное окно" : "Открыть в отдельном окне",
                            position: "bottom",
                            children: (0, s.jsx)("div", {
                              className:
                                "transcription-toggle-icon clickable " + (be ? "active" : ""),
                              onClick: ye,
                              children: (0, s.jsx)("img", {
                                src:
                                  "https://img.icons8.com/?size=100&id=742&format=png&color=" +
                                  (be ? "BB86FC" : "E0E0E0"),
                                alt: "pop-out",
                                style: { width: 18, height: 18 },
                              }),
                            }),
                          }),
                      ],
                    }),
                    (0, s.jsx)("div", { className: "suggestion-header-line" }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "chat-messages-wrapper",
                  children: (0, s.jsx)("div", {
                    ref: re,
                    className: "chat-messages-container " + (a ? "streaming" : ""),
                    tabIndex: 0,
                    children:
                      "chat" === ae
                        ? (0, s.jsx)(s.Fragment, {
                            children:
                              rt.length > 0 && rt[Ce]
                                ? (0, s.jsx)("div", {
                                    className: "suggestion-fullscreen",
                                    children: (0, s.jsx)(u.SuggestionContainer, {
                                      suggestion: rt[Ce].content,
                                      isStreaming: a && Ce === rt.length - 1,
                                      streamingComplete: !(a && Ce === rt.length - 1),
                                      className: "chat-ai-content",
                                      onChoiceClick: async (e) => {
                                        if (ie.current) return;
                                        ((ie.current = !0), He("user", e));
                                        let n = window.currentSessionId || "";
                                        if (!n && window.api?.session?.getCurrentId) {
                                          const e = await window.api.session.getCurrentId();
                                          e?.success &&
                                            "string" == typeof e.sessionId &&
                                            (n = e.sessionId);
                                        }
                                        if (!n)
                                          return void console.warn(
                                            "Нет активной сессии для отправки уточнения",
                                          );
                                        I(!1);
                                        const r = De();
                                        (ee((e) =>
                                          [
                                            ...e,
                                            {
                                              id: r,
                                              role: "ai",
                                              content: "",
                                              timestamp: Date.now(),
                                            },
                                          ].slice(-200),
                                        ),
                                          p(!0));
                                        let o = "";
                                        const a = (e) => {
                                          (p(!1), I(!0), Ve(e));
                                        };
                                        try {
                                          const r = await _.sessionAPI.sendManualMessage(
                                            n,
                                            e,
                                            ve,
                                            !1,
                                            (e) => {
                                              ((o += e), i(o), Ve(o));
                                            },
                                            (e, n) => {
                                              (p(!1),
                                                I(!0),
                                                n
                                                  ? (console.error(
                                                      "Ошибка стриминга уточнения:",
                                                      n,
                                                    ),
                                                    a(
                                                      t("suggestionPage.streamError") ||
                                                        `Ошибка: ${n}`,
                                                    ))
                                                  : e
                                                    ? (i(e), Ve(e), Oe(e))
                                                    : o
                                                      ? (i(o), Ve(o), Oe(o))
                                                      : a(
                                                          t("suggestionPage.emptyResponse") ||
                                                            "Ответ не получен. Попробуйте ещё раз.",
                                                        ));
                                            },
                                          );
                                          r.success ||
                                            a(
                                              r.error ||
                                                t("suggestionPage.streamError") ||
                                                "Не удалось получить ответ",
                                            );
                                        } catch (e) {
                                          (console.error("Ошибка отправки уточнения:", e),
                                            a(
                                              t("suggestionPage.streamError") ||
                                                "Ошибка при отправке запроса",
                                            ));
                                        } finally {
                                          ie.current = !1;
                                        }
                                      },
                                    }),
                                  })
                                : (0, s.jsxs)("div", {
                                    className: "suggestion-empty",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: "chat-empty-icon",
                                        children: "💬",
                                      }),
                                      (0, s.jsx)("p", {
                                        children:
                                          t("liveWidget.chatEmptyState") || "Ожидание подсказок...",
                                      }),
                                    ],
                                  }),
                          })
                        : "transcript" === ae
                          ? (0, s.jsx)("div", {
                              className: "transcription-list",
                              children:
                                0 === le.length
                                  ? (0, s.jsx)("div", {
                                      className: "transcription-empty",
                                      children: t("suggestionPage.transcriptEmpty"),
                                    })
                                  : le.map((e, t) =>
                                      (0, s.jsx)(
                                        "div",
                                        {
                                          className: "transcription-item",
                                          "data-speaker": e.speaker,
                                          children: (0, s.jsx)("span", {
                                            className: "transcription-text",
                                            children: e.text,
                                          }),
                                        },
                                        `${e.timestamp}-${t}`,
                                      ),
                                    ),
                            })
                          : (0, s.jsxs)("div", {
                              className: "notes-tab-content",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "notes-search-container",
                                  children: (0, s.jsx)("input", {
                                    type: "text",
                                    className: "notes-search-input",
                                    placeholder: t("notes.search", "Search notes..."),
                                    value: ge,
                                    onChange: (e) => {
                                      (me(e.target.value), We(e.target.value));
                                    },
                                  }),
                                }),
                                pe
                                  ? (0, s.jsx)("div", {
                                      className: "notes-loading",
                                      children: t("common.loading", "Loading..."),
                                    })
                                  : 0 === de.length
                                    ? (0, s.jsxs)("div", {
                                        className: "notes-empty",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className: "notes-empty-icon",
                                            children: "📝",
                                          }),
                                          (0, s.jsx)("p", {
                                            children: ge
                                              ? t("notes.noResults", "No notes found")
                                              : t("notes.empty", "You have no notes yet"),
                                          }),
                                          !ge &&
                                            (0, s.jsx)("button", {
                                              className: "notes-create-btn",
                                              onClick: () => {
                                                Ye();
                                              },
                                              children: t("notes.create", "Create note"),
                                            }),
                                        ],
                                      })
                                    : (0, s.jsx)("div", {
                                        className: "notes-list",
                                        children: de.map((e) =>
                                          (0, s.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "note-item " + (fe === e.id ? "expanded" : ""),
                                              onClick: () => he(fe === e.id ? null : e.id),
                                              children: [
                                                (0, s.jsxs)("div", {
                                                  className: "note-item-header",
                                                  children: [
                                                    (0, s.jsx)("span", {
                                                      className: "note-title",
                                                      children:
                                                        e.title || t("notes.untitled", "Untitled"),
                                                    }),
                                                    (0, s.jsx)("span", {
                                                      className: "note-expand-icon",
                                                      children: fe === e.id ? "▼" : "▶",
                                                    }),
                                                  ],
                                                }),
                                                fe === e.id &&
                                                  (0, s.jsx)("div", {
                                                    className: "note-content suggestion-text",
                                                    children: (0, E.formatTextWithHighlightedCode)(
                                                      e.content,
                                                    ),
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
                }),
                "chat" === ae &&
                  (0, s.jsx)(B, {
                    inputMessage: te,
                    isStreaming: a,
                    useSmartModel: ve,
                    autoDetectionEnabled: ke,
                    ragEnabled: xe,
                    windowWidth: j,
                    onInputChange: Ze,
                    onSend: Je,
                    onKeyPress: Xe,
                    onSmartModelToggle: qe,
                    onAutoDetectionToggle: Qe,
                    onRagToggle: $e,
                    aiMessagesCount: rt.length,
                    currentAiMessageIndex: Ce,
                    onPrevious: st,
                    onNext: lt,
                    inputRef: oe,
                    formatShortcutById: nt,
                    t,
                  }),
              ],
            }),
            n &&
              (0, s.jsx)("div", {
                className: "virtual-cursor-hint",
                children: t("liveWidget.virtualCursorActive", {
                  shortcut: nt("toggle_virtual_cursor") || "Cmd+Shift+V",
                }),
              }),
          ],
        }),
      });
    }));
}

export default LiveWidgetComposerWebpackModule;
