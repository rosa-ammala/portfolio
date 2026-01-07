"use client";

import { useState } from "react";

function ToolTag({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "primary" | "default";
}) {
  const [hover, setHover] = useState(false);

  const stylesByVariant = {
    primary: {
      border: "1px solid rgba(124, 58, 237, 0.55)",
      background: hover ? "rgba(247, 199, 227, 1)" : "rgba(253, 251, 247, 1)",
      fontWeight: 700,
    },
    default: {
      border: "1px solid rgba(0,0,0,0.14)",
      background: hover ? "rgba(247, 199, 227, 1)" : "rgba(253, 251, 247, 1)",
      fontWeight: 500,
    },
  } as const;

  const v = stylesByVariant[variant];

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: 12,
        padding: "6px 10px",
        borderRadius: 999,
        letterSpacing: 0.2,
        transition: "background-color 160ms ease-out, transform 160ms ease-out",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        cursor: "inherit",
        ...v,
      }}
    >
      {label}
    </span>
  );
}

function ToolGroup({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.6 }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 12, opacity: 0.7, lineHeight: 1.3 }}>
            {subtitle}
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{children}</div>
    </div>
  );
}

type ProjectLink = { label: string; href: string };
type ProjectImage = { src: string; alt: string };

type Project = {
  id: string;
  name: string;
  year?: string;
  stack: {
    core: string[];
    other: string[];
  };
  description: string;
  highlights?: string[];
  whatIDid?: string[];
  links?: ProjectLink[];
  images?: ProjectImage[];
};

const PROJECTS: Project[] = [
  {
    id: "portfolio",
    name: "Portfolio OS",
    year: "2026",
    stack: {
      core: ["Next.js", "TypeScript", ],
      other: ["HTML5", "Inline styles", "Component patterns", "Vercel"],
    },
    description:
      "A desktop-style portfolio that mimics an operating system UI. The goal was to create a playful experience while keeping the content easy to browse.",
    highlights: [
      "Desktop-style movable window system with shared Window component",
      "Scrollable window content with responsive size and viewport clamping",
      "Icon-based desktop navigation with single-instance windows and focus handling",
      "Projects flow designed to scale: list view → per-window project details",
    ],
    whatIDid: [
      "Designed the desktop-like UI concept and visual style",
      "Built reusable window and icon components with per-window state",
      "Implemented window movement, layering (z-index), focus, and Esc-to-close behavior",
      "Handled responsive edge cases (viewport resize, content size changes)",
      "Structured projects to support images, links, and detail views",
      "Deployed the app to Vercel",
    ],
    links: [
      //{ label: "Live site", href: "#" },
      { label: "GitHub", href: "https://github.com/rosa-ammala/portfolio" },
    ],
    images: [
      { src: "/portfolio.png", alt: "Profile view" },
    ],
  },
];

function LinkButton({ href, label }: { href: string; label: string }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 10px",
        borderRadius: 10,
        border: "1px solid rgba(0,0,0,0.14)",
        background: hover ? "rgba(247, 199, 227, 1)" : "rgba(253, 251, 247, 1)",
        textDecoration: "none",
        color: "inherit",
        fontSize: 13,
        fontWeight: 600,
        cursor: "inherit",
        transition: "background-color 160ms ease-out, transform 160ms ease-out",
        transform: hover ? "translateY(-1px)" : "translateY(0)",
      }}
    >
      {label} <span style={{ opacity: 0.7 }}>↗</span>
    </a>
  );
}

function ProjectListItem({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textAlign: "left",
        border: "1px solid rgba(0,0,0,0.12)",
        background: hover
          ? "rgba(247, 199, 227, 1)"
          : "rgba(253, 251, 247, 1)",
        padding: "12px 12px",
        borderRadius: 10,
        cursor: "inherit",
        transition: "background-color 160ms ease-out, transform 160ms ease-out",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "baseline",
        }}
      >
        <strong style={{ fontSize: 14 }}>{project.name}</strong>
        {project.year && (
          <span style={{ fontSize: 12, opacity: 0.65 }}>{project.year}</span>
        )}
      </div>

      <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
        {project.stack.core.join(" • ")}
        {project.stack.other.length ? ` • ${project.stack.other.join(" • ")}` : ""}
      </div>
    </button>
  );
}


