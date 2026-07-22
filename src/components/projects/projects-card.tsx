"use client";

import { track } from "@vercel/analytics";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardIcon,
  CardLayer,
  CardLayerGroup,
  CardLink,
  CardTitle,
} from "@/components/abhiarya-ui/card";
import { FadeItem } from "@/components/abhiarya-ui/fade";
import { icons } from "@/components/icons";
import { Badges } from "@/components/tag-list/badges";
import { kebab } from "@/lib/kabab";
import type { Project } from "@/types/project";

export function ProjectCard({
  name,
  description,
  url,
  icon,
  links,
  technologies,
}: Project) {
  return (
    <FadeItem>
      <Card>
        <CardContent>
          <CardIcon
            icon={icon}
            className="mt-1 size-10 text-muted-foreground"
          />
          <CardLayerGroup>
            <CardLayer>
              <CardTitle className="overflow-hidden">
                <CardLink
                  href={url}
                  onClick={() => track(`project_${kebab(name)}_clicked`)}
                  className="truncate"
                >
                  {name}
                </CardLink>
              </CardTitle>
              <CardTitle>
                {links.map((link) => {
                  const Icon = icons[link.icon];
                  return (
                    <CardLink
                      key={link.name}
                      href={link.url}
                      onClick={() => track(`project_${kebab(name)}_clicked`)}
                    >
                      <Icon />
                      <span className="sr-only">
                        {`${kebab(name)}_${link.name}`}
                      </span>
                    </CardLink>
                  );
                })}
              </CardTitle>
            </CardLayer>
            <CardLayer className="py-0">
              <CardDescription className="line-clamp-2">
                {description}
              </CardDescription>
            </CardLayer>
          </CardLayerGroup>
        </CardContent>
        <CardFooter className="p-2">
          <span
            className={
              "whitespace-pre-line inline-flex flex-wrap gap-x-1.5 gap-y-1 space-x-0"
            }
          >
            {technologies.map((technology) => (
              <Badges key={technology.name} {...technology} />
            ))}
          </span>
        </CardFooter>
      </Card>
    </FadeItem>
  );
}
