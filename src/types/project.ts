import type { Icon } from "@/types/icon";
import type { Link } from "@/types/link";
import type { ExternalUrl } from "@/types/url";

/**
 * Represents a project showcased on the portfolio.
 */
export type Project = {
  /**
   * Project name.
   *
   * @example "Portfolio"
   */
  readonly name: string;

  /**
   * Brief summary describing the project's purpose and functionality.
   */
  readonly description: string;

  /**
   * Primary project URL.
   *
   * This is typically the live demo, project website, or repository.
   */
  readonly url: ExternalUrl;

  /**
   * Primary icon used to visually represent the project.
   */
  readonly icon: Icon;

  /**
   * External resources associated with the project.
   *
   * Examples include source code repositories, live demos,
   * documentation, and case studies.
   */
  readonly links: readonly Link[];

  /**
   * Technologies, frameworks, and tools used to build the project.
   */
  readonly tags: readonly Link[];

  /**
   * Indicates whether the project should receive additional
   * visual emphasis in the portfolio.
   */
  readonly featured: boolean;
};
