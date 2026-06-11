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

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/qr-payments"],
  PAGE_DESCRIPTIONS["/qr-payments"]
);

const whyFeatures = [
  {
    title: "Designed for fast, low-friction checkout",
    description:
      "QR payments let customers scan and pay in seconds — no terminal, no card swipe, no app download. Designed to reduce checkout friction without extra hardware.",
  },
  {
    title: "Works with the devices you already have",
    description:
      "Display a QR code on a table tent, at the counter, or on a screen. Customers scan with their phone camera. No new hardware, no dongles, no terminals.",
  },
  {
    title: "Order and pay in one flow",
    description:
      "For restaurants and cafes: QR codes can include your menu. Customers browse, order, and pay — all from their phone. Orders route to your kitchen automatically.",
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
      "The customer scans the QR code with their phone camera. They see the payment amount (or menu), complete the transaction, and receive a digital receipt.",
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
      "Point your phone camera at the QR code. Tap the notification — no app to download, no account to create.",
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
      "A business displays a QR code — on a table tent, at the counter, or on a screen. The customer scans it with their phone camera, sees the payment amount (or menu), and completes the transaction in their browser. Payment confirmation appears instantly in the staff app and dashboard.",
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
    question: "Can I include a menu with the QR code?",
    answer:
      "Yes. For restaurants and cafes, QR codes can link to a digital menu. Customers browse, order, and pay in one flow. Orders route directly to your kitchen display or printer.",
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
      "Table-side QR ordering and payment. Guests scan, order, and pay from their phone. Faster service, higher table turnover.",
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
      "Include a QR code on invoices or at the job site. Customers scan and pay before you leave — no invoice chasing.",
    href: "/home-services",
    linkLabel: "See for home services",
    icon: HomeIcon,
  },
];

export default function QRPaymentsPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="QR Payments"
        heading="Accept touch-free QR payments anywhere"
        subtitle="Reduce checkout friction without extra hardware. Customers scan, pay, and receive a receipt — all from their phone."
      />

      {/* 2. Why QR payments */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="QR payments built for local business speed"
            subtitle="Faster than manual card entry, more flexible than fixed terminals. QR payments meet customers where they are — at the table, at the counter, on the go."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={whyFeatures} />
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
                  QR payment flow
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Staff flow */}
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

      {/* 4. Customer flow */}
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

      {/* 5. Tips / receipts / visibility */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Tips, receipts, and transaction visibility"
            subtitle="Every QR payment includes automatic tip tracking, digital receipts, and real-time visibility for staff and managers."
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Customer receipt view
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
            <FeatureList features={receiptFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Vertical use cases */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="QR payments across every vertical"
            subtitle="From table-side dining to in-home service payments — QR codes work wherever your customers are."
            className="mx-auto text-center"
          />
          <div className="mt-12">
            <UseCaseCards useCases={useCases} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. FAQ */}
      <PageFAQ
        context="QR Payments"
        heading="QR payment questions"
        faqs={faqs}
      />

      {/* 8. Final CTA */}
      <CTASection variant="qrPayments" />
    </>
  );
}