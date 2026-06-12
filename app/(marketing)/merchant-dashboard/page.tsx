import type { Metadata } from "next";
import {
  createPageMetadata,
  PAGE_TITLES,
  PAGE_DESCRIPTIONS,
} from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import FeatureList from "@/components/marketing/feature-list";
import PageFAQ from "@/components/marketing/page-faq";
import CTASection from "@/components/marketing/cta-section";
import MockupFrame from "@/components/marketing/mockup-frame";
import AmbientDashboardScene from "@/components/marketing/ambient-dashboard-scene";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/merchant-dashboard"],
  PAGE_DESCRIPTIONS["/merchant-dashboard"]
);

/* ---------- Data ---------- */

const transactionFeatures = [
  {
    title: "Unified transaction feed",
    description:
      "Every payment -- in-person, payment links, QR -- in one chronological feed. No switching between systems or processor portals.",
  },
  {
    title: "Powerful filters",
    description:
      "Filter by date range, payment method, location, staff member, or status. Find any transaction in seconds.",
  },
  {
    title: "Transaction details",
    description:
      "Click any transaction for full breakdown: amount, tip, payment method, timestamp, and staff attribution.",
  },
];

const staffFeatures = [
  {
    title: "Role-based access controls",
    description:
      "Assign permissions by role. Owners see everything; cashiers see only their transactions.",
  },
  {
    title: "Location-level controls",
    description:
      "Assign staff to specific locations. Each location's dashboard shows only its data.",
  },
  {
    title: "Staff activity log",
    description:
      "See who processed which transaction, when, and from which device. Full accountability.",
  },
  {
    title: "Device management",
    description:
      "Manage which devices can access the dashboard. Revoke access instantly if needed.",
  },
];

const refundFeatures = [
  {
    title: "One-click refunds",
    description:
      "Process full or partial refunds directly from the transaction detail view. No separate processor login.",
  },
  {
    title: "Void pending transactions",
    description:
      "Void transactions before settlement. Correct mistakes before end of business day.",
  },
  {
    title: "Refund history",
    description:
      "Every refund and void is logged. Track refund rates by staff, location, or payment method.",
  },
  {
    title: "Dispute visibility",
    description:
      "See dispute status in your dashboard. Respond with transaction details and evidence directly.",
  },
];

const reportFeatures = [
  {
    title: "Revenue by channel",
    description:
      "Break down revenue by in-person, payment links, and QR. See which channels drive results.",
  },
  {
    title: "Staff performance reports",
    description:
      "Track transactions, tips, and refunds by staff member. Identify top performers.",
  },
  {
    title: "CSV and PDF export",
    description:
      "Export any report to CSV for accounting or PDF for sharing. Scheduled export available.",
  },
];

const faqs = [
  {
    question: "What can I do from the merchant dashboard?",
    answer:
      "The merchant dashboard is your central hub for payment operations. View transactions, process refunds, manage staff access, run reports, and track performance across locations -- all from a single interface.",
  },
  {
    question: "Can multiple staff members use the dashboard?",
    answer:
      "Yes. Invite staff with role-based permissions. Owners get full access. Managers can view reports and process refunds. Staff can see their own transactions and tips. Each person logs in with their own account.",
  },
  {
    question: "How do refunds work?",
    answer:
      "Open any transaction from the dashboard and click refund. Choose full or partial amount. The refund is processed through your payment infrastructure partner and appears in the transaction history. No separate processor login required.",
  },
  {
    question: "Can I see data across multiple locations?",
    answer:
      "Yes. Switch between locations in the dashboard or view aggregated data across all locations. Each location's data stays separate for staff access control.",
  },
  {
    question: "How do reports and exports work?",
    answer:
      "Built-in reports cover revenue, transactions, tips, refunds, and staff performance. Filter by date range and location. Export to CSV for accounting or PDF for sharing.",
  },
];

/* ---------- Product fragments ---------- */

function DashboardHeaderFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">
          Dashboard
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["Revenue", "Txns", "Avg", "Refund"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-surface p-2"
          >
            <p className="text-[8px] text-muted uppercase">{label}</p>
            <p className="mt-1 text-xs font-bold text-primary">{"\u2014"}</p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-16">
        {[
          { label: "M", h: 30 },
          { label: "T", h: 55 },
          { label: "W", h: 40 },
          { label: "T", h: 70 },
          { label: "F", h: 35 },
          { label: "S", h: 60 },
          { label: "S", h: 45 },
        ].map((d) => (
          <div
            key={d.label}
            className="flex-1 flex flex-col items-center gap-1"
          >
            <div
              className="w-full rounded-t bg-primary/15"
              style={{ height: `${d.h}%` }}
            />
            <span className="text-[7px] text-muted">{d.label}</span>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {["Card payment", "QR payment", "Payment link"].map((type) => (
          <div
            key={type}
            className="flex items-center justify-between rounded-md border border-border bg-surface px-2.5 py-1.5"
          >
            <span className="text-[9px] text-foreground">{type}</span>
            <span className="text-[9px] text-muted">{"\u2014"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RefundFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">
          Refunds
        </span>
      </div>
      <div className="space-y-2">
        {[
          { color: "bg-amber-400/70", label: "Refunding" },
          { color: "bg-emerald-400/70", label: "Completed" },
          { color: "bg-blue-400/70", label: "Settled" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2"
          >
            <span className={`h-2 w-2 rounded-full ${item.color}`} />
            <span className="text-[9px] text-foreground">Transaction</span>
            <span className="ml-auto text-[9px] text-muted">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">
          Reports
        </span>
      </div>
      <div className="space-y-2">
        {["Daily summary", "Weekly revenue", "Staff performance"].map((r) => (
          <div
            key={r}
            className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2"
          >
            <span className="text-[9px] text-foreground">{r}</span>
            <span className="text-[9px] text-muted">Export</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function MerchantDashboardPage() {
  return (
    <>
      <PageHero
        vertical="Merchant Dashboard"
        heading="One dashboard for every payment operation"
        subtitle="Track transactions, manage refunds, control staff access, and run reports -- all from a single, modern interface. No separate processor logins required."
      />

      {/* Overview: dashboard-led hero section */}
      <SectionWrapper ambient className="bg-gradient-to-b from-surface via-surface/50 to-background">
        <Container>
          <div className="grid gap-12 items-center lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                Overview
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Your business at a glance
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Key metrics surfaced as soon as you open the dashboard.
                Connected to your payment infrastructure for live data.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Revenue", "Transactions", "Avg. ticket", "Refund rate"].map(
                  (label) => (
                    <span
                      key={label}
                      className="inline-flex rounded-full bg-surface border border-border px-3 py-1 text-xs font-medium text-muted"
                    >
                      {label}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="lg:col-span-7">
              <AmbientDashboardScene />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Transactions */}
      <SectionWrapper>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Transaction feed">
              <DashboardHeaderFragment />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Transactions
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Every transaction, easy to find
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                A unified feed with powerful filters so you can find any payment
                in seconds.
              </p>
              <div className="mt-8">
                <FeatureList features={transactionFeatures} />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Staff and access controls */}
      <SectionWrapper alternate>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Access control
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Control who sees what
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Role-based access for staff, location-level controls for
                multi-location businesses.
              </p>
              <div className="mt-8">
                <FeatureList features={staffFeatures} />
              </div>
            </div>
            <MockupFrame label="Staff management">
              <DashboardHeaderFragment />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Refunds */}
      <SectionWrapper ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Refund management">
              <RefundFragment />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Refunds
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Refunds and voids, managed from the dashboard
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Process refunds, void pending transactions, and track disputes
                -- all from the same dashboard.
              </p>
              <div className="mt-8">
                <FeatureList features={refundFeatures} />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Reports */}
      <SectionWrapper alternate>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Reports
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Reports that save you hours
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Pre-built reports for revenue, staff performance, and payment
                channels. Export to CSV or PDF.
              </p>
              <div className="mt-8">
                <FeatureList features={reportFeatures} />
              </div>
            </div>
            <MockupFrame label="Reports">
              <ReportFragment />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      <PageFAQ
        context="Merchant Dashboard"
        heading="Dashboard questions"
        faqs={faqs}
      />
      <CTASection variant="dashboard" />
    </>
  );
}