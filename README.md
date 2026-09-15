# Narrows Digital — patient booking demos

Static, mobile-first appointment-request demos for three Tacoma-area dental practices. Built as a shared productized visual system (see `shared/`).

## Open the previews

After GitHub Pages is enabled on this repo (`main` / root):

| Practice | Local path | Preview URL |
| --- | --- | --- |
| Stadium Dental Health | `stadium-dental-health/` | https://dkirk15.github.io/narrows-digital-demos/stadium-dental-health/ |
| Down to Earth Dental | `down-to-earth-dental/` | https://dkirk15.github.io/narrows-digital-demos/down-to-earth-dental/ |
| Parkland Pacific Dental | `parkland-pacific-dental/` | https://dkirk15.github.io/narrows-digital-demos/parkland-pacific-dental/ |

Hub: https://dkirk15.github.io/narrows-digital-demos/

Open any `index.html` locally in a browser if you prefer offline review.

## What changed vs old sites (summary)

See `NOTES.md` for per-practice notes. Across all three:

- Shared modern visual system (tokens, typography, layout, booking form)
- Clear **Book / Request appointment** CTA and multi-page IA (Home, Services, About, Contact)
- Mobile-first, fast static HTML/CSS/JS — no heavy framework
- Client-side-only form (preview success message; no PHI backend)
- Exact footer on every page: `Preview by Narrows Digital — not affiliated with the practice.`
- No pricing tables, no HIPAA certification claims, no outreach, not on their real domains

## Practices (public content only)

1. **Stadium Dental Health** — Tacoma — site often 403; contact/hours/services scope from public snippets only; no invented doctors.
2. **Down to Earth Dental** — two Tacoma locations; membership mentioned without dollar amounts.
3. **Parkland Pacific Dental** — insurance list and services from public site; move notice to Centennial Building retained.

## Stack

Plain HTML + `shared/shared.css` + `shared/shared.js`. Google Fonts (DM Sans / Fraunces).
