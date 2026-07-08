/*
 * Recovered from renderer webpack module 52040.
 * Inferred module name: RecordingSettings.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 40285
 * - 68329
 * - 99163
 * - 55099 (SettingsGroup)
 * - 97432 (SettingsToggle)
 */

function RecordingSettingsWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const o = n(40285),
    i = (r(n(68329)), n(99163)),
    a = r(n(55099)),
    s = r(n(97432));
  t.default = ({ settings: e, onSettingChange: t }) => {
    const { t: n } = (0, i.useTranslation)();
    return (0, o.jsxs)("div", {
      children: [
        (0, o.jsx)("h2", {
          className: "settings-section-title",
          children: n("settings.recording.title", "Запись собеседования"),
        }),
        (0, o.jsxs)(a.default, {
          title: n("settings.recording.screenRecordingGroup", "Запись экрана"),
          children: [
            (0, o.jsx)(s.default, {
              label: n("settings.recording.recordingEnabled", "Запись сессии"),
              description: n(
                "settings.recording.recordingEnabledDesc",
                "Записывать экран во время сессий",
              ),
              checked: e.recordingEnabled,
              onChange: (e) => t("recordingEnabled", e),
            }),
            (0, o.jsx)(s.default, {
              label: n("settings.recording.keystrokeOverlay", "Показ нажатых клавиш"),
              description: n(
                "settings.recording.keystrokeOverlayDesc",
                "Показывать нажатые горячие клавиши на записи",
              ),
              checked: e.keystrokeOverlayEnabled,
              onChange: (e) => t("keystrokeOverlayEnabled", e),
            }),
            "win32" === process.platform &&
              (0, o.jsx)(s.default, {
                label: n("settings.recording.showMainWindow", "Show ShadowHint on recording"),
                description: n(
                  "settings.recording.showMainWindowDesc",
                  "Show ShadowHint window overlay on the recording",
                ),
                checked: e.showMainWindowOnRecording,
                onChange: (e) => t("showMainWindowOnRecording", e),
              }),
          ],
        }),
        (0, o.jsx)(a.default, {
          title: n("settings.recording.outputFolderGroup", "Папка для записей"),
          children: (0, o.jsxs)("div", {
            className: "recording-path-setting",
            children: [
              (0, o.jsx)("div", {
                className: "recording-path-display",
                children: (0, o.jsx)("span", {
                  className: "recording-path-text",
                  children:
                    e.recordingOutputPath ||
                    n(
                      "settings.recording.defaultPath",
                      "По умолчанию (Документы/ShadowHint/Recordings)",
                    ),
                }),
              }),
              (0, o.jsx)("button", {
                className: "recording-path-button",
                onClick: () => {
                  window.api.recording.openOutputFolder();
                },
                children: n("settings.recording.openFolder", "Открыть папку"),
              }),
              (0, o.jsx)("button", {
                className: "recording-path-button",
                onClick: async () => {
                  const e = await window.api.recording.pickOutputFolder();
                  e.success && e.path && t("recordingOutputPath", e.path);
                },
                children: n("settings.recording.pickFolder", "Выбрать папку"),
              }),
              e.recordingOutputPath &&
                (0, o.jsx)("button", {
                  className: "recording-path-reset",
                  onClick: () => t("recordingOutputPath", ""),
                  children: n("settings.recording.resetFolder", "Сбросить"),
                }),
            ],
          }),
        }),
      ],
    });
  };
}

export default RecordingSettingsWebpackModule;
