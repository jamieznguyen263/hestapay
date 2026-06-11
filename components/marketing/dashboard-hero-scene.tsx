import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

/* Safe placeholder data -- all values use em dash */
const EM = "\u2014";

const summaryCards = [
  { label: "Today\u2019s revenue", value: EM },
  { label: "Transactions", value: EM },
  { label: "Avg. ticket", value: EM },
  { label: "Refund rate", value: EM },
] as const;

const transactions = [
  { type: "Card payment", amount: EM, status: "Completed" },
  { type: "Payment link", amount: EM, status: "Pending" },
  { type: "QR payment", amount: EM, status: "Completed" },
  { type: "Refund", amount: EM, status: "Refunded" },
  { type: "Card payment", amount: EM, status: "Completed" },
] as const;

const filters = ["All types", "All statuses", "Last 7 days"] as const;

const sidePanelActions = [
  { label: "View details", icon: ViewIcon },
  { label: "Print receipt", icon: PrintIcon },
  { label: "Export", icon: ExportIcon },
];

const features = [
  {
    title: "Real-time transaction monitoring",
    description:
      "See every payment as it happens. Filter by date, payment method, location, or status.",
  },
  {
    title: "Refunds and disputes",
    description:
      "Process refunds directly from the dashboard. Track dispute status without switching to a processor portal.",
  },
  {
    title: "Sales analytics",
    description:
      "Daily, weekly, and monthly revenue views. Compare performance across locations and payment methods.",
  },
  {
    title: "Team access controls",
    description:
      "Invite staff with role-based permissions. Managers see everything; cashiers see only their transactions.",
  },
];

/* ---------- Icons ---------- */
function ViewIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}
function PrintIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  );
}
function ExportIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
  { label: "M", h: 30 },
  { label: "T", h: 55 },
  { label: "W", h: 40 },
  { label: "T", h: 70 },
  { label: "F", h: 35 },
  { label: "S", h: 60 },
  { label: "S", h: 45 },
];

export default function DashboardHeroScene() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/20" />
      <SectionWrapper ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <DashboardVisual />
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                title="A merchant dashboard built for operators"
                subtitle="Track sales, manage payments, and run your business from a single, modern interface. No separate processor logins required."
              />
              <ul className="mt-8 space-y-5">
                {features.map((feature) => (
                  <li key={feature.title} className="flex gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{feature.title}</h4>
                      <p className="mt-1 text-sm text-muted leading-relaxed">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}

/* Premium static dashboard visual -- no cursor, ambient only */
function DashboardVisual() {
  return (
    <div className="relative w-full select-none">
      <div
        className="relative overflow-hidden rounded-3xl border border-border bg-background"
        style={{
          perspective: "900px",
          transformStyle: "preserve-3d",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.03), 0 8px 40px -8px rgba(0,0,0,0.10), 0 4px 16px -4px rgba(16,185,129,0.05), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        <div
          className="relative"
          style={{
            transform: "rotateX(3deg) rotateY(-2.5deg)",
            transformOrigin: "center center",
          }}
        >
          <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
            {/* Top summary card row */}
            <div className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-4">
              {summaryCards.map((card, i) => (
                <div
                  key={card.label}
                  className={`rounded-2xl border p-3 sm:p-4 ${
                    i === 0
                      ? "border-accent-border bg-background shadow-card"
                      : "border-border bg-background shadow-card"
                  }`}
                  style={{
                    transform: i === 0 ? "translateZ(4px)" : "translateZ(0px)",
                  }}
                >
                  <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-wide">
                    {card.label}
                  </p>
                  <p className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-primary">
                    {card.value}
                  </p>
                  <p className="mt-0.5 text-[8px] sm:text-[10px] text-muted">Preview</p>
                </div>
              ))}
            </div>

            {/* Filter row */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h2 className="text-[10px] sm:text-xs font-semibold text-foreground mr-1">
                Recent transactions
              </h2>
              {filters.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-1 rounded-lg border border-border px-2 py-1 sm:px-2.5 sm:py-1.5 text-[9px] sm:text-[11px] text-muted"
                >
                  {f}
                  <ChevronDown />
                </div>
              ))}
              <span className="ml-auto text-[9px] sm:text-[11px] text-muted">
                View all &rsaquo;
              </span>
            </div>

            {/* Chart + Side panel */}
            <div className="grid gap-3 lg:grid-cols-[1fr_180px]">
              {/* Chart area -- recessed */}
              <div
                className="rounded-xl sm:rounded-2xl border border-border bg-surface p-3 sm:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_6px_-2px_rgba(0,0,0,0.04)]"
                style={{ transform: "translateZ(-2px)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] sm:text-xs font-semibold text-foreground">
                    Revenue overview
                  </h3>
                  <div className="flex items-center gap-1 rounded-lg border border-border px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] text-muted bg-background">
                    Last 7 days
                    <ChevronDown />
                  </div>
                </div>
                <div className="flex items-end gap-1.5 sm:gap-2 h-[100px] sm:h-[130px]">
                  {chartBars.map((d) => (
                    <div key={d.label} className="flex flex-1 flex-col items-center gap-1.5">
                      <div
                        className="w-full rounded-t-lg"
                        style={{
                          height: `${d.h}%`,
                          background: "linear-gradient(to top, rgba(16,185,129,0.18), rgba(16,185,129,0.06))",
                        }}
                      />
                      <span className="text-[7px] sm:text-[9px] text-muted">{d.label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-center text-[8px] sm:text-[10px] text-muted">
                  Preview {EM} live chart data appears here
                </p>
              </div>

              {/* Side panel */}
              <div
                className="rounded-xl sm:rounded-2xl border border-border bg-background p-3 sm:p-4 shadow-card"
                style={{ transform: "translateZ(0px)" }}
              >
                <h3 className="text-[10px] sm:text-xs font-semibold text-foreground mb-2 sm:mb-3">
                  Quick actions
                </h3>
                <div className="space-y-1">
                  {sidePanelActions.map((action) => (
                    <button
                      key={action.label}
                      type="button"
                      className="flex items-center gap-1.5 w-full rounded-lg px-2 py-1.5 text-[8px] sm:text-[10px] text-muted hover:bg-surface hover:text-foreground transition-colors text-left"
                    >
                      <action.icon />
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Transaction table */}
            <div
              className="rounded-xl sm:rounded-2xl border border-border bg-background overflow-hidden shadow-card"
              style={{ transform: "translateZ(2px)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border text-[8px] sm:text-[10px] text-muted uppercase tracking-wide">
                      <th className="py-2 pl-3 sm:pl-4 font-medium">Type</th>
                      <th className="py-2 font-medium">Amount</th>
                      <th className="py-2 font-medium">Status</th>
                      <th className="py-2 pr-3 sm:pr-4 font-medium" />
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, i) => (
                      <tr
                        key={i}
                        className="border-b border-border last:border-0 hover:bg-surface/50"
                      >
                        <td className="py-2.5 pl-3 sm:pl-4 text-[10px] sm:text-xs text-foreground">
                          {tx.type}
                        </td>
                        <td className="py-2.5 text-[10px] sm:text-xs text-muted">
                          {tx.amount}
                        </td>
                        <td className="py-2.5">
                          <StatusChip status={tx.status} />
                        </td>
                        <td className="py-2.5 pr-3 sm:pr-4">
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