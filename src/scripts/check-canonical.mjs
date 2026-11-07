import fs from 'fs';

const pages = [
  'dist/index.html',
  'dist/about/index.html',
  'dist/airports/index.html',
  'dist/free/index.html',
  'dist/tools/index.html',
  'dist/faq/index.html',
  'dist/runaway/index.html',
  'dist/clients/index.html',
  'dist/speedtest/index.html',
  'dist/airports/guangsu/index.html',
  'dist/faq/iepl-vs-iplc-difference-explained/index.html'
];

pages.forEach(p => {
  if (fs.existsSync(p)) {
    const c = fs.readFileSync(p, 'utf8');
    const m = c.match(/<link rel="canonical" href="([^"]+)"/);
    console.log(p.replace('dist/', '/'), '=> Canonical:', m ? m[1] : 'NONE');
  }
});
