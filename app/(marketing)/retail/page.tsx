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
import MockupFrame from "@/components/marketing/mockup-frame";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/retail"],
  PAGE_DESCRIPTIONS["/retail"]
);

const painPoints = [
  {
    title: "Disconnected in-store and remote payments",
    description:
      "Counter payments, phone orders, and online sales run on separate systems. Staff toggle between terminals and platforms -- and reconciliation takes hours.",
  },
  {
    title: "Slow counter checkout",
    description:
      "Customers wait in line while terminals process. Every delay is a lost opportunity to serve the next customer or make an additional sale.",
  },
  {
    title: "Returns and refunds are manual",
    description:
      "Processing a return means switching to a processor portal, looking up the transaction, and manually issuing a refund -- separate from your existing systems and reporting.",
  },
];

const paymentFeatures = [
  {
    title: "QR payments at the counter",
    description:
      "Display a QR code at checkout. Customers scan and pay from their phone -- designed for fast, low-friction counter service. No terminal handling required.",
  },
  {
    title: "Payment links for phone orders",
    description:
      "When a customer calls to place an order, send a payment link via text. They pay in seconds -- no card numbers read over the phone.",
  },
  {
    title: "Unified transaction visibility",
    description:
      "See counter payments, phone orders, and payment links in one transaction feed. No separate reports for different payment channels.",
  },
  {
    title: "Connect to your existing tools",
    description:
      "HestaPay is a payment orchestration layer. It works alongside your current POS and inventory tools. Future integrations will deepen the connection as the platform grows.",
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
      "Made a mistake on a counter transaction? Void it before settlement -- directly from the dashboard. No phone calls to your processor.",
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
      "Every location uses the same payment tools -- QR codes, payment links, and checkout flow. Customers get the same experience no matter which store they visit.",
  },
];

const faqs = [
  {
    question: "Does HestaPay work with my current POS?",
    answer:
      "HestaPay is a payment orchestration layer. It works alongside your existing POS and inventory systems to manage payments, refunds, and reporting. Deeper integrations with POS and inventory platforms are planned as the product grows.",
  },
  {
    question: "How do QR payments work at the counter?",
    answer:
      "Display a QR code at your checkout counter. Customers scan it with their phone, see the amount, and pay in seconds. Staff get instant payment confirmation -- no terminal, no card handling.",
  },
  {
    question: "Can I process refunds from the dashboard?",
    answer:
      "Yes. Find any transaction in the dashboard, click refund, and choose full or partial amount. The refund is processed through your payment infrastructure partner. The original transaction and refund are linked in your reporting.",
  },
  {
    question: "Can I see payments across multiple store locations?",
    answer:
      "Yes. The merchant dashboard supports multi-location views. See payment data for individual stores or aggregated across all locations. Staff permissions can be scoped to specific locations.",
  },
  {
    question: "How do payment links work for phone orders?",
    answer:
      "Create a payment link from your dashboard -- set the amount and an optional reference. Send it to the customer via text. They open the link on their phone and pay. You see the confirmation in your dashboard instantly.",
  },
];

export default function RetailPage() {
  return (
    <>
      <PageHero
        vertical="Retail"
        heading="Payment software built for retail stores"
        subtitle="Unify counter checkout, phone orders, and payment links in one platform. Accept payments, process refunds, and manage multiple locations -- without switching systems."
      />

      {/* Pain points */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Retail payments shouldn't be this fragmented"
            subtitle="Counter terminals, phone orders, and returns each pull you into a different system. HestaPay brings them together."
            centered
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

      {/* In-store QR / remote payment */}
      <SectionWrapper alternate ambient>
        <Container>
          <SectionHeading
            title="One system for counter and remote payments"
            subtitle="QR at the counter. Payment links for phone orders. One transaction feed for everything."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Counter QR payment" accent>
              <CounterQRVisual />
            </MockupFrame>
            <div>
              <FeatureList features={paymentFeatures} />
              <div className="mt-6 flex items-center gap-4">
                <Link href="/qr-payments" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  See QR in Action &rarr;
                </Link>
                <Link href="/payment-links" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Explore Payment Links &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Refund and return handling */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Returns and refunds, handled in the same place"
            subtitle="Process refunds from the same dashboard where you view transactions. No switching to a processor portal."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={refundFeatures} />
            <div>
              <MockupFrame label="Refund management view">
                <RefundVisual />
              </MockupFrame>
              <div className="mt-6 text-center">
                <Link href="/merchant-dashboard" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Explore the Dashboard &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Multi-location visibility */}
      <SectionWrapper alternate ambient>
        <Container>
          <SectionHeading
            title="Multi-location payment visibility"
            subtitle="See payment data across all your stores. Compare performance, manage staff access, and keep the payment experience consistent."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Multi-location retail dashboard">
              <MultiStoreVisual />
            </MockupFrame>
            <FeatureList features={multiLocationFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      <SecuritySection variant="default" />
      <PageFAQ context="Retail" heading="Retail payment questions" faqs={faqs} />
      <CTASection variant="retail" />
    </>
  );
}

function CounterQRVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">Counter QR</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-5 gap-px shrink-0">
          {[
            [1,1,1,1,1],
            [1,0,0,0,1],
            [1,0,1,0,1],
            [1,0,0,0,1],
            [1,1,1,1,1],
          ].map((row, ri) =>
            row.map((cell, ci) => (
              <div key={`${ri}-${ci}`} className="h-2 w-2 rounded-[1px]" style={{ backgroundColor: cell ? "var(--color-foreground)" : "transparent" }} />
            ))
          )}
        </div>
        <div className="flex-1 rounded-md border border-border bg-surface p-2">
          <p className="text-[8px] text-muted uppercase">Amount</p>
          <p className="text-xs font-bold text-primary">{"\u2014"}</p>
        </div>
      </div>
      <div className="text-center text-[8px] text-muted pt-1">Scan to pay -- no terminal needed</div>
    </div>
  );
}

function RefundVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">Refunds</span>
      </div>
      <div className="space-y-2">
        {["Card payment", "Phone order", "QR payment"].map((tx) => (
          <div key={tx} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2">
            <span className="text-[9px] text-foreground">{tx}</span>
            <span className="text-[9px] text-primary font-medium">Refund</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-2 text-center text-[8px] text-muted">
        All refunds logged and linked to original transactions
      </div>
    </div>
  );
}

function MultiStoreVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">All Stores</span>
      </div>
      <div className="space-y-2">
        {["Main Street", "Oak Avenue", "Pine Plaza"].map((store) => (
          <div key={store} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2">
            <span className="text-[9px] text-foreground">{store}</span>
            <span className="text-[9px] text-muted">{"\u2014"}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-2 flex items-center justify-between text-[9px]">
        <span className="font-medium text-foreground">Today's total</span>
        <span className="font-bold text-primary">{"\u2014"}</span>
      </div>
    </div>
  );
}