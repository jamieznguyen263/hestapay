import SectionWrapper from "@/components/marketing/section-wrapper";
import Container from "@/components/ui/container";

export default function DashboardHeroScene() {
  return (
    <SectionWrapper className="bg-white">
      <Container>
        <div className="grid gap-12 items-center lg:grid-cols-12 lg:gap-16">
          {/* Left — feature copy */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-5">
              Merchant dashboard
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              One dashboard, full visibility
            </h2>
            <p className="mt-5 text-[15px] text-[#5B6475] leading-relaxed">
              Track authorizations, manage routing rules, and resolve payment
              exceptions from a single command surface. Built for payment
              operations teams running multi-location businesses.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  t: "Authorization monitoring",
                  d: "Real-time visibility into capture rates, authorization rates, and fallback activity across every payment channel.",
                },
                {
                  t: "Exception recovery",
                  d: "Automated retry rules recover stuck payments. Operators review and resolve flagged transactions from one queue.",
                },
                {
                  t: "Route health and audits",
                  d: "Every routing decision is logged. Settlement batch reconciliation surfaces variances before they compound.",
                },
                {
                  t: "Multi-location operations",
                  d: "43 locations, one dashboard. Route rules, settlement cycles, and exception workflows scale with your business.",
                },
              ].map((f) => (
                <li key={f.t} className="flex gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
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
                    <h4 className="text-sm font-semibold text-[#0F172A]">
                      {f.t}
                    </h4>
                    <p className="mt-1 text-sm text-[#5B6475] leading-relaxed">
                      {f.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — routing rules product view */}
          <div className="lg:col-span-7">
            <RoutingRulesVisual />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

function RoutingRulesVisual() {
  return (
    <div className="relative w-full select-none">
      <div className="rounded-xl border border-[#E6EBF2] bg-white overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)]">
        {/* Product header */}
        <div className="flex items-center gap-3 px-5 py-2.5 border-b border-[#E6EBF2] bg-[#F7F9FC]">
          <span className="text-[12px] font-semibold text-[#0F172A]">
            Northline Local Group
          </span>
          <span className="text-[#5B6475] text-[11px]">43 locations</span>
          <div className="ml-auto flex items-center gap-3 text-[11px]">
            <span className="text-[#5B6475]">This week</span>
            <span className="text-[#5B6475]">All routes</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-emerald-700 font-medium text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Routes healthy
            </span>
          </div>
        </div>

        {/* KPI strip */}
        <div className="flex items-stretch divide-x divide-[#E6EBF2] border-b border-[#E6EBF2]">
          <div className="px-5 py-3 flex-1">
            <p className="text-[10px] text-[#5B6475] uppercase tracking-wide font-medium">
              Active routes
            </p>
            <p className="text-[16px] font-bold text-[#0F172A] mt-0.5 tabular-nums">
              7
            </p>
            <p className="text-[10px] text-emerald-600 mt-0.5">
              6 healthy · 1 degraded
            </p>
          </div>
          <div className="px-5 py-3 flex-1">
            <p className="text-[10px] text-[#5B6475] uppercase tracking-wide font-medium">
              Routing decisions today
            </p>
            <p className="text-[16px] font-bold text-[#0F172A] mt-0.5 tabular-nums">
              28,491
            </p>
            <p className="text-[10px] text-emerald-600 mt-0.5">
              +8.2% vs last week
            </p>
          </div>
          <div className="px-5 py-3 flex-1">
            <p className="text-[10px] text-[#5B6475] uppercase tracking-wide font-medium">
              Route fallback rate
            </p>
            <p className="text-[16px] font-bold text-[#0F172A] mt-0.5 tabular-nums">
              1.14%
            </p>
            <p className="text-[10px] text-emerald-600 mt-0.5">
              −0.3% this week
            </p>
          </div>
          <div className="px-5 py-3 flex-1">
            <p className="text-[10px] text-[#5B6475] uppercase tracking-wide font-medium">
              Open exceptions
            </p>
            <p className="text-[16px] font-bold text-[#0F172A] mt-0.5 tabular-nums">
              17
            </p>
            <p className="text-[10px] text-rose-600 mt-0.5">
              3 need attention
            </p>
          </div>
        </div>

        {/* Main workspace — channel performance chart + route table */}
        <div className="p-5 space-y-4">
          {/* Channel performance chart */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[13px] font-semibold text-[#0F172A]">
                  Channel performance by route
                </h3>
                <p className="text-[11px] text-[#5B6475] mt-0.5">
                  Authorization volume by channel across active routes
                </p>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="flex items-center gap-1.5 text-[#5B6475]">
                  <span className="h-2.5 w-4 rounded-sm bg-blue-200" />{" "}
                  Terminal
                </span>
                <span className="flex items-center gap-1.5 text-[#5B6475]">
                  <span className="h-2.5 w-4 rounded-sm bg-emerald-200" />{" "}
                  Online
                </span>
                <span className="flex items-center gap-1.5 text-[#5B6475]">
                  <span className="h-2.5 w-4 rounded-sm bg-violet-200" /> Mobile
                </span>
              </div>
            </div>

            <div className="relative h-[180px]">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {["$50k", "$40k", "$30k", "$20k", "$10k", "$0"].map((v) => (
                  <div key={v} className="relative h-0">
                    <div className="absolute inset-x-0 border-t border-[#E6EBF2]" />
                    <span className="absolute -left-1 top-0 -translate-y-1/2 text-[10px] text-[#94A3B8] bg-white pr-2">
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Grouped bars — 3 channels × 7 days */}
              <div className="absolute inset-0 flex items-end gap-2 pl-8 pr-2 pb-6 z-10">
                {[
                  { t: 38, o: 42, m: 18 },
                  { t: 32, o: 44, m: 15 },
                  { t: 28, o: 48, m: 22 },
                  { t: 35, o: 40, m: 20 },
                  { t: 30, o: 46, m: 17 },
                  { t: 40, o: 38, m: 25 },
                  { t: 42, o: 44, m: 28 },
                ].map((d, i) => (
                  <div
                    key={i}
                    className="flex-1 flex items-end gap-[2px] h-full"
                  >
                    <div
                      className="flex-1 rounded-t"
                      style={{
                        height: `${(d.t / 50) * 100}%`,
                        background: "rgba(59,130,246,0.25)",
                      }}
                    />
                    <div
                      className="flex-1 rounded-t"
                      style={{
                        height: `${(d.o / 50) * 100}%`,
                        background: "rgba(16,185,129,0.25)",
                      }}
                    />
                    <div
                      className="flex-1 rounded-t"
                      style={{
                        height: `${(d.m / 50) * 100}%`,
                        background: "rgba(139,92,246,0.25)",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Day axis */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between pl-8 text-[10px] text-[#94A3B8] z-20">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Route health table */}
          <div className="border-t border-[#E6EBF2] pt-4">
            <h3 className="text-[13px] font-semibold text-[#0F172A] mb-3">
              Route health
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E6EBF2] text-[10px] text-[#5B6475] uppercase tracking-wide">
                    <th className="py-2 pl-1 font-medium">Route</th>
                    <th className="py-2 font-medium">Channel</th>
                    <th className="py-2 font-medium">Status</th>
                    <th className="py-2 font-medium text-right">Authorization rate</th>
                    <th className="py-2 font-medium text-right">Route latency</th>
                    <th className="py-2 font-medium text-right pr-1">Fallbacks</th>
                  </tr>
                </thead>
                <tbody className="text-[11px]">
                  {[
                    {
                      rt: "Rte A — Primary",
                      ch: "Online invoice",
                      st: "Healthy",
                      sc: "emerald",
                      rate: "99.4%",
                      lat: "312ms",
                      fb: "2",
                    },
                    {
                      rt: "Rte B — Secondary",
                      ch: "Card-present",
                      st: "Healthy",
                      sc: "emerald",
                      rate: "98.8%",
                      lat: "445ms",
                      fb: "7",
                    },
                    {
                      rt: "Rte C — Overflow",
                      ch: "Terminal",
                      st: "Degraded",
                      sc: "amber",
                      rate: "89.2%",
                      lat: "842ms",
                      fb: "23",
                    },
                    {
                      rt: "Rte D — Field pay",
                      ch: "Mobile",
                      st: "Healthy",
                      sc: "emerald",
                      rate: "97.9%",
                      lat: "521ms",
                      fb: "5",
                    },
                  ].map((r, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#E6EBF2] hover:bg-[#F7F9FC] ${
                        r.sc === "amber" ? "bg-amber-50/60" : ""
                      }`}
                    >
                      <td className="py-2.5 pl-1 text-[#0F172A] font-medium">
                        {r.rt}
                      </td>
                      <td className="py-2.5 text-[#5B6475]">{r.ch}</td>
                      <td className="py-2.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              r.sc === "emerald"
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                            }`}
                          />
                          <span
                            className={
                              r.sc === "emerald"
                                ? "text-emerald-600"
                                : "text-amber-600"
                            }
                          >
                            {r.st}
                          </span>
                        </span>
                      </td>
                      <td className="py-2.5 text-[#0F172A] font-medium text-right tabular-nums">
                        {r.rate}
                      </td>
                      <td className="py-2.5 text-[#5B6475] text-right tabular-nums">
                        {r.lat}
                      </td>
                      <td className="py-2.5 text-right tabular-nums pr-1">
                        <span
                          className={
                            Number(r.fb) > 20
                              ? "text-amber-600 font-medium"
                              : "text-[#5B6475]"
                          }
                        >
                          {r.fb}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-2 text-[10px] text-[#94A3B8]">
        Internal preview · Northline Local Group
      </p>
    </div>
  );
}