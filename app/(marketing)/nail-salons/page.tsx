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
  PAGE_TITLES["/nail-salons"],
  PAGE_DESCRIPTIONS["/nail-salons"]
);

const painPoints = [
  {
    title: "No-shows cost you real money",
    description:
      "Every empty appointment slot is lost revenue. Without deposits, salons absorb the full cost of no-shows — and most payment systems don't solve this.",
  },
  {
    title: "Deposit management is manual and messy",
    description:
      "Collecting deposits over the phone, tracking who paid, refunding cancellations — it's time your front desk should spend on clients, not payment admin.",
  },
  {
    title: "Commission tracking is complicated",
    description:
      "When staff earn different rates on different services plus tips, calculating payouts takes hours. Errors create tension and eat into trust.",
  },
];

const depositFeatures = [
  {
    title: "Payment links for deposits",
    description:
      "Send a payment link via text or email when a client books. They pay the deposit in seconds — no app, no phone call, no manual entry.",
  },
  {
    title: "Automatic deposit capture",
    description:
      "Deposits are captured at booking and held until the appointment. If the client shows up, the deposit applies to their total. If they cancel within your policy window, refund the deposit in one click.",
  },
  {
    title: "No-show protection",
    description:
      "When appointments require a deposit, no-shows drop. Clients who have paid are committed. And when a no-show does happen, you keep the deposit.",
  },
  {
    title: "Flexible cancellation policies",
    description:
      "Set your own cancellation windows and refund rules. Full refund, partial refund, or deposit forfeited — you decide what works for your salon.",
  },
];

const checkoutFeatures = [
  {
    title: "Clean, modern checkout flow",
    description:
      "Clients see services, products, and tip options on one screen. The experience matches the quality of your salon — not a clunky card terminal.",
  },
  {
    title: "Service and product bundling",
    description:
      "Ring up a gel set and retail cuticle oil in one transaction. Track service revenue and product sales separately in your reports.",
  },
  {
    title: "Digital tipping made natural",
    description:
      "Suggested tip percentages appear at checkout. Clients choose what feels right — no awkwardness, no math. Tips are tracked per staff member automatically.",
  },
  {
    title: "Client payment history",
    description:
      "Access past transactions, tips, and service preferences for each client. Greet them by name, reference their last service, and make checkout personal.",
  },
];

const commissionFeatures = [
  {
    title: "Commission rules by service and staff",
    description:
      "Set percentage or flat-rate commissions per service and per staff member. HestaPay calculates payouts automatically based on completed transactions.",
  },
  {
    title: "Real-time earnings visibility",
    description:
      "Staff see their commissions and tips accumulate in real time through the HestaPay staff app. No more waiting for end-of-week calculations.",
  },
  {
    title: "Tip tracking by staff member",
    description:
      "Digital tips are automatically attributed to the staff member who provided the service. Cash tips can be logged for complete tip reporting.",
  },
  {
    title: "Payout-ready reports",
    description:
      "Generate commission and tip reports ready for payroll. Export or integrate with your payroll system — no manual spreadsheet work.",
  },
];

const multiLocationFeatures = [
  {
    title: "Unified dashboard across locations",
    description:
      "See revenue, appointments, and staff performance across all your salon locations from one dashboard. No separate logins, no switching accounts.",
  },
  {
    title: "Location-level performance",
    description:
      "Compare revenue, average ticket, and tip rates by location. Identify top-performing salons and locations that need attention.",
  },
  {
    title: "Staff performance across locations",
    description:
      "Track individual staff metrics even if they work across multiple locations. Commission and tip data follow the stylist, not the salon.",
  },
  {
    title: "Consistent client experience",
    description:
      "Payment and checkout experience is identical across all locations. Clients book, pay deposits, and check out the same way — no matter which location they visit.",
  },
];

const faqs = [
  {
    question: "How do deposits work with HestaPay?",
    answer:
      "When a client books, your booking system (or the HestaPay platform) sends them a payment link for the deposit. They pay in seconds. The deposit is held and applied to their total at checkout. If they cancel within your policy window, you can refund the deposit with one click.",
  },
  {
    question: "Does HestaPay replace my booking software?",
    answer:
      "No. HestaPay is a payment orchestration layer. It works alongside your booking platform to handle deposits, payments, and checkout. You keep your booking system — HestaPay connects the payment side.",
  },
  {
    question: "How are commissions calculated?",
    answer:
      "You define commission rules by service and staff member — percentage-based or flat rate. HestaPay automatically calculates commissions from completed transactions. Staff see their earnings in real time, and you get payout-ready reports.",
  },
  {
    question: "Can staff see their commissions and tips?",
    answer:
      "Yes. The HestaPay staff app shows real-time commission and tip earnings. Staff can track what they've earned during a shift, day, or pay period. No surprises on payday.",
  },
  {
    question: "Does HestaPay work for multi-location salons?",
    answer:
      "Yes. The merchant dashboard provides unified visibility across all locations. Compare performance, track staff across locations, and manage payment operations from a single login.",
  },
];

export default function NailSalonsPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Nail Salons"
        heading="Payment software built for salon workflows"
        subtitle="From booking deposits to commission tracking — HestaPay connects every payment touchpoint your salon relies on."
      />

      {/* 2. No-show and deposit pain points */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="No-shows and manual deposits hurt your bottom line"
            subtitle="Salons lose thousands to missed appointments and spend hours managing payments manually."
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

      {/* 3. Payment links for deposits */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Deposits that protect your revenue"
            subtitle="Payment links make deposits effortless for clients and automatic for your front desk."
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <p className="mt-4 text-sm text-primary font-medium">
                  Deposit payment link
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Link
                  href="/payment-links"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Explore Payment Links →
                </Link>
              </div>
            </div>
            <FeatureList features={depositFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. Beautiful client checkout */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Checkout your clients deserve"
            subtitle="A modern, elegant checkout experience that reflects the quality of your salon — not a clunky card terminal."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={checkoutFeatures} />
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
                  Client checkout experience
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Staff/commission visibility */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Commission visibility your staff will love"
            subtitle="Real-time earnings tracking so your stylists always know where they stand — and you eliminate payroll calculation errors."
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Staff commission view
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
            <FeatureList features={commissionFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Multi-location salon visibility */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Grow across locations without losing visibility"
            subtitle="One dashboard for every salon. Compare performance, track staff across locations, and keep the client experience consistent."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={multiLocationFeatures} />
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg
                  className="h-12 w-12 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Multi-location salon dashboard
                </p>
                <p className="mt-1 text-xs text-muted">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. Security/trust section */}
      <SecuritySection variant="salon" />

      {/* 8. Salon FAQ preview */}
      <PageFAQ
        context="Nail Salons"
        heading="Salon payment questions"
        faqs={faqs}
      />

      {/* 9. Final CTA */}
      <CTASection variant="salon" />
    </>
  );
}