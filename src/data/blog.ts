export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  /** Each string is a paragraph; strings starting with "## " render as a subheading. */
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-clickdefender",
    title: "Building ClickDefender: a phishing detector that explains itself",
    excerpt:
      "How I designed a Chrome extension that scores links for phishing risk and, more importantly, tells you why.",
    date: "2026-06-12",
    readingTime: "5 min read",
    tags: ["Cybersecurity", "Chrome Extensions", "JavaScript"],
    body: [
      "Most phishing warnings are a red wall with no explanation. That was the itch behind ClickDefender: I wanted a browser extension that not only blocks suspicious links but also shows the reasoning behind the verdict, so the user learns something each time.",
      "## Starting with the signals",
      "The first version relied only on blacklist and whitelist checks. It worked for known bad domains, but it was useless against fresh phishing pages that had never been reported. So I added heuristics: SSL certificate age and issuer, unusual URL length, suspicious character substitutions, subdomain depth, and whether the visible brand name matched the registered domain.",
      "## Making the score explainable",
      'Instead of a single opaque number, every signal contributes a weighted line item. The popup lists them — "certificate issued 2 days ago", "domain contains a look-alike character" — and the total decides whether the page is safe, suspicious, or dangerous. Debugging became far easier too, because a wrong verdict points straight at the signal that misfired.',
      "## Keeping browsing fast",
      "Integrating the Google Safe Browsing API gave a strong baseline, but network calls on every navigation are expensive. I cached verdicts per origin for the session and ran the local heuristics first, only reaching for the API when the local score landed in the uncertain middle band.",
      "## What I'd do next",
      "The natural next step is a small trained model over the same features, plus a shared reporting endpoint so verdicts improve for everyone. Building it taught me more about the browser security model than any tutorial did.",
    ],
  },
  {
    slug: "netflix-clone-lessons",
    title: "What cloning Netflix taught me about responsive UI",
    excerpt:
      "Rebuilding a streaming interface from scratch turned out to be a crash course in layout, media queries and component thinking.",
    date: "2026-04-28",
    readingTime: "4 min read",
    tags: ["Frontend", "CSS", "React"],
    body: [
      "Cloning a familiar interface is an underrated exercise. You already know what the result should feel like, so all your attention goes into how it is built.",
      "## Rows are harder than they look",
      "The horizontal carousels look trivial until you handle overflow, snap scrolling, keyboard access and hover expansion at once. I ended up with a single row component that takes a title and a list of items, which removed a lot of duplicated CSS.",
      "## Breakpoints follow content, not devices",
      "I stopped writing media queries for specific phones and started adding them where the layout actually broke. Fewer breakpoints, calmer code, and the design held up on screens I never tested.",
      "## Images decide performance",
      "Poster art dominated the payload. Correct sizing, lazy loading below the fold, and fixed aspect ratios to prevent layout shift made the page feel instant without touching the JavaScript.",
      "## The takeaway",
      "Clones are practice, not portfolio filler — the value is in the decisions you make while rebuilding something whose behaviour you already understand.",
    ],
  },
  {
    slug: "hackotsava-2025",
    title: "36 hours at Hackotsava 2025: shipping the Karmic Canteen System",
    excerpt:
      "Notes from a national-level hackathon — scoping ruthlessly, splitting work, and demoing something that actually runs.",
    date: "2026-02-15",
    readingTime: "4 min read",
    tags: ["Hackathon", "Teamwork", "Product"],
    body: [
      "Hackotsava 2025 was my first national-level hackathon, and the biggest lesson had nothing to do with code.",
      "## Cut the idea in half, twice",
      "Our canteen system started with pre-ordering, wallets, analytics and a loyalty programme. By hour six we had shipped none of it. Trimming to a single flow — order, pay, collect with a token — is what made the demo possible.",
      "## Interfaces before implementations",
      "Agreeing on the shape of the data early meant the frontend and backend could move in parallel without blocking each other. Mock data covered the gap until the real endpoints landed.",
      "## Practise the demo",
      "We rehearsed the three-minute walkthrough twice before presenting, which caught a broken state we would otherwise have hit live. Judges see the demo, not the repo.",
      "## Worth it",
      "We didn't win, but we left with a working prototype, a much better sense of how to scope, and a habit of shipping the smallest useful version first.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
