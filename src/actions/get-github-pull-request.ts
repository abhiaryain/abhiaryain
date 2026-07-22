import "server-only";

import { request } from "@/actions/helpers/request";
import { PERSONAL } from "@/data/personal";
import type { ActionResult } from "@/types/github/api";
import type { Edge, PullRequest } from "@/types/github/pull-request";

const query = `
query {
  search(query: "is:pr author:${PERSONAL.github} archived:false is:merged -user:${PERSONAL.github}", type: ISSUE, first: 5) {
    edges {
      node {
        ... on PullRequest {
          id
          title
          url
          createdAt
          state
          deletions
          additions
          number
          commits {
            totalCount
          }
          changedFiles
          closedAt
          mergedAt
          author {
            login
            avatarUrl
            url
          }
          repository {
            name
            nameWithOwner
            url
            homepageUrl
            isPrivate
            isInOrganization
          }
        }
      }
    }
  }
}
`;

export async function getGithubPullRequest(): Promise<
  ActionResult<PullRequest[]>
> {
  const res = await request(query);

  if (!res.ok) {
    return {
      success: false,
      error: { message: "Unable to fetch GitHub pull requests." },
    };
  }

  const { data } = await res.json();

  if (!data?.search?.edges) {
    return {
      success: false,
      error: {
        message: "GitHub response is missing expected data.",
      },
    };
  }

  const pullRequest: PullRequest[] = data.search.edges.map(
    (edge: Edge<PullRequest>) => edge.node,
  );

  return { success: true, data: pullRequest };
}
