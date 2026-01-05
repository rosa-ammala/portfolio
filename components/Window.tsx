import { useState } from "react";

export function Window({
  title,
  onClose,
  children,
  headerLeft,
}: {
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
  headerLeft?: React.ReactNode;
}) {
  const [closeHover, setCloseHover] = useState(false);
  
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 640,
        maxWidth: "calc(100vw - 32px)",
        maxHeight: "calc(100vh - 32px)",
        backgroundColor: "rgba(253, 251, 247, 1)",
        border: "1px solid rgba(118, 71, 184, 1)",
        borderRadius: 6,
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
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
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          {headerLeft ? (
            headerLeft
          ) : (
            <span style={{ fontSize: 14 }}>{title}</span>
          )}
        </div>
        <button
          onClick={onClose}
          onMouseEnter={() => setCloseHover(true)}
          onMouseLeave={() => setCloseHover(false)}
          style={{
            width: 24,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: closeHover
              ? "rgba(201,164,255,0.5)"
              : "transparent",
            border: "none",
            borderRadius: 4,
            color: "white",
            fontSize: 14,
            cursor: "inherit",
            transition: "background-color 160ms ease-out",
          }}
        >
          ✕
        </button>
      </div>

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
