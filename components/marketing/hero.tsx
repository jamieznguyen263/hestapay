"use client";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { CTAS } from "@/lib/constants";
import FakeCursor from "@/components/marketing/fake-cursor";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 lg:py-32">
      {/* Ambient depth layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-radial-gradient from-primary/[0.04] to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-radial-gradient from-primary/[0.03] to-transparent blur-3xl" />
      </div>

      {/* Subtle grid on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] opacity-[0.03] pointer-events-none bg-grid-subtle" />

      <Container>
        <div className="grid gap-16 items-center lg:grid-cols-2 lg:gap-20">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-border bg-accent-surface px-4 py-1.5 text-sm font-medium text-primary mb-8">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-ambient-pulse" />
              Payment orchestration for local businesses
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.08]">
              Payments built for{" "}
              <span className="text-primary">local businesses</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed sm:text-xl">
              Modern payment software for restaurants, nail salons, retail, and
              home services. Integrate with trusted payment infrastructure,
              orchestrate your workflows, and grow -- all from one dashboard.
            </p>

            <div className="mt-10 flex items-center gap-4 flex-wrap lg:justify-start justify-center">
              <Button variant="primary" size="lg" href="/early-access">
                {CTAS.primary}
              </Button>
              <Button variant="outline" size="lg" href="/book-demo">
                {CTAS.secondary}
              </Button>
            </div>
          </div>

          {/* Right: product visual composition -- layered UI panels with fake cursor */}
          <div className="relative flex items-center justify-center lg:justify-end min-h-[420px]">
            {/* Background glow */}
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />

            {/* Dashboard surface (back layer) */}
            <div className="relative z-10 rounded-2xl border border-border bg-background p-4 shadow-lg max-w-[320px]">
              {/* Dashboard header bar */}
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-medium text-foreground">Dashboard</span>
              </div>
              <div className="mt-3 flex gap-3">
                {/* Metric tile */}
                <div className="flex-1 rounded-xl border border-border bg-surface p-3">
                  <p className="text-[10px] text-muted uppercase tracking-wide">Today</p>
                  <p className="mt-1 text-lg font-bold text-primary">{"\u2014"}</p>
                </div>
                <div className="flex-1 rounded-xl border border-border bg-surface p-3">
                  <p className="text-[10px] text-muted uppercase tracking-wide">Active</p>
                  <p className="mt-1 text-lg font-bold text-primary">{"\u2014"}</p>
                </div>
              </div>
              {/* Transaction row hints */}
              <div className="mt-3 space-y-2">
                {[
                  ["Payment Link", "text-muted"],
                  ["QR Payment", "text-muted"],
                  ["Refund", "text-muted"],
                ].map(([label, color], i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className={color}>{label}</span>
                    <span className="font-medium text-foreground">{"\u2014"}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment link surface (middle layer, offset) */}
            <div className="absolute z-20 -bottom-4 -right-2 rounded-2xl border border-border bg-background p-4 shadow-lg max-w-[220px]">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-foreground">Payment Link</span>
              </div>
              <p className="mt-2 text-[10px] text-muted">Share in seconds</p>
            </div>

            {/* QR tile (front accent) */}
            <div className="absolute z-30 -top-3 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-glow">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2m0 0H8m0 0a5 5 0 01-5-5 5 5 0 015-5m5 0h2m-2 0V4m2 0v1m-8 7h2m-2 0V8m2 3h4m-2 0V8m2 3v3m-8-3V8m2 3v3" />
              </svg>
            </div>

            {/* Signature fake cursor */}
            <FakeCursor active />
          </div>
        </div>
      </Container>
    </section>
  );
}