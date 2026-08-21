import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Sparkles, Trophy } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof certifications)[number] | null
  >(null);
  return (
    <PageShell eyebrow="About" title="Who I Am" intro={profile.summary}>
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
