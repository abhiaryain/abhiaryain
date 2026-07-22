import type { NextConfig } from "next";
import { validateEnv } from "@/config/server-env";
import { PROJECTS } from "@/data/projects";
import { SOCIALS } from "@/data/social";

validateEnv();

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  redirects: () => {
    return [
      ...SOCIALS.filter((social) => "slug" in social)
        .filter((social) => !social.url.startsWith("tel:"))
        .map((social) => ({
          source: `/${social.slug.toLowerCase()}`,
          destination: social.url,
          permanent: true,
        })),
      ...PROJECTS.filter((project) => "slug" in project).map((project) => ({
        source: `/${project.slug.toLowerCase()}`,
        destination: project.url,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
