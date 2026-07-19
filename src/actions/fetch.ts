import "server-only";

import { env } from "@/config/server-env";

export async function request(query: string) {
  return fetch("https://api.github.com/graphql", {
    cache: "force-cache",
    next: { revalidate: 60 * 10 }, // 10 minutes
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    },
  });
}
