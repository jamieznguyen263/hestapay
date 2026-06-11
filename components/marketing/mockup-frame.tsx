import type { ReactNode } from "react";

interface MockupFrameProps {
  children: ReactNode;
  /** Optional label beneath the frame */
  label?: string;
  /** Subtle green border accent */
  accent?: boolean;
}

export default function MockupFrame({ children, label, accent = false }: MockupFrameProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border shadow-lg bg-background ${
      accent ? "border-accent-border" : "border-border"
    }`}>
      <div className="[transform:scale(0.45)] [transform-origin:top_left] w-[222%]">
        {children}
      </div>
      {label && (
        <p className="border-t border-border px-5 py-3 text-xs text-muted-soft text-center tracking-wide">
          {label}
        </p>
      )}
    </div>
  );
}