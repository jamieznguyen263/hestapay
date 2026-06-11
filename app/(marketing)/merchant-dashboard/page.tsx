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
import Link from "next/link";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/merchant-dashboard"],
  PAGE_DESCRIPTIONS["/merchant-dashboard"]
);

const metricCards = [
  { label: "Today's revenue", value: "—" },
  { label: "Transactions", value: "—" },
  { label: "Avg. ticket", value: "—" },
  { label: "Refund rate", value: "—" },
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

export default function MerchantDashboardPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Merchant Dashboard"
        heading="One dashboard for every payment operation"
        subtitle="Track transactions, manage refunds, control staff access, and run reports — all from a single, modern interface. No separate processor logins required."
      />

      {/* 2. Overview metrics */}
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
                <p className="mt-2 text-3xl font-bold text-muted">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Live data appears here
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Transactions and filters */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Every transaction, easy to find"
            subtitle="A unified feed with powerful filters so you can find any payment in seconds."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <div>
              <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg
                  className="h-12 w-12 text-primary/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <p className="mt-4 text-sm text-primary font-medium">
                  Transaction list with filters
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
            <FeatureList features={transactionFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. Staff and location controls */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Control who sees what"
            subtitle="Role-based access for staff, location-level controls for multi-location businesses. Security without complexity."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={staffFeatures} />
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg
                  className="h-12 w-12 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Staff and location management
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Refund / void visibility */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Refunds and voids, handled in one place"
            subtitle="Process refunds, void pending transactions, and track disputes — all from the same dashboard where you view transactions."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg
                  className="h-12 w-12 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Refund management view
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
            <FeatureList features={refundFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Reporting / export visibility */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Reports that save you hours"
            subtitle="Pre-built reports for revenue, staff performance, and payment channels. Export to CSV or PDF for accounting and sharing."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={reportFeatures} />
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg
                  className="h-12 w-12 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Reporting and export
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. FAQ */}
      <PageFAQ
        context="Merchant Dashboard"
        heading="Dashboard questions"
        faqs={faqs}
      />

      {/* 8. Final CTA */}
      <CTASection variant="dashboard" />
    </>
  );
}