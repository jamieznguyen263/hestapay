"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback, type ReactNode } from "react";
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

  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeMenu = useCallback(() => {
    if (pinnedRef.current) return;
    clearCloseTimer();
    setOpen(false);
  }, [clearCloseTimer]);

  const openMenu = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer]);

  const scheduleClose = useCallback(() => {
    if (pinnedRef.current) return;
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  }, [clearCloseTimer]);

  /* Click outside */
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        pinnedRef.current = false;
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  /* Escape */
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        pinnedRef.current = false;
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  /* Cleanup timer on unmount */
  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  return (
    <div
      ref={wrapperRef}
      className={`relative ${className}`}
      onPointerEnter={openMenu}
      onPointerLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={(e) => {
        const related = e.relatedTarget as Node | null;
        if (related && wrapperRef.current?.contains(related)) return;
        scheduleClose();
      }}
    >
      <button
        type="button"
        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
          isDescendantActive ? "text-primary" : "text-muted"
        }`}
        onClick={() => {
          if (pinnedRef.current) {
            pinnedRef.current = false;
            setOpen(false);
          } else {
            pinnedRef.current = true;
            clearCloseTimer();
            setOpen(true);
          }
        }}
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
        /* Transparent hover bridge: pt-2 fills the dead zone without visible gap */
        <div className="absolute left-0 top-full z-50 pt-2">
          <div className="w-56 rounded-2xl border border-border bg-background p-2 shadow-md">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  pinnedRef.current = false;
                  setOpen(false);
                }}
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