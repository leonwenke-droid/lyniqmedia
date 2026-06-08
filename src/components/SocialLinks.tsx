import type { CSSProperties } from "react";

const SOCIAL_ITEMS = ["LinkedIn", "GitHub"] as const;

type SocialLinksProps = {
  style?: CSSProperties;
};

export default function SocialLinks({ style }: SocialLinksProps) {
  return (
    <div style={{ marginTop: "32px", ...style }}>
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "9px",
          letterSpacing: "2px",
          color: "#00c2cb",
          marginBottom: "12px",
        }}
      >
        {"// SOCIAL"}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {SOCIAL_ITEMS.map((name) => (
          <div
            key={name}
            aria-disabled
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px",
              letterSpacing: "1.5px",
              color: "rgba(245,249,255,0.35)",
              opacity: 0.65,
              cursor: "default",
            }}
          >
            <span>{name}</span>
            <span
              style={{
                fontSize: "8px",
                letterSpacing: "1px",
                color: "rgba(0,194,203,0.35)",
              }}
            >
              COMING SOON
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
