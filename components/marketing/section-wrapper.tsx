import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  /** Alternate background for visual rhythm */
  alternate?: boolean;
  /** Tighter vertical spacing for denser sections */
  dense?: boolean;
  /** Subtle ambient green glow */
  ambient?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  alternate = false,
  dense = false,
  ambient = false,
}: SectionWrapperProps) {
  return (
    <section
      className={`${ambient ? "ambient-glow" : ""} ${
        dense ? "py-12 lg:py-20" : "py-16 lg:py-24"
      } ${alternate ? "bg-surface" : ""} ${className}`}
    >
      {children}
    </section>
  );
}