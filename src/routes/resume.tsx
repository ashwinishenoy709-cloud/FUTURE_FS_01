import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import {
  achievements,
  certifications,
  education,
  profile,
  projects,
  resumeUrl,
  skillGroups,
} from "@/data/profile";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Ashwini Shenoy, Computer Science Undergraduate" },
      {
        name: "description",
        content:
          "Interactive resume of Ashwini Shenoy: technical skills, projects, education at Canara Engineering College, certifications and achievements. Downloadable as PDF.",
      },
      { property: "og:title", content: "Resume — Ashwini Shenoy" },
      {
        property: "og:description",
        content: "Skills, projects, education and certifications — with a downloadable PDF resume.",
      },
      { name: "twitter:title", content: "Resume — Ashwini Shenoy" },
      {
        name: "twitter:description",
        content: "Skills, projects, education and certifications, downloadable as PDF.",
      },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <PageShell eyebrow="Resume" title="Resume" intro={profile.summary}>
      <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
        <a
          href={resumeUrl}
          download
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="size-4" aria-hidden />
          Download PDF resume
        </a>
        <p className="text-sm text-muted-foreground">
          Prefer a copy for your records? The PDF mirrors everything below.
        </p>
      </div>

      <Section title="Technical skills">
        <div className="grid gap-5 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.label} className="surface-card p-5">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
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
      </Section>

      <Section title="Projects">
        <ol className="relative space-y-6 border-l border-border pl-6">
          {projects.map((project) => (
            <li key={project.slug} className="relative">
              <span
                aria-hidden
                className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full border-2 border-card bg-primary"
              />
              <h3 className="font-display text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-primary">{project.stack.join(" · ")}</p>
              <ul className="mt-3 space-y-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm leading-relaxed text-muted-foreground">
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Education">
        <ol className="relative space-y-6 border-l border-border pl-6">
          {education.map((item) => (
            <li key={item.school} className="relative">
              <span
                aria-hidden
                className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full border-2 border-card bg-primary"
              />
              <h3 className="font-display text-lg font-semibold text-foreground">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
              <p className="mt-1 text-xs font-medium text-primary">
                {item.period} · {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Certifications">
        <ul className="grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li key={cert.title} className="surface-card p-5 text-sm text-muted-foreground">
              <span className="font-display text-base font-semibold text-foreground">
                {cert.title}
              </span>
              <br />
              {cert.issuer} · {cert.year}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Achievements">
        <ul className="space-y-3">
          {achievements.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
