# Personal_Hub Codebase Summary

## Overview

Personal_Hub is a Nuxt 4 (Vue 3 + TypeScript) application that serves as a **personal hub / landing site** for Woody (Chun-Wei Hsu). It centralizes links to multiple sub‑projects (tech blog, TutorAI, physics simulations, etc.) and hosts a bilingual CV.

The stack is:
- **Nuxt 4** with app directory structure
- **@nuxt/ui** as the main UI component library
- **@nuxt/image** for image handling
- **@nuxtjs/i18n** for internationalization
- **Tailwind CSS v4** for utility styling
- TypeScript + ESLint for type safety and linting

The site is fully localized in **English (`en`) and Traditional Chinese (`zhTW`)**, with routing configured to use prefixed locales (except for the default).

---

## Project Structure

- `app/`
  - `app.vue`: Root component; wraps the app with `<UApp>` and `<NuxtLayout>`.
  - `layouts/default.vue`: Primary layout with header, navigation, language switcher, dark/light theme toggle, and footer.
  - `pages/`
    - `index.vue`: Home page; uses `AppHero` in a container with basic SEO meta via `useHead`.
    - `projects/index.vue`: Projects listing page, shows `ProjectShowcase` and sets SEO meta via `useSeoMeta`.
    - `cv.vue`: CV / resume page built with `@nuxt/ui` components, uses i18n text for content.
  - `components/`
    - `AppHero.vue`: Hero section on the home page; includes avatar, intro text, social links, and quick project links.
    - `AppFooter.vue`: Global footer (not inspected in detail, but used by layout).
    - `ProjectShowcase.vue`: Grid of project cards linking out to various sub‑sites, populated from the `useProjects` composable.
  - `composables/useProjects.ts`: Central definition of project metadata (slug, title, description, URL, icon), fully i18n‑driven.
  - `assets/css/main.css`: Global styling hooks (Tailwind and any custom CSS).

- `i18n/locales/`
  - `en.json`: English copy for hero, navigation, project descriptions, footer, and CV (experience, education, projects, domains, languages).
  - `zhTW.json`: Traditional Chinese copy mirroring `en.json` with localized descriptions.

- Config / tooling
  - `nuxt.config.ts`: Nuxt configuration
    - Enables `@nuxt/eslint`, `@nuxt/ui`, `@nuxt/image`, `@nuxtjs/i18n`.
    - Sets `compatibilityDate` and `devtools`.
    - Configures i18n:
      - `defaultLocale: 'en'`
      - `strategy: 'prefix_except_default'`
      - `locales`: `en` and `zhTW` mapped to JSON files in `locales/`.
      - Browser language detection via cookie `i18n_redirected`.
    - Registers global CSS: `~/assets/css/main.css`.
  - `package.json`: defines scripts (`dev`, `build`, `generate`, `preview`) and dependencies.
  - `tsconfig.json`: TypeScript configuration (not deeply inspected here).
  - `eslint.config.mjs`: ESLint configuration using `@nuxt/eslint`.

- Supporting / extra
  - `public/`: `favicon.ico`, `robots.txt` for static assets and SEO.
  - `.shared/ui-ux-pro-max/*`: A collection of Python scripts and CSV data related to UI/UX design systems, guidelines, and prompts. These appear to be **supporting design tooling**, not directly imported into the Nuxt app at runtime.
  - `data-scientist.pdf`: Likely a CV or portfolio document used as reference content, not wired into the UI.

---

## Key Features and Flows

### 1. Layout and Navigation

- The `default.vue` layout defines a **sticky header** with:
  - Avatar and site title ("Personal Hub") that link to the localized home route (`localePath('/')`).
  - Navigation menu (`UNavigationMenu`) with items:
    - Home
    - Projects
    - CV
    (Labels are pulled from i18n via `$t('nav.*')`, and routes are built with `localePath`).
  - Language switcher using `UDropdownMenu` and `useSwitchLocalePath` to switch between `en` and `zhTW`.
  - Theme toggle button using `useColorMode` to switch between dark and light mode.
- `AppFooter` is rendered at the bottom of every page.

### 2. Home Page

