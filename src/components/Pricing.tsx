import HomeAnchorLink from "@/components/HomeAnchorLink";

const packages = [
  {
    number: "// 001",
    name: "Website",
    description:
      "Unternehmenswebsite, Speisekarte, Kontaktformular, Mobile-optimiert.",
    setup: "ab 799€",
    optional: "Optional: 49€/Monat Wartung & Hosting",
    recommended: false,
  },
  {
    number: "// 002",
    name: "MVP",
    description:
      "Funktionierendes digitales Produkt in einer Woche. Bestellsystem, Buchungsplattform, Dashboard, einfaches SaaS.",
    setup: "ab 1.500€",
    optional: null,
    recommended: true,
  },
  {
    number: "// 003",
    name: "KI-Integration",
    description:
      "KI-Layer für bestehende Prozesse oder neue Produkte. Chatbot, Voice Agent, Datenanalyse, Automatisierung.",
    setup: "ab 1.200€",
    optional: "+ ab 99€/Monat laufend",
    recommended: false,
  },
] as const;

export default function Pricing() {
  return (
    <section
      id="preise"
      style={{ padding: "100px 56px", position: "relative", zIndex: 1 }}
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
          Preise
        </span>
      </div>

      <h2
        style={{
          fontFamily: "Sora, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 700,
          color: "#f5f9ff",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "8px",
        }}
      >
        Transparente Pakete
      </h2>

      <p
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "15px",
          fontWeight: 300,
          color: "rgba(245,249,255,0.5)",
          marginBottom: "48px",
          lineHeight: 1.7,
          maxWidth: "560px",
        }}
      >
        Festpreise nach dem ersten Gespräch. Kein Stundenlohn, keine
        Überraschungen.
      </p>

      <div className="pricing-grid">
        {packages.map((pkg) => (
          <div
            key={pkg.number}
            className={`pricing-card${pkg.recommended ? " pricing-card--recommended" : ""}`}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "#00c2cb",
                marginBottom: "16px",
              }}
            >
              {pkg.number}
            </div>

            <h3
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#f5f9ff",
                marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}
            >
              {pkg.name}
            </h3>

            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(245,249,255,0.55)",
                lineHeight: 1.75,
                marginBottom: "24px",
                minHeight: "72px",
              }}
            >
              {pkg.description}
            </p>

            <div
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#f5f9ff",
                letterSpacing: "-0.02em",
                marginBottom: pkg.optional ? "8px" : "24px",
              }}
            >
              Setup: {pkg.setup}
            </div>

            {pkg.optional && (
              <p
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "rgba(245,249,255,0.4)",
                  marginBottom: "24px",
                }}
              >
                {pkg.optional}
              </p>
            )}

            <HomeAnchorLink
              sectionId="kontakt"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                color: "rgba(0,194,203,0.7)",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              className="pricing-card-cta"
            >
              Auf Anfrage starten →
            </HomeAnchorLink>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "9px",
          letterSpacing: "1px",
          color: "rgba(245,249,255,0.25)",
          marginTop: "32px",
        }}
      >
        {
          "// Alle Preise zzgl. MwSt. · Festpreise nach erstem Gespräch · Keine versteckten Kosten"
        }
      </p>
    </section>
  );
}
