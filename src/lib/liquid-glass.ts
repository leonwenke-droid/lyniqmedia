import { cn } from "@/lib/utils";

/** Shared liquid-glass surface styles for buttons and pill containers. */
export const liquidGlassSurface =
  "relative overflow-hidden border border-white/20 bg-linear-to-br from-white/14 via-white/6 to-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),inset_0_-1px_0_0_rgba(0,0,0,0.12),0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl backdrop-saturate-150 before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-b before:from-white/20 before:via-transparent before:to-transparent after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:ring-1 after:ring-white/10";

export function liquidGlassClassName(...extra: (string | undefined)[]) {
  return cn(liquidGlassSurface, "transition-all duration-300", ...extra);
}
