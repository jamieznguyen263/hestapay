import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { NAV } from "@/lib/constants";
import Container from "@/components/ui/container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14 lg:py-18">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand — spans 2 columns for breathing room */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              {BRAND.name}
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
              {BRAND.description}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Solutions
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Products
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {[
                ...NAV.main,
                { label: "About", href: "/about" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-border select-none">&middot;</span>
            <Link
              href="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}