import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LYNIQ — KI-Software für den Mittelstand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#060d18",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,194,203,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(to right, transparent, #00c2cb, transparent)",
            display: "flex",
          }}
        />

        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "18px",
            fontWeight: "800",
            color: "#f5f9ff",
            letterSpacing: "4px",
            marginBottom: "48px",
          }}
        >
          LYNIQ
        </div>

        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "72px",
            fontWeight: "800",
            color: "#f5f9ff",
            letterSpacing: "-2px",
            lineHeight: "1.0",
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          KI-Software für den Mittelstand.
        </div>

        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "22px",
            fontWeight: "300",
            color: "rgba(245,249,255,0.5)",
            marginBottom: "48px",
          }}
        >
          MVP in einer Woche · DSGVO-konform · Server in Deutschland
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {["KI-Software", "Web & Apps", "Automatisierung", "MVPs"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  fontFamily: "monospace",
                  fontSize: "13px",
                  color: "rgba(0,194,203,0.7)",
                  border: "1px solid rgba(0,194,203,0.2)",
                  borderRadius: "4px",
                  padding: "6px 14px",
                  display: "flex",
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontFamily: "monospace",
            fontSize: "14px",
            color: "rgba(245,249,255,0.2)",
          }}
        >
          lyniqmedia.com
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(to right, transparent, rgba(0,194,203,0.4), transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
