# Recovered ShadowHint sources

Эта папка создана скриптом `tools/recover-webpack-source.cjs` из уже собранных webpack-бандлов Electron.

## Что восстановлено

- `src/renderer/**/*.recovered.jsx` - основные React entry/page/component/service модули, разложенные по понятным именам.
- `src/main/**/*.recovered.js` - основные модули main-process Electron.
- `src/preload/preload.recovered.js` - отформатированный preload bundle с `window.api`.
- `src/renderer/styles/*.css` и `src/renderer/components/*.css` - CSS, восстановленный из embedded `sourcesContent`.
- `module-map.json` - карта всех webpack module id, зависимостей и восстановленных файлов.

## Важные ограничения

- JS/React sourcemap-файлов рядом с бандлами нет. Поэтому JS восстановлен как beautified webpack output, а не как исходный TypeScript/TSX один-в-один.
- Имена компонентов и файлов выведены по строкам, CSS-классам, импортам и поведению.
- Внутри файлов сохранена webpack-семантика: обычно `e = module`, `t = exports`, `n = __webpack_require__`.
- CSS восстановлен намного точнее, потому что его `sourcesContent` был встроен прямо в renderer bundle.

## Статистика

- Renderer modules total: 769
- Renderer modules recovered as named source files: 61
- Main modules total: 1360
- Main modules recovered as named source files: 23
- Embedded source files recovered: 28

Для повторного восстановления запусти из корня проекта:

```bash
node tools/recover-webpack-source.cjs
```

Если папка уже существует, скрипт остановится, чтобы не перезаписать ручные правки. Для пересоздания удали `src/asar/recovered-src` вручную.
