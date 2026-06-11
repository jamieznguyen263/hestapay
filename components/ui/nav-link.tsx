"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import type { NavItem } from "@/lib/navigation";

interface NavLinkProps {
  item: NavItem;
  className?: string;
}

export function NavLink({ item, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        isActive ? "text-primary" : "text-muted"
      } ${className}`}
    >
      {item.label}
    </Link>
  );
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  className?: string;
}

export function NavDropdown({ label, items, className = "" }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isDescendantActive = items.some((item) => item.href === pathname);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
          isDescendantActive ? "text-primary" : "text-muted"
        }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-border bg-background p-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-2.5 text-sm transition-colors hover:bg-surface ${
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

interface MobileNavLinkProps {
  item: NavItem;
  onClick?: () => void;
  children?: ReactNode;
}

export function MobileNavLink({ item, onClick }: MobileNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-surface ${
        isActive ? "text-primary" : "text-foreground"
      }`}
    >
      {item.label}
    </Link>
  );
}