"use client";

import { Feed } from "@/types/feed";
import { useState } from "react";

export function FeedCard({ feed }: { feed: Feed }) {
  const [copied, setCopied] = useState(false);

  const copyUrl = async () => {
    await navigator.clipboard.writeText(feed.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categoryColors: Record<string, string> = {
    crypto: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    forex: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    stocks: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    macro: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  };

  return (
    <article
      className="group relative flex flex-col justify-between rounded-xl border p-5 transition-all duration-200 hover:shadow-lg"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      <div>
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight">{feed.name}</h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[feed.category] ?? ""}`}
          >
            {feed.category}
          </span>
        </div>

        <p className="mb-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {feed.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {feed.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md px-2 py-0.5 text-xs font-medium"
              style={{
                backgroundColor: "var(--badge-bg)",
                color: "var(--badge-text)",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <a
          href={feed.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Open RSS
        </a>
        <button
          onClick={copyUrl}
          className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--badge-bg)]"
          style={{ borderColor: "var(--card-border)" }}
        >
          {copied ? "Copied!" : "Copy URL"}
        </button>
      </div>
    </article>
  );
}
    