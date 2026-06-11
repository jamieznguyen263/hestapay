interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  /** Optional eyebrow label above the title */
  eyebrow?: string;
  /** Center aligns the entire block */
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  eyebrow,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}