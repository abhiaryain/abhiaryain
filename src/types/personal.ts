import type { ExternalUrl } from "@/types/https-url";

/**
 * Relative path to a static asset served from the application's
 * `public` directory.
 *
 * @example "/avatar.webp"
 * @example "/images/profile.jpg"
 */
export type RelativePath = `/${string}`;

/**
 * Image source used throughout the portfolio.
 *
 * Supports either:
 * - A local asset from the `public` directory.
 * - An external HTTPS URL.
 */
export type ImageSource = ExternalUrl | RelativePath;

/**
 * Primary location associated with the portfolio owner.
 */
export type Address = {
  /**
   * State, province, or region.
   *
   * @example "Bihar"
   */
  readonly state: string;

  /**
   * Country.
   *
   * @example "India"
   */
  readonly country: string;

  /**
   * Public map or location URL.
   *
   * @example "https://maps.google.com/..."
   */
  readonly url: ExternalUrl;
};

/**
 * Represents the portfolio owner's personal information.
 *
 * This data powers the site's hero section, metadata, contact information,
 * and author profile.
 */
export type Personal = {
  /**
   * Full legal or preferred name.
   *
   * @example "Abhishek Kumar"
   */
  readonly name: string;

  /**
   * Short or familiar name used in conversational UI.
   *
   * @example "John"
   */
  readonly nickname: string;

  /**
   * Primary professional title.
   *
   * @example "Software Development Engineer"
   * @example "Full-Stack Developer"
   */
  readonly title: string;

  /**
   * Primary profile image.
   *
   * Supports either:
   * - A local asset from the `public` directory.
   * - An external HTTPS URL.
   *
   * @example "/avatar.webp"
   * @example "https://avatars.githubusercontent.com/u/302746395"
   */
  readonly avatar: ImageSource;

  /**
   * Fallback image displayed while the avatar is loading
   * or if the primary image cannot be loaded.
   *
   * @example "/avatar.webp"
   */
  readonly image: ImageSource;

  /**
   * Portfolio website URL.
   *
   * @example "https://abhiarya.in"
   */
  readonly portfolio: ExternalUrl;

  /**
   * GitHub username.
   *
   * Used to fetch GitHub activity and pull requests.
   *
   * @example "abhiaryain"
   */
  readonly github: string;

  /**
   * X (formerly Twitter) username.
   *
   * @example "abhiaryain"
   */
  readonly twitter: string;

  /**
   * LinkedIn username or profile identifier.
   *
   * @example "abhiaryain"
   */
  readonly linkedin: string;

  /**
   * Contact phone numbers.
   *
   * @example ["+919546458806"]
   */
  readonly phones: readonly string[];

  /**
   * Contact email addresses.
   *
   * @example ["hello@abhiarya.in"]
   */
  readonly emails: readonly string[];

  /**
   * Short biography used in previews and metadata.
   */
  readonly bio: string;

  /**
   * Concise professional summary, used in previews and metadata
   */
  readonly summary: string;

  /**
   * Primary location.
   */
  readonly address: Address;
};
