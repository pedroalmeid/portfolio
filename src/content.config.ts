import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const cases = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/cases" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    repository: z.string().url().optional(),
    date: z.coerce.date(),
  }),
});

const info = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/info" }),
  schema: z.union([
    // CV Schema
    z.object({
      schemaType: z.literal('cv'),
      education: z.array(
        z.object({
          institution: z.string(),
          degree: z.string(),
          period: z.string(),
        })
      ),
      experience: z.array(
        z.object({
          company: z.string(),
          role: z.string(),
          period: z.string(),
          description: z.string(),
        })
      ),
    }),
    // Home Schema
    z.object({
      schemaType: z.literal('home'),
      heroTitle: z.string(),
      heroSubtitle: z.string(),
      bio: z.string(),
    }),
    // Projects Schema
    z.object({
      schemaType: z.literal('projects'),
      projects: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          url: z.string().url().optional(),
          techStack: z.array(z.string()).optional(),
        })
      ),
    }),
    // Papers Schema
    z.object({
      schemaType: z.literal('papers'),
      papers: z.array(
        z.object({
          title: z.string(),
          authors: z.array(z.string()),
          journal: z.string(),
          year: z.number(),
          link: z.string().url().optional(),
        })
      ),
    }),
    // Contact Schema
    z.object({
      schemaType: z.literal('contact'),
      email: z.string().email(),
      github: z.string().url(),
      linkedin: z.string().url(),
    }),
  ]),
});

export const collections = { cases, info };
