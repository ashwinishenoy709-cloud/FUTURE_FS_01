import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { formatPostDate, getPostBySlug } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Post not found — Ashwini Shenoy" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const title = `${post.title} — Ashwini Shenoy`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPostPage,
});

function PostNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 text-center">
      <h1 className="font-display text-2xl font-semibold text-foreground">Post not found</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        That article doesn't exist. Browse the other posts instead.
      </p>
      <Link
        to="/blog"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
      >
        Back to blog
      </Link>
    </main>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <main className="mx-auto max-w-3xl px-5 pt-12 pb-4 sm:pt-16">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden />
        All posts
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-semibold text-balance-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
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
      </header>

      <article className="mt-10 space-y-5">
        {post.body.map((block) =>
          block.startsWith("## ") ? (
            <h2
              key={block}
              className="pt-4 font-display text-xl font-semibold text-foreground"
            >
              {block.slice(3)}
            </h2>
          ) : (
            <p key={block} className="text-base leading-relaxed text-muted-foreground">
              {block}
            </p>
          ),
        )}
      </article>
    </main>
  );
}
