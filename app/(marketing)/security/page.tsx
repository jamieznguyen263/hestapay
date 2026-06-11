import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FeatureList from "@/components/marketing/feature-list";
import Card from "@/components/ui/card";
import PageFAQ from "@/components/marketing/page-faq";
import CTASection from "@/components/marketing/cta-section";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/security"],
  PAGE_DESCRIPTIONS["/security"]
);

const principles = [
  {
    title: "Tokenization-first architecture",
    description:
      "Sensitive payment data is tokenized at the point of entry. Raw card numbers are never stored on the HestaPay platform. Tokens are passed securely to processing partners for authorization and settlement.",
  },
  {
    title: "Encryption in transit and at rest",
    description:
      "All communication between your devices and the HestaPay platform is encrypted. Data at rest is protected using industry-standard encryption practices.",
  },
  {
    title: "Role-based access controls",
    description:
      "Granular permissions by role: owner, manager, staff. Each user sees only what they need. Multi-factor authentication support adds an additional layer of account protection.",
  },
  {
    title: "Audit logging",
    description:
      "Every significant action — transactions, refunds, access changes — is logged with timestamp and user attribution. Full audit trails support accountability and reconciliation.",
  },
];

const accessFeatures = [
  {
    title: "Granular role permissions",
    description:
      "Define exactly what each role can see and do. Owners manage everything. Managers run reports and process refunds. Staff see their transactions and tips.",
  },
  {
    title: "Multi-factor authentication",
    description:
      "Add an extra layer of account security with MFA. Require a second factor for dashboard access, refunds, or account changes.",
  },
  {
    title: "Device and session management",
    description:
      "See active sessions and authorized devices. Revoke access instantly if a device is lost or a team member leaves.",
  },
  {
    title: "Detailed activity logs",
    description:
      "Every login, transaction, refund, and permission change is logged. Filter by user, action, or time period for audit and review.",
  },
];

const faqs = [
  {
    question: "Does HestaPay store credit card numbers?",
    answer:
      "No. HestaPay uses tokenization — sensitive payment data is tokenized at entry and passed to processing partners. Raw cardholder data is never stored on the HestaPay platform.",
  },
  {
    question: "How does HestaPay handle payment security?",
    answer:
      "HestaPay is a software and orchestration layer. Payment processing, security certification, and compliance are handled by trusted payment infrastructure partners. HestaPay adds tokenization, encryption, access controls, and audit logging at the software layer.",
  },
  {
    question: "Who can access my transaction data?",
    answer:
      "You control access through role-based permissions. Only users you authorize can view transactions. Each user sees only what their role permits. All access is logged for audit.",
  },
  {
    question: "What happens if there is a dispute or chargeback?",
    answer:
      "Dispute information appears in your merchant dashboard. You can view the transaction details and respond through the platform. The actual dispute resolution process is handled by your payment processor.",
  },
  {
    question: "How is data protected?",
    answer:
      "Data is encrypted in transit and at rest. The platform uses modern encryption practices. Access requires authentication, and all significant actions are logged for accountability.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="Security"
        heading="Security built into the foundation"
        subtitle="HestaPay is designed with security as a core principle — not an afterthought. Tokenization, encryption, access controls, and audit logging protect every transaction."
      />

      {/* 2. Security principles */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="How HestaPay protects your payments"
            subtitle="Four foundational principles that guide our security architecture."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <Card key={principle.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Tokenization-first architecture */}
      <SectionWrapper alternate>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Tokenization-first. No raw card storage."
                subtitle="When a customer pays, their card details are immediately tokenized. HestaPay never persists raw cardholder data — tokens are passed to trusted payment infrastructure partners for processing."
              />
            </div>
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
                <svg
                  className="h-12 w-12 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Tokenization architecture
                </p>
                <p className="mt-1 text-xs text-muted">
                  Diagram coming soon
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. No raw card storage */}
      <SectionWrapper>
        <Container>
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div>
              <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
                <svg
                  className="h-12 w-12 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="mt-4 text-sm text-muted font-medium">
                  Data flow overview
                </p>
                <p className="mt-1 text-xs text-muted">
                  Diagram coming soon
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                title="We never store what we don't need"
                subtitle="HestaPay's software layer handles workflow, reporting, and access management. Payment credentials flow through to processing partners — they are never stored on our platform. This reduces risk and keeps sensitive data where it belongs."
              />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Access controls and audit logging */}
      <SectionWrapper alternate>
        <Container>
          <SectionHeading
            title="You control who sees what"
            subtitle="Role-based access, multi-factor authentication, and detailed audit logs give you visibility and control."
            className="mx-auto text-center"
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FeatureList features={accessFeatures} icon="shield" />
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. What HestaPay handles vs partners */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="Clear separation of responsibility"
            subtitle="HestaPay is a software and orchestration layer. Payment processing and compliance are managed by trusted infrastructure partners."
            className="mx-auto text-center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
            <Card>
              <h3 className="text-base font-semibold text-primary">
                HestaPay handles
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Merchant dashboard",
                  "Payment links",
                  "QR code generation",
                  "Workflow orchestration",
                  "Reporting and analytics",
                  "Staff access controls",
                  "Audit logging",
                  "Tokenization at entry",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-base font-semibold text-muted">
                Partners handle
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Card processing",
                  "Funds settlement",
                  "Compliance certifications",
                  "Dispute resolution",
                  "Bank relationships",
                  "Network compliance",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-muted">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. FAQ */}
      <PageFAQ context="Security" heading="Security questions" faqs={faqs} />

      {/* 8. Final CTA */}
      <CTASection variant="security" />
    </>
  );
}