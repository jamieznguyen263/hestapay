import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FeatureList from "@/components/marketing/feature-list";
import Card from "@/components/ui/card";
import Link from "next/link";
import SecuritySection from "@/components/marketing/security-section";
import PageFAQ from "@/components/marketing/page-faq";
import CTASection from "@/components/marketing/cta-section";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/restaurants"],
  PAGE_DESCRIPTIONS["/restaurants"]
);

const painPoints = [
  {
    title: "Disconnected POS and payment systems",
    description:
      "Your POS, payment terminal, online orders, and delivery apps all run on separate systems. Staff switch between screens, errors increase, and reconciliation takes hours.",
  },
  {
    title: "Slow table turnover",
    description:
      "Guests wait for the check, wait for the card machine, wait for processing. Every minute of waiting is a minute your table isn't generating revenue.",
  },
  {
    title: "Tip complexity",
    description:
      "Digital tipping, cash tips, split checks — tracking and distributing tips accurately across shifts is a constant headache for managers and staff.",
  },
];

const qrFeatures = [
  {
    title: "Scan, order, pay — no app needed",
    description:
      "Guests scan a QR code at the table, browse the menu, place their order, and pay — all from their phone browser. No download, no account creation.",
  },
  {
    title: "Faster table turns",
    description:
      "When guests control ordering and payment from their phone, tables turn faster. Staff focus on service, not running cards.",
  },
  {
    title: "Automatic order routing",
    description:
      "Orders flow directly to the kitchen display or printer. Modify items, add notes, and handle special requests — all captured at the point of payment.",
  },
  {
    title: "Built-in upselling",
    description:
      "Smart menu prompts suggest add-ons, sides, and drinks at the moment of ordering. Increase average check size without staff intervention.",
  },
];

const tipFeatures = [
  {
    title: "Digital tipping with suggested percentages",
    description:
      "Customers choose from suggested tip amounts or enter a custom tip. No awkward manual entry, no math errors.",
  },
  {
    title: "Split payments made simple",
    description:
      "Divide the bill evenly or by item. Each guest pays their share and tips individually — all in one flow.",
  },
  {
    title: "Shift-based tip reporting",
    description:
      "Tips are tracked and reported by shift. Managers see who earned what, and payouts are calculated automatically.",
  },
  {
    title: "Staff tip visibility",
    description:
      "Staff can view their tips in real time through the HestaPay staff app. No more waiting until end of week to see earnings.",
  },
];

const staffPWAFeatures = [
  {
    title: "Table management on mobile",
    description:
      "Staff see assigned tables, open orders, and payment status from their phone. No need to be at a terminal.",
  },
  {
    title: "Real-time tip tracking",
    description:
      "View tips earned during the current shift. Know exactly what you're taking home before clocking out.",
  },
  {
    title: "Order notifications",
    description:
      "Get notified when QR orders come in. Accept, modify, or route orders to the kitchen instantly.",
  },
  {
    title: "Shift handover",
    description:
      "Transfer tables and open orders between shifts. Incoming staff see exactly what's in progress.",
  },
];

const managerFeatures = [
  {
    title: "Revenue dashboard",
    description:
      "See sales by channel: dine-in, takeout, delivery, QR. Compare performance across shifts, days, and weeks.",
  },
  {
    title: "Refund and dispute management",
    description:
      "Process refunds and track disputes from one dashboard. No separate processor login required.",
  },
  {
    title: "Staff performance insights",
    description:
      "Track table turnover times, average check sizes, and tip metrics by staff member. Identify your top performers.",
  },
  {
    title: "Menu performance analytics",
    description:
      "See which items drive the most revenue. Adjust menu strategy based on real payment data, not guesswork.",
  },
];

const faqs = [
  {
    question: "How do QR table payments work with HestaPay?",
    answer:
      "You place a QR code on each table. Guests scan it with their phone camera, browse your menu, place orders, and pay — all in their browser. Orders route to your kitchen display or printer automatically. No app download required for guests.",
  },
  {
    question: "Does HestaPay replace my existing POS?",
    answer:
      "HestaPay is a payment orchestration layer that works alongside your POS. It connects your POS, payment processing, online orders, and delivery platforms into one flow. You keep the tools you use — HestaPay makes them work together.",
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
      "HestaPay is designed to integrate with delivery platforms, routing delivery orders and payouts through the same payment layer as dine-in and takeout. Specific integrations will be confirmed during early access.",
  },
];

export default function RestaurantsPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Restaurants"
        heading="Payment software built for restaurant workflows"
        subtitle="From table-side QR to staff tips — HestaPay brings ordering, payments, and reporting into one platform designed for how restaurants actually operate."
      />

      {/* 2. Restaurant pain points */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Restaurant payments are more complex than a POS can handle"
            subtitle="Most payment systems weren't built for the pace and complexity of restaurant service."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {painPoints.map((point) => (
              <Card key={point.title}>
                <h3 className="text-base font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {point.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Table-side QR workflow */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Table-side QR that guests love"
            subtitle="Give guests control of ordering and payment from their phone. Your staff focus on hospitality, not running payments."
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
                </svg>
                <p className="mt-4 text-sm text-primary font-medium">
                  Table QR payment flow
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Link
                  href="/qr-payments"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  See QR in Action →
                </Link>
              </div>
            </div>
            <FeatureList features={qrFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. Tips and shift visibility */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Tips and shifts, handled"
            subtitle="Digital tipping, split checks, and shift-based reporting — so tips are fast for guests and accurate for staff."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={tipFeatures} />
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg
                  className="h-12 w-12 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Tip reporting dashboard
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Staff PWA section */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Staff app built for the floor"
            subtitle="Give your team mobile tools for tables, tips, and shift management — no terminal required."
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Staff PWA
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
            <FeatureList features={staffPWAFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Manager dashboard section */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Manager dashboard for restaurant operators"
            subtitle="Revenue insights, staff performance, and menu analytics — the visibility you need to run a better restaurant."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={managerFeatures} />
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg
                  className="h-12 w-12 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Restaurant dashboard
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/merchant-dashboard"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Explore the Dashboard →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. Security/trust section */}
      <SecuritySection variant="restaurant" />

      {/* 8. Restaurant FAQ preview */}
      <PageFAQ
        context="Restaurants"
        heading="Restaurant payment questions"
        faqs={faqs}
      />

      {/* 9. Final CTA */}
      <CTASection variant="restaurant" />
    </>
  );
}