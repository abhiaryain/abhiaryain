import type { NextConfig } from "next";
import { validateEnv } from "@/config/server-env";

validateEnv();

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default nextConfig;
