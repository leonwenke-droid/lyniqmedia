import { SOCIAL_LINKS } from "@/lib/social-links";
import type { CSSProperties } from "react";

type SocialLinksProps = {
  style?: CSSProperties;
};

const linkStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "JetBrains Mono, monospace",
  fontSize: "10px",
  letterSpacing: "1.5px",
  color: "rgba(245,249,255,0.65)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

const disabledStyle: CSSProperties = {
  ...linkStyle,
  color: "rgba(245,249,255,0.35)",
  opacity: 0.65,
  cursor: "default",
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
        {SOCIAL_LINKS.map((item) => {
          if (item.comingSoon || !item.href) {
            return (
              <div key={item.name} aria-disabled style={disabledStyle}>
                <span>{item.name}</span>
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
            );
          }

          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
