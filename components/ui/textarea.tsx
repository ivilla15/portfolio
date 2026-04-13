import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        [
          "flex min-h-[140px] w-full rounded-[14px]",
          "bg-surface-2 px-4 py-3 text-sm text-primary shadow-soft",
          "placeholder:text-muted-custom",
          "transition-all duration-200 ease-out",
          "resize-y",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 focus-visible:shadow-medium",
          "disabled:cursor-not-allowed disabled:opacity-50",
        ].join(" "),
        className,
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
