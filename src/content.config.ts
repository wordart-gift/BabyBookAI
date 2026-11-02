import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * The blog: one Markdown file per post, src/content/blog/<lang>/<slug>.md. A
 * post is written for its own market around its own keyword, so posts are not
 * translations of each other and have no shape in common with the copy files.
 *
 * In the body, `[text](page:firstYear)` links to a page in the post's language
 * and {price} and {size} work as in the copy files (resolvePostHtml, src/lib/blog.ts).
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      /** The full <title>: [searched keyword] + [what is different] + brand. */
      title: z.string(),
      /** The H1. */
      headline: z.string(),
      /** Short name for the breadcrumb. */
      crumb: z.string(),
      description: z.string(),
      /** The first paragraph, set larger. */
      lead: z.string(),
      /** The one keyword this post owns: no other post may take it (src/lib/blog.ts). */
      keyword: z.string(),
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
      /** Beside the post on the blog's index. */
      cover: image(),
      coverAlt: z.string(),
      faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    }),
});

export const collections = { blog };
