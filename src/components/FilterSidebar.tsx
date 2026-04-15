"use client";

import { Category, CATEGORIES } from "@/types/feed";

interface FilterSidebarProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCategory: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  selectedTag: string;
  onTagChange: (value: string) => void;
  allTags: string[];
  sortAZ?: boolean;
  onSortToggle?: () => void;
  resultCount: number;
}

export function FilterSidebar({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTag,
  onTagChange,
  allTags,
  sortAZ,
  onSortToggle,
  resultCount,
}: FilterSidebarProps) {
  return (
    <aside
      className="sticky top-[57px] h-fit w-full shrink-0 space-y-6 rounded-xl border p-4 lg:w-64"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      {/* Search */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
          Search
        </label>
        <div className="relative">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs" style={{ color: "var(--muted)" }}>
            🔍
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search feeds..."
            className="w-full rounded-lg border py-2 pl-8 pr-3 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--input-border)",
              color: "var(--foreground)",
            }}
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
          Category
        </label>
        <div className="flex flex-col gap-1">
          <button
            onClick={() => onCategoryChange("all")}
            className={`rounded-lg px-3 py-1.5 text-left text-sm font-medium transition-colors ${
              selectedCategory === "all" ? "bg-blue-600 text-white" : ""
            }`}
            style={
              selectedCategory !== "all"
                ? { color: "var(--foreground)" }
                : undefined
            }
          >
            All categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`rounded-lg px-3 py-1.5 text-left text-sm font-medium transition-colors ${
                selectedCategory === cat.value ? "bg-blue-600 text-white" : ""
              }`}
              style={
                selectedCategory !== cat.value
                  ? { color: "var(--foreground)" }
                  : undefined
              }
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
          Tag
        </label>
        <select
          value={selectedTag}
          onChange={(e) => onTagChange(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "var(--input-bg)",
            borderColor: "var(--input-border)",
            color: "var(--foreground)",
          }}
        >
          <option value="all">All tags</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              #{tag}
            </option>
          ))}
        </select>
      </div>

      {/* Sort */}
      {onSortToggle && (
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
            Sort
          </label>
          <button
            onClick={onSortToggle}
            className="w-full rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-[var(--badge-bg)]"
            style={{ borderColor: "var(--input-border)" }}
          >
            {sortAZ ? "A → Z" : "Default order"}
          </button>
        </div>
      )}

      {/* Count */}
      <p className="text-xs" style={{ color: "var(--muted)" }}>
        {resultCount} feed{resultCount !== 1 ? "s" : ""} found
      </p>

      {/* Other Projects */}
      <div className="border-t pt-4" style={{ borderColor: "var(--card-border)" }}>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
          Other Projects
        </label>
        <a
          href="https://realmarketapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--badge-bg)]"
          style={{ color: "var(--foreground)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          RealMarketAPI
        </a>
      </div>
    </aside>
  );
}
