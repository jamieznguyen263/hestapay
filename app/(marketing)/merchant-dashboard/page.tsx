import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FeatureList from "@/components/marketing/feature-list";
import Card from "@/components/ui/card";
import PageFAQ from "@/components/marketing/page-faq";
import CTASection from "@/components/marketing/cta-section";
import MockupFrame from "@/components/marketing/mockup-frame";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/merchant-dashboard"],
  PAGE_DESCRIPTIONS["/merchant-dashboard"]
);

const metricCards = [
  { label: "Today's revenue", value: "\u2014" },
  { label: "Transactions", value: "\u2014" },
  { label: "Avg. ticket", value: "\u2014" },
  { label: "Refund rate", value: "\u2014" },
];

const transactionFeatures = [
  {
    title: "Unified transaction feed",
    description:
      "See every payment — in-person, payment links, QR — in one chronological feed. No switching between systems or processor portals.",
  },
  {
    title: "Powerful filters",
    description:
      "Filter by date range, payment method, location, staff member, or transaction status. Find any transaction in seconds.",
  },
  {
    title: "Transaction details",
    description:
      "Click any transaction to see the full breakdown: amount, tip, fees, payment method, timestamp, and staff attribution.",
  },
  {
    title: "Search and export",
    description:
      "Search by amount, customer reference, or transaction ID. Export filtered results for accounting or reconciliation.",
  },
];

const staffFeatures = [
  {
    title: "Role-based access controls",
    description:
      "Assign permissions by role: owner, manager, staff. Owners see everything; cashiers see only their transactions. No shared logins, no overexposure.",
  },
  {
    title: "Location-level controls",
    description:
      "For multi-location businesses: assign staff to specific locations. Each location's dashboard shows only its data. Managers can view across locations.",
  },
  {
    title: "Staff activity log",
    description:
      "See who processed which transaction, when, and from which device. Full accountability without micromanagement.",
  },
  {
    title: "Device management",
    description:
      "Manage which devices can access the dashboard and staff app. Revoke access instantly if a device is lost or a staff member leaves.",
  },
];

const refundFeatures = [
  {
    title: "One-click refunds",
    description:
      "Process full or partial refunds directly from the transaction detail view. No separate processor login, no phone calls, no delay.",
  },
  {
    title: "Void pending transactions",
    description:
      "Void transactions that haven't settled yet. Useful for correcting mistakes before the end of the business day.",
  },
  {
    title: "Refund history",
    description:
      "Every refund and void is logged with the original transaction. Track refund rates by staff, location, or payment method.",
  },
  {
    title: "Dispute visibility",
    description:
      "When a customer disputes a charge, see the status in your dashboard. Respond with transaction details and evidence directly from the interface.",
  },
];

const reportFeatures = [
  {
    title: "Daily, weekly, and monthly reports",
    description:
      "Pre-built reports for revenue, transactions, tips, refunds, and staff performance. View in-dashboard or export.",
  },
  {
    title: "Revenue by channel",
    description:
      "Break down revenue by payment method: in-person, payment links, QR. See which channels drive the most revenue for your business.",
  },
  {
    title: "Staff performance reports",
    description:
      "Track transactions, tips, and refunds by staff member. Identify your top performers and coaching opportunities.",
  },
  {
    title: "CSV and PDF export",
    description:
      "Export any report to CSV for accounting or PDF for sharing. Scheduled export options available for recurring reporting needs.",
  },
];

const faqs = [
  {
    question: "What can I do from the merchant dashboard?",
    answer:
      "The merchant dashboard is your central hub for payment operations. View transactions, process refunds, manage staff access, run reports, and track performance across locations. Everything you need to manage payments — in one place.",
  },
  {
    question: "Can multiple staff members use the dashboard?",
    answer:
      "Yes. You can invite staff with role-based permissions. Owners get full access. Managers can view reports and process refunds. Staff can see their own transactions and tips. Each person logs in with their own account.",
  },
  {
    question: "How do refunds work?",
    answer:
      "Open any transaction from the dashboard and click refund. Choose full or partial amount. The refund is processed through your payment infrastructure partner and appears in the transaction history. No separate processor login required.",
  },
  {
    question: "Can I see data across multiple locations?",
    answer:
      "Yes. If you have multiple locations, you can switch between them in the dashboard or view aggregated data across all locations. Each location's data is kept separate for staff access control.",
  },
  {
    question: "How do reports and exports work?",
    answer:
      "Built-in reports cover revenue, transactions, tips, refunds, and staff performance. You can filter by date range and location. Export to CSV for accounting software or PDF for sharing. Reports are generated from your live transaction data.",
  },
];

