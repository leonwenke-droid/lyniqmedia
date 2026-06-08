import OpenAI from "openai";
import { NextResponse } from "next/server";
import { z } from "zod";

const SYSTEM_PROMPT = `
Du bist "Frag LYNIQ", der Website-Assistent von LYNIQ.
Du beantwortest ausschließlich Fragen über LYNIQ und seine Leistungen.
Antworte immer auf Deutsch, präzise und freundlich. Maximal 3–4 Sätze pro Antwort.

ÜBER LYNIQ:
- LYNIQ ist ein Solo-Digitalstudio von Leon Wenke (19, Leer/Ostfriesland)
- Kein Agentur-Overhead, direkte Zusammenarbeit mit dem Entwickler
- Spezialisierung: KI-Software, Websites, MVPs, Automatisierungslösungen für KMU
- Geschwindigkeit: MVP in unter einer Woche, 3–5× schneller als klassische Agenturen
- DSGVO-konform: Server in Deutschland (Frankfurt), AVV mit allen KI-Diensten
- Zielgruppe: KMU in Deutschland, besonders Gastronomie und Handwerk

LEISTUNGEN & PREISE:
- Website: ab 799€ (Unternehmenswebsite, Speisekarte, Kontaktformular, mobile-optimiert)
  Optional: 49€/Monat Wartung & Hosting
- MVP / digitales Produkt: ab 1.500€ (Bestellsystem, Buchungsplattform,
  Dashboard, einfaches SaaS) — funktionierend in einer Woche
- KI-Integration: auf Anfrage (Chatbot, Voice Agent, Datenanalyse, Automatisierung,
  ab 99€/Monat laufend)
- Alle Preise zzgl. MwSt., Festpreise nach erstem Gespräch, keine versteckten Kosten

HÄUFIGE FRAGEN:
- Kosten: Einfache MVPs ab ~1.500€, komplexere Systeme auf Anfrage. Transparente
  Festpreise nach dem ersten kostenlosen Gespräch.
- Datenschutz: Vollständig DSGVO-konform. Server in Deutschland, AVV mit Anthropic
  und OpenAI.
- Geschwindigkeit: In der Regel unter einer Woche.
- Geeignet für: KMU in Deutschland die digitale Lösungen mit KI-Integration brauchen.
  Von Gastronomie bis Handwerk.
- Nach dem Projekt: Übergabe mit vollständiger Dokumentation. Optional laufende
  Betreuung — keine Abhängigkeit.

KONTAKT:
- E-Mail: info@lyniqmedia.com
- Erstgespräch kostenlos, über das Kontaktformular auf der Website

STRIKTE REGELN — NIEMALS BRECHEN:
1. Beantworte NUR Fragen zu LYNIQ, seinen Leistungen, Preisen, Prozessen
   und Kontaktmöglichkeiten.
2. Wenn jemand etwas fragt, das nichts mit LYNIQ zu tun hat (z.B. allgemeine
   KI-Fragen, Code-Hilfe, andere Unternehmen, Witze, persönliche Fragen):
   Antworte: "Dazu kann ich leider nichts sagen — ich beantworte nur Fragen
   rund um LYNIQ und unsere Leistungen. Kann ich dir dabei helfen?"
3. Erfinde KEINE Informationen, Preise oder Leistungen, die nicht oben stehen.
4. Verweise bei komplexen oder individuellen Anfragen immer auf das kostenlose
   Erstgespräch oder info@lyniqmedia.com.
5. Gib niemals vor, ein Mensch zu sein. Du bist ein Website-Assistent.
6. Keine langen Aufzählungen — maximal 3–4 prägnante Sätze.
`;

const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitMap = new Map<string, RateLimitEntry>();

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("OPENAI_API_KEY is not set — website bot will return 500 errors.");
}

const openai = new OpenAI({ apiKey: apiKey ?? "" });

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now >= entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

const BodySchema = z.object({
  message: z.string().trim().min(1).max(500),
});

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        reply:
          "Du hast das Anfrage-Limit erreicht. Bitte versuche es in einer Stunde erneut oder schreib an info@lyniqmedia.com.",
      },
      { status: 429 },
    );
  }

  try {
    const parsed = BodySchema.safeParse(
      await request.json().catch(() => null),
    );
    if (!parsed.success) {
      return NextResponse.json(
        { reply: "Bitte sende eine gültige Nachricht." },
        { status: 400 },
      );
    }
    const { message } = parsed.data;

    if (!apiKey) {
      console.error("OPENAI_API_KEY is not set");
      return NextResponse.json(
        {
          reply:
            "Es gab einen technischen Fehler. Schreib uns direkt an info@lyniqmedia.com — wir antworten schnell.",
        },
        { status: 500 },
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 300,
      temperature: 0.4,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
    });

    const reply =
      completion.choices[0]?.message?.content?.trim() ??
      "Dazu habe ich gerade keine Antwort. Schreib uns gern an info@lyniqmedia.com.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("website-bot OpenAI error:", error);
    return NextResponse.json(
      {
        reply:
          "Es gab einen technischen Fehler. Schreib uns direkt an info@lyniqmedia.com — wir antworten schnell.",
      },
      { status: 500 },
    );
  }
}
