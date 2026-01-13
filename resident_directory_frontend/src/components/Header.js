import React from "react";

// PUBLIC_INTERFACE
export function Header({ query, onQueryChange, resultsCount, totalCount }) {
  /** App header with title and controlled search input. */
  const showClear = (query ?? "").length > 0;

  return (
    <header className="Header" role="banner">
      <div className="Header-inner">
        <div className="Brand" aria-label="Application title">
          <h1 className="Brand-title">Resident Directory</h1>
          <p className="Brand-subtitle">Search and view resident details</p>
        </div>

        <div className="Search" role="search" aria-label="Search residents">
          <div className="SearchInputWrap">
            <span className="SearchIcon" aria-hidden="true">
              ⌕
            </span>
            <input
              className="SearchInput"
              aria-label="Search residents by name"
              placeholder="Search by name…"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              type="text"
              autoComplete="off"
              spellCheck={false}
            />
            {showClear && (
              <button
                className="ClearButton"
                type="button"
                onClick={() => onQueryChange("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <span className="Badge" aria-label="Search result count">
            {resultsCount} / {totalCount}
          </span>
        </div>
      </div>
    </header>
  );
}
