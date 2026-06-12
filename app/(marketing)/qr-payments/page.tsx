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

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/qr-payments"],
  PAGE_DESCRIPTIONS["/qr-payments"]
);

const whyFeatures = [
  {
    title: "Fast, low-friction checkout",
    description:
      "QR payments let customers scan and pay in seconds -- no terminal, no card swipe, no app download.",
  },
  {
    title: "Works with devices you already have",
    description:
      "Display a QR code on a table tent, at the counter, or on a screen. No new hardware required.",
  },
  {
    title: "Scan, pay, and get a receipt in one flow",
    description:
      "Customers scan, see the amount, add a tip, and receive a digital receipt -- all in their phone browser.",
  },
  {
    title: "Real-time confirmation",
    description:
      "Staff see payment confirmations instantly. No wondering if the payment went through.",
  },
];

const receiptFeatures = [
  {
    title: "Digital receipts by default",
    description:
      "Customers receive a digital receipt after every QR payment. Optional email or SMS delivery.",
  },
  {
    title: "Tip tracking built in",
    description:
      "Tips are automatically attributed to the staff member and shift. No manual tip logging.",
  },
  {
    title: "Transaction visibility for staff",
    description:
      "Staff see completed QR payments in real time. Know which tables have paid.",
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
      "A business displays a QR code -- on a table tent, at the counter, or on a screen. The customer scans it with their phone camera, sees the payment amount, adds a tip, and completes the transaction in their browser. Payment confirmation appears instantly in the staff app and dashboard.",
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

/* ---------- Product fragments ---------- */

function QRPaymentFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">
          QR Payment
        </span>
      </div>
      <div className="flex items-start gap-4">
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
          <div className="rounded-md border border-border bg-surface p-2">
            <p className="text-[8px] text-muted uppercase">Amount</p>
            <p className="text-xs font-bold text-primary">{"\u2014"}</p>
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
        </div>
      </div>
    </div>
  );
}

