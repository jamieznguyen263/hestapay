import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES } from "@/lib/metadata";
import Hero from "@/components/marketing/hero";
import TrustStrip from "@/components/marketing/trust-strip";
import ProofStrip from "@/components/marketing/proof-strip";
import DashboardHeroScene from "@/components/marketing/dashboard-hero-scene";
import SolutionOverview from "@/components/marketing/solution-overview";
import BusinessTypeSelector from "@/components/marketing/business-type-selector";
import HowItWorks from "@/components/marketing/how-it-works";
import FAQPreview from "@/components/marketing/faq-preview";
import CTASection from "@/components/marketing/cta-section";

export const metadata: Metadata = createPageMetadata(PAGE_TITLES["/"]);

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProofStrip />
      <DashboardHeroScene />
      <SolutionOverview />
      <BusinessTypeSelector />
      <HowItWorks />
      <FAQPreview />
      <CTASection />
    </>
  );
}