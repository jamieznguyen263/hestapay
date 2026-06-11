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
    "bg-primary text-white hover:bg-primary-dark shadow-glow-sm hover:shadow-glow active:bg-primary-darker",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface hover:border-accent-border",
  ghost:
    "bg-transparent text-muted hover:text-foreground hover:bg-surface",
};

const sizeClasses: Record<ButtonSize, string> = {
  base: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "base",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
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