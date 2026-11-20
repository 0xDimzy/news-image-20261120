// Entry for make.fun news-image-20261120: the front page of Friday 20 November 2026.
// The image beside this file (entry.png, 1024x1024) is the submission; this program
// copies it to the grader's output directory (MAKEFUN_OUTPUT_DIR, default /output).
// Deterministic: no network, no randomness, standard library only.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
