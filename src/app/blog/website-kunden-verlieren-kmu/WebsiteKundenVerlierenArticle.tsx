"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

function FadeIn({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const SIGNS = [
  {
    title: "Keine klickbaren Telefonnummern",
    problem:
      "Viele KMU-Websites zeigen die Telefonnummer nur als Text, nicht als tel:-Link. Auf dem Handy muss der Besucher die Nummer erst abtippen, bevor er anrufen kann. Das kostet Geduld und damit Anfragen.",
    example:
      "Ein typisches Muster: Die Nummer steht im Footer in kleiner Schrift. Am Smartphone tippt der Interessent sie ab — oder schließt den Tab. Jeder zusätzliche Schritt senkt die Chance auf den Anruf.",
    fix: "Jede Telefonnummer auf der Seite muss als anklickbarer Link hinterlegt sein, der auf mobilen Geräten direkt den Anruf startet.",
  },
  {
    title: "Kein Kontaktformular, nur eine E-Mail-Adresse",
    problem:
      'Eine reine „Schreiben Sie uns eine E-Mail“-Aufforderung ist eine hohe Hürde. Interessenten müssen ihr eigenes Mail-Programm öffnen, den Betreff selbst formulieren, alles selbst strukturieren. Ein einfaches Formular mit 3–4 Feldern senkt die Hemmschwelle deutlich.',
    example:
      "Viele Unternehmensseiten zeigen nur eine Mailto-Adresse. Wer unterwegs ist oder kein Mail-App-Setup hat, bricht ab — obwohl Interesse da war.",
    fix: "Kontaktformular mit Name, Anliegen, Kontaktweg — DSGVO-konform.",
  },
  {
    title: "Keine Erreichbarkeits-Information sichtbar",
    problem:
      "Wenn Öffnungszeiten oder Erreichbarkeit nirgends klar stehen, wissen Interessenten nicht, ob sie gerade überhaupt jemanden erreichen. Das führt dazu, dass sie es gar nicht erst versuchen.",
    example:
      "Ein Besucher sucht abends die Seite und findet weder Zeiten noch Hinweis, wann jemand zurückruft. Unsicherheit statt Anfrage.",
    fix: "Erreichbarkeit prominent im Header oder Footer, inklusive Hinweis auf alternative Kontaktwege außerhalb der Zeiten (z. B. Chatbot, Rückrufformular).",
  },
  {
    title: "Keine Antwort außerhalb der Geschäftszeiten",
    problem:
      "Wenn ein Interessent abends oder am Wochenende auf die Website kommt und keine Möglichkeit hat, eine Anfrage zu hinterlassen, ist die Chance oft verloren — er geht zur nächsten Website.",
    example:
      "Der typische Abend-Besuch: Laden zu, Telefon geht auf Anrufbeantworter, auf der Website keine Formular-Option. Der nächste Treffer in der Suche bekommt den Auftrag.",
    fix: "Ein einfacher Chatbot oder ein asynchrones Formular fängt diese Anfragen auf, statt sie zu verlieren.",
  },
  {
    title: "Eine einzige Telefonnummer für mehrere Standorte",
    problem:
      "Wenn ein Betrieb mehrere Standorte hat, aber nur eine zentrale Nummer, entstehen Wartezeiten und Fehlleitungen. Interessenten legen auf, bevor sie durchkommen.",
    example:
      "Zentralnummer, lange Warteschleife, falsche Filiale — und der Anrufer hängt auf. Besonders kritisch, wenn Standorte unterschiedliche Öffnungszeiten haben.",
    fix: "Standort-spezifische Kontaktmöglichkeiten oder zumindest eine klare Weiterleitung/Ansage, wohin sich der Anruf richtet.",
  },
] as const;

const monoMeta: React.CSSProperties = {
  fontFamily: "var(--font-mono), JetBrains Mono, monospace",
  fontSize: 11,
  letterSpacing: "0.5px",
  color: "#00c2cb",
};

const bodyText: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
  fontWeight: 300,
  fontSize: 17,
  lineHeight: 1.75,
  color: "rgba(245,249,255,0.72)",
  margin: "0 0 16px",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono), JetBrains Mono, monospace",
  fontSize: 10,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#00c2cb",
  margin: "0 0 8px",
};

