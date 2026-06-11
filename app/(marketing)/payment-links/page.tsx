import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/payment-links"],
  PAGE_DESCRIPTIONS["/payment-links"]
);

export default function PaymentLinksPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Payment Links"
          subtitle="Create and share payment links in seconds. No code required."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}