import { useRef, useState } from "react";

export function DesktopIcon({
  label,
  icon,
  onOpen,
}: {
  label: string;
  icon: string;
  onOpen: (fromRect?: { left: number; top: number; width: number; height: number }) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <button
      ref={btnRef}
      onClick={() => {
        const r = btnRef.current?.getBoundingClientRect();
        if (r) onOpen({ left: r.left, top: r.top, width: r.width, height: r.height });
        else onOpen();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 96,
        padding: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        background: "transparent",
        border: "none",
        cursor: "inherit",
      }}
    >
      <img
        src={icon}
        alt=""
        style={{
          width: 68,
          height: 68,
          userSelect: "none",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "transform 160ms ease-out",
        }}
        draggable={false}
      />
      <span style={{ fontSize: 12, textAlign: "center" }}>{label}</span>
    </button>
  );
}
