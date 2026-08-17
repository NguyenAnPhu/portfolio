# Nguyễn An Phú — Portfolio Homepage Implementation Plan

## Phân tích dự án hiện tại

### Technology Stack đã cài đặt

| Technology | Version | Ghi chú |
|---|---|---|
| Next.js | 16.2.9 | App Router, Turbopack dev |
| React | 19.2.7 | RSC support |
| TypeScript | 6.0.3 | Strict mode enabled |
| Tailwind CSS | 4.2.1 | V4 (CSS-first config, `@theme inline`) |
| MUI | 9.3.1 | `@mui/material` + `@mui/icons-material` |
| Emotion | 11.x | MUI peer dependency |
| SASS | 1.102.0 | Đã cấu hình `assets/sass/` |
| next-themes | 0.4.6 | Light theme default |

### Cấu trúc hiện tại

```text
d:\nextjs\portfolio\
├── app/
│   ├── layout.tsx        ← Có metadata cũ (Launch UI), ThemeProvider
│   ├── page.tsx          ← Trống (chỉ có <main>)
│   └── globals.css       ← Design tokens, brand-900: #1E3A8A, brand scale
├── assets/
│   ├── images.tsx        ← IMAGES object (avatar, logo, imgNotFound)
│   └── sass/             ← reset, typo (trống), home (trống)
├── components/           ← TRỐNG
├── config/site.ts        ← Cần cập nhật cho portfolio
├── lib/
│   ├── fonts.ts          ← Inter font
│   └── utils.ts          ← cn() utility (clsx + tailwind-merge)
├── styles/utils.css      ← Glass effects, fade utilities
└── public/assets/imgs/   ← avatar.png, imgNotFound.png, logo.png
```

### Điểm quan trọng

- `--brand-900: #1E3A8A` (Deep Blue) đã được định nghĩa trong `:root`
- Brand scale (50-950) đã có tokens trong `@theme inline` nhưng chưa có giá trị cụ thể
- `IMAGES` constants đã có `avatar`, `imgNotFound`, `logo`
- `components/` folder trống — toàn bộ components cần tạo mới
- `page.tsx` trống — trang chính cần xây dựng hoàn toàn
- SASS files đã có cấu trúc nhưng nội dung trống
- Path alias `@/*` → root đã cấu hình

---

## User Review Required

> [!IMPORTANT]
> **Tailwind CSS v4 + MUI v9**: Dự án sử dụng Tailwind CSS v4 (CSS-first, không có `tailwind.config.ts`) và MUI v9. MUI components sẽ cần wrapper `"use client"` vì chúng là client components. Tôi sẽ tách các interactive components (Dialog, FloatingContactBar) thành client components riêng, giữ phần còn lại là Server Components.

> [!IMPORTANT]  
> **Brand Color Scale**: Hiện tại chỉ có `--brand-900: #1E3A8A` được định nghĩa giá trị. Tôi sẽ tạo đầy đủ brand scale (50→950) dựa trên `#1E3A8A` để có palette hoàn chỉnh cho thiết kế. Palette sẽ là các shade từ rất nhạt (brand-50) đến rất đậm (brand-950) của tone xanh navy.

> [!WARNING]
> **Ảnh certificate**: Hiện tại không có ảnh certificate trong `public/assets/imgs/`. Tất cả certificate sẽ dùng `IMAGES.imgNotFound` làm fallback. Khi có ảnh thật, chỉ cần cập nhật data file.

---

## Open Questions

> [!IMPORTANT]
> **1. Ngôn ngữ giao diện**: README spec có mix tiếng Anh và tiếng Việt (ví dụ: "Xem thêm" button). Section headings nên là tiếng Anh hay tiếng Việt? Tôi sẽ mặc định dùng tiếng Anh cho section headings (About, Education, Experience, Projects, Skills, Certificates) và tiếng Việt cho "Xem thêm" button như spec yêu cầu.

> [!IMPORTANT]
> **2. Light mode only?**: Dự án có `next-themes` cài sẵn và layout set `defaultTheme="light"`. README spec không đề cập dark mode. Tôi sẽ tập trung vào light mode, nhưng vẫn giữ lại ThemeProvider để tương thích tương lai.

