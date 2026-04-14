import Link from "next/link";

import { FluidContainer, Typography } from "@/components/ui";
import { links } from "./ContactSection";

export function Footer() {
  return (
    <footer className="pt-6">
      <FluidContainer>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
          <div className="text-center sm:text-left">
            <Typography variant="body" className="text-sm">
              © {new Date().getFullYear()} Isaiah Villalobos. All rights
              reserved.
            </Typography>

            <Typography variant="muted" className="mt-1">
              Built with Next.js, TypeScript, and a focus on clean design.
            </Typography>
          </div>

          <div className="flex items-center gap-4">
            {links.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-3 text-secondary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-4 hover:text-primary hover:shadow-medium"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </FluidContainer>
    </footer>
  );
}
