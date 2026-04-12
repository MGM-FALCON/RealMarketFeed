import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about RealMarketFeed — a curated directory of trading RSS feeds.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">About RealMarketFeed</h1>

      <div className="space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
        <p>
          <strong className="text-[var(--foreground)]">RealMarketFeed</strong>{" "}
          is a curated, open-source directory of RSS feeds for traders and
          market enthusiasts. Whether you&apos;re tracking crypto, forex, stocks,
          or macroeconomic developments, we&apos;ve gathered the best feeds in one
          place.
        </p>

        <p>
          The project is entirely static — no database, no server-side
          processing. All feed data is stored in a simple JSON file and the site
          is built with Next.js for fast, SEO-friendly performance.
        </p>

        <p>
          We believe that RSS is one of the most underrated tools for traders.
          Instead of relying on algorithms and social media feeds, RSS gives you
          direct, unfiltered access to the sources you care about.
        </p>

        <h2 className="!mt-8 text-xl font-semibold text-[var(--foreground)]">
          Why RSS?
        </h2>
        <ul className="list-inside list-disc space-y-1.5">
          <li>No algorithms — you decide what to read</li>
          <li>Real-time updates from trusted sources</li>
          <li>Works with any RSS reader app</li>
          <li>Privacy-friendly — no tracking</li>
        </ul>

        <h2 className="!mt-8 text-xl font-semibold text-[var(--foreground)]">
          Open Source
        </h2>
        <p>
          RealMarketFeed is open source and built by the community. Contributions
          are welcome — whether it&apos;s adding new feeds, improving the UI, or
          fixing bugs.
        </p>
        <p>
          Check out the project on{" "}
          <a
            href="https://github.com/Phideround/RealMarketFeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-700"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
