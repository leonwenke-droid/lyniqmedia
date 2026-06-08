import { ImageResponse } from "next/og";
import { projectData } from "@/data/project-content";
import { resolveProjectSlug } from "@/lib/project-slugs";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const slug = resolveProjectSlug(id);
  const name = slug ? (projectData[slug]?.name ?? "Projekt") : "Projekt";
  const pathSlug = slug ?? id;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#060d18",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(to right, transparent, #00c2cb, transparent)",
            display: "flex",
          }}
        />
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#00c2cb",
            letterSpacing: "3px",
            marginBottom: "24px",
          }}
        >
          LYNIQ · PORTFOLIO
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "80px",
            fontWeight: "800",
            color: "#f5f9ff",
            letterSpacing: "-2px",
            lineHeight: "1.0",
            marginBottom: "32px",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "22px",
            color: "rgba(245,249,255,0.4)",
          }}
        >
          lyniqmedia.com/projekte/{pathSlug}
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
