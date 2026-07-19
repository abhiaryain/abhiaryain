import type { Icon } from "@/types/icon";
import type { ExternalUrl } from "@/types/url";

export type EmailUrl = `mailto:${string}`;
export type PhoneUrl = `tel:${string}`;
export type ContactUrl = EmailUrl | PhoneUrl;
export type SocialUrl = ContactUrl | ExternalUrl;

/**
 * Represents a social profile or contact method displayed on the portfolio.
 *
 * Entries may represent external profiles (GitHub, LinkedIn, X, etc.)
 * or direct contact methods such as email and phone.
 */
export type Social = {
  /**
   * Human-readable platform or contact name.
   *
   * @example "GitHub"
   * @example "LinkedIn"
   * @example "Phone"
   */
  readonly name: string;

  /**
   * Destination URL.
   *
   * Supports HTTPS links as well as `mailto:` and `tel:` URLs.
   */
  readonly url: SocialUrl;

  /**
   * Username, handle, or contact value displayed alongside the icon.
   *
   * @example "abhiaryain"
   * @example "+919546458806"
   * @example "career@example.com"
   */
  readonly username: string;

  /**
   * Icon used to represent the platform or contact method.
   */
  readonly icon: Icon;

  /**
   * Controls whether the name should be rendered next to the icon.
   *
   * When `false`, only the icon is displayed.
   */
  readonly withText: boolean;
};