/* Inline dashboard visual — derived from /mockups/dashboard-overview composition */
function DashboardVisual() {
  return (
    <div className="p-4 space-y-3">
      {/* Top bar */}
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <div className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">Dashboard</span>
      </div>
      {/* Metric cards row */}
      <div className="grid grid-cols-4 gap-2">
        {["Revenue", "Txns", "Avg", "Refund"].map((label) => (
          <div key={label} className="rounded-lg border border-border bg-surface p-2">
            <p className="text-[8px] text-muted uppercase">{label}</p>
            <p className="mt-1 text-xs font-bold text-primary">{"\u2014"}</p>
          </div>
        ))}
      </div>
      {/* Chart area */}
      <div className="flex items-end gap-1.5 h-16">
        {[{ label: "M", h: 30 }, { label: "T", h: 55 }, { label: "W", h: 40 }, { label: "T", h: 70 }, { label: "F", h: 35 }, { label: "S", h: 60 }, { label: "S", h: 45 }].map((d) => (
          <div key={d.label} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full rounded-t bg-primary/15" style={{ height: `${d.h}%` }} />
            <span className="text-[7px] text-muted">{d.label}</span>
          </div>
        ))}
      </div>
      {/* Table rows */}
      <div className="space-y-1.5">
        {["Card payment", "QR payment", "Payment link"].map((type) => (
          <div key={type} className="flex items-center justify-between rounded-md border border-border bg-surface px-2.5 py-1.5">
            <span className="text-[9px] text-foreground">{type}</span>
            <span className="text-[9px] text-muted">{"\u2014"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MerchantDashboardPage() {
  return (
    <>
      <PageHero
        vertical="Merchant Dashboard"
        heading="One dashboard for every payment operation"
        subtitle="Track transactions, manage refunds, control staff access, and run reports — all from a single, modern interface. No separate processor logins required."
      />

      {/* Overview metrics */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Your business at a glance"
            subtitle="Key metrics surfaced as soon as you open the dashboard. Live data populates here once your account is connected."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metricCards.map((metric) => (
              <Card key={metric.label}>
                <p className="text-sm text-muted">{metric.label}</p>
                <p className="mt-2 text-3xl font-bold text-muted">{metric.value}</p>
                <p className="mt-1 text-xs text-muted">Live data appears here</p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Transactions and filters */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Every transaction, easy to find"
            subtitle="A unified feed with powerful filters so you can find any payment in seconds."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Dashboard overview">
              <DashboardVisual />
            </MockupFrame>
            <FeatureList features={transactionFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* Staff and location controls */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Control who sees what"
            subtitle="Role-based access for staff, location-level controls for multi-location businesses. Security without complexity."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={staffFeatures} />
            <MockupFrame label="Staff management">
              <DashboardVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Refund / void visibility */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Refunds and voids, handled in one place"
            subtitle="Process refunds, void pending transactions, and track disputes — all from the same dashboard where you view transactions."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Refund management">
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-border">
                  <span className="text-[10px] font-medium text-foreground">Refunds</span>
                </div>
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary/40">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-[10px] text-muted">No pending refunds</p>
                </div>
              </div>
            </MockupFrame>
            <FeatureList features={refundFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* Reporting / export visibility */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Reports that save you hours"
            subtitle="Pre-built reports for revenue, staff performance, and payment channels. Export to CSV or PDF for accounting and sharing."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={reportFeatures} />
            <MockupFrame label="Reports">
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-border">
                  <span className="text-[10px] font-medium text-foreground">Reports</span>
                </div>
                <div className="space-y-2">
                  {["Daily summary", "Weekly revenue", "Staff performance"].map((r) => (
                    <div key={r} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2">
                      <span className="text-[9px] text-foreground">{r}</span>
                      <span className="text-[9px] text-muted">Export</span>
                    </div>
                  ))}
                </div>
              </div>
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      <PageFAQ context="Merchant Dashboard" heading="Dashboard questions" faqs={faqs} />
      <CTASection variant="dashboard" />
    </>
  );
}