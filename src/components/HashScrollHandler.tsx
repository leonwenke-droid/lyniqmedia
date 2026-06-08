"use client";

import {
  applyHomeSectionHash,
  consumePendingHomeSection,
  scrollToSectionWithRetry,
} from "@/lib/scroll-to-section";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function HashScrollHandler() {
  const pathname = usePathname();
  const lastHandledHash = useRef("");

  useEffect(() => {
    if (pathname !== "/") {
      lastHandledHash.current = "";
      return;
    }

    const pending = consumePendingHomeSection();
    if (pending) {
      applyHomeSectionHash(pending);
    }

    const scrollIfNeeded = (hash: string, behavior: ScrollBehavior = "auto") => {
      if (!hash || hash === lastHandledHash.current) return;
      lastHandledHash.current = hash;
      scrollToSectionWithRetry(hash, behavior);
    };

    const initialHash = window.location.hash.replace("#", "");
    const timer = window.setTimeout(
      () => scrollIfNeeded(initialHash, "auto"),
      200,
    );

    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      lastHandledHash.current = "";
      if (hash) scrollToSectionWithRetry(hash, "smooth");
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
