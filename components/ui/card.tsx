import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = "", hoverable = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-background p-6 shadow-sm ${
        hoverable
          ? "transition-shadow hover:shadow-md hover:border-primary/20"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}