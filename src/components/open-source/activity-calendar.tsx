import { format } from "date-fns";
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
      <FadeItem className="rounded-lg border-2 border-border p-4 md:rounded-none md:border-none md:p-0">
        <ErrorCard className="text-destructive">
          <WifiOff />
          <span>{error.message}</span>
        </ErrorCard>
      </FadeItem>
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
                  {totalCount.toLocaleString("en")} contributions in last year
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
