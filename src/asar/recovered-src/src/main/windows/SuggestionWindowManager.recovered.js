/*
 * Recovered from main webpack module 88251.
 * Inferred module name: SuggestionWindowManager.
 *
 * This is beautified webpack output, not the original TypeScript/TSX source.
 * In most modules webpack parameters are: e = module, t = exports, n = __webpack_require__.
 *
 * Detected dependencies:
 * - 84157 (electron)
 */

function SuggestionWindowManagerWebpackModule(e, t, n) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }), (t.SuggestionWindowManager = void 0));
  const r = n(84157);
  t.SuggestionWindowManager = class {
    constructor(e) {
      ((this.windows = []),
        (this.primaryWindow = null),
        (this.currentWidth = null),
        (this.currentHeight = null),
        (this.pendingReposition = null),
        (this.pendingBounds = null),
        (this.lastAppliedPosition = null),
        (this.attachedMainWindowId = null),
        (this.activeAnimations = new Map()),
        (this.handleDisplayMetricsChanged = () => {
          this.scheduleUpdate(void 0, { animate: !1 });
        }),
        (this.verticalGap = e.verticalGap),
        (this.animationDuration = e.animationDuration ?? 220),
        (this.getMainWindow = e.getMainWindow),
        (this.onWindowsChanged = e.onWindowsChanged),
        (this.positionResolver = e.positionResolver),
        (this.fixedSize = e.fixedSize),
        (this.allowWorkAreaOverflow = !!e.allowWorkAreaOverflow),
        r.screen.on("display-added", this.handleDisplayMetricsChanged),
        r.screen.on("display-removed", this.handleDisplayMetricsChanged),
        r.screen.on("display-metrics-changed", this.handleDisplayMetricsChanged));
    }
    attachMainWindow(e) {
      if (!e || e.isDestroyed()) return;
      if (this.attachedMainWindowId === e.id) return;
      const t = (e, t = {}) => this.scheduleUpdate(e, { animate: !0, ...t });
      (e.on("move", () => t()),
        e.on("resize", () => t()),
        "darwin" === process.platform &&
          e.on("will-move", (e, n) => t(n, { immediate: !0, animate: !1 })),
        e.on("closed", () => {
          this.attachedMainWindowId = null;
        }),
        (this.attachedMainWindowId = e.id));
    }
    registerWindow(e) {
      e &&
        !e.isDestroyed() &&
        (this.cleanupDestroyedWindows(),
        this.addWindowIfNeeded(e),
        (this.primaryWindow = e),
        this.invalidatePositionCache(),
        this.notifyWindowsChanged(),
        this.scheduleUpdate(void 0, { immediate: !0, animate: !1 }));
    }
    setPrimaryWindow(e, t = {}) {
      e &&
        !e.isDestroyed() &&
        (this.cleanupDestroyedWindows(),
        this.addWindowIfNeeded(e),
        (this.primaryWindow = e),
        t.reposition &&
          (this.invalidatePositionCache(),
          this.scheduleUpdate(void 0, { immediate: !0, animate: t.animate })));
    }
    unregisterWindow(e) {
      const t = this.windows.length;
      ((this.windows = this.windows.filter((t) => t.window !== e && !t.window.isDestroyed())),
        (this.primaryWindow === e || (this.primaryWindow && this.primaryWindow.isDestroyed())) &&
          (this.primaryWindow = this.windows.length > 0 ? this.windows[0].window : null),
        this.invalidatePositionCache(),
        t !== this.windows.length && this.notifyWindowsChanged());
    }
    getPrimaryWindow() {
      return (
        this.cleanupDestroyedWindows(),
        (this.primaryWindow && !this.primaryWindow.isDestroyed()) ||
          (this.primaryWindow = this.windows.length > 0 ? this.windows[0].window : null),
        this.primaryWindow && !this.primaryWindow.isDestroyed() ? this.primaryWindow : null
      );
    }
    focusPrimaryWindow() {
      const e = this.getPrimaryWindow();
      if (e && !e.isVisible()) {
        try {
          e.showInactive?.();
        } catch {}
        try {
          e.show();
        } catch {}
      }
    }
    scheduleUpdate(e, t = {}) {
      t.immediate
        ? this.updatePositions(e, t)
        : ((this.pendingBounds = e ?? null),
          this.pendingReposition ||
            (this.pendingReposition = setTimeout(() => {
              this.pendingReposition = null;
              const e = this.pendingBounds ?? void 0;
              ((this.pendingBounds = null), this.updatePositions(e, t));
            }, 16)));
    }
    updatePositions(e, t = {}) {
      const n = this.getMainWindow();
      if (!n || n.isDestroyed()) return;
      if ((this.cleanupDestroyedWindows(), 0 === this.windows.length))
        return ((this.lastAppliedPosition = null), void this.notifyWindowsChanged());
      const i = this.getPrimaryWindow();
      if (!i) return;
      const o = n.getBounds(),
        s = e ? { ...o, ...e } : o,
        a = r.screen.getDisplayMatching(s),
        { x: c, y: l, width: u, height: d } = a.workArea,
        p = a.scaleFactor ?? 1,
        f = (e) => Math.floor(e * p) / p;
      let h = i.getBounds();
      const m = this.currentWidth ?? (this.fixedSize?.width ? f(this.fixedSize.width) : void 0);
      if (this.fixedSize || null !== this.currentWidth) {
        const e = m,
          t =
            "number" == typeof this.fixedSize?.height
              ? f(this.fixedSize.height)
              : null !== this.currentHeight
                ? this.currentHeight
                : void 0;
        ((void 0 !== e && h.width !== e) || (void 0 !== t && h.height !== t)) &&
          (i.setBounds({ x: h.x, y: h.y, width: e ?? h.width, height: t ?? h.height }, !1),
          (h = i.getBounds()));
      }
      const g = h.width,
        S = h.height;
      let y = Math.round(s.x + (s.width - g) / 2),
        b = Math.round(s.y + s.height + this.verticalGap);
      if (!this.allowWorkAreaOverflow) {
        const e = c + u - g;
        (e < c ? (y = c) : (y < c && (y = c), y > e && (y = e)),
          (l + d - S < l || b < l) && (b = l));
      }
      if (this.positionResolver) {
        const e = this.positionResolver({
          mainBounds: s,
          windowBounds: h,
          workArea: { x: c, y: l, width: u, height: d },
        });
        e && ((y = e.x), (b = e.y));
      }
      (!this.lastAppliedPosition ||
        this.lastAppliedPosition.x !== y ||
        this.lastAppliedPosition.y !== b) &&
        (this.applyPosition(i, { x: y, y: b }, t),
        (this.lastAppliedPosition = { x: y, y: b }),
        (this.windows = this.windows.map((e) =>
          e.window.id === i.id ? { window: e.window, position: { x: y, y: b } } : e,
        )),
        this.notifyWindowsChanged());
    }
    invalidatePositionCache() {
      this.lastAppliedPosition = null;
    }
    closeAll() {
      [...this.windows].forEach(({ window: e }) => {
        e && !e.isDestroyed() && e.close();
      });
    }
    forEachWindow(e) {
      this.cleanupDestroyedWindows();
      for (const { window: t } of this.windows) t.isDestroyed() || e(t);
    }
    getWindowsSnapshot() {
      return (
        this.cleanupDestroyedWindows(),
        this.windows.map((e) => ({ window: e.window, position: { ...e.position } }))
      );
    }
    cleanupDestroyedWindows() {
      const e = this.windows.length;
      ((this.windows = this.windows.filter((e) => e.window && !e.window.isDestroyed())),
        this.primaryWindow && this.primaryWindow.isDestroyed() && (this.primaryWindow = null),
        !this.primaryWindow &&
          this.windows.length > 0 &&
          (this.primaryWindow = this.windows[0].window),
        e !== this.windows.length && this.notifyWindowsChanged());
    }
    applyPosition(e, t, n) {
      const r = Math.trunc(t.x),
        i = Math.trunc(t.y);
      if (n.animate) this.animateWindow(e, { x: r, y: i });
      else if (!e.isDestroyed())
        try {
          e.setPosition(r, i);
        } catch (e) {
          console.warn("[SuggestionWindowManager] Failed to setPosition (non-animated):", {
            x: r,
            y: i,
            err: e,
          });
        }
    }
    animateWindow(e, t) {
      if (!e || e.isDestroyed()) return;
      const n = e.id,
        r = this.activeAnimations.get(n);
      r && (clearTimeout(r), this.activeAnimations.delete(n));
      const i = e.getBounds(),
        o = Date.now(),
        s = this.animationDuration,
        a = () => {
          if (!e || e.isDestroyed()) return void this.activeAnimations.delete(n);
          const r = Math.min(1, (Date.now() - o) / s),
            c = 1 - Math.pow(1 - r, 3),
            l = Math.round(i.x + (t.x - i.x) * c),
            u = Math.round(i.y + (t.y - i.y) * c);
          if (!Number.isFinite(l) || !Number.isFinite(u))
            return (
              console.warn(
                "[SuggestionWindowManager] Пропускаем анимацию: некорректные координаты",
                { start: i, target: t, nextX: l, nextY: u, eased: c },
              ),
              void this.activeAnimations.delete(n)
            );
          try {
            e.setPosition(Math.trunc(l), Math.trunc(u));
          } catch (e) {
            return (
              console.warn(
                "[SuggestionWindowManager] setPosition threw during animation, stopping animation",
                { nextX: l, nextY: u, err: e },
              ),
              void this.activeAnimations.delete(n)
            );
          }
          if (r < 1) {
            const e = setTimeout(a, 8);
            this.activeAnimations.set(n, e);
          } else this.activeAnimations.delete(n);
        };
      a();
    }
    notifyWindowsChanged() {
      this.onWindowsChanged?.(this.getWindowsSnapshot());
    }
    addWindowIfNeeded(e) {
      if (!this.windows.find((t) => t.window.id === e.id)) {
        const [t, n] = e.getPosition();
        (this.windows.push({ window: e, position: { x: t, y: n } }),
          e.on("closed", () => this.unregisterWindow(e)));
      }
    }
    setWindowWidth(e) {
      console.log("[SuggestionWindowManager] setWindowWidth called with:", e);
      const t = Math.max(360, Math.min(2400, Math.round(e)));
      (console.log("[SuggestionWindowManager] Clamped width:", t),
        (this.currentWidth = t),
        this.cleanupDestroyedWindows());
      const n = this.windows.length;
      (console.log("[SuggestionWindowManager] Number of windows:", n),
        this.forEachWindow((e) => {
          if (!e.isDestroyed()) {
            const n = e.getBounds();
            console.log("[SuggestionWindowManager] Current bounds:", n);
            try {
              e.setBounds({ x: n.x, y: n.y, width: t, height: this.currentHeight ?? n.height }, !1);
              const r = e.getBounds();
              (console.log("[SuggestionWindowManager] New bounds after setBounds:", r),
                e.webContents.send("suggestion:width-changed", t));
            } catch (e) {
              console.warn("[SuggestionWindowManager] Failed to set window width:", e);
            }
          }
        }),
        this.scheduleUpdate(void 0, { immediate: !0, animate: !1 }));
    }
    getWindowWidth() {
      return this.currentWidth;
    }
    setWindowHeight(e) {
      console.log("[SuggestionWindowManager] setWindowHeight called with:", e);
      const t = Math.max(200, Math.min(900, Math.round(e)));
      (console.log("[SuggestionWindowManager] Clamped height:", t),
        (this.currentHeight = t),
        this.cleanupDestroyedWindows(),
        this.forEachWindow((e) => {
          if (!e.isDestroyed()) {
            const n = e.getBounds();
            try {
              (e.setBounds({ x: n.x, y: n.y, width: this.currentWidth ?? n.width, height: t }, !1),
                e.webContents.send("suggestion:height-changed", t));
            } catch (e) {
              console.warn("[SuggestionWindowManager] Failed to set window height:", e);
            }
          }
        }),
        this.scheduleUpdate(void 0, { immediate: !0, animate: !1 }));
    }
    getWindowHeight() {
      return this.currentHeight;
    }
    setTrackedWidth(e) {
      this.currentWidth = e;
    }
    setTrackedHeight(e) {
      this.currentHeight = e;
    }
  };
}

export default SuggestionWindowManagerWebpackModule;
