#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const appDir = path.join(rootDir, "src", "asar");
const outputDir = path.join(appDir, "recovered-src");

const acorn = require(path.join(appDir, "node_modules", "acorn"));
const prettier = require(path.join(appDir, "node_modules", "prettier"));

const rendererBundlePath = path.join(
  appDir,
  ".webpack",
  "renderer",
  "main_window",
  "index.js",
);
const mainBundlePath = path.join(appDir, ".webpack", "main", "index.js");
const preloadBundlePath = path.join(
  appDir,
  ".webpack",
  "renderer",
  "main_window",
  "preload.js",
);
const indexHtmlPath = path.join(
  appDir,
  ".webpack",
  "renderer",
  "main_window",
  "index.html",
);

const rendererModulesToRecover = {
  92200: ["src/renderer/RendererEntry.recovered.jsx", "RendererEntry"],
  93557: ["src/renderer/App.recovered.jsx", "App"],
  58370: ["src/renderer/pages/LiveWidgetPage.recovered.jsx", "LiveWidgetPage"],
  59781: ["src/renderer/components/live/LiveWidget.recovered.jsx", "LiveWidget"],
  26292: [
    "src/renderer/components/live/LiveWidgetComposer.recovered.jsx",
    "LiveWidgetComposer",
  ],
  98162: ["src/renderer/components/TitleBar.recovered.jsx", "TitleBar"],
  66223: [
    "src/renderer/components/ToolbarSettingsPanel.recovered.jsx",
    "ToolbarSettingsPanel",
  ],
  49468: ["src/renderer/pages/TranscriptionPage.recovered.jsx", "TranscriptionPage"],
  36067: [
    "src/renderer/components/TranscriptionWindow.recovered.jsx",
    "TranscriptionWindow",
  ],
  127: ["src/renderer/pages/SessionsPage.recovered.jsx", "SessionsPage"],
  56503: ["src/renderer/pages/SessionDetailPage.recovered.jsx", "SessionDetailPage"],
  46193: ["src/renderer/components/sessions/SessionRow.recovered.jsx", "SessionRow"],
  25861: [
    "src/renderer/components/sessions/DateGroupHeader.recovered.jsx",
    "DateGroupHeader",
  ],
  8859: [
    "src/renderer/components/sessions/SessionsHeader.recovered.jsx",
    "SessionsHeader",
  ],
  51028: ["src/renderer/components/notes/NoteEditor.recovered.jsx", "NoteEditor"],
  46260: [
    "src/renderer/components/sessions/ZoomTipModal.recovered.jsx",
    "ZoomTipModal",
  ],
  27633: ["src/renderer/pages/AuthPage.recovered.jsx", "AuthPage"],
  83539: ["src/renderer/pages/SetupWizard.recovered.jsx", "SetupWizard"],
  73807: ["src/renderer/pages/ContextSetupPage.recovered.jsx", "ContextSetupPage"],
  81902: [
    "src/renderer/pages/DeviceSetupDiagnostics.recovered.jsx",
    "DeviceSetupDiagnostics",
  ],
  42461: [
    "src/renderer/components/RegistrationSourcePicker.recovered.jsx",
    "RegistrationSourcePicker",
  ],
  6141: [
    "src/renderer/windows/UpdateNotificationWindow.recovered.jsx",
    "UpdateNotificationWindow",
  ],
  3302: ["src/renderer/windows/SettingsWindow.recovered.jsx", "SettingsWindow"],
  95132: [
    "src/renderer/components/settings/SettingsSidebar.recovered.jsx",
    "SettingsSidebar",
  ],
  52939: [
    "src/renderer/components/settings/GeneralSettings.recovered.jsx",
    "GeneralSettings",
  ],
  20768: [
    "src/renderer/components/settings/ShortcutsSettingsSection.recovered.jsx",
    "ShortcutsSettingsSection",
  ],
  41898: [
    "src/renderer/components/settings/ShortcutsSettingsList.recovered.jsx",
    "ShortcutsSettingsList",
  ],
  45673: [
    "src/renderer/components/settings/ScreenSettings.recovered.jsx",
    "ScreenSettings",
  ],
  91833: [
    "src/renderer/components/settings/AudioSettings.recovered.jsx",
    "AudioSettings",
  ],
  77504: [
    "src/renderer/components/settings/AccountSettings.recovered.jsx",
    "AccountSettings",
  ],
  89402: [
    "src/renderer/components/settings/AboutSettings.recovered.jsx",
    "AboutSettings",
  ],
  52040: [
    "src/renderer/components/settings/RecordingSettings.recovered.jsx",
    "RecordingSettings",
  ],
  55099: [
    "src/renderer/components/settings/SettingsGroup.recovered.jsx",
    "SettingsGroup",
  ],
  97432: [
    "src/renderer/components/settings/SettingsToggle.recovered.jsx",
    "SettingsToggle",
  ],
  62531: [
    "src/renderer/components/settings/SettingsSlider.recovered.jsx",
    "SettingsSlider",
  ],
  26160: [
    "src/renderer/components/settings/SettingsSelect.recovered.jsx",
    "SettingsSelect",
  ],
  8421: [
    "src/renderer/components/settings/LiveShortcutsSettings.recovered.jsx",
    "LiveShortcutsSettings",
  ],
  910: ["src/renderer/components/ShortcutEditor.recovered.jsx", "ShortcutEditor"],
  15724: [
    "src/renderer/components/audio/MicrophoneSelector.recovered.jsx",
    "MicrophoneSelector",
  ],
  57554: [
    "src/renderer/components/audio/MiniCombinedWaveform.recovered.jsx",
    "MiniCombinedWaveform",
  ],
  70369: [
    "src/renderer/components/markdown/FormattedMarkdown.recovered.jsx",
    "FormattedMarkdown",
  ],
  47860: [
    "src/renderer/components/code/CodeExecutionPanel.recovered.jsx",
    "CodeExecutionPanel",
  ],
  51270: ["src/renderer/components/Tooltip.recovered.jsx", "Tooltip"],
  86596: ["src/renderer/components/CustomSelect.recovered.jsx", "CustomSelect"],
  33897: [
    "src/renderer/components/StreamingMessage.recovered.jsx",
    "StreamingMessage",
  ],
  55644: ["src/renderer/components/SettingsIcon.recovered.jsx", "SettingsIcon"],
  57128: ["src/renderer/components/Toast.recovered.js", "Toast"],
  20552: ["src/renderer/i18n/i18n.recovered.js", "I18nSetup"],
  44362: ["src/renderer/i18n/en.recovered.js", "EnglishTranslations"],
  36252: ["src/renderer/i18n/ru.recovered.js", "RussianTranslations"],
  62254: ["src/renderer/services/auth.recovered.js", "AuthService"],
  65356: ["src/renderer/services/analytics.recovered.js", "AnalyticsService"],
  66856: ["src/renderer/services/statsig.recovered.js", "StatsigService"],
  93197: ["src/renderer/services/statsigClient.recovered.js", "StatsigClient"],
  19234: ["src/renderer/services/speech.recovered.js", "SpeechService"],
  2941: ["src/renderer/utils/sessionDates.recovered.js", "SessionDates"],
  21183: ["src/renderer/utils/liveWidgetHeight.recovered.js", "LiveWidgetHeight"],
  70541: ["src/renderer/assets/icon.asset-module.recovered.js", "IconAsset"],
  77861: ["src/renderer/assets/sendIcon.asset-module.recovered.js", "SendIconAsset"],
  64521: ["src/renderer/assets/exameasy.asset-module.recovered.js", "ExamEasyAsset"],
  33894: ["src/renderer/assets/psykit.asset-module.recovered.js", "PsykitAsset"],
};

