export const BRAND = {
  name: "HestaPay",
  tagline: "Payments built for local businesses.",
  description:
    "HestaPay is a modern payment software platform for restaurants, nail salons, retail, and home services. Integrate, orchestrate, and grow — without the complexity.",
} as const;

export const CTAS = {
  primary: "Get Early Access",
  secondary: "Book a Demo",
  tertiary: "See Product Demo",
  exploreRestaurants: "Explore Restaurant Features",
  exploreSalons: "Explore Salon Features",
  exploreQR: "See QR in Action",
  explorePaymentLinks: "Explore Payment Links",
  exploreDashboard: "Explore the Dashboard",
} as const;

export const NAV = {
  solutions: [
    { label: "Restaurants", href: "/restaurants" },
    { label: "Nail Salons", href: "/nail-salons" },
    { label: "Retail", href: "/retail" },
    { label: "Home Services", href: "/home-services" },
  ],
  products: [
    { label: "Payment Links", href: "/payment-links" },
    { label: "QR Payments", href: "/qr-payments" },
    { label: "Merchant Dashboard", href: "/merchant-dashboard" },
  ],
  main: [
    { label: "Pricing", href: "/pricing" },
    { label: "Security", href: "/security" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
} as const;