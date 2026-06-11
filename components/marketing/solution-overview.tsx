import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";
import { CTAS } from "@/lib/constants";

const solutions = [
  {
    title: "Unified payment acceptance",
    description:
      "Accept payments in person, online, and via payment links — all through one platform. No more switching between systems.",
    icon: CheckIcon,
  },
  {
    title: "Workflow orchestration",
    description:
      "Connect orders, inventory, bookings, and payments into a single flow that matches how your business actually operates.",
    icon: WorkflowIcon,
  },
  {
    title: "Payment Links",
    description:
      "Create and share payment links in seconds. Send them via text, email, or messaging apps. No code, no integration required.",
    icon: LinkIcon,
  },
  {
    title: "QR Payments",
    description:
      "Accept touch-free QR payments at the table, at the counter, or on the go. Fast, contactless, and easy for customers.",
    icon: QRIcon,
  },
  {
    title: "Merchant Dashboard",
    description:
      "Track sales, manage refunds, view analytics, and run your business from a single, modern dashboard.",
    icon: DashboardIcon,
  },
  {
    title: "Built for your industry",
    description:
      "Purpose-built for restaurants, nail salons, retail stores, and home services. Not a generic solution adapted after the fact.",
    icon: IndustryIcon,
  },
];

export default function SolutionOverview() {
  return (
    <SectionWrapper alternate>
      <Container>
        <SectionHeading
          title="One platform for every payment workflow"
          subtitle="HestaPay replaces fragmented payment tools with a single, modern platform built specifically for local businesses."
          className="mx-auto text-center"
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <solution.icon />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" size="base" href="/book-demo">
            {CTAS.secondary}
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}

/* Inline icon components — simple geometric SVGs */

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function QRIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}