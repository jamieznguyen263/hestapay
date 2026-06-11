import type { Metadata } from "next";
import { BRAND, SITE_URL } from "@/lib/constants";

function canonicalPath(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function createPageMetadata(
  title: string,
  description?: string,
  path?: string
): Metadata {
  const desc = description ?? BRAND.description;
  const url = path ? canonicalPath(path) : undefined;

  return {
    title,
    description: desc,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: `${title} | ${BRAND.name}`,
      description: desc,
      url,
    },
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: `${BRAND.name} — ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
};

export const PAGE_TITLES: Record<string, string> = {
  "/": "Home",
  "/restaurants": "Payment Software for Restaurants",
  "/nail-salons": "Payment Software for Nail Salons",
  "/retail": "Payment Software for Retail Stores",
  "/home-services": "Payment Software for Home Services",
  "/payment-links": "Payment Links",
  "/qr-payments": "QR Payments",
  "/merchant-dashboard": "Merchant Dashboard",
  "/pricing": "Pricing",
  "/security": "Security & Compliance",
  "/book-demo": "Book a Demo",
  "/early-access": "Get Early Access",
  "/faq": "FAQ",
  "/about": "About",
  "/contact": "Contact",
  "/resources": "Resources",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
};

export const PAGE_DESCRIPTIONS: Record<string, string> = {
  "/":
    "HestaPay is a modern payment software platform for restaurants, nail salons, retail, and home services. Payment links, QR payments, and a unified merchant dashboard.",
  "/restaurants":
    "See how HestaPay helps restaurants streamline payments, orders, and customer checkout.",
  "/nail-salons":
    "Modern payment tools for nail salons — from booking to checkout.",
  "/retail":
    "Flexible payment software built for retail stores and shops.",
  "/home-services":
    "Accept payments anywhere with HestaPay's home service solutions.",
  "/payment-links":
    "Create and share payment links in seconds. No code required.",
  "/qr-payments":
    "Accept touch-free QR payments in-store, at the table, or on the go.",
  "/merchant-dashboard":
    "A powerful dashboard to manage payments, refunds, and analytics.",
  "/pricing":
    "Transparent pricing for businesses of every size.",
  "/security":
    "How HestaPay keeps payments and data safe with modern security practices.",
  "/book-demo":
    "Schedule a personalized demo to see how HestaPay works for your business.",
  "/early-access":
    "Join the early access program and shape the future of local business payments.",
  "/faq":
    "Find answers to common questions about HestaPay.",
  "/about":
    "Building payment software for local businesses. HestaPay makes payment operations simpler and better aligned with real-world workflows.",
  "/contact":
    "Get in touch with the HestaPay team. Questions, partnerships, or just want to say hello.",
  "/resources":
    "Guides, workflow examples, and payment resources for restaurants, salons, retail, and home services.",
  "/privacy-policy":
    "How we handle and protect your data.",
  "/terms-of-service":
    "Terms and conditions for using HestaPay services.",
};