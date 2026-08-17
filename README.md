# Nguyễn An Phú Portfolio — AI Agent Implementation Plan

## 1. Project Overview

### Project Name

**Nguyễn An Phú — FullStack Developer Portfolio**

### Project Objective

Build a modern, professional, responsive personal portfolio website for **Nguyễn An Phú — FullStack Developer**.

The website must:

* Present personal information and professional profile.
* Showcase education and work experience.
* Showcase projects categorized into:

  * Website
  * Zalo Mini App
  * Mobile App
* Showcase technical skills and technologies.
* Showcase certificates.
* Provide direct contact and social links.
* Follow modern UI/UX principles.
* Be SEO-friendly.
* Be responsive across desktop, tablet, and mobile.
* Use reusable and maintainable React components.
* Render repeated content from data arrays using `.map()`.
* Make project, skill, certificate, experience and other content easy to update.
* Prioritize clean architecture, performance and future scalability.

---

# 2. Required Technology Stack

The implementation MUST use the following technologies:

### Core

* Next.js
* React
* TypeScript

### Styling

* Tailwind CSS
* MUI (Material UI)

### Existing Project Assets

Use the existing `IMAGES` object/constants where applicable.

Required image fallback:

```ts
IMAGES.imgNotFound
```

Required avatar:

```ts
IMAGES.avatar
```

Do NOT hard-code project placeholder image paths if `IMAGES.imgNotFound` already exists.

---

# 3. Design Direction

## 3.1 Overall Style

Design direction:

* Modern
* Professional
* Minimal
* Developer/technology oriented
* Premium but not overly decorative
* Clean visual hierarchy
* Easy to scan
* Strong typography
* Clear spacing
* Subtle animations
* Avoid excessive visual effects

The design must NOT feel crowded.

Prioritize:

1. Content hierarchy
2. Readability
3. Whitespace
4. Consistent spacing
5. Clear CTA
6. Responsive behavior
7. Accessibility

---

# 4. Color System

## Primary Colors

Main colors:

* Black
* `--brand-900`

Use `--brand-900` as the primary brand color.

If additional shades are required, create a consistent brand scale derived from `--brand-900`.

Suggested semantic structure:

```text
brand-50
brand-100
brand-200
brand-300
brand-400
brand-500
brand-600
brand-700
brand-800
brand-900
```

Do NOT introduce unrelated accent colors unless required for:

* Status
* Accessibility
* Error
* Warning
* Success
* Information

Semantic colors should remain visually compatible with the main black / brand color system.

---

# 5. Page Structure

The portfolio should be implemented as a single portfolio page with the following main sections:

```text
Portfolio
│
├── Floating CTA / Contact Bar
│
├── Hero / Introduction
│
├── Education
│
├── Work Experience
│
├── Projects
│   ├── Website
│   ├── Zalo Mini App
│   └── Mobile App
│
├── Skills
│
└── Certificates
```

---

# 6. Floating CTA / Contact Bar

Create a fixed vertical CTA bar on the right side of the screen.

## Requirements

The CTA bar contains icons for:

* Hotline
* Email
* GitHub
* Facebook

Information:

```text
Hotline:
0907086510

Email:
anphu12t2@gmail.com

Github:
https://github.com/NguyenAnPhu

Facebook:
https://www.facebook.com/NguyenAnPhu.2910
```

## Behavior

The CTA bar should:

* Stay fixed on the right side of the viewport.
* Be easily accessible.
* Use recognizable icons.
* Have hover effects.
* Have subtle transitions.
* Provide visual feedback on interaction.
* Work correctly on desktop.

Possible interaction:

```text
Phone icon
→ tel:0907086510

Email icon
→ mailto:anphu12t2@gmail.com

GitHub icon
→ https://github.com/NguyenAnPhu

Facebook icon
→ https://www.facebook.com/NguyenAnPhu.2910
```

External links should use appropriate security attributes when opened in a new tab.

On smaller screens, adapt the CTA bar so it does not obstruct content.

---

# 7. Introduction Section

## Section Purpose

Introduce Nguyễn An Phú and immediately communicate:

