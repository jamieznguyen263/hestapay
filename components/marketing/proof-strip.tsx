const items = [
  "Restaurants",
  "Nail salons",
  "Retail",
  "Home services",
  "Payment links",
  "QR payments",
  "Merchant dashboard",
  "Trusted payment infrastructure",
  "Payment orchestration",
];

export default function ProofStrip() {
  return (
    <section className="border-y border-border/50 bg-surface/50 py-4 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 text-sm font-medium text-muted shrink-0 opacity-70"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary/60" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}