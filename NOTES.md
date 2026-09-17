# NOTES — what changed vs old

## Stadium Dental Health
- **Hero v4 illustrated (2026-09-16):** Lens map-style art live with `.place-hero--illustrated` (ink/navy type on cream, ≤~18% left navy overlay, mobile object-position 60% center). Photoreal v2 archived under `stadium-dental-health/assets/archive/`.
- **Hero v2 (2026-09-16):** Lens `hero-stadium-district-16x9-v2.png` with CSS-only left-weighted navy gradient (not baked into PNG). Mobile `object-position: 35% center`. v1 Unsplash placeholder archived under `stadium-dental-health/assets/archive/`. AI/placeholder caption retained.
- **Old fail:** Blue/teal token swap on shared template — same Fraunces + DM Sans, twin hero + card grid, “Narrows Digital preview” eyebrow, gradient “SD” mark; looked like a cousin of Down to Earth / Parkland.
- **Rebuild (Palette brief, 2026-09-16 PT):** Stadium-only `stadium.css` + `stadium.js` — no shared.css restyle that would affect other demos.
- **Type:** Barlow Condensed (display) + Source Sans 3 (UI). Dropped Fraunces / DM Sans.
- **Color:** Charcoal top bar, deep navy, warm paper, brick-red CTAs/underlines; soft sky for focus rings only. No medical blue #1d4ed8 / teal twin.
- **Hero:** Photo-led wide place hero (labeled Unsplash neighborhood placeholder) with navy overlay; H1 leads with Stadium District. Killed eyebrow + 1.2fr/0.9fr hero-card twin.
- **Home silhouette:** Place hero → comfort promise band (practice voice, not 01/02/03) → horizontal service chips → hours + OSM map → CTA band.
- **Brand:** Wordmark “Stadium Dental” + geometric N/S monogram (navy + brick border), not gradient SD square.
- **About:** Single-column letter + large phone CTA; honest that doctor names weren’t recoverable — no invented clinicians / hollow Team bios.
- **CTA:** Squared buttons; primary Request appointment; secondary Call; tertiary Free smile consultation → contact `?reason=smile`.
- **Kept:** Exact footer banner; address/phone/hours; pediatric/family/cosmetic + smile consult scope; client-side form; no pricing/HIPAA/outreach.

## Down to Earth Dental
- **Old:** Functional but denser marketing site; booking less productized as a dedicated CTA flow across pages.
- **Demo:** Dual-location contact clarity, evening/weekend emphasis, team cards from public truncated bios (Song DDS, Suarez DMD), membership club mentioned **without** dollar amounts (no pricing on demos).
- **Unchanged ethically:** No outreach; public facts only.
- **Note:** Untouched in Stadium rebuild (2026-09-16).

## Parkland Pacific Dental
- **Old:** Weebly-style site; appointment request present but dated; weaker mobile product feel.
- **Demo:** Modern IA, booking form, services from public services page, insurance pills from public list, Drs Jennifer & Robert Idziorek (Jennifer bio from public page; Robert named only as publicly listed).
- **Location:** Includes public move notice to 12001 Pacific Avenue (Centennial Building) and current public contact details.
- **Note:** Untouched in Stadium rebuild (2026-09-16).

## Shared product rules (all three)
- Footer exactly: `Preview by Narrows Digital — not affiliated with the practice.`
- No outreach, no spend, no PHI storage, no HIPAA claims, no pricing tables.
