import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { useState } from "react";

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

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

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
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certifications)[number] | null
  >(null);
  return (
    <PageShell
      eyebrow="Resume"
      title="Resume"
      intro="An overview of my technical skills, projects, education, certifications, and achievements."
    >
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
          View my experience below or download a PDF copy of my resume.
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

      <section className="mt-12">
        <h2 className="font-display text-xl font-semibold text-foreground">Certifications</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setSelectedCertificate(cert)}
              className="surface-card cursor-pointer p-6 text-left transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-blush text-blush-foreground">
                <Sparkles className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {cert.issuer} · {cert.year}
              </p>
              <p className="mt-4 text-sm font-medium text-primary">View Certificate →</p>
            </button>
          ))}
        </div>
      </section>

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
      <Dialog
        open={selectedCertificate !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedCertificate(null);
        }}
      >
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-auto">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedCertificate.title}</DialogTitle>
              </DialogHeader>

              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate`}
                className="mt-4 h-auto w-full rounded-lg border border-border"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </PageShell>
  );
}
