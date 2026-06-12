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
  PAGE_TITLES["/retail"],
  PAGE_DESCRIPTIONS["/retail"]
);

const paymentFeatures = [
  {
    title: "QR payments at the counter",
    description:
      "Display a QR code at checkout. Customers scan and pay from their phone -- no terminal handling required.",
  },
  {
    title: "Payment links for phone orders",
    description:
      "When a customer calls to place an order, send a payment link via text. They pay in seconds.",
  },
  {
    title: "Unified transaction visibility",
    description:
      "See counter payments, phone orders, and payment links in one transaction feed.",
  },
  {
    title: "Connect to your existing tools",
    description:
      "HestaPay is a payment orchestration layer. It works alongside your current POS and inventory tools.",
  },
];

const refundFeatures = [
  {
    title: "One-click refunds from the dashboard",
    description:
      "Look up any transaction and process a full or partial refund directly. No separate processor login.",
  },
  {
    title: "Returns and refunds visibility",
    description:
      "Track refunds alongside transactions. See refund rates by store, staff member, or payment method.",
  },
  {
    title: "Void before settlement",
    description:
      "Made a mistake on a counter transaction? Void it before settlement -- directly from the dashboard.",
  },
  {
    title: "Refund history and audit trail",
    description:
      "Every refund is logged with the original transaction, timestamp, and staff attribution. Full accountability.",
  },
];

const multiLocationFeatures = [
  {
    title: "Multi-location payment visibility",
    description:
      "See payment data across all your store locations from one dashboard. No separate logins.",
  },
  {
    title: "Location-level transaction views",
    description:
      "Drill into individual store performance. Compare transaction volumes, average tickets, and refund rates.",
  },
  {
    title: "Staff access by location",
    description:
      "Assign staff to specific stores. Cashiers see only their store's transactions. Regional managers view across locations.",
  },
  {
    title: "Consistent payment experience",
    description:
      "Every location uses the same payment tools. Customers get the same experience no matter which store they visit.",
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

/* ---------- Product fragments ---------- */

function CounterQRVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">
          Counter QR
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
        <div className="flex-1 rounded-md border border-border bg-surface p-2">
          <p className="text-[8px] text-muted uppercase">Amount</p>
          <p className="text-xs font-bold text-primary">{"\u2014"}</p>
        </div>
      </div>
      <div className="text-center text-[8px] text-muted pt-1">
        Scan to pay -- no terminal needed
      </div>
    </div>
  );
}

function RefundVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">
          Refunds
        </span>
      </div>
      <div className="space-y-2">
        {[
          { color: "bg-emerald-400/70", type: "Card payment", status: "Refunding" },
          { color: "bg-amber-400/70", type: "Phone order", status: "Completed" },
          { color: "bg-blue-400/70", type: "QR payment", status: "Settled" },
        ].map((tx) => (
          <div
            key={tx.type}
            className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${tx.color}`} />
              <span className="text-[9px] text-foreground">{tx.type}</span>
            </div>
            <span className="text-[9px] text-muted">{tx.status}</span>
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
        <span className="text-[10px] font-medium text-foreground">
          All Stores
        </span>
      </div>
      <div className="space-y-2">
        {["Main Street", "Oak Avenue", "Pine Plaza"].map((store) => (
          <div
            key={store}
            className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2"
          >
            <span className="text-[9px] text-foreground">{store}</span>
            <span className="text-[9px] text-muted">{"\u2014"}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-2 flex items-center justify-between text-[9px]">
        <span className="font-medium text-foreground">Today&rsquo;s total</span>
        <span className="font-bold text-primary">{"\u2014"}</span>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

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
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            The problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-2xl">
            Retail payments shouldn&rsquo;t be this fragmented
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
            Counter terminals, phone orders, and returns each pull you into a
            different system. HestaPay brings them together through one
            orchestration layer.
          </p>
        </Container>
      </SectionWrapper>

      {/* In-store QR / remote payment */}
      <SectionWrapper alternate ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Counter QR payment" accent>
              <CounterQRVisual />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Payments
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                One system for counter and remote payments
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                QR at the counter. Payment links for phone orders. One
                transaction feed for everything.
              </p>
              <div className="mt-8">
                <FeatureList features={paymentFeatures} />
              </div>
              <div className="mt-6 flex items-center gap-4 flex-wrap">
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
                <Link
                  href="/payment-links"
                  className="text-sm font-medium text-primary hover:text-primary-dark inline-flex items-center gap-1 group transition-colors duration-200"
                >
                  Explore Payment Links
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

      {/* Refund and return handling */}
      <SectionWrapper>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Refunds
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Returns and refunds, handled in the same dashboard
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Process refunds from the same dashboard where you view
                transactions. No switching to a processor portal.
              </p>
              <div className="mt-8">
                <FeatureList features={refundFeatures} />
              </div>
              <div className="mt-6">
                <Link
                  href="/merchant-dashboard"
                  className="text-sm font-medium text-primary hover:text-primary-dark inline-flex items-center gap-1 group transition-colors duration-200"
                >
                  Explore the Dashboard
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
            <MockupFrame label="Refund management view">
              <RefundVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Multi-location visibility */}
      <SectionWrapper alternate ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Multi-location retail dashboard">
              <MultiStoreVisual />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Multi-location
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Multi-location payment visibility
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                See payment data across all your stores. Compare performance,
                manage staff access, and keep the payment experience consistent.
              </p>
              <div className="mt-8">
                <FeatureList features={multiLocationFeatures} />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SecuritySection variant="default" />
      <PageFAQ
        context="Retail"
        heading="Retail payment questions"
        faqs={faqs}
      />
      <CTASection variant="retail" />
    </>
  );
}