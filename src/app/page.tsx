import { getFeeds, getAllTags } from "@/lib/feeds";
import { HomeFeedList } from "@/components/HomeFeedList";

export default function HomePage() {
  const feeds = getFeeds();
  const allTags = getAllTags();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Your go-to directory for
            <br />
            <span className="text-blue-600">trading RSS feeds</span>
          </h1>
          <p
            className="mx-auto mb-6 max-w-2xl text-lg"
            style={{ color: "var(--muted)" }}
          >
            Discover curated RSS feeds for crypto, forex, stocks, and macro
            markets. Stay ahead of the market with real-time news delivered
            straight to your reader.
          </p>
        </div>
      </section>

      {/* All feeds with search */}
      <HomeFeedList feeds={feeds} allTags={allTags} />

      {/* Powered by RealMarketAPI */}
      <section
        className="border-t py-16"
        style={{ borderColor: "var(--card-border)" }}
      >
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
            Powered by
          </p>
          <a
            href="https://realmarketapi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-2xl font-bold text-blue-600 hover:underline"
          >
            RealMarketAPI
          </a>
          <p
            className="mt-2 text-sm"
            style={{ color: "var(--muted)" }}
          >
            Real-time and historical market data APIs for developers and
            traders.
          </p>
        </div>
      </section>
    </>
  );
}
