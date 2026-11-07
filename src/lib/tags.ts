import type { CollectionEntry } from 'astro:content';

export const skills = [
  'Astro', 'TypeScript', 'JavaScript', 'Node.js',
  'React', 'Vue', 'HTML', 'CSS',
  'Python', 'Go', 'Rust', 'Linux',
  'Docker', 'Kubernetes', 'CI/CD', 'Git',
  'PostgreSQL', 'Redis', 'REST APIs', 'Cloud Native',
  '性能优化', '系统架构', '前端工程化', '全栈开发',
];

// URL slug for a tag. Letters and digits in any script are kept (lowercased),
// every other run of characters collapses to a hyphen: "GitHub Actions" ->
// "github-actions", "C++" -> "c", "中文标签" -> "中文标签".
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

export interface TagInfo {
  slug: string;
  name: string;
  count: number;
}

export function getAllTags(posts: CollectionEntry<'blog'>[]): TagInfo[] {
  const bySlug = new Map<string, TagInfo>();

  for (const skill of skills) {
    const slug = slugifyTag(skill);
    if (slug) bySlug.set(slug, { slug, name: skill, count: 0 });
  }

  for (const post of posts) {
    if (post.data.draft) continue;
    const seen = new Set<string>();
    for (const tag of post.data.tags) {
      const slug = slugifyTag(tag);
      if (!slug || seen.has(slug)) continue;
      seen.add(slug);
      const existing = bySlug.get(slug);
      if (existing) existing.count += 1;
      else bySlug.set(slug, { slug, name: tag, count: 1 });
    }
  }

  return [...bySlug.values()].sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN'));
}
