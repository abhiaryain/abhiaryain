/**
 * Represents a GitHub pull request.
 */
export type PullRequest = {
  id: string;
  title: string;
  url: string;
  createdAt: string;
  state: string;
  /**
   * Pull request number within the repository.
   */
  readonly number: number;

  /**
   * Lines added.
   */
  readonly additions: number;

  /**
   * Lines deleted.
   */
  readonly deletions: number;
  commits: {
    totalCount: number;
  };
  changedFiles: number;
  closedAt: string;
  mergedAt: string;
  author: {
    login: string;
    avatarUrl: string;
    url: string;
  };
  repository: {
    name: string;
    nameWithOwner: string;
    url: string;
    homepageUrl: string;
    isPrivate: boolean;
    isInOrganization: boolean;
  };
};

export type Edge<T> = {
  readonly node: T;
};
