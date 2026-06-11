import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES, PAGE_DESCRIPTIONS } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export const metadata: Metadata = createPageMetadata(
  PAGE_TITLES["/restaurants"],
  PAGE_DESCRIPTIONS["/restaurants"]
);

export default function RestaurantsPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="text-center">
        <SectionHeading
          title="Payment Software for Restaurants"
          subtitle="Streamline payments, orders, and customer checkout — purpose-built for restaurants."
          className="mx-auto"
        />
      </Container>
    </section>
  );
}