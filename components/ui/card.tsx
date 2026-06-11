import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  /** Elevated card sits above the surface with a slightly stronger shadow */
  elevated?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverable = false,
  elevated = false,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background p-6 ${
        elevated ? "shadow-md" : "shadow-card"
      } ${
        hoverable
          ? "transition-all duration-200 hover:shadow-card-hover hover:border-accent-border hover:-translate-y-0.5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}