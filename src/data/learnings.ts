import type { Learning } from "@/types/learnings";

/**
 * Learning resources displayed on the portfolio.
 *
 * Entries should be ordered in reverse chronological order
 * (most recent first).
 */
export const LEARNINGS = [
  {
    title: "What is Operating System?",
    description:
      "An operating system is software that manages computer hardware and software resources.",
    date: "Oct 2023",
    url: "https://learnings.abhiarya.in/what-is-operating-system",
    icon: "kafka",
    featured: false,
  },
] as const satisfies readonly Learning[];
