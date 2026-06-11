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

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/qr-payments"],
  PAGE_DESCRIPTIONS["/qr-payments"]
);

const whyFeatures = [
  {
    title: "Designed for fast, low-friction checkout",
    description:
      "QR payments let customers scan and pay in seconds - no terminal, no card swipe, no app download. Designed to reduce checkout friction without extra hardware.",
  },
  {
    title: "Works with the devices you already have",
    description:
      "Display a QR code on a table tent, at the counter, or on a screen. Customers scan with their phone camera. No new hardware, no dongles, no terminals.",
  },
  {
    title: "Scan, pay, and get a receipt in one flow",
    description:
      "Customers scan the QR code, see the payment amount, add a tip, and receive a digital receipt - all in their phone browser. No separate steps, no friction.",
  },
  {
    title: "Real-time confirmation",
    description:
      "Staff see payment confirmations instantly. No waiting for terminals to process, no wondering if the payment went through.",
  },
];

const staffSteps = [
  {
    number: 1,
    title: "Generate a QR code",
    description:
      "From the HestaPay dashboard or staff app, generate a QR code for a table, counter, or service. Print it or display it on a screen.",
  },
  {
    number: 2,
    title: "Customer scans and pays",
    description:
      "The customer scans the QR code with their phone camera. They see the payment amount, add a tip, complete the transaction, and receive a digital receipt.",
  },
  {
    number: 3,
    title: "Get confirmation",
    description:
      "Payment confirmation appears instantly in the staff app and dashboard. No manual verification needed.",
  },
];

const customerSteps = [
  {
    number: 1,
    title: "Scan with your phone",
    description:
      "Point your phone camera at the QR code. Tap the notification - no app to download, no account to create.",
  },
  {
    number: 2,
    title: "Review, tip, and pay",
    description:
      "See the amount, choose a tip, and pay with your preferred payment method. The whole flow takes seconds.",
  },
  {
    number: 3,
    title: "Get your receipt",
    description:
      "A digital receipt appears on screen. Optionally enter an email or phone number to receive a copy.",
  },
];

const receiptFeatures = [
  {
    title: "Digital receipts by default",
    description:
      "Customers receive a digital receipt after every QR payment. Optionally add email or SMS delivery for their records.",
  },
  {
    title: "Tip tracking built in",
    description:
      "Tips added during QR checkout are automatically attributed to the staff member and shift. No manual tip logging required.",
  },
  {
    title: "Transaction visibility for staff",
    description:
      "Staff see completed QR payments in real time through the HestaPay staff app. Know which tables have paid, which are still open.",
  },
  {
    title: "Manager oversight",
    description:
      "All QR transactions appear in the merchant dashboard. Filter by table, staff, time, or payment method.",
  },
];

const faqs = [
  {
    question: "How do QR payments work?",
    answer:
      "A business displays a QR code - on a table tent, at the counter, or on a screen. The customer scans it with their phone camera, sees the payment amount, adds a tip, and completes the transaction in their browser. Payment confirmation appears instantly in the staff app and dashboard.",
  },
  {
    question: "Do customers need to download an app?",
    answer:
      "No. The QR code opens in the customer's phone browser. No app download, no account creation, no friction. They scan, pay, and receive a digital receipt.",
  },
  {
    question: "What equipment do I need?",
    answer:
      "QR codes can be printed on table tents, receipts, or displayed on a screen. No specialized hardware required. If your business already has a printer, you have everything you need to start using QR payments.",
  },
  {
    question: "Can QR codes display additional information?",
    answer:
      "Yes. QR codes can include a payment description, service details, or an invoice reference. The payment page shows exactly what the customer is paying for before they complete the transaction.",
  },
  {
    question: "How do tips work with QR payments?",
    answer:
      "Customers see suggested tip percentages during checkout. Tips are automatically attributed to the staff member and shift. Staff can view their QR tips in real time through the HestaPay staff app.",
  },
];

function RestaurantIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function SalonIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6zM7 10v4m10-4v4M10 7h4m-4 10h4" />
    </svg>
  );
}

function RetailIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
    </svg>
  );
}

