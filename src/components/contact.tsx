import { FadeItem } from "@/components/abhiarya-ui/fade";
import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/abhiarya-ui/section";
import { Social } from "@/components/social";

export function Contact() {
  return (
    <Section className="gap-0">
      <SectionHeader>
        <FadeItem>
          <SectionTitle>Get in touch</SectionTitle>
        </FadeItem>
      </SectionHeader>
      <SectionContent className="gap-0">
        <FadeItem>
          <p className="text-muted-foreground text-sm leading-6">
            Feel free to reach out if you want to collaborate on a project, have
            a question, or just want to connect.
          </p>
        </FadeItem>
        <FadeItem className="mb-2">
          <Social />
        </FadeItem>
      </SectionContent>
    </Section>
  );
}
