"use client";

import { useEffect, useMemo, useState } from "react";
import { DesktopIcon } from "@/components/DesktopIcon";
import { Window } from "@/components/Window";
import { ProfileWindow } from "@/components/windows/ProfileWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import { ResumeWindow } from "@/components/windows/ResumeWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";

type WindowType = "profile" | "resume" | "projects" | "contact";

type OpenFromRect = { left: number; top: number; width: number; height: number };

type AppWindow = {
  id: string;
  type: WindowType;
  z: number;

  // only used by projects windows (per-window!)
  openProjectId?: string | null;

  // only used on first mount to animate "open from icon"
  openFromRect?: OpenFromRect | null;
};

function makeId() {
  // good enough unique id for UI
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function ProjectsHeaderLeft({
  openProjectId,
  onBack,
}: {
  openProjectId: string | null;
  onBack: () => void;
}) {
  const [hover, setHover] = useState(false);

  if (!openProjectId) {
    return <span style={{ fontSize: 14 }}>Projects</span>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
      <button
        onPointerDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        onClick={(e) => {
          e.stopPropagation();
          onBack();
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: 24,
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: hover ? "rgba(201,164,255,0.5)" : "transparent",
          border: "none",
          borderRadius: 4,
          color: "white",
          fontSize: 14,
          cursor: "pointer",
          transition: "background-color 160ms ease-out",
          padding: 0,
          lineHeight: 1,
        }}
        aria-label="Back to Projects"
        title="Back"
      >
        ←
      </button>

      <span
        style={{
          fontSize: 14,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        Projects / {openProjectId}
      </span>
    </div>
  );
}

export default function Home() {
  const [windows, setWindows] = useState<AppWindow[]>(() => [
    // Open profile by default as its own window instance
    { id: makeId(), type: "profile", z: 1 },
  ]);

  const focusWindow = (id: string) => {
    setWindows((prev) => {
      const current = prev.find((w) => w.id === id);
      if (!current) return prev;

      const top = prev.reduce((m, w) => Math.max(m, w.z), 0);
      if (current.z === top) return prev;

      return prev.map((w) => (w.id === id ? { ...w, z: top + 1 } : w));
    });
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const openOrFocusWindow = (type: WindowType, fromRect?: OpenFromRect) => {
    setWindows((prev) => {
      const top = prev.reduce((m, w) => Math.max(m, w.z), 0);
  
      // 1) If same type exists → bring to front
      const existing = prev.find((w) => w.type === type);
      if (existing) {
        // HUOM: ei kosketa openFromRectia (ei “avaa uudestaan”), vain fokus
        if (existing.z === top) return prev;
        return prev.map((w) => (w.id === existing.id ? { ...w, z: top + 1 } : w));
      }
  
      // 2) Create new window
      const base: AppWindow = {
        id: makeId(),
        type,
        z: top + 1,
        openFromRect: fromRect ?? null,
      };
      if (type === "projects") base.openProjectId = null;
  
      return [...prev, base];
    });
  };

  const setProjectsProjectId = (winId: string, projectId: string | null) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === winId ? { ...w, openProjectId: projectId } : w
      )
    );
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;

      setWindows((prev) => {
        if (prev.length === 0) return prev;

        const top = prev.reduce(
          (a, b) => (b.z > a.z ? b : a),
          prev[0]
        );

        return prev.filter((w) => w.id !== top.id);
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAF6EA",
        backgroundImage: "url('/rectangle_light.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "24px 24px",
        cursor: "url('/cursor.png') 0 0, auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 24,
          top: 24,
          display: "flex",
          gap: 32,
          alignItems: "flex-start",
          zIndex: 10,
        }}
      >
        {/* COLUMN 1 - LEFT ICONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <DesktopIcon
            label="Profile"
            icon="/folder.png"
            onOpen={(r) => openOrFocusWindow("profile", r)}
          />
          <DesktopIcon
            label="Resume"
            icon="/folder.png"
            onOpen={(r) => openOrFocusWindow("resume", r)}
          />
          <DesktopIcon
            label="Projects"
            icon="/folder.png"
            onOpen={(r) => openOrFocusWindow("projects", r)}
          />
        </div>

        {/* COLUMN 2 - RIGHT ICONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <DesktopIcon label="Secrets" icon="/folder.png" onOpen={() => {}} />
          <DesktopIcon
            label="Contact"
            icon="/envelope.png"
            onOpen={(r) => openOrFocusWindow("contact", r)}
          />
        </div>
      </div>

      {/* DESKTOP CENTER TEXT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          pointerEvents: "none",
          userSelect: "none",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            transform: "translateY(-10%)",
          }}
        >
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              letterSpacing: -3,
              color: "rgba(247, 199, 227, 1)",
              lineHeight: 1,
            }}
          >
            Rosa Ämmälä
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "rgba(247, 199, 227, 1)",
            }}
          >
            software developer • portfolio
          </div>
        </div>
      </div>

      {/* WINDOWS (multiple) */}
      {windows
        .slice()
        .sort((a, b) => a.z - b.z)
        .map((w) => {
          if (w.type === "profile") {
            return (
              <Window
                key={w.id}
                title="Profile"
                zIndex={30 + w.z}
                onFocus={() => focusWindow(w.id)}
                onClose={() => closeWindow(w.id)}
                openFromRect={w.openFromRect ?? null}
              >
                <ProfileWindow />
              </Window>
            );
          }

          if (w.type === "resume") {
            return (
              <Window
                key={w.id}
                title="Resume"
                zIndex={30 + w.z}
                onFocus={() => focusWindow(w.id)}
                onClose={() => closeWindow(w.id)}
                openFromRect={w.openFromRect ?? null}
              >
                <ResumeWindow />
              </Window>
            );
          }

          if (w.type === "contact") {
            return (
              <Window
                key={w.id}
                title="Contact"
                zIndex={30 + w.z}
                onFocus={() => focusWindow(w.id)}
                onClose={() => closeWindow(w.id)}
                openFromRect={w.openFromRect ?? null}
              >
                <ContactWindow />
              </Window>
            );
          }

          // Projects (per-window openProjectId + header back)
          const openProjectId = w.openProjectId ?? null;

          return (
            <Window
              key={w.id}
              title="Projects"
              zIndex={30 + w.z}
              onFocus={() => focusWindow(w.id)}
              onClose={() => closeWindow(w.id)}
              openFromRect={w.openFromRect ?? null}
              headerLeft={
                <ProjectsHeaderLeft
                  openProjectId={openProjectId}
                  onBack={() => setProjectsProjectId(w.id, null)}
                />
              }
            >
              <ProjectsWindow
                openProjectId={openProjectId}
                onOpenProject={(id) => setProjectsProjectId(w.id, id)}
                onBack={() => setProjectsProjectId(w.id, null)}
              />
            </Window>
          );
        })}
    </main>
  );
}
