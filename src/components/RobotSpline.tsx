"use client";

import {
  ROBOT_LOADED_EVENT,
  dispatchCanvasPointer,
} from "@/lib/spline-hero-utils";
import type { Application } from "@splinetool/runtime";
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";

const Spline = lazy(() =>
  import("@splinetool/react-spline").then((mod) => ({ default: mod.default })),
);

const ROBOT_SCENE = "/spline/scene-robot-clean.splinecode";

function disableSplineControls(app: Application) {
  const controls = app.controls as { enabled?: boolean } | undefined;
  if (controls) controls.enabled = false;
}

export default function RobotSpline() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const forwardingRef = useRef(false);
  const [loaded, setLoaded] = useState(false);

  const syncSpline = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !appRef.current) return;

    const { width, height } = wrapper.getBoundingClientRect();
    const w = Math.ceil(width);
    const h = Math.ceil(height);

    if (w > 0 && h > 0) {
      appRef.current.setSize(w, h);
    }

    const zoom = w < 768 ? 1.02 : w < 1280 ? 0.9 : 0.84;
    appRef.current.setZoom(zoom);
    disableSplineControls(appRef.current);
  }, []);

  const handleLoad = useCallback(
    (app: Application) => {
      appRef.current = app;
      app.play();
      disableSplineControls(app);
      setLoaded(true);
      syncSpline();

      window.dispatchEvent(new CustomEvent(ROBOT_LOADED_EVENT));
    },
    [syncSpline],
  );

  useEffect(() => {
    if (!loaded) return;

    syncSpline();
    window.addEventListener("resize", syncSpline);
    window.visualViewport?.addEventListener("resize", syncSpline);

    const wrapper = wrapperRef.current;
    const resizeObserver =
      wrapper && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(syncSpline)
        : null;
    if (wrapper && resizeObserver) resizeObserver.observe(wrapper);

    return () => {
      window.removeEventListener("resize", syncSpline);
      window.visualViewport?.removeEventListener("resize", syncSpline);
      resizeObserver?.disconnect();
    };
  }, [loaded, syncSpline]);

  /* Cursor → Roboter-Kopf (eigener Listener, unabhängig vom Scroll-Transform) */
  useEffect(() => {
    if (!loaded) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let canvas: HTMLCanvasElement | null = null;

    const forward = (e: PointerEvent) => {
      if (forwardingRef.current || !e.isTrusted) return;

      if (!canvas) {
        canvas = wrapper.querySelector("canvas");
        if (!canvas) return;
      }

      forwardingRef.current = true;
      try {
        dispatchCanvasPointer(canvas, e);
      } finally {
        forwardingRef.current = false;
      }
    };

    window.addEventListener("pointermove", forward, { passive: true });
    return () => window.removeEventListener("pointermove", forward);
  }, [loaded]);

  return (
    <div
      ref={wrapperRef}
      className={`robot-spline-slot pointer-events-none absolute bottom-0 left-1/2 z-[3] h-full w-full -translate-x-1/2 transition-opacity duration-150 ease-out [&_canvas]:pointer-events-none ${loaded ? "opacity-100" : "opacity-0"}`}
      aria-hidden="true"
    >
      <Suspense fallback={<div className="absolute inset-0 bg-transparent" />}>
        <Spline
          scene={ROBOT_SCENE}
          renderOnDemand={true}
          className="pointer-events-none h-full w-full"
          onLoad={handleLoad}
        />
      </Suspense>
    </div>
  );
}
