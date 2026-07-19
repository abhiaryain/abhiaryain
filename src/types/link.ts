import type { Icon } from "@/types/icon";
import type { ExternalUrl } from "@/types/url";

/**
 * Represents an external resource link.
 *
 * Used for portfolio-related links such as GitHub repositories,
 * company websites, documentation, or social profiles.
 */
export type Link = {
  /**
   * Display name shown to users.
   *
   * @example "GitHub"
   */
  readonly name: string;

  /**
   * Icon identifier used for visual representation.
   * @example "github"
   */
  readonly icon: Icon;

  /**
   * Secure destination URL.
   *
   * @example "https://github.com/<user>/<repo>"
   */
  readonly url: ExternalUrl;
};