* Name
* Professional title
* Developer experience
* Main technical strengths
* Career direction

## Content

### Name

```text
Nguyễn An Phú
```

### Position

```text
FullStack Developer
```

### Avatar

```ts
IMAGES.avatar
```

### Introduction

Use the following content exactly:

> As a software developer with 2 years of hands - on experience, I focus on developing and deploying Website and Zalo Mini App solutions, alongside experience in Native App development. My technical strengths lie in building user interfaces and integrating APIs using TypeScript, ReactJS, Redux Toolkit, RTK Query, complemented by backend development using PHP. I consistently prioritize SEO - standard structures, page load performance optimization, and writing clean, maintainable code designed for easy structural upgrades and future scalability. To maximize efficiency, I actively leverage AI tools (GitHub Copilot, Gemini) for coding, debugging, and solution analysis. Beyond technical capabilities, I am proactive in organizing tasks, bridging business requirements across departments, and managing time to meet project deadlines. My goal is to continuously refine my expertise and evolve into a well-rounded Fullstack Developer.

---

# 8. Education Section

## Institution

```text
Industrial University of Ho Chi Minh City
```

## Period

```text
2019 – 2023
```

## Faculty

```text
FACULTY OF INFORMATION TECHNOLOGY
```

## Description

Use the following content:

> During my studies, I developed a foundational understanding of Website Development, Internet of Things (IoT), and Computer Networking. I gained practical experience through programming assignments and projects involving application development, device connectivity, and network system configuration.

---

# 9. Work Experience Section

Work experience MUST be rendered from an array.

Example data structure:

```ts
const experiences = [
  {
    company: "...",
    period: "...",
    position: "...",
    responsibilities: [...]
  }
];
```

Do NOT manually duplicate the HTML/JSX structure for each experience.

---

## 9.1 LP TECHNOLOGY ELECTRONIC COMMERCE COMPANY LIMITED

### Period

```text
08/2024 - 08/2026
```

### Position

```text
FULLSTACK DEVELOPER
```

### Project Planning & Collaboration

* Collaborate closely with clients and cross-functional teams (Design, BA) to gather and analyze system business requirements.
* Participate in evaluating UI/UX design feasibility, ensuring optimal user experiences prior to implementation.
* Perform task breakdown, time estimation, and proactively manage project timelines to ensure on-time delivery.

### Web Development

#### Frontend

* Develop responsive and user-friendly web interfaces using HTML, CSS/SASS, Bootstrap, JavaScript, and jQuery.
* Implement and customize Twig templates to integrate frontend interfaces with backend systems.
* Build semantic, SEO-friendly HTML structures and apply technical SEO best practices.
* Optimize web performance and improve Core Web Vitals and Google Lighthouse scores.

#### Backend

* Maintain and further develop the existing Backend system.
* Extend data structures and business logic.
* Implement additional features based on project requirements using PHP and LPTech Framework.

### Zalo Mini App Development

#### Frontend

* Implement Zalo Mini App projects using ZMP SDK, ReactJS, and TypeScript.
* Utilize Tailwind CSS for flexible UI construction.
* Developed Frontend interfaces and integrated data from the Backend.

#### State & Data Management

* Manage centralized state and optimize API calling performance using Redux Toolkit combined with RTK Query.

#### Backend API

* Design and develop RESTful API systems using PHP (LPTech Framework) for seamless data synchronization with the Mini App.

### Mobile App Development

#### Frontend

* Develop and maintain the frontend of Android mobile applications using React Native and TypeScript.
* Contribute to new feature development.
* Perform code refactoring.
* Migrate existing projects.
* Ensure a stable and scalable user experience.

---

# 10. Previous Work Experience

## HOANG NGUYEN TECHNOLOGY COMPANY

### Period

```text
02/2023 - 04/2023
```

### Position

```text
IT INTERN
```

### Responsibilities

* Managed and operated e-commerce websites, including updating and editing product content and managing order statuses.
* Monitored and tested Smart Home devices and surveillance camera systems to ensure stable and reliable operation.
* Inspected product conditions and handled warranty requests and procedures for technology products and devices.
* Consulted and supported customers throughout their product usage, while handling customer inquiries and resolving arising issues.
* Collaborated with relevant departments to troubleshoot technical issues, resolve customer requests, and maintain service quality.

