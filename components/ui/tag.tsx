import React from "react";
import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        [
          "inline-flex items-center rounded-full px-3 py-1.5 text-m font-medium",
          "bg-surface-3 text-secondary shadow-soft",
          "transition-colors duration-200",
        ].join(" "),
        className,
      )}
    >
      {children}
    </span>
  );
}
