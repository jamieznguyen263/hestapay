import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Transactions Table Mockup",
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
function FilterIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

/* Status chip */
function StatusChip({ status }: { status: string }) {
  const map: Record<string, string> = {
    Completed: "bg-primary/10 text-primary",
    Pending: "bg-muted/15 text-muted",
    Refunded: "bg-muted/15 text-muted",
    Voided: "bg-muted/15 text-muted",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
        map[status] ?? "bg-muted/15 text-muted"
      }`}
    >
      <svg className="h-2 w-2" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="4" fill="currentColor" />
      </svg>
      {status}
    </span>
  );
}

/* Transaction type icon */
function TypeIcon({ type }: { type: string }) {
  const map: Record<string, React.ReactNode> = {
    "Card payment": (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    "Payment link": (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    "QR payment": (
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
      </svg>
    ),
  };
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
      {(map as Record<string, React.ReactNode>)[type] ?? null}
    </div>
  );
}

/* ------ Safe mock data ------ */
const filters = [
  { label: "All types", active: true },
  { label: "All statuses", active: false },
  { label: "Last 7 days", active: false },
  { label: "Downtown", active: false },
];

const transactions = [
  { id: "\u2014", type: "Card payment", amount: "\u2014", status: "Completed", date: "Recent", selected: false },
  { id: "\u2014", type: "QR payment", amount: "\u2014", status: "Completed", date: "Recent", selected: true },
  { id: "\u2014", type: "Payment link", amount: "\u2014", status: "Pending", date: "Earlier", selected: false },
  { id: "\u2014", type: "Card payment", amount: "\u2014", status: "Refunded", date: "Earlier", selected: false },
  { id: "\u2014", type: "QR payment", amount: "\u2014", status: "Completed", date: "Earlier", selected: false },
  { id: "\u2014", type: "Card payment", amount: "\u2014", status: "Voided", date: "Earlier", selected: false },
  { id: "\u2014", type: "Payment link", amount: "\u2014", status: "Completed", date: "Yesterday", selected: false },
  { id: "\u2014", type: "QR payment", amount: "\u2014", status: "Pending", date: "Yesterday", selected: false },
];

const selectedCount = transactions.filter((t) => t.selected).length;

export default function TransactionsTablePreviewPage() {
  return (
    <div className="mx-auto flex h-screen max-w-[1340px] overflow-hidden bg-surface">
      {/* Sidebar */}
      <aside className="hidden w-[220px] shrink-0 border-r border-border bg-background p-4 lg:flex lg:flex-col">
        <div className="flex items-center gap-2 px-2 py-3">
          <span className="flex h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm font-bold text-foreground">HestaPay</span>
        </div>
        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {[
            { label: "Dashboard" },
            { label: "Transactions", active: true },
            { label: "Payment Links" },
            { label: "QR Payments" },
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
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-4 border-b border-border bg-background px-6 py-3">
          <button type="button" className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors">
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

        {/* Page content: header + table area + detail panel */}
        <div className="flex flex-1 overflow-hidden">
          {/* Table area */}
          <div className="flex flex-1 flex-col overflow-auto">
            {/* Page heading */}
            <div className="px-6 pt-6 pb-4">
              <h1 className="text-xl font-bold text-foreground">Transactions</h1>
              <p className="mt-1 text-sm text-muted">
                View and manage all payment activity
              </p>
            </div>

            {/* Filters row */}
            <div className="flex flex-wrap items-center gap-3 px-6 pb-4">
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-muted">
                <SearchIcon />
                <span className="flex-1">Filter transactions{"\u2026"}</span>
              </div>
              {filters.map((f) => (
                <button
                  key={f.label}
                  type="button"
                  className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition-colors ${
                    f.active
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-surface text-muted hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {f.label}
                  <ChevronDown />
                </button>
              ))}
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <RefreshIcon />
                Refresh
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <DownloadIcon />
                Export
              </button>
            </div>

            {/* Bulk action bar */}
            {selectedCount > 0 && (
              <div className="mx-6 mb-2 flex items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 px-5 py-3">
                <span className="text-sm font-medium text-primary">
                  {selectedCount} selected
                </span>
                <div className="flex items-center gap-2">
                  {["Refund", "Export", "Void"].map((action) => (
                    <button
                      key={action}
                      type="button"
                      className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      {action}
                    </button>
                  ))}
                </div>
                <button type="button" className="ml-auto text-xs text-muted hover:text-foreground transition-colors">
                  Clear selection
                </button>
              </div>
            )}

            {/* Table */}
            <div className="flex-1 overflow-auto px-6 pb-6">
              <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border text-xs text-muted uppercase tracking-wide">
                      <th className="py-4 pl-5 font-medium w-12">
                        <div className="flex h-4 w-4 items-center justify-center rounded border border-border bg-transparent">
                          {selectedCount === transactions.length && <CheckIcon />}
                        </div>
                      </th>
                      <th className="py-4 font-medium">Type</th>
                      <th className="py-4 font-medium">Amount</th>
                      <th className="py-4 font-medium">Status</th>
                      <th className="py-4 font-medium">Date</th>
                      <th className="py-4 pr-5 font-medium w-20" />
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, i) => (
                      <tr
                        key={i}
                        className={`border-b border-border last:border-0 transition-colors ${
                          tx.selected ? "bg-primary/5" : "hover:bg-surface/50"
                        }`}
                      >
                        <td className="py-4 pl-5">
                          <div
                            className={`flex h-4 w-4 items-center justify-center rounded border ${
                              tx.selected
                                ? "border-primary bg-primary"
                                : "border-border bg-transparent"
                            }`}
                          >
                            {tx.selected && <CheckIcon />}
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <TypeIcon type={tx.type} />
                            <span className="text-sm text-foreground">{tx.type}</span>
                          </div>
                        </td>
                        <td className="py-4 text-sm text-muted">{tx.amount}</td>
                        <td className="py-4">
                          <StatusChip status={tx.status} />
                        </td>
                        <td className="py-4 text-sm text-muted">{tx.date}</td>
                        <td className="py-4 pr-5">
                          <button
                            type="button"
                            className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right detail panel */}
          <aside className="hidden w-[320px] shrink-0 border-l border-border bg-background p-5 xl:flex xl:flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Transaction detail</h2>
              <button
                type="button"
                className="rounded-lg p-1.5 text-muted hover:bg-surface hover:text-foreground transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Empty state */}
            <div className="mt-8 flex flex-1 flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary/30">
                <FilterIcon />
              </div>
              <p className="mt-4 text-sm font-medium text-foreground">Select a transaction</p>
              <p className="mt-1 text-xs text-muted max-w-[200px]">
                Click a row to see the full transaction breakdown, refund options, and receipt details
              </p>
            </div>

            {/* Summary strip at bottom */}
            <div className="mt-6 space-y-2 border-t border-border pt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted">Showing</span>
                <span className="font-medium text-foreground">{transactions.length} rows</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted">Filtered</span>
                <span className="font-medium text-foreground">Preview mode</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}