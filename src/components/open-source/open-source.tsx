"use client";

import { track } from "@vercel/analytics";
import { FadeItem } from "@/components/abhiarya-ui/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionLink,
  SectionTitle,
} from "@/components/abhiarya-ui/section";
import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { ActivityCalendarComponent } from "@/components/open-source/activity-calendar";
import { PullRequestComponent } from "@/components/open-source/pull-request";
import { PERSONAL } from "@/data/personal";
import type { ActionResult } from "@/types/github/api";
import type { PullRequest } from "@/types/github/pull-request";

export function OpenSource({
  pullRequest,
  activities,
}: {
  pullRequest: ActionResult<PullRequest[]>;
  activities: ActionResult<Activity[]>;
}) {
  return (
    <Section>
      <SectionHeader>
        <FadeItem>
          <SectionTitle>Open source journey</SectionTitle>
        </FadeItem>
        <FadeItem>
          <SectionTitle className="text-xs">
            <SectionLink
              href={`https://github.com/pulls?q=is:pr+author:${PERSONAL.github}+archived:false+is:closed`}
              onClick={() => track("see_all_open_source_pull_requests_clicked")}
            >
              See More
              <span className="sr-only">All Open Source Pull Requests</span>
            </SectionLink>
          </SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent className="gap-2">
        <FadeItem className="rounded-lg border-2 border-border p-4 md:rounded-none md:border-none md:p-0">
          <ActivityCalendarComponent activities={activities} />
        </FadeItem>
        <PullRequestComponent pullRequest={pullRequest} />
      </SectionContent>
    </Section>
  );
}
