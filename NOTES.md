# NOTES — what changed vs old

## Stadium Dental Health
- **Mobile center (2026-09-17):** Full-bleed centered hero crop on small screens (no cream right gutter from aspect-ratio shrink). Desktop unchanged.
- **Mobile stack (2026-09-17):** Illustrated hero on small screens is art full-width first, then cream copy block below (no text overlay on the map). Desktop cream plate overlay unchanged.
- **Hero contrast fix (2026-09-16):** Cream/paper type plate behind `.place-hero__content` on illustrated; overlay none; desktop object-position 62% center. Keeps v4 map art + ink type.
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

## Simpson & Coyner Family Dentistry (2026-09-19 PT)
- **Old:** Squarespace at rcoynerdds.com — call-only booking (“Call For an Appointment”), no bookable form; SMS privacy walls on contact; About page URL 404.
- **Demo:** Practice-unique `harbor.css` + `harbor.js` — **not** shared/shared.css twin, **not** Stadium brick/navy twin.
- **Type:** Literata (display) + Outfit (UI) — harbor-calm serif/sans; distinct from Stadium Barlow Condensed + Source Sans 3 and from Fraunces/DM Sans shared template.
- **Color:** Deep harbor teal/ink, seafoam, soft fog gray, warm sand paper; copper accent sparingly. Not Stadium brick/navy; not Parkland medical blue.
- **Hero:** Split layout — solid type plate with place kicker (“Gig Harbor · Pioneer Way”) + soft CSS watercolor/fog harbor band. Mobile stacks art then copy (AA contrast). No photo-overlay cream plate twin; no “Narrows Digital preview” hero eyebrow.
- **Brand:** Circular “S&C” monogram + “Simpson & Coyner” wordmark — not gradient initial square.
- **Home silhouette:** Harbor split hero → deep promise band → service chips → public review quote → hours + OSM map → CTA band.
- **Doctors:** Richard Coyner, DDS & Hunter Simpson, DDS named from public site; no invented bios (About 404 noted honestly).
- **Services:** Public list only — exams/cleanings, sealants, periodontal, fillings, same-day crowns, partials/dentures, implants, cosmetic (veneers/whitening), night/sport guards, emergency; tech notes (digital radiography, intraoral cameras, soft tissue laser, CAD-CAM).
- **Contact:** Address, phone, fax, public hours (Mon–Wed 8–5, Thu 7–3, Fri–Sun closed), Visa/MC/Amex; client-side form (name, phone, email, preferred time, message); no SMS marketing privacy walls; no pricing/discount lines.
- **Kept:** Exact footer; no PHI backend; no HIPAA claims; no outreach; not on their domain.

## Shared product rules (all demos)
- Footer exactly: `Preview by Narrows Digital — not affiliated with the practice.`
- No outreach, no spend, no PHI storage, no HIPAA claims, no pricing tables.