---

## Proposed Changes

### Phase 1 — Config & Design System

#### [MODIFY] [site.ts](file:///d:/nextjs/portfolio/config/site.ts)
- Cập nhật `name`, `url`, `description`, `keywords`, `links` cho Nguyễn An Phú portfolio
- Xóa thông tin Launch UI cũ

#### [MODIFY] [globals.css](file:///d:/nextjs/portfolio/app/globals.css)
- Thêm đầy đủ giá trị brand scale (brand-50 → brand-950) dựa trên `#1E3A8A`
- Thêm animation keyframes: `fade-in-up`, `scale-in`
- Giữ nguyên toàn bộ tokens/variables hiện có

#### [MODIFY] [layout.tsx](file:///d:/nextjs/portfolio/app/layout.tsx)
- Cập nhật metadata: title, description, keywords, OpenGraph, Twitter
- Set `lang="vi"` cho HTML
- Giữ nguyên ThemeProvider và font setup

---

### Phase 2 — TypeScript Types

#### [NEW] [types/index.ts](file:///d:/nextjs/portfolio/types/index.ts)
- Export tất cả types từ một file

#### [NEW] [types/experience.ts](file:///d:/nextjs/portfolio/types/experience.ts)
```ts
type ResponsibilityGroup = {
  title: string;
  items: string[];
  subGroups?: ResponsibilityGroup[];
};

type Experience = {
  id: string;
  company: string;
  period: string;
  position: string;
  responsibilityGroups: ResponsibilityGroup[];
};
```

#### [NEW] [types/project.ts](file:///d:/nextjs/portfolio/types/project.ts)
```ts
type ProjectCategory = "website" | "zalo-mini-app" | "mobile-app";

type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  image: string;
  shortDescription: string;
  role: string;
  responsibilities: string[];
  previewUrl: string;
};
```

#### [NEW] [types/skill.ts](file:///d:/nextjs/portfolio/types/skill.ts)
```ts
type Skill = { name: string; icon: string };
type SkillGroup = { title: string; skills: Skill[] };
```

#### [NEW] [types/certificate.ts](file:///d:/nextjs/portfolio/types/certificate.ts)
```ts
type Certificate = { id: string; title: string; image: string };
```

#### [NEW] [types/contact.ts](file:///d:/nextjs/portfolio/types/contact.ts)
```ts
type ContactLink = {
  type: "phone" | "email" | "github" | "facebook";
  label: string;
  value: string;
  href: string;
};
```

---

### Phase 3 — Data Files

#### [NEW] [data/contact.ts](file:///d:/nextjs/portfolio/data/contact.ts)
- Centralized contact data: phone, email, GitHub, Facebook
- Đúng thông tin từ spec

#### [NEW] [data/experience.ts](file:///d:/nextjs/portfolio/data/experience.ts)
- 2 experiences: LP Technology (08/2024 - 08/2026), Hoang Nguyen Technology (02/2023 - 04/2023)
- Đầy đủ responsibilities theo spec, có sub-groups (Frontend, Backend, State Management, etc.)

#### [NEW] [data/projects.ts](file:///d:/nextjs/portfolio/data/projects.ts)
- 6 projects: 3 Website, 2 Zalo Mini App, 1 Mobile App
- Sử dụng `IMAGES.imgNotFound` cho tất cả project images
- Đầy đủ URLs, roles, responsibilities từ spec

#### [NEW] [data/skills.ts](file:///d:/nextjs/portfolio/data/skills.ts)
- 6 groups: Languages, Frameworks & Libraries, UI Frameworks, Database, Tools, AI Coding Assistants
- Mỗi skill có name + icon (sử dụng devicon CDN URLs hoặc inline SVG paths)

#### [NEW] [data/certificates.ts](file:///d:/nextjs/portfolio/data/certificates.ts)
- 3 certificates: Build with AI, Project Manager IT, TOEIC 460
- Dùng `IMAGES.imgNotFound` cho ảnh (chưa có ảnh thật)

