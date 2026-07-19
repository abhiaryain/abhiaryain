import type { JSX } from "react";
import type { ExternalUrl } from "@/types/url";

/**
 * Relative path to a static asset served from the application's `public`
 * directory.
 *
 * @example "/avatar.webp"
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
 * Represents the author's primary location.
 */
export type Address = {
  /**
   * State or province.
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
   * Map or location URL.
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
   */
  readonly title: string;

  /**
   * Primary profile image.
   *
   * Supports either a local image from the `public` directory
   * or an external HTTPS image URL.
   */
  readonly avatar: ImageSource;

  /**
   * Lightweight fallback image displayed while the primary avatar
   * is loading or if it fails to load.
   */
  readonly image: ImageSource;

  /**
   * Portfolio website.
   */
  readonly portfolio: ExternalUrl;

  /**
   * GitHub profile.
   * This is used to fetch GitHub activity and pull requests.
   *
   * @example "abhiaryain"
   */
  readonly github: string;

  /**
   * X (formerly Twitter) profile.
   */
  readonly twitter: string;

  /**
   * LinkedIn profile.
   */
  readonly linkedin: string;

  /**
   * Contact phone numbers.
   */
  readonly phones: readonly string[];

  /**
   * Contact email addresses.
   */
  readonly emails: readonly string[];

  /**
   * Short biography used in previews and metadata.
   */
  readonly bio: string;

  /**
   * Concise professional summary.
   */
  readonly summary: string;

  /**
   * Rich "About" content rendered directly in the application.
   */
  readonly about: JSX.Element;

  /**
   * Primary location.
   */
  readonly address: Address;
};
