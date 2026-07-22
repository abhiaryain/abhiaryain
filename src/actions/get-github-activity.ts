import "server-only";

import { request } from "@/actions/helpers/request";
import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { PERSONAL } from "@/data/personal";
import type { ActionResult } from "@/types/github/api";
import type { ContributionWeek } from "@/types/github/contribution";

const query = `
query {
  user(login: "${PERSONAL.github}") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 1) return 1;
  if (count <= 5) return 2;
  if (count <= 8) return 3;
  return 4;
}

export async function getGithubActivity(): Promise<ActionResult<Activity[]>> {
  const res = await request(query);

  if (!res.ok) {
    return {
      success: false,
      error: { message: "Unable to fetch GitHub activity." },
    };
  }

  const { data } = await res.json();

  if (!data?.user?.contributionsCollection?.contributionCalendar?.weeks) {
    return {
      success: false,
      error: { message: "GitHub response is missing expected data." },
    };
  }

  let contributions: Activity[] =
    data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week: ContributionWeek) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: getLevel(day.contributionCount),
        })),
    );

  // Removed older contributions to keep the calendar clean
  if (contributions.length > 350) {
    contributions = contributions.slice(contributions.length - 350);
  }

  return { success: true, data: contributions };
}
