import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";
import Link from "next/link";
import { CTAS } from "@/lib/constants";

interface WorkflowFeature {
  title: string;
  description: string;
}

interface WorkflowShowcaseProps {
  /** The vertical label (e.g. "Restaurants", "Nail Salons") */
  vertical: string;
  /** Route for the "Explore features" CTA */
  exploreHref: string;
  heading: string;
  subtitle: string;
  features: WorkflowFeature[];
  /** When true, text column appears on the right (alternate layout) */
  reverse?: boolean;
}

export default function WorkflowShowcase({
  vertical,
  exploreHref,
  heading,
  subtitle,
  features,
  reverse = false,
}: WorkflowShowcaseProps) {
  return (
    <SectionWrapper alternate={!reverse}>
      <Container>
        <SectionHeading title={heading} subtitle={subtitle} className="mx-auto text-center" />
        <div className="mt-16 grid gap-10 items-center lg:grid-cols-2">
          {/* Text column */}
          <div className={reverse ? "lg:order-2" : ""}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              {vertical}
            </p>
            <ul className="mt-6 space-y-5">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
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
            <div className="mt-8">
              <Link
                href={exploreHref}
                className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                Explore {vertical} Features →
              </Link>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className={reverse ? "lg:order-1" : ""}>
            <div className="rounded-xl border-2 border-dashed border-border bg-surface p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
              <svg
                className="h-12 w-12 text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-4 text-sm text-muted font-medium">
                {vertical} dashboard preview
              </p>
              <p className="mt-1 text-xs text-muted">
                Screenshot coming soon
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}