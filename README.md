# Friday 20 November 2026 — The World in One Day

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/0xDimzy/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/0xDimzy/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A single newspaper front page for **Friday 20 November 2026**: 36 stories
that happened or were reported that day, across 7 regions, set as one
1024×1024 image.

## What is on the page

- Three illustrated leads: Cyclone Akvan's landfall in Odisha, the
  overnight barrage that damaged Kyiv's three Dnipro bridges, and COP31
  opening its final day in Antalya without a deal.
- Thirteen illustrated cards plus twenty one-line briefs covering
  markets, sport, science, weather, conflict, and culture.
- A six-number stat strip and a horizontal "The Day in UTC" timeline.
- A Date Check box listing five big Thursday 19 November stories that
  are deliberately **not** counted in the 36.
- Region tally: Europe 10, Asia 7, Americas 7, Africa 5, Global/Space 4,
  Middle East 2, Oceania 1.

Single-source claims are attributed ("police said", "reported") rather
than presented as settled fact. Sources named on the page include
Reuters, IMD/PTI, ESA, ICC, EORTC, Windward, Al Jazeera, Helsinki Times,
and UNICEF.

## Files

- `frontpage.html` — the page source (no external resources; system
  fonts only).
- `entry.png` — the rendered 1024×1024 front page.
- `main.ts` — copies `entry.png` to the output directory
  (`MAKEFUN_OUTPUT_DIR`, falling back to `/output`). Node standard
  library only, no arguments.

## Run

```sh
node main.ts
```
