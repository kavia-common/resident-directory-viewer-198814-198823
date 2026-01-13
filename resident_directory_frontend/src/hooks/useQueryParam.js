import { useCallback, useEffect, useState } from "react";

/**
 * Minimal query-param state helper that does not require react-router.
 * Uses History API to keep ?q= in sync.
 */

// PUBLIC_INTERFACE
export function useQueryParam(key, defaultValue = "") {
  /** Read/write a URL query param as React state (no router dependency). */
  const read = useCallback(() => {
    try {
      const url = new URL(window.location.href);
      return url.searchParams.get(key) ?? defaultValue;
    } catch {
      return defaultValue;
    }
  }, [key, defaultValue]);

  const [value, setValue] = useState(read);

  useEffect(() => {
    // Sync on back/forward navigation.
    const onPopState = () => setValue(read());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [read]);

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const current = url.searchParams.get(key) ?? "";
      const next = value ?? "";
      if (current === next) return;

      if (!next) url.searchParams.delete(key);
      else url.searchParams.set(key, next);

      window.history.replaceState({}, "", url.toString());
    } catch {
      // ignore
    }
  }, [key, value]);

  return [value, setValue];
}
