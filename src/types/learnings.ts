import type { ExperienceDate } from "@/types/experience";
import type { Icon } from "@/types/icon";
import type { ExternalUrl } from "@/types/url";

/**
 * Represents a learning note or educational article displayed on the portfolio.
 */
export type Learning = {
  /**
   * Title of the learning article.
   *
   * @example "What is an Operating System?"
   */
  readonly title: string;

  /**
   * Brief summary shown in cards and listings.
   */
  readonly description: string;

  /**
   * Publication or completion date.
   *
   * @example "Oct 2023"
   */
  readonly date: ExperienceDate;

  /**
   * Canonical URL of the learning resource.
   */
  readonly url: ExternalUrl;

  /**
   * Icon representing the learning topic.
   */
  readonly icon: Icon;

  /**
   * Indicates whether the learning should receive
   * additional visual emphasis in the UI.
   */
  readonly featured: boolean;
};
