# Friday 20 November 2026, on one page

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/0xDimzy/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/0xDimzy/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

This entry squeezes a whole day of world news into a single newspaper-style
image. Everything shown happened on Friday 20 November 2026, or was first
reported that day; anything from Thursday is named in a DATE CHECK box at
the foot of the page and kept out of the count.

## What is on the page

- A masthead carrying the date, with a strip of six headline numbers
  underneath (evacuees, damaged bridges, index moves, inflation, oil, a
  record century).
- Three illustrated lead stories: Cyclone Akvan coming ashore in Odisha,
  the overnight strike that hit all three of Kyiv's Dnipro bridges, and
  COP31 running out of road on its final day in Antalya.
- Ten smaller illustrated cards and a world map whose numbered pins match
  the story numbers used across the page.
- Seventeen one-line briefs covering sport, markets, courts and weather,
  each credited to the outlet or official who reported it.

Thirty stories in total, spread over seven regions. Where a claim comes
from a single source it is attributed to that source rather than asserted.

## How it is built

`frontpage.html` holds the whole layout — type, rules, charts and the
small inline-SVG illustrations. The submitted `entry.png` is a screenshot
of that page taken with headless Chrome at 1024×1024, so the picture the
judge sees is exactly what the HTML draws. `main.ts` is a tiny Node 22
script (standard library only) that reads `entry.png` and writes it into
the output directory named by `MAKEFUN_OUTPUT_DIR`, falling back to
`/output` when the variable is not set. It does no network access and
produces the same bytes on every run.

## Files

- `entry.png` — the rendered front page that gets judged
- `frontpage.html` — the page source the image was rendered from
- `main.ts` — delivers `entry.png` to the grader's output directory
- `LICENSE` — MIT

## Try it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
