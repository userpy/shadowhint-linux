/*
 * Recovered from main webpack module 1291.
 * Inferred module name: ScreenshotCapture.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 72031
 * - 84157 (electron)
 */

function ScreenshotCaptureWebpackModule(e, t, n) {
  const r = n(72031),
    i = n(84157),
    o = r.defineIntegration(() => ({
      name: "Screenshots",
      async processEvent(e, t, n) {
        if (!n.getOptions().attachScreenshot) return e;
        if (!e.transaction && "native" !== e.platform) {
          let e = 1;
          for (const n of i.BrowserWindow.getAllWindows()) {
            t.attachments || (t.attachments = []);
            try {
              if (!n.isDestroyed() && n.isVisible()) {
                const r = 1 === e ? "screenshot.png" : `screenshot-${e}.png`,
                  i = await n.capturePage();
                (t.attachments.push({ filename: r, data: i.toPNG(), contentType: "image/png" }),
                  (e += 1));
              }
            } catch (e) {
              r.debug.error("Error capturing screenshot", e);
            }
          }
        }
        return e;
      },
    }));
  t.screenshotsIntegration = o;
}

export default ScreenshotCaptureWebpackModule;
