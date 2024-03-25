import { defineCollection, z } from "astro:content";

const project = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    role: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    website: z.string(),
    githubLink: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { project: project };
