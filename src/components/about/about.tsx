"use client";

import { FadeItem } from "@/components/abhiarya-ui/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/abhiarya-ui/section";
import { useData } from "@/context/data-context";

export function About() {
  const { personal } = useData();
  return (
    <Section className="gap-2">
      <SectionHeader>
        <FadeItem>
          <SectionTitle>About me</SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        <FadeItem>{personal.about}</FadeItem>
      </SectionContent>
    </Section>
  );
}
