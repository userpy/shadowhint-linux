/*
 * Recovered from main webpack module 15598.
 * Inferred module name: DeviceFingerprint.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 66573
 * - 15682
 * - 70857 (os)
 * - 84157 (electron)
 */

function DeviceFingerprintWebpackModule(e, t, n) {
  "use strict";
  var r =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.formatDeviceInfoForProto = t.collectDeviceFingerprint = void 0));
  const i = n(66573),
    o = r(n(15682)),
    s = r(n(70857)),
    a = n(84157);
  ((t.collectDeviceFingerprint = async function () {
    try {
      const e = process.platform,
        t = process.arch,
        n = Intl.DateTimeFormat().resolvedOptions().timeZone,
        r = s.default.totalmem(),
        c = await (0, i.machineId)(),
        l = await o.default.cpu(),
        u = l.brand || l.manufacturer || "Unknown",
        d = l.cores || s.default.cpus().length,
        p = a.screen.getAllDisplays(),
        f = a.screen.getPrimaryDisplay(),
        h = `${f.size.width}x${f.size.height}`,
        m = p.length,
        g = (await o.default.networkInterfaces())
          .filter((e) => e.mac && "00:00:00:00:00:00" !== e.mac)
          .map((e) => e.mac),
        S = await o.default.graphics(),
        y =
          S.controllers && S.controllers.length > 0
            ? S.controllers[0].model || "Unknown GPU"
            : "No GPU detected",
        b = (await o.default.audio()).map((e) => e.name || "Unknown Audio Device"),
        v = await o.default.diskLayout(),
        _ = v && v.length > 0 ? v[0].serialNum || "Unknown" : "No disk detected",
        T = await o.default.osInfo();
      return {
        machineId: c,
        platform: e,
        arch: t,
        osVersion: `${T.distro} ${T.release}`,
        cpuModel: u,
        cpuCores: d,
        totalMemory: r,
        screenResolution: h,
        screenCount: m,
        macAddresses: g,
        timezone: n,
        gpuInfo: y,
        audioDevices: b,
        diskSerial: _,
      };
    } catch (e) {
      return (
        console.error("Ошибка при сборе device fingerprint:", e),
        {
          machineId: await (0, i.machineId)().catch(() => "unknown"),
          platform: process.platform,
          arch: process.arch,
          osVersion: `${s.default.type()} ${s.default.release()}`,
          cpuModel: s.default.cpus()[0]?.model || "Unknown",
          cpuCores: s.default.cpus().length,
          totalMemory: s.default.totalmem(),
          screenResolution: "0x0",
          screenCount: 0,
          macAddresses: [],
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          gpuInfo: "Unknown",
          audioDevices: [],
          diskSerial: "Unknown",
        }
      );
    }
  }),
    (t.formatDeviceInfoForProto = function (e) {
      return {
        machineId: e.machineId,
        platform: e.platform,
        arch: e.arch,
        osVersion: e.osVersion,
        cpuModel: e.cpuModel,
        cpuCores: e.cpuCores,
        totalMemory: e.totalMemory,
        screenResolution: e.screenResolution,
        screenCount: e.screenCount,
        macAddresses: e.macAddresses,
        timezone: e.timezone,
        gpuInfo: e.gpuInfo,
        audioDevices: e.audioDevices,
        diskSerial: e.diskSerial,
        ipAddress: e.ipAddress || "",
      };
    }));
}

export default DeviceFingerprintWebpackModule;
