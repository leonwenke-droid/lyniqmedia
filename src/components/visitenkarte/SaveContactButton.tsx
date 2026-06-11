"use client";

import { trackGaEvent } from "@/lib/analytics";
import { LINKEDIN_URL } from "@/lib/social-links";
import { UserPlus } from "lucide-react";
import { useState } from "react";

export default function SaveContactButton() {
  const [saved, setSaved] = useState(false);

  function handleSave() {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Wenke;Leon;;;",
      "FN:Leon Wenke",
      "ORG:LYNIQ",
      "TITLE:Gründer · LYNIQ",
      "TEL;TYPE=CELL:+4915175007219",
      "EMAIL:info@lyniqmedia.com",
      "URL:https://lyniqmedia.com",
      `X-SOCIALPROFILE;type=linkedin:${LINKEDIN_URL}`,
      "ADR;TYPE=WORK:;;Alte Poststraße 17a;Holtland;;26835;DE",
      "NOTE:KI-Software & digitale Produkte für den Mittelstand. MVP in 1 Woche.",
      "END:VCARD",
    ].join("\n");
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Leon Wenke.vcf";
    a.click();
    URL.revokeObjectURL(url);
    trackGaEvent("vcard_save", {
      event_category: "engagement",
      event_label: "visitenkarte",
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <button
      type="button"
      onClick={handleSave}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        width: "100%",
        padding: "15px",
        background: saved ? "rgba(34,197,94,0.8)" : "#00c2cb",
        color: "#060d18",
        border: "none",
        borderRadius: "12px",
        fontFamily: "var(--font-sora), Sora, sans-serif",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "0.5px",
        cursor: "pointer",
        marginBottom: "8px",
        transition: "background 0.3s",
      }}
    >
      <UserPlus size={18} />
      {saved ? "Kontakt gespeichert ✓" : "Kontakt speichern"}
    </button>
  );
}
