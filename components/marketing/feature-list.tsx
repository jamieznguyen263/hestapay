interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
  /** Optional heading above the list */
  title?: string;
  /** Optional subtitle above the list */
  subtitle?: string;
  /** Icon to use before each item — "check" (default) or "shield" */
  icon?: "check" | "shield";
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="h-4 w-4 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

export default function FeatureList({
  features,
  title,
  subtitle,
  icon = "check",
}: FeatureListProps) {
  const Icon = icon === "shield" ? ShieldIcon : CheckIcon;

  return (
    <div>
      {title && (
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      )}
      {subtitle && (
        <p className="mt-2 text-sm text-muted leading-relaxed">{subtitle}</p>
      )}
      <ul className={`space-y-5 ${title || subtitle ? "mt-6" : ""}`}>
        {features.map((feature) => (
          <li key={feature.title} className="flex gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <Icon />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                {feature.title}
              </h4>
              <p className="mt-1 text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}