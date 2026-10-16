# Hero standard

Every new demo hero ships two crops from Lens, listed in `practice.json` under `hero`:

| Crop | Ratio | Minimum size | Used at |
|---|---|---|---|
| `desktop` | 16:9 | 1920 x 1080 (add a 2560 version for srcset if you like) | wider than 760px |
| `mobile` | 4:5 | 1080 x 1350 | 760px and below, via `<picture><source media="(max-width: 760px)">` |

Rules
- The business name is the hero h1 (`docs/practice-json.md`, hero-title rule). Lens leaves calm empty space for it on both crops, so no CSS `object-position` nudging is needed. Fix framing in the crop, not with CSS.
- Do not hand-write `?v=` cache-busters. `npm run build` does it.
- `npm run check` fails a non-legacy demo whose crops are missing or the wrong size.

Legacy: Down to Earth, Parkland Pacific, Simpson & Coyner and Stadium predate this standard and are marked `"legacy": true` (warnings only). Remove the flag when one of them gets a new hero.
