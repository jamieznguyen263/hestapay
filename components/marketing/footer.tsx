import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { NAV } from "@/lib/constants";
import Container from "@/components/ui/container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              {BRAND.name}
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              {BRAND.description}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-sm font-semibold text-foreground">Solutions</p>
            <ul className="mt-4 space-y-2.5">
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
            <p className="text-sm font-semibold text-foreground">Products</p>
            <ul className="mt-4 space-y-2.5">
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
            <p className="text-sm font-semibold text-foreground">Company</p>
            <ul className="mt-4 space-y-2.5">
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
        <div className="mt-12 pt-8 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}