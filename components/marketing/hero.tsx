import Container from "@/components/ui/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 lg:pt-20 lg:pb-24">
      {/* Subtle ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/3 translate-x-1/4 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,0.05) 0%, rgba(16,185,129,0.01) 40%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-10 items-start lg:grid-cols-12 lg:gap-12">
          {/* Left — authoritative copy */}
          <div className="lg:col-span-5 pt-2 lg:pt-8">
            <div className="inline-flex items-center gap-1.5 rounded-md border border-[#E0E4E9] bg-white px-3 py-1.5 text-[13px] font-medium text-[#0F172A] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              Payment orchestration for local businesses
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[48px] leading-[1.05]">
              Route payments.
              <br />
              Recover revenue.
              <br />
              See everything.
            </h1>

            <p className="mt-6 max-w-md text-[16px] text-[#5B6475] leading-relaxed">
              HestaPay is the orchestration layer between your payment surfaces
              and trusted infrastructure — routing every transaction, recovering
              failed payments, and giving operators full visibility across every
              channel and location.
            </p>

            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <a
                href="/early-access"
                className="inline-flex items-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white border border-emerald-500 px-6 py-3 text-[15px] font-semibold transition-colors shadow-[0_2px_8px_rgba(16,185,129,0.25)]"
              >
                Get early access
              </a>
              <a
                href="/book-demo"
                className="inline-flex items-center rounded-lg border border-[#E0E4E9] text-[#5B6475] hover:border-[#C4CBD5] hover:text-[#0F172A] bg-white px-6 py-3 text-[15px] font-semibold transition-colors"
              >
                Book a demo
              </a>
            </div>

            {/* Compact credibility row */}
            <div className="mt-10 hidden sm:flex items-center gap-6 text-[12px]">
              <span className="text-[#5B6475]">
                <span className="font-semibold text-[#0F172A] tabular-nums">98.72%</span> auth rate
              </span>
              <span className="text-[#DDE1E6]">|</span>
              <span className="text-[#5B6475]">
                <span className="font-semibold text-[#0F172A] tabular-nums">421ms</span> median route
              </span>
              <span className="text-[#DDE1E6]">|</span>
              <span className="text-[#5B6475]">
                <span className="font-semibold text-[#0F172A] tabular-nums">43</span> locations connected
              </span>
            </div>
          </div>

          {/* Right — product monitoring surface */}
          <div className="lg:col-span-7">
            <HeroProductSurface />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * HeroProductSurface
 *
 * A believable payment monitoring workspace:
 * - Top toolbar with operational context
 * - Main chart area with auth-rate-scaled Y axis
 * - Lower support zone showing affected locations
 * - Right operational support panel with incidents, route states, and recovery context
 */
