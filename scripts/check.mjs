// Pre-publish checks for every demo with a practice.json. Exit 1 on any failure.
//   node scripts/check.mjs            static checks + browser checks (mobile menu)
//   node scripts/check.mjs --static   static checks only (no browser)
import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const fails = [], warns = []; const fail = (d, m) => fails.push(`${d}: ${m}`);
// Text a browser would show: drop tags, collapse whitespace (handles headings split across <span>s / lines).
const text = h => h.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const PLACEHOLDER = /lorem ipsum|hello world|\bTODO\b|\bTBD\b|\bFIXME\b|example\.com|\(555\)|555-01\d\d|\{\{|\}\}/i;
const demos = fs.readdirSync(root).filter(d => fs.existsSync(path.join(root, d, 'practice.json')));
for (const d of demos) {
  const p = JSON.parse(fs.readFileSync(path.join(root, d, 'practice.json'), 'utf8'));
  if (!p.name || !p.heroName || !p.phones?.length) { fail(d, 'practice.json needs name, heroName, phones'); continue; }
  if (!p.name.toLowerCase().includes(p.heroName.toLowerCase())) fail(d, `heroName "${p.heroName}" is not part of name "${p.name}"`);
  for (const page of fs.readdirSync(path.join(root, d)).filter(f => f.endsWith('.html'))) {
    const at = `${d}/${page}`; const s = fs.readFileSync(path.join(root, d, page), 'utf8');
    if (!p.pages[page]) fail(at, 'page missing from practice.json "pages"');
    if (!/<meta[^>]+name="viewport"[^>]+width=device-width/i.test(s)) fail(at, 'missing viewport meta tag');
    const tels = [...s.matchAll(/href="tel:([^"]+)"/g)].map(m => m[1]);
    if (!tels.length) fail(at, 'no tel: link');
    for (const t of tels) if (!p.phones.includes(t)) fail(at, `tel:${t} is not in practice.json phones`);
    const title = text((s.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
    if (!title.includes(p.name)) fail(at, `<title> "${title}" lacks "${p.name}"`);
    const body = text(s.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, ''));
    const ph = body.match(PLACEHOLDER); if (ph) fail(at, `placeholder text "${ph[0]}"`);
    if (page === 'index.html') {
      const h1 = text((s.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '');
      if (h1.toLowerCase() !== p.heroName.toLowerCase()) fail(at, `hero h1 is "${h1}", must be the practice name "${p.heroName}"`);
    }
  }
  // Hero standard: desktop 16:9 >= 1920px wide, phone 4:5 >= 1080px wide (see docs/hero-standard.md)
  const h = p.hero || {};
  for (const [k, ratio, minW] of [['desktop', 16 / 9, 1920], ['mobile', 4 / 5, 1080]]) {
    if (!h[k]) { (h.legacy ? warns : fails).push(`${d}: hero.${k} image not set${h.legacy ? ' (legacy, allowed)' : ''}`); continue; }
    const f = path.join(root, d, h[k]); if (!fs.existsSync(f)) { fail(d, `hero.${k} ${h[k]} not found`); continue; }
    const dim = imgSize(f); if (!dim) continue;
    const ok = Math.abs(dim.w / dim.h - ratio) < 0.02 && dim.w >= minW;
    if (!ok) (h.legacy ? warns : fails).push(`${d}: hero.${k} is ${dim.w}x${dim.h}, standard is ${k === 'desktop' ? '16:9' : '4:5'} >= ${minW}w${h.legacy ? ' (legacy, allowed)' : ''}`);
  }
}
function imgSize(f) { const b = fs.readFileSync(f);
  if (b[0] === 0x89) return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  if (b[0] === 0xff) { let i = 2; while (i < b.length) { const m = b[i + 1], len = b.readUInt16BE(i + 2);
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) }; i += 2 + len; } }
  return null; }
if (!process.argv.includes('--static')) await browserChecks();
async function browserChecks() {
  const { chromium } = await import('playwright'); const http = await import('node:http');
  const srv = http.createServer((q, r) => { let u = decodeURIComponent(q.url.split('?')[0]); if (u.endsWith('/')) u += 'index.html';
    const f = path.join(root, u); if (!f.startsWith(root) || !fs.existsSync(f)) { r.writeHead(404); return r.end(); }
    r.writeHead(200, { 'content-type': { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript' }[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); });
  await new Promise(ok => srv.listen(0, ok));
  const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  for (const d of demos) {
    await page.goto(`http://127.0.0.1:${srv.address().port}/${d}/index.html`, { waitUntil: 'load' });
    const btn = page.locator('[data-nav-toggle]').first();
    if (!(await btn.count()) || !(await btn.isVisible())) { fail(d, 'mobile menu button not visible at 390px'); continue; }
    await btn.click(); await page.waitForTimeout(400);
    const open = await btn.getAttribute('aria-expanded');
    const links = await page.locator(`#${await btn.getAttribute('aria-controls')} a`).evaluateAll(as => as.filter(a => { const r = a.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.top < innerHeight; }).length);
    if (open !== 'true' || links < 2) fail(d, `mobile menu did not open (aria-expanded=${open}, visible links=${links})`);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    if (overflow > 1) fail(d, `page is ${overflow}px wider than a 390px phone (sideways scroll)`);
  }
  await browser.close(); srv.close();
}
warns.forEach(w => console.log('WARN ' + w)); fails.forEach(f => console.log('FAIL ' + f));
console.log(`${demos.length} demos checked: ${fails.length} failure(s), ${warns.length} warning(s)`);
process.exit(fails.length ? 1 : 0);
