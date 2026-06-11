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
  PAGE_TITLES["/home-services"],
  PAGE_DESCRIPTIONS["/home-services"]
);

const painPoints = [
  {
    title: "Field payments are still cash and checks",
    description:
      "Service providers drive to job sites, complete the work, and then wait for payment -- checks mailed later, cash collected on-site, or invoices that take weeks to settle.",
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
      "Print a QR code on your service invoice or estimate. When the job is done, the customer scans and pays -- no link to send, no app to open.",
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
      "Designed for fast, low-friction checkout. Customers scan and pay in seconds -- designed to reduce the time between job completion and payment.",
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
          <SectionHeading
            title="Getting paid shouldn't be the hardest part of the job"
            subtitle="Field service providers spend too much time on payment collection and not enough on the work that earns revenue."
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

      {/* SMS payment links */}
      <SectionWrapper alternate ambient>
        <Container>
          <SectionHeading
            title="Get paid by text before you leave the job site"
            subtitle="Send a payment link via SMS. The customer pays in seconds. You leave knowing the payment is already processing."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="SMS payment link" accent>
              <SMSLinkVisual />
            </MockupFrame>
            <div>
              <FeatureList features={smsFeatures} />
              <div className="mt-6">
                <Link href="/payment-links" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Explore Payment Links &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* On-site QR payment flow */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="QR payments on your invoice"
            subtitle="Print a QR code on your estimate or invoice. The customer scans and pays -- before you pack up your tools."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={qrFeatures} />
            <div>
              <MockupFrame label="On-site QR payment">
                <OnSiteQRVisual />
              </MockupFrame>
              <div className="mt-6 text-center">
                <Link href="/qr-payments" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  See QR in Action &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Daily field revenue visibility */}
      <SectionWrapper alternate ambient>
        <Container>
          <SectionHeading
            title="See daily field revenue in real time"
            subtitle="Know what was collected across all jobs and team members -- before anyone returns to the office."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <MockupFrame label="Field revenue dashboard">
              <RevenueVisual />
            </MockupFrame>
            <FeatureList features={revenueFeatures} />
          </div>
        </Container>
      </SectionWrapper>

      {/* Team/staff visibility */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Know what your team collected"
            subtitle="Real-time payment visibility by team member. See who collected what, where, and when."
            centered
          />
          <div className="mt-12 grid gap-10 items-center lg:grid-cols-2">
            <FeatureList features={teamFeatures} />
            <div>
              <MockupFrame label="Team payment visibility">
                <TeamVisual />
              </MockupFrame>
              <div className="mt-6 text-center">
                <Link href="/merchant-dashboard" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Explore the Dashboard &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SecuritySection variant="default" />
      <PageFAQ context="Home Services" heading="Home service payment questions" faqs={faqs} />
      <CTASection variant="homeServices" />
    </>
  );
}

function SMSLinkVisual() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-border">
        <span className="flex h-2 w-2 rounded-full bg-primary" />
        <span className="text-[10px] font-medium text-foreground">SMS Pay</span>
      </div>
      <div className="rounded-lg border border-border bg-surface p-3 space-y-2">
        <p className="text-[8px] text-muted uppercase">Service completed</p>
        <div className="space-y-1.5">
          {["HVAC repair", "Drain cleaning", "AC tune-up"].map((job) => (
            <div key={job} className="flex items-center justify-between text-[9px]">
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
        <span className="text-[10px] font-medium text-foreground">Invoice QR</span>
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
              <div key={`${ri}-${ci}`} className="h-2 w-2 rounded-[1px]" style={{ backgroundColor: cell ? "var(--color-foreground)" : "transparent" }} />
            ))
          )}
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-[9px] text-foreground font-medium">Invoice #{"\u2014"}</p>
          <div className="rounded-md border border-border bg-surface p-2">
            <p className="text-[8px] text-muted uppercase">Amount</p>
            <p className="text-xs font-bold text-primary">{"\u2014"}</p>
          </div>
        </div>
      </div>
      <p className="text-center text-[8px] text-muted">Scan with phone camera to pay</p>
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
          <div key={label} className="rounded-lg border border-border bg-surface p-2 text-center">
            <p className="text-[8px] text-muted uppercase">{label}</p>
            <p className="mt-1 text-xs font-bold text-primary">{"\u2014"}</p>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-12">
        {[{ h: 30 }, { h: 55 }, { h: 40 }, { h: 70 }, { h: 35 }, { h: 60 }, { h: 45 }].map((d, i) => (
          <div key={i} className="flex-1">
            <div className="w-full rounded-t bg-primary/10" style={{ height: `${d.h}%` }} />
          </div>
        ))}
      </div>
      <p className="text-center text-[8px] text-muted">Weekly trend {"\u2014"}</p>
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
          <div key={name} className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2">
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