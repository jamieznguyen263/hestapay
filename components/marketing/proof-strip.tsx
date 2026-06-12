const wordmarks = [
  "NORTHLINE HOSPITALITY",
  "HARBOR TABLE",
  "STUDIO LEDGER SPA",
  "WILLOW RETAIL GROUP",
  "FIELDKIT SERVICES",
  "ALDER RETAIL GROUP",
  "MARKET ROW",
  "PINE AVENUE",
];

export default function ProofStrip() {
  return (
    <section className="border-y border-[#E6EBF2] bg-white py-8 overflow-hidden">
      <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
        {/* Context label — sits once at the start of the marquee */}
        <span className="inline-flex shrink-0 text-[11px] font-semibold text-[#5B6475] uppercase tracking-[0.12em] mr-2">
          Trusted by
        </span>
        <span className="inline-flex shrink-0 h-4 w-px bg-[#E6EBF2]" />
        {[...wordmarks, ...wordmarks].map((name, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 text-[12px] font-semibold text-[#94A3B8] tracking-[0.15em] uppercase"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}