export default function WebsiteKundenVerlierenArticle() {
  return (
    <article
      className="blog-article-main"
      style={{ background: "transparent" }}
    >
      <Link
        href="/blog"
        style={{
          display: "inline-block",
          ...monoMeta,
          textDecoration: "none",
          marginBottom: 28,
        }}
      >
        ← Blog
      </Link>

      <FadeIn>
        <p
          style={{
            ...monoMeta,
            margin: "0 0 20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 14px",
          }}
        >
          <span>~5 Min. Lesezeit</span>
          <span aria-hidden style={{ opacity: 0.45 }}>
            ·
          </span>
          <time dateTime="2026-07-23">23. Juli 2026</time>
        </p>

        <h1
          style={{
            fontFamily: "var(--font-sora), Sora, sans-serif",
            fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
            fontWeight: 700,
            color: "#f5f9ff",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            margin: "0 0 24px",
          }}
        >
          5 Anzeichen, dass Ihre Website Kunden kostet – und wie KMU in
          Ostfriesland das beheben
        </h1>

        <p style={{ ...bodyText, fontSize: 18, marginBottom: 40 }}>
          Eine Website soll Anfragen bringen — nicht still abspringen lassen.
          Bei vielen KMU-Seiten in der Region sehen wir dieselben Reibungspunkte:
          Kontakt ist da, aber schwer erreichbar. Hier sind fünf Muster, die
          regelmäßig Anfragen kosten — und was Sie konkret ändern können.
        </p>
      </FadeIn>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          margin: "0 0 40px",
        }}
      />

      {SIGNS.map((sign, index) => (
        <FadeIn key={sign.title} delay={index * 0.04}>
          <section style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontFamily: "var(--font-sora), Sora, sans-serif",
                fontSize: "clamp(1.25rem, 3.5vw, 1.5rem)",
                fontWeight: 600,
                color: "#f5f9ff",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
                margin: "0 0 16px",
                display: "flex",
                gap: 12,
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                  fontSize: 13,
                  color: "#00c2cb",
                  flexShrink: 0,
                }}
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {sign.title}
            </h2>

            <p style={bodyText}>{sign.problem}</p>

            <p style={labelStyle}>{"// Beispiel"}</p>
            <p style={bodyText}>{sign.example}</p>

            <p style={labelStyle}>{"// Was tun"}</p>
            <p style={{ ...bodyText, marginBottom: 0 }}>{sign.fix}</p>
          </section>
        </FadeIn>
      ))}

      <FadeIn delay={0.08}>
        <aside
          style={{
            marginTop: 8,
            padding: "28px 24px",
            borderRadius: 8,
            border: "1px solid rgba(0,194,203,0.45)",
            background: "rgba(0,194,203,0.06)",
          }}
        >
          <p
            style={{
              ...bodyText,
              color: "rgba(245,249,255,0.85)",
              marginBottom: 20,
            }}
          >
            Sie erkennen eines dieser Probleme bei Ihrer eigenen Website? Lassen
            Sie uns in einem kurzen Gespräch klären, was konkret bei Ihnen der
            Fall ist.
          </p>
          <Link
            href="/kontakt"
            style={{
              display: "inline-block",
              background: "#00c2cb",
              color: "#060d18",
              fontFamily: "var(--font-sora), Sora, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.5px",
              padding: "14px 28px",
              borderRadius: 2,
              textDecoration: "none",
            }}
          >
            Gespräch vereinbaren →
          </Link>
        </aside>
      </FadeIn>
    </article>
  );
}
