import type { Link } from "@/types/link";

export const SKILLS = [
  {
    name: "TypeScript",
    icon: "typescript",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Node",
    icon: "node",
    url: "https://nodejs.org",
  },
  {
    name: "Postgres",
    icon: "postgres",
    url: "https://www.postgresql.org",
  },
  {
    name: "Redis",
    icon: "redis",
    url: "https://redis.io",
  },
  {
    name: "Docker",
    icon: "docker",
    url: "https://www.docker.com",
  },
  {
    name: "Kafka",
    icon: "kafka",
    url: "https://kafka.apache.org",
  },
  {
    name: "AWS",
    icon: "aws",
    url: "https://aws.amazon.com",
  },
] as const satisfies readonly Link[];
