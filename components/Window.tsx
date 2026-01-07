"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";

export function Window({
  title,
  onClose,
  children,
  headerLeft,
  zIndex = 30,
  onFocus,
  width = 640,
  openFromRect,
}: {
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
  headerLeft?: React.ReactNode;
  zIndex?: number;
  onFocus?: () => void;
  width?: number;
  openFromRect?: { left: number; top: number; width: number; height: number } | null;
}) {
  const [closeHover, setCloseHover] = useState(false);

  const winRef = useRef<HTMLDivElement | null>(null);

  // null = center on mount (fresh open)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const [drag, setDrag] = useState<{
    active: boolean;
    pointerId: number | null;
    offsetX: number;
    offsetY: number;
  }>({ active: false, pointerId: null, offsetX: 0, offsetY: 0 });

  const [hasUserMoved, setHasUserMoved] = useState(false);

  const hasPlayedOpenAnim = useRef(false);
  const openAnimTimeoutRef = useRef<number | null>(null);

  const [openAnim, setOpenAnim] = useState<
    | {
        transform: string;
        opacity: number;
        transition: string;
        transformOrigin?: string;
      }
    | null
  >(null);

  const centerWindow = () => {
    const el = winRef.current;
    const w = el?.offsetWidth ?? width;
    const h = el?.offsetHeight ?? 420;

    const x = Math.max(16, Math.round(window.innerWidth / 2 - w / 2));
    const y = Math.max(16, Math.round(window.innerHeight / 2 - h / 2));
    setPos({ x, y });
  };

  useLayoutEffect(() => {
    if (pos === null) {
      requestAnimationFrame(centerWindow);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // "zoom from icon" open animation.
  // Plays only once per window instance.
  useLayoutEffect(() => {
    if (!openFromRect) return;
    if (hasPlayedOpenAnim.current) return;
    if (!pos) return;

    const el = winRef.current;
    if (!el) return;

    // Measure the final, positioned window.
    const finalRect = el.getBoundingClientRect();
    if (finalRect.width <= 0 || finalRect.height <= 0) return;

    // Anchor: ICON TOP-CENTER -> WINDOW TOP-CENTER
    const iconX = openFromRect.left + openFromRect.width / 2;
    const iconY = openFromRect.top;

    const winX = finalRect.left + finalRect.width / 2;
    const winY = finalRect.top;

    const dx = iconX - winX;
    const dy = iconY - winY;

    // Uniform scale + clamped small start (stays "tiny" longer)
    const base = Math.min(
      openFromRect.width / finalRect.width,
      openFromRect.height / finalRect.height
    );
    const s = Math.max(0.10, Math.min(0.22, base));

    hasPlayedOpenAnim.current = true;

    // Start in "from" state (no transition), then animate to identity.
    setOpenAnim({
      transform: `translate(${dx}px, ${dy}px) scale(${s})`,
      opacity: 0.85,
      transition: "none",
      transformOrigin: "top center",
    });

    let raf1 = 0;
    let raf2 = 0;

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setOpenAnim({
          transform: "translate(0px, 0px) scale(1)",
          opacity: 1,
          transition:
            "transform 420ms cubic-bezier(0.08, 0.85, 0.18, 1), opacity 260ms ease-out",
          transformOrigin: "top center",
        });

        if (openAnimTimeoutRef.current) window.clearTimeout(openAnimTimeoutRef.current);
        openAnimTimeoutRef.current = window.setTimeout(() => {
          setOpenAnim(null);
          openAnimTimeoutRef.current = null;
        }, 700);
      });
    });

    return () => {
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
      if (openAnimTimeoutRef.current) {
        window.clearTimeout(openAnimTimeoutRef.current);
        openAnimTimeoutRef.current = null;
      }
    };
  }, [openFromRect, pos]);

  // Clamp into viewport
  const clampIntoView = (opts?: { x?: boolean; y?: boolean }) => {
    const el = winRef.current;
    if (!el) return;

    const doX = opts?.x ?? false;
    const doY = opts?.y ?? true; // default: y

    const rect = el.getBoundingClientRect();
    const margin = 8;

    let dx = 0;
    let dy = 0;

    if (doX) {
      const minLeft = margin;
      const maxLeft = window.innerWidth - rect.width - margin;

      // If window wider than viewport, pin to margin
      const clampedLeft = Math.min(
        Math.max(rect.left, minLeft),
        Math.max(minLeft, maxLeft)
      );

      dx = clampedLeft - rect.left;
    }

    if (doY) {
      const minTop = margin;
      const maxTop = window.innerHeight - rect.height - margin;

      // If window taller than viewport, pin to margin
      const clampedTop = Math.min(
        Math.max(rect.top, minTop),
        Math.max(minTop, maxTop)
      );

      dy = clampedTop - rect.top;
    }

    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;

    setPos((p) => {
      if (!p) return p;
      return {
        x: doX ? Math.round(p.x + dx) : p.x,
        y: doY ? Math.round(p.y + dy) : p.y,
      };
    });
  };

  // Observe size changes: when content height changes, fix Y (and only Y)
  useEffect(() => {
    const el = winRef.current;
    if (!el) return;

    // ResizeObserver is supported in modern browsers; good for this case
    const ro = new ResizeObserver(() => {
      // We'll always clamp Y (safe), and it won't move if already fine.
      clampIntoView({ y: true, x: false });
    });

    ro.observe(el);

    return () => {
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Also clamp on viewport resize (only Y)
  useEffect(() => {
    const onResize = () => clampIntoView({ x: true, y: true });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startDrag = (e: React.PointerEvent) => {
    if (!winRef.current) return;

    onFocus?.();

    const rect = winRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setDrag({ active: true, pointerId: e.pointerId, offsetX, offsetY });

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const onDragMove = (e: React.PointerEvent) => {
    if (!drag.active) return;
    if (drag.pointerId !== e.pointerId) return;

    const el = winRef.current;
    const w = el?.offsetWidth ?? width;
    const h = el?.offsetHeight ?? 420;

    const xRaw = Math.round(e.clientX - drag.offsetX);
    const yRaw = Math.round(e.clientY - drag.offsetY);

    const margin = 8;

    // During dragging we still clamp both axes so user can’t lose the window.
    // This DOES move X during drag (intentionally).
    const minX = margin;
    const minY = margin;
    const maxX = window.innerWidth - w - margin;
    const maxY = window.innerHeight - h - margin;

    const x = Math.min(Math.max(xRaw, minX), Math.max(minX, maxX));
    const y = Math.min(Math.max(yRaw, minY), Math.max(minY, maxY));

    if (!hasUserMoved) setHasUserMoved(true);
    setPos({ x, y });
  };

  const stopDrag = (e: React.PointerEvent) => {
    if (!drag.active) return;
    if (drag.pointerId !== e.pointerId) return;

    setDrag({ active: false, pointerId: null, offsetX: 0, offsetY: 0 });
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div
      ref={winRef}
      onMouseDown={() => onFocus?.()}
      style={{
        position: "fixed",
        left: pos?.x ?? 16,
        top: pos?.y ?? 16,
        width,
        maxWidth: "calc(100vw - 32px)",
        maxHeight: "calc(100vh - 32px)",
        backgroundColor: "rgba(253, 251, 247, 1)",
        border: "1px solid rgba(118, 71, 184, 1)",
        borderRadius: 6,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        zIndex,
        userSelect: drag.active ? "none" : "auto",

        // prevents the "jump" before the open animation starts
        visibility: pos ? "visible" : "hidden",

        ...(openAnim
          ? {
              transform: openAnim.transform,
              opacity: openAnim.opacity,
              transition: openAnim.transition,
              transformOrigin: openAnim.transformOrigin,
              willChange: "transform, opacity",
            }
          : {}),
      }}
    >
      {/* HEADER (drag handle) */}
      <div
        onPointerDown={startDrag}
        onPointerMove={onDragMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        style={{
          backgroundColor: "rgba(118, 71, 184, 1)",
          color: "white",
          padding: "8px 12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
          flexShrink: 0,
          cursor: "grab",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          {headerLeft ? headerLeft : <span style={{ fontSize: 14 }}>{title}</span>}
        </div>

        <button
          onPointerDown={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          onMouseEnter={() => setCloseHover(true)}
          onMouseLeave={() => setCloseHover(false)}
          style={{
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: closeHover ? "rgba(201,164,255,0.5)" : "transparent",
            border: "none",
            borderRadius: 4,
            color: "white",
            fontSize: 14,
            cursor: "pointer",
            transition: "background-color 160ms ease-out",
          }}
        >
          ✕
        </button>
      </div>

      {/* CONTENT */}
      <div
        style={{
          padding: 24,
          flex: 1,
          minHeight: 300,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
