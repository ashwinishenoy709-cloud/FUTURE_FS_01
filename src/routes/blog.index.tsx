import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { blogPosts, formatPostDate } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Ashwini Shenoy" },
      {
        name: "description",
        content:
          "Notes on web development, cybersecurity and hackathons by Ashwini Shenoy — building phishing detectors, responsive UIs and shipping under deadline.",
      },
      { property: "og:title", content: "Blog — Ashwini Shenoy" },
      {
        property: "og:description",
        content: "Notes on web development, cybersecurity and hackathons by Ashwini Shenoy.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageShell
      eyebrow="Writing"
      title="Blog"
      intro="Short write-ups on the projects I build, the bugs I chase and what I pick up along the way."
    >
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article key={post.slug} className="surface-card p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="mt-3 font-display text-xl font-semibold text-balance-tight text-foreground">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="transition-colors hover:text-primary"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:opacity-80"
            >
              Read post
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
