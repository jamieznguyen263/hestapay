import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

/* Sample review data -- curated product UI, placeholder values */
const summaryCards = [
  { label: "Today\u2019s revenue", value: "Receiving" },
  { label: "Transactions", value: "\u2014" },
  { label: "Avg. ticket", value: "\u2014" },
  { label: "Refund rate", value: "\u2014" },
] as const;

const transactions = [
  { type: "Card payment", amount: "\u2014", status: "Completed" },
  { type: "Payment link", amount: "\u2014", status: "Pending" },
  { type: "QR payment", amount: "\u2014", status: "Completed" },
  { type: "Refund", amount: "\u2014", status: "Refunded" },
  { type: "Card payment", amount: "\u2014", status: "Completed" },
] as const;

const filters = ["All types", "All statuses", "Last 7 days"] as const;

const features = [
  {
    title: "Real-time transaction monitoring",
    description:
      "See every payment as it happens. Filter by type, status, or location.",
  },
  {
    title: "Refunds and disputes",
    description:
      "Process refunds directly from the dashboard. No separate processor portal required.",
  },
  {
    title: "Sales analytics",
    description:
      "Daily, weekly, and monthly revenue views. Compare across locations and payment methods.",
  },
  {
    title: "Team access controls",
    description:
      "Role-based permissions. Managers see everything; cashiers see only their transactions.",
  },
];

/* ---------- Icons ---------- */
function ChevronDown() {
  return (
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
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
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium ${
        map[status] ?? "bg-muted/15 text-muted"
      }`}
    >
      <svg className="h-1.5 w-1.5" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="4" fill="currentColor" />
      </svg>
      {status}
    </span>
  );
}

const chartBars = [
  { label: "M", h: 62 },
  { label: "T", h: 88 },
  { label: "W", h: 55 },
  { label: "T", h: 95 },
  { label: "F", h: 72 },
  { label: "S", h: 48 },
  { label: "S", h: 38 },
];

export default function DashboardHeroScene() {
  return (
    <SectionWrapper ambient className="bg-gradient-to-b from-surface via-surface/50 to-background">
      <Container>
        <div className="grid gap-12 items-center lg:grid-cols-12 lg:gap-20">
          {/* Text side — stronger presence */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-5">
              Merchant dashboard
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              One dashboard, full visibility
            </h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Track sales, manage payments, and run your business from a single,
              modern interface. No separate processor logins.
            </p>
            <ul className="mt-10 space-y-4">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Product scene side — larger, more dramatic */}
          <div className="lg:col-span-7">
            <DashboardVisual />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

function DashboardVisual() {
  return (
    <div className="relative w-full select-none">
      <div
        className="relative overflow-hidden rounded-3xl border border-border bg-background"
        style={{
          perspective: "900px",
          transformStyle: "preserve-3d",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.03), 0 12px 56px -12px rgba(0,0,0,0.12), 0 4px 20px -4px rgba(16,185,129,0.06), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        <div
          className="relative"
          style={{
            transform: "rotateX(2deg) rotateY(-2deg)",
            transformOrigin: "center center",
          }}
        >
          <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
            {/* Top summary cards */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
              {summaryCards.map((card, i) => (
                <div
                  key={card.label}
                  className={`rounded-2xl border p-3 sm:p-4 ${
                    i === 0
                      ? "border-accent-border bg-background shadow-card"
                      : "border-border bg-background shadow-card"
                  }`}
                  style={{
                    transform: i === 0 ? "translateZ(6px)" : "translateZ(0px)",
                  }}
                >
                  <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-wide">
                    {card.label}
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-primary">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Filter row */}
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-[10px] sm:text-xs font-semibold text-foreground mr-1">
                Recent transactions
              </h2>
              {filters.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-[10px] sm:text-[11px] text-muted"
                >
                  {f}
                  <ChevronDown />
                </div>
              ))}
              <span className="ml-auto text-[10px] sm:text-[11px] text-muted">
                View all &rsaquo;
              </span>
            </div>

            {/* Chart + panel */}
            <div className="grid gap-4 lg:grid-cols-[1fr_180px]">
              {/* Chart */}
              <div
                className="rounded-2xl border border-border bg-surface p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_6px_-2px_rgba(0,0,0,0.04)]"
                style={{ transform: "translateZ(-2px)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[10px] sm:text-xs font-semibold text-foreground">
                    Revenue overview
                  </h3>
                  <div className="flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-[9px] sm:text-[10px] text-muted bg-background">
                    Last 7 days
                    <ChevronDown />
                  </div>
                </div>
                <div className="flex items-end gap-2 h-[110px] sm:h-[140px]">
                  {chartBars.map((d) => (
                    <div
                      key={d.label}
                      className="flex flex-1 flex-col items-center gap-1.5"
                    >
                      <div
                        className="w-full rounded-t-lg"
                        style={{
                          height: `${d.h}%`,
                          background:
                            "linear-gradient(to top, rgba(16,185,129,0.22), rgba(16,185,129,0.08))",
                        }}
                      />
                      <span className="text-[7px] sm:text-[9px] text-muted">
                        {d.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side panel */}
              <div
                className="rounded-2xl border border-border bg-background p-4 sm:p-5 shadow-card flex flex-col justify-between"
                style={{ transform: "translateZ(2px)" }}
              >
                <div>
                  <h3 className="text-[10px] sm:text-xs font-semibold text-foreground mb-3">
                    Quick actions
                  </h3>
                  <div className="space-y-1">
                    {[
                      { label: "View details" },
                      { label: "Print receipt" },
                      { label: "Export" },
                    ].map((action) => (
                      <button
                        key={action.label}
                        type="button"
                        className="flex items-center gap-2 w-full rounded-lg px-2 py-2 text-[9px] sm:text-[10px] text-muted hover:bg-surface hover:text-foreground transition-colors text-left"
                      >
                        <span className="h-3 w-3 shrink-0 rounded-full bg-muted/20" />
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-[9px] text-muted">
                    Connected to trusted infrastructure
                  </p>
                </div>
              </div>
            </div>

            {/* Transaction table */}
            <div
              className="rounded-2xl border border-border bg-background overflow-hidden shadow-card"
              style={{ transform: "translateZ(4px)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border text-[8px] sm:text-[10px] text-muted uppercase tracking-wide">
                      <th className="py-3 pl-4 sm:pl-5 font-medium">Type</th>
                      <th className="py-3 font-medium">Amount</th>
                      <th className="py-3 font-medium">Status</th>
                      <th className="py-3 pr-4 sm:pr-5 font-medium" />
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, i) => (
                      <tr
                        key={i}
                        className="border-b border-border last:border-0 hover:bg-surface/50"
                      >
                        <td className="py-3 pl-4 sm:pl-5 text-[10px] sm:text-xs text-foreground">
                          {tx.type}
                        </td>
                        <td className="py-3 text-[10px] sm:text-xs text-muted">
                          {tx.amount}
                        </td>
                        <td className="py-3">
                          <StatusChip status={tx.status} />
                        </td>
                        <td className="py-3 pr-4 sm:pr-5">
                          <button
                            type="button"
                            className="rounded-lg px-2 py-1 text-[9px] sm:text-[10px] font-medium text-muted hover:bg-surface hover:text-foreground transition-colors"
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
        </div>
      </div>
    </div>
  );
}