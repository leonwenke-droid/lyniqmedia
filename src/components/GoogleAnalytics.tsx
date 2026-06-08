"use client";

import { GoogleAnalytics as NextGA } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { getStoredConsent } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

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

  if (!consent || !GA_ID) return null;

  return <NextGA gaId={GA_ID} />;
}
