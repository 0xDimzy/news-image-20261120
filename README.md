# Friday 20 November 2026 — The World's News in One Picture

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/0xDimzy/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/0xDimzy/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One newspaper front page for **Friday 20 November 2026**: 36 sourced
stories across 7 regions, drawn and set as a single 1024×1024 image.

## Inside the page

- Three illustrated leads: Cyclone Akvan's landfall in Odisha, the
  overnight barrage that damaged Kyiv's three Dnipro bridges, and
  COP31 reaching its final day in Antalya without a deal.
- Thirteen drawn cards, each with its own scene illustration, a
  two-line summary, and a named source — markets, sport, science,
  weather, conflict, and culture.
- A world map with colour-coded dots for every region and a legend.
- Twenty one-line briefs, a six-number stat strip, and a Date Check
  box listing five big Thursday 19 November stories deliberately
  excluded from the count.
- Region tally: Europe 10, Asia 7, Americas 7, Africa 5,
  Global/Space 4, Middle East 2, Oceania 1.

Single-source claims are attributed (“police said”, “reported”)
rather than stated as settled fact. Sources named on the page include
Reuters, IMD/PTI, ESA, ICC, EORTC, Windward, Al Jazeera, Helsinki
Times, and UNICEF.

## Files

- `frontpage.html` — the page source (no external resources; system
  fonts only, all illustrations inline SVG).
- `entry.png` — the rendered 1024×1024 front page.
- `main.ts` — copies `entry.png` to the output directory
  (`MAKEFUN_OUTPUT_DIR`, falling back to `/output`). Node standard
  library only, no arguments.

## Run

```sh
node main.ts
```
