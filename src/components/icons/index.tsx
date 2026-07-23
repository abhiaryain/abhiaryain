import {
  Link2,
  type LucideIcon,
  LucideMail,
  LucidePhone,
  type LucideProps,
} from "lucide-react";
import type { ReactElement } from "react";
import { Aaensa } from "@/components/icons/aaensa";
import { AiSDK } from "@/components/icons/ai-sdk";
import { AWS } from "@/components/icons/aws";
import { Bun } from "@/components/icons/bun";
import { Currunt } from "@/components/icons/currunt";
import { Docker } from "@/components/icons/docker";
import { Github } from "@/components/icons/github";
import { Hono } from "@/components/icons/hono";
import { Kafka } from "@/components/icons/kafka";
import { Learnings } from "@/components/icons/learnings";
import { Leetcode } from "@/components/icons/leetcode";
import { Linkedin } from "@/components/icons/linkedin";
import { MDX } from "@/components/icons/mdx";
import { Mithila } from "@/components/icons/mithila";
import { Next } from "@/components/icons/next";
import { Node } from "@/components/icons/node";
import { Postgres } from "@/components/icons/postgres";
import { React } from "@/components/icons/react";
import { Redis } from "@/components/icons/redis";
import { Resume } from "@/components/icons/resume";
import { Tailwind } from "@/components/icons/tailwind";
import { Typescript } from "@/components/icons/typescript";
import { Vridhee } from "@/components/icons/vridhee";
import { X } from "@/components/icons/x";
import type { Icon } from "@/types/icon";

export const icons = {
  aaensa: Aaensa,
  "ai-sdk": AiSDK,
  aws: AWS,
  bun: Bun,
  currunt: Currunt,
  docker: Docker,
  email: LucideMail,
  github: Github,
  hono: Hono,
  kafka: Kafka,
  learnings: Learnings,
  leetcode: Leetcode,
  link: Link2,
  linkedin: Linkedin,
  mdx: MDX,
  mithila: Mithila,
  next: Next,
  node: Node,
  phone: LucidePhone,
  postgres: Postgres,
  react: React,
  redis: Redis,
  resume: Resume,
  tailwind: Tailwind,
  typescript: Typescript,
  vridhee: Vridhee,
  x: X,
} as const satisfies Record<
  Icon,
  LucideIcon | ((props: LucideProps) => ReactElement)
>;
