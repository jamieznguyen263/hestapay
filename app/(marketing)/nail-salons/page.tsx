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
  PAGE_TITLES["/nail-salons"],
  PAGE_DESCRIPTIONS["/nail-salons"]
);

const painPoints = [
  {
    title: "No-shows cost you real money",
    description:
      "Every empty appointment slot is lost revenue. Without deposits, salons absorb the full cost of no-shows -- and most payment systems don't solve this.",
  },
  {
    title: "Deposit management is manual and messy",
    description:
      "Collecting deposits over the phone, tracking who paid, refunding cancellations -- it's time your front desk should spend on clients, not payment admin.",
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
      "Send a payment link via text or email when a client books. They pay the deposit in seconds -- no app, no phone call, no manual entry.",
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
      "Set your own cancellation windows and refund rules. Full refund, partial refund, or deposit forfeited -- you decide what works for your salon.",
  },
];

const checkoutFeatures = [
  {
    title: "Clean, modern checkout flow",
    description:
      "Clients see services, products, and tip options on one screen. The experience matches the quality of your salon -- not a clunky card terminal.",
  },
  {
    title: "Service and product bundling",
    description:
      "Ring up a gel set and retail cuticle oil in one transaction. Track service revenue and product sales separately in your reports.",
  },
  {
    title: "Digital tipping made natural",
    description:
      "Suggested tip percentages appear at checkout. Clients choose what feels right -- no awkwardness, no math. Tips are tracked per staff member automatically.",
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
      "Generate commission and tip reports ready for payroll. Export or integrate with your payroll system -- no manual spreadsheet work.",
  },
];

const multiLocationFeatures = [
  {
    title: "Unified dashboard across locations",
    description:
      "See revenue and staff performance across all your salon locations from one dashboard. No separate logins, no switching accounts.",
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
    title: "Consistent checkout experience",
    description:
      "Payment and checkout experience is identical across all locations. Clients pay deposits and check out the same way -- no matter which location they visit.",
  },
];

const faqs = [
  {
    question: "How do deposits work with HestaPay?",
    answer:
      "When a client books through your existing scheduling tool, you send them a payment link for the deposit. They pay in seconds. The deposit is held and applied to their total at checkout. If they cancel within your policy window, you can refund the deposit with one click.",
  },
  {
    question: "Does HestaPay replace my booking software?",
    answer:
      "No. HestaPay is a payment orchestration layer. It works alongside your existing scheduling tools to handle deposits, payments, and checkout. You keep your scheduling tools -- HestaPay connects the payment side.",
  },
  {
    question: "How are commissions calculated?",
    answer:
      "You define commission rules by service and staff member -- percentage-based or flat rate. HestaPay automatically calculates commissions from completed transactions. Staff see their earnings in real time, and you get payout-ready reports.",
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
      <PageHero
        vertical="Nail Salons"
        heading="Payment software built for salon workflows"
        subtitle="From booking deposits to commission tracking -- HestaPay connects every payment touchpoint your salon relies on."
      />

      {/* Pain points */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="No-shows and manual deposits hurt your bottom line"
            subtitle="Salons lose thousands to missed appointments and spend hours managing payments manually."
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

      {/* Payment links for deposits */}
      <SectionWrapper alternate ambient>
        <Container>
          <SectionHeading
            title="Deposits that protect your revenue"
            subtitle="Payment links make deposits effortless for clients and automatic for your front desk."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Deposit payment link" accent>
              <DepositLinkVisual />
            </MockupFrame>
            <div>
              <FeatureList features={depositFeatures} />
              <div className="mt-6">
                <Link
                  href="/payment-links"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  Explore Payment Links &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Beautiful client checkout */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Checkout your clients deserve"
            subtitle="A modern, elegant checkout experience that reflects the quality of your salon -- not a clunky card terminal."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={checkoutFeatures} />
            <MockupFrame label="Client checkout experience">
              <SalonCheckoutVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Staff/commission visibility */}
      <SectionWrapper alternate ambient>
        <Container>
          <SectionHeading
            title="Commission visibility your staff will love"
            subtitle="Real-time earnings tracking so your stylists always know where they stand -- and you eliminate payroll calculation errors."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Staff commission view">
              <CommissionVisual />
            </MockupFrame>
            <div>
              <FeatureList features={commissionFeatures} />
              <div className="mt-6 text-center lg:text-left">
                <Link
                  href="/merchant-dashboard"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  Explore the Dashboard &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Multi-location salon visibility */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Grow across locations without losing visibility"
            subtitle="One dashboard for every salon. Compare performance, track staff across locations, and keep the checkout experience consistent."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={multiLocationFeatures} />
            <MockupFrame label="Multi-location salon dashboard">
              <MultiLocationVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      <SecuritySection variant="salon" />
      <PageFAQ context="Nail Salons" heading="Salon payment questions" faqs={faqs} />
      <CTASection variant="salon" />
    </>
  );
}

function DepositLinkVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">Deposit Link</span>
      </div>
      <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[8px] text-muted uppercase">Appointment deposit</p>
          <span className="text-[9px] text-primary font-medium">Pending</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-bold text-foreground">
          <span className="text-muted">$</span>
          {"\u2014"}
        </div>
        <div className="flex gap-2">
          {["Send via SMS", "Copy link"].map((opt) => (
            <div key={opt} className="flex-1 rounded-md border border-border bg-background p-1.5 text-center text-[7px] text-muted">
              {opt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SalonCheckoutVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">Checkout</span>
      </div>
      <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
        <div className="space-y-1.5">
          {["Gel manicure", "Cuticle oil"].map((item) => (
            <div key={item} className="flex items-center justify-between text-[9px]">
              <span className="text-foreground">{item}</span>
              <span className="text-muted">{"\u2014"}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-2 flex items-center justify-between text-[9px]">
          <span className="font-medium text-foreground">Total</span>
          <span className="font-bold text-primary">{"\u2014"}</span>
        </div>
        <div className="flex gap-2">
          {["15%", "18%", "20%"].map((tip) => (
            <span key={tip} className="rounded-md border border-border px-2 py-1 text-[8px] text-muted">{tip}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CommissionVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">My Earnings</span>
      </div>
      <div className="space-y-2">
        {[
          { service: "Gel set", commission: "\u2014" },
          { service: "Pedicure", commission: "\u2014" },
          { service: "Nail art", commission: "\u2014" },
        ].map((item) => (
          <div key={item.service} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2">
            <span className="text-[9px] text-foreground">{item.service}</span>
            <span className="text-[9px] font-medium text-primary">{item.commission}</span>
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

function MultiLocationVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">All Locations</span>
      </div>
      <div className="space-y-2">
        {["Downtown", "Midtown", "Uptown"].map((loc) => (
          <div key={loc} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2">
            <span className="text-[9px] text-foreground">{loc}</span>
            <span className="text-[9px] text-muted">{"\u2014"}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-2 flex items-center justify-between text-[9px]">
        <span className="font-medium text-foreground">Total revenue</span>
        <span className="font-bold text-primary">{"\u2014"}</span>
      </div>
    </div>
  );
}