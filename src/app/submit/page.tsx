import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Feed",
  description:
    "Learn how to contribute a new trading RSS feed to the RealMarketFeed directory.",
};

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold">Submit a Feed</h1>
      <p className="mb-8" style={{ color: "var(--muted)" }}>
        RealMarketFeed is open source! You can contribute new feeds by opening a
        pull request on GitHub.
      </p>

      <div
        className="rounded-xl border p-6"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
        }}
      >
        <h2 className="mb-4 text-xl font-semibold">How to contribute</h2>
        <ol className="list-inside list-decimal space-y-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <li>
            Fork the{" "}
            <a
              href="https://github.com/Phideround/RealMarketFeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-700"
            >
              GitHub repository
            </a>
          </li>
          <li>
            Open{" "}
            <code
              className="rounded px-1.5 py-0.5 text-xs"
              style={{ backgroundColor: "var(--badge-bg)" }}
            >
              data/feeds.json
            </code>
          </li>
          <li>
            Add your feed entry following this format:
            <pre
              className="mt-2 overflow-x-auto rounded-lg p-4 text-xs"
              style={{ backgroundColor: "var(--badge-bg)" }}
            >
{`{
  "name": "Feed Name",
  "url": "https://example.com/rss",
  "category": "crypto | forex | stocks | macro",
  "tags": ["tag1", "tag2"],
  "description": "Short description of the feed"
}`}
            </pre>
          </li>
          <li>Commit your changes and open a Pull Request</li>
          <li>We&apos;ll review and merge it!</li>
        </ol>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://github.com/Phideround/RealMarketFeed/edit/main/data/feeds.json"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
        >
          Edit feeds.json on GitHub
        </a>
      </div>
    </div>
  );
}
