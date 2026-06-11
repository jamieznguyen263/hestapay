import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "QR Payment Mockup",
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
function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function PrintIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  );
}
function RefreshIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
function ArrowLeft() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
}

/* ─── Refined QR visualization component ─── */
function QRCode() {
  /* 21x21 array: 1 = dark module, 0 = light */
  const matrix: number[][] = [];
  for (let r = 0; r < 21; r++) {
    const row: number[] = [];
    for (let c = 0; c < 21; c++) {
      /* Finder patterns: top-left, top-right, bottom-left (7x7) */
      const inFinderTL = r < 7 && c < 7;
      const inFinderTR = r < 7 && c >= 14;
      const inFinderBL = r >= 14 && c < 7;

      let isDark = false;
      if (inFinderTL || inFinderTR || inFinderBL) {
        const fr = inFinderBL ? r - 14 : r;
        const fc = inFinderTR ? c - 14 : c;
        const outer = fr === 0 || fr === 6 || fc === 0 || fc === 6;
        const inner = fr >= 2 && fr <= 4 && fc >= 2 && fc <= 4;
        isDark = outer || inner;
      } else {
        /* Timing: row 6 col 8-13 alternates */
        if (r === 6 && c >= 8 && c <= 13) isDark = c % 2 === 0;
        /* Timing: col 6 row 8-13 alternates */
        else if (c === 6 && r >= 8 && r <= 13) isDark = r % 2 === 0;
        /* Abstract data area - sparse scatter */
        else if ((r * 7 + c * 11) % 13 < 6) isDark = (r + c) % 2 === 0;
      }
      row.push(isDark ? 1 : 0);
    }
    matrix.push(row);
  }

  return (
    <div className="inline-flex flex-col items-center rounded-2xl border border-border bg-background p-5 shadow-sm">
      <div className="grid gap-px" style={{ gridTemplateColumns: `repeat(21, 12px)` }}>
        {matrix.map((row, ri) =>
          row.map((cell, ci) => (
            <div
              key={`${ri}-${ci}`}
              className="h-3 w-3 rounded-[1px]"
              style={{
                backgroundColor: cell ? "var(--color-foreground)" : "transparent",
              }}
            />
          ))
        )}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-muted">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
        </svg>
        Table QR | Active
      </div>
    </div>
  );
}

export default function QRPaymentScreenPage() {
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
            { label: "QR Payments", active: true },
            { label: "Staff" },
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
          {/* Page heading */}
          <div>
            <h1 className="text-xl font-bold text-foreground">QR Payment</h1>
            <p className="mt-1 text-sm text-muted">
              Generate a QR code for touch-free checkout
            </p>
          </div>

          {/* Core area: QR + controls */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left: Large QR visualization */}
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm lg:col-span-1 flex flex-col items-center justify-center">
              <p className="text-xs text-muted uppercase tracking-wide mb-6">
                Active QR code
              </p>
              <QRCode />
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <RefreshIcon />
                  Generate New
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <PrintIcon />
                  Print
                </button>
              </div>
            </div>

            {/* Right: Staff controls */}
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm lg:col-span-2 space-y-6">
              <h2 className="text-sm font-semibold text-foreground">
                Staff controls
              </h2>

              {/* Location selector */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Table 1", active: true },
                  { label: "Table 2", active: false },
                  { label: "Counter", active: false },
                ].map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                      opt.active
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border bg-surface text-muted hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Amount + tip preview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-xs text-muted uppercase tracking-wide">Amount</p>
                  <p className="mt-2 text-2xl font-bold text-primary">{"\u2014"}</p>
                  <p className="mt-1 text-[11px] text-muted">Set amount for QR scan</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-xs text-muted uppercase tracking-wide">Tip presets</p>
                  <div className="mt-2 flex items-center gap-2">
                    {["15%", "18%", "20%"].map((tip) => (
                      <span
                        key={tip}
                        className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted"
                      >
                        {tip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-3 w-3 rounded-full bg-muted" />
                  <span className="text-sm text-muted">Awaiting payment</span>
                </div>
                <span className="ml-auto text-xs text-muted">
                  Confirmation appears here
                </span>
              </div>
            </div>
          </div>

          {/* Bottom row: customer flow + receipt */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Customer flow */}
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground">
                Customer flow
              </h2>
              <div className="mt-5 space-y-4">
                {[
                  {
                    step: 1,
                    title: "Scan QR code",
                    desc: "Customer points their phone camera at the QR code displayed at the table or counter",
                  },
                  {
                    step: 2,
                    title: "Review and tip",
                    desc: "Customer sees the amount, selects a tip, and confirms \u2014 all in their phone browser",
                  },
                  {
                    step: 3,
                    title: "Payment confirmed",
                    desc: "Digital receipt appears on screen. Staff see the confirmation instantly",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                      {s.step}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{s.title}</p>
                      <p className="mt-1 text-xs text-muted">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Receipt + tip */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 rounded-2xl border border-border bg-background p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-foreground">
                  Last payment
                </h2>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Amount</span>
                    <span className="font-medium text-foreground">{"\u2014"}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Tip</span>
                    <span className="font-medium text-foreground">{"\u2014"}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-t border-border pt-3">
                    <span className="font-medium text-foreground">Total</span>
                    <span className="font-bold text-primary">{"\u2014"}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3">
                  <CheckIcon />
                  <span className="text-xs font-medium text-primary">Completed</span>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <TipIcon />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Tip tracking</p>
                    <p className="text-[11px] text-muted">
                      Attributed to staff member {"\u2014"} shift
                    </p>
                  </div>
                  <span className="ml-auto font-medium text-sm text-primary">{"\u2014"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}