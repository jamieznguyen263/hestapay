import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

const testimonials = [
  {
    quote:
      "HestaPay gives our team one cleaner payment flow from checkout to refund handling.",
    name: "Lena Park",
    role: "Owner, Northline Cafe",
  },
  {
    quote:
      "The staff experience feels faster, and the dashboard gives us the visibility we were missing.",
    name: "Avery Chen",
    role: "Manager, Studio Elm",
  },
  {
    quote:
      "Payment links and QR checkout finally feel like part of the same system.",
    name: "Jordan Hale",
    role: "Operator, Harbor Retail",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper alternate dense>
      <Container>
        <div className="grid gap-12 items-start lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Trusted by operators
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for the people who run local businesses
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-md">
              Operators in food, beauty, retail, and field services use HestaPay
              to simplify how they get paid.
            </p>
          </div>

          {/* Quote column — stacked, editorial */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-border">
              {testimonials.map((t) => (
                <div key={t.name} className="py-6 first:pt-0 last:pb-0">
                  <blockquote className="text-base text-foreground leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="text-xs text-muted">
                      , {t.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}