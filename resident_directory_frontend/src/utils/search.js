/**
 * Utilities for case-insensitive search and highlighting.
 */

// PUBLIC_INTERFACE
export function normalizeQuery(q) {
  /** Normalize a user query for case-insensitive matching. */
  return (q ?? "").trim().toLowerCase();
}

// PUBLIC_INTERFACE
export function matchName(name, query) {
  /** Returns true if name contains the query (case-insensitive). */
  const q = normalizeQuery(query);
  if (!q) return true;
  return (name ?? "").toLowerCase().includes(q);
}

// PUBLIC_INTERFACE
export function highlightMatch(text, query) {
  /**
   * Returns an array of segments for rendering, with {text, match} flags.
   * This avoids `dangerouslySetInnerHTML` and keeps rendering safe.
   */
  const q = normalizeQuery(query);
  const t = text ?? "";
  if (!q) return [{ text: t, match: false }];

  const lower = t.toLowerCase();
  const idx = lower.indexOf(q);
  if (idx === -1) return [{ text: t, match: false }];

  const before = t.slice(0, idx);
  const mid = t.slice(idx, idx + q.length);
  const after = t.slice(idx + q.length);

  const segments = [];
  if (before) segments.push({ text: before, match: false });
  if (mid) segments.push({ text: mid, match: true });
  if (after) segments.push({ text: after, match: false });
  return segments;
}
