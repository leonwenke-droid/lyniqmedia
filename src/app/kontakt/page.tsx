import Contact from "@/components/Contact";
import PageShell from "@/components/PageShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Projekt anfragen bei LYNIQ — kostenloses Erstgespräch für Websites, MVPs und KI-Integrationen für KMU.",
  alternates: { canonical: "https://lyniqmedia.com/kontakt" },
  robots: { index: true, follow: true },
};

export default function KontaktPage() {
  return (
    <PageShell>
      <h1
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
        }}
      >
        Kontakt — LYNIQ
      </h1>
      <Contact />
    </PageShell>
  );
}
