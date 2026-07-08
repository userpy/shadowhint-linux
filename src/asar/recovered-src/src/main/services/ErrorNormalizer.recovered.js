/*
 * Recovered from main webpack module 24884.
 * Inferred module name: ErrorNormalizer.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - none detected
 */

function ErrorNormalizerWebpackModule(e, t) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.cleanErrorMessage =
      t.isLimitError =
      t.isAuthError =
      t.createSuccessResponse =
      t.handleError =
        void 0));
  const n =
    'Вы исчерпали 15 минут бесплатного лимита на интервью. Пожалуйста, <a href="/open-subscription" style="color: #a855f7; text-decoration: underline;">обновите подписку в личном кабинете</a>.';
  ((t.handleError = function (e, t = "Произошла ошибка", r = {}) {
    const { context: i, showTechnicalDetails: o = !1, suggestions: s = [] } = r;
    if (
      (console.error(`[ERROR HANDLER] ${i || "Unknown context"}:`, e),
      e && "object" == typeof e && "details" in e)
    ) {
      const t = e.details,
        r = (t || "").toLowerCase();
      return r.includes("лимит времени интервью") ||
        r.includes("лимит часов") ||
        r.includes("лимит времени") ||
        r.includes("limit exceeded")
        ? {
            success: !1,
            error: t || "Лимит использования исчерпан",
            errorType: "LIMIT_EXHAUSTED",
            userMessage: t || n,
          }
        : "code" in e
          ? (function (e, t, r, i = !1) {
              switch (e) {
                case 1:
                  return {
                    success: !1,
                    error: "Операция отменена",
                    errorType: "SERVER_ERROR",
                    userMessage: "Операция была отменена. Попробуйте снова.",
                  };
                case 2:
                  return {
                    success: !1,
                    error: "Неизвестная ошибка сервера",
                    errorType: "SERVER_ERROR",
                    userMessage:
                      "Произошла неизвестная ошибка. Попробуйте позже или обратитесь в поддержку.",
                  };
                case 3:
                  return {
                    success: !1,
                    error: "Некорректные данные",
                    errorType: "VALIDATION_ERROR",
                    userMessage: "Проверьте введенные данные и попробуйте снова.",
                  };
                case 4:
                  return {
                    success: !1,
                    error: "Превышено время ожидания",
                    errorType: "NETWORK_ERROR",
                    userMessage:
                      "Сервер слишком долго отвечает. Проверьте подключение к интернету и попробуйте снова.",
                  };
                case 5:
                  return {
                    success: !1,
                    error: "Данные не найдены",
                    errorType: "NOT_FOUND",
                    userMessage:
                      "Запрашиваемые данные не найдены. Возможно, они были удалены или изменены.",
                  };
                case 6:
                  return {
                    success: !1,
                    error: "Данные уже существуют",
                    errorType: "VALIDATION_ERROR",
                    userMessage:
                      "Такие данные уже существуют. Попробуйте использовать другие параметры.",
                  };
                case 7:
                  return {
                    success: !1,
                    error: "Доступ запрещен",
                    errorType: "PERMISSION_DENIED",
                    userMessage:
                      "У вас нет прав для выполнения этой операции. Обратитесь к администратору.",
                  };
                case 8:
                  return {
                    success: !1,
                    error: t || "Ресурсы исчерпаны",
                    errorType: "RESOURCE_EXHAUSTED",
                    userMessage: t || n,
                  };
                case 9:
                  return {
                    success: !1,
                    error: "Условия не выполнены",
                    errorType: "VALIDATION_ERROR",
                    userMessage:
                      "Операция не может быть выполнена в текущем состоянии. Проверьте предварительные условия.",
                  };
                case 10:
                  return {
                    success: !1,
                    error: "Операция прервана",
                    errorType: "SERVER_ERROR",
                    userMessage: "Операция была прервана из-за конфликта. Попробуйте снова.",
                  };
                case 11:
                  return {
                    success: !1,
                    error: "Значение вне диапазона",
                    errorType: "VALIDATION_ERROR",
                    userMessage: "Введенное значение выходит за допустимые пределы.",
                  };
                case 12:
                  return {
                    success: !1,
                    error: "Функция не реализована",
                    errorType: "SERVER_ERROR",
                    userMessage: "Эта функция еще не реализована. Обратитесь в поддержку.",
                  };
                case 13:
                  return {
                    success: !1,
                    error: "Внутренняя ошибка сервера",
                    errorType: "SERVER_ERROR",
                    userMessage:
                      "Произошла внутренняя ошибка сервера. Попробуйте позже или обратитесь в поддержку.",
                  };
                case 14:
                  return {
                    success: !1,
                    error: "Сервис недоступен",
                    errorType: "NETWORK_ERROR",
                    userMessage:
                      "Сервис временно недоступен. Проверьте подключение к интернету и попробуйте позже.",
                  };
                case 15:
                  return {
                    success: !1,
                    error: "Потеря данных",
                    errorType: "SERVER_ERROR",
                    userMessage: "Обнаружена потеря данных. Обратитесь в поддержку немедленно.",
                  };
                case 16:
                  return {
                    success: !1,
                    error: "Ошибка авторизации",
                    errorType: "UNAUTHENTICATED",
                    userMessage:
                      "Срок действия авторизации истек. Пожалуйста, войдите в систему заново.",
                  };
                default:
                  return {
                    success: !1,
                    error: `Ошибка сервера (код ${e})`,
                    errorType: "SERVER_ERROR",
                    userMessage: i
                      ? `${t} (код ${e})`
                      : "Произошла ошибка на сервере. Попробуйте позже.",
                  };
              }
            })(e.code, t, 0, o)
          : {
              success: !1,
              error: `Ошибка сервера: ${t}`,
              errorType: "SERVER_ERROR",
              userMessage: o ? t : "Произошла ошибка на сервере. Попробуйте позже.",
            };
    }
    return e instanceof Error
      ? (function (e, t, n = !1) {
          return e.message.includes("ENOTFOUND") ||
            e.message.includes("ECONNREFUSED") ||
            e.message.includes("timeout")
            ? {
                success: !1,
                error: "📡 Ошибка сети",
                errorType: "NETWORK_ERROR",
                userMessage:
                  "Проблема с подключением к серверу. Проверьте интернет-соединение и попробуйте снова.",
              }
            : e.message.includes("validation") ||
                e.message.includes("invalid") ||
                e.message.includes("required")
              ? {
                  success: !1,
                  error: "📝 Ошибка валидации",
                  errorType: "VALIDATION_ERROR",
                  userMessage: "Проверьте правильность введенных данных.",
                }
              : {
                  success: !1,
                  error: n ? e.message : "Произошла ошибка",
                  errorType: "UNKNOWN_ERROR",
                  userMessage: n
                    ? e.message
                    : "Произошла непредвиденная ошибка. Если проблема повторяется, обратитесь в поддержку.",
                };
        })(e, 0, o)
      : {
          success: !1,
          error: t,
          errorType: "UNKNOWN_ERROR",
          userMessage: `${t}. Если проблема повторяется, обратитесь в поддержку.`,
        };
  }),
    (t.createSuccessResponse = function (e, t) {
      return { success: !0, data: e, ...t };
    }),
    (t.isAuthError = function (e) {
      if (e && "object" == typeof e) {
        if ("code" in e && 16 === e.code) return !0;
        if ("details" in e && "string" == typeof e.details) {
          const t = e.details.toLowerCase();
          return (
            t.includes("unauthorized") || t.includes("unauthenticated") || t.includes("авторизац")
          );
        }
        if ("message" in e && "string" == typeof e.message) {
          const t = e.message.toLowerCase();
          return (
            t.includes("unauthorized") || t.includes("unauthenticated") || t.includes("авторизац")
          );
        }
      }
      return !1;
    }),
    (t.isLimitError = function (e) {
      if (e && "object" == typeof e) {
        if ("code" in e && 8 === e.code) return !0;
        if ("details" in e && "string" == typeof e.details) {
          const t = e.details.toLowerCase();
          return (
            t.includes("лимит") ||
            t.includes("limit") ||
            t.includes("quota") ||
            t.includes("exhausted")
          );
        }
      }
      return !1;
    }),
    (t.cleanErrorMessage = function (e) {
      if (e instanceof Error && e.message) {
        let t = e.message;
        t = t.replace(/^\d+\s+\w+:\s*/, "");
        const n = t.indexOf(": ");
        return (-1 !== n && (t = t.substring(n + 2)), t);
      }
      if ("string" == typeof e) {
        let t = e;
        t = t.replace(/^\d+\s+\w+:\s*/, "");
        const n = t.indexOf(": ");
        return (-1 !== n && (t = t.substring(n + 2)), t);
      }
      return "Произошла неизвестная ошибка";
    }));
}

export default ErrorNormalizerWebpackModule;