const mainModulesToRecover = {
  75458: ["src/main/main.recovered.js", "MainProcess"],
  90139: ["src/main/services/InterviewerClient.recovered.js", "InterviewerClient"],
  15739: ["src/main/services/UpdaterService.recovered.js", "UpdaterService"],
  1722: [
    "src/main/windows/UpdateNotificationWindowManager.recovered.js",
    "UpdateNotificationWindowManager",
  ],
  97653: [
    "src/main/ipc/SuggestionWindowHandlers.recovered.js",
    "SuggestionWindowHandlers",
  ],
  73114: ["src/main/services/VideoRecorder.recovered.js", "VideoRecorder"],
  75374: ["src/main/services/ShortcutManager.recovered.js", "ShortcutManager"],
  38741: ["src/main/services/DisguiseService.recovered.js", "DisguiseService"],
  59963: ["src/main/services/SentryMain.recovered.js", "SentryMain"],
  29953: [
    "src/main/services/AudioLoopbackController.recovered.js",
    "AudioLoopbackController",
  ],
  15598: ["src/main/services/DeviceFingerprint.recovered.js", "DeviceFingerprint"],
  24884: ["src/main/services/ErrorNormalizer.recovered.js", "ErrorNormalizer"],
  1291: ["src/main/services/ScreenshotCapture.recovered.js", "ScreenshotCapture"],
  88251: [
    "src/main/windows/SuggestionWindowManager.recovered.js",
    "SuggestionWindowManager",
  ],
  81906: [
    "src/main/stores/SuggestionWindowSettings.recovered.js",
    "SuggestionWindowSettings",
  ],
  65264: [
    "src/main/stores/ScreenSelectionSettings.recovered.js",
    "ScreenSelectionSettings",
  ],
  66012: ["src/main/stores/ElectronStoreBridge.recovered.js", "ElectronStoreBridge"],
  57991: ["src/main/native/CursorLock.recovered.js", "CursorLock"],
  28680: ["src/main/audio/ElectronAudioLoopback.recovered.js", "ElectronAudioLoopback"],
  17071: ["src/main/audio/LoopbackMain.recovered.js", "LoopbackMain"],
  10105: ["src/main/audio/LoopbackRenderer.recovered.js", "LoopbackRenderer"],
  11544: ["src/main/startup/SquirrelStartup.recovered.js", "SquirrelStartup"],
  12124: ["src/main/ipc/sendToWindow.recovered.js", "SendToWindow"],
};

