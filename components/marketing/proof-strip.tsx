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
    <section className="border-y border-border bg-surface py-5 overflow-hidden">
      <div className="flex gap-14 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 rounded-full border border-accent-border bg-accent-surface px-5 py-2 text-sm font-medium text-primary shrink-0"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}