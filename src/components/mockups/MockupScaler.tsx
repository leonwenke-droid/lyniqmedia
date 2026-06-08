"use client";

import { useEffect, useRef, useState } from "react";

type MockupScalerProps = {
  children: React.ReactNode;
  width?: number;
  height?: number;
  background?: string;
  fit?: "contain" | "cover";
  align?: "center" | "left" | "right";
  /** Sichtbarer Bereich bei fit="cover" */
  position?: "top" | "center" | "bottom";
  /** Multipliziert die Skalierung (Füllgrad) */
  zoom?: number;
};

export function MockupScaler({
  children,
  width = 820,
  height = 512,
  background = "#0c0c0b",
  fit = "contain",
  align = "center",
  position = "center",
  zoom = 1,
}: MockupScalerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const { width: cw, height: ch } = el.getBoundingClientRect();
      if (cw <= 0 || ch <= 0) return;
      const sx = cw / width;
      const sy = ch / height;
      const base = fit === "cover" ? Math.max(sx, sy) : Math.min(sx, sy);
      setScale(base * zoom);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [width, height, fit, zoom]);

  const justifyContent =
    align === "right" ? "flex-end" : align === "left" ? "flex-start" : "center";
  const alignItems =
    position === "top"
      ? "flex-start"
      : position === "bottom"
        ? "flex-end"
        : "center";
  const originX =
    align === "right" ? "right" : align === "left" ? "left" : "center";
  const originY =
    position === "top" ? "top" : position === "bottom" ? "bottom" : "center";
  const transformOrigin = `${originX} ${originY}`;

  return (
    <div
      ref={containerRef}
      className="mockup-scaler"
      role="presentation"
      aria-hidden={true}
      style={{ background, justifyContent, alignItems }}
    >
      <div
        className="mockup-scaler__stage"
        style={{ width, height, transform: `scale(${scale})`, transformOrigin }}
      >
        {children}
      </div>
    </div>
  );
}
