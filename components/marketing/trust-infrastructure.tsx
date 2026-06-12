import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

const assurances = [
  {
    label: "Trusted infrastructure",
    detail:
      "HestaPay integrates with established payment provider networks. You keep your processor relationships while gaining orchestration and visibility.",
  },
  {
    label: "No hardware changes",
    detail:
      "Works with the devices and terminals you already use. No rip-and-replace. No proprietary hardware lock-in.",
  },
  {
    label: "Multi-location by design",
    detail:
      "Route rules, settlement cycles, and exception workflows scale across locations. One surface for 3 or 300 locations.",
  },
];

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
      "We stopped jumping between three processor portals. One surface does it all.",
    name: "Morgan Reid",
    role: "Finance Lead, Alder Retail Group",
  },
];

export default function TrustInfrastructure() {
  return (
    <SectionWrapper className="bg-white" dense>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left: Trust framing + infrastructure visual */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
              Trust
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[42px] leading-[1.08]">
              Built for operators
              <br />
              who run real businesses.
            </h2>
            <p className="mt-5 text-[16px] text-[#5B6475] leading-relaxed max-w-md">
              HestaPay is not a processor or a bank. It's the software layer
              that sits above your existing payment infrastructure — making
              every transaction more reliable, more visible, and more
              recoverable.
            </p>

            {/* Compact infrastructure diagram */}
            <div className="mt-8 rounded-xl border border-[#E6EBF2] bg-[#F7F9FC] p-5">
              <p className="text-[10px] font-semibold text-[#5B6475] uppercase tracking-wider mb-4">
                How HestaPay sits in your stack
              </p>
              <div className="flex flex-col items-center gap-3">
                {/* Top: Payment surfaces */}
                <div className="flex items-center gap-2 w-full justify-center">
                  {["Terminal", "Online", "Mobile"].map((s) => (
                    <span key={s} className="rounded-md border border-[#E6EBF2] bg-white px-3 py-1.5 text-[10px] font-medium text-[#0F172A] shadow-sm">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Down arrow */}
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>

                {/* HestaPay layer */}
                <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 px-6 py-2.5 shadow-[0_0_16px_rgba(16,185,129,0.08)]">
                  <span className="text-[12px] font-bold text-emerald-800">HestaPay orchestration</span>
                </div>

                {/* Down arrow */}
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>

                {/* Bottom: Payment infrastructure */}
                <div className="flex items-center gap-2 w-full justify-center">
                  {["Processor A", "Processor B", "Processor C"].map((p) => (
                    <span key={p} className="rounded-md border border-[#E6EBF2] bg-white px-3 py-1.5 text-[10px] font-medium text-[#5B6475] shadow-sm">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-center text-[9px] text-[#94A3B8] mt-3">
                HestaPay routes across your existing processor relationships
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {assurances.map((a) => (
                <div key={a.label} className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#0F172A]">{a.label}</h4>
                    <p className="mt-1 text-[13px] text-[#5B6475] leading-relaxed">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonial column */}
          <div className="lg:col-span-7">
            <div className="rounded-[20px] border border-[#E6EBF2] bg-[#F7F9FC] p-8">
              <p className="text-[11px] font-semibold text-[#5B6475] uppercase tracking-wider mb-6">
                Trusted by operators
              </p>
              <div className="divide-y divide-[#E6EBF2]">
                {testimonials.map((t) => (
                  <div key={t.name} className="py-5 first:pt-0 last:pb-0">
                    <blockquote className="text-[15px] text-[#0F172A] leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-[#0F172A]">
                        {t.name}
                      </span>
                      <span className="text-[12px] text-[#94A3B8]">
                        — {t.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}