import fs from 'fs';
import path from 'path';

function walk(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(walk(full));
    } else if (file.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = walk('dist');
console.log('Total HTML files in dist:', htmlFiles.length);

let canonicalIssues = 0;
let missingCanonical = 0;
let nonHttpsOrDomain = 0;
let externalAffLinks = [];
let externalAffWithoutNofollow = [];
let totalExtLinks = 0;
let brokenInternalLinks = [];
let sampleCanonicals = [];
let thinPages = [];
let schemaStats = { valid: 0, missing: 0, errors: [] };
let titleDupes = new Map();
let descDupes = new Map();

const existingRoutes = new Set(
  htmlFiles.map(f => {
    let r = f.replace(/^dist/, '').replace(/\\/g, '/');
    if (r.endsWith('/index.html')) r = r.slice(0, -10) || '/';
    return r;
  })
);

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let route = file.replace(/^dist/, '').replace(/\\/g, '/');
  if (route.endsWith('/index.html')) route = route.slice(0, -10) || '/';

  // Title & Desc
  const titleM = content.match(/<title>(.*?)<\/title>/);
  const title = titleM ? titleM[1] : '';
  if (title) {
    if (!titleDupes.has(title)) titleDupes.set(title, []);
    titleDupes.get(title).push(route);
  }

  const descM = content.match(/<meta name="description" content="(.*?)"/);
  const desc = descM ? descM[1] : '';
  if (desc) {
    if (!descDupes.has(desc)) descDupes.set(desc, []);
    descDupes.get(desc).push(route);
  }

  // 1. Canonical check
  const m = content.match(/<link rel="canonical" href="(.*?)"/);
  if (!m) {
    missingCanonical++;
  } else {
    const href = m[1];
    if (sampleCanonicals.length < 5) sampleCanonicals.push({ route, canonical: href });
    if (!href.startsWith('https://jichanghomes.blog')) {
      nonHttpsOrDomain++;
    }
  }

  // Word count (Chinese characters + English words)
  const plainText = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ');
  const hanChars = (plainText.match(/[\u4e00-\u9fa5]/g) || []).length;
  if (hanChars < 800 && !route.startsWith('/tags/')) {
    thinPages.push({ route, hanChars });
  }

  // Schema check
  const schemas = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  if (schemas) {
    for (const s of schemas) {
      const jsonStr = s.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '');
      try {
        JSON.parse(jsonStr);
        schemaStats.valid++;
      } catch (e) {
        schemaStats.errors.push({ route, err: e.message });
      }
    }
  } else {
    schemaStats.missing++;
  }

  // 2. Outgoing commercial / affiliate links check
  const aRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = aRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const href = match[1];

    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (!href.startsWith('https://jichanghomes.blog')) {
        totalExtLinks++;
        // Check if commercial/affiliate link
        const isCommercial = href.includes('gscloud.site') || href.includes('register') || href.includes('aff') || href.includes('code=');
        if (isCommercial) {
          externalAffLinks.push({ page: route, href, fullTag });
          if (!fullTag.includes('nofollow') || !fullTag.includes('sponsored')) {
            externalAffWithoutNofollow.push({ page: route, href, fullTag });
          }
        }
      }
    } else if (href.startsWith('/')) {
      // Internal link check
      let target = href.split('#')[0].split('?')[0];
      if (target.length > 1 && target.endsWith('/')) target = target.slice(0, -1);
      // check if exists
      const targetVariants = [target, target + '/', target + '/index.html'];
      const found = targetVariants.some(v => existingRoutes.has(v) || fs.existsSync(path.join('dist', v)));
      if (!found && target !== '' && !target.startsWith('/assets/')) {
        brokenInternalLinks.push({ page: route, target });
      }
    }
  }
}

console.log('--- AUDIT RESULTS ---');
console.log('Sample Canonicals:', sampleCanonicals);
console.log('Missing Canonical count:', missingCanonical);
console.log('Non-HTTPS or Wrong Domain Canonical:', nonHttpsOrDomain);
console.log('Total external links:', totalExtLinks);
console.log('Commercial / Affiliate external links identified:', externalAffLinks.length);
console.log('Commercial links WITHOUT nofollow/sponsored:', externalAffWithoutNofollow.length);
if (externalAffWithoutNofollow.length > 0) {
  console.log('Examples of missing nofollow:', externalAffWithoutNofollow.slice(0, 3));
}
console.log('Broken internal links count:', brokenInternalLinks.length);
if (brokenInternalLinks.length > 0) {
  console.log('Examples of broken internal links:', brokenInternalLinks.slice(0, 5));
}
console.log('Thin pages (< 800 Han chars non-tags):', thinPages.length);
if (thinPages.length > 0) {
  console.log('Thin pages sample:', thinPages.slice(0, 5));
}
console.log('Schema valid:', schemaStats.valid, 'Schema missing:', schemaStats.missing, 'Schema JSON parse errors:', schemaStats.errors.length);
if (schemaStats.errors.length > 0) {
  console.log('Schema errors:', schemaStats.errors);
}

// Check title dupes
let titleDupeCount = 0;
for (const [t, routes] of titleDupes.entries()) {
  if (routes.length > 1) {
    titleDupeCount++;
    if (titleDupeCount <= 3) console.log('Duplicate title:', t, routes);
  }
}
console.log('Duplicate titles count:', titleDupeCount);
