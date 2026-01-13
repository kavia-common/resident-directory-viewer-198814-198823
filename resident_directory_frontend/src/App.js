import React, { useMemo, useState } from "react";
import "./App.css";
import { RESIDENTS } from "./data/residents";
import { Header } from "./components/Header";
import { ResidentList } from "./components/ResidentList";
import { ResidentDetails } from "./components/ResidentDetails";
import { Modal } from "./components/Modal";
import { matchName, normalizeQuery } from "./utils/search";
import { useQueryParam } from "./hooks/useQueryParam";
import { useMediaQuery } from "./hooks/useMediaQuery";

// PUBLIC_INTERFACE
function App() {
  /** Resident Directory app (frontend-only). */

  // Keep query in URL for shareability; does not require any env vars or backend.
  const [query, setQuery] = useQueryParam("q", "");
  const [selectedId, setSelectedId] = useState(null);

  const isMobile = useMediaQuery("(max-width: 900px)");
  const [isMobileDetailsOpen, setIsMobileDetailsOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = normalizeQuery(query);
    const list = RESIDENTS.filter((r) => matchName(r.name, q));
    // Keep deterministic ordering
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [query]);

  const selectedResident = useMemo(() => {
    if (!selectedId) return null;
    return RESIDENTS.find((r) => r.id === selectedId) ?? null;
  }, [selectedId]);

  const onSelect = (resident) => {
    setSelectedId(resident.id);
    if (isMobile) setIsMobileDetailsOpen(true);
  };

  const onQueryChange = (next) => {
    setQuery(next);
    // If query changes, clear selection if it no longer matches.
    const q = normalizeQuery(next);
    if (selectedId) {
      const sr = RESIDENTS.find((r) => r.id === selectedId);
      if (sr && !matchName(sr.name, q)) setSelectedId(null);
    }
  };

  return (
    <div className="App">
      <Header
        query={query}
        onQueryChange={onQueryChange}
        resultsCount={filtered.length}
        totalCount={RESIDENTS.length}
      />

      <main className="Main">
        <div className="Container">
          <div className="Grid" aria-label="Resident directory layout">
            <section className="Surface" aria-label="Resident list">
              <div className="SurfaceHeader">
                <div className="SurfaceTitleRow">
                  <h2 className="SurfaceTitle">Residents</h2>
                  {selectedResident && !isMobile && (
                    <span className="Pill" aria-label="Selected unit">
                      Selected: {selectedResident.unit}
                    </span>
                  )}
                </div>
                <div className="SurfaceMeta">
                  Tip: Use ↑/↓ to move in the list, then Enter to open details.
                </div>
              </div>

              <ResidentList
                residents={filtered}
                query={query}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            </section>

            {/* Desktop: right-side details panel */}
            {!isMobile && (
              <aside className="Surface Details" aria-label="Resident details panel">
                <div className="SurfaceHeader">
                  <h2 className="SurfaceTitle">Details</h2>
                  <div className="SurfaceMeta">Contact and unit information</div>
                </div>
                <ResidentDetails resident={selectedResident} />
              </aside>
            )}
          </div>
        </div>

        {/* Mobile: details shown as modal */}
        {isMobile && (
          <Modal
            title="Resident details"
            isOpen={isMobileDetailsOpen}
            onClose={() => setIsMobileDetailsOpen(false)}
          >
            <ResidentDetails resident={selectedResident} />
          </Modal>
        )}
      </main>
    </div>
  );
}

export default App;
