import Container from "@/components/ui/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 lg:pt-20 lg:pb-24">
      {/* Subtle ambient gradient — kept minimal */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[900px] h-[900px] -translate-y-1/3 translate-x-1/4 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,0.03) 0%, rgba(16,185,129,0.008) 40%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-10 items-start lg:grid-cols-12 lg:gap-14">
          {/* Left — authoritative copy */}
          <div className="lg:col-span-5 pt-2 lg:pt-6">
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

            {/* Credibility row */}
            <div className="mt-10 hidden sm:flex items-center gap-6 text-[13px]">
              <span className="text-[#5B6475]">
                <span className="font-semibold text-[#0F172A] tabular-nums">98.72%</span>{" "}
                auth rate
              </span>
              <span className="text-[#DDE1E6]">|</span>
              <span className="text-[#5B6475]">
                <span className="font-semibold text-[#0F172A] tabular-nums">421ms</span>{" "}
                median route
              </span>
              <span className="text-[#DDE1E6]">|</span>
              <span className="text-[#5B6475]">
                <span className="font-semibold text-[#0F172A] tabular-nums">43</span>{" "}
                locations connected
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
 * A believable payment monitoring workspace crop — not a mock dashboard.
 *
 * Structure:
 * - Compact app toolbar
 * - Dominant auth-rate chart with subtle volume context
 * - Right operational panel (alerts, route health, selected incident detail)
 * - Compact lower strip showing affected locations inline
 *
 * The workspace uses a subtle gray background to feel like a real
 * application surface, not a centered presentation card.
 */
