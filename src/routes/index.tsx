import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { achievements, profile, projects, resumeUrl, skillGroups } from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashwini Shenoy — Software Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Ashwini Shenoy, a Computer Science undergraduate building responsive web apps, browser extensions and cybersecurity tools.",
      },
      { property: "og:title", content: "Ashwini Shenoy — Software Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, resume and contact details for Ashwini Shenoy — Computer Science undergraduate and aspiring software developer.",
      },
      { name: "twitter:title", content: "Ashwini Shenoy — Software Developer Portfolio" },
      {
        name: "twitter:description",
        content: "Projects, resume and contact details for Ashwini Shenoy.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Software Developer",
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          address: { "@type": "PostalAddress", addressLocality: "Mangalore", addressCountry: "IN" },
          alumniOf: "Canara Engineering College",
          sameAs: [profile.github, profile.linkedin],
          knowsAbout: ["JavaScript", "Python", "Java", "C", "Web Development", "Cybersecurity"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5">
      <section className="relative overflow-hidden rounded-4xl border border-border bg-card px-6 py-14 shadow-[var(--shadow-lifted)] sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-blush opacity-70 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 bottom-0 size-56 rounded-full bg-ice opacity-80 blur-3xl"
        />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-peach px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-peach-foreground">
            Hello, My name is 
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold text-balance-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-lg text-primary sm:text-xl">{profile.headline}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Get in touch
            </Link>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-4" aria-hidden />
              Download resume
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden />
              {profile.location}
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                href={`mailto:${profile.email}`}
              >
                <Mail className="size-4 text-primary" aria-hidden />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
              >
                <Phone className="size-4 text-primary" aria-hidden />
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="size-4 text-primary" aria-hidden />
                GitHub
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Linkedin className="size-4 text-primary" aria-hidden />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
          TECHNICAL SKILLS
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.label} className="surface-card p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
            PROJECTS
          </h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            All projects
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="surface-card flex flex-col gap-4 p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
              <ul className="mt-auto flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-blush px-3 py-1 text-xs font-medium text-blush-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
          Recent highlights
        </h2>
        <ul className="mt-5 space-y-3">
          {achievements.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
