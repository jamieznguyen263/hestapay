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
import Link from "next/link";
import SecuritySection from "@/components/marketing/security-section";
import PageFAQ from "@/components/marketing/page-faq";
import CTASection from "@/components/marketing/cta-section";
import MockupFrame from "@/components/marketing/mockup-frame";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/restaurants"],
  PAGE_DESCRIPTIONS["/restaurants"]
);

const qrFeatures = [
  {
    title: "Scan and pay -- no app needed",
    description:
      "Guests scan a QR code at the table and pay from their phone browser. No download, no account creation.",
  },
  {
    title: "Faster table turns",
    description:
      "When guests can pay from their phone without waiting for a terminal, tables turn faster. Staff focus on hospitality.",
  },
  {
    title: "Connect to your existing order flow",
    description:
      "QR payments work alongside your current ordering setup. Payments flow into your existing systems through the orchestration layer.",
  },
  {
    title: "Smart tip prompts",
    description:
      "Suggested tip percentages appear at the moment of payment. Guests choose what feels right -- no awkward manual entry.",
  },
];

const tipFeatures = [
  {
    title: "Digital tipping with suggested percentages",
    description:
      "Customers choose from suggested tip amounts or enter a custom tip. No math errors, no awkward manual entry.",
  },
  {
    title: "Split payments made simple",
    description:
      "Divide the bill evenly or by item. Each guest pays their share and tips individually -- all in one flow.",
  },
  {
    title: "Shift-based tip reporting",
    description:
      "Tips are tracked and reported by shift. Managers see who earned what, and payouts are calculated automatically.",
  },
  {
    title: "Staff tip visibility",
    description:
      "Staff can view their tips in real time through the HestaPay staff app. No waiting until end of week.",
  },
];

const staffFeatures = [
  {
    title: "Table management on mobile",
    description:
      "Staff see assigned tables, open orders, and payment status from their phone.",
  },
  {
    title: "Real-time tip tracking",
    description:
      "View tips earned during the current shift. Know exactly what you're taking home before clocking out.",
  },
  {
    title: "Payment notifications",
    description:
      "Get notified when QR payments come in. Know which tables have paid and which are still open.",
  },
  {
    title: "Shift handover",
    description:
      "Transfer tables and open payment status between shifts. Incoming staff see exactly what's in progress.",
  },
];

const managerFeatures = [
  {
    title: "Revenue dashboard",
    description:
      "See revenue by payment channel: dine-in, takeout, QR, and payment links. Compare across shifts, days, and weeks.",
  },
  {
    title: "Refund and dispute management",
    description:
      "Process refunds and track disputes from one dashboard. No separate processor login.",
  },
  {
    title: "Staff performance insights",
    description:
      "Track tips, transaction counts, and refund rates by staff member. Identify top performers.",
  },
  {
    title: "Payment channel analytics",
    description:
      "See which payment methods drive the most transactions. Adjust checkout strategy based on real data.",
  },
];

const faqs = [
  {
    question: "How do QR table payments work with HestaPay?",
    answer:
      "You place a QR code on each table. Guests scan it with their phone camera and pay from their browser -- no app download required. Payment confirmation appears instantly for staff, and the transaction appears alongside all other payments in your dashboard.",
  },
  {
    question: "Does HestaPay replace my existing POS?",
    answer:
      "HestaPay is a payment orchestration layer that works alongside your POS. It connects your POS, payment processing, online orders, and delivery platforms into one payment flow. You keep the tools you use -- HestaPay handles the payment side.",
  },
  {
    question: "How does tipping work?",
    answer:
      "Guests choose a tip percentage or custom amount during checkout. Tips are tracked by shift and staff member. Managers can view tip reports, and staff see their earnings in real time through the HestaPay staff app.",
  },
  {
    question: "Can I handle split payments?",
    answer:
      "Yes. Split payments are built into the flow. Divide evenly or by item. Each guest pays and tips individually. No calculator required.",
  },
  {
    question: "Does HestaPay support delivery integrations?",
    answer:
      "HestaPay is designed to integrate with delivery platforms, routing delivery payments through the same payment layer as dine-in and takeout. Specific integrations will be confirmed during early access.",
  },
];

/* ---------- Product fragments ---------- */

function QRTableVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">
          Table QR
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-5 gap-px shrink-0">
          {[
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
          ].map((row, ri) =>
            row.map((cell, ci) => (
              <div
                key={`${ri}-${ci}`}
                className="h-2 w-2 rounded-[1px]"
                style={{
                  backgroundColor: cell
                    ? "var(--color-foreground)"
                    : "transparent",
                }}
              />
            ))
          )}
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-[9px] text-foreground font-medium">Table 12</p>
          <div className="rounded-md border border-border bg-surface p-2">
            <p className="text-[8px] text-muted uppercase">Amount</p>
            <p className="text-xs font-bold text-primary">{"\u2014"}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {["15%", "18%", "20%"].map((tip) => (
          <span
            key={tip}
            className="rounded-md border border-border px-2 py-1 text-[8px] text-muted"
          >
            {tip}
          </span>
        ))}
      </div>
      <div className="rounded-md bg-primary py-1.5 text-center text-[9px] font-medium text-white">
        Pay {"\u2014"}
      </div>
    </div>
  );
}

function TipReportVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">Tips</span>
      </div>
      <div className="space-y-2">
        {["Alex", "Maria", "Jordan"].map((name) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2"
          >
            <span className="text-[9px] text-foreground">{name}</span>
            <span className="text-[9px] font-medium text-primary">
              {"\u2014"}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-2 flex items-center justify-between text-[9px]">
        <span className="font-medium text-foreground">Shift total</span>
        <span className="font-bold text-primary">{"\u2014"}</span>
      </div>
    </div>
  );
}

function StaffMobileVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">
          Staff App
        </span>
      </div>
      <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
        <p className="text-[8px] text-muted uppercase">Assigned tables</p>
        <div className="grid grid-cols-3 gap-1.5">
          {["T12", "T13", "T14", "T15", "T16", "T17"].map((t) => (
            <div
              key={t}
              className="rounded-md border border-border bg-background p-1.5 text-center text-[8px] text-foreground"
            >
              {t}
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-2 flex items-center justify-between">
          <span className="text-[8px] text-muted">Tips this shift</span>
          <span className="text-[9px] font-bold text-primary">{"\u2014"}</span>
        </div>
      </div>
    </div>
  );
}

function RestaurantDashboardVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">
          Dashboard
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["Revenue", "Txns", "Tips", "Avg"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-surface p-2"
          >
            <p className="text-[8px] text-muted uppercase">{label}</p>
            <p className="mt-1 text-xs font-bold text-primary">{"\u2014"}</p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-12">
        {[
          { h: 30 },
          { h: 55 },
          { h: 40 },
          { h: 70 },
          { h: 35 },
          { h: 60 },
          { h: 45 },
        ].map((d, i) => (
          <div key={i} className="flex-1">
            <div
              className="w-full rounded-t bg-primary/10"
              style={{ height: `${d.h}%` }}
            />
          </div>
        ))}
      </div>
      <p className="text-center text-[8px] text-muted">
        Weekly trend {"\u2014"}
      </p>
    </div>
  );
}

/* ---------- Page ---------- */

export default function RestaurantsPage() {
  return (
    <>
      <PageHero
        vertical="Restaurants"
        heading="Payment software built for restaurant workflows"
        subtitle="From table-side QR to staff tips -- HestaPay brings payments and reporting into one orchestration layer designed for how restaurants actually operate."
      />

      {/* Pain points */}
      <SectionWrapper>
        <Container>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            The problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-2xl">
            Restaurant payments are more complex than a POS can handle
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
            Disconnected POS, payment terminals, online orders, and delivery
            apps. Staff switch between screens, errors increase, and
            reconciliation takes hours.
          </p>
        </Container>
      </SectionWrapper>

      {/* Table-side QR */}
      <SectionWrapper alternate ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Table QR payment flow" accent>
              <QRTableVisual />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                QR payments
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Table-side QR payments guests love
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Give guests a fast, frictionless way to pay from their phone.
                Staff focus on hospitality, not running payments.
              </p>
              <div className="mt-8">
                <FeatureList features={qrFeatures} />
              </div>
              <div className="mt-6">
                <Link
                  href="/qr-payments"
                  className="text-sm font-medium text-primary hover:text-primary-dark inline-flex items-center gap-1 group transition-colors duration-200"
                >
                  See QR in Action
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Tips and shift visibility */}
      <SectionWrapper>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Tips & shifts
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Tips and shifts, handled
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Digital tipping, split checks, and shift-based reporting -- so
                tips are fast for guests and accurate for staff.
              </p>
              <div className="mt-8">
                <FeatureList features={tipFeatures} />
              </div>
            </div>
            <MockupFrame label="Tip reporting dashboard">
              <TipReportVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Staff app */}
      <SectionWrapper alternate>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Staff mobile app">
              <StaffMobileVisual />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Staff tools
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Staff app built for the floor
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Mobile tools for tables, tips, and shift management -- no
                terminal required.
              </p>
              <div className="mt-8">
                <FeatureList features={staffFeatures} />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Manager dashboard */}
      <SectionWrapper ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Manager view
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Manager dashboard for restaurant operators
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Revenue insights, staff performance, and payment channel
                analytics -- the visibility you need to run a better restaurant.
              </p>
              <div className="mt-8">
                <FeatureList features={managerFeatures} />
              </div>
            </div>
            <MockupFrame label="Restaurant dashboard">
              <RestaurantDashboardVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      <SecuritySection variant="restaurant" />
      <PageFAQ
        context="Restaurants"
        heading="Restaurant payment questions"
        faqs={faqs}
      />
      <CTASection variant="restaurant" />
    </>
  );
}