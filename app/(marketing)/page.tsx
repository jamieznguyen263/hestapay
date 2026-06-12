import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES } from "@/lib/metadata";
import Hero from "@/components/marketing/hero";
import ProofStrip from "@/components/marketing/proof-strip";
import PaymentFlowStory from "@/components/marketing/payment-flow-story";
import CoreCapabilities from "@/components/marketing/core-capabilities";
import BusinessTypeSelector from "@/components/marketing/business-type-selector";
import DeepDiveRouting from "@/components/marketing/deep-dive-routing";
import DeepDiveRecovery from "@/components/marketing/deep-dive-recovery";
import DeepDiveSettlement from "@/components/marketing/deep-dive-settlement";
import TrustInfrastructure from "@/components/marketing/trust-infrastructure";
import FAQPreview from "@/components/marketing/faq-preview";
import CTASection from "@/components/marketing/cta-section";

export const metadata: Metadata = createPageMetadata(PAGE_TITLES["/"]);

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <PaymentFlowStory />
      <CoreCapabilities />
      <BusinessTypeSelector />
      <DeepDiveRouting />
      <DeepDiveRecovery />
      <DeepDiveSettlement />
      <TrustInfrastructure />
      <FAQPreview />
      <CTASection />
    </>
  );
}
