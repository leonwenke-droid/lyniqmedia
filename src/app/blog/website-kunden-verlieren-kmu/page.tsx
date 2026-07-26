import PageShell from "@/components/PageShell";
import { LINKEDIN_URL } from "@/lib/social-links";
import type { Metadata } from "next";
import WebsiteKundenVerlierenArticle from "./WebsiteKundenVerlierenArticle";

const TITLE = "Website kostet Kunden? 5 Anzeichen für KMU | LYNIQ";
const DESCRIPTION =
  "5 Anzeichen, dass Ihre Website Kunden kostet – typische KMU-Probleme in Ostfriesland und konkrete Fixes für Kontakt & Erreichbarkeit.";
const URL = "https://lyniqmedia.com/blog/website-kunden-verlieren-kmu";
const DATE = "2026-07-23";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    publishedTime: DATE,
    authors: ["Leon Wenke"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "5 Anzeichen, dass Ihre Website Kunden kostet – und wie KMU in Ostfriesland das beheben",
  description: DESCRIPTION,
  datePublished: DATE,
  author: {
    "@type": "Person",
    name: "Leon Wenke",
    url: LINKEDIN_URL,
    sameAs: [LINKEDIN_URL],
  },
  publisher: {
    "@type": "Organization",
    name: "LYNIQ",
    url: "https://lyniqmedia.com",
  },
  mainEntityOfPage: URL,
  keywords:
    "Website KMU, Kunden verlieren, Ostfriesland, Kontaktformular, tel-Link, Erreichbarkeit",
};

export default function WebsiteKundenVerlierenKmuPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ background: "#060d18", minHeight: "100vh" }}>
        <WebsiteKundenVerlierenArticle />
      </div>
    </PageShell>
  );
}
