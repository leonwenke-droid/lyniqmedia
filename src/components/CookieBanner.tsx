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
      className="cookie-banner-anchor"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        display: "flex",
        justifyContent: "center",
        padding: "0 20px calc(24px + env(safe-area-inset-bottom, 0px))",
        pointerEvents: "none",
      }}
    >
      <div
        role="dialog"
        aria-labelledby="cookie-banner-title"
        className="cookie-banner"
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: 560,
          background: "rgba(6, 13, 24, 0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "0.5px solid rgba(0, 194, 203, 0.22)",
          borderRadius: 14,
          padding: "20px 24px",
          boxShadow:
            "0 16px 48px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.04) inset",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <p
          id="cookie-banner-title"
          style={{
            margin: 0,
            fontFamily: "DM Sans, sans-serif",
            fontSize: 14,
            color: "rgba(245,249,255,0.75)",
            lineHeight: 1.6,
          }}
        >
          Diese Website verwendet Google Analytics zur Analyse des Datenverkehrs.
          Die Daten werden an Google übertragen. Mehr Infos in unserer{" "}
          <Link href="/datenschutz" style={{ color: "#00c2cb" }}>
            Datenschutzerklärung.
          </Link>
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            alignItems: "center",
            justifyContent: "flex-end",
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
              padding: "10px 20px",
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
    </div>
  );
}
