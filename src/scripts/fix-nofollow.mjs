import fs from 'fs';
import path from 'path';

const dirs = ['src/content/free', 'src/content/tools', 'src/content/faq', 'src/content/runaway'];
let fixedCount = 0;

const targetMd = '[点击直达光速云官方通道，领取专属测速与优惠体验 →](https://gscloud.site/#/register?code=AMM)';
const fixedHtml = '<a href="https://gscloud.site/#/register?code=AMM" target="_blank" rel="nofollow sponsored noopener">点击直达光速云官方通道，领取专属测速与优惠体验 →</a>';

dirs.forEach(dir => {
  const fullDir = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullDir)) return;
  const files = fs.readdirSync(fullDir);
  files.forEach(file => {
    if (!file.endsWith('.md')) return;
    const fullPath = path.join(fullDir, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    if (content.includes(targetMd)) {
      content = content.replace(targetMd, fixedHtml);
      fs.writeFileSync(fullPath, content, 'utf8');
      fixedCount++;
    }
  });
});

console.log(`Successfully fixed nofollow in ${fixedCount} articles.`);
