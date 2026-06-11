import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/restaurants", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/nail-salons", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/retail", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/home-services", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/payment-links", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/qr-payments", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/merchant-dashboard", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/security", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/book-demo", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/early-access", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    priority: route.priority,
    changeFrequency: route.changeFrequency,
  }));
}