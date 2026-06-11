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
  /** Tighter padding for lighter pages (FAQ, contact, etc.) */
  compact?: boolean;
}

export default function PageHero({
  vertical,
  heading,
  subtitle,
  primaryHref = "/early-access",
  primaryLabel = "Get Early Access",
  secondaryHref = "/book-demo",
  secondaryLabel = "Book a Demo",
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        compact ? "py-14 lg:py-20" : "py-20 lg:py-28"
      }`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none ambient-glow" />

      {/* Subtle grid accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.03] pointer-events-none bg-grid-subtle" />

      <Container>
        <div className="relative max-w-3xl">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-surface px-3.5 py-1 text-sm font-semibold text-primary uppercase tracking-wider">
            <span className="flex h-1 w-1 rounded-full bg-primary" />
            {vertical}
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.12]">
            {heading}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <Button variant="primary" size="lg" href={primaryHref}>
              {primaryLabel}
            </Button>
            <Button variant="outline" size="lg" href={secondaryHref}>
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}