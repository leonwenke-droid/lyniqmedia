"use client";

import { MorphPanel } from "@/components/ui/ai-input";
import { usePathname } from "next/navigation";

async function askWebsiteBot(message: string): Promise<string> {
  const res = await fetch("/api/website-bot", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = (await res.json()) as { reply?: string };
  return data.reply ?? "Keine Antwort erhalten.";
}

export default function WebsiteBot() {
  const pathname = usePathname();
  if (pathname === "/visitenkarte") return null;

  return (
    <div
      className="website-bot-root pointer-events-none fixed right-0 bottom-0 z-[60]"
      aria-label="LYNIQ Website-Assistent"
    >
      <div className="pointer-events-auto p-5 max-sm:p-4 max-sm:has-[form]:p-0">
        <MorphPanel onAsk={askWebsiteBot} />
      </div>
    </div>
  );
}
