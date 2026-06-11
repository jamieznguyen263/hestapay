import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import PageHero from "@/components/marketing/page-hero";
import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import FAQCategory from "@/components/marketing/faq-category";
import Link from "next/link";
import type { FAQ } from "@/components/marketing/page-faq";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/faq"],
  PAGE_DESCRIPTIONS["/faq"]
);

const categories = [
  { id: "getting-started", label: "Getting started" },
  { id: "payments", label: "Payments" },
  { id: "qr-payments", label: "QR payments" },
  { id: "payment-links", label: "Payment links" },
  { id: "dashboard", label: "Dashboard" },
  { id: "refunds-voids", label: "Refunds & voids" },
  { id: "security", label: "Security" },
  { id: "pricing", label: "Pricing" },
  { id: "provider-onboarding", label: "Provider / onboarding" },
] as const;

const gettingStarted: FAQ[] = [
  {
    question: "What is HestaPay?",
    answer:
      "HestaPay is a payment software and orchestration platform for local businesses. It connects to trusted payment infrastructure partners and provides a unified layer for payment links, QR payments, and a merchant dashboard — purpose-built for restaurants, nail salons, retail, and home services.",
  },
  {
    question: "Is HestaPay a payment processor?",
    answer:
      "No. HestaPay is not a bank, processor, or acquirer. It is a software layer that integrates with trusted payment infrastructure. You maintain your processor relationships while HestaPay provides the tools to manage and orchestrate payments.",
  },
  {
    question: "Which businesses is HestaPay built for?",
    answer:
      "HestaPay is purpose-built for restaurants, nail salons, retail stores, and home services. Each vertical has dedicated workflows, features, and support — not a generic solution adapted after the fact.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can join the early access program to be among the first businesses to use HestaPay. Early access members help shape the product and receive priority onboarding.",
  },
];

const payments: FAQ[] = [
  {
    question: "How do payment links work?",
    answer:
      "You create a payment link from the HestaPay dashboard — set the amount and optionally a description. Share the link with your customer via text, email, or any messaging app. They open the link, enter their payment details on a secure checkout page, and the payment is processed. You see the confirmation in your dashboard instantly.",
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
    question: "How does HestaPay handle payment security?",
    answer:
      "HestaPay is a software and orchestration layer. Payment processing, security certification, and compliance are handled by trusted payment infrastructure partners. HestaPay adds tokenization, encryption, access controls, and audit logging at the software layer.",
  },
];

