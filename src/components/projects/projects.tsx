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
import { ProjectCard } from "@/components/projects/projects-card";
import { useData } from "@/context/data-context";

export function Projects() {
  const { projects } = useData();

  if (!projects.filter((projects) => projects.featured).length) {
    return null;
  }

  return (
    <Section>
      <SectionHeader>
        <FadeItem>
          <SectionTitle>Featured Projects</SectionTitle>
        </FadeItem>
        <FadeItem>
          <SectionTitle className="text-xs">
            <SectionLink
              href={"/projects"}
              onClick={() => track("see_all_projects_clicked")}
              target="_self"
            >
              See More
              <span className="sr-only">All Projects</span>
            </SectionLink>
          </SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
      </SectionContent>
    </Section>
  );
}
