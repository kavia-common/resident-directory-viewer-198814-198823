import { useEffect, useState } from "react";

// PUBLIC_INTERFACE
export function useMediaQuery(query) {
  /** Subscribe to a media query and return true/false. */
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (!window.matchMedia) return;
    const mql = window.matchMedia(query);

    const handler = (e) => setMatches(e.matches);
    setMatches(mql.matches);

    // Safari fallback
    if (mql.addEventListener) mql.addEventListener("change", handler);
    else mql.addListener(handler);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handler);
      else mql.removeListener(handler);
    };
  }, [query]);

  return matches;
}