---

# 11. Projects Section

The project section MUST be data-driven.

Create a project data model similar to:

```ts
type Project = {
  id: string;
  category: "website" | "zalo-mini-app" | "mobile-app";
  title: string;
  image: string;
  shortDescription: string;
  role: string;
  responsibilities: string[];
  previewUrl: string;
};
```

All project cards MUST be rendered using `.map()`.

Do NOT duplicate project card JSX manually.

---

# 12. Project Card Requirements

Each project card must contain:

1. Project image
2. Project category
3. Project title
4. Short description
5. Role
6. `Xem thêm` button
7. `Preview` / production website button

If a project image is unavailable:

```ts
IMAGES.imgNotFound
```

must be used.

The `Xem thêm` interaction should display the complete project role and responsibilities.

Possible implementation:

* Modal
* Dialog
* Drawer
* Expandable content

Prefer MUI `Dialog` or `Drawer` if appropriate.

---

# 13. Website Projects

Create a dedicated project subsection:

```text
Website
```

## Project 1 — Nha Khoa Orion

### URL

```text
https://nhakhoaorion.vn/
```

### Role

```text
Frontend Developer
```

### Responsibilities & Achievements

* Participated in UI/UX design evaluations to ensure optimal user experience and feasibility.
* Developed Frontend interfaces and seamlessly integrated data from the Backend.
* Implemented an advanced data extraction feature to dynamically display highlight attributes for the News and Services modules.

---

## Project 2 — Greenvoices Media

### URL

```text
https://greenvoices.vn/
```

### Role

```text
Frontend Developer
```

### Responsibilities & Achievements

* Evaluated UI/UX designs, built responsive interfaces, and integrated Backend functionalities.
* Developed complex data fetching and rendering logic for core Homepage modules, including Courses, News, and Services.

---

## Project 3 — R Techno VietNam

### URL

```text
https://rtechnovietnam.vn/
```

### Role

```text
Frontend Developer
```

### Responsibilities & Achievements

* Consulted on UI/UX flows, developed frontend components, and integrated Backend APIs.
* Independently researched and implemented a custom Profile/Document Download feature for end-users.

---

# 14. Zalo Mini App Projects

Create a dedicated project subsection:

```text
Zalo Mini App
```

## Project 1 — Mua sắm online ECOM

### URL

```text
https://zalo.me/s/4165146460804774181
```

### Role

```text
Fullstack Developer
```

### Responsibilities & Achievements

#### Frontend

* Built the user interface and deeply integrated the ZMP SDK.
* Handled complex business logic flows including:

  * Authentication
  * Cart Management
  * Checkout process

#### Backend API

* Designed and developed RESTful APIs to manage full CRUD operations for:

  * Products
  * News
  * User Purchase Histories

---

## Project 2 — Greenvoices Media

### URL

```text
https://zalo.me/s/677836201940591973
```

### Role

```text
Frontend Developer
```

### Responsibilities & Achievements

* Took primary responsibility for building the Mini App interface and configuring the ZMP SDK.
* Fully integrated external APIs.
* Handled dynamic data binding.
* Successfully managed the end-to-end functional workflows of the application.

---

# 15. Mobile App Projects

Create a dedicated project subsection:

```text
Mobile App
```

## Project 1 — Bát Trạch Lạc Việt

### URL

```text
https://play.google.com/store/apps/details?id=com.lptech.battrach
```

### Role

```text
Frontend Developer
```

### Responsibilities & Achievements

* Led the code refactoring process and executed the platform migration to a mobile application for Android.
* Developed the application using React Native (TypeScript).
* Integrated comprehensive APIs to ensure:

  * Data synchronization
  * High performance
  * System stability

---

# 16. Skills Section

The Skills section should visually emphasize technology logos/icons.

All technologies MUST be stored in data arrays and rendered using `.map()`.

Recommended data structure:

```ts
type SkillGroup = {
  title: string;
  skills: {
    name: string;
    icon: string;
  }[];
};
```

