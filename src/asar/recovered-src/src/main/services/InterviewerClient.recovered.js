/*
 * Recovered from main webpack module 90139.
 * Inferred module name: InterviewerClient.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 34191
 * - 79896 (fs)
 * - 16928 (path)
 * - 84157 (electron)
 * - 17292
 * - 16798
 * - 24815
 */

function InterviewerClientWebpackModule(e, t, n) {
  "use strict";
  var r =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(t, n);
            ((i && !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
              (i = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, i));
          }
        : function (e, t, n, r) {
            (void 0 === r && (r = n), (e[r] = t[n]));
          }),
    i =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    o =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
        return (i(t, e), t);
      };
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.InterviewerClient = void 0));
  const s = o(n(34191)),
    a = o(n(79896)),
    c = o(n(16928)),
    l = n(84157),
    u = o(n(17292)),
    d = n(16798),
    p = n(24815);
  t.InterviewerClient = class {
    constructor(e, t) {
      ((this.authToken = t), (this.address = e));
      const { useTls: n, credentials: r } = this.buildChannelCredentials(e);
      this.client = new p.InterviewServiceClient(e, r, {
        interceptors: [
          (e, t) =>
            new s.InterceptingCall(t(e), {
              start: (e, t, n) => {
                if (this.authToken) {
                  const t = `Bearer ${this.authToken}`;
                  (e.add("authorization", t),
                    console.log(
                      "[GRPC-AUTH] Added authorization header:",
                      t.substring(0, 50) + "...",
                    ));
                } else console.warn("[GRPC-AUTH] No auth token available for request");
                let r = null;
                try {
                  ("function" == typeof u.getTraceData
                    ? (r = u.getTraceData()["sentry-trace"])
                    : "function" == typeof u.getActiveSpan && u.getActiveSpan(),
                    r && e.add("sentry-trace", r));
                } catch (e) {}
                (this.sessionInfo && e.add("x-session-id", this.sessionInfo.id), n(e, t));
              },
            }),
        ],
      });
    }
    rebuildClient() {
      const { credentials: e } = this.buildChannelCredentials(this.address);
      this.client = new p.InterviewServiceClient(this.address, e, {
        interceptors: [
          (e, t) =>
            new s.InterceptingCall(t(e), {
              start: (e, t, n) => {
                (this.authToken && e.add("authorization", `Bearer ${this.authToken}`), n(e, t));
              },
            }),
        ],
      });
    }
    buildChannelCredentials(e) {
      if (!/:(443)$/.test(e) && "true" !== "MISSING_ENV_VAR".GRPC_USE_TLS)
        return { useTls: !1, credentials: s.credentials.createInsecure() };
      const t = d.variantConfig;
      try {
        "MISSING_ENV_VAR".NODE_TLS_REJECT_UNAUTHORIZED = "0";
      } catch {}
      console.warn("[gRPC] TLS verification is globally disabled for this process (requested).");
      const n = [];
      let r;
      ("MISSING_ENV_VAR".GRPC_ROOT_CA && n.push("MISSING_ENV_VAR".GRPC_ROOT_CA),
        t?.grpcRootCAPath && n.push(String(t.grpcRootCAPath)),
        n.push(
          c.join(process.resourcesPath || "", "config", "grpc-root-ca.pem"),
          c.join(__dirname, "..", "..", "config", "grpc-root-ca.pem"),
          c.join(l.app.getAppPath?.() || process.cwd(), "config", "grpc-root-ca.pem"),
          c.join(process.cwd(), "config", "grpc-root-ca.pem"),
        ));
      for (const e of n)
        try {
          if (e && a.existsSync(e)) {
            ((r = a.readFileSync(e)), console.log("[gRPC] Using custom Root CA:", e));
            break;
          }
        } catch {}
      return {
        useTls: !0,
        credentials: r ? s.credentials.createSsl(r) : s.credentials.createSsl(),
      };
    }
    waitForReady(e = 7e3) {
      return new Promise((t, n) => {
        try {
          const r = Date.now() + e;
          this.client.waitForReady(r, (e) => {
            if (e) return n(e);
            t();
          });
        } catch (e) {
          n(e);
        }
      });
    }
    close() {
      try {
        this.client.close?.();
      } catch {}
    }
    setAuthToken(e) {
      this.authToken = e;
    }
    getAuthToken() {
      return this.authToken;
    }
    startSession(e) {
      ((this.sessionInfo = { id: this.generateSessionId(), userId: e, startedAt: new Date() }),
        console.log("[FRONTEND-SESSION] Starting session:", {
          sessionId: this.sessionInfo.id,
          userId: e,
          startedAt: this.sessionInfo.startedAt,
        }),
        u.setContext("session", {
          id: this.sessionInfo.id,
          userId: e,
          startedAt: this.sessionInfo.startedAt.toISOString(),
          platform: "electron",
        }),
        u.addBreadcrumb({
          message: "User session started",
          level: "info",
          category: "session",
          data: { sessionId: this.sessionInfo.id, userId: e },
        }),
        console.log(
          "[FRONTEND-SESSION] Session started successfully, sessionInfo:",
          this.sessionInfo,
        ));
    }
    endSession() {
      if (this.sessionInfo) {
        const e = Date.now() - this.sessionInfo.startedAt.getTime();
        (u.addBreadcrumb({
          message: "User session ended",
          level: "info",
          category: "session",
          data: { sessionId: this.sessionInfo.id, duration: e },
        }),
          (this.sessionInfo = void 0));
      }
    }
    destroy() {
      (console.log("[FRONTEND-SENTRY] Destroying InterviewerClient"),
        this.endSession(),
        console.log("[FRONTEND-SENTRY] InterviewerClient destroyed"));
    }
    getSessionInfo() {
      return this.sessionInfo;
    }
    generateSessionId() {
      return `session_${Date.now().toString(36)}_${Math.random().toString(36).substring(2)}`;
    }
    async withSentrySpan(e, t, n) {
      return u.startSpan(
        {
          name: `grpc.${e}`,
          op: "grpc.client",
          attributes: {
            "grpc.method": e,
            "session.id": this.sessionInfo?.id || "",
            ...Object.fromEntries(
              Object.entries(n || {}).map(([e, t]) => [`grpc.${e}`, String(t)]),
            ),
          },
        },
        async (r) => {
          try {
            const e = await t();
            return (r.setStatus({ code: 1, message: "ok" }), e);
          } catch (t) {
            throw (
              r.setStatus({ code: 2, message: t instanceof Error ? t.message : "unknown_error" }),
              u.captureException(t, {
                tags: { operation: e, component: "grpc.client", sessionId: this.sessionInfo?.id },
                extra: { operationData: n },
              }),
              t
            );
          }
        },
      );
    }
    startEmailLogin(e, t) {
      return this.withSentrySpan(
        "startEmailLogin",
        () =>
          new Promise((n, r) => {
            const i = { email: e, timezone: t || "" };
            this.client.startEmailLogin(i, (e, t) => {
              e ? r(e) : n(t);
            });
          }),
        { email: e },
      );
    }
    confirmEmailLogin(e, t, n) {
      return this.withSentrySpan(
        "confirmEmailLogin",
        () =>
          new Promise((r, i) => {
            const o = { email: e, code: t, timezone: n || "", referralCode: "" };
            this.client.confirmEmailLogin(o, (e, t) => {
              e
                ? i(e)
                : (t.token &&
                    (this.setAuthToken(t.token), t.user?.id && this.startSession(t.user.id)),
                  r(t));
            });
          }),
        { email: e, hasCode: !!t },
      );
    }
    startEmailRegistration(e, t = "", n = "") {
      return this.withSentrySpan(
        "startEmailRegistration",
        () =>
          new Promise((r, i) => {
            const o = { email: e, firstName: t, lastName: n };
            this.client.startEmailRegistration(o, (e, t) => {
              e ? i(e) : r(t);
            });
          }),
        { email: e, hasName: !(!t && !n) },
      );
    }
    confirmEmailRegistration(e, t, n) {
      return this.withSentrySpan(
        "confirmEmailRegistration",
        () =>
          new Promise((r, i) => {
            const o = { email: e, code: t, timezone: n || "", referralCode: "" };
            this.client.confirmEmailRegistration(o, (e, t) => {
              e
                ? i(e)
                : (t.token &&
                    (this.setAuthToken(t.token), t.user?.id && this.startSession(t.user.id)),
                  r(t));
            });
          }),
        { email: e, hasCode: !!t },
      );
    }
    getUserInfo() {
      return new Promise((e, t) => {
        const n = setTimeout(() => {
          t(new Error(`gRPC timeout: getUserInfo took too long (${Math.floor(6)}s)`));
        }, 6e3);
        this.client.getUserInfo({}, (r, i) => {
          (clearTimeout(n), r ? t(r) : e(i));
        });
      });
    }
    getUserSubscription() {
      return new Promise((e, t) => {
        this.client.getUserSubscription({}, (n, r) => {
          n ? t(n) : e(r);
        });
      });
    }
    createSession(e, t = !1, n) {
      return this.withSentrySpan(
        "createSession",
        async () =>
          new Promise(async (r, i) => {
            console.log(
              `🎯 [gRPC Client] Создание сессии с autoDetectionEnabled=${t}, modeId=${n}`,
            );
            const o = { title: e, autoDetectionEnabled: t, modeId: n || "", sessionType: "" };
            console.log("📋 [gRPC Client] Запрос createSession:", o);
            try {
              await this.waitForReady(7e3);
            } catch (e) {
              (console.warn(
                "[gRPC Client] waitForReady failed, rebuilding client and retrying...",
                e,
              ),
                this.rebuildClient());
              try {
                await this.waitForReady(7e3);
              } catch (e) {
                return (
                  console.error("[gRPC Client] Channel not ready after rebuild", e),
                  void i(e)
                );
              }
            }
            this.client.createSession(o, (n, o) => {
              n
                ? (console.error("❌ [gRPC Client] Ошибка создания сессии:", n), i(n))
                : (console.log("✅ [gRPC Client] Сессия создана успешно:", o),
                  console.log(
                    "🔍 [gRPC Client] autoDetectionEnabled в ответе:",
                    o.autoDetectionEnabled,
                  ),
                  console.log("🎛️ [gRPC Client] modeId в ответе:", o.modeId),
                  u.addBreadcrumb({
                    message: "Interview session created",
                    level: "info",
                    category: "interview",
                    data: {
                      interviewSessionId: o.id,
                      title: e,
                      autoDetection: t,
                      userSessionId: this.sessionInfo?.id,
                    },
                  }),
                  r(o));
            });
          }),
        { title: e, autoDetectionEnabled: t, userSessionId: this.sessionInfo?.id },
      );
    }
    getSession(e) {
      return new Promise((t, n) => {
        const r = { sessionId: e };
        this.client.getSession(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    resumeSession(e) {
      return new Promise((t, n) => {
        const r = { sessionId: e };
        this.client.resumeSession(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    listSessions(e = 1, t = 10) {
      return new Promise((n, r) => {
        const i = { limit: t, offset: (e - 1) * t, sessionType: "" };
        this.client.listSessions(i, (e, t) => {
          e ? r(e) : n(t);
        });
      });
    }
    searchSessions(e, t = 20, n = 0) {
      return new Promise((r, i) => {
        const o = { query: e, limit: t, offset: n };
        this.client.searchSessions(o, (e, t) => {
          e ? i(e) : r(t);
        });
      });
    }
    processAudio(e) {
      const t = this.client.streamAudio(),
        n = t;
      let r = !0;
      const i = (t) => {
          if (
            r &&
            (console.warn("[GRPC-AUDIO] Stream error before main listeners attached:", t),
            "function" == typeof e)
          )
            try {
              e(t);
            } catch (e) {
              console.error("[GRPC-AUDIO] Failed to report early stream error:", e);
            }
        },
        o = (e, t) => {
          "error" === e &&
            t !== i &&
            queueMicrotask(() => {
              r && ((r = !1), n.removeListener("error", i), n.removeListener("newListener", o));
            });
        };
      return (n.on("error", i), n.on("newListener", o), t);
    }
    sendManualMessage(e, t, n = !1, r = !1, i, o = !1) {
      const s = {
        sessionId: e,
        text: t,
        useSmartModel: n,
        isAutoGenerated: r,
        modeId: i || "",
        ragEnabled: o,
      };
      console.log(
        `[DEBUG] gRPC request useSmartModel: ${s.useSmartModel}, isAutoGenerated: ${s.isAutoGenerated}, modeId: ${s.modeId}, ragEnabled: ${s.ragEnabled}`,
      );
      const a = u.startInactiveSpan({
          name: "grpc.sendManualMessage",
          op: "ai.response",
          attributes: {
            "grpc.method": "sendManualMessage",
            "session.id": e,
            "ai.smart_model": String(n),
            "ai.auto_generated": String(r),
            "ai.mode_id": i || "",
            "ai.rag_enabled": String(o),
          },
        }),
        c = this.client.sendManualMessage(s);
      let l = 0;
      return (
        c.on("data", (e) => {
          l++;
          try {
            const t = {
              sessionId: e.sessionId,
              content: e.content,
              isDone: e.isDone,
              error: e.error,
            };
            (t.isDone || t.error) &&
              (console.log(
                `[SERVER-MSG] #${l} completion: done=${t.isDone}, error=${t.error || "none"}`,
              ),
              a &&
                (a.setAttribute("ai.chunks_received", l),
                t.error
                  ? a.setStatus({ code: 2, message: t.error })
                  : a.setStatus({ code: 1, message: "ok" }),
                a.end()));
          } catch (e) {
            console.error("[SERVER-MSG] Error logging response:", e);
          }
        }),
        c.on("error", (e) => {
          a && (a.setStatus({ code: 2, message: e.message || "stream_error" }), a.end());
        }),
        c
      );
    }
    completeSession() {
      return new Promise((e) => {
        const t = setTimeout(() => {
          (console.warn("CompleteSession timed out after 10s, resolving anyway"), e());
        }, 1e4);
        this.client.completeSession({}, (n) => {
          (clearTimeout(t),
            n
              ? console.log("CompleteSession returned error, but ignoring:", n)
              : console.log("CompleteSession completed successfully"),
            e());
        });
      });
    }
    setUserLanguage(e) {
      return new Promise((t, n) => {
        const r = { language: e };
        this.client.setUserLanguage(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    setRegistrationSource(e) {
      return new Promise((t, n) => {
        const r = { source: e };
        this.client.setRegistrationSource(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    getLanguages() {
      return new Promise((e, t) => {
        this.client.getLanguages({}, (n, r) => {
          n ? t(n) : e(r);
        });
      });
    }
    updateSessionSettings(e, t, n) {
      return new Promise((r, i) => {
        console.log(
          `🔌 [gRPC Client] Подготовка запроса updateSessionSettings: sessionId=${e}, enabled=${t}, modeId=${n}`,
        );
        const o = { sessionId: e, autoDetectionEnabled: t, modeId: n || "" };
        (console.log("📤 [gRPC Client] Отправляем gRPC запрос updateSessionSettings"),
          this.client.updateSessionSettings(o, (e, t) => {
            e
              ? (console.error("❌ [gRPC Client] Ошибка gRPC updateSessionSettings:", e), i(e))
              : (console.log("📨 [gRPC Client] Успешный ответ updateSessionSettings:", t), r(t));
          }));
      });
    }
    getDialogHistory(e) {
      return new Promise((t, n) => {
        const r = { sessionId: e };
        this.client.getDialogHistory(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    uploadFile(e, t) {
      return new Promise((n, r) => {
        const i = { fileName: e, fileData: t };
        this.client.uploadFile(i, (e, t) => {
          e ? r(e) : n(t);
        });
      });
    }
    getUserContext() {
      return new Promise((e, t) => {
        this.client.getUserContext({}, (n, r) => {
          n ? t(n) : e(r);
        });
      });
    }
    setUserContext(e) {
      return new Promise((t, n) => {
        const r = { text: e };
        this.client.setUserContext(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    deleteUserContext() {
      return new Promise((e, t) => {
        this.client.deleteUserContext({}, (n) => {
          n ? t(n) : e();
        });
      });
    }
    synthesizeText(e, t, n = "") {
      const r = { sessionId: n, text: e, audioFormat: 0, voice: t, useSsml: !1 };
      return this.client.synthesizeText(r);
    }
    sendImage(e, t, n, r = !1, i, o = !1) {
      const s = {
          sessionId: e,
          imageData: t,
          imageFormat: n,
          useSmartModel: r,
          modeId: i || "",
          ragEnabled: o,
        },
        a = this.client.sendImage(s);
      return (
        a.on("data", (e) => {
          try {
            const t = {
              sessionId: e.sessionId,
              content: e.content,
              isDone: e.isDone,
              error: e.error,
            };
            t.isDone || t.error;
          } catch (e) {
            console.error("[IMAGE-MSG] Error logging response:", e);
          }
        }),
        a
      );
    }
    sendSessionChatMessage(e, t, n = !1) {
      const r = { sessionId: e, text: t, useSmartModel: n };
      return this.client.sendSessionChatMessage(r);
    }
    async getSessionChatHistory(e) {
      return new Promise((t, n) => {
        this.client.getSessionChatHistory({ sessionId: e }, (e, r) => {
          if (e) n(e);
          else {
            const e = (r.messages || []).map((e) => ({
              id: e.id,
              role: e.role,
              content: e.content,
              createdAt: e.createdAt ? new Date(1e3 * e.createdAt.seconds) : new Date(),
            }));
            t({ messages: e });
          }
        });
      });
    }
    async executeCode(e) {
      console.log("[GRPC-CLIENT] Executing code via OneCompiler:", e);
      try {
        return await new Promise((t, n) => {
          this.client.executeCode(e, (e, r) => {
            e
              ? (console.error("[GRPC-CLIENT] Code execution error:", e), n(e))
              : r
                ? (console.log("[GRPC-CLIENT] Code execution success:", r), t(r))
                : n(new Error("Empty response"));
          });
        });
      } catch (e) {
        throw (console.error("[GRPC-CLIENT] Code execution failed:", e), e);
      }
    }
    async saveDevice(e) {
      try {
        console.log("[GRPC-CLIENT] Saving device info...");
        const t = { deviceInfo: e };
        return await new Promise((e, n) => {
          this.client.saveDevice(t, (t, r) => {
            t
              ? (console.error("[GRPC-CLIENT] Save device failed:", t), n(t))
              : r
                ? (console.log("[GRPC-CLIENT] Device saved successfully:", r), e(r))
                : n(new Error("Empty response"));
          });
        });
      } catch (e) {
        throw (console.error("[GRPC-CLIENT] Device save failed:", e), e);
      }
    }
    generateSessionSummary(e) {
      const t = { sessionId: e };
      return this.client.generateSessionSummary(t);
    }
    getSessionSummary(e) {
      return new Promise((t, n) => {
        const r = { sessionId: e };
        this.client.getSessionSummary(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    listUserNotes() {
      return new Promise((e, t) => {
        this.client.listUserNotes({}, (n, r) => {
          n ? t(n) : e(r);
        });
      });
    }
    getUserNote(e) {
      return new Promise((t, n) => {
        const r = { noteId: e };
        this.client.getUserNote(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    createUserNote(e, t) {
      return new Promise((n, r) => {
        const i = { title: e, content: t };
        this.client.createUserNote(i, (e, t) => {
          e ? r(e) : n(t);
        });
      });
    }
    updateUserNote(e, t, n) {
      return new Promise((r, i) => {
        const o = { noteId: e, title: t, content: n };
        this.client.updateUserNote(o, (e, t) => {
          e ? i(e) : r(t);
        });
      });
    }
    deleteUserNote(e) {
      return new Promise((t, n) => {
        const r = { noteId: e };
        this.client.deleteUserNote(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    searchUserNotes(e) {
      return new Promise((t, n) => {
        const r = { query: e };
        this.client.searchUserNotes(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    listInterviewModes() {
      return new Promise((e, t) => {
        this.client.listInterviewModes({}, (n, r) => {
          n ? t(n) : e(r);
        });
      });
    }
    getInterviewMode(e) {
      return new Promise((t, n) => {
        const r = { modeId: e };
        this.client.getInterviewMode(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    createInterviewMode(e) {
      return new Promise((t, n) => {
        const r = {
          name: e.name,
          description: e.description,
          systemPrompt: e.systemPrompt,
          actions: e.actions,
          contextFileIds: e.contextFileIds,
          noteSections: e.noteSections,
          contextText: e.contextText || "",
        };
        this.client.createInterviewMode(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    updateInterviewMode(e, t) {
      return new Promise((n, r) => {
        const i = {
          modeId: e,
          name: t.name,
          description: t.description,
          systemPrompt: t.systemPrompt,
          actions: t.actions,
          contextFileIds: t.contextFileIds,
          noteSections: t.noteSections,
          contextText: t.contextText || "",
        };
        this.client.updateInterviewMode(i, (e, t) => {
          e ? r(e) : n(t);
        });
      });
    }
    deleteInterviewMode(e) {
      return new Promise((t, n) => {
        const r = { modeId: e };
        this.client.deleteInterviewMode(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    setDefaultInterviewMode(e) {
      return new Promise((t, n) => {
        const r = { modeId: e };
        this.client.setDefaultInterviewMode(r, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
  };
}

export default InterviewerClientWebpackModule;
