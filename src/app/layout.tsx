import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Fade } from "@/components/abhiarya-ui/fade";
import { Container } from "@/components/container";
import { OneKo } from "@/components/oneko";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DataProvider } from "@/context/data-context";
import { EXPERIENCES } from "@/data/experience";
import { PERSONAL } from "@/data/personal";
import { PROJECTS } from "@/data/projects";
import { SOCIALS } from "@/data/social";
import { getBaseURL } from "@/lib/base-url";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  // We can use `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}` to get the production URL of the project on Vercel
  const baseURL = await getBaseURL();

  return {
    metadataBase: new URL(baseURL),
    title: {
      default: PERSONAL.nickname,
      template: `%s | ${PERSONAL.nickname}`,
    },
    description: PERSONAL.summary,
    applicationName: PERSONAL.nickname,
    authors: [
      { name: PERSONAL.nickname, url: new URL(baseURL) },
      { name: PERSONAL.name, url: new URL(baseURL) },
    ],
    keywords: Array.from(
      new Set([
        PERSONAL.name,
        PERSONAL.name.split(" ")[0],
        PERSONAL.nickname,
        PERSONAL.nickname.split(" ")[0],
        PERSONAL.nickname.split(" ").join(""),
        PERSONAL.title,
        PERSONAL.github,
        PERSONAL.portfolio,
        ...PERSONAL.phones,
        ...PERSONAL.emails,
        ...EXPERIENCES.map((experience) => experience.company),
        ...EXPERIENCES.map((experience) => experience.position),
        ...EXPERIENCES.map((experience) => experience.abbreviation),
        ...SOCIALS.map((social) => social.username),
        ...PROJECTS.map((project) => project.name),
      ]),
    ),
    referrer: "strict-origin-when-cross-origin",
    creator: PERSONAL.nickname,
    publisher: PERSONAL.nickname,
    openGraph: {
      url: new URL(baseURL),
      siteName: PERSONAL.nickname,
      // TODO: Add og:video support
      type: "website",
      emails: [...PERSONAL.emails],
      phoneNumbers: [...PERSONAL.phones],
      countryName: PERSONAL.address.country,
      locale: "en_IN",
      ttl: 60 * 60 * 24,
    },
    twitter: {
      siteId: "1859480388193701888",
      creator: `@${PERSONAL.twitter}`,
      creatorId: "1859480388193701888",
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "min-h-screen bg-background font-sans",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <DataProvider>
            <Container>
              <Fade>
                <TooltipProvider>{children}</TooltipProvider>
              </Fade>
            </Container>
          </DataProvider>
          <OneKo />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
