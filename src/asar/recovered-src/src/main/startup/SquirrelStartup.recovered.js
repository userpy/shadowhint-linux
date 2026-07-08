/*
 * Recovered from main webpack module 11544.
 * Inferred module name: SquirrelStartup.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 16928 (path)
 * - 35317 (child_process)
 * - 77134
 * - 84157 (electron)
 */

function SquirrelStartupWebpackModule(e, t, n) {
  var r = n(16928),
    i = n(35317).spawn,
    o = n(77134)("electron-squirrel-startup"),
    s = n(84157).app,
    a = function (e, t) {
      var n = r.resolve(r.dirname(process.execPath), "..", "Update.exe");
      (o("Spawning `%s` with args `%s`", n, e), i(n, e, { detached: !0 }).on("close", t));
    };
  e.exports = (function () {
    if ("win32" === process.platform) {
      var e = process.argv[1];
      o("processing squirrel command `%s`", e);
      var t = r.basename(process.execPath);
      if ("--squirrel-install" === e || "--squirrel-updated" === e)
        return (a(["--createShortcut=" + t], s.quit), !0);
      if ("--squirrel-uninstall" === e) return (a(["--removeShortcut=" + t], s.quit), !0);
      if ("--squirrel-obsolete" === e) return (s.quit(), !0);
    }
    return !1;
  })();
}

export default SquirrelStartupWebpackModule;
