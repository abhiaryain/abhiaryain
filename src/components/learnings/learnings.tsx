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
import { LearningCard } from "@/components/learnings/learnings-card";
import { useData } from "@/context/data-context";

export function Learnings() {
  const { learnings } = useData();

  if (!learnings.filter((learning) => learning.featured).length) {
    return null;
  }

  return (
    <Section>
      <SectionHeader>
        <FadeItem>
          <SectionTitle>Recent Learnings</SectionTitle>
        </FadeItem>
        <FadeItem>
          <SectionTitle className="text-xs">
            <SectionLink
              href={`https://learnings.abhiarya.in`}
              onClick={() => track("learnings_more_clicked")}
            >
              See More
              <span className="sr-only">Recent Learnings</span>
            </SectionLink>
          </SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        {learnings
          .filter((learning) => learning.featured)
          .map((learnings) => (
            <LearningCard key={learnings.title} {...learnings} />
          ))}
      </SectionContent>
    </Section>
  );
}
