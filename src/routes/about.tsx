import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Sparkles, Trophy } from "lucide-react";

import { PageShell, Section } from "@/components/page-shell";
import { achievements, certifications, education, profile } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ashwini Shenoy — Background & Education" },
      {
        name: "description",
        content:
          "Ashwini Shenoy is a Computer Science engineering student at Canara Engineering College with a CGPA of 8.89, focused on web development and cybersecurity.",
      },
      { property: "og:title", content: "About Ashwini Shenoy — Background & Education" },
      {
        property: "og:description",
        content:
          "Education, certifications and achievements of Ashwini Shenoy, Computer Science undergraduate in Mangalore.",
      },
      { name: "twitter:title", content: "About Ashwini Shenoy" },
      {
        name: "twitter:description",
        content: "Education, certifications and achievements of Ashwini Shenoy.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell
      eyebrow="About"
      title="Curious about how things break — and how to build them better"
      intro={profile.summary}
    >
      <Section title="Education">
        {education.map((item) => (
          <article key={item.school} className="surface-card p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <GraduationCap className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                <p className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
                  <span className="rounded-full bg-ice px-3 py-1 text-foreground">
                    {item.period}
                  </span>
                  <span className="rounded-full bg-peach px-3 py-1 text-peach-foreground">
                    {item.detail}
                  </span>
                </p>
              </div>
            </div>
          </article>
        ))}
      </Section>

      <Section title="Certifications">
        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <article key={cert.title} className="surface-card p-6">
              <span className="flex size-10 items-center justify-center rounded-full bg-blush text-blush-foreground">
                <Sparkles className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {cert.issuer} · {cert.year}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Achievements">
        <ul className="space-y-4">
          {achievements.map((item) => (
            <li key={item} className="surface-card flex gap-4 p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Trophy className="size-5" aria-hidden />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
