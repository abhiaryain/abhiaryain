import { track } from "@vercel/analytics";
import {
  Card,
  CardContent,
  CardDescription,
  CardIcon,
  CardLayer,
  CardLayerGroup,
  CardLink,
  CardTitle,
} from "@/components/abhiarya-ui/card";
import { FadeItem } from "@/components/abhiarya-ui/fade";
import { icons } from "@/components/icons";
import { kebab } from "@/lib/kabab";
import type { Experience } from "@/types/experience";

export function ExperienceCard({
  company,
  position,
  abbreviation,
  location,
  start,
  end,
  url,
  links,
  icon,
}: Experience) {
  return (
    <FadeItem>
      <Card>
        <CardContent>
          <CardIcon icon={icon} />
          <CardLayerGroup>
            <CardLayer>
              <CardTitle className="overflow-hidden">
                <CardLink
                  href={url}
                  onClick={() => track(`experience_${kebab(company)}_clicked`)}
                  className="truncate"
                >
                  {company}
                </CardLink>
                {links.map((link) => {
                  const Icon = icons[link.icon];
                  return (
                    <CardLink
                      key={link.name}
                      href={link.url}
                      onClick={() =>
                        track(
                          `experience_${kebab(company)}_${kebab(link.name)}_clicked`,
                        )
                      }
                    >
                      <Icon />
                      <span className="sr-only">
                        {`${kebab(company)}_${link.name}`}
                      </span>
                    </CardLink>
                  );
                })}
              </CardTitle>
              <CardTitle className="text-xs">{location} </CardTitle>
            </CardLayer>
            <CardLayer className="gap-4 overflow-hidden py-0">
              <CardDescription className="hidden truncate sm:block">
                {position}
              </CardDescription>
              <CardDescription className="flex sm:hidden">
                {abbreviation}
              </CardDescription>
              <CardDescription className="whitespace-nowrap text-end font-mono text-xs">{`${start} - ${end}`}</CardDescription>
            </CardLayer>
          </CardLayerGroup>
        </CardContent>
      </Card>
    </FadeItem>
  );
}
