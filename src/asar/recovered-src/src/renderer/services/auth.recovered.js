/*
 * Recovered from renderer webpack module 62254.
 * Inferred module name: AuthService.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - none detected
 */

function AuthServiceWebpackModule(e, t) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.syncTokenWithMain =
      t.logout =
      t.getUserData =
      t.saveUserData =
      t.checkAuthentication =
      t.handleAuthError =
      t.isAuthError =
        void 0),
    (t.isAuthError = (e) => {
      if (!e) return !1;
      const t = "string" == typeof e ? new Error(e) : e;
      if (t instanceof Error) {
        const e = t.message.toLowerCase();
        return (
          e.includes("authentication") ||
          e.includes("unauthenticated") ||
          e.includes("unauthorized") ||
          e.includes("авторизац") ||
          e.includes("аутентификац") ||
          (e.includes("токен") &&
            (e.includes("истек") || e.includes("недейств") || e.includes("expired")))
        );
      }
      const n = t;
      return (
        16 === n.code ||
        16 === n.status ||
        401 === n.status ||
        403 === n.status ||
        401 === n.statusCode ||
        403 === n.statusCode
      );
    }),
    (t.handleAuthError = async (e, t = {}) => {
      const {
        navigate: n,
        redirectUrl: r = "/setup",
        resetWindowSettings: o = !1,
        onLogout: i,
        preserveAuthData: a = !1,
        skipLogoutCall: s = !1,
      } = t;
      if ((e && console.error("Ошибка аутентификации:", e), a && "/setup" === r))
        console.log("Сохраняем данные авторизации при переходе на страницу настроек");
      else if (
        (console.log("Обработка ошибки аутентификации"),
        localStorage.removeItem("user"),
        localStorage.removeItem("token"),
        !s && window.api?.auth)
      )
        try {
          await window.api.auth.logout();
        } catch (e) {
          console.error("Ошибка при выходе через API:", e);
        }
      if (o && "undefined" != typeof window && window.api && window.api.window)
        try {
          (window.api.window.resetTransparent && (await window.api.window.resetTransparent()),
            window.api.window.setHeightByElement &&
              (await window.api.window.setHeightByElement(732, "standart height")));
        } catch (e) {
          console.error("Ошибка при сбросе настроек окна:", e);
        }
      (i && !a && i(),
        n
          ? n(r, { replace: !0 })
          : "undefined" != typeof window && (window.location.hash = `#${r}`));
    }),
    (t.checkAuthentication = async () => {
      const e = Date.now();
      console.log("[AUTH] 🔍 Начало проверки аутентификации...");
      try {
        const t = localStorage.getItem("user"),
          n = localStorage.getItem("token");
        if (
          (console.log("[AUTH] 📦 localStorage - user:", t ? "✓ найден" : "✗ отсутствует"),
          console.log("[AUTH] 📦 localStorage - token:", n ? "✓ найден" : "✗ отсутствует"),
          !t || !n)
        ) {
          const t = Date.now() - e;
          return (console.log(`[AUTH] ✗ Токен не найден в localStorage (${t}ms)`), !1);
        }
        try {
          const t = JSON.parse(n),
            r = t.expiresAt ? new Date(t.expiresAt) : null;
          if (
            (console.log("[AUTH] ⏰ Проверка срока действия токена..."),
            r &&
              (console.log("[AUTH] ⏰ Токен истекает:", r.toISOString()),
              console.log("[AUTH] ⏰ Текущее время:", new Date().toISOString())),
            r && r < new Date())
          ) {
            const t = Date.now() - e;
            return (
              console.log(`[AUTH] ✗ Токен истек локально (${t}ms)`),
              localStorage.removeItem("user"),
              localStorage.removeItem("token"),
              !1
            );
          }
          if (
            (console.log("[AUTH] ✓ Токен валиден локально"), r && r < new Date(Date.now() + 3e5))
          ) {
            const e = Math.floor((r.getTime() - Date.now()) / 6e4);
            (console.log(`[AUTH] ⚠️  Токен истекает через ${e} минут`),
              window.dispatchEvent(
                new CustomEvent("tokenExpiringSoon", { detail: { expiresAt: t.expiresAt } }),
              ));
          }
          if (
            "undefined" != typeof window &&
            window.api &&
            window.api.auth &&
            window.api.auth.checkAuthentication
          ) {
            console.log("[AUTH] 🌐 Валидация токена через API...");
            const t = Date.now(),
              n = await window.api.auth.checkAuthentication(),
              r = Date.now() - t,
              o = Date.now() - e;
            return (
              console.log(
                `[AUTH] 🌐 Ответ API получен за ${r}ms:`,
                n.success ? "✓ успешно" : "✗ ошибка",
              ),
              n.degraded &&
                console.log(
                  "[AUTH] ⚠️  Сетевая деградация: принимаем локально-валидный токен без разлогина",
                ),
              !n.success && n.error && console.log("[AUTH] ❌ Ошибка API:", n.error),
              console.log(`[AUTH] ${n.success ? "✓" : "✗"} Проверка завершена за ${o}ms`),
              n.success
            );
          }
          const o = Date.now() - e;
          return (
            console.log(`[AUTH] ⚠️  API недоступен, доверяем локальной проверке (${o}ms)`),
            !0
          );
        } catch (t) {
          const n = Date.now() - e;
          return (
            console.error(`[AUTH] ❌ Ошибка при проверке токена в localStorage (${n}ms):`, t),
            !1
          );
        }
      } catch (t) {
        const n = Date.now() - e;
        return (
          console.error(`[AUTH] ❌ Общая ошибка при проверке аутентификации (${n}ms):`, t),
          !1
        );
      }
    }),
    (t.saveUserData = (e, t) => {
      try {
        if (!e.email)
          return (console.error("Ошибка: email отсутствует в данных пользователя!"), !1);
        const n = { ...e };
        return (
          n.id ||
            ((n.id = `temp-${Date.now()}-${n.email?.replace(/[^a-z0-9]/gi, "") || "user"}`),
            console.log("Сгенерирован временный ID пользователя:", n.id)),
          localStorage.setItem("user", JSON.stringify(n)),
          localStorage.setItem("token", JSON.stringify(t)),
          console.log("Пользователь сохранен:", n.id),
          !!localStorage.getItem("user") ||
            (console.error("Ошибка: данные пользователя не сохранились в localStorage!"), !1)
        );
      } catch (e) {
        return (console.error("Ошибка при сохранении данных пользователя:", e), !1);
      }
    }),
    (t.getUserData = async () => {
      try {
        const e = localStorage.getItem("user"),
          t = localStorage.getItem("token");
        if (!e || !t) return { user: null, token: null };
        const n = JSON.parse(e),
          r = JSON.parse(t);
        if (r.expiresAt && new Date(r.expiresAt) < new Date())
          return (
            console.log("Токен истек локально, очищаем данные"),
            localStorage.removeItem("user"),
            localStorage.removeItem("token"),
            { user: null, token: null }
          );
        const o = new Date(Date.now() + 3e5);
        return (
          r.expiresAt &&
            new Date(r.expiresAt) < o &&
            (console.log("Токен истекает в течение 5 минут, уведомляем пользователя"),
            window.dispatchEvent(
              new CustomEvent("tokenExpiringSoon", { detail: { expiresAt: r.expiresAt } }),
            )),
          { user: n, token: r }
        );
      } catch (e) {
        return (
          console.error("Ошибка при получении данных пользователя:", e),
          localStorage.removeItem("user"),
          localStorage.removeItem("token"),
          { user: null, token: null }
        );
      }
    }),
    (t.logout = async (e = {}) => {
      try {
        (console.log("Выход пользователя из системы"),
          "undefined" != typeof window &&
            window.api &&
            window.api.auth &&
            window.api.auth.logout &&
            (await window.api.auth.logout()),
          localStorage.removeItem("user"),
          localStorage.removeItem("token"));
        const {
          navigate: t,
          redirectUrl: n = "/setup",
          resetWindowSettings: r = !1,
          onLogout: o,
          skipRedirect: i = !1,
        } = e;
        if (r && "undefined" != typeof window && window.api && window.api.window)
          try {
            (window.api.window.resetTransparent && (await window.api.window.resetTransparent()),
              window.api.window.setHeightByElement &&
                (await window.api.window.setHeightByElement(732, "logout")));
          } catch (e) {
            console.error("Ошибка при сбросе настроек окна:", e);
          }
        (o && o(),
          i || (t ? t(n) : "undefined" != typeof window && (window.location.hash = `#${n}`)));
      } catch (e) {
        console.error("Ошибка при выходе из системы:", e);
      }
    }),
    (t.syncTokenWithMain = () =>
      new Promise((e, t) => {
        try {
          const n = localStorage.getItem("token");
          if (n)
            try {
              const r = JSON.parse(n);
              r && r.token
                ? (console.log("Синхронизация токена с main процессом..."),
                  "undefined" != typeof window &&
                  window.api &&
                  window.api.auth &&
                  window.api.auth.setAuthToken
                    ? window.api.auth
                        .setAuthToken(r.token)
                        .then((n) => {
                          n.success
                            ? (console.log("Токен успешно синхронизирован с main процессом"), e())
                            : (console.error("Ошибка при синхронизации токена с main процессом"),
                              t(new Error("Ошибка при синхронизации токена")));
                        })
                        .catch((e) => {
                          (console.error("Ошибка при вызове setAuthToken:", e), t(e));
                        })
                    : (console.warn("API для синхронизации токена недоступен"), e()))
                : (console.warn("Токен не содержит свойства token"), e());
            } catch (t) {
              (console.error("Ошибка при парсинге токена из localStorage:", t), e());
            }
          else (console.warn("Токен не найден в localStorage"), e());
        } catch (t) {
          (console.error("Ошибка при синхронизации токена:", t), e());
        }
      })));
}

export default AuthServiceWebpackModule;
