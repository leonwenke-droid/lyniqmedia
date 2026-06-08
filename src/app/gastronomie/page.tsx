import type { Metadata } from "next";
import HomeAnchorLink from "@/components/HomeAnchorLink";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Restaurant Website & Bestellsystem Ostfriesland — LYNIQ",
  description:
    "Individuelle Restaurant-Website mit Online-Bestellsystem, digitaler Speisekarte und Kassensystem-Integration für Gastronomen in Ostfriesland. Kein Lieferando, keine Provisionen. Entwickelt von LYNIQ.",
  alternates: { canonical: "https://lyniqmedia.com/gastronomie" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://lyniqmedia.com/#business",
      name: "LYNIQ",
      url: "https://lyniqmedia.com",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Ostfriesland, Niedersachsen",
      },
    },
    {
      "@type": "Service",
      name: "Restaurant Website & Online-Bestellsystem",
      serviceType: "Webentwicklung für Gastronomie",
      provider: { "@id": "https://lyniqmedia.com/#business" },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Ostfriesland" },
        { "@type": "AdministrativeArea", name: "Niedersachsen" },
      ],
      description:
        "Individuelle Restaurant-Website mit digitaler Speisekarte, eigenem Online-Bestellsystem und optionaler Kassensystem-Integration. Keine Lieferando-Provisionen, DSGVO-konform.",
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "799",
        description: "Website ab 799€ Setup, Bestellsystem inklusive",
      },
    },
  ],
};

const painPoints = [
  {
    title: "Lieferando nimmt bis zu 30% Provision pro Bestellung",
    text: "Jede Bestellung über eine Plattform kostet Marge — dauerhaft und ohne Alternative.",
  },
  {
    title: "Kein eigener Online-Auftritt = unsichtbar bei Google",
    text: "Gäste suchen online nach Restaurants in der Nähe. Ohne Website findest du sie nicht.",
  },
  {
    title: "Speisekarte nur auf Instagram = kein SEO, keine Kontrolle",
    text: "Social Media ist kein Ersatz für eine indexierbare Speisekarte und ein eigenes Bestellsystem.",
  },
];

const solutions = [
  "Eigene Website mit lokalem SEO für Ostfriesland und Niedersachsen",
  "Digitale Speisekarte die Google indexiert und auf allen Geräten funktioniert",
  "Eigenes Bestellsystem ohne Provision pro Bestellung",
  "SumUp-Kassenintegration optional — Bestellungen direkt ins Kassensystem",
  "DSGVO-konform, Server in Deutschland, volle Kontrolle über Daten und Preise",
];

const faqs = [
  {
    q: "Kann ich mein bestehendes Kassensystem anbinden?",
    a: "Ja — je nach System. SumUp lässt sich direkt integrieren, wie bei Burgerstation Leer. Andere Systeme prüfe ich im Erstgespräch und schlage die passende Anbindung vor.",
  },
  {
    q: "Was passiert wenn ich Änderungen an der Speisekarte brauche?",
    a: "Kleine Änderungen sind schnell umsetzbar. Mit optionalem Wartungspaket (49€/Monat) übernehme ich Updates, Hosting und technische Betreuung — du schickst mir die neuen Preise oder Gerichte, ich pflege sie ein.",
  },
  {
    q: "Wie lange dauert die Umsetzung?",
    a: "Eine vollständige Restaurant-Website mit Bestellsystem ist in der Regel innerhalb einer Woche live — abhängig vom Umfang der Speisekarte und gewünschten Funktionen.",
  },
];

const sectionLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "16px",
} as const;

const monoLabelStyle = {
  fontFamily: "JetBrains Mono, monospace",
  fontSize: "10px",
  letterSpacing: "3px",
  color: "#00c2cb",
  textTransform: "uppercase" as const,
};

const cardStyle = {
  background: "rgba(10,21,37,0.8)",
  border: "0.5px solid rgba(0,194,203,0.1)",
  borderRadius: "8px",
  padding: "28px 32px",
};

