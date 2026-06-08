"use client";

import { Fragment, useState } from "react";

const steps = [
  {
    label: "Erstgespräch",
    tag: "// 01 · INIT",
    title: "Kostenloses Erstgespräch",
    desc: "30 Minuten. Ich verstehe dein Problem, du verstehst wie ich arbeite. Kein Pitch, kein Druck — nur ein ehrliches Gespräch.",
    corner: "CALL · 30MIN",
  },
  {
    label: "Angebot",
    tag: "// 02 · SCOPE",
    title: "Festpreisangebot in 24h",
    desc: "Innerhalb von 24 Stunden bekommst du ein konkretes Angebot. Scope, Zeitplan, Preis — alles schriftlich. Keine Überraschungen.",
    corner: "RESPONSE · <24H",
  },
  {
    label: "Entwicklung",
    tag: "// 03 · BUILD",
    title: "Entwicklung & täglicher Fortschritt",
    desc: "Ich baue. Du siehst täglich Fortschritt. Kein wochenlanger Funkstille-Prozess. MVP-Standard: unter einer Woche.",
    corner: "DELIVERY · <1W",
  },
  {
    label: "Launch",
    tag: "// 04 · SHIP",
    title: "Launch & Übergabe",
    desc: "Deployment, vollständige Dokumentation, persönliche Einweisung. Du bist nie abhängig — alles gehört dir.",
    corner: "STATUS · LIVE ✓",
  },
];

export default function Process() {
  const [cur, setCur] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scanning, setScanning] = useState(false);

  function go(dir: number) {
    const next =
      dir === 999 ? 0 : Math.max(0, Math.min(steps.length - 1, cur + dir));
    if (next === cur && dir !== 999) return;
    setVisible(false);
    setScanning(true);
    setTimeout(() => {
      setCur(next);
      setVisible(true);
      setTimeout(() => setScanning(false), 500);
    }, 120);
  }

  const step = steps[cur];
  const circleCenterY = 18;

  return (
    <section id="prozess" style={{ padding: "100px 0", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 56px" }}>
        {/* Section header */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{ width: "28px", height: "1px", background: "#00c2cb" }}
            />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "3px",
                color: "#00c2cb",
              }}
            >
              PROZESS
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f5f9ff",
              letterSpacing: "-0.03em",
              margin: "0 0 8px",
            }}
          >
            So läuft ein Projekt
          </h2>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              color: "rgba(245,249,255,0.45)",
              margin: 0,
            }}
          >
            Vier Schritte vom ersten Gespräch bis zum Launch — klar, schnell,
            ohne Agentur-Overhead.
          </p>
        </div>

        {/* Step track — Linien nur zwischen den Kreisen */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {steps.map((s, i) => (
            <Fragment key={s.tag}>
              {i > 0 ? (
                <div
                  aria-hidden="true"
                  style={{
                    flex: 1,
                    height: "1px",
                    marginTop: `${circleCenterY}px`,
                    minWidth: "12px",
                    background:
                      i <= cur ? "#00c2cb" : "rgba(245,249,255,0.06)",
                    boxShadow:
                      i <= cur ? "0 0 6px rgba(0,194,203,0.5)" : "none",
                    transition:
                      "background 0.5s cubic-bezier(0.34,1.2,0.64,1), box-shadow 0.5s ease",
                  }}
                />
              ) : null}
              <div
                onClick={() => {
                  setCur(i);
                  setVisible(false);
                  setTimeout(() => setVisible(true), 80);
                }}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: `1px solid ${i < cur ? "#00c2cb" : i === cur ? "#00c2cb" : "rgba(245,249,255,0.1)"}`,
                    background:
                      i < cur
                        ? "#00c2cb"
                        : "#060d18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "11px",
                    color:
                      i < cur
                        ? "#060d18"
                        : i === cur
                          ? "#00c2cb"
                          : "rgba(245,249,255,0.3)",
                    fontWeight: i < cur ? 700 : 400,
                    marginBottom: "8px",
                    transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    boxShadow:
                      i === cur
                        ? "0 0 0 5px rgba(0,194,203,0.1), 0 0 16px rgba(0,194,203,0.2)"
                        : "none",
                    transform: i === cur ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {i < cur ? "✓" : `0${i + 1}`}
                </div>
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "9px",
                    letterSpacing: "1.5px",
                    color:
                      i === cur ? "#00c2cb" : "rgba(245,249,255,0.25)",
                    transition: "color 0.3s",
                    textAlign: "center",
                  }}
                >
                  {s.label.toUpperCase()}
                </span>
              </div>
            </Fragment>
          ))}
        </div>

        {/* Content card */}
        <div
          style={{
            background: "rgba(10,21,37,0.6)",
            border: "0.5px solid rgba(0,194,203,0.1)",
            borderRadius: "12px",
            padding: "32px",
            marginTop: "24px",
            position: "relative",
            overflow: "hidden",
            minHeight: "160px",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Top cyan line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(to right, transparent, #00c2cb, transparent)",
            }}
          />
          {/* Scanline */}
          {scanning && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "100%",
                background:
                  "linear-gradient(to right, transparent, rgba(0,194,203,0.04), transparent)",
                animation: "processScan 0.5s ease forwards",
                pointerEvents: "none",
              }}
            />
          )}
          {/* Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "3px",
                color: "#00c2cb",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {step.tag}
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background:
                    "linear-gradient(to right, rgba(0,194,203,0.25), transparent)",
                }}
              />
            </div>
            <h3
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#f5f9ff",
                letterSpacing: "-0.02em",
                margin: "0 0 10px",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 300,
                fontSize: "14px",
                color: "rgba(245,249,255,0.5)",
                lineHeight: 1.7,
                margin: 0,
                maxWidth: "600px",
              }}
            >
              {step.desc}
            </p>
          </div>
          {/* Corner label */}
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              right: "16px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              color: "rgba(245,249,255,0.15)",
              letterSpacing: "1px",
            }}
          >
            {step.corner}
          </div>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={cur === 0}
            style={{
              padding: "9px 20px",
              borderRadius: "6px",
              fontSize: "11px",
              fontFamily: "JetBrains Mono, monospace",
              letterSpacing: "1px",
              border: "0.5px solid rgba(245,249,255,0.1)",
              background: "transparent",
              color: cur === 0 ? "rgba(245,249,255,0.2)" : "#f5f9ff",
              cursor: cur === 0 ? "default" : "pointer",
              transition: "all 0.2s",
            }}
          >
            ← ZURÜCK
          </button>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px",
              color: "rgba(245,249,255,0.2)",
              letterSpacing: "2px",
            }}
          >
            {String(cur + 1).padStart(2, "0")} / 0{steps.length}
          </span>
          <button
            type="button"
            onClick={() => (cur === steps.length - 1 ? go(999) : go(1))}
            style={{
              padding: "9px 20px",
              borderRadius: "6px",
              fontSize: "11px",
              fontFamily: "JetBrains Mono, monospace",
              letterSpacing: "1px",
              border: "0.5px solid #00c2cb",
              background: "#00c2cb",
              color: "#060d18",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {cur === steps.length - 1 ? "RESTART ↺" : "WEITER →"}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes processScan {
          0% { left: -50%; }
          100% { left: 120%; }
        }
      `}</style>
    </section>
  );
}
