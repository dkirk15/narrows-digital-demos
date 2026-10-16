// Build step: stamps practice.json into every page and cache-busts local CSS/JS.
//   node scripts/build.mjs          rewrite files in place
//   node scripts/build.mjs --check  exit 1 if any file is out of date (used in CI)
// practice.json is the ONE place a practice's name, phone and page titles live.
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const check = process.argv.includes('--check'); let stale = [];
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const hash = f => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex').slice(0, 8);
export const demos = () => fs.readdirSync(root).filter(d => fs.existsSync(path.join(root, d, 'practice.json')));
for (const d of demos()) {
  const p = JSON.parse(fs.readFileSync(path.join(root, d, 'practice.json'), 'utf8'));
  for (const [page, tpl] of Object.entries(p.pages)) {
    const file = path.join(root, d, page); let s = fs.readFileSync(file, 'utf8'); const before = s;
    // 1. <title> comes from practice.json
    s = s.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(tpl.replaceAll('{name}', p.name))}</title>`);
    // 2. plain-text elements marked data-practice-name get the hero name
    s = s.replace(/(<(\w+)[^>]*\bdata-practice-name\b[^>]*>)([^<]*)(<\/\2>)/g, (m, open, tag, txt, close) => open + esc(p.heroName) + close);
    // 3. cache-bust: ?v= on local css/js becomes a content hash, so a changed file always reloads
    s = s.replace(/(href|src)="([^":?#]+\.(?:css|js))(?:\?v=[^"]*)?"/g, (m, attr, ref) => {
      const f = path.resolve(path.dirname(file), ref); return fs.existsSync(f) ? `${attr}="${ref}?v=${hash(f)}"` : m; });
    if (s !== before) { stale.push(`${d}/${page}`); if (!check) fs.writeFileSync(file, s); }
  }
}
if (check && stale.length) { console.error('Out of date, run `node scripts/build.mjs`:\n  ' + stale.join('\n  ')); process.exit(1); }
console.log(check ? 'build: up to date' : `build: updated ${stale.length} page(s)`);
