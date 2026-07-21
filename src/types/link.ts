import type { ExternalUrl } from "@/types/https-url";
import type { Icon } from "@/types/icon";

/**
 * External resource displayed throughout the portfolio.
 *
 * Commonly used for project repositories, websites, documentation,
 * articles, and other third-party resources.
 */
export type Link = {
  /**
   * Display name of the resource.
   *
   * Used for labels, tooltips, and accessibility text.
   *
   * @example "GitHub"
   * @example "Documentation"
   * @example "Website"
   */
  readonly name: string;

  /**
   * Icon associated with the resource.
   */
  readonly icon: Icon;

  /**
   * Destination URL for the resource.
   *
   * Must be a valid HTTPS URL.
   *
   * @example "https://github.com/abhiaryain"
   */
  readonly url: ExternalUrl;
};
