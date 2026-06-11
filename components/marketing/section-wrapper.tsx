import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  /** Alternate background for visual rhythm */
  alternate?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section
      className={`py-16 lg:py-24 ${
        alternate ? "bg-surface" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}