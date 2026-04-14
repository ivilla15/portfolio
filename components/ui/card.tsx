import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("", {
  variants: {
    variant: {
      default: "surface-card",
      featured: "surface-card-featured",
      quiet: "surface-card-quiet",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-3 p-6 sm:p-7", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-[clamp(1.25rem,2vw,1.5rem)] font-semibold tracking-[-0.03em] text-primary",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base leading-relaxed text-secondary", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/* ------------------ NEW VARIANT SYSTEM ------------------ */

const cardContentVariants = cva("", {
  variants: {
    variant: {
      default: "px-6 pb-6 sm:px-7 sm:pb-7",
      flush: "p-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type CardContentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardContentVariants>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardContentVariants({ variant }), className)}
      {...props}
    />
  ),
);
CardContent.displayName = "CardContent";

/* ------------------------------------------------------- */

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-3 px-6 pb-6 pt-2 sm:px-7 sm:pb-7",
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
