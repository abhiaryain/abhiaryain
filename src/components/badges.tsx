"use client";

import { track } from "@vercel/analytics";
import NextLink from "next/link";
import type { ComponentProps } from "react";
import { icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { kebab } from "@/lib/kabab";
import { cn } from "@/lib/utils";
import type { Link } from "@/types/link";

export function Badges({
  name,
  icon,
  url,
  className,
}: Link & ComponentProps<typeof Badge>) {
  const Icon = icons[icon];
  return (
    <Badge
      variant={"outline"}
      className={cn(
        "text-muted-foreground",
        "bg-accent/50 hover:bg-accent",
        "rounded-sm transition-[background]",
        "border-muted-foreground border-dashed [&>svg]:size-3",
        "focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        className,
      )}
    >
      <NextLink
        href={url}
        target="_blank"
        rel="noopener"
        className="flex items-center gap-1 focus-visible:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        onClick={() => track(`${kebab(name)}_badge_clicked`)}
      >
        <Icon className="mr-0.5 size-3" /> {name}
      </NextLink>
    </Badge>
  );
}
