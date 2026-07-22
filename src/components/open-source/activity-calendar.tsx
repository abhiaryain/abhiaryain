import { format } from "date-fns";
import { GitPullRequestCreateArrow, WifiOff } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  type Activity,
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { ErrorCard } from "@/components/open-source/error-card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ActionResult } from "@/types/github/api";

export function ActivityCalendarComponent({
  activities,
}: {
  activities: ActionResult<Activity[]>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { success } = activities;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;
    container.scrollBy({
      left: container.scrollWidth,
      behavior: "smooth",
    });
  }, []);

  if (!success) {
    const { error } = activities;

    return (
      <ErrorCard className="text-destructive">
        <WifiOff />
        <span>{error.message}</span>
      </ErrorCard>
    );
  }

  const { data } = activities;

  if (data.length === 0) {
    return (
      <ErrorCard className="text-muted-foreground">
        <GitPullRequestCreateArrow />
        <span>No contributions found...</span>
      </ErrorCard>
    );
  }

  return (
    <>
      <div className="flex justify-center overflow-hidden">
        <ContributionGraph
          data={data}
          blockSize={11}
          fontSize={12}
          blockMargin={2}
          className="hover:none"
          tabIndex={-1}
        >
          <ContributionGraphCalendar ref={containerRef}>
            {({ activity, dayIndex, weekIndex }) => (
              <Tooltip>
                <TooltipTrigger
                  render={
                    <g>
                      <ContributionGraphBlock
                        activity={activity}
                        dayIndex={dayIndex}
                        weekIndex={weekIndex}
                      />
                    </g>
                  }
                ></TooltipTrigger>
                <TooltipContent className="font-sans">
                  <p>
                    {activity.count} contribution
                    {activity.count > 1 ? "s" : null} on{" "}
                    {format(new Date(activity.date), "dd.MM.yyyy")}
                  </p>
                </TooltipContent>
              </Tooltip>
            )}
          </ContributionGraphCalendar>
          <ContributionGraphFooter>
            <ContributionGraphTotalCount>
              {({ totalCount }) => (
                <div className="text-muted-foreground">
                  {`${totalCount.toLocaleString("en")} contributions`}
                  <span className="hidden  sm:inline"> in last year</span>
                </div>
              )}
            </ContributionGraphTotalCount>
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
  );
}
