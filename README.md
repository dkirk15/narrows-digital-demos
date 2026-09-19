# Narrows Digital — patient booking demos

Static, mobile-first appointment-request demos for Tacoma-area and Gig Harbor dental practices. Stadium and Simpson & Coyner use practice-unique local skins; Down to Earth and Parkland use the shared productized visual system (see `shared/`).

## Open the previews

After GitHub Pages is enabled on this repo (`main` / root):

| Practice | Local path | Preview URL |
| --- | --- | --- |
| Stadium Dental Health | `stadium-dental-health/` | https://dkirk15.github.io/narrows-digital-demos/stadium-dental-health/ |
| Down to Earth Dental | `down-to-earth-dental/` | https://dkirk15.github.io/narrows-digital-demos/down-to-earth-dental/ |
| Parkland Pacific Dental | `parkland-pacific-dental/` | https://dkirk15.github.io/narrows-digital-demos/parkland-pacific-dental/ |
| Simpson & Coyner Family Dentistry | `simpson-coyner-family-dentistry/` | https://dkirk15.github.io/narrows-digital-demos/simpson-coyner-family-dentistry/ |

Hub: https://dkirk15.github.io/narrows-digital-demos/

Open any `index.html` locally in a browser if you prefer offline review.

## What changed vs old sites (summary)

See `NOTES.md` for per-practice notes. Across the demos:

- Clear **Book / Request appointment** CTA and multi-page IA (Home, Services, About, Contact)
- Mobile-first, fast static HTML/CSS/JS — no heavy framework
- Client-side-only form (preview success message; no PHI backend)
- Exact footer on every page: `Preview by Narrows Digital — not affiliated with the practice.`
- No pricing tables, no HIPAA certification claims, no outreach, not on their real domains

## Practices (public content only)

1. **Stadium Dental Health** — Tacoma — site often 403; contact/hours/services scope from public snippets only; no invented doctors. Unique `stadium.css` skin.
2. **Down to Earth Dental** — two Tacoma locations; membership mentioned without dollar amounts.
3. **Parkland Pacific Dental** — insurance list and services from public site; move notice to Centennial Building retained.
4. **Simpson & Coyner Family Dentistry** — Gig Harbor — harbor-led unique `harbor.css` skin; public facts from rcoynerdds.com; call-only booking replaced with request form.

## Stack

- Shared demos: plain HTML + `shared/shared.css` + `shared/shared.js` (DM Sans / Fraunces)
- Stadium: `stadium.css` + `stadium.js` (Barlow Condensed / Source Sans 3)
- Simpson & Coyner: `harbor.css` + `harbor.js` (Literata / Outfit)
