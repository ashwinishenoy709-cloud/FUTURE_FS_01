import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PageShell } from "@/components/page-shell";
import { profile } from "@/data/profile";
import { contactSchema, submitContactMessage, type ContactInput } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ashwini Shenoy — Let's Work Together" },
      {
        name: "description",
        content:
          "Send Ashwini Shenoy a message about internships, collaborations or software development roles, or reach out directly by email and phone.",
      },
      { property: "og:title", content: "Contact Ashwini Shenoy" },
      {
        property: "og:description",
        content: "Get in touch about internships, collaborations or software development roles.",
      },
      { name: "twitter:title", content: "Contact Ashwini Shenoy" },
      {
        name: "twitter:description",
        content: "Get in touch about internships, collaborations or roles.",
      },
    ],
  }),
  component: Contact,
});

const emptyForm: ContactInput = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState<ContactInput>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const send = useServerFn(submitContactMessage);

  const mutation = useMutation({
    mutationFn: (data: ContactInput) => send({ data }),
    onSuccess: () => {
      setForm(emptyForm);
      toast.success("Message sent — thank you!", {
        description: "I'll get back to you at the email you provided.",
      });
    },
    onError: (error: Error) => {
      toast.error("Something went wrong", {
        description: error.message || "Please try again in a moment.",
      });
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    mutation.mutate(parsed.data);
  }

  function field(key: keyof ContactInput) {
    return {
      value: form[key],
      onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => setForm((current) => ({ ...current, [key]: event.target.value })),
      "aria-invalid": Boolean(errors[key]),
      className:
        "mt-2 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40 aria-invalid:border-destructive",
    };
  }

  return (
    <PageShell
      eyebrow="Contact"
      title="Let's build something together"
      intro="Whether it is an internship, a collaboration or a question about one of my projects — drop me a message and I will reply as soon as I can."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <form onSubmit={handleSubmit} className="surface-card p-6 sm:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Your name
              </label>
              <input id="name" type="text" placeholder="Jane Doe" maxLength={100} {...field("name")} />
              {errors.name ? (
                <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@example.com"
                maxLength={255}
                {...field("email")}
              />
              {errors.email ? (
                <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="subject" className="text-sm font-medium text-foreground">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Internship opportunity"
              maxLength={150}
              {...field("subject")}
            />
            {errors.subject ? (
              <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p>
            ) : null}
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell me a little about what you have in mind…"
              maxLength={2000}
              {...field("message")}
            />
            {errors.message ? (
              <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {mutation.isPending ? (
              <Loader2 className="size-4 animate-spin" aria-hidden />
            ) : (
              <Send className="size-4" aria-hidden />
            )}
            {mutation.isPending ? "Sending…" : "Send message"}
          </button>
        </form>

        <aside className="surface-card h-fit p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-foreground">Reach me directly</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-ice text-foreground">
                  <Mail className="size-4" aria-hidden />
                </span>
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-blush text-blush-foreground">
                  <Phone className="size-4" aria-hidden />
                </span>
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-peach text-peach-foreground">
                  <Linkedin className="size-4" aria-hidden />
                </span>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Github className="size-4" aria-hidden />
                </span>
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <span className="flex size-9 items-center justify-center rounded-full bg-muted text-foreground">
                <MapPin className="size-4" aria-hidden />
              </span>
              {profile.location}
            </li>
          </ul>
        </aside>
      </div>
    </PageShell>
  );
}
