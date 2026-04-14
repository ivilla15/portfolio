import { cn } from "@/lib/utils";
import React from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "body-lg"
  | "muted"
  | "label"
  | "mono";

type Props = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
};

const variantStyles: Record<Variant, string> = {
  h1: "text-[clamp(2.75rem,6vw,5.5rem)] font-semibold tracking-[-0.03em] text-primary leading-[1.05]",
  h2: "text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.03em] text-primary leading-[1.1]",
  h3: "text-[clamp(1.375rem,2vw,1.75rem)] font-semibold text-primary",
  body: "text-base text-secondary leading-relaxed",
  "body-lg": "text-lg text-secondary leading-relaxed",
  muted: "text-sm text-muted-custom",
  label: "text-m uppercase tracking-[0.16em] font-semibold",
  mono: "font-mono text-m text-muted-custom",
};

export function Typography({
  variant = "body",
  className,
  children,
  as,
}: Props) {
  const Component =
    as ||
    (variant === "h1"
      ? "h1"
      : variant === "h2"
        ? "h2"
        : variant === "h3"
          ? "h3"
          : "p");

  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
}
