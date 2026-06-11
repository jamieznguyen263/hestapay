import Link from "next/link";

interface UseCase {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface UseCaseCardsProps {
  useCases: UseCase[];
  /** Optionally render as links instead of plain cards */
}

export default function UseCaseCards({ useCases }: UseCaseCardsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {useCases.map((useCase) => {
        const content = (
          <div className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md hover:border-primary/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <useCase.icon className="h-5 w-5" />
            </div>
            <h4 className="mt-4 text-base font-semibold text-foreground">
              {useCase.title}
            </h4>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {useCase.description}
            </p>
            {useCase.href && (
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                {useCase.linkLabel ?? "Learn more"}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            )}
          </div>
        );

        if (useCase.href) {
          return (
            <Link key={useCase.title} href={useCase.href} className="group block">
              {content}
            </Link>
          );
        }

        return (
          <div key={useCase.title} className="group">
            {content}
          </div>
        );
      })}
    </div>
  );
}