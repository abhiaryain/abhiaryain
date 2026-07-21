import type { FormattedDate } from "@/types/date";
import type { ExternalUrl } from "@/types/https-url";
import type { Icon } from "@/types/icon";

/**
 * Learning note, article, or educational resource showcased in the portfolio.
 */
export type Learning = {
  /**
   * Title of the learning resource.
   *
   * @example "Understanding Redis Persistence"
   */
  readonly title: string;

  /**
   * Short summary of the topic and key takeaways.
   */
  readonly description: string;

  /**
   * Publication or completion date.
   *
   * @example "Oct 2023"
   */
  readonly date: FormattedDate;

  /**
   * Canonical URL of the learning resource.
   *
   * @example "https://abhiarya.in/learnings/understanding-redis-persistence"
   */
  readonly url: ExternalUrl;

  /**
   * Icon associated with the learning topic.
   *
   * @example "redis"
   */
  readonly icon: Icon;

  /**
   * Whether this article is featured on the main page.
   */
  readonly featured: boolean;
};
