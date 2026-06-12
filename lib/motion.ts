/**
 * HestaPay motion helpers.
 *
 * Thin reusable animation presets for `motion` (formerly framer-motion).
 * Designed for premium fintech product scenes — subtle, deliberate, not flashy.
 */

import type { Variants, Transition } from "motion/react";

// ─── Timing curves ───────────────────────────────────────────────────────────

/** Fast, crisp — for hover/active states */
export const springFast: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 35,
};

/** Smooth, medium bounce — for reveals, cards, entering elements */
export const springSmooth: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 28,
};

/** Gentle, slow — for ambient backgrounds, subtle pulsing */
export const springGentle: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 22,
};

/** Simple ease-out — for opacity-only transitions */
export const easeOutFast: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

// ─── Shared variants ─────────────────────────────────────────────────────────

/** Fade up on enter, fade down on exit */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

/** Fade in only — no translation */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

/** Stagger children — use as container variants */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

/** Scale up slightly — good for card hovers */
export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

// ─── Scroll-trigger presets ──────────────────────────────────────────────────

/** Standard "reveal on scroll" viewport settings */
export const scrollReveal = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-64px" },
};