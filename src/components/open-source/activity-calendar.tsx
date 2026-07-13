import { GitPullRequestCreateArrow, WifiOff } from "lucide-react";
import { useEffect, useRef } from "react";
import { FadeItem } from "@/components/abhiarya-ui/fade";
import { ErrorCard } from "@/components/error/error-card";
import {
  type Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import type { ActionsReturn } from "@/types";

export function ActivityCalendarComponent({
  activities,
}: {
  activities: ActionsReturn<Activity[]>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { data, error } = activities;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;
    container.children[0].scrollBy({
      left: container.children[0].scrollWidth,
      behavior: "smooth",
    });
    container.children[0].setAttribute("tabindex", "-1");
  }, []);

  return (
    <FadeItem className="rounded-lg border-2 border-border p-4 md:rounded-none md:border-none md:p-0">
      {error && (
        <ErrorCard className="text-destructive">
          <WifiOff />
          <span>{error.message}</span>
        </ErrorCard>
      )}

      {data && data.length > 0 && (
        <>
          <div className="flex justify-center overflow-hidden">
            <ContributionGraph
              data={data}
              blockSize={11}
              fontSize={12}
              blockMargin={2}
            >
              <ContributionGraphCalendar>
                {({ activity, dayIndex, weekIndex }) => (
                  <ContributionGraphBlock
                    activity={activity}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                )}
              </ContributionGraphCalendar>
              <ContributionGraphFooter>
                <ContributionGraphTotalCount />
                <ContributionGraphLegend />
              </ContributionGraphFooter>
            </ContributionGraph>
          </div>

          <div className="mt-2 block text-center md:hidden">
            <p className="text-muted-foreground text-xs">
              ← Scroll to view older contributions
            </p>
          </div>
        </>
      )}

      {data && data.length === 0 && (
        // <ErrorCard
        //   message={"No contributions found..."}
        //   icon={<GitPullRequestArrow className="size-5" />}
        //   level="info"
        // />
        <ErrorCard className="text-muted-foreground">
          <GitPullRequestCreateArrow />
          <span>No contributions found...</span>
        </ErrorCard>
      )}
    </FadeItem>
  );
}