---

### Phase 4 — Layout Components

#### [NEW] [components/layout/Section.tsx](file:///d:/nextjs/portfolio/components/layout/Section.tsx)
- Reusable section wrapper: `<section>` semantic, consistent padding, max-width
- Props: `id`, `title` (H2), `subtitle`, `className`, `children`
- Fade-in animation on scroll (IntersectionObserver)

#### [NEW] [components/layout/Container.tsx](file:///d:/nextjs/portfolio/components/layout/Container.tsx)
- Max-width container (1280px) with responsive padding

#### [NEW] [components/layout/FloatingContactBar.tsx](file:///d:/nextjs/portfolio/components/layout/FloatingContactBar.tsx)
- `"use client"` — MUI IconButton + Tooltip
- Fixed position right side, vertical icon stack
- Icons: Phone, Email, GitHub, Facebook (MUI Icons)
- Hover effects, transitions
- Mobile: horizontal bottom bar hoặc thu gọn
- Render from `contactLinks` data array

---

### Phase 5 — Introduction & Education Components

#### [NEW] [components/introduction/IntroductionSection.tsx](file:///d:/nextjs/portfolio/components/introduction/IntroductionSection.tsx)
- Hero section: Avatar (Next.js Image, priority), Name (H1), Position
- Full introduction paragraph (exact content from spec)
- Clean layout: avatar bên trái, text bên phải (desktop), stack (mobile)

#### [NEW] [components/introduction/EducationSection.tsx](file:///d:/nextjs/portfolio/components/introduction/EducationSection.tsx)
- University name, period, faculty, description
- Timeline-style visual
- Semantic HTML: `<article>`

---

### Phase 6 — Experience Components

#### [NEW] [components/experience/ExperienceSection.tsx](file:///d:/nextjs/portfolio/components/experience/ExperienceSection.tsx)
- Map over `experiences` array
- Section heading (H2)

#### [NEW] [components/experience/ExperienceItem.tsx](file:///d:/nextjs/portfolio/components/experience/ExperienceItem.tsx)
- Company name, period, position
- Nested responsibility groups (Project Planning, Web Dev → Frontend/Backend, Zalo Mini App, Mobile App)
- Timeline visual indicator
- Collapsible hoặc fully displayed

---

### Phase 7 — Project Components

#### [NEW] [components/projects/ProjectsSection.tsx](file:///d:/nextjs/portfolio/components/projects/ProjectsSection.tsx)
- Group projects by category, render each `ProjectCategory`
- Section heading (H2)

#### [NEW] [components/projects/ProjectCategory.tsx](file:///d:/nextjs/portfolio/components/projects/ProjectCategory.tsx)
- Category title (H3): "Website", "Zalo Mini App", "Mobile App"
- Grid layout for project cards (3 col desktop, 2 col tablet, 1 col mobile)

#### [NEW] [components/projects/ProjectCard.tsx](file:///d:/nextjs/portfolio/components/projects/ProjectCard.tsx)
- Project image (with imgNotFound fallback)
- Category badge, title, short description, role
- "Xem thêm" button → opens detail dialog
- "Preview" button → external link (`target="_blank" rel="noopener noreferrer"`)
- Hover effects: card lift, image zoom

#### [NEW] [components/projects/ProjectDetailDialog.tsx](file:///d:/nextjs/portfolio/components/projects/ProjectDetailDialog.tsx)
- `"use client"` — MUI Dialog
- Project name, role, full responsibilities list
- Accessible: keyboard navigation, focus trap
- Close button

---

### Phase 8 — Skills Components

#### [NEW] [components/skills/SkillsSection.tsx](file:///d:/nextjs/portfolio/components/skills/SkillsSection.tsx)
- Map over `skillGroups` array
- Section heading (H2)

#### [NEW] [components/skills/SkillGroup.tsx](file:///d:/nextjs/portfolio/components/skills/SkillGroup.tsx)
- Group title (H3)
- Grid of `SkillItem` components