function parseCode(code) {
  return acorn.parse(code, {
    ecmaVersion: "latest",
    ranges: true,
    allowHashBang: true,
    sourceType: "script",
  });
}

function walkAst(node, visitor) {
  if (!node) return;
  visitor(node);

  for (const key of Object.keys(node)) {
    if (["range", "loc", "start", "end"].includes(key)) continue;

    const value = node[key];
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item && typeof item.type === "string") walkAst(item, visitor);
      }
    } else if (value && typeof value.type === "string") {
      walkAst(value, visitor);
    }
  }
}

function findWebpackModulesObject(ast, minimumNumericKeys) {
  let bestObject = null;

  walkAst(ast, (node) => {
    if (node.type !== "ObjectExpression") return;

    const numericKeys = node.properties.filter((property) =>
      /^\d+$/.test(String(property.key?.value ?? property.key?.name)),
    ).length;

    if (numericKeys < minimumNumericKeys) return;
    if (!bestObject || node.properties.length > bestObject.properties.length) {
      bestObject = node;
    }
  });

  if (!bestObject) {
    throw new Error("Could not find webpack module object");
  }

  return bestObject;
}

function getModuleBody(bundleCode, valueNode) {
  if (
    (valueNode.type === "ArrowFunctionExpression" ||
      valueNode.type === "FunctionExpression") &&
    valueNode.body?.type === "BlockStatement"
  ) {
    return bundleCode.slice(valueNode.body.range[0] + 1, valueNode.body.range[1] - 1);
  }

  return bundleCode.slice(valueNode.range[0], valueNode.range[1]);
}

