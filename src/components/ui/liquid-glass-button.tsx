"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { liquidGlassSurface } from "@/lib/liquid-glass";

const liquidGlassButtonVariants = cva(
  cn(
    liquidGlassSurface,
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-body text-sm font-medium text-lyniq-text",
    "transition-all duration-300 ease-out",
    "hover:border-white/30 hover:from-white/18 hover:via-white/10 hover:to-white/14 hover:text-lyniq-cyan",
    "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),inset_0_-1px_0_0_rgba(0,0,0,0.1),0_12px_40px_rgba(80,208,224,0.12)]",
    "active:scale-[0.98] active:opacity-95",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyniq-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-lyniq-bg",
    "disabled:pointer-events-none disabled:opacity-50",
  ),
  {
    variants: {
      variant: {
        default: "rounded-full",
        nav: "rounded-full uppercase tracking-[0.12em] text-[11px]",
        menu: "rounded-xl tracking-wide",
        icon: "rounded-full p-0",
        panel: "rounded-2xl",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-11 px-6 py-2.5 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidGlassButtonVariants> {
  asChild?: boolean;
}

export function LiquidGlassButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: LiquidGlassButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(liquidGlassButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { liquidGlassButtonVariants };
