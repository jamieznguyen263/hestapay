import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "base" | "lg";

interface ButtonBase {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonAsButton = ButtonBase &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBase &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border border-transparent shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_-2px_rgba(16,185,129,0.12),inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-[#0ea574] hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-4px_rgba(16,185,129,0.18),inset_0_1px_0_rgba(255,255,255,0.16)] hover:-translate-y-px active:bg-primary-dark active:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_4px_-1px_rgba(16,185,129,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] active:scale-[0.985]",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface hover:border-accent-border hover:text-foreground active:bg-surface active:scale-[0.985]",
  ghost:
    "bg-transparent text-muted hover:text-foreground hover:bg-surface active:scale-[0.985]",
};

const sizeClasses: Record<ButtonSize, string> = {
  base: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  variant = "primary",
  size = "base",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={classes}
        {...(linkProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;
  return <button type={type} className={classes} {...buttonProps} />;
}