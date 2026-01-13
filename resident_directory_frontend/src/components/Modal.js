import React, { useEffect, useMemo, useRef } from "react";

function getFocusableElements(container) {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
}

// PUBLIC_INTERFACE
export function Modal({ title, isOpen, onClose, children }) {
  /**
   * Accessible modal:
   * - role="dialog" aria-modal
   * - ESC closes
   * - focus trap inside
   * - returns focus to trigger via parent responsibility (we store last focused element)
   */
  const dialogRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const titleId = useMemo(() => `modal-title-${Math.random().toString(16).slice(2)}`, []);

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedRef.current = document.activeElement;

    const dialogEl = dialogRef.current;
    const focusables = getFocusableElements(dialogEl);
    const toFocus = focusables[0] ?? dialogEl;
    toFocus.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const els = getFocusableElements(dialogEl);
      if (els.length === 0) return;

      const first = els[0];
      const last = els[els.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // restore focus
      const prev = lastFocusedRef.current;
      if (prev && prev.focus) prev.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="ModalOverlay"
      role="presentation"
      onMouseDown={(e) => {
        // close when clicking on overlay, not on dialog content
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="Surface Modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
        tabIndex={-1}
      >
        <div className="SurfaceHeader">
          <div className="ModalHeaderRow">
            <h2 className="SurfaceTitle" id={titleId}>
              {title}
            </h2>
            <button className="IconButton" type="button" onClick={onClose} aria-label="Close details">
              ✕
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
