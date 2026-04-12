import feeds from "../../data/feeds.json";
import { Feed } from "@/types/feed";

export function getFeeds(): Feed[] {
  return feeds as Feed[];
}

export function getCategories(): string[] {
  return [...new Set(feeds.map((f) => f.category))];
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  feeds.forEach((f) => f.tags.forEach((t) => tags.add(t)));
  return [...tags].sort();
}
