"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button, FluidContainer } from "@/components/ui";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export function TopNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <FluidContainer className="max-w-[80rem] px-0">
        <div className="rounded-full bg-surface-2 shadow-large backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10">
          <div className="flex min-h-[4rem] items-center justify-between px-4 sm:px-5">
            <Link
              href="/"
              className="text-sm font-semibold tracking-[-0.02em] text-primary transition-colors duration-200 hover:text-[hsl(var(--text-1))]"
            >
              Isaiah Villalobos
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-3 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}

              <div className="ml-2">
                <ThemeToggle />
              </div>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />

              <Button
                variant="secondary"
                size="icon"
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {isOpen ? (
            <nav className="flex flex-col gap-1 px-3 pb-3 md:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className="rounded-2xl px-4 py-3 text-sm text-secondary transition-all duration-200 hover:bg-surface-3 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </FluidContainer>
    </header>
  );
}
