/**
 * Represents GitHub contributions for a single day.
 */
export type ContributionDay = {
  /**
   * Contribution intensity color.
   */
  readonly color: string;

  /**
   * Number of contributions made on the day.
   */
  readonly contributionCount: number;

  /**
   * ISO-8601 calendar date.
   *
   * @example "2026-07-19"
   */
  readonly date: string;
};

/**
 * Represents a week's worth of contribution activity.
 */
export type ContributionWeek = {
  /**
   * Daily contribution entries.
   */
  readonly contributionDays: readonly ContributionDay[];
};
