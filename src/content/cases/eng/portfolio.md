---
title: This very portfolio!
description: Professional and academic portfolio, designed to be extremely static, lightweight, and fast by pre-compiling content with Astro, Tailwind CSS, and TypeScript
techStack: ["Astro", "Tailwind CSS", "TypeScript", "Zod"]
date: 2026-07-12
repository: https://github.com/pedroalmeid/portfolio
---

# This very portfolio!

This project is my professional and academic portfolio repository. It serves as a central hub to present my CV, projects, scientific publications, and contact information in a clear, elegant, and performance-oriented manner.

The architecture was designed to be modern, focused on performance and ease of maintenance, adopting a strict semantic separation where dynamic content and data are fully controlled by JSON and Markdown files, while the layout and presentation logic are structured in Astro.

---

## 📌 Table of Contents

- [⚡ Main Features](#-main-features)
- [🏗️ Architecture and Content Structure](#️-architecture-and-content-structure)
- [🛠️ Technologies Used](#-technologies-used)
- [🚀 Local Development](#-local-development)
- [🤖 AI-Assisted Development](#-ai-assisted-development)

---

## ⚡ Main Features

- **Typed Data Loading:** All local data (CV, projects, publications, contact information, and sidebar) are rigidly validated at compile time by Zod schemas, ensuring that data changes do not break the interface.
- **Static Site Generation (SSG):** Complete static rendering with zero JavaScript hydration by default, resulting in maximum performance and instant load times.
- **Responsive and Modern Design:** Minimalist, elegant, and responsive interface with Tailwind CSS, adapting perfectly to mobile and desktop devices.
- **Rich Case Studies:** Native Markdown support for project detailing, allowing the inclusion of advanced formatting, lists, and diagrams (such as Mermaid.js).

---

## 🏗️ Architecture and Content Structure

The portfolio adopts a modular structure where content is separated from the layout:

```text
/src/
├── content/
│   ├── config.ts       # Zod validation schemas for cases and info
│   ├── cases/          # Case studies in Markdown sorted by language
│   │   ├── ptbr/       # Portuguese versions (BR)
│   │   └── eng/        # English versions (US)
│   └── info/           # Page data structured in JSON (with ptbr and eng keys)
├── components/
│   └── astro/          # Layout components (BaseLayout with language switcher)
└── pages/              # Dynamic pages and routes of the portfolio
    ├── index.astro     # First-access language auto-redirection script
    └── [lang]/         # Parameterized routes (e.g. /ptbr/projects, /eng/projects)
```

This separation ensures that to add a new project, update the CV, or change a contact, you only need to modify a corresponding JSON or Markdown file in the `src/content/` folder.

---

## 🌐 Internationalization (i18n)

The website features full and consistent support in two languages: **Portuguese (BR)** and **English (US)**. The website language is auto-detected on the first load based on the visitor's browser language, and can be manually switched at any time using the selector located in the portfolio sidebar. The user's selection is stored in `localStorage` for persistence.

---

## 🛠️ Technologies Used

- **Astro:** Modern SSG framework focused on content and performance.
- **Tailwind CSS:** For responsive and agile styling.
- **TypeScript & Zod:** For static typing and strict validation of structured data.

---

## 🚀 Local Development

If you want to clone or run this project locally, follow the steps below:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run local server:**
   ```bash
   npm run dev
   ```
3. **Generate static build:**
   ```bash
   npm run build
   ```

---

## 🤖 AI-Assisted Development

This portfolio was supported by artificial intelligence (Antigravity IDE) in its development and maintenance cycle (acting in pair programming), ensuring agility alongside high quality of the code and the previously designed architecture.
