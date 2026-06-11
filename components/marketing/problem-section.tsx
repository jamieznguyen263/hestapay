import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

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
    <SectionWrapper>
      <Container>
        <SectionHeading
          title="Payment complexity holds local businesses back"
          subtitle="Software built for ecommerce doesn't solve the real-world workflows of restaurants, salons, retail, and home services."
          className="mx-auto text-center"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}