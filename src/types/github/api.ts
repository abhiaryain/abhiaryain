/**
 * Standard result returned by an action.
 *
 * On success, the result contains the requested data.
 * On failure, it contains an error describing what went wrong.
 */
export type ActionResult<T> =
  | {
      /**
       * Indicates that the action completed successfully.
       */
      readonly success: true;

      /**
       * Data returned by the action.
       */
      readonly data: T;
    }
  | {
      /**
       * Indicates that the action failed.
       */
      readonly success: false;

      /**
       * Error details describing the failure.
       */
      readonly error: {
        /**
         * Human-readable error message.
         *
         * @example "Failed to fetch GitHub activity"
         */
        readonly message: string;
      };
    };
