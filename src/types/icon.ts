const CONTACT_ICONS = ["email", "phone"] as const satisfies readonly string[];

const SOCIAL_ICONS = [
  "github",
  "linkedin",
  "leetcode",
  "x",
] as const satisfies readonly string[];

const ORGANIZATION_ICONS = [
  "aaensa",
  "mithila",
  "vridhee",
] as const satisfies readonly string[];

const PORTFOLIO_ICONS = [
  "currunt",
  "learnings",
] as const satisfies readonly string[];

const TECH_ICONS = [
  "typescript",
  "react",
  "next",
  "tailwind",
  "node",
  "hono",
  "bun",
  "redis",
  "postgres",
  "kafka",
  "docker",
  "aws",
  "mdx",
  "ai-sdk",
] as const satisfies readonly string[];

/**
 * Registry of all icon identifiers available in the application.
 *
 * These values are used as lookup keys to dynamically resolve
 * icon components throughout the portfolio.
 */
const ICON_KEYS = [
  ...CONTACT_ICONS,
  ...SOCIAL_ICONS,
  ...ORGANIZATION_ICONS,
  ...PORTFOLIO_ICONS,
  ...TECH_ICONS,
  "link",
  "resume",
] as const satisfies readonly string[];

export type Icon = (typeof ICON_KEYS)[number];
