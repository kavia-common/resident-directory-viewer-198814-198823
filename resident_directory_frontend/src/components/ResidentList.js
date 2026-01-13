import React, { useEffect, useMemo, useRef, useState } from "react";
import { ResidentRow } from "./ResidentRow";
import { EmptyState } from "./EmptyState";

const PAGE_SIZE = 12;

// PUBLIC_INTERFACE
export function ResidentList({ residents, query, selectedId, onSelect }) {
  /**
   * Displays residents in a paginated list.
   * Keyboard: Up/Down to move, Enter/Space to select.
   */
  const [page, setPage] = useState(1);
  const listboxRef = useRef(null);

  useEffect(() => {
    // Reset to first page when query changes to keep UX predictable.
    setPage(1);
  }, [query]);

  const total = residents.length;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return residents.slice(start, start + PAGE_SIZE);
  }, [residents, safePage]);

  // Track which option has "roving focus"
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Keep active index in bounds when list changes.
    setActiveIndex(0);
  }, [safePage, query, total]);

  useEffect(() => {
    // If a selected resident is present in current page, set focus index to it.
    const idx = pageItems.findIndex((r) => r.id === selectedId);
    if (idx >= 0) setActiveIndex(idx);
  }, [pageItems, selectedId]);

  const onKeyDown = (e) => {
    if (pageItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, pageItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(pageItems.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(pageItems[activeIndex]);
    }
  };

  useEffect(() => {
    // Move focus to the active option button.
    const activeButton = document.getElementById(`resident-option-${activeIndex}`);
    if (activeButton && document.activeElement?.getAttribute("role") !== "option") {
      // If focus is elsewhere (e.g., header search), do not steal it.
      return;
    }
    if (activeButton && document.activeElement?.id !== activeButton.id) {
      activeButton.focus();
    }
  }, [activeIndex]);

  if (total === 0) {
    return <EmptyState query={query} />;
  }

  return (
    <>
      <div
        className="SurfaceBody"
        ref={listboxRef}
        role="listbox"
        aria-label="Residents"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div className="List">
          {pageItems.map((resident, idx) => (
            <ResidentRow
              key={resident.id}
              resident={resident}
              query={query}
              isSelected={resident.id === selectedId}
              onSelect={onSelect}
              buttonId={`resident-option-${idx}`}
            />
          ))}
        </div>
      </div>

      <div className="Pagination" aria-label="Pagination">
        <div className="PaginationMeta">
          Page {safePage} of {pageCount} • Showing{" "}
          {Math.min((safePage - 1) * PAGE_SIZE + 1, total)}–
          {Math.min(safePage * PAGE_SIZE, total)} of {total}
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button
            className="Button"
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage <= 1}
            aria-label="Previous page"
          >
            Prev
          </button>
          <button
            className="Button ButtonPrimary"
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={safePage >= pageCount}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
