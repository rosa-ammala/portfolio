"use client";

import { useState } from "react";

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        gap: 12,
        padding: "10px 0",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        fontSize: 14,
      }}
    >
      <span style={{ opacity: 0.75, padding: "4px 6px", }}>{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "4px 6px",
            borderRadius: 4,
            backgroundColor: hovered
              ? "rgba(247, 199, 227, 1)"
              : "transparent",
            transition: "background-color 160ms ease-out",
          }}
        >
          {value}
        </a>
      ) : (
        <span style={{padding: "4px 6px",}}>{value}</span>
      )}
    </div>
  );
}

export function ContactWindow() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ margin: "0 0 8px 0", fontSize: 18, color: "rgba(118, 71, 184, 1)" }}>Contact</h2>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <ContactRow label="Email" value="rosa.ammala@gmail.com" />
        {/* <ContactRow label="GitHub" value="github.com/username" href="https://github.com/username" /> */}
        <ContactRow label="LinkedIn" value="linkedin.com/in/rosa-ämmälä-86b1b922b" href="https://www.linkedin.com/in/rosa-ämmälä-86b1b922b" />
        <ContactRow label="Location" value="Jyväskylä, FI" />
      </div>

      <p style={{ margin: "14px 0 0 0", fontSize: 12, opacity: 0.7 }}>
        (Ps. I&apos;m open to relocate!)
      </p>
    </div>
  );
}
