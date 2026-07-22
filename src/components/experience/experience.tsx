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
import { useData } from "@/context/data-context";

export function Experience() {
  const { experiences, personal, socials } = useData();

  if (!experiences.filter((experience) => experience.featured).length) {
    return null;
  }

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
                socials.find((social) => social.name.toLowerCase() === "x")
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
        {experiences
          .filter((experience) => experience.featured)
          .map((experience) => (
            <ExperienceCard key={experience.company} {...experience} />
          ))}
      </SectionContent>
    </Section>
  );
}
