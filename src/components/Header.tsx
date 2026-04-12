"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ borderColor: "var(--card-border)", backgroundColor: "var(--sticky-bg)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="text-2xl">📡</span>
          <span>RealMarketFeed</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex" style={{ color: "var(--muted)" }}>
          <Link href="/feeds" className="transition-colors hover:text-[var(--foreground)]">
            Feeds
          </Link>
          <Link href="/submit" className="transition-colors hover:text-[var(--foreground)]">
            Submit
          </Link>
          <Link href="/about" className="transition-colors hover:text-[var(--foreground)]">
            About
          </Link>
          <a
            href="https://github.com/Phideround/RealMarketFeed"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--foreground)]"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="rounded-lg p-2 text-lg transition-colors hover:bg-[var(--badge-bg)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Mobile nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="sm:hidden">
      <details className="relative">
        <summary className="list-none cursor-pointer rounded-lg p-2 text-lg hover:bg-[var(--badge-bg)]">
          ☰
        </summary>
        <nav
          className="absolute right-0 top-full mt-2 flex w-48 flex-col gap-1 rounded-xl border p-2 shadow-lg"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
        >
          <Link href="/feeds" className="rounded-lg px-3 py-2 text-sm hover:bg-[var(--badge-bg)]">
            Feeds
          </Link>
          <Link href="/submit" className="rounded-lg px-3 py-2 text-sm hover:bg-[var(--badge-bg)]">
            Submit
          </Link>
          <Link href="/about" className="rounded-lg px-3 py-2 text-sm hover:bg-[var(--badge-bg)]">
            About
          </Link>
          <a
            href="https://github.com/Phideround/RealMarketFeed"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm hover:bg-[var(--badge-bg)]"
          >
            GitHub
          </a>
        </nav>
      </details>
    </div>
  );
}
