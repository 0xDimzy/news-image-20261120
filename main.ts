// Entrypoint for the make.fun bounty "news-image-20261120".
//
// The submission artwork is finished ahead of time: a 1024x1024 front page
// rendered from frontpage.html and stored beside this script as entry.png.
// When the grader runs this program, the only remaining task is to hand
// those exact bytes over, so the script loads the image into memory and
// writes it back out under the same name in the output directory.
// The runner points MAKEFUN_OUTPUT_DIR at that directory; when the
// variable is absent the conventional /output location is used instead.
//
// Nothing here touches the network or a clock, and only node builtins are
// involved, so every run emits the identical file.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

function resolveOutputDir(): string {
  const configured = process.env.MAKEFUN_OUTPUT_DIR;
  return configured !== undefined && configured.length > 0 ? configured : '/output';
}

function deliverEntryImage(): void {
  const bytes = readFileSync(new URL('./entry.png', import.meta.url));
  writeFileSync(join(resolveOutputDir(), 'entry.png'), bytes);
}

deliverEntryImage();
