"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalLayoutProps = {
  title: string;
  lastUpdated?: string;
  intro?: ReactNode;
  sections: LegalSection[];
};

const ACCENT = "#00c2cb";
const INK = "#f5f9ff";

function useMinWidth(px: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${px}px)`);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [px]);

  return matches;
}

export function LegalParagraphs({
  content,
}: {
  content: string | string[];
}) {
  const lines = Array.isArray(content) ? content : [content];
  return (
    <>
      {lines.map((line, i) => (
        <p
          key={i}
          style={{
            margin: i < lines.length - 1 ? "0 0 12px" : 0,
          }}
        >
          {line}
        </p>
      ))}
    </>
  );
}

export default function LegalLayout({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalLayoutProps) {
  const reduceMotion = useReducedMotion();
  const wide = useMinWidth(900);
  const firstSectionId = sections[0]?.id ?? "";
  const lastSectionId = sections[sections.length - 1]?.id ?? "";
  const [activeId, setActiveId] = useState(firstSectionId);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const intersectionState = useRef(new Map<string, boolean>());

  useEffect(() => {
    const elements = sections
      .map((s) => sectionRefs.current.get(s.id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    intersectionState.current = new Map(
      sections.map((s) => [s.id, false] as const),
    );

    const isAtBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 50;

    const resolveTopmostInZone = () => {
      if (isAtBottom() && lastSectionId) {
        setActiveId(lastSectionId);
        return;
      }

      const intersecting = sections
        .map((s) => {
          const el = sectionRefs.current.get(s.id);
          if (!el || !intersectionState.current.get(s.id)) return null;
          return { id: s.id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) as { id: string; top: number }[];

      if (intersecting.length === 0) return;

      intersecting.sort((a, b) => a.top - b.top);
      setActiveId(intersecting[0].id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id) {
            intersectionState.current.set(entry.target.id, entry.isIntersecting);
          }
        }
        resolveTopmostInZone();
      },
      {
        rootMargin: "-20% 0px -75% 0px",
        threshold: 0,
      },
    );

    for (const el of elements) observer.observe(el);

    const onScroll = () => resolveTopmostInZone();

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections, lastSectionId]);

  const scrollToSection = useCallback(
    (id: string) => {
      const el = sectionRefs.current.get(id);
      if (!el) return;
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      setActiveId(id);
    },
    [reduceMotion],
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "120px clamp(20px, 4vw, 56px) 80px",
        maxWidth: wide ? 1100 : 800,
        margin: "0 auto",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-mono), JetBrains Mono, monospace",
          fontSize: 11,
          letterSpacing: "2px",
          color: "rgba(0,194,203,0.75)",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: 40,
        }}
      >
        ← Zurück zur Startseite
      </Link>

      <h1
        style={{
          fontFamily: "var(--font-sora), Sora, sans-serif",
          fontSize: wide ? 48 : 32,
          fontWeight: 700,
          color: INK,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          margin: "0 0 12px",
        }}
      >
        {title}
      </h1>

      {lastUpdated ? (
        <p
          style={{
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: 10,
            letterSpacing: "1px",
            color: "rgba(245,249,255,0.35)",
            margin: `0 0 ${intro ? 16 : 32}px`,
          }}
        >
          Zuletzt aktualisiert: {lastUpdated}
        </p>
      ) : null}

      {intro ? (
        <div
          className="legal-prose"
          style={{
            marginBottom: 32,
            maxWidth: "68ch",
            fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(245,249,255,0.45)",
          }}
        >
          {intro}
        </div>
      ) : null}

      <div
        style={{
          display: wide ? "grid" : "block",
          gridTemplateColumns: wide ? "220px minmax(0, 1fr)" : undefined,
          gap: wide ? 48 : 0,
          alignItems: "start",
        }}
      >
        {wide ? (
          <nav
            aria-label="Inhaltsverzeichnis"
            style={{
              position: "sticky",
              top: 120,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                fontSize: 9,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(245,249,255,0.3)",
                margin: "0 0 16px",
              }}
            >
              Inhalt
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section.id);
                      }}
                      style={{
                        display: "block",
                        padding: "8px 12px",
                        borderLeft: `2px solid ${isActive ? ACCENT : "transparent"}`,
                        fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
                        fontSize: 13,
                        fontWeight: isActive ? 500 : 300,
                        lineHeight: 1.4,
                        color: isActive ? ACCENT : "rgba(245,249,255,0.5)",
                        textDecoration: "none",
                        transition: reduceMotion
                          ? "none"
                          : "color 0.2s, border-color 0.2s",
                      }}
                    >
                      {section.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}

        <div>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => {
                if (el) sectionRefs.current.set(section.id, el);
                else sectionRefs.current.delete(section.id);
              }}
              style={{
                scrollMarginTop: 120,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: 28,
                marginBottom: 20,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-sora), Sora, sans-serif",
                  fontSize: wide ? 20 : 18,
                  fontWeight: 600,
                  color: INK,
                  margin: "0 0 16px",
                  letterSpacing: "-0.02em",
                }}
              >
                {section.title}
              </h2>
              <div className="legal-prose">{section.content}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
