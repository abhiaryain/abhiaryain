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
import { ExperienceCard } from "@/components/experience/experience-card";
import { useData } from "../data-provider/data-provider";

export function Experience() {
  const { experience, personal, social } = useData();

  return (
    <Section>
      <SectionHeader>
        <FadeItem>
          <SectionTitle>Experience</SectionTitle>
        </FadeItem>
        <FadeItem>
          <SectionTitle className="text-xs">
            <SectionLink
              href={
                social.find((social) => social.name.toLowerCase() === "x")
                  ?.url ?? `https://github.com/${personal.github}`
              }
              onClick={() => track("available_for_new_opportunities_clicked")}
              className="gap-1"
            >
              <div className="size-2 flex-none overflow-hidden rounded-full bg-green-500" />
              <p className="hidden sm:inline">
                Available for new opportunities
              </p>
              <p className="inline sm:hidden">Available</p>
            </SectionLink>
          </SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        {experience
          .filter((experience) => experience.featured)
          .map((experience) => (
            <ExperienceCard
              key={experience.company}
              company={experience.company}
              position={experience.position}
              shortPosition={experience.shortPosition}
              location={experience.location}
              startDate={experience.startDate}
              endDate={experience.endDate}
              url={experience.url}
              links={experience.links}
              icon={experience.icon}
              featured={experience.featured}
            />
          ))}
      </SectionContent>
    </Section>
  );
}
