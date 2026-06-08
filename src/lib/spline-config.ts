export type SplineBreakpointConfig = {
  zoom: number;
};

/** Spline-Zoom pro Viewport — Position/Tilt über CSS-Variablen in globals.css */
export function getSplineConfig(width: number): SplineBreakpointConfig {
  if (width < 480) return { zoom: 1.08 };
  if (width < 640) return { zoom: 1.15 };
  if (width < 768) return { zoom: 1.22 };
  if (width < 1024) return { zoom: 1.32 };
  if (width < 1280) return { zoom: 1.42 };
  if (width < 1536) return { zoom: 1.48 };
  return { zoom: 1.56 };
}
