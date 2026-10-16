// Usage: node scripts/screenshots.mjs <outDir> [--all]
// Serves the repo locally and saves desktop (1280) + phone (390) full-page screenshots.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
import { chromium } from 'playwright';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.resolve(process.argv[2] || 'screenshots'); const all = process.argv.includes('--all');
const types = { '.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.json':'application/json' };
const srv = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
  const f = path.join(root, p); if (!f.startsWith(root) || !fs.existsSync(f)) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(r); });
await new Promise(ok => srv.listen(0, ok)); const base = `http://127.0.0.1:${srv.address().port}`;
const demos = fs.readdirSync(root).filter(d => fs.existsSync(path.join(root, d, 'practice.json')) || (fs.existsSync(path.join(root, d, 'index.html')) && !['p','shared','scripts','node_modules'].includes(d) && fs.statSync(path.join(root,d)).isDirectory()));
const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
fs.mkdirSync(out, { recursive: true });
for (const [label, vp] of [['desktop', { width: 1280, height: 800 }], ['phone', { width: 390, height: 844 }]]) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, reducedMotion: 'reduce' }); const page = await ctx.newPage();
  for (const d of demos) for (const f of (all ? fs.readdirSync(path.join(root, d)).filter(x => x.endsWith('.html')) : ['index.html'])) {
    await page.goto(`${base}/${d}/${f}`, { waitUntil: 'networkidle' }).catch(() => {});
    await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}' });
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(out, `${d}__${f.replace('.html','')}__${label}.png`), fullPage: true });
  }
  await ctx.close();
}
await browser.close(); srv.close(); console.log(`saved to ${out}`);
