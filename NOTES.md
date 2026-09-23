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

## Puyallup Family Dentistry
- **Hero v2 (2026-09-19):** Lens fairgrounds `hero-puyallup-16x9-v2` in `.valley-hero__art` (cover; desktop 58% center; mobile 50% center, ≥240px). CSS valley layers removed. Cream plate `#FAF6EE`. No on-image disclaimer; footer asset note only.
 (2026-09-19 PT)
- **Old:** Public site at puyallupfamilydentist.com (Wix-style) — call/visit oriented; no productized online booking form; paired public site puyallupfamilydental.com shares the same South Hill roster and address. Scout context noted weak TLS/booking productization on related Puyallup listings historically; this demo targets the live 5620 practice.
- **Demo:** Practice-unique `meridian.css` + `meridian.js` — **not** shared/shared.css twin, **not** Stadium brick/navy twin, **not** Simpson harbor teal twin.
- **Type:** Cormorant Garamond (display) + Karla (UI) — distinct from Stadium Barlow Condensed + Source Sans 3, Simpson Literata + Outfit, and Fraunces/DM Sans shared template.
- **Color:** Deep evergreen (#1a3a2f), warm wheat paper (#f4ead8), fair amber accent (#c4832a), soft valley sky (#dce8ef), near-black ink (#1c1917). Primary CTAs evergreen or amber.
- **Hero:** Split layout — solid wheat type plate + CSS valley/foothills place art (South Hill cue). Mobile: art first, then copy stack (AA contrast; no text on art).
- **Brand:** Geometric “PF” monogram + wordmark **Puyallup Family Dentistry** — not a dentist’s personal name as site brand; not gradient initial square.
- **Home silhouette:** Place hero → promise band → service chips → hours + OSM map → CTA band.
- **Location:** 5620 112th St E, Ste 250, Puyallup, WA 98373 · (253) 770-0529 · puyallupfamilydental@live.com.
- **Hours (public):** Mon 8am–6pm; Tue–Thu 8am–5pm; Fri 7am–2pm; Sat–Sun closed.
- **Doctors (public Meet Our Dentists summaries only):** Christopher Carlson, D.D.S.; Jonathan Walker, D.M.D.; Nicole Ters, D.D.S. — no invented bios.
- **Services (public only):** Children/teens/adults; Invisalign; preferred provider for most insurance (no invented plan list); same-day emergencies; high-quality affordable dentistry; financial arrangements (no dollar amounts); since 2011; accepting new patients.
- **Contact:** Client-side form (name, phone, email, preferred time, message); success local only; no PHI backend.
- **Kept:** Exact footer banner; no pricing tables; no HIPAA claims; no outreach; not on their domain.
- **Not used:** Kai A. Maulding / 604 S Meridian / (253) 845-7911 — different practice listing; omitted entirely.

## Olympic Occupational Medicine (2026-09-22 PT)
- **Old:** Wix brochure at https://www.olympicoccupationalmedicine.com/ — phone/voicemail funnel; Home · About · Contact only; title/meta sell drug testing & vaccinations but those paths **404**; no employer lane. Site address **#307**; some directories say Ste 305 (noted here only — primary address stays #307).
- **Demo:** Practice-unique `olympic.css` + `olympic.js` — **not** a dental twin (no Literata / Barlow Condensed / Cormorant / Fraunces+DM Sans; no marina / fairgrounds / wheat / sand / teal / brick).
- **Type:** IBM Plex Sans (UI/body) + Source Serif 4 sparingly for H1 only.
- **Color:** Ink `#0F1720`, forest `#1B3A2F`, cool surface `#F4F6F5`, CTA amber `#D97706`, steel `#64748B`.
- **Home:** Dual-path cards (injured worker vs employer) → COHE/location proof → service chips → Spanish band (public ES copy + Jaquelyn / licensed interpreters) → hours + OSM #307 → CTA.
- **IA:** `injured-workers.html`, `personal-injury.html`, `employers.html`, `drug-testing.html`, `vaccinations.html`, `physical-exams.html`, `about.html`, `contact.html`, `es.html`.
- **Providers:** Status chip **above** name — Turnbo amber “Returning patients only”; Broussard / Coughlin / Aden-Else green “Accepting new patients.” Initials in forest circles; public bio summaries only; optional Maya Angelou quote on Aden-Else.
- **Contact:** Honest next-business-day callback; form fields name/phone/email/DOB optional/reason/new-vs-returning/callback window/message. Employer form on employers.html (company, contact, service needed — no prices).
- **Address lock:** 4411 Point Fosdick Dr **#307**, Gig Harbor, WA 98335 · Phone **253-649-0430** · Fax **253-356-5721**.
- **Kept:** Exact footer `Preview by Narrows Digital — not affiliated with the practice.`; no prices; no PHI backend; no HIPAA claims; no outreach; no invented clinicians; CSS place hero (not Lens); discreet “Hero is CSS/placeholder — not the clinic exterior.” footer note.
- **Model note:** Built on executor default (Firstmate cannot select Grok 4.7).
