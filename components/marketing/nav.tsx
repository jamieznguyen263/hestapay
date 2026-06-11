"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND, CTAS } from "@/lib/constants";
import { NAV } from "@/lib/constants";
import { getMainNavigation } from "@/lib/navigation";
import { NavDropdown, MobileNavLink } from "@/components/ui/nav-link";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navGroups = getMainNavigation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <nav className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            {BRAND.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navGroups.map((group) => (
              <NavDropdown
                key={group.label}
                label={group.label}
                items={group.items}
              />
            ))}
            {NAV.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-muted transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button variant="outline" size="base" href="/early-access">
              {CTAS.primary}
            </Button>
            <Button variant="primary" size="base" href="/book-demo">
              {CTAS.secondary}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-muted hover:text-foreground hover:bg-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-3">
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="px-3 py-2 text-sm font-medium text-muted">
                  {group.label}
                </p>
                {group.items.map((item) => (
                  <MobileNavLink
                    key={item.href}
                    item={item}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
              </div>
            ))}
            <div className="border-t border-border pt-3 space-y-1">
              {NAV.main.map((item) => (
                <MobileNavLink
                  key={item.href}
                  item={item}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </div>
            <div className="border-t border-border pt-4 flex flex-col gap-2 px-3">
              <Button
                variant="outline"
                size="base"
                href="/early-access"
                className="w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                {CTAS.primary}
              </Button>
              <Button
                variant="primary"
                size="base"
                href="/book-demo"
                className="w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                {CTAS.secondary}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}