const qrPayments: FAQ[] = [
  {
    question: "How do QR payments work?",
    answer:
      "A business displays a QR code — on a table tent, at the counter, or on a screen. The customer scans it with their phone camera, sees the payment amount (or menu), and completes the transaction in their browser. Payment confirmation appears instantly in the staff app and dashboard.",
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

const paymentLinks: FAQ[] = [
  {
    question: "How long is a payment link valid?",
    answer:
      "You can set expiration on payment links. Links can be configured to expire after a set time period, or you can manually deactivate a link at any time from your dashboard.",
  },
  {
    question: "Is there a limit on payment link amounts?",
    answer:
      "Payment links work for any transaction amount. HestaPay is designed for local businesses — whether it's a small deposit or a large service invoice, payment links handle it.",
  },
  {
    question: "Can I send payment links from my phone?",
    answer:
      "Yes. The HestaPay staff app lets you create and send payment links from your mobile device. Perfect for field service providers, restaurant staff taking phone orders, or salon front desks sending deposit links.",
  },
];

const dashboard: FAQ[] = [
  {
    question: "What can I do from the merchant dashboard?",
    answer:
      "The merchant dashboard is your central hub for payment operations. View transactions, process refunds, manage staff access, run reports, and track performance across locations. Everything you need to manage payments — in one place.",
  },
  {
    question: "Can multiple staff members use the dashboard?",
    answer:
      "Yes. You can invite staff with role-based permissions. Owners get full access. Managers can view reports and process refunds. Staff can see their own transactions and tips. Each person logs in with their own account.",
  },
  {
    question: "Can I see data across multiple locations?",
    answer:
      "Yes. If you have multiple locations, you can switch between them in the dashboard or view aggregated data across all locations. Each location's data is kept separate for staff access control.",
  },
  {
    question: "How do reports and exports work?",
    answer:
      "Built-in reports cover revenue, transactions, tips, refunds, and staff performance. You can filter by date range and location. Export to CSV for accounting software or PDF for sharing. Reports are generated from your live transaction data.",
  },
];

const refundsVoids: FAQ[] = [
  {
    question: "How do refunds work?",
    answer:
      "Open any transaction from the dashboard and click refund. Choose full or partial amount. The refund is processed through your payment infrastructure partner and appears in the transaction history. No separate processor login required.",
  },
  {
    question: "Can I void a transaction?",
    answer:
      "Yes. Void transactions that haven't settled yet from the dashboard. Useful for correcting mistakes before the end of the business day. Voided transactions are logged with the original record.",
  },
  {
    question: "What happens if there is a dispute or chargeback?",
    answer:
      "Dispute information appears in your merchant dashboard. You can view the transaction details and respond through the platform. The actual dispute resolution process is handled by your payment processor.",
  },
];

const security: FAQ[] = [
  {
    question: "Does HestaPay store credit card numbers?",
    answer:
      "No. HestaPay uses tokenization — sensitive payment data is tokenized at entry and passed to processing partners. Raw cardholder data is never stored on the HestaPay platform.",
  },
  {
    question: "Who can access my transaction data?",
    answer:
      "You control access through role-based permissions. Only users you authorize can view transactions. Each user sees only what their role permits. All access is logged for audit.",
  },
  {
    question: "How is data protected?",
    answer:
      "Data is encrypted in transit and at rest. The platform uses modern encryption practices. Access requires authentication, and all significant actions are logged for accountability.",
  },
  {
    question: "Is HestaPay a secure platform?",
    answer:
      "HestaPay is designed with security as a core principle. It uses tokenization, encryption, role-based access controls, and audit logging. Payment processing and compliance certifications are handled by trusted payment infrastructure partners.",
  },
];

const pricing: FAQ[] = [
  {
    question: "How does HestaPay pricing work?",
    answer:
      "HestaPay charges a platform fee for access to the software — payment links, QR payments, merchant dashboard, reporting, and staff controls. Processing costs are separate and handled by your payment processor. Final platform pricing is confirmed during onboarding.",
  },
  {
    question: "Are there long-term contracts?",
    answer:
      "HestaPay is designed to be flexible. Platform terms are discussed during onboarding. Since processing is handled by your chosen processor, you are not locked into a single provider through HestaPay.",
  },
  {
    question: "Can I switch plans as my business grows?",
    answer:
      "Yes. You can upgrade your plan as your business expands — whether you're adding locations, staff, or need advanced features. Plan changes are handled through your account.",
  },
  {
    question: "How does processing pricing work?",
    answer:
      "Processing rates are set by your payment processor, not by HestaPay. You know exactly what you pay for processing — no hidden markups from us. HestaPay is a software platform, not a processor.",
  },
];

const providerOnboarding: FAQ[] = [
  {
    question: "Is there a cost for early access?",
    answer:
      "Early access members will have platform pricing discussed during onboarding. Our goal is to build a product that delivers value — and pricing will reflect that.",
  },
  {
    question: "How long until I get access?",
    answer:
      "We're onboarding early members in cohorts. After you sign up, we'll reach out with your expected timeline. Most members are onboarded within a few weeks of signing up.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "During onboarding, we discuss your business setup, processing needs, and platform configuration. You'll confirm your plan, connect your processor, and get your team set up on the HestaPay dashboard.",
  },
  {
    question: "Can I leave the early access program?",
    answer:
      "Yes. Early access is voluntary. If the platform isn't the right fit, there's no obligation to continue.",
  },
];

const faqMap: Record<string, FAQ[]> = {
  "getting-started": gettingStarted,
  payments: payments,
  "qr-payments": qrPayments,
  "payment-links": paymentLinks,
  dashboard: dashboard,
  "refunds-voids": refundsVoids,
  security: security,
  pricing: pricing,
  "provider-onboarding": providerOnboarding,
};

export default function FAQPage() {
  return (
    <>
      {/* 1. Hero */}
      <PageHero
        vertical="FAQ"
        heading="Frequently asked questions"
        subtitle="Find answers to common questions about HestaPay."
      />

      {/* 2. Intro + category index */}
      <SectionWrapper>
        <Container>
          <SectionHeading
            title="What would you like to know?"
            subtitle="Browse by category or scroll through all questions below."
            className="mx-auto text-center"
          />
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted hover:text-primary hover:border-primary/30 transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </nav>
        </Container>
      </SectionWrapper>

      {/* 3. Grouped FAQ sections */}
      {categories.map((cat, i) => (
        <SectionWrapper key={cat.id} alternate={i % 2 === 1}>
          <Container>
            <SectionHeading
              title={cat.label}
              className="mx-auto text-center"
            />
            <div className="mt-10 max-w-2xl mx-auto">
              <FAQCategory
                faqs={faqMap[cat.id]}
                categoryId={cat.id}
              />
            </div>
          </Container>
        </SectionWrapper>
      ))}

      {/* 4. CTA support section */}
      <section className="py-12 lg:py-16 bg-primary/10">
        <Container className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Still have questions?
          </h2>
          <p className="mt-3 text-muted max-w-md mx-auto">
            We&rsquo;re happy to help. Reach out or book a demo and we&rsquo;ll
            answer your questions directly.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="text-sm font-medium text-primary hover:underline"
            >
              Contact us →
            </Link>
            <Link
              href="/book-demo"
              className="text-sm font-medium text-primary hover:underline"
            >
              Book a Demo →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}