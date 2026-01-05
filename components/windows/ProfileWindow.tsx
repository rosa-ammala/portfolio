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
        transition: "background-color 160ms ease-out",
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

export function ProfileWindow() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* TOP: image + text */}
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        <img
          src="/me.jpg"
          alt="Portrait"
          draggable={false}
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            objectFit: "cover",
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h1 style={{ margin: 0, fontSize: 28, color: "rgba(118, 71, 184, 1)" }}>Rosa Ämmälä</h1>
          <h2 style={{ margin: 0, fontSize: 18 }}>
            Frontend & Software Developer
          </h2>

          <p style={{ margin: 0, lineHeight: 1.5, fontSize: 14 }}>
            I’m a curious and analytical problem-solver who enjoys building
            user-focused solutions and learning new technologies. I work
            independently with care and value clear communication and strong
            collaboration within a team.
          </p>
        </div>
      </div>

      {/* TOOLS */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <ToolGroup
          title="Core strengths"
          subtitle="Technologies I have the strongest experience with."
        >
          <ToolTag label="Angular" variant="primary" />
          <ToolTag label="TypeScript" variant="primary" />
          <ToolTag label="HTML5 + SCSS" variant="primary" />
          <ToolTag label="Figma" variant="primary" />
        </ToolGroup>

        <ToolGroup
          title="Other experience"
          subtitle="Other tools and technologies I have hands-on experience with."
        >
          <ToolTag label="Git version control" />
          <ToolTag label="AWS" />
          <ToolTag label="JavaScript" />
          <ToolTag label="React" />
        </ToolGroup>
      </div>
    </div>
  );
}
