import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/security"],
  PAGE_DESCRIPTIONS["/security"]
);

export default function SecurityPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Security & Compliance"
          subtitle="How HestaPay keeps payments and data safe with modern security practices."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}