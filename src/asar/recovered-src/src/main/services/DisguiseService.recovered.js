/*
 * Recovered from main webpack module 38741.
 * Inferred module name: DisguiseService.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - none detected
 */

function DisguiseServiceWebpackModule(__unused_webpack_module, exports, __webpack_require__) {
  "use strict";
  var __createBinding =
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
    __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    __importStar =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(e, n) &&
              __createBinding(t, e, n);
        return (__setModuleDefault(t, e), t);
      };
  (Object.defineProperty(exports, "__esModule", { value: !0 }),
    (exports.getPresetById =
      exports.getPresets =
      exports.checkAndReapplyAfterUpdate =
      exports.restoreOriginal =
      exports.applyDisguise =
      exports.sanitizeExeName =
        void 0));
  const electron_1 = __webpack_require__(84157),
    child_process_1 = __webpack_require__(35317),
    util_1 = __webpack_require__(39023),
    fs = __importStar(__webpack_require__(79896)),
    path = __importStar(__webpack_require__(16928)),
    execFileAsync = (0, util_1.promisify)(child_process_1.execFile);
  function sleep(e) {
    return new Promise((t) => setTimeout(t, e));
  }
  async function retryFileOp(e, t = 4, n = 500) {
    for (let r = 0; r <= t; r++)
      try {
        return void e();
      } catch (e) {
        if (("EPERM" !== e.code && "EBUSY" !== e.code) || !(r < t)) throw e;
        (console.warn(`[Disguise] File op failed (${e.code}), retry ${r + 1}/${t}...`),
          await sleep(n));
      }
  }
  function sanitizeExeName(e) {
    return (
      e
        .replace(/[^a-zA-Z0-9_\-\s]/g, "")
        .replace(/\s+/g, "_")
        .substring(0, 50) || "custom"
    );
  }
  exports.sanitizeExeName = sanitizeExeName;
  const PRESETS = [
    { id: "default", name: "ShadowHint", company: "ShadowHint Inc.", iconName: "" },
    {
      id: "chrome",
      name: "Chrome Update Helper",
      company: "Google LLC",
      iconName: "chrome.ico",
      exeName: "chrome_helper.exe",
    },
    {
      id: "edge",
      name: "Microsoft Edge WebView",
      company: "Microsoft Corporation",
      iconName: "edge.ico",
      exeName: "msedge_service.exe",
    },
    {
      id: "defender",
      name: "Windows Security Service",
      company: "Microsoft Corporation",
      iconName: "defender.ico",
      exeName: "SecurityHealthService.exe",
    },
    {
      id: "system",
      name: "System Audio Service",
      company: "Microsoft Windows",
      iconName: "system.ico",
      exeName: "AudioSrv.exe",
    },
    {
      id: "runtime",
      name: "Runtime Broker",
      company: "Microsoft Corporation",
      iconName: "agent.ico",
      exeName: "RuntimeBroker.exe",
    },
  ];
  function getIconPath(e) {
    const t = path.join(electron_1.app.getPath("userData"), "disguise", e);
    return fs.existsSync(t)
      ? t
      : electron_1.app.isPackaged
        ? path.join(process.resourcesPath, "disguise", e)
        : path.join(electron_1.app.getAppPath(), "..", "..", "assets", "disguise", e);
  }
  function getRceditPath() {
    const e = "ia32" === process.arch ? "rcedit.exe" : "rcedit-x64.exe";
    return electron_1.app.isPackaged
      ? path.join(process.resourcesPath, e)
      : path.join(electron_1.app.getAppPath(), "..", "..", "node_modules", "rcedit", "bin", e);
  }
  async function applyDisguise(preset) {
    const rceditPath = getRceditPath();
    if (!fs.existsSync(rceditPath)) throw new Error(`rcedit binary not found at: ${rceditPath}`);
    const exePath = electron_1.app.getPath("exe"),
      dir = path.dirname(exePath),
      backupPath = path.join(dir, "app_backup.exe"),
      tempPath = path.join(dir, "app_patched.exe");
    fs.copyFileSync(exePath, tempPath);
    try {
      const e = [tempPath];
      if (
        (e.push("--set-version-string", "FileDescription", preset.name),
        e.push("--set-version-string", "CompanyName", preset.company),
        e.push("--set-version-string", "ProductName", preset.name),
        preset.iconName)
      ) {
        const t = getIconPath(preset.iconName);
        fs.existsSync(t) && e.push("--set-icon", t);
      }
      try {
        const { stdout: t, stderr: n } = await execFileAsync(rceditPath, e);
        (n && console.error("[Disguise] rcedit stderr:", n),
          t && console.log("[Disguise] rcedit stdout:", t.trim()));
      } catch (e) {
        throw (console.error("[Disguise] rcedit failed:", e), e);
      }
      try {
        const { stdout: e } = await execFileAsync(rceditPath, [
          tempPath,
          "--get-version-string",
          "FileDescription",
        ]);
        console.log("[Disguise] FileDescription after rcedit:", e.trim());
      } catch {
        console.warn("[Disguise] Could not verify FileDescription (non-critical)");
      }
    } catch (e) {
      try {
        fs.existsSync(tempPath) && fs.unlinkSync(tempPath);
      } catch {}
      throw e;
    }
    let actualBackupPath = backupPath;
    if (fs.existsSync(backupPath))
      try {
        await retryFileOp(() => fs.unlinkSync(backupPath));
      } catch (e) {
        if ("EPERM" !== e.code && "EBUSY" !== e.code) throw e;
        ((actualBackupPath = path.join(dir, `app_backup_${Date.now()}.exe`)),
          console.warn(`[Disguise] Cannot remove locked backup, using: ${actualBackupPath}`));
      }
    await retryFileOp(() => fs.renameSync(exePath, actualBackupPath));
    const targetExeName = preset.exeName || path.basename(exePath),
      newExePath = path.join(dir, targetExeName);
    if (newExePath !== exePath && fs.existsSync(newExePath)) {
      const e = path.join(dir, `app_old_leftover_${Date.now()}.exe`);
      (await retryFileOp(() => fs.renameSync(newExePath, e)),
        console.log("[Disguise] Renamed leftover exe to:", e));
    }
    try {
      await retryFileOp(() => fs.renameSync(tempPath, newExePath));
    } finally {
      try {
        fs.existsSync(tempPath) && fs.unlinkSync(tempPath);
      } catch {}
    }
    try {
      const e = path.join("MISSING_ENV_VAR".LOCALAPPDATA || "", "IconCache.db");
      e &&
        fs.existsSync(e) &&
        (fs.unlinkSync(e), console.log("[Disguise] Deleted legacy IconCache.db"));
    } catch (e) {
      console.warn("[Disguise] Failed to delete legacy IconCache.db:", e);
    }
    try {
      const e = path.join("MISSING_ENV_VAR".LOCALAPPDATA || "", "Microsoft", "Windows", "Explorer");
      if (fs.existsSync(e)) {
        const t = fs
          .readdirSync(e)
          .filter(
            (e) => e.toLowerCase().startsWith("iconcache_") && e.toLowerCase().endsWith(".db"),
          );
        for (const n of t)
          try {
            (fs.unlinkSync(path.join(e, n)), console.log(`[Disguise] Deleted icon cache: ${n}`));
          } catch (e) {
            console.warn(`[Disguise] Failed to delete ${n}:`, e);
          }
      }
    } catch (e) {
      console.warn("[Disguise] Failed to clean Explorer icon cache:", e);
    }
    try {
      const nativeRequire = eval("require"),
        koffi = nativeRequire(
          electron_1.app.isPackaged ? path.join(process.resourcesPath, "koffi") : "koffi",
        ),
        shell32 = koffi.load("shell32.dll"),
        SHChangeNotify = shell32.func(
          "void SHChangeNotify(int wEventId, uint uFlags, void* dwItem1, void* dwItem2)",
        ),
        SHCNE_ASSOCCHANGED = 134217728,
        SHCNF_IDLIST = 0;
      (SHChangeNotify(SHCNE_ASSOCCHANGED, SHCNF_IDLIST, null, null),
        console.log("[Disguise] SHChangeNotify called successfully"));
    } catch (e) {
      console.warn("[Disguise] SHChangeNotify failed (non-critical):", e);
    }
    try {
      const { stdout: e, stderr: t } = await execFileAsync("ie4uinit.exe", ["-show"]);
      (e && console.log("[Disguise] ie4uinit stdout:", e.trim()),
        t && console.warn("[Disguise] ie4uinit stderr:", t.trim()));
    } catch (e) {
      console.warn("[Disguise] ie4uinit.exe failed:", e);
    }
    await sleep(500);
    try {
      fs.existsSync(tempPath) && fs.unlinkSync(tempPath);
    } catch (e) {
      console.warn("[Disguise] Failed to clean up temp file:", e);
    }
    return { newExePath, originalExePath: exePath };
  }
  async function restoreOriginal(e) {
    const t = electron_1.app.getPath("exe"),
      n = path.dirname(t),
      r = path.join(n, "app_backup.exe");
    if (!fs.existsSync(r)) {
      try {
        const r = fs
          .readdirSync(n)
          .filter((e) => e.startsWith("app_backup") && e.endsWith(".exe") && "app_backup.exe" !== e)
          .map((e) => ({ name: e, mtime: fs.statSync(path.join(n, e)).mtimeMs }))
          .sort((e, t) => t.mtime - e.mtime);
        if (r.length > 0) {
          const i = path.join(n, r[0].name);
          console.log(`[Disguise] Using fallback backup: ${i}`);
          const o = e || t;
          if (fs.existsSync(t)) {
            const e = path.join(n, `app_old_${Date.now()}.exe`);
            (await retryFileOp(() => fs.renameSync(t, e)),
              console.log("[Disguise] Renamed running exe to:", e));
          }
          if (o !== t && fs.existsSync(o)) {
            const e = path.join(n, `app_old_target_${Date.now()}.exe`);
            (await retryFileOp(() => fs.renameSync(o, e)),
              console.log("[Disguise] Renamed old target to:", e));
          }
          return (
            await retryFileOp(() => fs.renameSync(i, o)),
            console.log("[Disguise] Restored fallback backup to:", o),
            o
          );
        }
      } catch (e) {
        console.warn("[Disguise] Fallback backup search failed:", e);
      }
      return (console.log("[Disguise] No backup found, nothing to restore"), t);
    }
    const i = e || t;
    if (fs.existsSync(t)) {
      const e = path.join(n, `app_old_${Date.now()}.exe`);
      (await retryFileOp(() => fs.renameSync(t, e)),
        console.log("[Disguise] Renamed running exe to:", e));
    }
    if (i !== t && fs.existsSync(i)) {
      const e = path.join(n, `app_old_target_${Date.now()}.exe`);
      (await retryFileOp(() => fs.renameSync(i, e)),
        console.log("[Disguise] Renamed old target to:", e));
    }
    return (
      await retryFileOp(() => fs.renameSync(r, i)),
      console.log("[Disguise] Restored backup to:", i),
      i
    );
  }
  async function checkAndReapplyAfterUpdate(e, t, n) {
    if ("win32" !== process.platform) return null;
    if (!e || "default" === e) return null;
    let r;
    if (
      ((r =
        "custom" === e && n
          ? {
              id: "custom",
              name: n.name,
              company: n.company,
              iconName: "",
              exeName: sanitizeExeName(n.name) + ".exe",
            }
          : PRESETS.find((t) => t.id === e)),
      !r)
    )
      return null;
    const i = electron_1.app.getVersion(),
      o = path.basename(process.execPath),
      s = r.exeName || "shadowhint.exe";
    if (t === i && o === s) return null;
    try {
      return await applyDisguise(r);
    } catch (e) {
      return (console.error("[processDisguise] Failed to re-apply after update:", e), null);
    }
  }
  function getPresets() {
    return PRESETS;
  }
  function getPresetById(e) {
    return PRESETS.find((t) => t.id === e);
  }
  ((exports.applyDisguise = applyDisguise),
    (exports.restoreOriginal = restoreOriginal),
    (exports.checkAndReapplyAfterUpdate = checkAndReapplyAfterUpdate),
    (exports.getPresets = getPresets),
    (exports.getPresetById = getPresetById));
}

export default DisguiseServiceWebpackModule;
