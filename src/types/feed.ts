export interface Feed {
  name: string;
  url: string;
  category: "crypto" | "forex" | "stocks" | "macro";
  tags: string[];
  description: string;
}

export type Category = Feed["category"];

export const CATEGORIES: { value: Category; label: string; icon: string }[] = [
  { value: "crypto", label: "Crypto", icon: "₿" },
  { value: "forex", label: "Forex", icon: "💱" },
  { value: "stocks", label: "Stocks", icon: "📈" },
  { value: "macro", label: "Macro", icon: "🌐" },
];