#### [NEW] [components/skills/SkillItem.tsx](file:///d:/nextjs/portfolio/components/skills/SkillItem.tsx)
- Technology icon/logo + name
- Hover effect (scale, shadow)
- Sử dụng devicon CDN cho icons (ví dụ: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg`)

---

### Phase 9 — Certificates Components

#### [NEW] [components/certificates/CertificatesSection.tsx](file:///d:/nextjs/portfolio/components/certificates/CertificatesSection.tsx)
- Map over `certificates` array
- Section heading (H2)

#### [NEW] [components/certificates/CertificateCard.tsx](file:///d:/nextjs/portfolio/components/certificates/CertificateCard.tsx)
- Certificate image (with fallback)
- Certificate title
- Hover effect

---

### Phase 10 — Main Page Assembly

#### [MODIFY] [page.tsx](file:///d:/nextjs/portfolio/app/page.tsx)
- Assemble tất cả sections theo thứ tự:
  1. `FloatingContactBar`
  2. `IntroductionSection` (Hero)
  3. `EducationSection`
  4. `ExperienceSection`
  5. `ProjectsSection`
  6. `SkillsSection`
  7. `CertificatesSection`
- Semantic: `<main>` wrapper
- Server Component (default) — chỉ interactive children là client

---

## Tổng hợp file cần tạo/sửa

| Action | File | Type |
|---|---|---|
| MODIFY | `config/site.ts` | Config |
| MODIFY | `app/globals.css` | Design tokens |
| MODIFY | `app/layout.tsx` | Metadata + SEO |
| MODIFY | `app/page.tsx` | Main page |
| NEW | `types/index.ts` | Types barrel |
| NEW | `types/experience.ts` | Type |
| NEW | `types/project.ts` | Type |
| NEW | `types/skill.ts` | Type |
| NEW | `types/certificate.ts` | Type |
| NEW | `types/contact.ts` | Type |
| NEW | `data/contact.ts` | Data |
| NEW | `data/experience.ts` | Data |
| NEW | `data/projects.ts` | Data |
| NEW | `data/skills.ts` | Data |
| NEW | `data/certificates.ts` | Data |
| NEW | `components/layout/Section.tsx` | Component |
| NEW | `components/layout/Container.tsx` | Component |
| NEW | `components/layout/FloatingContactBar.tsx` | Component (client) |
| NEW | `components/introduction/IntroductionSection.tsx` | Component |
| NEW | `components/introduction/EducationSection.tsx` | Component |
| NEW | `components/experience/ExperienceSection.tsx` | Component |
| NEW | `components/experience/ExperienceItem.tsx` | Component |
| NEW | `components/projects/ProjectsSection.tsx` | Component |
| NEW | `components/projects/ProjectCategory.tsx` | Component |
| NEW | `components/projects/ProjectCard.tsx` | Component (client) |
| NEW | `components/projects/ProjectDetailDialog.tsx` | Component (client) |
| NEW | `components/skills/SkillsSection.tsx` | Component |
| NEW | `components/skills/SkillGroup.tsx` | Component |
| NEW | `components/skills/SkillItem.tsx` | Component |
| NEW | `components/certificates/CertificatesSection.tsx` | Component |
| NEW | `components/certificates/CertificateCard.tsx` | Component |

**Tổng: 4 file modify + 27 file mới = 31 files**

---

## Verification Plan

### Automated Tests
```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint

# Production build
npm run build
```

### Manual Verification
- Chạy `npm run dev` và kiểm tra trang trên browser
- Kiểm tra responsive: Desktop (1440px), Tablet (768px), Mobile (375px)
- Kiểm tra tất cả 6 projects render đúng category, URL, role
- Kiểm tra "Xem thêm" dialog mở đúng thông tin
- Kiểm tra tất cả Preview links hoạt động (external)
- Kiểm tra Floating CTA bar: phone, email, GitHub, Facebook links
- Kiểm tra heading hierarchy: H1 → H2 → H3
- Kiểm tra avatar và imgNotFound hiển thị đúng
- Cross-check tất cả content với README spec (acceptance checklist section 35)
