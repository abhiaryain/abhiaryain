import { Fragment } from "react";
import { Badges } from "@/components/tag-list/badges";
import { cn } from "@/lib/utils";
import type { Link } from "@/types/link";

export function TagList({
  tags,
}: {
  tags: readonly Link[];
  project?: boolean;
}) {
  return (
    <span className={cn("space-x-1.5 whitespace-pre-line")}>
      {tags.map((tag) => (
        <Fragment key={tag.name}>
          <Badges {...tag} />
        </Fragment>
      ))}
    </span>
  );
}
