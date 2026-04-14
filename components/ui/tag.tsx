import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  [
    "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium",
    "transition-all duration-200",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-surface-2 text-primary",
          "shadow-soft",
          "hover:-translate-y-0.5 hover:shadow-medium",
        ].join(" "),
        muted: [
          "bg-surface-3 text-secondary",
          "shadow-soft",
          "hover:-translate-y-0.5 hover:bg-surface-4 hover:text-primary hover:shadow-medium",
        ].join(" "),
        subtle: ["bg-transparent text-muted-custom", "hover:text-primary"].join(
          " ",
        ),
        accent: [
          "bg-primary/10 text-primary",
          "shadow-soft",
          "hover:bg-primary/15 hover:-translate-y-0.5 hover:shadow-medium",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "muted",
    },
  },
);

type TagProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof tagVariants>;

export function Tag({ className, variant, children, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}
