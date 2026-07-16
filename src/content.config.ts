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

// Inner Schemas for localization
const cvContentSchema = z.object({
  name: z.string(),
  location: z.string(),
  email: z.string(),
  summary: z.string(),
  education: z.array(
    z.object({
      degree: z.string(),
      institution: z.string(),
      period: z.string(),
      details: z.string().optional(),
    })
  ),
  experience: z.array(
    z.object({
      company: z.string(),
      role: z.string(),
      period: z.string(),
      bullets: z.array(z.string()),
    })
  ),
  awards: z.array(
    z.object({
      title: z.string(),
      period: z.string(),
      description: z.string(),
    })
  ),
  certifications: z.array(
    z.object({
      title: z.string(),
      institution: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
    })
  ),
  volunteer: z.array(
    z.object({
      role: z.string(),
      period: z.string(),
      description: z.string(),
    })
  ),
  skills: z.array(
    z.object({
      category: z.string(),
      items: z.array(z.string()),
    })
  ),
  languages: z.array(
    z.object({
      name: z.string(),
      level: z.string(),
    })
  ),
});

const homeContentSchema = z.object({
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
});

const sidebarContentSchema = z.object({
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
});

const projectsContentSchema = z.object({
  projects: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      url: z.string().url(),
      techStack: z.array(z.string()),
      year: z.number(),
      caseSlug: z.string().optional(),
    })
  ),
});

const papersContentSchema = z.object({
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
});

const contactContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  email: z.string(),
  github: z.string(),
  linkedin: z.string(),
  discord: z.string(),
  location: z.string(),
});

const info = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/info" }),
  schema: z.union([
    // CV Schema
    z.object({
      schemaType: z.literal('cv'),
      ptbr: cvContentSchema,
      eng: cvContentSchema,
    }),
    // Home Schema
    z.object({
      schemaType: z.literal('home'),
      ptbr: homeContentSchema,
      eng: homeContentSchema,
    }),
    // Sidebar Schema
    z.object({
      schemaType: z.literal('sidebar'),
      ptbr: sidebarContentSchema,
      eng: sidebarContentSchema,
    }),
    // Projects Schema
    z.object({
      schemaType: z.literal('projects'),
      ptbr: projectsContentSchema,
      eng: projectsContentSchema,
    }),
    // Papers Schema
    z.object({
      schemaType: z.literal('papers'),
      ptbr: papersContentSchema,
      eng: papersContentSchema,
    }),
    // Contact Schema
    z.object({
      schemaType: z.literal('contact'),
      ptbr: contactContentSchema,
      eng: contactContentSchema,
    }),
  ]),
});

export const collections = { cases, info };

