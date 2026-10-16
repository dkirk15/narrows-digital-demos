# practice.json: one file per demo

Each demo folder has a `practice.json`. It is the only place the practice's facts live:

| Field | What it is |
|---|---|
| `name` | Full business name, used in every `<title>` |
| `heroName` | Name shown as the hero h1. Usually the same as `name`, may be a shorter form of it (Stadium uses "Stadium Dental Health" for "Stadium Dental Health Center") |
| `phones` | Every allowed `tel:` value. A phone link not on this list fails the check |
| `pages` | Every page and its title template, `{name}` is filled in |
| `hero` | Hero images, see `hero-standard.md` |

After you change practice.json or any CSS/JS, run `npm run build`. It:
1. writes every `<title>` from `pages`,
2. fills any plain element marked `data-practice-name` with `heroName`,
3. sets `?v=` on every local CSS/JS link to a hash of that file, so phones never show stale CSS. Never hand-edit `?v=`.

A rename is a one-line change to `name`, then `npm run build`. Sources for owner, phone and address belong in Scout's lead file; copy facts from there, never from memory.
