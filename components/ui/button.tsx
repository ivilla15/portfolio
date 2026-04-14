import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full",
    "text-sm font-medium",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.99]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-primary-foreground",
          "shadow-soft",
          "hover:-translate-y-0.5 hover:shadow-medium",
        ].join(" "),
        secondary: [
          "bg-surface-2 text-primary",
          "shadow-soft",
          "hover:bg-surface-3 hover:-translate-y-0.5 hover:shadow-medium",
        ].join(" "),
        muted: [
          "bg-surface-3 text-primary",
          "shadow-soft",
          "hover:bg-surface-4 hover:-translate-y-0.5 hover:shadow-medium",
        ].join(" "),
        ghost: [
          "bg-transparent text-secondary",
          "hover:bg-surface-2 hover:text-primary",
        ].join(" "),
      },
      size: {
        sm: "h-10 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, type = "button", ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={asChild ? undefined : type}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
