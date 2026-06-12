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
import Link from "next/link";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/payment-links"],
  PAGE_DESCRIPTIONS["/payment-links"]
);

const solveFeatures = [
  {
    title: "No terminal, no hardware, no code",
    description:
      "Create a payment link from your dashboard or mobile device. Share via text, email, or messaging app.",
  },
  {
    title: "Collect payments remotely",
    description:
      "When you can't swipe a card in person, send a link. Perfect for deposits, phone orders, and service invoices.",
  },
  {
    title: "Reduce manual payment admin",
    description:
      "Stop reading card numbers over the phone. Each link tracks its own status -- paid, pending, or expired.",
  },
  {
    title: "Works for every vertical",
    description:
      "Restaurants, salons, retail, and home services. One tool for every remote payment need.",
  },
];

const checkoutFeatures = [
  {
    title: "Clean, simple checkout page",
    description:
      "Your customer sees the amount, an optional message, and a payment form. No distractions, no upsells.",
  },
  {
    title: "Works on any device",
    description:
      "Responsive and fast. Phone, tablet, or desktop -- the experience is seamless.",
  },
  {
    title: "Branded with your business",
    description:
      "Payment links display your business name. The experience feels like yours.",
  },
];

const trackFeatures = [
  {
    title: "Real-time payment status",
    description:
      "See which links are paid, pending, or expired at a glance. No checking bank statements.",
  },
  {
    title: "Refund from the dashboard",
    description:
      "If a customer cancels, refund the transaction in one click. No separate processor login.",
  },
  {
    title: "Export for reconciliation",
    description:
      "Export payment link transactions for accounting. CSV export from the merchant dashboard.",
  },
];

const faqs = [
  {
    question: "How do payment links work?",
    answer:
      "Create a payment link from the HestaPay dashboard -- set the amount and optionally a description. Share the link with your customer via text, email, or any messaging app. They open the link, enter their payment details on a secure checkout page, and the payment is processed. You see the confirmation in your dashboard instantly.",
  },
  {
    question: "Do my customers need to download an app?",
    answer:
      "No. The payment link opens in the customer's phone browser. They enter their card details on a secure, responsive checkout page. No app download, no account creation, no friction.",
  },
  {
    question: "What can I use payment links for?",
    answer:
      "Common use cases include: booking deposits, takeout phone orders, service invoices, splitting bills among friends, and collecting payments when the customer isn't in person.",
  },
  {
    question: "How long is a payment link valid?",
    answer:
      "You can set expiration on payment links. Links can be configured to expire after a set time period, or you can manually deactivate a link at any time.",
  },
  {
    question: "Is there a limit on payment link amounts?",
    answer:
      "Payment links work for any transaction amount. Whether it's a small deposit or a large service invoice, payment links handle it.",
  },
];

/* ---------- Product fragments ---------- */

function LinkCreateFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">
          Create Link
        </span>
      </div>
      <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
        <p className="text-[8px] text-muted uppercase">Amount</p>
        <div className="flex items-center gap-1 text-sm font-bold text-foreground">
          <span className="text-muted">$</span>
          {"\u2014"}
        </div>
        <div className="flex gap-2">
          {["Copy link", "SMS", "Email"].map((opt) => (
            <div
              key={opt}
              className="flex-1 rounded-md border border-border bg-background p-1.5 text-center text-[7px] text-muted"
            >
              {opt}
            </div>
          ))}
        </div>
        <div className="rounded-md bg-primary py-1.5 text-center text-[9px] font-medium text-white">
          Create Link
        </div>
      </div>
    </div>
  );
}

function CheckoutFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">
          HestaPay
        </span>
      </div>
      <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
        <p className="text-[8px] text-muted uppercase">Payment amount</p>
        <p className="text-sm font-bold text-foreground">{"\u2014"}</p>
        <div className="rounded-md border border-border bg-background p-2">
          <p className="text-[7px] text-muted uppercase">Card number</p>
          <div className="mt-1 h-2 w-3/4 rounded bg-muted/10" />
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-md border border-border bg-background p-2">
            <p className="text-[7px] text-muted uppercase">Expiry</p>
            <div className="mt-1 h-2 w-1/2 rounded bg-muted/10" />
          </div>
          <div className="flex-1 rounded-md border border-border bg-background p-2">
            <p className="text-[7px] text-muted uppercase">CVC</p>
            <div className="mt-1 h-2 w-1/3 rounded bg-muted/10" />
          </div>
        </div>
        <div className="rounded-md bg-primary py-2 text-center text-[9px] font-medium text-white">
          Pay {"\u2014"}
        </div>
      </div>
    </div>
  );
}

function StatusFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">Links</span>
      </div>
      <div className="space-y-2">
        {[
          { label: "Payment link", status: "Paid", color: "bg-emerald-400/70" },
          {
            label: "Payment link",
            status: "Pending",
            color: "bg-amber-400/70",
          },
          { label: "Payment link", status: "Expired", color: "bg-muted/30" },
        ].map((link) => (
          <div
            key={link.label + link.status}
            className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${link.color}`} />
              <span className="text-[9px] text-foreground">{link.label}</span>
            </div>
            <span className="text-[9px] text-muted">{link.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">Flow</span>
      </div>
      {/* Horizontal pipeline: Create > Send > Pay > Track */}
      <div className="flex items-center gap-1">
        {[
          { step: "Create", color: "bg-primary/20" },
          { step: "Send", color: "bg-primary/15" },
          { step: "Pay", color: "bg-primary/80" },
          { step: "Track", color: "bg-emerald-400/60" },
        ].map((item, i) => (
          <div key={item.step} className="flex items-center gap-1">
            <div className="flex-1 rounded-lg border border-border bg-surface px-3 py-3 text-center">
              <div className={`mx-auto h-5 w-5 rounded ${item.color}`} />
              <p className="mt-1.5 text-[9px] font-semibold text-foreground">
                {item.step}
              </p>
            </div>
            {i < 3 && (
              <svg
                className="h-3 w-3 shrink-0 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[9px] text-muted px-1">
        <span>Set amount, share</span>
        <span>Customer pays</span>
        <span>Dashboard confirms</span>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function PaymentLinksPage() {
  return (
    <>
      <PageHero
        vertical="Payment Links"
        heading="Create and share payment links in seconds"
        subtitle="Collect deposits, invoices, and remote payments without a terminal, app, or code. Send a link. Get paid."
      />

      {/* Flow overview */}
      <SectionWrapper ambient className="bg-gradient-to-b from-surface via-surface/50 to-background">
        <Container>
          <div className="grid gap-12 items-center lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                Payment Links
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Collect payments without being there
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Payment links replace manual card entry, phone calls, and
                invoice chasing with a simple link you can share anywhere.
              </p>
              <div className="mt-8">
                <FeatureList features={solveFeatures} />
              </div>
            </div>
            <div className="lg:col-span-7">
              <MockupFrame label="Payment link creation" accent>
                <LinkCreateFragment />
              </MockupFrame>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Flow canvas: pipeline */}
      <SectionWrapper>
        <Container>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-xl">
            A single link, from creation to confirmation
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-xl">
            Each link flows through the same pipeline -- created, shared, paid,
            and tracked in one system.
          </p>

          <div className="mt-12">
            <MockupFrame label="Link flow">
              <FlowFragment />
            </MockupFrame>
          </div>

          <div className="mt-8 text-center">
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
        </Container>
      </SectionWrapper>

      {/* Checkout experience */}
      <SectionWrapper alternate>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Customer checkout" accent>
              <CheckoutFragment />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Checkout
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                A checkout experience customers trust
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Clean, simple, and secure -- the payment page your customers see
                when they open your link.
              </p>
              <div className="mt-8">
                <FeatureList features={checkoutFeatures} />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Track status */}
      <SectionWrapper ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Tracking
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Know exactly what&rsquo;s been paid
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Track every payment link from creation to completion. No more
                chasing or guessing.
              </p>
              <div className="mt-8">
                <FeatureList features={trackFeatures} />
              </div>
            </div>
            <MockupFrame label="Payment tracking">
              <StatusFragment />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      <PageFAQ
        context="Payment Links"
        heading="Payment link questions"
        faqs={faqs}
      />
      <CTASection variant="paymentLinks" />
    </>
  );
}