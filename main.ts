// Two Lines to Your Past Self — v2: "The 6:12 p.m. Train"
//
// Writes exactly two lines to $OUTPUT_DIR/entry.txt (default /output).
// Line 1 warns the past self about one specific moment, in one sentence.
// Line 2 says, in one sentence, why that moment mattered and what changed.
// No dependencies; plain Node.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "Don't say 'I need space' as the train doors close at 6:12 p.m.",
  "She nods, steps back, and you never hear her voice again.",
];

const text = lines.join("\n");
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  throw new Error("entry must be exactly 2 non-empty lines");
}
if ([...text].length < 1 || [...text].length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${[...text].length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, text + "\n", "utf8");
console.log(`wrote ${outPath} (${[...text].length} characters)`);
