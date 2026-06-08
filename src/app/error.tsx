"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060d18",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      padding: "0 24px",
      textAlign: "center"
    }}>
      <p style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 11,
        letterSpacing: 3,
        textTransform: "uppercase",
        color: "#00c2cb"
      }}>
        {"// Fehler"}
      </p>
      <h2 style={{
        fontFamily: "Sora, sans-serif",
        fontSize: "clamp(24px, 5vw, 36px)",
        color: "#f5f9ff",
        fontWeight: 700,
        margin: 0
      }}>
        Etwas ist schiefgelaufen.
      </h2>
      <p style={{
        fontFamily: "DM Sans, sans-serif",
        fontSize: 16,
        color: "rgba(245,249,255,0.6)",
        maxWidth: 480,
        margin: 0
      }}>
        Ein unerwarteter Fehler ist aufgetreten. Versuche es erneut
        oder schreib uns an info@lyniqmedia.com.
      </p>
      <button
        onClick={reset}
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: 15,
          fontWeight: 600,
          color: "#060d18",
          background: "#00c2cb",
          border: "none",
          borderRadius: 8,
          padding: "12px 28px",
          cursor: "pointer"
        }}
      >
        Erneut versuchen
      </button>
    </div>
  );
}
