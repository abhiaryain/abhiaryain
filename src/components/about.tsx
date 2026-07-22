"use client";

import { FadeItem } from "@/components/abhiarya-ui/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/abhiarya-ui/section";
import { TagList } from "@/components/tag-list/tag-list";
import { useData } from "@/context/data-context";

export function About() {
  const { skills, writes, shipping } = useData();
  return (
    <Section className="gap-2">
      <SectionHeader>
        <FadeItem>
          <SectionTitle>About me</SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        <FadeItem>
          <span className="font-mono text-muted-foreground text-sm leading-6">
            I&apos;m a software engineer experienced in building scalable
            backend systems using <TagList tags={skills} /> and more. Currently,
            I&apos;m building <TagList tags={shipping} /> while contributing to
            open-source projects. When I&apos;m not writing code, you&apos;ll
            find me writing articles about my <TagList tags={writes} />
          </span>
        </FadeItem>
      </SectionContent>
    </Section>
  );
}
