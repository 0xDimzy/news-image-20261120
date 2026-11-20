// Entry point for the news-image-20261120 front page.
// Copies the rendered PNG next to this file into the output folder
// named by MAKEFUN_OUTPUT_DIR, or /output when that variable is unset.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const entryDir: string = dirname(fileURLToPath(import.meta.url));
const renderedPage: string = join(entryDir, "entry.png");
const outputDir: string = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const publishedPage: string = join(outputDir, "entry.png");

function publishEntryImage(): void {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(renderedPage, publishedPage);
}

publishEntryImage();