---

## Languages

* TypeScript
* JavaScript
* HTML
* CSS/SASS
* PHP
* SQL

---

## Frameworks & Libraries

* ReactJS
* NextJS
* React Native
* Redux Toolkit
* RTK Query
* Laravel
* jQuery

---

## UI Frameworks

* Tailwind CSS
* Bootstrap
* Material UI
* ZMP UI

---

## Database

* MySQL
* SQL Server
* MongoDB
* Firebase

---

## Tools

* Git
* GitHub
* SourceTree
* Postman
* Figma

---

## AI Coding Assistants

* GitHub Copilot
* Gemini
* Deepseek

---

# 17. Certificates Section

Certificates MUST be rendered from an array.

Example:

```ts
const certificates = [
  {
    title: "...",
    image: "..."
  }
];
```

Each certificate item contains:

1. Certificate image
2. Certificate title

---

## Certificate 1

```text
Build with AI Ho Chi Minh City 2026 by Google Developer Groups HCMC
```

---

## Certificate 2

```text
Project Manager IT by Master Lee Education
```

---

## Certificate 3

```text
TOEIC Certificate with score 460 issued by IIG VietNam
```

If certificate images are not available, use the appropriate existing image fallback.

---

# 18. Component Architecture

The implementation should follow a modular component architecture.

Suggested structure:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── FloatingContactBar.tsx
│   │   ├── Section.tsx
│   │   └── Container.tsx
│   │
│   ├── introduction/
│   │   ├── IntroductionSection.tsx
│   │   └── Education.tsx
│   │
│   ├── experience/
│   │   ├── ExperienceSection.tsx
│   │   └── ExperienceItem.tsx
│   │
│   ├── projects/
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCategory.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ProjectDetailDialog.tsx
│   │
│   ├── skills/
│   │   ├── SkillsSection.tsx
│   │   ├── SkillGroup.tsx
│   │   └── SkillItem.tsx
│   │
│   └── certificates/
│       ├── CertificatesSection.tsx
│       └── CertificateCard.tsx
│
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── certificates.ts
│
├── types/
│   ├── experience.ts
│   ├── project.ts
│   ├── skill.ts
│   └── certificate.ts
│
└── constants/
    ├── images.ts
    └── social.ts
```

The exact structure can be adjusted to match the existing project structure.

Do NOT unnecessarily create files if the current project already has equivalent structures.

---

# 19. Data-Driven Architecture

Repeated content MUST be separated from presentation.

The following MUST be data-driven:

* Work experiences
* Projects
* Project categories
* Skills
* Skill groups
* Certificates
* Social/contact links

Example:

```ts
const projects = [
  {
    id: "nha-khoa-orion",
    category: "website",
    title: "Nha Khoa Orion",
    image: IMAGES.imgNotFound,
    role: "Frontend Developer",
    previewUrl: "https://nhakhoaorion.vn/",
    responsibilities: [
      "...",
      "...",
      "..."
    ]
  }
];
```

A future content update should ideally require changing only the data file instead of modifying component JSX.

---

# 20. SEO Requirements

The portfolio must be implemented with SEO in mind.

## Semantic HTML

Use appropriate semantic elements:

```text
<header>
<nav>
<main>
<section>
<article>
<footer>
<h1>
<h2>
<h3>
```

Do NOT use `<div>` for everything when a semantic element is appropriate.

## Heading Hierarchy

Recommended:

```text
H1
└── Nguyễn An Phú – FullStack Developer

H2
├── About / Introduction
├── Education
├── Work Experience
├── Projects
├── Skills
└── Certificates
```

Avoid skipping heading levels unnecessarily.

---

# 21. Metadata

Configure Next.js metadata.

Required information should include:

```text
Title:
Nguyễn An Phú – FullStack Developer

Description:
A personal portfolio of Nguyễn An Phú, FullStack Developer specializing in ReactJS, TypeScript, PHP, Zalo Mini App and React Native.

