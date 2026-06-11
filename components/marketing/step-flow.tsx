interface Step {
  number: number;
  title: string;
  description: string;
}

interface StepFlowProps {
  steps: Step[];
  /** Optional heading above the steps */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
}

export default function StepFlow({ steps, title, subtitle }: StepFlowProps) {
  return (
    <div>
      {title && (
        <h3 className="text-xl font-bold text-foreground text-center">{title}</h3>
      )}
      {subtitle && (
        <p className="mt-2 text-sm text-muted leading-relaxed text-center">{subtitle}</p>
      )}
      <div
        className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-${Math.min(steps.length, 4)} ${
          title || subtitle ? "mt-10" : ""
        }`}
        style={{
          gridTemplateColumns: `repeat(${Math.min(steps.length, 4)}, minmax(0, 1fr))`,
        }}
      >
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
              {step.number}
            </div>
            <h4 className="mt-4 text-sm font-semibold text-foreground">
              {step.title}
            </h4>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}