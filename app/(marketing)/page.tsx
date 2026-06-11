import type { Metadata } from "next";
import { createPageMetadata, PAGE_TITLES } from "@/lib/metadata";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";
import { CTAS } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(PAGE_TITLES["/"]);

export default function HomePage() {
  return (
    <>
      {/* Hero placeholder */}
      <section className="py-20 lg:py-28">
        <Container className="text-center">
          <h1 className="max-w-3xl mx-auto text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Payments built for local businesses.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-muted leading-relaxed">
            Modern payment software for restaurants, nail salons, retail, and
            home services. Integrate, orchestrate, and grow — without the
            complexity.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button variant="primary" size="lg" href="/early-access">
              {CTAS.primary}
            </Button>
            <Button variant="outline" size="lg" href="/book-demo">
              {CTAS.secondary}
            </Button>
          </div>
        </Container>
      </section>

      {/* Placeholder content — to be replaced in later phases */}
      <section className="py-16 bg-surface">
        <Container>
          <SectionHeading
            title="Coming soon"
            subtitle="Full landing page content will be built in the next phase. This placeholder establishes the site structure and reusable components."
          />
        </Container>
      </section>
    </>
  );
}