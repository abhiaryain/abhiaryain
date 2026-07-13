#!/usr/bin/env node

import path from "node:path";
import { promises as fs } from "node:fs";

async function compareDirectories(
  source,
  destination,
  { deleteIdentical = false, dryRun = false } = {},
) {
  const [sourceEntries, destinationEntries] = await Promise.all([
    fs.readdir(source, { withFileTypes: true }),
    fs.readdir(destination, { withFileTypes: true }),
  ]);

  const destinationFiles = new Set(
    destinationEntries.filter((e) => e.isFile()).map((e) => e.name),
  );

  let changed = 0;
  let identical = 0;

  for (const entry of sourceEntries) {
    if (!entry.isFile()) continue;
    if (!destinationFiles.has(entry.name)) continue;

    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    const [sourceContent, destinationContent] = await Promise.all([
      fs.readFile(sourcePath, "utf8"),
      fs.readFile(destinationPath, "utf8"),
    ]);

    if (sourceContent !== destinationContent) {
      changed++;
      console.log(`✗ Changed: ${entry.name}`);
      continue;
    }

    identical++;
    console.log(`✓ Identical: ${entry.name}`);

    if (deleteIdentical) {
      if (dryRun) {
        console.log(`  Would delete ${destinationPath}`);
      } else {
        await fs.rm(destinationPath);
        console.log(`  Deleted`);
      }
    }
  }

  console.log("\nSummary");
  console.log(`Changed   : ${changed}`);
  console.log(`Identical : ${identical}`);
}

async function main() {
  const [, , source, destination, ...flags] = process.argv;

  if (!source || !destination) {
    console.error(
      "Usage: compare <source> <destination> [--delete-identical] [--dry-run]",
    );
    process.exit(1);
  }

  await compareDirectories(source, destination, {
    deleteIdentical: flags.includes("--delete-identical"),
    dryRun: flags.includes("--dry-run"),
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