function HeroProductSurface() {
  return (
    <div className="relative w-full select-none">
      {/* Workspace frame — subtle, screen-like, not a heavy card */}
      <div className="rounded-xl border border-[#E2E6EB] bg-[#F8F9FB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)]">
        {/* ===== TOOLBAR ===== */}
        <div className="flex items-center gap-3 px-5 py-2.5 border-b border-[#EBEEF2] bg-white">
          {/* Workspace identity */}
          <span className="text-[13px] font-semibold text-[#0F172A]">
            Northline Hospitality
          </span>
          <span className="text-[#D0D5DD] select-none">·</span>
          <span className="text-[12px] text-[#5B6475]">43 locations</span>

          {/* Live indicator */}
          <div className="flex items-center gap-1.5 ml-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[12px] font-medium text-emerald-600">
              Live
            </span>
          </div>

          {/* Incident indicator */}
          <div className="flex items-center gap-1.5 ml-2">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-[12px] font-medium text-amber-700">
              1 incident
            </span>
          </div>

          <div className="flex-1" />

          {/* Toolbar pills */}
          <span className="text-[11px] text-[#5B6475] bg-[#EEF1F5] rounded-md px-2.5 py-1 font-medium">
            Saved: Daily Review
          </span>
          <span className="text-[11px] text-[#5B6475] font-medium">
            Today · 06:00–18:00
          </span>
          <span className="text-[11px] text-[#5B6475] bg-[#EEF1F5] rounded-md px-2.5 py-1 font-medium">
            All channels
          </span>
        </div>

        {/* ===== MAIN WORKSPACE ===== */}
        <div className="flex" style={{ minHeight: "430px" }}>
          {/* LEFT: Chart + lower strip (~65%) */}
          <div className="flex-[1.65] min-w-0 flex flex-col bg-white">
            {/* KPI strip — compact, functional */}
            <div className="flex items-center gap-6 px-5 pt-3.5 pb-1">
              <div>
                <p className="text-[11px] text-[#5B6475] font-medium">
                  Captured today
                </p>
                <p className="text-[20px] font-bold text-[#0F172A] tabular-nums leading-tight">
                  $184,920
                </p>
              </div>
              <div>
                <p className="text-[11px] text-[#5B6475] font-medium">
                  Auth rate
                </p>
                <p className="text-[20px] font-bold text-emerald-600 tabular-nums leading-tight">
                  98.72%
                </p>
              </div>
              <div>
                <p className="text-[11px] text-[#5B6475] font-medium">
                  Active routes
                </p>
                <p className="text-[20px] font-bold text-[#0F172A] tabular-nums leading-tight">
                  6/7
                </p>
              </div>
              {/* Chart legend — inline, subtle */}
              <div className="ml-auto flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#E0E5EC] border border-[#D0D7E0]" />
                  <span className="text-[11px] text-[#5B6475]">Volume</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-0.5 w-4 bg-emerald-500 rounded-full" />
                  <span className="text-[11px] text-[#5B6475]">Auth rate</span>
                </div>
              </div>
            </div>

            {/* Auth Rate Chart — dominant */}
            <div className="flex-1 px-4 pt-1 pb-1 min-h-[240px]">
              <AuthRateChart />
            </div>

            {/* ===== LOWER STRIP: Affected locations — compact, operational ===== */}
            <div className="border-t border-[#EBEEF2] bg-[#FAFBFC] px-5 py-2.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0F172A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Locations routed via degraded Rte C
                </span>
                <span className="text-[11px] text-[#94A3B8]">—</span>
                {[
                  {
                    name: "Bistro #4",
                    txns: 12,
                    delta: "+310ms",
                  },
                  {
                    name: "Kitchen #9",
                    txns: 8,
                    delta: "+285ms",
                  },
                  {
                    name: "Café #22",
                    txns: 5,
                    delta: "+198ms",
                  },
                ].map((loc, i) => (
                  <span
                    key={loc.name}
                    className="inline-flex items-center gap-1 text-[11px]"
                  >
                    {i > 0 && (
                      <span className="text-[#D0D5DD] select-none">·</span>
                    )}
                    <span className="font-medium text-[#0F172A]">
                      {loc.name}
                    </span>
                    <span className="text-[#5B6475] tabular-nums">
                      {loc.txns} txns
                    </span>
                    <span className="font-medium text-amber-600 tabular-nums">
                      {loc.delta}
                    </span>
                  </span>
                ))}
                <span className="text-[11px] text-[#94A3B8] ml-1">
                  rerouting active
                </span>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Operational support panel ===== */}
          <div className="w-[278px] shrink-0 border-l border-[#EBEEF2] bg-white flex-col hidden lg:flex">
            {/* Panel header — compact */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#EBEEF2]">
              <span className="text-[12px] font-semibold text-[#0F172A]">
                Operations
              </span>
              <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-2 py-0.5">
                3 alerts
              </span>
            </div>

            {/* Incident queue */}
            <div className="px-4 py-3 border-b border-[#EBEEF2]">
              <p className="text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide mb-2.5">
                Active incidents
              </p>
              <div className="space-y-2.5">
                <div className="flex gap-2.5">
                  <span className="h-2 w-2 rounded-full mt-1 shrink-0 bg-rose-500" />
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium text-[#0F172A] leading-snug">
                      Rte C auth rate degraded
                    </p>
                    <p className="text-[11px] text-[#5B6475]">
                      14:20 · dropped to 82.1%
                    </p>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <span className="h-2 w-2 rounded-full mt-1 shrink-0 bg-amber-500" />
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium text-[#0F172A] leading-snug">
                      Latency spike on Rte C
                    </p>
                    <p className="text-[11px] text-[#5B6475]">
                      842ms peak · auto-recovering
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Route health — compact inline bars */}
            <div className="px-4 py-3 border-b border-[#EBEEF2]">
              <p className="text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide mb-2.5">
                Route health
              </p>
              <div className="space-y-2">
                {[
                  {
                    name: "Rte A — Primary",
                    rate: 99.4,
                    latency: "312ms",
                    degraded: false,
                  },
                  {
                    name: "Rte B — Secondary",
                    rate: 98.8,
                    latency: "298ms",
                    degraded: false,
                  },
                  {
                    name: "Rte C — Overflow",
                    rate: 82.1,
                    latency: "842ms",
                    degraded: true,
                  },
                  {
                    name: "Rte D — Field pay",
                    rate: 97.9,
                    latency: "356ms",
                    degraded: false,
                  },
                ].map((r) => (
                  <div
                    key={r.name}
                    className="flex items-center gap-2.5 text-[12px]"
                  >
                    {/* Mini health bar */}
                    <div className="flex-1 min-w-0 flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-[#E8ECF1] overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-none ${
                            r.degraded ? "bg-amber-500" : "bg-emerald-500"
                          }`}
                          style={{ width: `${r.rate}%` }}
                        />
                      </div>
                      <span className="text-[12px] text-[#0F172A] w-[70px] shrink-0 truncate">
                        {r.name}
                      </span>
                    </div>
                    <span
                      className={`text-[12px] font-semibold tabular-nums w-[42px] text-right shrink-0 ${
                        r.degraded ? "text-amber-600" : "text-emerald-600"
                      }`}
                    >
                      {r.rate.toFixed(1)}%
                    </span>
                    <span
                      className={`text-[11px] tabular-nums w-[38px] text-right shrink-0 ${
                        r.degraded
                          ? "text-amber-600 font-medium"
                          : "text-[#94A3B8]"
                      }`}
                    >
                      {r.latency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected incident detail — Rte C */}
            <div className="flex-1 px-4 py-3 bg-[#FAFBFC]">
              <p className="text-[11px] font-semibold text-[#5B6475] uppercase tracking-wide mb-2.5">
                Selected: Rte C detail
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] text-[#94A3B8] mb-0.5">Fallback</p>
                  <p className="text-[12px] font-medium text-[#0F172A] leading-snug">
                    Rte C → Rte E engaged
                  </p>
                  <p className="text-[11px] text-emerald-600 font-medium">
                    Auto-recovery active
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#94A3B8] mb-0.5">
                    Latency delta vs baseline
                  </p>
                  <p className="text-[13px] font-bold text-amber-600 tabular-nums">
                    +526ms
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#94A3B8] mb-0.5">
                    Transactions affected
                  </p>
                  <p className="text-[12px] font-medium text-[#0F172A] tabular-nums">
                    25 txns · $4,820 in flight
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[#94A3B8] mb-0.5">
                    Processor response
                  </p>
                  <p className="text-[11px] text-[#5B6475]">
                    Gateway timeout · 3 attempts
                  </p>
                </div>
              </div>
            </div>

            {/* Quick action footer */}
            <div className="px-4 py-2.5 border-t border-[#EBEEF2] bg-white">
              <span className="text-[12px] font-medium text-[#5B6475] cursor-pointer hover:text-[#0F172A] transition-colors">
                View full incident →
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-3 text-[11px] text-[#94A3B8]">
        Internal preview · Northline Hospitality Group
      </p>
    </div>
  );
}

/**
 * AuthRateChart
 *
 * Professional SVG monitoring chart.
 *
 * Design:
 * - Y-axis: 97.0%–99.8% (realistic auth-rate range)
 * - Subtle volume bars as secondary context
 * - Auth-rate polyline as primary signal
 * - SLA reference line at 98.5%
 * - One credible dip at 15:00 (~97.8%)
 * - No floating decorative labels — data speaks for itself
 */
function AuthRateChart() {
  // Hourly data: 06:00–20:00
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
    { h: "15", v: 85, a: 97.8 }, // Credible anomaly — auth drops ~1.7pp
    { h: "16", v: 92, a: 98.8 },
    { h: "17", v: 68, a: 99.0 },
    { h: "18", v: 48, a: 99.1 },
    { h: "19", v: 52, a: 98.9 },
    { h: "20", v: 70, a: 99.1 },
  ];

  const n = data.length;

  // SVG layout constants
  const svgW = 780;
  const svgH = 250;
  const padL = 50;
  const padR = 16;
  const padT = 10;
  const padB = 26;
  const chartW = svgW - padL - padR;
  const chartH = svgH - padT - padB;

  // Y scale: maps auth rate → SVG y
  const yMin = 96.8;
  const yMax = 99.8;
  const yScale = (rate: number) =>
    padT + ((yMax - rate) / (yMax - yMin)) * chartH;

  // X scale: maps index → SVG x
  const xScale = (i: number) => padL + (i / (n - 1)) * chartW;

  // Build auth-rate polyline points
  const linePoints = data
    .map((d, i) => `${xScale(i).toFixed(1)},${yScale(d.a).toFixed(1)}`)
    .join(" ");

  // Y-axis ticks
  const yTicks = [99.5, 99.0, 98.5, 98.0, 97.5, 97.0];

  // X-axis labels (every other)
  const xLabels = [
    { i: 0, label: "06:00" },
    { i: 2, label: "08:00" },
    { i: 4, label: "10:00" },
    { i: 6, label: "12:00" },
    { i: 8, label: "14:00" },
    { i: 10, label: "16:00" },
    { i: 12, label: "18:00" },
    { i: 14, label: "20:00" },
  ];

  // Mark anomaly index
  const anomalyIdx = data.findIndex((d) => d.a < 98.0);

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
    >
      {/* ===== Grid lines ===== */}
      {yTicks.map((tick) => {
        const y = yScale(tick);
        const isSLA = tick === 98.5;
        return (
          <g key={`grid-${tick}`}>
            <line
              x1={padL}
              y1={y}
              x2={svgW - padR}
              y2={y}
              stroke={isSLA ? "#FCD34D" : "#E4E8ED"}
              strokeWidth={isSLA ? 1 : 0.75}
              strokeDasharray={isSLA ? "6,3" : undefined}
              opacity={isSLA ? 0.7 : 1}
            />
            <text
              x={padL - 8}
              y={y + 4}
              textAnchor="end"
              fill={isSLA ? "#B45309" : "#5B6475"}
              fontSize="11"
              fontFamily="inherit"
              fontWeight={isSLA ? 600 : 400}
            >
              {tick.toFixed(1)}%
            </text>
            {isSLA && (
              <text
                x={svgW - padR - 2}
                y={y - 4}
                textAnchor="end"
                fill="#B45309"
                fontSize="10"
                fontFamily="inherit"
                fontWeight={600}
              >
                98.5% SLA
              </text>
            )}
          </g>
        );
      })}

      {/* ===== Volume bars — very subtle, secondary context ===== */}
      {data.map((d, i) => {
        const barW = Math.max(2, (chartW / n) * 0.55);
        const barX = xScale(i) - barW / 2;
        const barH = (d.v / 100) * chartH * 0.9; // Scale to 90% of chart height
        const barY = padT + chartH - barH;
        const isAnomaly = i === anomalyIdx;
        return (
          <rect
            key={`vol-${i}`}
            x={barX}
            y={barY}
            width={barW}
            height={Math.max(1, barH)}
            rx={1.5}
            fill={
              isAnomaly
                ? "rgba(245,158,11,0.12)"
                : "rgba(203,213,225,0.22)"
            }
          />
        );
      })}

      {/* ===== Auth rate polyline ===== */}
      <polyline
        points={linePoints}
        fill="none"
        stroke="#10B981"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Subtle glow under line */}
      <polyline
        points={linePoints}
        fill="none"
        stroke="rgba(16,185,129,0.15)"
        strokeWidth="4"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* ===== Data point dots ===== */}
      {data.map((d, i) => {
        const cx = xScale(i);
        const cy = yScale(d.a);
        const isAnomaly = i === anomalyIdx;
        return (
          <circle
            key={`dot-${i}`}
            cx={cx}
            cy={cy}
            r={isAnomaly ? 2.5 : 1.5}
            fill={isAnomaly ? "#F59E0B" : "#10B981"}
            stroke="white"
            strokeWidth={isAnomaly ? 1.5 : 1}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}

      {/* ===== Anomaly highlight band ===== */}
      {anomalyIdx >= 0 && (
        <rect
          x={xScale(anomalyIdx) - (chartW / n) * 0.45}
          y={padT}
          width={(chartW / n) * 0.9}
          height={chartH}
          fill="rgba(245,158,11,0.04)"
          rx={2}
        />
      )}

      {/* ===== X-axis labels ===== */}
      {xLabels.map(({ i, label }) => (
        <text
          key={`x-${i}`}
          x={xScale(i)}
          y={svgH - 6}
          textAnchor="middle"
          fill="#5B6475"
          fontSize="11"
          fontFamily="inherit"
          fontWeight={500}
        >
          {label}
        </text>
      ))}
    </svg>
  );
}