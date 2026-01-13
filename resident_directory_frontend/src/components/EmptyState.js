import React from "react";

// PUBLIC_INTERFACE
export function EmptyState({ query }) {
  /** Rendered when the resident search yields no results. */
  const q = (query ?? "").trim();
  return (
    <div className="EmptyState" role="status" aria-live="polite">
      <p className="EmptyTitle">No residents found</p>
      <p className="EmptyText">
        {q ? (
          <>
            Try a different name than <strong>{q}</strong>.
          </>
        ) : (
          "Try adjusting your filters."
        )}
      </p>
    </div>
  );
}
