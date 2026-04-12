"use client";

import { useMemo, useState } from "react";
import { Feed, Category } from "@/types/feed";
import { FeedCard } from "@/components/FeedCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { EmptyState } from "@/components/EmptyState";

interface HomeFeedListProps {
  feeds: Feed[];
  allTags: string[];
}

export function HomeFeedList({ feeds, allTags }: HomeFeedListProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [tag, setTag] = useState("all");

  const filtered = useMemo(() => {
    let result = feeds;

    if (category !== "all") {
      result = result.filter((f) => f.category === category);
    }

    if (tag !== "all") {
      result = result.filter((f) => f.tags.includes(tag));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q) ||
          f.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [feeds, category, tag, search]);

  return (
    <section className="py-2">
      <div className="mx-auto flex w-full max-w-[1600px] gap-6 px-4">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar
            search={search}
            onSearchChange={setSearch}
            selectedCategory={category}
            onCategoryChange={setCategory}
            selectedTag={tag}
            onTagChange={setTag}
            allTags={allTags}
            resultCount={filtered.length}
          />
        </div>

        {/* Mobile filters */}
        <div className="mb-4 w-full lg:hidden">
          <details className="rounded-xl border" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)" }}>
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold">
              Filters & Search
            </summary>
            <div className="px-4 pb-4">
              <FilterSidebar
                search={search}
                onSearchChange={setSearch}
                selectedCategory={category}
                onCategoryChange={setCategory}
                selectedTag={tag}
                onTagChange={setTag}
                allTags={allTags}
                resultCount={filtered.length}
              />
            </div>
          </details>
        </div>

        {/* Feed grid */}
        <div className="min-w-0 flex-1">
          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {filtered.map((feed) => (
                <FeedCard key={feed.url} feed={feed} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
