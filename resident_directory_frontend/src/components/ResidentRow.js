import React, { memo } from "react";
import { highlightMatch } from "../utils/search";

function initialsForName(name) {
  const parts = (name ?? "")
    .split(" ")
    .map((p) => p.trim())
    .filter(Boolean);
  const a = parts[0]?.[0] ?? "?";
  const b = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (a + b).toUpperCase();
}

// PUBLIC_INTERFACE
export const ResidentRow = memo(function ResidentRow({
  resident,
  query,
  isSelected,
  onSelect,
  buttonId,
}) {
  /** A single resident row; keyboard accessible via <button>. */
  const segments = highlightMatch(resident?.name ?? "", query);

  return (
    <button
      id={buttonId}
      type="button"
      className="RowButton"
      onClick={() => onSelect(resident)}
      aria-selected={isSelected ? "true" : "false"}
      role="option"
    >
      <div className="Avatar" aria-hidden="true">
        {resident.avatarUrl ? (
          <img src={resident.avatarUrl} alt="" />
        ) : (
          <span>{initialsForName(resident.name)}</span>
        )}
      </div>

      <div className="RowPrimary">
        <p className="RowName">
          {segments.map((s, idx) =>
            s.match ? (
              <mark className="MatchMark" key={idx}>
                {s.text}
              </mark>
            ) : (
              <span key={idx}>{s.text}</span>
            )
          )}
        </p>
        <p className="RowSecondary">
          Unit {resident.unit} • Age {resident.age}
        </p>
      </div>

      <div className="RowRight" aria-hidden="true">
        <span className="Pill">{resident.unit}</span>
      </div>
    </button>
  );
});
