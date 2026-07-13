import { FadeItem } from "@/components/abhiarya-ui/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/abhiarya-ui/section";
import { PERSONAL_DATA } from "@/data/personal";

export function About() {
  return (
    <Section className="gap-2">
      <SectionHeader>
        <FadeItem>
          <SectionTitle>About me</SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent>
        <FadeItem>{PERSONAL_DATA.about}</FadeItem>
      </SectionContent>
    </Section>
  );
}
