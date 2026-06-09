"use client";

import { GoogleAnalytics as NextGA } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { getStoredConsent } from "@/lib/consent";

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (getStoredConsent() === "accepted") {
      setConsent(true);
      return;
    }

    const handler = () => setConsent(true);
    window.addEventListener("consent_accepted", handler);
    return () => window.removeEventListener("consent_accepted", handler);
  }, []);

  if (!consent) return null;

  return <NextGA gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />;
}
