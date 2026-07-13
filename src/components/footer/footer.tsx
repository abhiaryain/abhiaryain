import { FadeItem } from "@/components/abhiarya-ui/fade";
import { Section, SectionContent } from "@/components/abhiarya-ui/section";
import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher";
import { PERSONAL_DATA } from "@/data/personal";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Section>
      <SectionContent>
        <FadeItem className="flex items-end justify-between">
          <div className="flex flex-col gap-2 text-xs">
            <span>Designed &amp; Made with ❤️</span>
            <span className="text-muted-foreground">{`@ ${year} ${PERSONAL_DATA.nickname}. All rights reserved.`}</span>
          </div>
          <ThemeSwitcher />
        </FadeItem>
      </SectionContent>
    </Section>
  );
}
