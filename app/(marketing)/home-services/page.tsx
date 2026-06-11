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
  PAGE_TITLES["/home-services"],
  PAGE_DESCRIPTIONS["/home-services"]
);

const painPoints = [
  {
    title: "Field payments are still cash and checks",
    description:
      "Service providers drive to job sites, complete the work, and then wait for payment — checks mailed later, cash collected on-site, or invoices that take weeks to settle.",
  },
  {
    title: "Invoice chasing eats into margins",
    description:
      "After the job is done, someone has to create an invoice, send it, follow up, and reconcile payment. That's unpaid time spent on payment admin.",
  },
  {
    title: "No real-time revenue visibility",
    description:
      "You don't know what was collected today until payments settle and staff report back. Managing a field team without live payment data means flying blind.",
  },
];

const smsFeatures = [
  {
    title: "Send a payment link after the job",
    description:
      "Complete the work, send a payment link via text before you leave the job site. The customer pays in seconds from their phone. No checks, no invoices, no waiting.",
  },
  {
    title: "Get paid before you drive away",
    description:
      "When customers pay via SMS link on-site, you see the confirmation instantly. Leave the job knowing payment is already processing.",
  },
  {
    title: "No card numbers over the phone",
    description:
      "Stop reading credit card numbers aloud or writing them down. The customer enters their own payment details on a secure checkout page.",
  },
  {
    title: "Works for any service amount",
    description:
      "Whether it's a small repair or a large installation project, payment links handle any amount. Add a description so the customer sees exactly what they're paying for.",
  },
];

const qrFeatures = [
  {
    title: "QR code on your invoice or estimate",
    description:
      "Print a QR code on your service invoice or estimate. When the job is done, the customer scans and pays — no link to send, no app to open.",
  },
  {
    title: "On-site payment completion",
    description:
      "Hand the customer the invoice with QR code. They scan, review the total, add a tip if appropriate, and pay. You get confirmation before you pack up.",
  },
  {
    title: "Digital receipts automatically",
    description:
      "After every QR payment, the customer receives a digital receipt. No paper receipts to print unless the customer wants one.",
  },
  {
    title: "Reduce payment friction",
    description:
      "Designed for fast, low-friction checkout. Customers scan and pay in seconds — designed to reduce the time between job completion and payment.",
  },
];

const revenueFeatures = [
  {
    title: "See what each tech collected today",
    description:
      "Dashboard shows payments by team member, by job, in real time. Know who collected what before anyone drives back to the office.",
  },
  {
    title: "Daily field revenue at a glance",
    description:
      "One view shows today's payments across all jobs and team members. No waiting for end-of-day reports or manual reconciliation.",
  },
  {
    title: "Track payment methods",
    description:
      "See the split between payment links, QR payments, and other methods. Understand how your customers prefer to pay.",
  },
  {
    title: "Export for accounting",
    description:
      "Export daily payment data for your accounting system. No manual entry from paper tickets or handwritten receipts.",
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
      "Field staff can access the HestaPay staff app from their phone. Send payment links, view their transactions, and check payment status on the go.",
  },
  {
    title: "Tip tracking by technician",
    description:
      "When customers add tips through payment links or QR, tips are attributed to the right team member automatically. No manual tip logging.",
  },
  {
    title: "Permission-based visibility",
    description:
      "Technicians see their own jobs and payments. Managers see the full team. Office staff see everything they need for reconciliation.",
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
      "No. HestaPay is a payment platform — it handles payment collection and visibility. It works alongside your existing invoicing, scheduling, or dispatch tools. HestaPay focuses on getting you paid, not managing your full field operations.",
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

export default function HomeServicesPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Home Services"
        heading="Payment software built for the field"
        subtitle="Send payment links after every job. Accept QR payments on-site. Track daily field revenue and team payments — all from one platform."
      />

      {/* 2. Pain points */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Getting paid shouldn't be the hardest part of the job"
            subtitle="Field service providers spend too much time on payment collection and not enough on the work that earns revenue."
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

      {/* 3. SMS payment links */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="Get paid by text before you leave the job site"
            subtitle="Send a payment link via SMS. The customer pays in seconds. You leave knowing the payment is already processing."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <div>
              <div className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg className="h-12 w-12 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <p className="mt-4 text-sm text-primary font-medium">SMS payment link</p>
                <p className="mt-1 text-xs text-muted">Screenshot coming soon</p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <Link href="/payment-links" className="text-sm font-medium text-primary hover:underline">
                  Explore Payment Links →
                </Link>
              </div>
            </div>
            <FeatureList features={smsFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. On-site QR payment flow */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="QR payments on your invoice"
            subtitle="Print a QR code on your estimate or invoice. The customer scans and pays — before you pack up your tools."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={qrFeatures} />
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg className="h-12 w-12 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">On-site QR payment</p>
                <p className="mt-1 text-xs text-muted">Screenshot coming soon</p>
              </div>
              <div className="mt-6 text-center">
                <Link href="/qr-payments" className="text-sm font-medium text-primary hover:underline">
                  See QR in Action →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Daily field revenue visibility */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="See daily field revenue in real time"
            subtitle="Know what was collected across all jobs and team members — before anyone returns to the office."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg className="h-12 w-12 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">Field revenue dashboard</p>
                <p className="mt-1 text-xs text-muted">Screenshot coming soon</p>
              </div>
            </div>
            <FeatureList features={revenueFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Team/staff visibility */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Know what your team collected"
            subtitle="Real-time payment visibility by team member. See who collected what, where, and when."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={teamFeatures} />
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <svg className="h-12 w-12 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">Team payment visibility</p>
                <p className="mt-1 text-xs text-muted">Screenshot coming soon</p>
              </div>
              <div className="mt-6 text-center">
                <Link href="/merchant-dashboard" className="text-sm font-medium text-primary hover:underline">
                  Explore the Dashboard →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. Security/trust */}
      <SecuritySection variant="default" />

      {/* 8. FAQ */}
      <PageFAQ context="Home Services" heading="Home service payment questions" faqs={faqs} />

      {/* 9. Final CTA */}
      <CTASection variant="homeServices" />
    </>
  );
}