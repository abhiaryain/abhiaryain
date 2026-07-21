import type { Project } from "@/types/project";

export const PROJECTS = [
  {
    name: "Currunt",
    description: "The AI that works alongside you",
    url: "https://currunt.in",
    icon: "currunt",
    slug: "currunt",
    links: [
      {
        name: "Github",
        url: "https://github.com/curruntin/currunt",
        icon: "github",
      },
      {
        name: "Website",
        url: "https://currunt.in",
        icon: "link",
      },
    ],
    technologies: [
      { name: "Next", icon: "next", url: "https://nextjs.org" },
      { name: "TailwindCSS", icon: "tailwind", url: "https://tailwindcss.com" },
      { name: "Bun", icon: "bun", url: "https://bun.sh" },
      { name: "hono", icon: "hono", url: "https://honojs.dev" },
      { name: "AI SDK", icon: "ai-sdk", url: "https://ai-sdk.dev" },
    ],
    featured: true,
  },
  {
    name: "Learnings",
    description:
      "Learnings is a collection of tutorials and blog posts, designed to capture my ongoing learning journey and share practical insights with others.",
    url: "https://learnings.abhiarya.in",
    icon: "learnings",
    slug: "learnings",
    links: [
      {
        name: "Github",
        url: "https://github.com/abhiaryain/learnings",
        icon: "github",
      },
      {
        name: "Learnings",
        url: "https://learnings.abhiarya.in",
        icon: "link",
      },
    ],
    technologies: [
      { name: "Next", icon: "next", url: "https://nextjs.org" },
      { name: "TailwindCSS", icon: "tailwind", url: "https://tailwindcss.com" },
      { name: "MDX", icon: "mdx", url: "https://mdxjs.com" },
    ],
    featured: true,
  },
] as const satisfies readonly Project[];
