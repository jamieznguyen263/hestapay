import Button from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  audience: string;
  description: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
}

export default function PricingCard({
  name,
  audience,
  description,
  features,
  ctaLabel = "Get Early Access",
  ctaHref = "/early-access",
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-xl border bg-background p-6 flex flex-col ${
        featured
          ? "border-primary shadow-glow shadow-primary/10 ring-1 ring-primary"
          : "border-border shadow-sm"
      }`}
    >
      {featured && (
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          Recommended
        </p>
      )}
      <p className="text-sm font-semibold text-primary uppercase tracking-wide">{name}</p>
      <p className="mt-2 text-2xl font-bold text-foreground">{audience}</p>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-sm text-muted">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          variant={featured ? "primary" : "outline"}
          size="base"
          href={ctaHref}
          className="w-full justify-center"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}