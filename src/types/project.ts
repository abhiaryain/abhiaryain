import type { ExternalUrl } from "@/types/https-url";
import type { Icon } from "@/types/icon";
import type { Link } from "@/types/link";

/**
 * Project showcased in the portfolio.
 */
export type Project = {
  /**
   * Display name of the project.
   *
   * @example "currunt"
   */
  readonly name: string;

  /**
   * Short summary of the project's purpose, functionality,
   * and key highlights.
   *
   * @example "An autonomous AI built for real-world tasks."
   */
  readonly description: string;

  /**
   * Primary URL for the project.
   *
   * Typically a live application, project website, or repository.
   *
   * @example "https://currunt.in"
   */
  readonly url: ExternalUrl;

  /**
   * Icon associated with the project.
   *
   * @example "currunt"
   */
  readonly icon: Icon;

  /**
   * Optional redirect path generated in `next.config.ts`.
   *
   * When provided, a redirect is created from /{@link slug}` to {@link url}.
   *
   *  For example, a slug of `"currunt"` enables:
   * `https://abhiarya.in/currunt` → original {@link url}.
   *
   * @example "currunt"
   */
  readonly slug?: string;

  /**
   * Related project resources.
   *
   * Commonly includes source code repositories,
   * documentation, articles, or case studies.
   *
   * @example [{ name: "Github", icon:"github" url: "https://github.com/abhiaryain/currunt" }]
   */
  readonly links: readonly Link[];

  /**
   * Technologies, frameworks, and tools used to build the project.
   *
   * @example [{ name: "TypeScript", icon: "typescript", url: "https://www.typescriptlang.org" }]
   */
  readonly technologies: readonly Link[];

  /**
   * Whether this article is featured on the main page.
   */
  readonly featured: boolean;
};
