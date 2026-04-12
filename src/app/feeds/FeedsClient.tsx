"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Feed, Category } from "@/types/feed";
import { FeedCard } from "@/components/FeedCard";
import { FilterSidebar } from "@/components/FilterSidebar";
import { EmptyState } from "@/components/EmptyState";

interface FeedsClientProps {
  feeds: Feed[];
  allTags: string[];
}

export function FeedsClient({ feeds, allTags }: FeedsClientProps) {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") ?? "all") as
    | Category
    | "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">(initialCategory);
  const [tag, setTag] = useState("all");
  const [sortAZ, setSortAZ] = useState(false);

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

    if (sortAZ) {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [feeds, category, tag, search, sortAZ]);

  return (
    <div className="mx-auto flex w-full max-w-[1600px] gap-6 px-4 py-8">
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
          sortAZ={sortAZ}
          onSortToggle={() => setSortAZ((s) => !s)}
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
              sortAZ={sortAZ}
              onSortToggle={() => setSortAZ((s) => !s)}
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
  );
}
