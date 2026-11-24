import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two lines to my past self: a warning about one specific moment,
// and one sentence on why that moment mattered.
const TEXT =
  "Don't delete the 2:14 a.m. voicemail from the Reno payphone where Danny slurs, 'I love you, man.'\n" +
  "It's the last recording of his voice, and it's why you still answer every unknown number.";

const lines = TEXT.split("\n");
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  throw new Error("entry must be exactly 2 non-empty lines");
}
if (lines.some((l) => !l.trim().replace(/['"”’]+$/, "").endsWith("."))) {
  throw new Error("each line must be a single sentence");
}
const chars = [...TEXT].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry must be 1-280 characters, got ${chars}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");
const back = readFileSync(outPath, "utf8");
if (back !== TEXT) {
  throw new Error("entry.txt read-back mismatch");
}
console.log(`wrote ${outPath} (${chars} characters)`);
