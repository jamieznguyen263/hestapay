import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/home-services"],
  PAGE_DESCRIPTIONS["/home-services"]
);

export default function HomeServicesPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Payment Software for Home Services"
          subtitle="Accept payments anywhere with HestaPay's home service solutions."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}