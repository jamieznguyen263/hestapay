import Link from "next/link";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-20 lg:py-32">
      <Container className="text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md mx-auto text-muted leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Button variant="primary" size="base" href="/">
            Back to Home
          </Button>
          <Button variant="outline" size="base" href="/pricing">
            View Pricing
          </Button>
          <Button variant="outline" size="base" href="/book-demo">
            Book a Demo
          </Button>
        </div>
      </Container>
    </div>
  );
}