function getModuleParams(bundleCode, valueNode) {
  if (
    valueNode.type !== "ArrowFunctionExpression" &&
    valueNode.type !== "FunctionExpression"
  ) {
    return [];
  }

  return valueNode.params.map((param) => bundleCode.slice(param.range[0], param.range[1]));
}

function extractWebpackModules(bundlePath, minimumNumericKeys) {
  const code = fs.readFileSync(bundlePath, "utf8");
  const ast = parseCode(code);
  const modulesObject = findWebpackModulesObject(ast, minimumNumericKeys);
  const modules = new Map();

  for (const property of modulesObject.properties) {
    const id = String(property.key.value ?? property.key.name);
    modules.set(id, {
      id,
      body: getModuleBody(code, property.value),
      params: getModuleParams(code, property.value),
      functionSource: code.slice(property.value.range[0], property.value.range[1]),
    });
  }

  return { code, modules };
}

function getStringArrayProperty(objectNode, propertyName) {
  const property = objectNode.properties.find((candidate) => {
    const key = candidate.key?.value ?? candidate.key?.name;
    return key === propertyName;
  });

  if (!property || property.value.type !== "ArrayExpression") return null;

  return property.value.elements
    .filter((element) => element?.type === "Literal" && typeof element.value === "string")
    .map((element) => element.value);
}

