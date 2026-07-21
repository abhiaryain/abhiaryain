/**
 * GitHub pull request.
 */
export type PullRequest = {
  /**
   * Unique pull request identifier.
   */
  readonly id: string;

  /**
   * Pull request title.
   */
  readonly title: string;

  /**
   * GitHub URL of the pull request.
   *
   * @example "https://github.com/abhiaryain/abhiaryain/pull/1"
   */
  readonly url: string;

  /**
   * Creation timestamp in ISO 8601 format.
   *
   * @example "2026-07-19T12:34:56Z"
   */
  readonly createdAt: string;

  /**
   * Current pull request state.
   *
   * @example "OPEN"
   * @example "CLOSED"
   * @example "MERGED"
   */
  readonly state: "OPEN" | "CLOSED" | "MERGED";

  /**
   * Pull request number within the repository.
   *
   * @example 1234
   */
  readonly number: number;

  /**
   * Number of lines added.
   *
   * @example 250
   */
  readonly additions: number;

  /**
   * Number of lines removed.
   *
   * @example 75
   */
  readonly deletions: number;

  /**
   * Commit statistics.
   */
  readonly commits: {
    /**
     * Total number of commits.
     *
     * @example 5
     */
    readonly totalCount: number;
  };

  /**
   * Number of modified files.
   *
   * @example 12
   */
  readonly changedFiles: number;

  /**
   * Closure timestamp in ISO 8601 format.
   */
  readonly closedAt: string;

  /**
   * Merge timestamp in ISO 8601 format.
   */
  readonly mergedAt: string;

  /**
   * Pull request author.
   */
  readonly author: {
    /**
     * GitHub username.
     *
     * @example "abhiaryain"
     */
    readonly login: string;

    /**
     * GitHub avatar URL.
     */
    readonly avatarUrl: string;

    /**
     * GitHub profile URL.
     *
     * @example "https://github.com/abhiaryain"
     */
    readonly url: string;
  };

  /**
   * Repository associated with the pull request.
   */
  readonly repository: {
    /**
     * Repository name.
     *
     * @example "abhiaryain"
     */
    readonly name: string;

    /**
     * Repository name including owner.
     *
     * @example "abhiaryain/abhiaryain"
     */
    readonly nameWithOwner: string;

    /**
     * Repository URL.
     *
     * @example "https://github.com/abhiaryain/abhiaryain"
     */
    readonly url: string;

    /**
     * Repository homepage URL.
     *
     * @example "https://github.com/abhiaryain"
     */
    readonly homepageUrl: string;

    /**
     * Whether the repository is private.
     */
    readonly isPrivate: boolean;

    /**
     * Whether the repository belongs to an organization.
     */
    readonly isInOrganization: boolean;
  };
};

/**
 * GraphQL edge containing a node.
 */
export type Edge<T> = {
  /**
   * Resource associated with the edge.
   */
  readonly node: T;
};
