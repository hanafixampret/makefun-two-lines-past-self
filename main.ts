import { mkdirSync, writeFileSync } from "node:fs";

const line1 = "Don't tell the team 'we don't need a backup' in the Friday standup before the migration.";
const line2 = "The migration wiped the only copy that night, and you spent the weekend rebuilding three years of work from memory.";
const entry = `${line1}\n${line2}`;

if (entry.length < 1 || entry.length > 280 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-280 chars, got ${entry.length}`);
}
const lines = entry.split("\n");
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  throw new Error("entry must be exactly two non-empty lines");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
