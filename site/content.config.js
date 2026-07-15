import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const post = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./site/content/post" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    read: z.number().optional(),
    tags: z.array(z.string()).default([]),
    kind: z.enum(["项目记录", "技术笔记", "学习思考", "随笔"]).default("技术笔记"),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { post };
