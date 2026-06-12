# HestaPay

HestaPay is payment software and an orchestration layer for local businesses.

It is designed for:
- restaurants
- nail salons
- retail
- home services

HestaPay is not:
- a bank
- a payment processor
- an acquirer
- a payment infrastructure provider

HestaPay integrates with trusted payment infrastructure partners.

## Current repository mode

This repository is now in a **high-fidelity internal preview** phase.

The goal is no longer to stop at abstract demos or placeholder-safe product art.
We are building a complete internal review version of the HestaPay marketing site
and product visuals so founders, operators, and internal stakeholders can review
something that feels close to a real product experience.

That means the codebase should support:
- polished marketing pages
- polished product-led mock screens
- realistic dashboard layouts
- realistic transaction tables
- realistic payment link, QR, checkout, and staff flows
- internal-review-ready product storytelling across the site

## Internal preview rules

For internal preview builds, realistic-looking UI content is allowed.

Allowed in product visuals:
- realistic transaction states
- realistic dashboard cards and labels
- realistic counts, totals, rates, and tables
- realistic flow states for payment links, QR, checkout, staff, and reporting

Still not allowed:
- fake compliance badges
- fake PCI or SOC claims
- unsupported public-facing performance claims

Allowed for internal preview only:
- fictional merchant names
- fictional customer logos and wordmarks
- fictional testimonial content
- fictional operator/job titles
- fictional partner placeholders in clearly internal preview contexts

Rules for fictional internal preview content:
- it should be used to review visual quality, layout, hierarchy, and storytelling
- it should not imitate a real company in a confusing way
- it should be easy to swap before launch
- it must be reviewed and replaced before any public release

If a screen is intended for public release later, any unverified numbers, partner
references, or trust claims should be reviewed again before publication.

## Build priorities

Current priorities:
1. homepage as the visual reference standard
2. core product pages
3. vertical landing pages
4. high-fidelity product scenes for:
   - merchant dashboard
   - transactions table
   - payment link creation
   - QR payments
   - mobile checkout
   - staff / tips / shift summary

## Design direction

- modern
- bright
- premium fintech
- green as the primary brand color
- product-led visuals
- subtle depth
- technology-forward composition
- no crypto aesthetic
- no noisy gradients
- no stock-photo feel

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router

## Local development

```bash
npm install
npm run dev
```

## Build check

```bash
npm run build
```
