import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES } from "@/lib/metadata";
import Hero from "@/components/marketing/hero";
import TrustStrip from "@/components/marketing/trust-strip";
import ProblemSection from "@/components/marketing/problem-section";
import SolutionOverview from "@/components/marketing/solution-overview";
import BusinessTypeSelector from "@/components/marketing/business-type-selector";
import HowItWorks from "@/components/marketing/how-it-works";
import WorkflowShowcase from "@/components/marketing/workflow-showcase";
import DashboardPreview from "@/components/marketing/dashboard-preview";
import SecuritySection from "@/components/marketing/security-section";
import FAQPreview from "@/components/marketing/faq-preview";
import CTASection from "@/components/marketing/cta-section";

export const metadata: Metadata = createPageMetadata(PAGE_TITLES["/"]);

const restaurantFeatures = [
  {
    title: "QR table payments",
    description:
      "Guests scan, order, and pay from their phone. No app download required. Faster table turnover and higher tips.",
  },
  {
    title: "Dine-in, takeout, and delivery",
    description:
      "One system for all order types. Payment links for phone orders. QR codes at the table. Integrated delivery partner payouts.",
  },
  {
    title: "Split payments and tipping",
    description:
      "Built-in support for bill splitting and digital tipping. Customers choose their tip percentage at checkout.",
  },
  {
    title: "Kitchen display integration",
    description:
      "Orders flow directly from payment to kitchen. Reduce errors and speed up service.",
  },
];

const salonFeatures = [
  {
    title: "Booking and deposits",
    description:
      "Accept deposits during online booking. Release or capture funds when the appointment is completed.",
  },
  {
    title: "Tipping at checkout",
    description:
      "Digital tipping with suggested percentages. Staff tips tracked and reported automatically.",
  },
  {
    title: "Service and product payments",
    description:
      "Ring up services and retail products in a single transaction. Track product inventory alongside service revenue.",
  },
  {
    title: "Client payment history",
    description:
      "View past transactions, tips, and preferences for each client. Personalize service and streamline checkout.",
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
        subtitle="From QR table ordering to delivery payouts — HestaPay matches how restaurants actually operate."
        features={restaurantFeatures}
      />
      <WorkflowShowcase
        vertical="Nail Salons"
        exploreHref="/nail-salons"
        heading="Built for salon workflows"
        subtitle="Booking deposits, tipping, and checkout — connected in one flow that salon staff and clients love."
        features={salonFeatures}
        reverse
      />
      <DashboardPreview />
      <SecuritySection />
      <FAQPreview />
      <CTASection />
    </>
  );
}