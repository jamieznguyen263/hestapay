import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Card from "@/components/ui/card";

const problems = [
  {
    title: "Fragmented payment tools",
    description:
      "Local businesses juggle separate systems for in-person, online, and invoice payments. Each tool comes with its own fees, setup, and headaches.",
  },
  {
    title: "Operational complexity",
    description:
      "Restaurants manage dine-in, takeout, and delivery. Salons handle bookings, deposits, and tipping. Retail tracks inventory alongside payments. Most software wasn't built for these workflows.",
  },
  {
    title: "Hidden costs and opaque pricing",
    description:
      "Payment processing is filled with unexpected fees, long contracts, and pricing that changes without notice. Local businesses deserve clarity.",
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper ambient>
      <Container>
        <SectionHeading
          title="Payment complexity holds local businesses back"
          subtitle="Software built for ecommerce doesn't solve the real-world workflows of restaurants, salons, retail, and home services."
          centered
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {problems.map((problem) => (
            <Card key={problem.title}>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/10 text-muted mb-3">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}