- `AppHero` uses:
  - Avatar image from GitHub.
  - Headline text and description from i18n (`hero.greeting`, `hero.role`, `hero.description`).
  - Social buttons linking to GitHub, LinkedIn, and YouTube.
  - A project quick‑links section on the right (or below on small devices) with buttons that scroll to specific project cards on the `/projects` page, using anchor IDs of the form `#project-{slug}`.

### 3. Projects Page

- `projects/index.vue`:
  - Renders a title and description using i18n (`nav.projects`, `hero.description`).
  - Includes `<ProjectShowcase>` to display the project grid.

- `ProjectShowcase.vue`:
  - Imports `projects` from `useProjects()`.
  - For each project, renders a clickable `UCard` inside a `NuxtLink` that opens the project `url` in a new tab.
  - Each card shows:
    - Icon (from the `icon` field, mapped to a Heroicons or related icon set).
    - Title and description from i18n (`showcase.*`).
    - A subtle hover animation and a gradient underline.

### 4. Projects Data (`useProjects.ts`)

- Central source of truth for all showcased projects:
  - `tech-blog`: Tech blog site
  - `tutor-ai`: TutorAI learning platform
  - `cosmology`: Academia Sinica internship demo
  - `architecture`: 3D architectural model project
  - `investment`: Investment notes
  - `physim-hub`: PhysimHub physics simulation/education platform
  - `tutoring`: Tutoring services
- Titles and descriptions are fully translated via i18n keys (e.g. `showcase.tech_blog`, `showcase.tech_blog_desc`).

### 5. CV Page (`cv.vue`)

- Uses `@nuxt/ui` components (`UAvatar`, `UBadge`, `UButton`, `UTimeline`, `UCard`, `UIcon`) to build a structured, responsive CV page.
- All textual content (job titles, descriptions, education, domains, language descriptions) is sourced from i18n (`cv.*`).
- Experience and education are represented as **computed arrays** and displayed with `UTimeline`, with descriptions stored as arrays in the locale files (rendered as bullet lists).
- Skills are currently defined as static TypeScript data (not i18n‑driven) in `skillGroups` and `domainKnowledge` is i18n‑driven.
- Featured projects section links out to key sites (PhysimHub, tech blog, Tutor AI) with short summaries.
- `useSeoMeta` sets the CV page title and description based on localized strings.

---

## Internationalization (i18n)

- Implemented via `@nuxtjs/i18n` with JSON locale files.
- Browser language detection is enabled with cookie persistence.
- Routes follow `prefix_except_default` strategy:
  - English pages: `/`, `/projects`, `/cv`
  - Traditional Chinese pages: `/zhTW`, `/zhTW/projects`, `/zhTW/cv`
- Components use:
  - `useI18n` for `t`, `tm`, and `rt` (plain text, multi‑line, and rich text utilities).
  - `useLocalePath` to generate localized route links.
  - `useSwitchLocalePath` for language switching links.

---

## Design / UI Tooling (.shared/ui-ux-pro-max)

- `.shared/ui-ux-pro-max/scripts/*.py` and `.shared/ui-ux-pro-max/data/*.csv` look like an external **UI/UX helper toolkit**.
  - Likely used offline or as a separate process to generate design tokens, prompts, or guidelines.
  - Not currently imported or executed by the Nuxt app at runtime (no references found in the main app files).

---

## Current State and Possible Next Steps

From the codebase, the site is already:
- Structurally complete with home, projects, and CV pages.
- Fully bilingual (English + Traditional Chinese) on key sections.
- Integrated with external project sites via consistent cards and links.
- Theming (dark/light) and basic SEO meta are in place.

Potential areas to extend or refine (if desired):
- Add more structured metadata (Open Graph, Twitter cards) for each page.
- Centralize certain repeated links (GitHub, LinkedIn, main site URL) into a config/composable.
- Expand i18n coverage to any remaining hard‑coded text in components.
- Wire `data-scientist.pdf` into the CV page (e.g., "Download PDF" button).
- If the `.shared/ui-ux-pro-max` toolkit is meant to be used in‑app, add clear integration points or documentation.