function CoordinatedFlowFragment() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">
          QR system
        </span>
      </div>
      {/* Three lanes: Staff | Core | Customer */}
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
        {/* Staff lane */}
        <div className="space-y-2">
          <p className="text-[9px] font-semibold text-muted uppercase tracking-wider text-center">
            Staff side
          </p>
          <div className="space-y-2">
            {["Generate QR", "Display code", "Confirm instantly"].map(
              (step) => (
                <div
                  key={step}
                  className="rounded-md border border-border bg-surface px-3 py-2 text-center"
                >
                  <p className="text-[9px] text-foreground">{step}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Core spine */}
        <div className="flex flex-col items-center gap-4 pt-6">
          <div className="h-10 w-px bg-border" />
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10">
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <div className="h-10 w-px bg-border" />
        </div>

        {/* Customer lane */}
        <div className="space-y-2">
          <p className="text-[9px] font-semibold text-muted uppercase tracking-wider text-center">
            Customer side
          </p>
          <div className="space-y-2">
            {[
              "Scan with phone",
              "Add tip, pay",
              "Digital receipt",
            ].map((step) => (
              <div
                key={step}
                className="rounded-md border border-border bg-surface px-3 py-2 text-center"
              >
                <p className="text-[9px] text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReceiptFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">
          Receipt
        </span>
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
      <div className="flex items-center gap-2 rounded-md bg-accent-surface px-3 py-2">
        <svg
          className="h-3 w-3 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-[9px] font-medium text-primary">Completed</span>
      </div>
    </div>
  );
}

function VisibilityFragment() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">
          Visibility
        </span>
      </div>
      <div className="space-y-2">
        {[
          { color: "bg-emerald-400/70", table: "Table 4", status: "Paid" },
          { color: "bg-blue-400/70", table: "Table 9", status: "Paid" },
          { color: "bg-amber-400/70", table: "Table 2", status: "Open" },
        ].map((item) => (
          <div
            key={item.table}
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2"
          >
            <span className={`h-2 w-2 rounded-full ${item.color}`} />
            <span className="text-[9px] text-foreground">{item.table}</span>
            <span className="ml-auto text-[9px] text-muted">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function QRPaymentsPage() {
  return (
    <>
      <PageHero
        vertical="QR Payments"
        heading="Accept touch-free QR payments anywhere"
        subtitle="Reduce checkout friction without extra hardware. Customers scan, pay, and receive a receipt -- all from their phone."
      />

      {/* Why QR: overview */}
      <SectionWrapper ambient className="bg-gradient-to-b from-surface via-surface/50 to-background">
        <Container>
          <div className="grid gap-12 items-center lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                QR Payments
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                QR payments built for local business speed
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Faster than manual card entry, more flexible than fixed
                terminals. QR payments meet customers where they are.
              </p>
              <div className="mt-8">
                <FeatureList features={whyFeatures} />
              </div>
            </div>
            <div className="lg:col-span-7">
              <MockupFrame label="QR payment flow" accent>
                <QRPaymentFragment />
              </MockupFrame>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Coordinated QR system */}
      <SectionWrapper>
        <Container>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-xl">
            One QR payment system, two sides
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-xl">
            Staff generate and display. Customers scan and pay. A single
            orchestration layer connects both sides in real time.
          </p>

          <div className="mt-12">
            <MockupFrame label="Coordinated flow">
              <CoordinatedFlowFragment />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Tips, receipts, visibility */}
      <SectionWrapper alternate>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Customer receipt">
              <ReceiptFragment />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Tips & receipts
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Tips, receipts, and transaction visibility
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Every QR payment includes automatic tip tracking, digital
                receipts, and real-time visibility for staff and managers.
              </p>
              <div className="mt-8">
                <FeatureList features={receiptFeatures} />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Operator visibility */}
      <SectionWrapper ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Operator view
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Know which tables have paid
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Real-time table status so staff know which checks are settled
                and which are still open.
              </p>
              <div className="mt-8">
                <FeatureList
                  features={[
                    {
                      title: "Table status at a glance",
                      description:
                        "See which tables have paid, which are open, and which need attention.",
                    },
                    {
                      title: "Tips attributed automatically",
                      description:
                        "QR tips flow to the right staff member without manual entry.",
                    },
                    {
                      title: "Full dashboard integration",
                      description:
                        "All QR transactions feed into the merchant dashboard for reporting.",
                    },
                  ]}
                />
              </div>
            </div>
            <MockupFrame label="Operator visibility">
              <VisibilityFragment />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Industries: adaptive system panel */}
      <SectionWrapper alternate>
        <Container>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Industries
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-xl">
            One QR system, adapted to four payment flows
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-xl">
            The same QR orchestration layer, configured for how each industry
            actually uses touch-free payments.
          </p>

          <div className="mt-12 rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-y divide-border">
              {[
                {
                  label: "Restaurants",
                  desc: "Table-side QR. Guests scan and pay without waiting for a terminal.",
                  tags: ["Table QR", "Split checks", "Tips"],
                  fragment: (
                    <div className="h-6 w-6 shrink-0 rounded border-2 border-border bg-background grid grid-cols-2 grid-rows-2 gap-px p-0.5">
                      <div className="bg-foreground/60 rounded-[1px]" />
                      <div />
                      <div className="bg-foreground/60 rounded-[1px]" />
                      <div className="bg-foreground/60 rounded-[1px]" />
                    </div>
                  ),
                },
                {
                  label: "Nail Salons",
                  desc: "QR at checkout. Clients add a tip and pay in seconds between appointments.",
                  tags: ["Deposits", "Checkout", "Tips"],
                  fragment: (
                    <div className="h-6 w-8 shrink-0 rounded bg-primary/10 flex items-center justify-center text-[7px] font-bold text-primary">
                      QR
                    </div>
                  ),
                },
                {
                  label: "Retail",
                  desc: "QR at the counter. Pay without handing over a card or touching a terminal.",
                  tags: ["Counter", "Refunds", "Visibility"],
                  fragment: (
                    <div className="h-6 w-6 shrink-0 rounded bg-background border border-border flex items-center justify-center">
                      <svg
                        className="h-3.5 w-3.5 text-muted"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </div>
                  ),
                },
                {
                  label: "Home Services",
                  desc: "QR on invoices. Customers pay before you leave the site -- no chasing.",
                  tags: ["On-site", "Field pay", "Daily close"],
                  fragment: (
                    <div className="rounded-2xl rounded-tl-sm bg-primary/10 px-2 py-0.5">
                      <div className="h-1 w-8 rounded bg-primary/30" />
                    </div>
                  ),
                },
              ].map((v) => (
                <div key={v.label} className="p-5 hover:bg-surface/50 transition-colors">
                  <h3 className="text-sm font-bold text-foreground mb-3">
                    {v.label}
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">{v.fragment}</div>
                    <p className="text-xs text-muted leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-full bg-surface border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <PageFAQ
        context="QR Payments"
        heading="QR payment questions"
        faqs={faqs}
      />
      <CTASection variant="qrPayments" />
    </>
  );
}