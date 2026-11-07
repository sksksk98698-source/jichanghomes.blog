import fs from 'fs';
import path from 'path';

const dirs = ['src/pages/free', 'src/pages/tools', 'src/pages/faq', 'src/pages/runaway'];

dirs.forEach(dir => {
  const file = path.join(process.cwd(), dir, '[slug].astro');
  let content = fs.readFileSync(file, 'utf8');

  // Check imports
  if (!content.includes('slugifyTag')) {
    content = content.replace(
      "import { CATEGORIES } from '../../lib/topics';",
      "import { CATEGORIES } from '../../lib/topics';\nimport { slugifyTag } from '../../lib/tags';"
    );
  }
  // Replace tag href
  content = content.replaceAll(
    'href={`/tags/${tag}/`}',
    'href={`/tags/${slugifyTag(tag)}/`}'
  );
  fs.writeFileSync(file, content, 'utf8');
  console.log('Processed: ' + file);
});
