import type { ReactNode } from "react";

interface MockupFrameProps {
  children: ReactNode;
  /** Optional label beneath the frame */
  label?: string;
}

export default function MockupFrame({ children, label }: MockupFrameProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-md">
      <div className="[transform:scale(0.45)] [transform-origin:top_left] w-[222%]">
        {children}
      </div>
      {label && (
        <p className="border-t border-border px-5 py-3 text-xs text-muted text-center">
          {label}
        </p>
      )}
    </div>
  );
}