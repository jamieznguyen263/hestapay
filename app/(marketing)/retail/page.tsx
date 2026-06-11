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
  PAGE_TITLES["/retail"],
  PAGE_DESCRIPTIONS["/retail"]
);

const painPoints = [
  {
    title: "Disconnected in-store and remote payments",
    description:
      "Counter payments, phone orders, and online sales run on separate systems. Staff toggle between terminals and platforms — and reconciliation takes hours.",
  },
  {
    title: "Slow counter checkout",
    description:
      "Customers wait in line while terminals process. Every delay is a lost opportunity to serve the next customer or make an additional sale.",
  },
  {
    title: "Returns and refunds are manual",
    description:
      "Processing a return means switching to a processor portal, looking up the transaction, and manually issuing a refund — separate from your POS and reporting.",
  },
];

const paymentFeatures = [
  {
    title: "QR payments at the counter",
    description:
      "Display a QR code at checkout. Customers scan and pay from their phone — designed for fast, low-friction counter service. No terminal handling required.",
  },
  {
    title: "Payment links for phone orders",
    description:
      "When a customer calls to place an order, send a payment link via text. They pay in seconds — no card numbers read over the phone.",
  },
  {
    title: "Unified transaction visibility",
    description:
      "See counter payments, phone orders, and payment links in one transaction feed. No separate reports for different payment channels.",
  },
  {
    title: "Future POS-adjacent integrations",
    description:
      "HestaPay is designed as a payment orchestration layer. As the platform grows, integrations with POS and inventory systems will connect payment data to the tools you already use.",
  },
];

const refundFeatures = [
  {
    title: "One-click refunds from the dashboard",
    description:
      "Look up any transaction and process a full or partial refund directly. No separate processor login, no manual reconciliation.",
  },
  {
    title: "Returns and refunds visibility",
    description:
      "Track refunds alongside transactions. See refund rates by store, staff member, or payment method. Identify patterns and reduce return friction.",
  },
  {
    title: "Void before settlement",
    description:
      "Made a mistake on a counter transaction? Void it before settlement — directly from the dashboard. No phone calls to your processor.",
  },
  {
    title: "Refund history and audit trail",
    description:
      "Every refund is logged with the original transaction, timestamp, and staff attribution. Full accountability for every return processed.",
  },
];

const multiLocationFeatures = [
  {
    title: "Multi-location payment visibility",
    description:
      "See payment data across all your store locations from one dashboard. No separate logins, no switching between systems.",
  },
  {
    title: "Location-level transaction views",
    description:
      "Drill into individual store performance. Compare transaction volumes, average tickets, and refund rates by location.",
  },
  {
    title: "Staff access by location",
    description:
      "Assign staff to specific stores. Cashiers see only their store's transactions. Regional managers view across locations. Owners see everything.",
  },
  {
    title: "Consistent payment experience",
    description:
      "Every location uses the same payment tools — QR codes, payment links, and checkout flow. Customers get the same experience no matter which store they visit.",
  },
];

const faqs = [
  {
    question: "Does HestaPay work with my current POS?",
    answer:
      "HestaPay is a payment orchestration layer. It works alongside your POS to manage payments, refunds, and reporting. Future integrations with POS and inventory platforms are planned as the product grows.",
  },
  {
    question: "How do QR payments work at the counter?",
    answer:
      "Display a QR code at your checkout counter. Customers scan it with their phone, see the amount, and pay in seconds. Staff get instant payment confirmation — no terminal, no card handling.",
  },
  {
    question: "Can I process refunds from the dashboard?",
    answer:
      "Yes. Find any transaction in the dashboard click refund, and choose full or partial amount. The refund is processed through your payment infrastructure partner. The original transaction and refund are linked in your reporting.",
  },
  {
    question: "Can I see payments across multiple store locations?",
    answer:
      "Yes. The merchant dashboard supports multi-location views. See payment data for individual stores or aggregated across all locations. Staff permissions can be scoped to specific locations.",
  },
  {
    question: "How do payment links work for phone orders?",
    answer:
      "Create a payment link from your dashboard — set the amount and an optional reference. Send it to the customer via text. They open the link on their phone and pay. You see the confirmation in your dashboard instantly.",
  },
];

export default function RetailPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Retail"
        heading="Payment software built for retail stores"
        subtitle="Unify counter checkout, phone orders, and payment links in one platform. Accept payments, process refunds, and manage multiple locations — without switching systems."
      />

      {/* 2. Pain points */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Retail payments shouldn't be this fragmented"
            subtitle="Counter terminals, phone orders, and returns each pull you into a different system. HestaPay brings them together."
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

      {/* 3. In-store QR / remote payment */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="One system for counter and remote payments"
            subtitle="QR at the counter. Payment links for phone orders. One transaction feed for everything."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <div>
              <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg className="h-12 w-12 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
                </svg>
                <p className="mt-4 text-sm text-primary font-medium">
                  Counter QR payment
                </p>
                <p className="mt-1 text-xs text-muted">Screenshot coming soon</p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Link href="/qr-payments" className="text-sm font-medium text-primary hover:underline">
                  See QR in Action →
                </Link>
                <Link href="/payment-links" className="text-sm font-medium text-primary hover:underline">
                  Explore Payment Links →
                </Link>
              </div>
            </div>
            <FeatureList features={paymentFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. Refund and return handling */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Returns and refunds, handled in the same place"
            subtitle="Process refunds from the same dashboard where you view transactions. No switching to a processor portal."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={refundFeatures} />
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg className="h-12 w-12 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">Refund management view</p>
                <p className="mt-1 text-xs text-muted">Screenshot coming soon</p>
              </div>
              <div className="mt-6 text-center">
                <Link href="/merchant-dashboard" className="text-sm font-medium text-primary hover:underline">
                  Explore the Dashboard →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Multi-location visibility */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Multi-location payment visibility"
            subtitle="See payment data across all your stores. Compare performance, manage staff access, and keep the payment experience consistent."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg className="h-12 w-12 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">Multi-location retail dashboard</p>
                <p className="mt-1 text-xs text-muted">Screenshot coming soon</p>
              </div>
            </div>
            <FeatureList features={multiLocationFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Security/trust */}
      <SecuritySection variant="default" />

      {/* 7. FAQ */}
      <PageFAQ context="Retail" heading="Retail payment questions" faqs={faqs} />

      {/* 8. Final CTA */}
      <CTASection variant="retail" />
    </>
  );
}