"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", number: "01" },
    { name: "About", href: "#about", number: "02" },
    { name: "Projects", href: "#projects", number: "03" },
    { name: "Experience", href: "#experience", number: "04" },
    { name: "Contact", href: "#contact", number: "05" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold gradient-cta-text">
              ivilla.dev
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href} // ← add a stable key
                  href={item.href}
                  className="group flex items-center space-x-2 text-base hover:gradient-cta-text font-medium transition-colors duration-300
                   dark:text-base"
                >
                  <span className="section-number">{item.number}</span>
                  <span className="text-sm">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5 " />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/50">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center space-x-2 gradient-cta-text font-semibold hover:text-muted-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="section-number">{item.number}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
