import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { projects } from "@/data/profile";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ashwini Shenoy" },
      {
        name: "description",
        content:
          "ClickDefender, a phishing-detection Chrome extension, and a responsive Netflix clone — projects built by Ashwini Shenoy with HTML, CSS and JavaScript.",
      },
      { property: "og:title", content: "Projects — Ashwini Shenoy" },
      {
        property: "og:description",
        content:
          "A phishing-detection Chrome extension and a responsive streaming UI, with the engineering details behind each.",
      },
      { name: "twitter:title", content: "Projects — Ashwini Shenoy" },
      {
        name: "twitter:description",
        content: "A phishing-detection Chrome extension and a responsive streaming UI.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Things I have designed, built and shipped"
      intro="Each project below started as a problem I wanted to understand properly — from phishing detection heuristics to state management in a streaming interface."
    >
      {projects.map((project) => (
        <article key={project.slug} className="surface-card p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {project.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {project.tagline}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View code
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-ice px-3 py-1 text-xs font-medium text-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>

          <ul className="mt-6 space-y-3">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {highlight}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </PageShell>
  );
}
