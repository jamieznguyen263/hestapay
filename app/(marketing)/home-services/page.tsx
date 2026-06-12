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
  PAGE_TITLES["/home-services"],
  PAGE_DESCRIPTIONS["/home-services"]
);

const smsFeatures = [
  {
    title: "Send a payment link after the job",
    description:
      "Complete the work, send a payment link via text before you leave. The customer pays in seconds from their phone.",
  },
  {
    title: "Get paid before you drive away",
    description:
      "When customers pay via SMS link on-site, you see the confirmation instantly.",
  },
  {
    title: "No card numbers over the phone",
    description:
      "Stop reading credit card numbers aloud. The customer enters their own payment details on a secure checkout page.",
  },
  {
    title: "Works for any service amount",
    description:
      "Whether it's a small repair or a large installation, payment links handle any amount with an itemized description.",
  },
];

const qrFeatures = [
  {
    title: "QR code on your invoice or estimate",
    description:
      "Print a QR code on your service invoice. When the job is done, the customer scans and pays.",
  },
  {
    title: "On-site payment completion",
    description:
      "Hand the customer the invoice with QR code. They scan, review the total, and pay. You get confirmation before you pack up.",
  },
  {
    title: "Digital receipts automatically",
    description:
      "After every QR payment, the customer receives a digital receipt. No paper receipts to print.",
  },
  {
    title: "Reduce payment friction",
    description:
      "Designed for fast, low-friction checkout. Customers scan and pay in seconds -- from job completion to payment confirmed.",
  },
];

const revenueFeatures = [
  {
    title: "See what each tech collected today",
    description:
      "Dashboard shows payments by team member, by job, in real time. Know who collected what before anyone returns to the office.",
  },
  {
    title: "Daily field revenue at a glance",
    description:
      "One view shows today's payments across all jobs and team members. No waiting for end-of-day reports.",
  },
  {
    title: "Track payment methods",
    description:
      "See the split between payment links, QR payments, and other methods. Understand how your customers prefer to pay.",
  },
  {
    title: "Export for accounting",
    description:
      "Export daily payment data for your accounting system. No manual entry from paper tickets.",
  },
];

const teamFeatures = [
  {
    title: "Team member payment visibility",
    description:
      "See which team members are collecting payments on which jobs. Track individual performance without micromanaging.",
  },
  {
    title: "Staff app access",
    description:
      "Field staff can access the HestaPay staff app from their phone. Send payment links, view transactions, check status on the go.",
  },
  {
    title: "Tip tracking by technician",
    description:
      "When customers add tips through payment links or QR, tips are attributed to the right team member automatically.",
  },
  {
    title: "Permission-based visibility",
    description:
      "Technicians see their own jobs and payments. Managers see the full team. Office staff see everything for reconciliation.",
  },
];

const faqs = [
  {
    question: "How do I get paid on-site with HestaPay?",
    answer:
      "After completing a job, send the customer a payment link via text or have them scan a QR code on your invoice. They pay from their phone in seconds. You see the confirmation instantly in the staff app or dashboard.",
  },
  {
    question: "Does HestaPay replace my invoicing or dispatch software?",
    answer:
      "No. HestaPay is a payment orchestration layer -- it handles payment collection and visibility. It works alongside your existing invoicing, scheduling, or dispatch tools. HestaPay focuses on getting you paid, not managing your full field operations.",
  },
  {
    question: "Can my field team send payment links from their phones?",
    answer:
      "Yes. The HestaPay staff app runs on any phone. Team members can create and send payment links directly from the job site. No need to call the office or return to a terminal.",
  },
  {
    question: "How do I see what my team collected today?",
    answer:
      "The merchant dashboard shows real-time payment data by team member and job. Open the dashboard from any device and see today's collections, pending payments, and completed transactions.",
  },
  {
    question: "Do customers need an app to pay?",
    answer:
      "No. Whether you send a payment link or they scan a QR code, the customer pays in their phone browser. No app download, no account creation, no friction.",
  },
];

/* ---------- Product fragments ---------- */

function SMSLinkVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">
          SMS Pay
        </span>
      </div>
      <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
        <p className="text-[8px] text-muted uppercase">Service completed</p>
        <div className="space-y-1.5">
          {["HVAC repair", "Drain cleaning", "AC tune-up"].map((job) => (
            <div
              key={job}
              className="flex items-center justify-between text-[9px]"
            >
              <span className="text-foreground">{job}</span>
              <span className="text-muted">{"\u2014"}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-2 flex items-center justify-between text-[9px]">
          <span className="font-medium text-foreground">Total</span>
          <span className="font-bold text-primary">{"\u2014"}</span>
        </div>
        <div className="rounded-md bg-primary py-1.5 text-center text-[9px] font-medium text-white">
          Send Payment Link
        </div>
      </div>
    </div>
  );
}

function OnSiteQRVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">
          Invoice QR
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
        <div className="flex-1 space-y-2">
          <p className="text-[9px] text-foreground font-medium">
            Invoice #{"\u2014"}
          </p>
          <div className="rounded-md border border-border bg-surface p-2">
            <p className="text-[8px] text-muted uppercase">Amount</p>
            <p className="text-xs font-bold text-primary">{"\u2014"}</p>
          </div>
        </div>
      </div>
      <p className="text-center text-[8px] text-muted">
        Scan with phone camera to pay
      </p>
    </div>
  );
}

function RevenueVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">Today</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Collected", "Pending", "Jobs"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-surface p-2 text-center"
          >
            <p className="text-[8px] text-muted uppercase">{label}</p>
            <p className="mt-1 text-xs font-bold text-primary">{"\u2014"}</p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-12">
        {[
          { h: 30 },
          { h: 55 },
          { h: 40 },
          { h: 70 },
          { h: 35 },
          { h: 60 },
          { h: 45 },
        ].map((d, i) => (
          <div key={i} className="flex-1">
            <div
              className="w-full rounded-t bg-primary/10"
              style={{ height: `${d.h}%` }}
            />
          </div>
        ))}
      </div>
      <p className="text-center text-[8px] text-muted">
        Weekly trend {"\u2014"}
      </p>
    </div>
  );
}

function TeamVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="text-[10px] font-medium text-foreground">Team</span>
      </div>
      <div className="space-y-2">
        {["Mike R.", "Sarah L.", "David K."].map((name) => (
          <div
            key={name}
            className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2"
          >
            <span className="text-[9px] text-foreground">{name}</span>
            <span className="text-[9px] text-muted">{"\u2014"}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-2 flex items-center justify-between text-[9px]">
        <span className="font-medium text-foreground">Team total</span>
        <span className="font-bold text-primary">{"\u2014"}</span>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function HomeServicesPage() {
  return (
    <>
      <PageHero
        vertical="Home Services"
        heading="Payment software built for the field"
        subtitle="Send payment links after every job. Accept QR payments on-site. Track daily field revenue and team payments -- all from one dashboard."
      />

      {/* Pain points */}
      <SectionWrapper>
        <Container>
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            The problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-w-2xl">
            Getting paid shouldn&rsquo;t be the hardest part of the job
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
            Field service providers spend too much time on payment collection --
            checks mailed later, invoices that take weeks to settle, and no
            real-time visibility into what was collected.
          </p>
        </Container>
      </SectionWrapper>

      {/* SMS payment links */}
      <SectionWrapper alternate ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="SMS payment link" accent>
              <SMSLinkVisual />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                SMS payments
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Get paid by text before you leave the job site
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Send a payment link via SMS. The customer pays in seconds. You
                leave knowing the payment is already processing.
              </p>
              <div className="mt-8">
                <FeatureList features={smsFeatures} />
              </div>
              <div className="mt-6">
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

      {/* On-site QR payment */}
      <SectionWrapper>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                QR on invoice
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                QR payments on your invoice
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Print a QR code on your estimate or invoice. The customer scans
                and pays -- before you pack up your tools.
              </p>
              <div className="mt-8">
                <FeatureList features={qrFeatures} />
              </div>
              <div className="mt-6">
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
              </div>
            </div>
            <MockupFrame label="On-site QR payment">
              <OnSiteQRVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      {/* Daily field revenue visibility */}
      <SectionWrapper alternate ambient>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Field revenue dashboard">
              <RevenueVisual />
            </MockupFrame>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Revenue
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                See daily field revenue in real time
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Know what was collected across all jobs and team members --
                before anyone returns to the office.
              </p>
              <div className="mt-8">
                <FeatureList features={revenueFeatures} />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Team visibility */}
      <SectionWrapper>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                Team
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Know what your team collected
              </h2>
              <p className="mt-3 text-base text-muted leading-relaxed">
                Real-time payment visibility by team member. See who collected
                what, where, and when.
              </p>
              <div className="mt-8">
                <FeatureList features={teamFeatures} />
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
            <MockupFrame label="Team payment visibility">
              <TeamVisual />
            </MockupFrame>
          </div>
        </Container>
      </SectionWrapper>

      <SecuritySection variant="default" />
      <PageFAQ
        context="Home Services"
        heading="Home service payment questions"
        faqs={faqs}
      />
      <CTASection variant="homeServices" />
    </>
  );
}