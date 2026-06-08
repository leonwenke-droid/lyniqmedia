export default function Manifesto() {
  return (
    <section id="manifesto" className="manifesto-section">
      <div className="manifesto-container">
        <div
          className="manifesto-tag"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          <div style={{ width: "28px", height: "1px", background: "#00c2cb" }} />
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "3px",
              color: "#00c2cb",
            }}
          >
            MANIFESTO · 2026
          </span>
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(245,249,255,0.05)",
            }}
          />
        </div>

        <div className="manifesto-grid">
          <div>
            <h2
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 800,
                color: "#f5f9ff",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                margin: "0 0 28px",
              }}
            >
              Mittelstand verdient bessere Software{" "}
              <span style={{ color: "rgba(245,249,255,0.3)", fontWeight: 700 }}>
                als „Mittelstands-Software“.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                fontSize: "15px",
                color: "rgba(245,249,255,0.45)",
                lineHeight: 1.75,
                margin: "0 0 16px",
              }}
            >
              Deutsche KMU bauen Weltklasse-Produkte. Digital arbeiten viele
              noch mit Tools aus 2014 — weil Agenturen aus Hamburg zu teuer
              sind und lokale Anbieter nicht über WordPress hinauskommen.
            </p>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                fontSize: "15px",
                color: "rgba(245,249,255,0.45)",
                lineHeight: 1.75,
                margin: "0 0 32px",
              }}
            >
              Das Loch dazwischen ist groß. Ich schließe es.
            </p>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "1.5px",
                color: "rgba(0,194,203,0.5)",
              }}
            >
              {"// Leon Wenke · Gründer · LYNIQ"}
            </span>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {[
              {
                num: "// 01",
                title: "Kein Agentur-Overhead.",
                body: "Du arbeitest direkt mit dem Entwickler. Kein Account-Manager, kein Delegieren, keine Überraschungen.",
              },
              {
                num: "// 02",
                title: "MVP in einer Woche.",
                body: "Nicht als Versprechen — als Standard. 3–5× schneller als klassische Agenturen, ohne Qualitätsverlust.",
              },
              {
                num: "// 03",
                title: "Regional verankert.",
                body: "Leer, Ostfriesland. Ich baue für Unternehmen die ich kenne, in einer Region die ich verstehe.",
              },
              {
                num: "// 04",
                title: "KI ist Werkzeug, kein Buzzword.",
                body: "Dort eingesetzt wo sie echten Nutzen bringt — nicht als Verkaufsargument.",
              },
            ].map((p) => (
              <div
                key={p.num}
                className="manifesto-principle"
                style={{
                  padding: "20px 24px",
                  border: "0.5px solid rgba(0,194,203,0.08)",
                  borderRadius: "8px",
                  background: "rgba(10,21,37,0.5)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "16px",
                  alignItems: "start",
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: "rgba(0,194,203,0.4)",
                    paddingTop: "3px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.num}
                </span>
                <span>
                  <span
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#f5f9ff",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {p.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 300,
                      fontSize: "13px",
                      color: "rgba(245,249,255,0.4)",
                      lineHeight: 1.65,
                    }}
                  >
                    {p.body}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="manifesto-footer">
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "1.5px",
              color: "rgba(245,249,255,0.15)",
            }}
          >
            LYNIQ · LEER · OSTFRIESLAND · 2026
          </span>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "1.5px",
              color: "rgba(245,249,255,0.15)",
            }}
          >
            DSGVO-KONFORM · SERVER IN DE · FESTPREISE
          </span>
        </div>
      </div>
    </section>
  );
}
