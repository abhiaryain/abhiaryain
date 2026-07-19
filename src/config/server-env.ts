/**
 * Defines and validates the application's environment variables.
 *
 * This module centralizes the environment schema using `@t3-oss/env-nextjs`
 * and `Zod`, providing a single, type-safe source of truth for configuration.
 *
 * Exports:
 * - `env` – The validated, type-safe environment object for use throughout
 *   the application.
 * - `validateEnv()` – A helper intended for `next.config.ts` to trigger
 *   environment validation during the Next.js build, causing the build to
 *   fail early if required variables are missing or invalid.
 */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GITHUB_TOKEN: z
      .string({
        message: "Environment variable GITHUB_TOKEN must be a string.",
      })
      .min(1, {
        message:
          "GITHUB_TOKEN is required and cannot be empty. Please provide a valid GitHub token.",
      })
      .startsWith("github_pat_", {
        message: "GITHUB_TOKEN must be a valid GitHub personal access token.",
      }),
  },
  experimental__runtimeEnv: process.env,
});

/**
 * Returns the validated environment object.
 *
 * Intended to be called from `next.config.ts` to ensure environment
 * variables are validated during the Next.js build, causing the build
 * to fail early if any required variables are missing or invalid.
 *
 * @returns {typeof env}
 */
export const validateEnv = () => env;
