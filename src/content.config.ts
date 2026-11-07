import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { slugifyTag } from './lib/tags';

const topicSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  tags: z.array(z.string()).default([]).transform(tags => {
    const slugs = tags.map(slugifyTag);
    return tags.filter((_, index) => slugs.indexOf(slugs[index]) === index);
  }),
  draft: z.boolean().default(false),
  author: z.string().default('机场homes实验室'),
});

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]).transform(tags => {
      const slugs = tags.map(slugifyTag);
      return tags.filter((_, index) => slugs.indexOf(slugs[index]) === index);
    }),
    draft: z.boolean().default(false),
  }),
});

const free = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/free' }),
  schema: topicSchema,
});

const tools = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/tools' }),
  schema: topicSchema,
});

const faq = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/faq' }),
  schema: topicSchema,
});

const runaway = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/runaway' }),
  schema: topicSchema,
});

export const collections = { blog, free, tools, faq, runaway };
