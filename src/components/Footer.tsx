export function Footer() {
  return (
    <footer
      className="border-t py-8 text-sm"
      style={{ borderColor: "var(--card-border)", color: "var(--muted)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
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
