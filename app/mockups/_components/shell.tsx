import type { ReactNode } from "react";

function SearchIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
function ArrowLeft() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

interface MockupShellProps {
  children: ReactNode;
  activeNav: string;
  location?: string;
  showBack?: boolean;
  backLabel?: string;
}

export default function MockupShell({
  children,
  activeNav,
  location = "Downtown",
  showBack = false,
  backLabel = "Back to Dashboard",
}: MockupShellProps) {
  const navItems = [
    { label: "Dashboard" },
    { label: "Transactions" },
    { label: "Payment Links" },
    { label: "QR Payments" },
    { label: "Staff" },
    { label: "Settings" },
  ];

  return (
    <div className="mx-auto flex h-screen max-w-[1280px] overflow-hidden bg-surface">
      {/* Sidebar */}
      <aside className="hidden w-[220px] shrink-0 border-r border-border bg-background p-4 lg:flex lg:flex-col">
        <div className="flex items-center gap-2 px-2 py-3">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm font-bold text-foreground">HestaPay</span>
        </div>
        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {navItems.map((item) => {
            const isActive = item.label === activeNav;
            return (
              <div
                key={item.label}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                <span className="flex h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                {item.label}
              </div>
            );
          })}
        </nav>
        <div className="border-t border-border pt-4">
          <div className="flex items-center gap-3 rounded-xl px-3 py-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/15 text-muted text-xs font-medium">
              {"\u2014"}
            </div>
            <div>
              <p className="text-xs font-medium text-foreground">Preview user</p>
              <p className="text-[10px] text-muted">Owner</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex flex-1 flex-col overflow-auto">
        {/* Top bar */}
        <header className="flex items-center gap-4 border-b border-border bg-background px-6 py-3">
          {showBack && (
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              <ArrowLeft />
              <span>{backLabel}</span>
            </button>
          )}
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 text-sm text-muted">
              <SearchIcon />
              <span>Search{"\u2026"}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-foreground">
              <span>{location}</span>
              <ChevronDown />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/15 text-muted text-xs font-medium">
              {"\u2014"}
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}