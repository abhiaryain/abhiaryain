import type { Configuration } from "lint-staged";

const config: Configuration = {
  "*": ["biome check --write"],
};

export default config;
