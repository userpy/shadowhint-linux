# ShadowHint

Рабочее пространство проекта десктопного приложения ShadowHint на Electron.

## Структура

- `src/asar` - пакет приложения Electron (скрипты, зависимости, конфигурация сборки).
- `src/app` - ресурсы приложения.
- `src/runtime` - локальные данные runtime и логи.

## Требования

- Node.js 18+
- npm 9+
- Linux-окружение для сборки `.deb`

## Разработка

```bash
cd src/asar
npm install
npm run dev
```

## Сборка

Запуск из корня проекта:

```bash
# Debian package (x64)
./src/build-deb.sh

# Debian package (arm64)
./src/build-deb.sh arm64
```

Либо запуск из `src/asar`:

```bash
# Windows NSIS installer
npm run build:nsis

# Debian package (x64)
npm run build:deb

# Debian package (arm64)
npm run build:deb:arm64
```

После сборки `.deb`-пакет лежит в папке:

`src/asar/build/`

При сборке через `./src/build-deb.sh` итоговый `.deb` переносится именно туда.

## Примечания

- Если сборка Linux-пакета падает из-за отсутствия системных инструментов, установите средства пакетирования вашего дистрибутива (например, `dpkg` и `fakeroot`).
- Если GUI-установщик `.deb` (например, QApt) показывает `Cannot satisfy dependencies`, установите пакет через терминал: `sudo apt install ./src/asar/build/shadowhint_0.1.127_amd64.deb`.
