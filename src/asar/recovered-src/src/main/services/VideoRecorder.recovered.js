/*
 * Recovered from main webpack module 73114.
 * Inferred module name: VideoRecorder.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 84157 (electron)
 * - 79896 (fs)
 * - 16928 (path)
 * - 35317 (child_process)
 * - 39023 (util)
 * - 79046 (ffmpeg-static)
 */

function VideoRecorderWebpackModule(e, t, n) {
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
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.VideoRecorder = void 0));
  const s = n(84157),
    a = o(n(79896)),
    c = o(n(16928)),
    l = n(35317),
    u = (0, n(39023).promisify)(l.execFile);
  t.VideoRecorder = class {
    constructor() {
      ((this.recording = !1),
        (this.windows = new Map()),
        (this.outputPath = ""),
        (this.writeStream = null),
        (this.overlayTimer = null),
        (this.previousBitmaps = new Map()),
        (this.captureCount = 0),
        (this.stopPromise = null));
    }
    async startRecording(e, t, n, r) {
      if ((this.stopPromise && (await this.stopPromise), this.recording))
        return void console.warn("[VideoRecorder] Already recording");
      this.windows = new Map(n);
      const i = r || c.join(s.app.getPath("documents"), "ShadowHint", "Recordings");
      (await a.promises.mkdir(i, { recursive: !0 }),
        (this.outputPath = c.join(i, `${e}.webm`)),
        (this.writeStream = a.createWriteStream(this.outputPath)),
        this.writeStream.on("error", (e) => {
          console.error("[VideoRecorder] WriteStream error:", e);
        }));
      const o = await s.desktopCapturer.getSources({ types: ["screen"] }),
        l = s.screen.getPrimaryDisplay(),
        u =
          o.find((e) => String(e.display_id) === String(l.id)) ||
          o.find((e) => e.id.includes(String(l.id))) ||
          o[0];
      return u
        ? ((this.recording = !0),
          t.isDestroyed() || !t.webContents || t.webContents.isDestroyed()
            ? (console.error("[VideoRecorder] Target window destroyed before start"),
              (this.recording = !1),
              void (this.writeStream && (this.writeStream.end(), (this.writeStream = null))))
            : (t.webContents.send("video-recorder:start", {
                sourceId: u.id,
                displayBounds: l.bounds,
                scaleFactor: l.scaleFactor,
                enableOverlay: "win32" === process.platform,
              }),
              void this.startOverlayLoop(t, l)))
        : (console.error("[VideoRecorder] No screen source available"),
          void (this.writeStream && (this.writeStream.end(), (this.writeStream = null))));
    }
    startOverlayLoop(e, t) {
      if ("win32" !== process.platform) return;
      ((this.captureCount = 0), this.previousBitmaps.clear());
      const n = async () => {
        if (!this.recording) return;
        this.captureCount++;
        const r = Array.from(this.windows.entries()).filter(
            ([e, t]) =>
              !(
                t.isDestroyed() ||
                !t.isVisible() ||
                t.isMinimized() ||
                !t.webContents ||
                t.webContents.isDestroyed() ||
                (!e.startsWith("suggestion") &&
                  "transcription" !== e &&
                  "main" !== e &&
                  this.captureCount % 10 != 0)
              ),
          ),
          i = await Promise.all(
            r.map(async ([e, t]) => {
              try {
                const n = await t.webContents.capturePage();
                return { name: e, win: t, image: n };
              } catch (t) {
                return (console.error(`[VideoRecorder] capturePage error for ${e}:`, t), null);
              }
            }),
          ),
          o = [];
        for (const e of i) {
          if (!e || e.image.isEmpty()) continue;
          const n = e.win.getBounds(),
            r = {
              name: e.name,
              imageData: "",
              x: n.x - t.bounds.x,
              y: n.y - t.bounds.y,
              width: n.width,
              height: n.height,
            },
            i = e.image.toBitmap(),
            s = this.previousBitmaps.get(e.name);
          ((s && s.equals(i)) ||
            ((r.imageData = e.image.toPNG().toString("base64")),
            this.previousBitmaps.set(e.name, i)),
            o.push(r));
        }
        for (const [e, n] of Array.from(this.windows.entries()))
          if (
            !n.isDestroyed() &&
            n.isVisible() &&
            !n.isMinimized() &&
            !i.some((t) => t && t.name === e)
          ) {
            const r = n.getBounds();
            o.push({
              name: e,
              imageData: "",
              x: r.x - t.bounds.x,
              y: r.y - t.bounds.y,
              width: r.width,
              height: r.height,
            });
          }
        const a = s.screen.getCursorScreenPoint(),
          c = { overlays: o, cursor: { x: a.x - t.bounds.x, y: a.y - t.bounds.y } };
        (e.isDestroyed() ||
          !e.webContents ||
          e.webContents.isDestroyed() ||
          e.webContents.send("video-recorder:overlay", c),
          this.recording && (this.overlayTimer = setTimeout(n, 150)));
      };
      n();
    }
    handleChunk(e) {
      this.writeStream && !this.writeStream.destroyed && this.writeStream.write(e);
    }
    async stopRecording(e) {
      this.stopPromise && (await this.stopPromise);
      const t = this.outputPath;
      if (((this.recording = !1), !t))
        return (
          console.warn("[VideoRecorder] stopRecording called but no outputPath"),
          this.overlayTimer && (clearTimeout(this.overlayTimer), (this.overlayTimer = null)),
          this.windows.clear(),
          this.previousBitmaps.clear(),
          { videoPath: "" }
        );
      const n = (async () => {
        (this.overlayTimer && (clearTimeout(this.overlayTimer), (this.overlayTimer = null)),
          e.isDestroyed() ||
            !e.webContents ||
            e.webContents.isDestroyed() ||
            (e.webContents.send("video-recorder:stop"),
            await new Promise((e) => {
              const t = () => {
                  (clearTimeout(n), e());
                },
                n = setTimeout(() => {
                  (s.ipcMain.removeListener("video-recorder:stopped", t), e());
                }, 2e3);
              s.ipcMain.once("video-recorder:stopped", t);
            })),
          this.writeStream &&
            !this.writeStream.destroyed &&
            (await new Promise((e) => {
              this.writeStream.end(() => e());
            })),
          (this.writeStream = null));
        try {
          await this.remuxWithFFmpeg(t);
        } catch (e) {
          console.error("[VideoRecorder] Remux failed, file still playable without seeking:", e);
        }
        return (
          this.windows.clear(),
          this.previousBitmaps.clear(),
          (this.outputPath = ""),
          { videoPath: t }
        );
      })();
      this.stopPromise = n.then(() => {}).catch(() => {});
      try {
        return await n;
      } finally {
        this.stopPromise = null;
      }
    }
    async remuxWithFFmpeg(e) {
      if (!e || "" === e.trim())
        return void console.warn("[VideoRecorder] remuxWithFFmpeg: empty input path, skipping");
      let t;
      try {
        t = n(79046);
      } catch {
        return void console.error("[VideoRecorder] ffmpeg-static module not found, skipping remux");
      }
      const r = t.replace("app.asar", "app.asar.unpacked"),
        i = e.replace(".webm", "_temp.webm");
      await a.promises.rename(e, i);
      try {
        (await u(r, ["-i", i, "-c", "copy", "-f", "webm", "-y", e], { timeout: 6e4 }),
          await a.promises.unlink(i));
      } catch (t) {
        console.error("[VideoRecorder] FFmpeg remux failed:", t);
        try {
          await a.promises.rename(i, e);
        } catch {}
      }
    }
    registerWindow(e, t) {
      this.windows.set(e, t);
    }
    unregisterWindow(e) {
      (this.windows.delete(e), this.previousBitmaps.delete(e));
    }
    forceStop() {
      ((this.recording = !1),
        this.overlayTimer && (clearTimeout(this.overlayTimer), (this.overlayTimer = null)),
        this.writeStream &&
          !this.writeStream.destroyed &&
          (this.writeStream.end(), (this.writeStream = null)),
        this.previousBitmaps.clear());
    }
  };
}

export default VideoRecorderWebpackModule;
