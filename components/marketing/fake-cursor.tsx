"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/* ------------------------------------------------------------------ */
/* 8-second scripted loop storyboard                                  */
/* ------------------------------------------------------------------ */
type CursorPhase =
  | "entering"
  | "hovering-filter"
  | "clicking-filter"
  | "moving-to-row"
  | "hovering-row"
  | "clicking-row"
  | "moving-to-card"
  | "clicking-card"
  | "fading";

interface PhaseDefinition {
  phase: CursorPhase;
  /** Position as percentage of scene container (0-100) */
  x: number;
  y: number;
  /** Duration in ms this phase lasts */
  duration: number;
  /** Cursor scale (1 = normal, 0.8 = subtle shrink on click) */
  scale: number;
  /** Opacity (0-1) */
  opacity: number;
  /** Callback key to notify parent */
  event?:
    | "filter-hover"
    | "filter-click"
    | "row-hover"
    | "row-click"
    | "card-hover"
    | "card-click"
    | "reset";
}

const PHASES: PhaseDefinition[] = [
  { phase: "entering",        x: 88, y: 8,  duration: 1200, scale: 1,    opacity: 1, event: undefined },
  { phase: "hovering-filter", x: 42, y: 28, duration: 1200, scale: 1,    opacity: 1, event: "filter-hover" },
  { phase: "clicking-filter", x: 42, y: 28, duration: 600,  scale: 0.75, opacity: 1, event: "filter-click" },
  { phase: "moving-to-row",   x: 15, y: 52, duration: 1500, scale: 1,    opacity: 1, event: undefined },
  { phase: "hovering-row",    x: 15, y: 52, duration: 400,  scale: 1,    opacity: 1, event: "row-hover" },
  { phase: "clicking-row",    x: 15, y: 52, duration: 700,  scale: 0.75, opacity: 1, event: "row-click" },
  { phase: "moving-to-card",  x: 6,  y: 8,  duration: 1300, scale: 1,    opacity: 1, event: undefined },
  { phase: "clicking-card",   x: 6,  y: 8,  duration: 700,  scale: 0.75, opacity: 1, event: "card-click" },
  { phase: "fading",          x: 6,  y: 8,  duration: 800,  scale: 1,    opacity: 0, event: "reset" },
];

/* Map each phase to its position transition duration.
   Movement phases get longer transitions proportional to their duration.
   Hover/idle phases get no position transition (they stay still).
   Scale and opacity always animate. */
function getTransitionDuration(phase: CursorPhase): string {
  switch (phase) {
    case "entering":
      return "0.6s"; // smooth settle
    case "moving-to-row":
      return "0.9s"; // long diagonal move
    case "moving-to-card":
      return "0.8s"; // moderate move
    case "hovering-filter":
    case "hovering-row":
      return "0s"; // no movement during hover
    case "fading":
      return "0s"; // holds position while fading
    default:
      return "0.35s"; // click phases -- instant snap, scale does the work
  }
}

interface FakeCursorProps {
  /** Whether cursor is active (paused when false, e.g. reduced motion) */
  active: boolean;
  /** Callback when the cursor triggers a UI interaction */
  onEvent?: (event: NonNullable<PhaseDefinition["event"]>) => void;
}

export default function FakeCursor({ active, onEvent }: FakeCursorProps) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onEventRef = useRef(onEvent);
  onEventRef.current = onEvent;

  const advance = useCallback(() => {
    setPhaseIndex((prev) => {
      const next = prev + 1;
      if (next >= PHASES.length) return 0; // loop
      return next;
    });
  }, []);

  useEffect(() => {
    if (!active) {
      setPhaseIndex(0);
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const current = PHASES[phaseIndex];
    if (!current) return;

    // Fire event callback
    if (current.event) {
      onEventRef.current?.(current.event);
    }

    // Schedule next phase
    if (current.duration > 0) {
      timerRef.current = setTimeout(() => {
        advance();
      }, current.duration);
    } else {
      advance();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, phaseIndex, advance]);

  const current = PHASES[phaseIndex] ?? PHASES[0];
  const showCursor = active && current.opacity > 0;
  const moveDuration = getTransitionDuration(current.phase);

  return (
    <div
      className="pointer-events-none absolute z-50"
      style={{
        left: `${current.x}%`,
        top: `${current.y}%`,
        transform: `translate(-50%, -50%) scale(${current.scale})`,
        opacity: showCursor ? current.opacity : 0,
        transition: [
          `left ${moveDuration} ease-in-out`,
          `top ${moveDuration} ease-in-out`,
          "transform 0.18s ease",
          "opacity 0.35s ease",
        ].join(", "),
        filter: "drop-shadow(0 2px 6px rgba(16, 185, 129, 0.3))",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 3.5L18 18L13 19L8.5 14.5L5.5 21L4 20L5.5 3.5Z"
          fill="white"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}