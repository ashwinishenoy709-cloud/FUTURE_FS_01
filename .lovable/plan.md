# Ashwini Shenoy — Personal Portfolio Website

A multi-page, SEO-friendly React portfolio with a working contact form that both stores messages in the cloud database and emails you a notification, plus a downloadable resume PDF.

## Visual direction

Soft, cool pastel palette from your picks:
- Base: Pale Ice Blue `#DDF0F6` backgrounds, white cards
- Text/ink: deep slate derived from Muted Ocean Blue `#8CA8B4`
- Primary accent: Dusty Periwinkle `#ADB4CE`
- Secondary accent: Dusty Blush Pink `#E6D2DD` / Soft Peach `#F7DFDB` for highlights and skill chips
- Neutrals: Cool Mist Gray `#C0C4CF` for borders/dividers
- Typography: a geometric sans for headings with a clean humanist body font (no Inter/Poppins), generous whitespace, soft rounded cards with very light shadows, subtle scroll-in animations.

## Pages (separate routes, each with its own SEO metadata)

1. `/` — Home: hero with your name, "Computer Science Undergraduate · Aspiring Software Developer", short summary, buttons for Projects / Contact / Download Resume, quick skill highlights, contact links (email, phone, LinkedIn, GitHub).
2. `/about` — Professional summary, education (Canara Engineering College, BE CSE, 2023–Present, CGPA 8.89), certifications (Python & C — Turbosoft, 2023/2024), achievements (Hackotsava 2025 — Karmic Canteen System; MERN Stack workshop).
3. `/projects` — Project cards with descriptions and tech tags: ClickDefender (phishing-detection Chrome extension) and Netflix Clone (responsive streaming UI). Each card links to GitHub.
4. `/resume` — Interactive resume: timeline-style sections for skills, projects, education, certifications, achievements, with a prominent "Download PDF" button.
5. `/contact` — Contact form (name, email, subject, message) with validation, success/error toasts, plus your direct contact details.

Shared header with navigation (active-link styling, mobile menu) and footer.

## Contact form backend

- Enable Lovable Cloud (database + server functions + secrets).
- Table `contact_messages`: id, name, email, subject, message, created_at. Public visitors can insert; only you (authenticated) can read. Proper grants and row-level security included.
- A server function validates the submission, stores the row, then sends an email notification to ashwinishenoy709@gmail.com. Email sending requires a Resend API key — I'll prompt you for it during the build; if you'd rather skip it for now, messages still save and the form works, and email can be switched on later.

## Resume PDF

I'll generate a clean, ATS-friendly PDF from your resume content and host it as a project asset, wired to the Download buttons on Home and Resume.

## SEO

Unique title/description/og/twitter tags per route, single H1 per page, semantic HTML, image alt text, JSON-LD `Person` schema on Home, canonical tags, responsive viewport, robots.txt.

## Notes

- Your task brief mentions Node.js + MongoDB/MySQL as optional; here the equivalent backend is Lovable Cloud (Postgres + server functions), which satisfies "store messages" and "email notifications" with no external setup.
- Source code hosting on GitHub is done from the Lovable GitHub integration once you're happy with the site.

## Technical details

- TanStack Start routes: `index.tsx`, `about.tsx`, `projects.tsx`, `resume.tsx`, `contact.tsx`; shared chrome in `__root.tsx`.
- Design tokens in `src/styles.css` under `@theme inline` (oklch values), fonts loaded via `<link>` in the root head. No hardcoded color utilities in components.
- Content lives in a typed `src/data/profile.ts` module so text edits are one-file changes.
- Contact submit: `createServerFn` in `src/lib/contact.functions.ts` with Zod validation → insert via privileged client → Resend email; called from the component with TanStack Query mutation, sonner toasts.
