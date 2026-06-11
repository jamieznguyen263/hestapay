import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Card from "@/components/ui/card";
import Link from "next/link";

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

export default function DashboardPreview() {
  return (
    /* Subtle green left-border accent at section level */
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/20" />
      <SectionWrapper>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            {/* Refined screenshot area — polished UI panel */}
            <div>
              <div className="rounded-2xl border border-border bg-background shadow-md overflow-hidden">
                {/* Dashboard header bar */}
                <div className="flex items-center gap-2 border-b border-border bg-surface px-5 py-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-foreground">Dashboard</span>
                </div>
                <div className="p-5 space-y-4">
                  {/* Metric row */}
                  <div className="grid grid-cols-3 gap-3">
                    {["Revenue", "Transactions", "Avg"].map((label) => (
                      <div key={label} className="rounded-xl border border-border bg-surface p-3 text-center">
                        <p className="text-[10px] text-muted uppercase tracking-wide">{label}</p>
                        <p className="mt-1 text-base font-bold text-primary">&mdash;</p>
                      </div>
                    ))}
                  </div>
                  {/* Transaction list hints */}
                  <div className="space-y-2.5">
                    {["Payment Link", "QR Payment", "Refund"].map((type) => (
                      <div key={type} className="flex items-center justify-between text-xs rounded-lg bg-surface px-3 py-2">
                        <span className="text-muted">{type}</span>
                        <span className="font-medium text-foreground">&mdash;</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature list */}
            <div>
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
              <div className="mt-8">
                <Link
                  href="/merchant-dashboard"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  Explore the Dashboard →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </div>
  );
}