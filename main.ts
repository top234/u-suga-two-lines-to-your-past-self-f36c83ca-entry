import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const lines = [
  "Don't pawn Grandpa's guitar for forty bucks on Main Street.",
  "Years later, your daughter will learn her first song on those same strings.",
];

const outDir = process.env.OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), lines.join('\n') + '\n', 'utf8');
