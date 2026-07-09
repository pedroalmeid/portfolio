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
      bio: z.string(),
      contactBtnText: z.string(),
      cvBtnText: z.string(),
      highlights: z.array(
        z.object({
          type: z.enum(['project', 'paper']),
          id: z.string()
        })
      ),
      aboutTitle: z.string(),
      aboutText: z.string(),
    }),
    // Sidebar Schema
    z.object({
      schemaType: z.literal('sidebar'),
      name: z.string(),
      subtitle: z.string(),
      status: z.string(),
      avatarUrl: z.string(),
      socials: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
          icon: z.string()
        })
      ),
      copyright: z.string()
    }),
    // Projects Schema
    z.object({
      schemaType: z.literal('projects'),
      projects: z.array(
        z.object({
          id: z.string().optional(),
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
          id: z.string().optional(),
          title: z.string(),
          authors: z.array(z.string()),
          journal: z.string(),
          year: z.number(),
          link: z.string().url().optional(),
          badge: z.string().optional(),
          badgeType: z.enum(['blue', 'gray', 'amber']).optional(),
        })
      ),
    }),
    // Contact Schema
    z.object({
      schemaType: z.literal('contact'),
      title: z.string(),
      description: z.string(),
      email: z.string(),
      github: z.string(),
      linkedin: z.string(),
      discord: z.string(),
      location: z.string(),
    }),
  ]),
});

export const collections = { cases, info };
