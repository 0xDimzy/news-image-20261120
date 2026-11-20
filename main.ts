// Entry runner for news-image-20261120 (v4).
// Copies the finished front-page image next to this file into the
// directory named by MAKEFUN_OUTPUT_DIR, or /output when that
// variable is not set. Standard library only; takes no arguments.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "entry.png");
const targetDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

if (!existsSync(sourceImage)) {
  console.error(`entry.png not found beside main.ts (looked in ${here})`);
  process.exit(1);
}

mkdirSync(targetDir, { recursive: true });
const destination = join(targetDir, "entry.png");
copyFileSync(sourceImage, destination);
console.log(`wrote ${destination}`);