function extractEmbeddedSources(bundleCode) {
  const ast = parseCode(bundleCode);
  const sources = [];

  walkAst(ast, (node) => {
    if (node.type !== "ObjectExpression") return;

    const sourcePaths = getStringArrayProperty(node, "sources");
    const sourceContents = getStringArrayProperty(node, "sourcesContent");

    if (!sourcePaths || !sourceContents) return;

    for (let index = 0; index < sourcePaths.length; index += 1) {
      const sourcePath = sourcePaths[index];
      const sourceContent = sourceContents[index];
      if (!sourcePath || typeof sourceContent !== "string") continue;

      sources.push({
        sourcePath: sourcePath.replace(/^webpack:\/\/\.\//, ""),
        sourceContent,
      });
    }
  });

  return sources;
}

function ensureDirectory(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeText(relativePath, text) {
  const filePath = path.join(outputDir, relativePath);
  ensureDirectory(filePath);
  fs.writeFileSync(filePath, text);
}

function copyDirectoryIfExists(from, toRelative) {
  if (!fs.existsSync(from)) return;
  const to = path.join(outputDir, toRelative);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
}

async function formatCode(code, parser = "babel") {
  try {
    return await prettier.format(code, {
      parser,
      printWidth: 100,
      tabWidth: 2,
    });
  } catch (error) {
    return `/* Prettier could not parse this recovered file: ${error.message} */\n${code}`;
  }
}

function toFunctionName(name) {
  return name.replace(/[^A-Za-z0-9_$]/g, "_").replace(/^[^A-Za-z_$]/, "_");
}

function collectDependencies(body) {
  return [...new Set([...body.matchAll(/\bn\((\d+)\)/g)].map((match) => match[1]))];
}

function detectExternalModules(modules) {
  const externals = {};

  for (const [id, moduleInfo] of modules) {
    const match = moduleInfo.body.match(/\bexports\s*=\s*require\("([^"]+)"\)/);
    if (match) {
      externals[id] = match[1];
    }
  }

  return externals;
}

function buildKnownNames(...moduleGroups) {
  const knownNames = {};

  for (const moduleGroup of moduleGroups) {
    for (const [id, [, name]] of Object.entries(moduleGroup)) {
      knownNames[id] = name;
    }
  }

  return knownNames;
}

function dependencyLabel(id, knownNames, externals) {
  if (knownNames[id]) return `${id} (${knownNames[id]})`;
  if (externals[id]) return `${id} (${externals[id]})`;
  return id;
}

function createRecoveredModuleSource({
  bundleName,
  moduleId,
  moduleInfo,
  name,
  knownNames,
  externals,
}) {
  const params = moduleInfo.params.length
    ? moduleInfo.params.join(", ")
    : "module, exports, __webpack_require__";
  const dependencies = collectDependencies(moduleInfo.body);
  const dependencyLines = dependencies.length
    ? dependencies.map((id) => ` * - ${dependencyLabel(id, knownNames, externals)}`).join("\n")
    : " * - none detected";
  const safeName = toFunctionName(`${name}WebpackModule`);

  return `/*
 * Recovered from ${bundleName} webpack module ${moduleId}.
 * Inferred module name: ${name}.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
${dependencyLines}
 */

function ${safeName}(${params}) {
${moduleInfo.body}
}

export default ${safeName};
`;
}

function createModuleIndex(bundleName, modules, selectedModules, knownNames, externals) {
  const selectedIds = new Set(Object.keys(selectedModules));

  return [...modules.values()]
    .map((moduleInfo) => {
      const [outputPath, name] = selectedModules[moduleInfo.id] ?? [];
      const dependencies = collectDependencies(moduleInfo.body);

      return {
        bundle: bundleName,
        id: moduleInfo.id,
        recovered: selectedIds.has(moduleInfo.id),
        inferredName: name ?? null,
        outputPath: outputPath ?? null,
        external: externals[moduleInfo.id] ?? null,
        bytes: moduleInfo.body.length,
        dependencies: dependencies.map((id) => ({
          id,
          label: dependencyLabel(id, knownNames, externals),
          recovered: selectedIds.has(id),
        })),
      };
    })
    .sort((left, right) => Number(left.id) - Number(right.id));
}

async function recoverNamedModules({
  bundleName,
  modules,
  selectedModules,
  knownNames,
  externals,
}) {
  for (const [moduleId, [outputPath, name]] of Object.entries(selectedModules)) {
    const moduleInfo = modules.get(moduleId);
    if (!moduleInfo) {
      console.warn(`[recover] Missing ${bundleName} module ${moduleId} (${name})`);
      continue;
    }

    const source = createRecoveredModuleSource({
      bundleName,
      moduleId,
      moduleInfo,
      name,
      knownNames,
      externals,
    });
    const formatted = await formatCode(source, "babel");
    writeText(outputPath, formatted);
  }
}

function sourceOutputPath(sourcePath) {
  if (sourcePath.startsWith("src/")) return sourcePath;
  if (sourcePath.startsWith("node_modules/")) {
    return path.join("vendor-sources", sourcePath);
  }
  return path.join("vendor-sources", sourcePath);
}

function writeEmbeddedSources(bundleCode) {
  const written = [];

  for (const source of extractEmbeddedSources(bundleCode)) {
    const relativePath = sourceOutputPath(source.sourcePath);
    writeText(relativePath, source.sourceContent);
    written.push({
      sourcePath: source.sourcePath,
      outputPath: relativePath,
      bytes: source.sourceContent.length,
    });
  }

  return written.sort((left, right) => left.outputPath.localeCompare(right.outputPath));
}

function createReadme({
  rendererRecoveredCount,
  mainRecoveredCount,
  embeddedSourceCount,
  rendererModuleCount,
  mainModuleCount,
}) {
  return `# Recovered ShadowHint sources

Эта папка создана скриптом \`tools/recover-webpack-source.cjs\` из уже собранных webpack-бандлов Electron.

## Что восстановлено

- \`src/renderer/**/*.recovered.jsx\` - основные React entry/page/component/service модули, разложенные по понятным именам.
- \`src/main/**/*.recovered.js\` - основные модули main-process Electron.
- \`src/preload/preload.recovered.js\` - отформатированный preload bundle с \`window.api\`.
- \`src/renderer/styles/*.css\` и \`src/renderer/components/*.css\` - CSS, восстановленный из embedded \`sourcesContent\`.
- \`module-map.json\` - карта всех webpack module id, зависимостей и восстановленных файлов.

## Важные ограничения

- JS/React sourcemap-файлов рядом с бандлами нет. Поэтому JS восстановлен как beautified webpack output, а не как исходный TypeScript/TSX один-в-один.
- Имена компонентов и файлов выведены по строкам, CSS-классам, импортам и поведению.
- Внутри файлов сохранена webpack-семантика: обычно \`e = module\`, \`t = exports\`, \`n = __webpack_require__\`.
- CSS восстановлен намного точнее, потому что его \`sourcesContent\` был встроен прямо в renderer bundle.

## Статистика

- Renderer modules total: ${rendererModuleCount}
- Renderer modules recovered as named source files: ${rendererRecoveredCount}
- Main modules total: ${mainModuleCount}
- Main modules recovered as named source files: ${mainRecoveredCount}
- Embedded source files recovered: ${embeddedSourceCount}

Для повторного восстановления запусти из корня проекта:

\`\`\`bash
node tools/recover-webpack-source.cjs
\`\`\`

Если папка уже существует, скрипт остановится, чтобы не перезаписать ручные правки. Для пересоздания удали \`src/asar/recovered-src\` вручную.
`;
}

async function main() {
  if (fs.existsSync(outputDir)) {
    console.error(
      `Output directory already exists: ${path.relative(rootDir, outputDir)}\n` +
        "Remove it manually before regenerating, so local edits are not lost.",
    );
    process.exitCode = 1;
    return;
  }

  const renderer = extractWebpackModules(rendererBundlePath, 500);
  const mainProcess = extractWebpackModules(mainBundlePath, 500);
  const preloadCode = fs.readFileSync(preloadBundlePath, "utf8");
  const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

  fs.mkdirSync(outputDir, { recursive: true });

  const rendererExternals = detectExternalModules(renderer.modules);
  const mainExternals = detectExternalModules(mainProcess.modules);
  const knownNames = buildKnownNames(rendererModulesToRecover, mainModulesToRecover);

  await recoverNamedModules({
    bundleName: "renderer",
    modules: renderer.modules,
    selectedModules: rendererModulesToRecover,
    knownNames,
    externals: rendererExternals,
  });

  await recoverNamedModules({
    bundleName: "main",
    modules: mainProcess.modules,
    selectedModules: mainModulesToRecover,
    knownNames,
    externals: mainExternals,
  });

  const formattedPreload = await formatCode(preloadCode, "babel");
  writeText("src/preload/preload.recovered.js", formattedPreload);

  const formattedHtml = await formatCode(indexHtml, "html");
  writeText("src/renderer/index.html", formattedHtml);

  const embeddedSources = writeEmbeddedSources(renderer.code);

  copyDirectoryIfExists(
    path.join(appDir, ".webpack", "renderer", "assets"),
    path.join("src", "renderer", "assets"),
  );
  copyDirectoryIfExists(path.join(appDir, "assets"), "assets");

  const moduleMap = {
    generatedAt: new Date().toISOString(),
    sourceBundles: {
      renderer: path.relative(rootDir, rendererBundlePath),
      main: path.relative(rootDir, mainBundlePath),
      preload: path.relative(rootDir, preloadBundlePath),
    },
    renderer: createModuleIndex(
      "renderer",
      renderer.modules,
      rendererModulesToRecover,
      knownNames,
      rendererExternals,
    ),
    main: createModuleIndex(
      "main",
      mainProcess.modules,
      mainModulesToRecover,
      knownNames,
      mainExternals,
    ),
    embeddedSources,
  };

  writeText("module-map.json", `${JSON.stringify(moduleMap, null, 2)}\n`);
  writeText(
    "README.md",
    createReadme({
      rendererRecoveredCount: Object.keys(rendererModulesToRecover).length,
      mainRecoveredCount: Object.keys(mainModulesToRecover).length,
      embeddedSourceCount: embeddedSources.length,
      rendererModuleCount: renderer.modules.size,
      mainModuleCount: mainProcess.modules.size,
    }),
  );

  console.log(`Recovered sources written to ${path.relative(rootDir, outputDir)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
