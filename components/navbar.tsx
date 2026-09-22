"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navItems, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary transition-transform duration-200 group-hover:scale-105"
          >
            {site.monogram}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="hidden sm:inline">
              {site.shortName.toUpperCase()}
              <span className="ml-1 font-mono text-xs text-primary">&lt;/&gt;</span>
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Bhai, Yahan sab SORTED hai
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-1 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            </Button>
          </div>

          <ThemeToggle />
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border/70 bg-background/95 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto grid w-full max-w-6xl gap-1 px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}