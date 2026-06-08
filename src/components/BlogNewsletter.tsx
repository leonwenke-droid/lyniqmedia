export default function BlogNewsletter() {
  return (
    <aside
      style={{
        marginTop: 56,
        padding: "28px 24px",
        borderRadius: 16,
        border: "1px solid rgba(0,194,203,0.25)",
        background: "rgba(0,194,203,0.04)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-sora), Sora, sans-serif",
          fontSize: 20,
          fontWeight: 600,
          color: "#f5f9ff",
          margin: "0 0 8px",
        }}
      >
        Mehr solche Artikel?
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
          fontSize: 14,
          fontWeight: 300,
          color: "rgba(245,249,255,0.55)",
          lineHeight: 1.65,
          margin: "0 0 20px",
        }}
      >
        Einmal im Monat: KI-Praxis, lokale Digitalisierung, ehrliche Einblicke.
      </p>
      {/* TODO: Echtes Newsletter-Backend anbinden (Resend/Web3Forms) */}
      <a
        href="mailto:info@lyniqmedia.com?subject=Blog Newsletter"
        style={{
          display: "inline-block",
          background: "#00c2cb",
          color: "#060d18",
          padding: "12px 24px",
          borderRadius: 8,
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          textDecoration: "none",
        }}
      >
        Per E-Mail anmelden →
      </a>
    </aside>
  );
}
