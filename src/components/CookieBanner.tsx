"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStoredConsent, setStoredConsent } from "@/lib/consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === "undecided");
  }, []);

  const accept = () => {
    setStoredConsent("accepted");
    window.dispatchEvent(new Event("consent_accepted"));
    setVisible(false);
  };

  const reject = () => {
    setStoredConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        background: "#060d18",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 32px",
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p
        id="cookie-banner-title"
        style={{
          margin: 0,
          maxWidth: 600,
          flex: "1 1 280px",
          fontFamily: "DM Sans, sans-serif",
          fontSize: 14,
          color: "rgba(245,249,255,0.75)",
          lineHeight: 1.6,
        }}
      >
        Diese Website verwendet Google Analytics zur Analyse des Datenverkehrs.
        Die Daten werden an Google (USA) übertragen. Mehr Infos in unserer{" "}
        <Link href="/datenschutz" style={{ color: "#00c2cb" }}>
          Datenschutzerklärung.
        </Link>
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
        }}
      >
        <button
          type="button"
          onClick={reject}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(245,249,255,0.6)",
            borderRadius: 8,
            padding: "10px 24px",
            minHeight: 44,
            fontFamily: "DM Sans, sans-serif",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Ablehnen
        </button>
        <button
          type="button"
          onClick={accept}
          style={{
            background: "#00c2cb",
            color: "#060d18",
            fontWeight: 600,
            borderRadius: 8,
            padding: "10px 24px",
            minHeight: 44,
            border: "none",
            fontFamily: "DM Sans, sans-serif",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
