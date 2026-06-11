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
      className={`relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background ${
        compact ? "py-12 lg:py-16" : "py-16 lg:py-24"
      }`}
    >
      {/* Subtle background accent — faint grid/surface detail on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container>
        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">
            {vertical}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
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