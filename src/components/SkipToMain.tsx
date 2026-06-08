"use client";

export default function SkipToMain() {
  return (
    <a
      href="#main-content"
      style={{
        position: "absolute",
        top: -40,
        left: 0,
        background: "#00c2cb",
        color: "#060d18",
        padding: "8px 16px",
        fontFamily: "DM Sans, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        zIndex: 9999,
        borderRadius: "0 0 8px 0",
        textDecoration: "none",
        transition: "top 0.2s",
      }}
      onFocus={(e) => {
        e.currentTarget.style.top = "0";
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = "-40px";
      }}
    >
      Zum Hauptinhalt springen
    </a>
  );
}
