import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/early-access"],
  PAGE_DESCRIPTIONS["/early-access"]
);

export default function EarlyAccessPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Get Early Access"
          subtitle="Join the early access program and shape the future of local business payments."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}