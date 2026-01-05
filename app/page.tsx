"use client";

import { useState } from "react";
import { DesktopIcon } from "@/components/DesktopIcon";
import { Window } from "@/components/Window";
import { ProfileWindow } from "@/components/windows/ProfileWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import { ResumeWindow } from "@/components/windows/ResumeWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";

type WindowType = null | "profile" | "resume" | "projects" | "contact";

export default function Home() {
  const [open, setOpen] = useState<WindowType>("profile");
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const [hover, setHover] = useState(false);

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <DesktopIcon
            label="Profile"
            icon="/folder.png"
            onOpen={() => setOpen("profile")}
          />
          <DesktopIcon
            label="Resume"
            icon="/folder.png"
            onOpen={() => setOpen("resume")}
          />
          <DesktopIcon
            label="Projects"
            icon="/folder.png"
            onOpen={() => setOpen("projects")}
          />
        </div>

        {/* COLUMN 2 - RIGHT ICONS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <DesktopIcon
            label="Secrets"
            icon="/folder.png"
            onOpen={() => {}}
          />
          <DesktopIcon
            label="Contact"
            icon="/envelope.png"
            onOpen={() => setOpen("contact")}
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

      {/* WINDOWS */}
      {open === "profile" && (
        <Window title="Profile" onClose={() => setOpen(null)}>
          <ProfileWindow />
        </Window>
      )}

      {open === "resume" && (
        <Window title="Resume" onClose={() => setOpen(null)}>
          <ResumeWindow />
        </Window>
      )}

      {open === "projects" && (
        <Window
          title="Projects"
          onClose={() => {
            setOpen(null);
            setOpenProjectId(null);
          }}
          headerLeft={
            openProjectId ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                <button
                  onClick={() => setOpenProjectId(null)}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  style={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: hover
                      ? "rgba(201,164,255,0.5)"
                      : "transparent",
                    border: "none",
                    borderRadius: 4,
                    color: "white",
                    fontSize: 14,
                    cursor: "inherit",
                    transition: "background-color 160ms ease-out",
                    padding: 0,
                    lineHeight: 1,
                  }}
                  aria-label="Back to Projects"
                  title="Back"
                >
                  ←
                </button>
      
                <span style={{ fontSize: 14, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Projects / {openProjectId}
                </span>
              </div>
            ) : (
              <span style={{ fontSize: 14 }}>Projects</span>
            )
          }
        >
          <ProjectsWindow
            openProjectId={openProjectId}
            onOpenProject={(id) => setOpenProjectId(id)}
            onBack={() => setOpenProjectId(null)}
          />
        </Window>
      )}

      {open === "contact" && (
        <Window title="Contact" onClose={() => setOpen(null)}>
          <ContactWindow />
        </Window>
      )}
    </main>
  );
}
