"use client";

import { getSplineConfig } from "@/lib/spline-config";
import {
  ROBOT_LOADED_EVENT,
  configureHeroSplineControls,
  registerHeroSplineCanvas,
} from "@/lib/spline-hero-utils";
import type { Application } from "@splinetool/runtime";
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";

const SPLINE_SCENE =
  process.env.NEXT_PUBLIC_SPLINE_SCENE_URL ?? "/spline/scene-clean.splinecode";

const Spline = lazy(() =>
  import("@splinetool/react-spline").then((mod) => ({ default: mod.default })),
);

export default function SplineHero() {
  const [loaded, setLoaded] = useState(false);
  const appRef = useRef<Application | null>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const unregisterCanvasRef = useRef<(() => void) | undefined>(undefined);

  const syncSpline = useCallback(() => {
    const slot = slotRef.current;
    if (!slot || !appRef.current) return;

    const height = Math.ceil(slot.getBoundingClientRect().height);
    const width = Math.ceil(
      window.visualViewport?.width ?? document.documentElement.clientWidth,
    );

    if (width > 0 && height > 0) {
      appRef.current.setSize(width, height);
    }

    const { zoom } = getSplineConfig(width);
    appRef.current.setZoom(zoom);
    configureHeroSplineControls(appRef.current);
    appRef.current.play();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    syncSpline();
    window.addEventListener("resize", syncSpline);
    window.visualViewport?.addEventListener("resize", syncSpline);
    return () => {
      window.removeEventListener("resize", syncSpline);
      window.visualViewport?.removeEventListener("resize", syncSpline);
    };
  }, [loaded, syncSpline]);

  const handleLoad = useCallback(
    (app: Application) => {
      appRef.current = app;
      app.setBackgroundColor("#060d18");
      app.play();
      configureHeroSplineControls(app);
      setLoaded(true);
      syncSpline();

      unregisterCanvasRef.current?.();
      const canvas = slotRef.current?.querySelector("canvas");
      if (canvas) unregisterCanvasRef.current = registerHeroSplineCanvas(canvas);
    },
    [syncSpline],
  );

  useEffect(() => {
    if (!loaded) return;

    const resume = () => {
      if (!document.hidden && appRef.current) {
        appRef.current.play();
        configureHeroSplineControls(appRef.current);
      }
    };

    document.addEventListener("visibilitychange", resume);
    window.addEventListener(ROBOT_LOADED_EVENT, resume);
    return () => {
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener(ROBOT_LOADED_EVENT, resume);
      unregisterCanvasRef.current?.();
    };
  }, [loaded]);

  return (
    <div
      ref={slotRef}
      className="spline-hero-slot pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div
        className="spline-scene-frame absolute overflow-hidden"
        style={{ top: "var(--spline-top)", bottom: "var(--spline-bottom)" }}
      >
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-lyniq-cyan/20 border-t-lyniq-cyan" />
            </div>
          }
        >
          <div
            className="spline-scene-inner h-full w-full transition-opacity duration-300 ease-out [&_canvas]:pointer-events-none"
            style={{ opacity: loaded ? 1 : 0 }}
          >
            <Spline
              scene={SPLINE_SCENE}
              renderOnDemand={true}
              className="pointer-events-none h-full w-full min-h-full min-w-full"
              onLoad={handleLoad}
            />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
