/**
 * GitHub contribution activity for a single calendar day.
 */
export type ContributionDay = {
  /**
   * Contribution intensity color provided by GitHub.
   *
   * @example "#39d353"
   */
  readonly color: string;

  /**
   * Number of contributions recorded on the day.
   *
   * @example 12
   */
  readonly contributionCount: number;

  /**
   * Calendar date in ISO 8601 format (`YYYY-MM-DD`).
   *
   * @example "2026-07-19"
   */
  readonly date: string;
};

/**
 * GitHub contribution activity for a single week.
 */
export type ContributionWeek = {
  /**
   * Daily contribution entries for the week.
   */
  readonly contributionDays: readonly ContributionDay[];
};
