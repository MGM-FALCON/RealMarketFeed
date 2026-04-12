import type { Metadata } from "next";
import { Suspense } from "react";
import { getFeeds, getAllTags } from "@/lib/feeds";
import { FeedsClient } from "./FeedsClient";

export const metadata: Metadata = {
  title: "Feed Directory",
  description:
    "Browse and search curated trading RSS feeds for crypto, forex, stocks, and macro markets.",
};

export default function FeedsPage() {
  const feeds = getFeeds();
  const allTags = getAllTags();

  return (
    <Suspense>
      <FeedsClient feeds={feeds} allTags={allTags} />
    </Suspense>
  );
}