export function ProjectsWindow({
  openProjectId,
  onOpenProject,
}: {
  openProjectId: string | null;
  onOpenProject: (id: string) => void;
  onBack?: () => void;
}) {
  const selected = openProjectId
    ? PROJECTS.find((p) => p.id === openProjectId) ?? null
    : null;

  if (!selected) {
    // LIST VIEW
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <p style={{ margin: 0, fontSize: 13, opacity: 0.85, lineHeight: 1.4 }}>
          Open a project to view details, screenshots, and links.
        </p>

        {PROJECTS.map((p) => (
          <ProjectListItem
            key={p.id}
            project={p}
            onOpen={() => onOpenProject(p.id)}
          />
        ))}
      </div>
    );
  }

  // DETAIL VIEW
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Intro */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <h2 style={{ margin: 0, fontSize: 18, color: "rgba(118, 71, 184, 1)" }}>{selected.name}</h2>
          {selected.year && (
            <span style={{ fontSize: 12, opacity: 0.65 }}>{selected.year}</span>
          )}
        </div>

        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>
          {selected.description}
        </p>

        {/* Links */}
        {selected.links?.length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {selected.links.map((l) => (
              <LinkButton key={l.label} href={l.href} label={l.label} />
            ))}
          </div>
        ) : null}
      </div>

      {/* Tech stack with ToolTags */}
      <ToolGroup title="Tech stack" subtitle="The main tools used in this project.">
        {selected.stack.core.map((t) => (
          <ToolTag key={t} label={t} variant="primary" />
        ))}
        {selected.stack.other.map((t) => (
          <ToolTag key={t} label={t} variant="default" />
        ))}
      </ToolGroup>

      {/* Highlights */}
      {selected.highlights?.length ? (
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 6 
          }}
        >
          <div 
            style={{ 
              fontSize: 12, 
              fontWeight: 700, 
              letterSpacing: 0.6 
            }}
          >
            Highlights
          </div>
          <ul 
            style={{ 
              margin: 0, 
              paddingLeft: 18, 
              fontSize: 14, 
              lineHeight: 1.5,
              listStyleType: "disc",
              listStylePosition: "inside"
            }}
          >
            {selected.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* What I did */}
      {selected.whatIDid?.length ? (
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 6 
          }}
        >
          <div 
            style={{ 
              fontSize: 12, 
              fontWeight: 700, 
              letterSpacing: 0.6 
            }}
          >
            What I did
          </div>
          <ul 
            style={{ 
              margin: 0, 
              paddingLeft: 18, 
              fontSize: 14, 
              lineHeight: 1.5,
              listStyleType: "disc",
              listStylePosition: "inside"
            }}
          >
            {selected.whatIDid.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Images / gallery placeholder */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.6 }}>
          Screenshots
        </div>

        {selected.images?.length ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
            }}
          >
            {selected.images.map((img) => (
              <div
                key={img.src}
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.12)",
                  background: "rgba(255,255,255,0.35)",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  style={{ 
                    width: "100%", 
                    height: "auto", 
                    objectFit: "cover", 
                    display: "block" 
                  }}
                />
                <div style={{ fontSize: 12, opacity: 0.75, padding: "8px 10px" }}>
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              borderRadius: 12,
              padding: 12,
              border: "1px dashed rgba(0,0,0,0.18)",
              background: "rgba(255,255,255,0.25)",
              fontSize: 13,
              opacity: 0.8,
              lineHeight: 1.4,
            }}
          >
            Add project screenshots here later (supports multiple images).
          </div>
        )}
      </div>
    </div>
  );
}
