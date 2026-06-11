import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FeatureList from "@/components/marketing/feature-list";
import StepFlow from "@/components/marketing/step-flow";
import UseCaseCards from "@/components/marketing/use-case-cards";
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
      "Create a payment link from your dashboard or mobile device. Share it via text, email, or messaging app. The customer pays in seconds &mdash; no app download required.",
  },
  {
    title: "Collect payments remotely",
    description:
      "When you can't swipe a card in person, send a link. Perfect for deposits, phone orders, service invoices, and any situation where the customer isn't standing in front of you.",
  },
  {
    title: "Reduce manual payment admin",
    description:
      "Stop reading card numbers over the phone, chasing invoices, or manually logging who paid. Each link tracks its own status &mdash; paid, pending, or expired.",
  },
  {
    title: "Works for every vertical",
    description:
      "Restaurants send links for takeout orders. Salons send links for booking deposits. Home service providers send links for service invoices. Retailers send links for phone orders. One tool, every use case.",
  },
];

const createSteps = [
  {
    number: 1,
    title: "Create a link",
    description:
      "Name the payment, set the amount, and optionally add a description or reference. Takes less than 30 seconds.",
  },
  {
    number: 2,
    title: "Share the link",
    description:
      "Send via text, email, WhatsApp, or copy the link anywhere. The customer opens it on their phone &mdash; no app, no account.",
  },
  {
    number: 3,
    title: "Customer pays",
    description:
      "They enter their payment details on a clean, secure checkout page. Payment is processed through trusted infrastructure partners.",
  },
  {
    number: 4,
    title: "You get paid",
    description:
      "Payment confirmation appears in your dashboard instantly. Funds settle through your existing processor relationship.",
  },
];

const checkoutFeatures = [
  {
    title: "Clean, simple checkout page",
    description:
      "Your customer sees the amount, an optional message, and a payment form. No distractions, no upsells, no confusion.",
  },
  {
    title: "Works on any device",
    description:
      "The checkout page is responsive and fast. Whether the customer is on a phone, tablet, or desktop, the experience is seamless.",
  },
  {
    title: "Optional custom message",
    description:
      "Include a note with your payment link &mdash; the service provided, the invoice reference, or a thank-you message.",
  },
  {
    title: "Branded with your business",
    description:
      "Payment links display your business name. The experience feels like yours, not a third-party tool.",
  },
];

const trackFeatures = [
  {
    title: "Real-time payment status",
    description:
      "See which links are paid, pending, or expired at a glance. No more checking bank statements to confirm payments.",
  },
  {
    title: "Transaction history",
    description:
      "Every payment link and its outcome is logged. Search by date, amount, customer, or status.",
  },
  {
    title: "Refund from the dashboard",
    description:
      "If a customer cancels, refund the payment link transaction in one click. No separate processor login required.",
  },
  {
    title: "Export for reconciliation",
    description:
      "Export payment link transactions for accounting or reconciliation. CSV export available from the merchant dashboard.",
  },
];

const faqs = [
  {
    question: "How do payment links work?",
    answer:
      "You create a payment link from the HestaPay dashboard &mdash; set the amount and optionally a description. Share the link with your customer via text, email, or any messaging app. They open the link, enter their payment details on a secure checkout page, and the payment is processed. You see the confirmation in your dashboard instantly.",
  },
  {
    question: "Do my customers need to download an app?",
    answer:
      "No. The payment link opens in the customer's phone browser. They enter their card details on a secure, responsive checkout page. No app download, no account creation, no friction.",
  },
  {
    question: "What can I use payment links for?",
    answer:
      "Common use cases include: booking deposits, takeout phone orders, service invoices, splitting bills among friends, collecting payments when the customer isn't in person, and any situation where you need to get paid remotely.",
  },
  {
    question: "How long is a payment link valid?",
    answer:
      "You can set expiration on payment links. Links can be configured to expire after a set time period, or you can manually deactivate a link at any time from your dashboard.",
  },
  {
    question: "Is there a limit on payment link amounts?",
    answer:
      "Payment links work for any transaction amount. HestaPay is designed for local businesses &mdash; whether it's a small deposit or a large service invoice, payment links handle it.",
  },
];

function DepositIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function InvoiceIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function RemoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function ShareIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  );
}

const useCases = [
  {
    title: "Booking deposits",
    description:
      "Salons and service businesses send a payment link when a client books. Secure the appointment and reduce no-shows.",
    href: "/nail-salons",
    linkLabel: "See for salons",
    icon: DepositIcon,
  },
  {
    title: "Phone orders",
    description:
      "Restaurants and retailers send a payment link for takeout or phone orders. No card numbers read over the phone.",
    href: "/restaurants",
    linkLabel: "See for restaurants",
    icon: RemoteIcon,
  },
  {
    title: "Service invoices",
    description:
      "Home service providers send a payment link with the invoice amount. Get paid on-site or after the job.",
    href: "/home-services",
    linkLabel: "See for home services",
    icon: InvoiceIcon,
  },
  {
    title: "SMS and email pay",
    description:
      "Send payment links via text or email. Customers pay from their phone in seconds &mdash; no app, no login.",
    icon: ShareIcon,
  },
];

export default function PaymentLinksPage() {
  return (
    <>
      <PageHero
        vertical="Payment Links"
        heading="Create and share payment links in seconds"
        subtitle="Collect deposits, invoices, and remote payments without a terminal, app, or code. Send a link. Get paid."
      />

      {/* What payment links solve */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Collect payments without being there"
            subtitle="Payment links replace manual card entry, phone calls, and invoice chasing with a simple link you can share anywhere."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={solveFeatures} />
            <MockupFrame label="Payment link creation" accent>
              <LinkCreationVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Use cases */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="One link, every use case"
            subtitle="Payment links work across industries and payment scenarios. Here's how different businesses use them."
            centered
          />
          <div className="mt-12">
            <UseCaseCards useCases={useCases} />
          </div>
        </Container>
      </SectionWrapper>

      {/* Create link workflow */}
      <SectionWrapper ambient>
        <Container>
          <SectionHeading
            title="How payment links work"
            subtitle="Four simple steps from creation to payment confirmation."
            centered
          />
          <div className="mt-12">
            <StepFlow steps={createSteps} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/merchant-dashboard"
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
            >
              Explore the Dashboard &rarr;
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      {/* Customer checkout experience */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="A checkout experience your customers will trust"
            subtitle="Clean, simple, and secure &mdash; the payment page your customers see when they open your link."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Customer checkout" accent>
              <CheckoutVisual />
            </MockupFrame>
            <FeatureList features={checkoutFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* Track payment status */}
      <SectionWrapper ambient>
        <Container>
          <SectionHeading
            title="Know exactly what's been paid"
            subtitle="Track every payment link from creation to completion. No more chasing or guessing."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={trackFeatures} />
            <MockupFrame label="Payment tracking">
              <StatusVisual />
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

function LinkCreationVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">Create Link</span>
      </div>
      <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
        <p className="text-[8px] text-muted uppercase">Amount</p>
        <div className="flex items-center gap-1 text-sm font-bold text-foreground">
          <span className="text-muted">$</span>
          {"\u2014"}
        </div>
        <div className="flex gap-2">
          {["Copy link", "SMS", "Email", "QR"].map((opt) => (
            <div key={opt} className="flex-1 rounded-md border border-border bg-background p-1.5 text-center text-[7px] text-muted">
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

function CheckoutVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">HestaPay</span>
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

function StatusVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">Links</span>
      </div>
      <div className="space-y-2">
        {[
          { label: "Payment link", status: "Paid" },
          { label: "Payment link", status: "Pending" },
          { label: "Payment link", status: "Expired" },
        ].map((link) => (
          <div key={link.label + link.status} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="flex h-1.5 w-1.5 rounded-full bg-muted" />
              <span className="text-[9px] text-foreground">{link.label}</span>
            </div>
            <span className="text-[9px] text-muted">{link.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}