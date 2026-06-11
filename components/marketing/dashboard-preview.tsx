import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
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
    <SectionWrapper>
      <Container>
        <div className="grid gap-10 items-center lg:grid-cols-2">
          {/* Screenshot placeholder */}
          <div>
            <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 flex flex-col items-center justify-center text-center min-h-[340px]">
              <svg
                className="h-16 w-16 text-primary/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <p className="mt-4 text-sm text-primary font-medium">
                Merchant Dashboard
              </p>
              <p className="mt-1 text-xs text-muted">
                Screenshot coming soon
              </p>
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
  );
}