Keywords:
FullStack Developer
Frontend Developer
ReactJS
TypeScript
PHP
Zalo Mini App
React Native
NextJS
```

Use Next.js Metadata API.

---

# 22. Open Graph / Social Metadata

Configure appropriate:

* Open Graph title
* Open Graph description
* Open Graph image
* Twitter metadata

Use the avatar or an appropriate portfolio image where suitable.

---

# 23. Performance Requirements

The implementation should prioritize:

* Fast initial page load
* Optimized images
* Responsive images
* Lazy loading where appropriate
* Minimal JavaScript
* Avoid unnecessary client components
* Avoid unnecessary re-renders
* Reuse components
* Avoid duplicated data
* Avoid unnecessary dependencies

Use Next.js image optimization where appropriate.

Do NOT convert the entire page into a Client Component unless required.

Prefer Server Components for static content.

---

# 24. Responsive Design

The page MUST work properly on:

* Large desktop
* Desktop
* Tablet
* Mobile

Recommended breakpoints:

```text
Mobile
sm
md
lg
xl
2xl
```

Responsive considerations:

### Desktop

* Large visual hero section
* Floating CTA on right
* Multi-column project layout
* Technology grid

### Tablet

* Reduced spacing
* 2-column project grid where appropriate
* CTA remains accessible

### Mobile

* Single-column layout
* Compact typography
* Reduced section spacing
* Horizontally scrollable or stacked skill groups if necessary
* CTA must not cover content
* Project cards must remain easy to interact with

---

# 25. UI Animation

Use subtle animations.

Recommended:

* Fade in
* Slide up
* Scale on hover
* Icon hover
* Card hover
* Image zoom on hover
* Button transition

Animations must be:

* Fast
* Smooth
* Subtle

Avoid:

* Excessive bouncing
* Long animations
* Distracting parallax
* Too many simultaneous animations

Respect `prefers-reduced-motion` where possible.

---

# 26. Project Interaction

Project cards should provide two primary actions:

### Xem thêm

Open a detail dialog/drawer containing:

```text
Project name
Role
Responsibilities & Achievements
```

### Preview

Open the production project URL.

For external URLs:

```tsx
target="_blank"
rel="noopener noreferrer"
```

Use appropriate icons.

---

# 27. Accessibility

The website must follow basic accessibility principles.

Requirements:

* All meaningful images have `alt`.
* Decorative images use appropriate empty alt where necessary.
* Buttons must have accessible labels.
* Icon-only buttons need `aria-label`.
* Keyboard navigation must work.
* Dialogs must be keyboard accessible.
* Focus should be handled correctly.
* Sufficient color contrast.
* Do not communicate important information using color alone.

---

# 28. MUI Usage

Use MUI where it provides clear value.

Recommended MUI components:

* Dialog
* IconButton
* Tooltip
* Button where appropriate
* Divider
* Drawer if needed

Do NOT mix MUI styling and Tailwind unnecessarily for the same component.

Use Tailwind CSS for most layout/styling.

Use MUI for functional UI components where appropriate.

---

# 29. Tailwind CSS Usage

Use Tailwind for:

* Layout
* Grid
* Flexbox
* Spacing
* Typography
* Responsive styles
* Borders
* Radius
* Shadows
* Transitions
* Hover states

Avoid excessive arbitrary values when reusable design tokens can be used.

Create reusable design variables/classes when appropriate.

---

# 30. Image Handling

Project images are currently unavailable.

Therefore:

```ts
IMAGES.imgNotFound
```

must be used as the default project image.

Avatar:

```ts
IMAGES.avatar
```

Certificate images should use their real images if available.

If unavailable, use the existing fallback mechanism.

Do NOT break the UI because an image is missing.

---

# 31. Contact Data Structure

Contact information should be centralized.

Example:

```ts
const contactLinks = [
  {
    type: "phone",
    label: "Hotline",
    value: "0907086510",
    href: "tel:0907086510"
  },
  {
    type: "email",
    label: "Email",
    value: "anphu12t2@gmail.com",
    href: "mailto:anphu12t2@gmail.com"
  },
  {
    type: "github",
    label: "Github",
    value: "https://github.com/NguyenAnPhu",
    href: "https://github.com/NguyenAnPhu"
  },
  {
    type: "facebook",
    label: "Facebook",
    value: "https://www.facebook.com/NguyenAnPhu.2910",
    href: "https://www.facebook.com/NguyenAnPhu.2910"
  }
];
```

---

# 32. Code Quality

The implementation MUST follow:

* TypeScript strict typing where the existing project supports it.
* Reusable components.
* Clear naming.
* No unnecessary `any`.
* No duplicated JSX.
* No duplicated project data.
* No duplicated skill data.
* No hard-coded repeated UI.
* No unnecessary `useEffect`.
* No unnecessary state.
* No unnecessary Client Components.

Use meaningful names such as:

```text
ProjectCard
ProjectDetailDialog
ExperienceItem
SkillGroup
CertificateCard
FloatingContactBar
```

Avoid generic names such as:

```text
Box1
Item
Data
Section1
ComponentA
```

---

# 33. Content Integrity

The AI Agent MUST NOT:

* Remove any provided project.
* Remove any provided experience.
* Remove any provided technology.
* Remove any certificate.
* Change project URLs.
* Change contact information.
* Invent work experience.
* Invent project responsibilities.
* Invent educational information.
* Replace the provided professional description with generated content.

The provided content is the source of truth.

Minor grammar/formatting improvements are allowed only when necessary for UI consistency, but the meaning and information MUST remain unchanged.

---

# 34. Implementation Strategy

The AI Agent should execute the implementation in the following order.

## Phase 1 — Inspect Existing Project

* Inspect current Next.js structure.
* Inspect `package.json`.
* Inspect Tailwind configuration.
* Inspect MUI configuration.
* Inspect existing `IMAGES`.
* Inspect existing global styles.
* Inspect available fonts.
* Inspect existing reusable components.
* Inspect routing structure.

Do NOT overwrite existing project architecture without reason.

---

## Phase 2 — Define Data

Create or update:

```text
data/experience.ts
data/projects.ts
data/skills.ts
data/certificates.ts
constants/social.ts
```

Define TypeScript types where necessary.

Ensure all repeated content is represented by arrays.

---

## Phase 3 — Build Layout

Implement:

1. Page container
2. Global section structure
3. Header/hero
4. Floating CTA
5. Introduction
6. Education
7. Work experience
8. Projects
9. Skills
10. Certificates

---

## Phase 4 — Build Project Components

Implement:

```text
ProjectsSection
ProjectCategory
ProjectCard
ProjectDetailDialog
```

Verify:

* All six projects render.
* Correct categories.
* Correct URLs.
* Correct roles.
* Correct responsibilities.
* Missing images use `IMAGES.imgNotFound`.

---

## Phase 5 — Build Skills

Implement:

```text
SkillsSection
SkillGroup
SkillItem
```

Render all technology categories from arrays.

---

## Phase 6 — Build Certificates

Implement:

```text
CertificatesSection
CertificateCard
```

Render all certificates from an array.

---

## Phase 7 — Responsive Optimization

Test:

```text
Desktop
Tablet
Mobile
```

Check:

* Layout
* Typography
* Spacing
* CTA
* Dialog
* Project cards
* Skill grid
* Certificate cards

---

## Phase 8 — SEO

Implement:

* Metadata
* Semantic HTML
* Correct heading hierarchy
* Open Graph
* Social metadata
* Image alt attributes

---

## Phase 9 — Performance

Check:

* Image optimization
* Client/Server Component boundaries
* Unnecessary JavaScript
* Unnecessary state
* Unnecessary effects
* Rendering performance
* Lighthouse-related issues

---

## Phase 10 — Final QA

Verify every requirement against this document.

---

# 35. Final Acceptance Checklist

## General

* [ ] Portfolio renders without runtime errors.
* [ ] TypeScript has no avoidable errors.
* [ ] Responsive on desktop/tablet/mobile.
* [ ] Design is modern and clean.
* [ ] Main colors are black and `--brand-900`.
* [ ] No unnecessary visual clutter.

## CTA

* [ ] Hotline is correct.
* [ ] Email is correct.
* [ ] GitHub URL is correct.
* [ ] Facebook URL is correct.
* [ ] Icons are displayed.
* [ ] Hover effects work.
* [ ] Mobile behavior is appropriate.

## Introduction

* [ ] Name is correct.
* [ ] Position is correct.
* [ ] Avatar uses `IMAGES.avatar`.
* [ ] Full introduction content is included.

## Education

* [ ] University is correct.
* [ ] Period is correct.
* [ ] Faculty is correct.
* [ ] Description is correct.

## Work Experience

* [ ] LP TECHNOLOGY ELECTRONIC COMMERCE COMPANY LIMITED is included.
* [ ] Period is correct.
* [ ] FullStack Developer position is correct.
* [ ] Project Planning & Collaboration is included.
* [ ] Web Development is included.
* [ ] Zalo Mini App Development is included.
* [ ] Mobile App Development is included.
* [ ] HOANG NGUYEN TECHNOLOGY COMPANY is included.
* [ ] IT INTERN position is correct.
* [ ] All responsibilities are included.

## Projects

* [x] Website category exists.
* [ ] Nha Khoa Orion exists.
* [ ] Greenvoices Media exists.
* [ ] R Techno VietNam exists.
* [ ] Zalo Mini App category exists.
* [ ] Mua sắm online ECOM exists.
* [ ] Greenvoices Media Zalo Mini App exists.
* [ ] Mobile App category exists.
* [ ] Bát Trạch Lạc Việt exists.
* [ ] All production URLs are correct.
* [ ] All roles are correct.
* [ ] All responsibilities are included.
* [ ] `Xem thêm` works.
* [ ] Production Preview works.
* [ ] Missing project images use `IMAGES.imgNotFound`.

## Skills

* [ ] Languages are complete.
* [ ] Frameworks & Libraries are complete.
* [ ] UI Frameworks are complete.
* [ ] Database technologies are complete.
* [ ] Tools are complete.
* [ ] AI Coding Assistants are complete.
* [ ] Skill items are rendered using `.map()`.

## Certificates

* [ ] Build with AI Ho Chi Minh City 2026 certificate exists.
* [ ] Project Manager IT certificate exists.
* [ ] TOEIC certificate exists.
* [ ] Certificate images are handled safely.

## SEO

* [ ] Correct `<h1>`.
* [ ] Correct section headings.
* [ ] Semantic HTML.
* [ ] Metadata configured.
* [ ] Open Graph configured.
* [ ] Images have appropriate alt text.

## Code Architecture

* [ ] Repeated content is data-driven.
* [ ] Projects are rendered using `.map()`.
* [ ] Experiences are rendered using `.map()`.
* [ ] Skills are rendered using `.map()`.
* [ ] Certificates are rendered using `.map()`.
* [ ] Components are separated appropriately.
* [ ] No unnecessary duplicated JSX.
* [ ] No unnecessary Client Components.
* [ ] No unnecessary state/effects.
* [ ] Existing project architecture is respected.

---

# 36. Important Agent Rules

Before modifying code, the AI Agent MUST:

1. Inspect the existing project.
2. Understand the current architecture.
3. Reuse existing utilities/components where possible.
4. Reuse the existing `IMAGES` constants.
5. Check the installed versions of Next.js, Tailwind CSS and MUI.
6. Avoid introducing unnecessary dependencies.
7. Avoid rewriting unrelated code.

During implementation:

1. Keep content separate from presentation.
2. Use TypeScript.
3. Use reusable components.
4. Use `.map()` for repeated content.
5. Keep the UI responsive.
6. Keep the implementation SEO-friendly.
7. Keep animations subtle.
8. Keep accessibility in mind.
9. Use `IMAGES.imgNotFound` for unavailable project images.
10. Preserve every URL and content item supplied in this specification.

After implementation:

1. Run lint/type checks if available.
2. Run the production build.
3. Fix build errors.
4. Check responsive layout.
5. Check every CTA.
6. Check every project preview URL.
7. Check project detail dialogs.
8. Verify all supplied content is present.
9. Verify no unnecessary code was introduced.
10. Provide a concise implementation summary and list any assumptions or remaining issues.
