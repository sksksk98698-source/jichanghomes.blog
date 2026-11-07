import type { CollectionEntry } from 'astro:content';

export const skills = [
  '光速云', 'IEPL专线', 'IPLC专线', 'BGP中转', '便宜机场',
  'VLESS', 'Shadowsocks', 'Trojan', 'Clash Verge', '小火箭',
  'v2rayN', 'OpenClash', 'ChatGPT解锁', 'Claude支持',
  'TikTok直播', 'Netflix 4K', '软路由科学上网', '全屋翻墙',
  '晚高峰测速', '抗封锁专线', '跨境电商专用', '老牌机场推荐',
];

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
