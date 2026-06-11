import { NAV } from "./constants";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export function getMainNavigation(): NavGroup[] {
  return [
    { label: "Solutions", items: [...NAV.solutions] },
    { label: "Products", items: [...NAV.products] },
  ];
}

export function getFlatNavigation(): NavItem[] {
  return [...NAV.solutions, ...NAV.products, ...NAV.main];
}