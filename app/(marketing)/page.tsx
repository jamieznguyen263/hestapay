import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES } from "@/lib/metadata";
import Hero from "@/components/marketing/hero";
import TrustStrip from "@/components/marketing/trust-strip";
import ProblemSection from "@/components/marketing/problem-section";
import SolutionOverview from "@/components/marketing/solution-overview";
import BusinessTypeSelector from "@/components/marketing/business-type-selector";
import HowItWorks from "@/components/marketing/how-it-works";
import WorkflowShowcase from "@/components/marketing/workflow-showcase";
import DashboardHeroScene from "@/components/marketing/dashboard-hero-scene";
import SecuritySection from "@/components/marketing/security-section";
import FAQPreview from "@/components/marketing/faq-preview";
import CTASection from "@/components/marketing/cta-section";

export const metadata: Metadata = createPageMetadata(PAGE_TITLES["/"]);

const restaurantFeatures = [
  {
    title: "QR table payments",
    description:
      "Guests scan a QR code and pay from their phone. No app download required. Faster table turnover and higher tips.",
  },
  {
    title: "Dine-in and takeout payments",
    description:
      "One payment system for every way your guests pay. Payment links for phone orders. QR codes at the table. Accept payments however your guests order.",
  },
  {
    title: "Split payments and tipping",
    description:
      "Built-in support for bill splitting and digital tipping. Customers choose their tip percentage at checkout.",
  },
  {
    title: "Payment and order sync",
    description:
      "Payments connect to your existing order flow. Reduce manual reconciliation and speed up service.",
  },
];

const salonFeatures = [
  {
    title: "Deposits and prepayments",
    description:
      "Accept deposits and prepayments from clients. Release or capture funds when the appointment is completed.",
  },
  {
    title: "Tipping at checkout",
    description:
      "Digital tipping with suggested percentages. Staff tips tracked and reported automatically.",
  },
  {
    title: "Service and product payments",
    description:
      "Ring up services and retail products in a single transaction. Keep service and product revenue on one dashboard.",
  },
  {
    title: "Client payment history",
    description:
      "View past transactions, tips, and payment preferences for each client. Personalize service and streamline checkout.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionOverview />
      <BusinessTypeSelector />
      <HowItWorks />
      <WorkflowShowcase
        vertical="Restaurants"
        exploreHref="/restaurants"
        heading="Built for restaurant workflows"
        subtitle="From QR table payments to takeout orders -- HestaPay matches how restaurants actually accept payments."
        features={restaurantFeatures}
      />
      <WorkflowShowcase
        vertical="Nail Salons"
        exploreHref="/nail-salons"
        heading="Built for salon workflows"
        subtitle="Deposits, tipping, and checkout -- connected in one payment flow that salon staff and clients love."
        features={salonFeatures}
        reverse
      />
      <DashboardHeroScene />
      <SecuritySection />
      <FAQPreview />
      <CTASection />
    </>
  );
}