export default function GastronomiePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="m-0 w-full min-w-0 p-0">
        <Navigation />

        <section
          style={{
            padding: "160px 56px 100px",
            position: "relative",
            zIndex: 1,
            maxWidth: "900px",
          }}
        >
          <h1
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "#f5f9ff",
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            Dein Restaurant. Online. Ohne Lieferando.
          </h1>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              color: "rgba(245,249,255,0.55)",
              lineHeight: 1.75,
              marginBottom: "40px",
              maxWidth: "640px",
            }}
          >
            Website, digitale Speisekarte und eigenes Bestellsystem — ohne
            Provisionen, ohne Abhängigkeit. Fertig in einer Woche.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <HomeAnchorLink
              sectionId="kontakt"
              style={{
                background: "#00c2cb",
                color: "#060d18",
                fontFamily: "Sora, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "14px 32px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Jetzt anfragen →
            </HomeAnchorLink>
            <Link
              href="/projekte/burgerstation-leer"
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
              Beispiel ansehen
            </Link>
          </div>
        </section>

        <section style={{ padding: "100px 56px", position: "relative", zIndex: 1 }}>
          <div style={sectionLabelStyle}>
            <div style={{ width: "32px", height: "1px", background: "#00c2cb" }} />
            <span style={monoLabelStyle}>Das Problem</span>
          </div>
          <h2
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f5f9ff",
              letterSpacing: "-0.03em",
              marginBottom: "40px",
            }}
          >
            Warum viele Restaurants online verlieren
          </h2>
          <div className="gastro-pain-grid">
            {painPoints.map((item) => (
              <div key={item.title} style={cardStyle}>
                <h3
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#f5f9ff",
                    marginBottom: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "rgba(245,249,255,0.55)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "100px 56px", position: "relative", zIndex: 1 }}>
          <div style={sectionLabelStyle}>
            <div style={{ width: "32px", height: "1px", background: "#00c2cb" }} />
            <span style={monoLabelStyle}>Die Lösung</span>
          </div>
          <h2
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f5f9ff",
              letterSpacing: "-0.03em",
              marginBottom: "32px",
            }}
          >
            Was LYNIQ für dein Restaurant liefert
          </h2>
          <div style={{ ...cardStyle, maxWidth: "720px" }}>
            <ul
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "rgba(245,249,255,0.7)",
                lineHeight: 1.9,
                margin: 0,
                paddingLeft: "20px",
              }}
            >
              {solutions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section style={{ padding: "100px 56px", position: "relative", zIndex: 1 }}>
          <div style={sectionLabelStyle}>
            <div style={{ width: "32px", height: "1px", background: "#00c2cb" }} />
            <span style={monoLabelStyle}>Referenz</span>
          </div>
          <div style={{ ...cardStyle, maxWidth: "720px" }}>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "#00c2cb",
                marginBottom: "12px",
              }}
            >
              {"// REFERENZ"}
            </div>
            <h3
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f9ff",
                marginBottom: "12px",
              }}
            >
              Burgerstation Leer
            </h3>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "rgba(245,249,255,0.6)",
                lineHeight: 1.75,
                marginBottom: "16px",
              }}
            >
              Website, digitale Speisekarte und Online-Bestellsystem mit
              SumUp-Integration — in einer Woche gebaut. Eigener Lieferservice
              ohne Lieferando-Provisionen.
            </p>
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "1px",
                color: "rgba(245,249,255,0.25)",
                marginBottom: "24px",
              }}
            >
              React 19 · Vite · Tailwind v4 · SumUp
            </p>
            <Link
              href="/projekte/burgerstation-leer"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                letterSpacing: "2px",
                color: "#00c2cb",
                textDecoration: "none",
              }}
            >
              Projekt ansehen →
            </Link>
          </div>
        </section>

        <section style={{ padding: "100px 56px", position: "relative", zIndex: 1 }}>
          <div style={sectionLabelStyle}>
            <div style={{ width: "32px", height: "1px", background: "#00c2cb" }} />
            <span style={monoLabelStyle}>Preise</span>
          </div>
          <div style={{ ...cardStyle, maxWidth: "640px" }}>
            <p
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#f5f9ff",
                marginBottom: "24px",
                lineHeight: 1.4,
              }}
            >
              Website ab 799€ · Bestellsystem inklusive · keine monatlichen
              Provisionen
            </p>
            <HomeAnchorLink
              sectionId="kontakt"
              style={{
                background: "#00c2cb",
                color: "#060d18",
                fontFamily: "Sora, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
                padding: "14px 32px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Angebot anfragen →
            </HomeAnchorLink>
          </div>
        </section>

        <section style={{ padding: "100px 56px", position: "relative", zIndex: 1 }}>
          <div style={sectionLabelStyle}>
            <div style={{ width: "32px", height: "1px", background: "#00c2cb" }} />
            <span style={monoLabelStyle}>FAQ</span>
          </div>
          <h2
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f5f9ff",
              letterSpacing: "-0.03em",
              marginBottom: "32px",
            }}
          >
            Häufige Fragen
          </h2>
          <div className="faq-list" style={{ maxWidth: "800px" }}>
            {faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-summary">
                  <span className="faq-question">{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <BottomCta />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
