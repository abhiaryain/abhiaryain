import type { FormattedDate } from "@/types/date";
import type { ExternalUrl } from "@/types/https-url";
import type { Icon } from "@/types/icon";
import type { Link } from "@/types/link";

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
] as const satisfies readonly string[];

type KnownLocation = (typeof WORK_LOCATIONS)[number];

/**
 * Work location displayed for an experience.
 *
 * Includes common predefined locations while allowing
 * custom values when needed.
 */
type WorkLocation = KnownLocation | (string & {});

/**
 * Professional experience showcased in the portfolio.
 */
export type Experience = {
  /**
   * Company or organization name.
   *
   * @example "Vridhee"
   * @example "Google"
   */
  readonly company: string;

  /**
   * Full job title.
   *
   * @example "Software Development Engineer"
   * @example "Full-Stack Developer"
   */
  readonly position: string;

  /**
   * Short title used in compact layouts.
   *
   * @example "SDE"
   * @example "SWE"
   */
  readonly abbreviation: string;

  /**
   * Primary work location.
   *
   * @example "Remote"
   * @example "Gurugram"
   */
  readonly location: WorkLocation;

  /**
   * Employment start date.
   *
   * @example "Oct 2023"
   */
  readonly start: FormattedDate;

  /**
   * Employment end date.
   *
   * Use `"Present"` for the current role.
   *
   * @example "Present"
   * @example "Sep 2024"
   */
  readonly end: "Present" | FormattedDate;

  /**
   * Official company or organization website.
   *
   * @example "https://google.com"
   */
  readonly url: ExternalUrl;

  /**
   * Related resources associated with the role.
   *
   * Commonly includes company websites, project pages,
   * repositories, articles, or presentations.
   * @example [{ name: "Github",url: "https://github.com/google", icon: "github"}]
   */
  readonly links: readonly Link[];

  /**
   * Icon associated with the company or organization.
   */
  readonly icon: Icon;

  /**
   * Whether this experience is featured on the main page.
   *
   * @example true
   */
  readonly featured: boolean;
};
