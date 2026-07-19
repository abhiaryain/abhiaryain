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
      ...SOCIALS.filter((social) => social.name !== "Phone").map((social) => {
        return {
          // Icons were used in the URL for better consistency.
          source: `/${social.icon.toLowerCase()}`,
          destination: social.url,
          permanent: true,
        };
      }),
      ...PROJECTS.map((project) => ({
        source: `/${project.name.toLowerCase()}`,
        destination: project.url,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