function HeroProductSurface() {
  return (
    <div className="relative w-full select-none">
      <div className="rounded-[14px] border border-[#DDE1E6] bg-white overflow-hidden shadow-[0_6px_40px_rgba(0,0,0,0.07),0_0_0_1px_rgba(0,0,0,0.03)]">
        {/* ======= TOP TOOLBAR ======= */}
        <div className="flex items-center gap-3 px-5 py-2.5 border-b border-[#E6EBF2] bg-[#FAFBFC]">
          {/* Workspace name */}
          <span className="text-[13px] font-semibold text-[#0F172A]">Northline Hospitality</span>
          <span className="text-[#DDE1E6]">·</span>
          <span className="text-[12px] text-[#5B6475]">43 locations</span>

          {/* Live indicator */}
          <div className="flex items-center gap-1.5 ml-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[12px] font-medium text-emerald-600">Live</span>
          </div>

          {/* Incident count */}
          <div className="flex items-center gap-1.5 ml-4">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-[12px] font-medium text-amber-700">1 active incident</span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Saved view + date + scope */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#5B6475] bg-[#EEF1F5] rounded px-2 py-1">Saved: Daily Auth Review</span>
            <span className="text-[11px] text-[#5B6475]">Today · 06:00–18:00</span>
            <span className="text-[11px] text-[#5B6475] bg-[#EEF1F5] rounded px-2 py-1">All channels</span>
          </div>
        </div>

        {/* ======= MAIN WORKSPACE ======= */}
        <div className="flex" style={{ minHeight: "420px" }}>
          {/* LEFT: Chart + lower support (~65%) */}
          <div className="flex-[1.65] min-w-0 flex flex-col">
            {/* KPI row */}
            <div className="flex items-center gap-6 px-5 pt-4 pb-2">
              <div>
                <p className="text-[11px] text-[#5B6475] font-medium">Captured today</p>
                <p className="text-[20px] font-bold text-[#0F172A] tabular-nums leading-tight">$184,920</p>
              </div>
              <div>
                <p className="text-[11px] text-[#5B6475] font-medium">Auth rate</p>
                <p className="text-[20px] font-bold text-emerald-600 tabular-nums leading-tight">98.72%</p>
              </div>
              <div>
                <p className="text-[11px] text-[#5B6475] font-medium">Active routes</p>
                <p className="text-[20px] font-bold text-[#0F172A] tabular-nums leading-tight">6/7</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-[11px] text-[#5B6475]">Volume</span>
                <span className="h-3 w-5 rounded-sm bg-emerald-200 border border-emerald-300" />
                <span className="text-[11px] text-[#5B6475] ml-2">Auth rate</span>
                <span className="h-0.5 w-5 bg-emerald-500 rounded-full" />
              </div>
            </div>

            {/* Auth Rate Chart — dominant */}
            <div className="flex-1 px-5 pt-1 pb-2 relative">
              <AuthRateChart />
            </div>

            {/* ======= LOWER SUPPORT ZONE: Affected locations ======= */}
            <div className="border-t border-[#E6EBF2] px-5 py-3 bg-[#FAFBFC]">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span className="text-[12px] font-semibold text-[#0F172A]">Locations affected by degraded route</span>
                <span className="text-[11px] text-[#94A3B8] ml-2">3 of 43</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: "Northline Bistro #4", impact: "12 txns rerouted", delta: "+310ms" },
                  { name: "Northline Kitchen #9", impact: "8 txns rerouted", delta: "+285ms" },
                  { name: "Northline Café #22", impact: "5 txns rerouted", delta: "+198ms" },
                ].map((loc) => (
                  <div key={loc.name} className="flex items-center justify-between rounded-md border border-[#E6EBF2] bg-white px-3 py-2">
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-[#0F172A] truncate">{loc.name}</p>
                      <p className="text-[11px] text-[#94A3B8]">{loc.impact}</p>
                    </div>
                    <span className="text-[12px] font-semibold text-amber-600 tabular-nums shrink-0">{loc.delta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ======= RIGHT: Operational support panel ======= */}
          <div className="w-[290px] shrink-0 border-l border-[#E6EBF2] bg-[#F8F9FA] flex flex-col">
            {/* Panel header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E6EBF2] bg-white">
              <span className="text-[12px] font-semibold text-[#0F172A]">Operations</span>
              <span className="text-[11px] font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded px-2 py-0.5">3 alerts</span>
            </div>

            {/* Incident queue */}
            <div className="px-4 py-3 border-b border-[#E6EBF2]">
              <p className="text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide mb-2.5">Active incidents</p>
              <div className="space-y-2.5">
                {[
                  { title: "Rte C auth rate drop", detail: "Degraded 14:20 · 89.2%", severity: "high" },
                  { title: "Latency spike Rte C", detail: "842ms peak · Auto-recovering", severity: "medium" },
                ].map((inc, i) => (
                  <div key={i} className="flex gap-2.5">
                    <span className={`h-2 w-2 rounded-full mt-1 shrink-0 ${inc.severity === "high" ? "bg-rose-500" : "bg-amber-500"}`} />
                    <div className="min-w-0">
                      <p className="text-[12px] font-medium text-[#0F172A]">{inc.title}</p>
                      <p className="text-[11px] text-[#5B6475]">{inc.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Route health summary */}
            <div className="px-4 py-3 border-b border-[#E6EBF2]">
              <p className="text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide mb-2.5">Route health</p>
              <div className="space-y-2">
                {[
                  { name: "Rte A — Primary", status: "Healthy", rate: "99.4%", latency: "312ms" },
                  { name: "Rte B — Secondary", status: "Healthy", rate: "98.8%", latency: "298ms" },
                  { name: "Rte C — Overflow", status: "Degraded", rate: "89.2%", latency: "842ms" },
                  { name: "Rte D — Field pay", status: "Healthy", rate: "97.9%", latency: "356ms" },
                ].map((r) => (
                  <div key={r.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`h-2 w-2 rounded-full shrink-0 ${r.status === "Degraded" ? "bg-amber-500" : "bg-emerald-500"}`} />
                      <span className="text-[12px] text-[#0F172A] truncate">{r.name}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`text-[12px] font-medium tabular-nums ${r.status === "Degraded" ? "text-amber-600" : "text-emerald-600"}`}>
                        {r.rate}
                      </span>
                      <span className={`text-[11px] tabular-nums ${r.status === "Degraded" ? "text-amber-600" : "text-[#94A3B8]"}`}>
                        {r.latency}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Degraded route detail */}
            <div className="flex-1 px-4 py-3 overflow-hidden">
              <p className="text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide mb-2.5">Selected: Rte C</p>
              <div className="space-y-2.5">
                <div>
                  <p className="text-[11px] text-[#94A3B8]">Fallback status</p>
                  <p className="text-[12px] font-medium text-[#0F172A]">
                    Rte C → Rte E engaged
                    <span className="text-[11px] text-emerald-600 ml-1.5">Auto-recovery active</span>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#94A3B8]">Latency delta</p>
                  <p className="text-[12px] font-medium text-amber-600">+526ms vs baseline</p>
                </div>
                <div>
                  <p className="text-[11px] text-[#94A3B8]">Transactions affected</p>
                  <p className="text-[12px] font-medium text-[#0F172A]">25 txns · $4,820 in flight</p>
                </div>
              </div>
            </div>

            {/* Quick action */}
            <div className="px-4 py-2.5 border-t border-[#E6EBF2] bg-white">
              <span className="text-[12px] font-medium text-[#5B6475] cursor-pointer hover:text-[#0F172A] transition-colors">
                View full incident →
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-3 text-[11px] text-[#94A3B8]">Internal preview · Northline Hospitality Group</p>
    </div>
  );
}

/**
 * AuthRateChart
 *
 * Real monitoring chart:
 * - Y-axis scaled for auth rate: 97.5 / 98.0 / 98.5 / 99.0 / 99.5
 * - Stronger grid lines
 * - Volume bars as secondary context
 * - Auth rate line as primary signal
 * - Anomaly shown as a real monitored incident marker, not a decorative label
 * - Better axis hierarchy
 */
function AuthRateChart() {
  // Data: hour labels + volume (0-100) + auth rate in real range
  const data = [
    { h: "06", v: 65, a: 99.1 },
    { h: "07", v: 42, a: 99.2 },
    { h: "08", v: 78, a: 98.9 },
    { h: "09", v: 55, a: 99.3 },
    { h: "10", v: 88, a: 99.0 },
    { h: "11", v: 96, a: 98.8 },
    { h: "12", v: 72, a: 99.1 },
    { h: "13", v: 45, a: 99.4 },
    { h: "14", v: 62, a: 98.9 },
    { h: "15", v: 85, a: 82.1 }, // anomaly — real auth rate crash
    { h: "16", v: 92, a: 98.8 },
    { h: "17", v: 68, a: 99.0 },
    { h: "18", v: 48, a: 99.1 },
    { h: "19", v: 52, a: 98.9 },
    { h: "20", v: 70, a: 99.1 },
  ];

  // Map auth rate 80-100 to chart Y space (top of chart = 99.5%, bottom = 80%)
  const yMin = 80;
  const yMax = 99.8;
  const toY = (rate: number) => ((yMax - rate) / (yMax - yMin)) * 100;

  // Y-axis ticks
  const yTicks = [99.5, 99.0, 98.5, 98.0, 97.5];

  const svgPathPoints = data
    .map((d, i) => `${(i / (data.length - 1)) * 100},${toY(d.a)}`)
    .join(" ");

  // Find anomaly index
  const anomalyIdx = data.findIndex((d) => d.a < 90);
  const anomalyX = (anomalyIdx / (data.length - 1)) * 100;
  const anomalyY = toY(data[anomalyIdx].a);

  return (
    <div className="relative h-full min-h-[210px]">
      {/* Y-axis grid lines — auth rate scaled */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {yTicks.map((tick) => (
          <div key={tick} className="relative" style={{ height: 0 }}>
            <div className="absolute inset-x-0 border-t border-[#E6EBF2]" />
            <span className="absolute -left-0.5 top-0 -translate-y-1/2 text-[11px] font-medium text-[#5B6475] bg-white pr-2 tabular-nums">
              {tick.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>

      {/* Volume bars — secondary */}
      <div className="absolute inset-0 flex items-end gap-[2px] pl-12 pr-2 pb-7 z-10">
        {data.map((d, i) => (
          <div key={i} className="flex-1 relative h-full flex items-end">
            <div
              className="w-full rounded-t-[2px]"
              style={{
                height: `${d.v}%`,
                background:
                  d.a < 90
                    ? "rgba(245,158,11,0.18)"
                    : "rgba(16,185,129,0.15)",
                borderTop:
                  d.a < 90
                    ? "1px solid rgba(245,158,11,0.3)"
                    : "1px solid rgba(16,185,129,0.25)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Auth rate line — primary signal — SVG overlay */}
      <svg
        className="absolute inset-0 z-20 pointer-events-none overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Line glow */}
        <defs>
          <filter id="lineGlow" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
          </filter>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(16,185,129,0.6)" />
            <stop offset="100%" stopColor="rgba(16,185,129,0.9)" />
          </linearGradient>
        </defs>

        {/* Auth rate line */}
        <polyline
          points={svgPathPoints}
          fill="none"
          stroke="rgba(16,185,129,0.9)"
          strokeWidth="0.7"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Data points */}
        {data.map((d, i) => {
          const x = (i / (data.length - 1)) * 100;
          const y = toY(d.a);
          const isAnomaly = d.a < 90;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={isAnomaly ? 1.2 : 0.5}
              fill={isAnomaly ? "rgb(239,68,68)" : "rgb(16,185,129)"}
              stroke={isAnomaly ? "rgba(239,68,68,0.3)" : "rgba(16,185,129,0.3)"}
              strokeWidth="0.3"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* Anomaly vertical band */}
      {anomalyIdx >= 0 && (
        <div
          className="absolute top-0 bottom-0 z-[5] pointer-events-none"
          style={{
            left: `${anomalyX - 1.5}%`,
            width: "3%",
            background: "rgba(239,68,68,0.06)",
            borderLeft: "1px dashed rgba(239,68,68,0.25)",
            borderRight: "1px dashed rgba(239,68,68,0.25)",
          }}
        />
      )}

      {/* Anomaly marker label — like a real monitoring annotation */}
      {anomalyIdx >= 0 && (
        <div
          className="absolute z-20 -translate-x-1/2"
          style={{ top: `${anomalyY + 3}%`, left: `${anomalyX}%` }}
        >
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-rose-700 bg-white border border-rose-200 rounded-md px-2 py-1 whitespace-nowrap shadow-sm">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            Auth drop to 82.1% at 15:00
          </span>
        </div>
      )}

      {/* Hour axis */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between pl-12 text-[11px] font-medium text-[#5B6475] z-20">
        {["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"].map((h) => (
          <span key={h}>{h}</span>
        ))}
      </div>

      {/* 98.5% reference line */}
      <div className="absolute inset-x-0 z-10 border-t border-dashed border-amber-300 pointer-events-none" style={{ top: `${toY(98.5)}%` }} />
      <span
        className="absolute right-2 z-10 text-[11px] font-medium text-amber-700 bg-white rounded border border-amber-200 px-2 py-0.5 pointer-events-none"
        style={{ top: `${toY(98.5) - 1}%` }}
      >
        98.5% SLA floor
      </span>
    </div>
  );
}