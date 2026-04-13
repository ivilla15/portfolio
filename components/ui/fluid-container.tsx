import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function FluidContainer({ children, className }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[72rem] px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
