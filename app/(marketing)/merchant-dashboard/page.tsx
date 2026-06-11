import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/merchant-dashboard"],
  PAGE_DESCRIPTIONS["/merchant-dashboard"]
);

export default function MerchantDashboardPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Merchant Dashboard"
          subtitle="A powerful dashboard to manage payments, refunds, and analytics."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}