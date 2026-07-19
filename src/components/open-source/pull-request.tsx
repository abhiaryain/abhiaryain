import { GitMerge, WifiOff } from "lucide-react";
import { ErrorCard } from "@/components/error/error-card";
import { PullRequestCard } from "@/components/open-source/pull-request-card";
import type { ActionResult } from "@/types/github/api";
import type { PullRequest } from "@/types/github/pull-request";

export function PullRequestComponent({
  pullRequest,
}: {
  pullRequest: ActionResult<PullRequest[]>;
}) {
  const { success } = pullRequest;

  if (!success) {
    const { error } = pullRequest;
    return (
      <ErrorCard className="text-destructive">
        <WifiOff />
        <span>{error.message}</span>
      </ErrorCard>
    );
  }

  const { data } = pullRequest;

  if (data.length === 0) {
    return (
      <ErrorCard className="text-muted-foreground">
        <GitMerge />
        <span>No pull requests have been merged yet</span>
      </ErrorCard>
    );
  }

  return (
    <>
      {data.map((pr) => (
        <PullRequestCard
          key={pr.id}
          id={pr.id}
          title={pr.title}
          url={pr.url}
          createdAt={pr.createdAt}
          state={pr.state}
          deletions={pr.deletions}
          additions={pr.additions}
          number={pr.number}
          commits={pr.commits}
          changedFiles={pr.changedFiles}
          closedAt={pr.closedAt}
          mergedAt={pr.mergedAt}
          author={pr.author}
          repository={pr.repository}
        />
      ))}
    </>
  );
}
