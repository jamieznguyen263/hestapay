import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Staff Tips & Shift Summary Mockup",
};

/* ---------- Icon components ---------- */
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
function ClockIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function TipIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function CheckCircleIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function CardIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );
}
function QRSmallIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
    </svg>
  );
}
function LinkSmallIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

const shiftSummary = [
  { label: "Shift earnings", value: "\u2014" },
  { label: "Tips earned", value: "\u2014" },
  { label: "Transactions", value: "\u2014" },
];

const tipsBreakdown = [
  { label: "Card tips", value: "\u2014", qualifier: "Primary", icon: CardIcon },
  { label: "QR tips", value: "\u2014", qualifier: "Secondary", icon: QRSmallIcon },
  { label: "Link tips", value: "\u2014", qualifier: "Light", icon: LinkSmallIcon },
];

const paymentMix = [
  { label: "Card", level: 3 },
  { label: "QR", level: 2 },
  { label: "Link", level: 1 },
];

const activityFeed = [
  { time: "\u2014", action: "Payment received", type: "Card", amount: "\u2014", tip: "\u2014" },
  { time: "Earlier", action: "Payment received", type: "QR", amount: "\u2014", tip: "\u2014" },
  { time: "Earlier", action: "Payment received", type: "Link", amount: "\u2014", tip: "\u2014" },
  { time: "Recent", action: "Payment received", type: "Card", amount: "\u2014", tip: "\u2014" },
  { time: "Start", action: "Shift started", type: null, amount: null, tip: null },
];

export default function StaffTipsShiftSummaryPage() {
  return (
    <div className="mx-auto flex h-screen max-w-[1280px] overflow-hidden bg-surface">
      {/* Sidebar */}
      <aside className="hidden w-[220px] shrink-0 border-r border-border bg-background p-4 lg:flex lg:flex-col">
        <div className="flex items-center gap-2 px-2 py-3">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm font-bold text-foreground">HestaPay</span>
        </div>
        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {[
            { label: "Dashboard" },
            { label: "Transactions" },
            { label: "Payment Links" },
            { label: "QR Payments" },
            { label: "Staff", active: true },
            { label: "Settings" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:bg-surface hover:text-foreground"
              }`}
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-current opacity-60" />
              {item.label}
            </div>
          ))}
        </nav>
        <div className="border-t border-border pt-4">
          <div className="flex items-center gap-3 rounded-xl px-3 py-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted/15 text-muted text-xs font-medium">
              {"\u2014"}
            </div>
            <div>
              <p className="text-xs font-medium text-foreground">Preview staff</p>
              <p className="text-[10px] text-muted">Server</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex flex-1 flex-col overflow-auto">
        {/* Top bar */}
        <header className="flex items-center gap-4 border-b border-border bg-background px-6 py-3">
          <button
            type="button"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft />
            <span>Back to Dashboard</span>
          </button>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 text-sm text-muted">
              <SearchIcon />
              <span>Search{"\u2026"}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-foreground">
              <span>Downtown</span>
              <ChevronDown />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted/15 text-muted text-xs font-medium">
              {"\u2014"}
            </div>
          </div>
        </header>

        {/* Page body */}
        <div className="flex-1 space-y-6 p-6">
          {/* Shift header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-bold text-foreground">Shift summary</h1>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted">
                <ClockIcon />
                <span>Today, {"\u2014"} {"\u2014"} present</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
                  Active
                </span>
              </div>
            </div>
            <button
              type="button"
              className="rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
            >
              End shift
            </button>
          </div>

          {/* Shift earnings cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {shiftSummary.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-background p-5 shadow-sm"
              >
                <p className="text-xs text-muted uppercase tracking-wide">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-primary">{item.value}</p>
                <p className="mt-1 text-[11px] text-muted">Live data appears here</p>
              </div>
            ))}
          </div>

          {/* Tips breakdown + payment mix */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Tips breakdown */}
            <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground">Tips breakdown</h2>
              <div className="mt-4 space-y-3">
                {tipsBreakdown.map((tip) => (
                  <div key={tip.label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <tip.icon />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{tip.label}</p>
                      <p className="text-[11px] text-muted">{tip.qualifier} source</p>
                    </div>
                    <span className="font-semibold text-sm text-foreground">{tip.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment method mix */}
            <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground">Payment method mix</h2>
              <div className="mt-4 space-y-3">
                {paymentMix.map((pm) => (
                  <div key={pm.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">{pm.label}</span>
                      <span className="text-xs text-muted">
                        {pm.level === 3 ? "Most used" : pm.level === 2 ? "In use" : "Available"}
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 w-full rounded-full bg-surface">
                      <div
                        className="h-2 rounded-full bg-primary/30"
                        style={{ width: `${pm.level * 28}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity feed */}
          <div className="rounded-2xl border border-border bg-background shadow-sm">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold text-foreground">Activity feed</h2>
              <span className="text-xs text-muted">Today</span>
            </div>
            <div className="divide-y divide-border">
              {activityFeed.map((entry, i) => (
                <div key={i} className="flex items-center gap-4 px-5 py-4">
                  <span className="w-14 shrink-0 text-xs text-muted">{entry.time}</span>
                  {entry.type ? (
                    <>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <TipIcon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{entry.action}</p>
                        <p className="text-xs text-muted">{entry.type}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-medium text-foreground">{entry.amount}</p>
                        <p className="text-xs text-muted">Tip {entry.tip}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted/10 text-muted">
                        <ClockIcon />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted">{entry.action}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payout / end-of-shift summary */}
          <div className="rounded-2xl border-2 border-dashed border-border bg-surface p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircleIcon />
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">End-of-shift summary</p>
                <p className="text-[11px] text-muted">
                  Final payout calculated after shift ends
                </p>
              </div>
              <span className="ml-auto font-bold text-lg text-primary">{"\u2014"}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}