const useCases = [
  {
    title: "Restaurants",
    description:
      "Table-side QR payment. Guests scan and pay from their phone without waiting for a terminal. Faster checkout, higher table turnover.",
    href: "/restaurants",
    linkLabel: "See for restaurants",
    icon: RestaurantIcon,
  },
  {
    title: "Nail Salons",
    description:
      "QR code at checkout for touch-free payment. Clients scan, add a tip, and pay in seconds while staff prepare for the next appointment.",
    href: "/nail-salons",
    linkLabel: "See for salons",
    icon: SalonIcon,
  },
  {
    title: "Retail",
    description:
      "QR code at the counter or on receipts. Customers scan and pay without handing over a card or touching a terminal.",
    href: "/retail",
    linkLabel: "See for retail",
    icon: RetailIcon,
  },
  {
    title: "Home Services",
    description:
      "Include a QR code on invoices or at the job site. Customers scan and pay before you leave - no invoice chasing.",
    href: "/home-services",
    linkLabel: "See for home services",
    icon: HomeIcon,
  },
];

export default function QRPaymentsPage() {
  return (
    <>
      <PageHero
        vertical="QR Payments"
        heading="Accept touch-free QR payments anywhere"
        subtitle="Reduce checkout friction without extra hardware. Customers scan, pay, and receive a receipt - all from their phone."
      />

      {/* Why QR payments */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="QR payments built for local business speed"
            subtitle="Faster than manual card entry, more flexible than fixed terminals. QR payments meet customers where they are - at the table, at the counter, on the go."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={whyFeatures} />
            <MockupFrame label="QR payment flow">
              <QRPaymentVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Staff flow */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="How staff use QR payments"
            subtitle="Simple, fast, and integrated into the HestaPay staff app."
            className="mx-auto text-center"
          />
          <div className="mt-12">
            <StepFlow steps={staffSteps} />
          </div>
        </Container>
      </SectionWrapper>

      {/* Customer flow */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="What your customers experience"
            subtitle="A clean, three-step flow that feels natural and takes seconds."
            className="mx-auto text-center"
          />
          <div className="mt-12">
            <StepFlow steps={customerSteps} />
          </div>
        </Container>
      </SectionWrapper>

      {/* Tips / receipts / visibility */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Tips, receipts, and transaction visibility"
            subtitle="Every QR payment includes automatic tip tracking, digital receipts, and real-time visibility for staff and managers."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Customer receipt">
              <ReceiptVisual />
            </MockupFrame>
            <FeatureList features={receiptFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* Vertical use cases */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="QR payments across every vertical"
            subtitle="From table-side dining to in-home service payments - QR codes work wherever your customers are."
            className="mx-auto text-center"
          />
          <div className="mt-12">
            <UseCaseCards useCases={useCases} />
          </div>
        </Container>
      </SectionWrapper>

      <PageFAQ context="QR Payments" heading="QR payment questions" faqs={faqs} />
      <CTASection variant="qrPayments" />
    </>
  );
}

function QRPaymentVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <div className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">QR Payment</span>
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
              <div
                key={`${ri}-${ci}`}
                className="h-2 w-2 rounded-[1px]"
                style={{ backgroundColor: cell ? "var(--color-foreground)" : "transparent" }}
              />
            ))
          )}
        </div>
        <div className="flex-1 space-y-2">
          <div className="rounded-md border border-border bg-surface p-2">
            <p className="text-[8px] text-muted uppercase">Amount</p>
            <p className="text-xs font-bold text-primary">{"\u2014"}</p>
          </div>
          <div className="flex gap-2">
            {["15%", "18%", "20%"].map((tip) => (
              <span key={tip} className="rounded-md border border-border px-2 py-1 text-[8px] text-muted">{tip}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReceiptVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">Receipt</span>
      </div>
      <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
        <div className="flex items-center justify-between text-[9px]">
          <span className="text-muted">Amount</span>
          <span className="font-medium text-foreground">{"\u2014"}</span>
        </div>
        <div className="flex items-center justify-between text-[9px]">
          <span className="text-muted">Tip</span>
          <span className="font-medium text-foreground">{"\u2014"}</span>
        </div>
        <div className="flex items-center justify-between text-[9px] border-t border-border pt-2">
          <span className="font-medium text-foreground">Total</span>
          <span className="font-bold text-primary">{"\u2014"}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-md bg-primary/5 px-3 py-2">
        <svg className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-[9px] font-medium text-primary">Completed</span>
      </div>
    </div>
  );
}