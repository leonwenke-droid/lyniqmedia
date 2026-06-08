type SplineControls = {
  enabled?: boolean;
  enableRotate?: boolean;
  enablePan?: boolean;
  enableZoom?: boolean;
  autoRotate?: boolean;
};

/** Nur Drag/Pan/Zoom sperren — hoverRotate der Szene bleibt aktiv. */
export function configureHeroSplineControls(app: { controls?: unknown }) {
  const controls = app.controls as SplineControls | undefined;
  if (!controls) return;
  controls.enabled = true;
  controls.enableRotate = false;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = false;
}

export function dispatchCanvasPointer(
  canvas: HTMLCanvasElement,
  source: PointerEvent,
) {
  const rect = canvas.getBoundingClientRect();
  const event = new PointerEvent("pointermove", {
    clientX: source.clientX,
    clientY: source.clientY,
    bubbles: false,
    cancelable: true,
    pointerType: source.pointerType || "mouse",
    pointerId: source.pointerId,
    view: window,
  });

  Object.defineProperty(event, "offsetX", {
    value: source.clientX - rect.left,
  });
  Object.defineProperty(event, "offsetY", {
    value: source.clientY - rect.top,
  });

  canvas.dispatchEvent(event);
}

const heroCanvasRef: { current: HTMLCanvasElement | null } = { current: null };
const robotCanvasRef: { current: HTMLCanvasElement | null } = { current: null };
let listening = false;
let forwarding = false;

function ensurePointerBridge() {
  if (listening || typeof window === "undefined") return;
  listening = true;

  window.addEventListener(
    "pointermove",
    (e) => {
      if (forwarding || !e.isTrusted) return;
      forwarding = true;
      try {
        if (heroCanvasRef.current) {
          dispatchCanvasPointer(heroCanvasRef.current, e);
        }
        if (robotCanvasRef.current) {
          dispatchCanvasPointer(robotCanvasRef.current, e);
        }
      } finally {
        forwarding = false;
      }
    },
    { passive: true },
  );
}

export function registerHeroSplineCanvas(canvas: HTMLCanvasElement) {
  ensurePointerBridge();
  heroCanvasRef.current = canvas;
  return () => {
    if (heroCanvasRef.current === canvas) heroCanvasRef.current = null;
  };
}

export function registerRobotSplineCanvas(canvas: HTMLCanvasElement) {
  ensurePointerBridge();
  robotCanvasRef.current = canvas;
  return () => {
    if (robotCanvasRef.current === canvas) robotCanvasRef.current = null;
  };
}

export const ROBOT_LOADED_EVENT = "spline:robot-loaded";
