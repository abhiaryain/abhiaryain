import type { ExternalUrl } from "@/types/https-url";
import type { Icon } from "@/types/icon";

/**
 * Email link using the `mailto:` URL scheme.
 */
export type EmailUrl = `mailto:${string}`;

/**
 * Telephone link using the `tel:` URL scheme.
 */
export type PhoneUrl = `tel:${string}`;

/**
 * Direct contact URL.
 *
 * Supports email and telephone links.
 */
export type ContactUrl = EmailUrl | PhoneUrl;

/**
 * URL supported by a social profile or contact entry.
 *
 * Supports external HTTPS URLs, email links, and telephone links.
 */
export type SocialUrl = ContactUrl | ExternalUrl;

/**
 * Social profile or contact method displayed throughout the portfolio.
 *
 * Supports external profiles (GitHub, LinkedIn, X, etc.) as well as
 * direct contact methods such as email and phone.
 */
export type Social = {
  /**
   * Display name of the platform or contact method.
   *
   * Used for labels, tooltips, and accessibility text.
   *
   * @example "GitHub"
   */
  readonly name: string;

  /**
   * Destination URL for the profile or contact method.
   *
   * Supports `https://`, `mailto:`, and `tel:` URLs.
   *
   * @example "https://github.com/abhiaryain"
   * @example "mailto:career.abhiarya@gmail.com"
   * @example "tel:+919546458806"
   */
  readonly url: SocialUrl;

  /**
   * Public identifier displayed to users.
   *
   * This is typically a username, handle, email address, or phone number.
   * used in seo metadata and contact information.
   *
   * @example "abhiaryain"
   * @example "+919546458806"
   * @example "career.abhiarya@gmail.com"
   */
  readonly username: string;

  /**
   * Icon associated with the platform or contact method.
   *
   * @example "github"
   */
  readonly icon: Icon;

  /**
   * Optional redirect path generated in `next.config.ts`.
   * When provided, a redirect is created from `/{@link slug}` to {@link url}.
   *
   * Not all URL types support redirects. Contact links such as `tel:`
   * should not define a slug.
   *
   * For example, a slug of `"github"` enables:
   * `https://abhiarya.in/github` → original {@link url}.
   *
   * @example "github"
   */
  readonly slug?: string;

  /**
   * Whether the display name should be shown alongside the icon.
   *
   * When omitted or `false`, only the icon is rendered.
   */
  readonly showLabel?: boolean;
};
