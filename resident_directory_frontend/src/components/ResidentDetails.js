import React from "react";

// PUBLIC_INTERFACE
export function ResidentDetails({ resident }) {
  /** Shows resident details for the selected resident. */
  if (!resident) {
    return (
      <div className="DetailsBody" role="status" aria-live="polite">
        <p className="EmptyTitle">Select a resident</p>
        <p className="EmptyText">Choose a resident from the list to view details.</p>
      </div>
    );
  }

  return (
    <div className="DetailsBody">
      <div className="DetailsTop">
        <div className="Avatar" aria-hidden="true">
          {resident.avatarUrl ? <img src={resident.avatarUrl} alt="" /> : <span>{initials(resident.name)}</span>}
        </div>
        <div style={{ minWidth: 0 }}>
          <h3 className="DetailsName">{resident.name}</h3>
          <p className="DetailsMeta">
            Unit {resident.unit} • Age {resident.age}
          </p>
        </div>
      </div>

      <div className="DetailsGrid" role="group" aria-label="Resident contact information">
        <div className="KV">
          <div className="K">Unit</div>
          <div className="V">{resident.unit}</div>
        </div>
        <div className="KV">
          <div className="K">Age</div>
          <div className="V">{resident.age}</div>
        </div>
        <div className="KV">
          <div className="K">Phone</div>
          <div className="V">
            <a className="Link" href={`tel:${resident.phone.replace(/[^\d+]/g, "")}`}>
              {resident.phone}
            </a>
          </div>
        </div>
        <div className="KV">
          <div className="K">Email</div>
          <div className="V">
            <a className="Link" href={`mailto:${resident.email}`}>
              {resident.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function initials(name) {
  const parts = (name ?? "")
    .split(" ")
    .map((p) => p.trim())
    .filter(Boolean);
  const a = parts[0]?.[0] ?? "?";
  const b = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (a + b).toUpperCase();
}
