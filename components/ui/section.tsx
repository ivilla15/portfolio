import React from "react";
import { cn } from "@/lib/utils";
import { FluidContainer, Typography } from "@/components/ui";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  kicker?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  className,
  children,
  kicker,
  title,
  description,
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn("section-shell", className)}>
      <FluidContainer>
        {(kicker || title || description) && (
          <div
            className={cn(
              "mb-10 max-w-2xl",
              align === "center" && "mx-auto text-center",
            )}
          >
            {kicker && (
              <Typography variant="label" className="mb-3">
                {kicker}
              </Typography>
            )}

            {title && (
              <Typography variant="h2" className="section-heading">
                {title}
              </Typography>
            )}

            {description && (
              <Typography variant="body-lg" className="section-copy mt-4">
                {description}
              </Typography>
            )}
          </div>
        )}

        <div>{children}</div>
      </FluidContainer>
    </section>
  );
}
