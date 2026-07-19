import type { Icon } from "@/types/icon";
import type { Link } from "@/types/link";
import type { Month } from "@/types/month";
import type { Year } from "@/types/year";

/**
 * Formatted experience date.
 *
 * @example "Oct 2023"
 */

export type ExperienceDate = `${Month} ${Year}`;

const WORK_LOCATIONS = [
  "Remote",
  "Hybrid",
  "Gurugram",
  "Gurgaon",
  "Bangalore",
  "Bengaluru",
  "Hyderabad",
  "Silicon Valley",
  "San Francisco",
  "New York",
  "London",
];

type KnownLocation = (typeof WORK_LOCATIONS)[number];

type WorkLocation = KnownLocation | (string & {});

/**
 * Represents a single professional experience displayed on the portfolio.
 */
export type Experience = {
  /**
   * Company or organization name.
   * @example "Mithila Stack"
   */
  readonly company: string;

  /**
   * Full job title displayed in standard layouts.
   * @example "Software Development Engineer"
   */
  readonly position: string;

  /**
   * Abbreviated job title used in compact layouts where space is limited.
   * @example "SDE"
   */
  readonly label: string;

  /**
   * Primary work location.
   * @example "Remote"
   * @example "Gurugram"
   */
  readonly location: WorkLocation;

  /**
   * Employment start date formatted for display.
   * @example "Oct 2023"
   */
  readonly start: ExperienceDate;

  /**
   * Employment end date formatted for display.
   * Use "Present" for the current role.
   * @example "Present"
   * @example "Sep 2024"
   */
  readonly end: "Present" | ExperienceDate;

  /**
   * Official company or organization website.
   */
  readonly url: `https://${string}`;

  /**
   * Related external links such as GitHub repositories,
   * company pages, or project websites.
   */
  readonly links: readonly Link[];

  /**
   * Icon identifier used to render the company's logo.
   */
  readonly icon: Icon;

  /**
   * Indicates whether this experience should receive
   * additional visual emphasis in the UI.
   */
  readonly featured: boolean;
};
