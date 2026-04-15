export function Footer() {
  return (
    <footer
      className="border-t py-8 text-sm"
      style={{ borderColor: "var(--card-border)", color: "var(--muted)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <p>
            &copy; {new Date().getFullYear()} RealMarketFeed. Open source on{" "}
            <a
              href="https://github.com/Phideround/RealMarketFeed"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-[var(--foreground)]"
            >
              GitHub
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Phideround/RealMarketFeed/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 underline transition-colors hover:text-[var(--foreground)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Contribute
            </a>
            <a
              href="https://www.linkedin.com/in/pham-trung-phi-thanh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 underline transition-colors hover:text-[var(--foreground)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              @phithanh1230
            </a>
          </div>
        </div>
        <p>
          Powered by{" "}
          <a
            href="https://realmarketapi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--foreground)] underline"
          >
            RealMarketAPI
          </a>
        </p>
      </div>
    </footer>
  );
}
