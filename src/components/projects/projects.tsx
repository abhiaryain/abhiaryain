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

  const featuredProjects = projects.filter((projects) => projects.featured);

  if (!featuredProjects.length) return null;

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
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              url={project.url}
              icon={project.icon}
              links={project.links}
              tags={project.tags}
              featured={project.featured}
            />
          ))}
      </SectionContent>
    </Section>
  );
}
