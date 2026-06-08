import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c2cb]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081428] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#00c2cb] text-[#060d18] hover:bg-[#50d0e0] shadow-[0_0_24px_rgba(0,194,203,0.15)]",
        destructive:
          "bg-red-600 text-white hover:bg-red-600/90",
        outline:
          "border border-[rgba(0,194,203,0.35)] bg-transparent text-[#f5f9ff] hover:border-[rgba(0,194,203,0.55)] hover:bg-[rgba(0,194,203,0.06)]",
        secondary:
          "bg-[#0f1d32] text-[#f5f9ff] hover:bg-[#0f1d32]/80",
        ghost: "hover:bg-[rgba(0,194,203,0.08)] text-[#f5f9ff]",
        link: "text-[#00c2cb] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-sm px-4",
        lg: "h-11 rounded-sm px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
