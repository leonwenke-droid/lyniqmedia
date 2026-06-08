import PageShell from "@/components/PageShell";
import { NotFoundScreen } from "@/components/ui/not-found-2";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "404 — Seite nicht gefunden | LYNIQ" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageShell>
      <h1
        style={{
          fontFamily: "Sora, sans-serif",
          fontSize: "clamp(28px, 5vw, 48px)",
          color: "#f5f9ff",
          fontWeight: 700,
          margin: "0 0 16px",
          textAlign: "center",
          paddingTop: "2rem",
        }}
      >
        Seite nicht gefunden
      </h1>
      <NotFoundScreen />
    </PageShell>
  );
}
