import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

interface PageHeroProps {
  vertical: string;
  heading: string;
  subtitle: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function PageHero({
  vertical,
  heading,
  subtitle,
  primaryHref = "/early-access",
  primaryLabel = "Get Early Access",
  secondaryHref = "/book-demo",
  secondaryLabel = "Book a Demo",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-16 lg:py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">
          {vertical}
        </p>
        <h1 className="mt-4 max-w-3xl mx-auto text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {heading}
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-lg text-muted leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Button variant="primary" size="lg" href={primaryHref}>
            {primaryLabel}
          </Button>
          <Button variant="outline" size="lg" href={secondaryHref}>
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}