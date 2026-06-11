import type { Metadata } from "next";
import MockupShell from "@/app/mockups/_components/shell";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Dashboard Mockup",
};

/* ----- Safe-placeholder data ----- */
const summaryCards = [
  { label: "Today's revenue", value: "\u2014" },
  { label: "Transactions", value: "\u2014" },
  { label: "Avg. ticket", value: "\u2014" },
  { label: "Refund rate", value: "\u2014" },
];

const transactions = [
  { type: "Card payment", amount: "\u2014", status: "Completed" },
  { type: "Payment link", amount: "\u2014", status: "Pending" },
  { type: "QR payment", amount: "\u2014", status: "Completed" },
  { type: "Refund", amount: "\u2014", status: "Refunded" },
  { type: "Card payment", amount: "\u2014", status: "Completed" },
] as const;

const staffActivity = [
  { initials: "\u2014", label: "Preview user 1", action: "Processed a refund" },
  { initials: "\u2014", label: "Preview user 2", action: "Created a payment link" },
  { initials: "\u2014", label: "Preview user 3", action: "Voided a transaction" },
];

const quickActions = [
  { label: "Create Payment Link", icon: LinkIcon },
  { label: "Generate QR Code", icon: QRIcon },
  { label: "Process Refund", icon: RefundIcon },
];

/* ---------- Icons ---------- */
function LinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}
function QRIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
    </svg>
  );
}
function RefundIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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

function StatusChip({ status }: { status: string }) {
  const map: Record<string, string> = {
    Completed: "bg-primary/10 text-primary",
    Pending: "bg-muted/15 text-muted",
    Refunded: "bg-muted/15 text-muted",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${map[status] ?? "bg-muted/15 text-muted"}`}>
      <svg className="h-2 w-2" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="currentColor" /></svg>
      {status}
    </span>
  );
}

export default function DashboardOverviewPage() {
  return (
    <MockupShell activeNav="Dashboard">
      <div className="flex-1 space-y-6 p-6">
        {/* Page title */}
        <div>
          <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-muted">Overview of your payment activity</p>
        </div>

        {/* Summary cards — increased shadow depth */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map((card, i) => (
            <div
              key={card.label}
              className={`rounded-2xl border p-5 shadow-md transition-shadow ${
                i === 0
                  ? "border-primary/20 bg-background"
                  : "border-border bg-background"
              }`}
            >
              <p className="text-xs text-muted uppercase tracking-wide">{card.label}</p>
              <p className="mt-3 text-2xl font-bold text-primary">{card.value}</p>
              <p className="mt-1 text-[11px] text-muted">Live data appears here</p>
            </div>
          ))}
        </div>

        {/* Revenue chart + staff activity */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Revenue overview panel */}
          <div className="rounded-2xl border border-border bg-background p-5 shadow-md lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Revenue overview</h2>
              <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs text-muted">
                Last 7 days
                <ChevronDown />
              </div>
            </div>
            <div className="mt-4 flex h-[180px] items-end gap-3">
              {[{ label: "M", h: 30 }, { label: "T", h: 55 }, { label: "W", h: 40 }, { label: "T", h: 70 }, { label: "F", h: 35 }, { label: "S", h: 60 }, { label: "S", h: 45 }].map((d) => (
                <div key={d.label} className="flex flex-1 flex-col items-center gap-2.5">
                  <div className="w-full rounded-t-lg bg-primary/15" style={{ height: `${d.h}%` }} />
                  <span className="text-[9px] text-muted">{d.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-[11px] text-muted">
              Preview - live chart data appears here
            </p>
          </div>

          {/* Staff activity panel */}
          <div className="rounded-2xl border border-border bg-background p-5 shadow-md">
            <h2 className="text-sm font-semibold text-foreground">Recent staff activity</h2>
            <div className="mt-5 space-y-4">
              {staffActivity.map((staff, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted/10 text-[10px] font-medium text-muted">
                    {staff.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{staff.label}</p>
                    <p className="text-[11px] text-muted">{staff.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transaction list */}
        <div className="rounded-2xl border border-border bg-background shadow-md">
          <div className="flex flex-wrap items-center gap-3 border-b border-border px-5 py-4">
            <h2 className="text-sm font-semibold text-foreground">Recent transactions</h2>
            <div className="flex flex-1 flex-wrap items-center gap-2">
              {["All types", "All statuses", "Last 7 days"].map((f) => (
                <div key={f} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted">
                  {f}
                  <ChevronDown />
                </div>
              ))}
            </div>
            <span className="ml-auto text-xs text-muted">View all {">"}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs text-muted uppercase tracking-wide">
                  <th className="py-3 pl-5 font-medium">Type</th>
                  <th className="py-3 font-medium">Amount</th>
                  <th className="py-3 font-medium">Status</th>
                  <th className="py-3 pr-5 font-medium" />
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-surface/50 transition-colors">
                    <td className="py-3.5 pl-5 text-foreground">{tx.type}</td>
                    <td className="py-3.5 text-muted">{tx.amount}</td>
                    <td className="py-3.5"><StatusChip status={tx.status} /></td>
                    <td className="py-3.5 pr-5">
                      <button type="button" className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted hover:bg-surface hover:text-foreground transition-colors">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom row: refund area + quick actions */}
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-5 shadow-md">
            <h2 className="text-sm font-semibold text-foreground">Pending refunds & voids</h2>
            <div className="mt-5 flex flex-col items-center justify-center py-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary/30">
                <RefundIcon />
              </div>
              <p className="mt-3 text-sm text-muted font-medium">No pending items</p>
              <p className="mt-1 text-xs text-muted">Refund activity appears here</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background p-5 shadow-md">
            <h2 className="text-sm font-semibold text-foreground">Quick actions</h2>
            <div className="mt-4 grid gap-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <action.icon />
                  </div>
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MockupShell>
  );
}