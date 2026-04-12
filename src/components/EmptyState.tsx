export function EmptyState({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
      <span className="text-5xl">🔍</span>
      <h3 className="text-lg font-semibold">No feeds found</h3>
      <p className="text-sm" style={{ color: "var(--muted)" }}>
        {message ?? "Try adjusting your search or filters."}
      </p>
    </div>
  );
}
