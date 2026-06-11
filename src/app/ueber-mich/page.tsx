import type { Metadata } from "next";
import HomeAnchorLink from "@/components/HomeAnchorLink";
import PageShell from "@/components/PageShell";
import { LINKEDIN_URL } from "@/lib/social-links";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über mich — Leon Wenke",
  description:
    "Leon Wenke, 19, Gründer von LYNIQ. KI-Softwareentwickler aus Ostfriesland. Digitale Produkte und KI-Lösungen für KMU.",
  alternates: { canonical: "https://lyniqmedia.com/ueber-mich" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leon Wenke",
  jobTitle: "Gründer & KI-Softwareentwickler",
  affiliation: {
    "@type": "Organization",
    name: "LYNIQ",
    url: "https://lyniqmedia.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alte Poststraße 17a",
    addressLocality: "Holtland",
    addressRegion: "Niedersachsen",
    postalCode: "26835",
    addressCountry: "DE",
  },
  email: "info@lyniqmedia.com",
  telephone: "+4915175007219",
  url: "https://lyniqmedia.com",
  sameAs: [LINKEDIN_URL],
  knowsAbout: [
    "Künstliche Intelligenz",
    "Softwareentwicklung",
    "KMU Digitalisierung",
    "Next.js",
    "Supabase",
  ],
};

export default function UeberMich() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        style={{
          minHeight: "100vh",
          padding: "140px 56px 80px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div style={{ width: "32px", height: "1px", background: "#00c2cb" }} />
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#00c2cb",
              textTransform: "uppercase",
            }}
          >
            Über mich
          </span>
        </div>

        <h1
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "800",
            color: "#f5f9ff",
            letterSpacing: "-0.04em",
            lineHeight: "1",
            marginBottom: "16px",
          }}
        >
          Leon Wenke
        </h1>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#00c2cb",
            marginBottom: "48px",
          }}
        >
          {"// Gründer · LYNIQ · Holtland, Ostfriesland"}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            marginBottom: "64px",
          }}
        >
          {[
            { label: "Alter", value: "19" },
            { label: "Projekte", value: "9+" },
            { label: "MVP-Zeit", value: "1 Woche" },
            { label: "Standort", value: "Alte Poststraße 17a, Holtland" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "rgba(10,21,37,0.8)",
                border: "0.5px solid rgba(0,194,203,0.1)",
                borderRadius: "8px",
                padding: "20px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "9px",
                  color: "rgba(0,194,203,0.5)",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#f5f9ff",
                }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {[
          {
            label: "// WER ICH BIN",
            text: "Du bekommst keinen Agentur-Account-Manager der dein Projekt delegiert. Du arbeitest direkt mit dem Entwickler — Leon Wenke, 19, Solo-Founder aus Leer in Ostfriesland. Ich entwickle individuelle KI-Software und digitale Produkte für KMU, die schnelle Ergebnisse brauchen ohne monatelange Agentur-Prozesse.",
          },
          {
            label: "// WAS MICH ANTREIBT",
            text: "KMU stecken zwischen zwei schlechten Optionen: teure Agenturen die Monate brauchen, oder generische No-Code-Tools die nicht passen. Ich schließe diese Lücke. Individuelle Lösung, in einer Woche geliefert, zu einem Preis der für ein mittelständisches Unternehmen Sinn macht.",
          },
          {
            label: "// WIE ICH ARBEITE",
            text: "Kein Overhead, kein Outsourcing, keine Überraschungen. Vom ersten Gespräch bis zum Launch arbeite ich persönlich an deinem Projekt. Du siehst täglich Fortschritt. MVP in einer Woche ist kein Versprechen — es ist mein nachgewiesener Standard.",
          },
        ].map((section) => (
          <div
            key={section.label}
            style={{
              background: "rgba(10,21,37,0.6)",
              border: "0.5px solid rgba(0,194,203,0.08)",
              borderRadius: "8px",
              padding: "28px 32px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                color: "#00c2cb",
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              {section.label}
            </div>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "16px",
                fontWeight: "300",
                color: "rgba(245,249,255,0.7)",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              {section.text}
            </p>
          </div>
        ))}

        <div
          style={{
            background: "rgba(10,21,37,0.6)",
            border: "0.5px solid rgba(0,194,203,0.08)",
            borderRadius: "8px",
            padding: "28px 32px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              color: "#00c2cb",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            {"// TECH STACK"}
          </div>
          <ul
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              color: "rgba(245,249,255,0.7)",
              lineHeight: 1.8,
              margin: 0,
              paddingLeft: "20px",
            }}
          >
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Supabase",
              "Anthropic API",
              "OpenAI",
              "n8n",
              "Vercel",
              "Tailwind CSS",
              "Framer Motion",
            ].map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div
          style={{
            marginTop: "48px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <HomeAnchorLink
            sectionId="kontakt"
            style={{
              background: "#00c2cb",
              color: "#060d18",
              fontFamily: "Sora, sans-serif",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px",
              padding: "14px 32px",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            Kontakt aufnehmen →
          </HomeAnchorLink>
          <Link
            href="/#projekte"
            style={{
              border: "0.5px solid rgba(245,249,255,0.15)",
              color: "rgba(245,249,255,0.6)",
              fontFamily: "Sora, sans-serif",
              fontSize: "13px",
              padding: "14px 32px",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            Projekte ansehen
          </Link>
          <Link
            href="/visitenkarte"
            style={{
              border: "0.5px solid rgba(245,249,255,0.15)",
              color: "rgba(245,249,255,0.6)",
              fontFamily: "Sora, sans-serif",
              fontSize: "13px",
              padding: "14px 32px",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            Digitale Visitenkarte
          </Link>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "0.5px solid rgba(245,249,255,0.15)",
              color: "rgba(245,249,255,0.6)",
              fontFamily: "Sora, sans-serif",
              fontSize: "13px",
              padding: "14px 32px",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            LinkedIn →
          </a>
        </div>
      </main>
    </PageShell>
  );
}
