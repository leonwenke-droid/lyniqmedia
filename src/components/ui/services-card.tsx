"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const SERVICE_IDS = [
  "ki-software",
  "web-produkte",
  "automatisierung",
  "mvp-prototypen",
] as const;

const CARD_BG = "rgb(8, 18, 34)";
const CARD_BG_HOVER = "rgb(12, 28, 46)";

const ILLUSTRATION_SVG_PROPS = {
  width: "100%",
  height: "100%",
  preserveAspectRatio: "xMidYMid meet",
  style: { display: "block" },
} as const;

function resolveServiceId(number: string, index?: number): string {
  const fromNumber = parseInt(number, 10) - 1;
  if (fromNumber >= 0 && fromNumber < SERVICE_IDS.length) {
    return SERVICE_IDS[fromNumber];
  }
  if (index !== undefined && index < SERVICE_IDS.length) {
    return SERVICE_IDS[index % SERVICE_IDS.length];
  }
  return SERVICE_IDS[0];
}

function getIllustration(id: string, suffix: string) {
  switch (id) {
    case "ki-software":
      return (
        <svg viewBox="0 0 220 150" fill="none" {...ILLUSTRATION_SVG_PROPS}>
          <defs>
            <radialGradient id={`glow-ki-${suffix}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00c2cb" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00c2cb" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="110" cy="75" rx="70" ry="50" fill={`url(#glow-ki-${suffix})`} />
          <text x="22" y="12" fontFamily="JetBrains Mono" fontSize="6" fill="rgba(0,194,203,0.25)" textAnchor="middle">INPUT</text>
          <text x="80" y="12" fontFamily="JetBrains Mono" fontSize="6" fill="rgba(0,194,203,0.2)" textAnchor="middle">HIDDEN</text>
          <text x="140" y="12" fontFamily="JetBrains Mono" fontSize="6" fill="rgba(0,194,203,0.2)" textAnchor="middle">HIDDEN</text>
          <text x="198" y="12" fontFamily="JetBrains Mono" fontSize="6" fill="rgba(0,194,203,0.3)" textAnchor="middle">OUT</text>
          <g opacity="0.12" stroke="#00c2cb" strokeWidth="0.6">
            <line x1="32" y1="35" x2="70" y2="25" /><line x1="32" y1="35" x2="70" y2="55" />
            <line x1="32" y1="35" x2="70" y2="85" /><line x1="32" y1="35" x2="70" y2="115" />
            <line x1="32" y1="75" x2="70" y2="25" /><line x1="32" y1="75" x2="70" y2="55" />
            <line x1="32" y1="75" x2="70" y2="85" /><line x1="32" y1="75" x2="70" y2="115" />
            <line x1="32" y1="115" x2="70" y2="25" /><line x1="32" y1="115" x2="70" y2="55" />
            <line x1="32" y1="115" x2="70" y2="85" /><line x1="32" y1="115" x2="70" y2="115" />
          </g>
          <line x1="32" y1="75" x2="70" y2="55" stroke="rgba(0,194,203,0.35)" strokeWidth="0.9" />
          <line x1="32" y1="75" x2="70" y2="85" stroke="rgba(26,106,255,0.3)" strokeWidth="0.9" />
          <g opacity="0.1" stroke="#00c2cb" strokeWidth="0.6">
            <line x1="90" y1="25" x2="130" y2="45" /><line x1="90" y1="25" x2="130" y2="75" />
            <line x1="90" y1="55" x2="130" y2="45" /><line x1="90" y1="55" x2="130" y2="75" />
            <line x1="90" y1="55" x2="130" y2="105" /><line x1="90" y1="85" x2="130" y2="45" />
            <line x1="90" y1="85" x2="130" y2="75" /><line x1="90" y1="85" x2="130" y2="105" />
            <line x1="90" y1="115" x2="130" y2="75" /><line x1="90" y1="115" x2="130" y2="105" />
          </g>
          <line x1="90" y1="55" x2="130" y2="75" stroke="rgba(0,194,203,0.4)" strokeWidth="1" />
          <line x1="90" y1="85" x2="130" y2="75" stroke="rgba(0,194,203,0.3)" strokeWidth="0.9" />
          <line x1="150" y1="45" x2="188" y2="75" stroke="rgba(0,194,203,0.2)" strokeWidth="0.7" />
          <line x1="150" y1="75" x2="188" y2="75" stroke="rgba(0,194,203,0.5)" strokeWidth="1.2" />
          <line x1="150" y1="105" x2="188" y2="75" stroke="rgba(0,194,203,0.2)" strokeWidth="0.7" />
          <circle cx="32" cy="35" r="9" fill="rgba(0,194,203,0.08)" stroke="rgba(0,194,203,0.4)" strokeWidth="0.8" />
          <circle cx="32" cy="75" r="9" fill="rgba(0,194,203,0.12)" stroke="rgba(0,194,203,0.55)" strokeWidth="0.8" />
          <circle cx="32" cy="115" r="9" fill="rgba(0,194,203,0.08)" stroke="rgba(0,194,203,0.4)" strokeWidth="0.8" />
          <text x="32" y="38" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(0,194,203,0.6)" textAnchor="middle">x₁</text>
          <text x="32" y="78" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(0,194,203,0.7)" textAnchor="middle">x₂</text>
          <text x="32" y="118" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(0,194,203,0.6)" textAnchor="middle">x₃</text>
          <circle cx="80" cy="25" r="9" fill="rgba(10,30,60,0.9)" stroke="rgba(0,194,203,0.25)" strokeWidth="0.7" />
          <circle cx="80" cy="55" r="9" fill="rgba(0,194,203,0.15)" stroke="rgba(0,194,203,0.55)" strokeWidth="0.9" />
          <circle cx="80" cy="85" r="9" fill="rgba(26,106,255,0.12)" stroke="rgba(26,106,255,0.45)" strokeWidth="0.8" />
          <circle cx="80" cy="115" r="9" fill="rgba(10,30,60,0.9)" stroke="rgba(0,194,203,0.2)" strokeWidth="0.7" />
          <circle cx="140" cy="45" r="9" fill="rgba(10,30,60,0.9)" stroke="rgba(0,194,203,0.25)" strokeWidth="0.7" />
          <circle cx="140" cy="75" r="9" fill="rgba(0,194,203,0.2)" stroke="rgba(0,194,203,0.65)" strokeWidth="1" />
          <circle cx="140" cy="105" r="9" fill="rgba(10,30,60,0.9)" stroke="rgba(0,194,203,0.2)" strokeWidth="0.7" />
          <circle cx="198" cy="75" r="11" fill="rgba(0,194,203,0.12)" stroke="#00c2cb" strokeWidth="1.2" />
          <circle cx="198" cy="75" r="7" fill="rgba(0,194,203,0.25)" stroke="#00c2cb" strokeWidth="0.5" />
          <text x="198" y="79" fontFamily="JetBrains Mono" fontSize="8" fill="#00c2cb" textAnchor="middle">ŷ</text>
          <text x="80" y="143" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(0,194,203,0.2)" textAnchor="middle">ReLU</text>
          <text x="140" y="143" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(0,194,203,0.2)" textAnchor="middle">ReLU</text>
          <text x="198" y="143" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(0,194,203,0.35)" textAnchor="middle">σ</text>
        </svg>
      );
    case "web-produkte":
      return (
        <svg viewBox="0 0 220 150" fill="none" {...ILLUSTRATION_SVG_PROPS}>
          <rect x="8" y="8" width="204" height="134" rx="8" fill="rgba(0,0,0,0.4)" />
          <rect x="6" y="6" width="204" height="134" rx="8" fill="#0a1525" stroke="rgba(0,194,203,0.2)" strokeWidth="0.8" />
          <rect x="6" y="6" width="204" height="26" rx="8" fill="rgba(0,194,203,0.05)" stroke="rgba(0,194,203,0.12)" strokeWidth="0.5" />
          <rect x="6" y="22" width="204" height="10" fill="rgba(0,194,203,0.04)" />
          <circle cx="22" cy="19" r="4" fill="rgba(239,68,68,0.5)" />
          <circle cx="34" cy="19" r="4" fill="rgba(234,179,8,0.5)" />
          <circle cx="46" cy="19" r="4" fill="rgba(34,197,94,0.5)" />
          <rect x="62" y="12" width="108" height="14" rx="4" fill="rgba(0,194,203,0.05)" stroke="rgba(0,194,203,0.18)" strokeWidth="0.5" />
          <circle cx="71" cy="19" r="3" fill="none" stroke="rgba(0,194,203,0.3)" strokeWidth="0.6" />
          <text x="122" y="22" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(0,194,203,0.45)" textAnchor="middle">lyniqmedia.com</text>
          <text x="180" y="22" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(0,194,203,0.25)" textAnchor="middle">↻</text>
          <rect x="6" y="32" width="204" height="16" fill="rgba(6,13,24,0.95)" />
          <rect x="14" y="37" width="20" height="6" rx="2" fill="rgba(0,194,203,0.15)" />
          <rect x="90" y="37" width="16" height="4" rx="1.5" fill="rgba(245,249,255,0.07)" />
          <rect x="112" y="37" width="16" height="4" rx="1.5" fill="rgba(245,249,255,0.07)" />
          <rect x="134" y="37" width="16" height="4" rx="1.5" fill="rgba(245,249,255,0.07)" />
          <rect x="176" y="35" width="28" height="8" rx="3" fill="rgba(0,194,203,0.3)" />
          <text x="190" y="41" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(6,13,24,0.9)" textAnchor="middle">STARTEN</text>
          <rect x="6" y="48" width="204" height="44" fill="rgba(6,13,24,0.9)" />
          <text x="80" y="63" fontFamily="Sora, sans-serif" fontSize="10" fontWeight="700" fill="rgba(245,249,255,0.85)">KI-SOFTWARE</text>
          <text x="80" y="74" fontFamily="Sora, sans-serif" fontSize="10" fontWeight="700" fill="rgba(245,249,255,0.85)">FÜR KMU</text>
          <rect x="14" y="80" width="50" height="7" rx="3" fill="rgba(0,194,203,0.8)" />
          <text x="39" y="85" fontFamily="JetBrains Mono" fontSize="5" fill="#060d18" textAnchor="middle">ANFRAGEN →</text>
          <ellipse cx="168" cy="68" rx="22" ry="22" fill="rgba(0,194,203,0.04)" stroke="rgba(0,194,203,0.08)" strokeWidth="0.5" />
          <rect x="156" y="56" width="24" height="24" rx="4" fill="rgba(0,194,203,0.06)" stroke="rgba(0,194,203,0.1)" strokeWidth="0.5" />
          <rect x="6" y="92" width="204" height="2" fill="rgba(0,194,203,0.06)" />
          <rect x="12" y="98" width="58" height="36" rx="4" fill="rgba(0,194,203,0.04)" stroke="rgba(0,194,203,0.12)" strokeWidth="0.5" />
          <rect x="78" y="98" width="58" height="36" rx="4" fill="rgba(26,106,255,0.04)" stroke="rgba(26,106,255,0.12)" strokeWidth="0.5" />
          <rect x="144" y="98" width="60" height="36" rx="4" fill="rgba(0,194,203,0.04)" stroke="rgba(0,194,203,0.12)" strokeWidth="0.5" />
          <circle cx="22" cy="107" r="5" fill="rgba(0,194,203,0.1)" stroke="rgba(0,194,203,0.3)" strokeWidth="0.5" />
          <rect x="14" y="117" width="38" height="3" rx="1" fill="rgba(245,249,255,0.12)" />
          <rect x="14" y="123" width="28" height="2" rx="1" fill="rgba(245,249,255,0.06)" />
          <circle cx="88" cy="107" r="5" fill="rgba(26,106,255,0.1)" stroke="rgba(26,106,255,0.3)" strokeWidth="0.5" />
          <rect x="80" y="117" width="38" height="3" rx="1" fill="rgba(245,249,255,0.12)" />
          <rect x="80" y="123" width="24" height="2" rx="1" fill="rgba(245,249,255,0.06)" />
          <circle cx="154" cy="107" r="5" fill="rgba(0,194,203,0.1)" stroke="rgba(0,194,203,0.3)" strokeWidth="0.5" />
          <rect x="146" y="117" width="42" height="3" rx="1" fill="rgba(245,249,255,0.12)" />
          <rect x="146" y="123" width="32" height="2" rx="1" fill="rgba(245,249,255,0.06)" />
        </svg>
      );
    case "automatisierung":
      return (
        <svg viewBox="0 0 220 150" fill="none" {...ILLUSTRATION_SVG_PROPS}>
          <defs>
            <marker id={`arr-auto-${suffix}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="rgba(0,194,203,0.6)" />
            </marker>
          </defs>
          <rect x="4" y="54" width="46" height="32" rx="5" fill="rgba(0,194,203,0.08)" stroke="rgba(0,194,203,0.4)" strokeWidth="0.8" />
          <text x="27" y="67" fontFamily="JetBrains Mono" fontSize="6" fill="rgba(0,194,203,0.5)" textAnchor="middle">WEBHOOK</text>
          <circle cx="27" cy="77" r="5" fill="rgba(0,194,203,0.1)" stroke="rgba(0,194,203,0.4)" strokeWidth="0.6" />
          <text x="27" y="80" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(0,194,203,0.6)" textAnchor="middle">⚡</text>
          <line x1="50" y1="70" x2="68" y2="70" stroke="rgba(0,194,203,0.5)" strokeWidth="0.9" markerEnd={`url(#arr-auto-${suffix})`} />
          <rect x="68" y="54" width="46" height="32" rx="5" fill="rgba(26,106,255,0.08)" stroke="rgba(26,106,255,0.35)" strokeWidth="0.8" />
          <text x="91" y="67" fontFamily="JetBrains Mono" fontSize="6" fill="rgba(100,150,255,0.6)" textAnchor="middle">FILTER</text>
          <text x="91" y="78" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(100,150,255,0.5)" textAnchor="middle">if KMU</text>
          <line x1="114" y1="70" x2="132" y2="70" stroke="rgba(0,194,203,0.5)" strokeWidth="0.9" markerEnd={`url(#arr-auto-${suffix})`} />
          <rect x="132" y="54" width="46" height="32" rx="5" fill="rgba(0,194,203,0.1)" stroke="rgba(0,194,203,0.5)" strokeWidth="0.9" />
          <text x="155" y="65" fontFamily="JetBrains Mono" fontSize="6" fill="rgba(0,194,203,0.7)" textAnchor="middle">CRM</text>
          <text x="155" y="74" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(0,194,203,0.5)" textAnchor="middle">eintragen</text>
          <circle cx="155" cy="82" r="3" fill="rgba(34,197,94,0.6)" />
          <line x1="155" y1="86" x2="155" y2="100" stroke="rgba(0,194,203,0.25)" strokeWidth="0.7" strokeDasharray="3,2" />
          <rect x="110" y="100" width="90" height="28" rx="5" fill="rgba(0,194,203,0.06)" stroke="rgba(0,194,203,0.2)" strokeWidth="0.6" />
          <text x="133" y="112" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(0,194,203,0.4)" textAnchor="middle">✉ E-MAIL</text>
          <text x="133" y="121" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(0,194,203,0.3)" textAnchor="middle">personalisiert</text>
          <text x="181" y="112" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(0,194,203,0.4)" textAnchor="middle">🔔 SLACK</text>
          <text x="181" y="121" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(0,194,203,0.3)" textAnchor="middle">team notify</text>
          <line x1="155" y1="100" x2="133" y2="112" stroke="rgba(0,194,203,0.15)" strokeWidth="0.5" />
          <line x1="155" y1="100" x2="181" y2="112" stroke="rgba(0,194,203,0.15)" strokeWidth="0.5" />
          <line x1="91" y1="54" x2="91" y2="35" stroke="rgba(239,68,68,0.3)" strokeWidth="0.7" strokeDasharray="3,2" />
          <rect x="58" y="15" width="66" height="20" rx="4" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.2)" strokeWidth="0.5" />
          <text x="91" y="27" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(239,68,68,0.45)" textAnchor="middle">✗ SKIP · log</text>
          <rect x="178" y="4" width="38" height="14" rx="4" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" />
          <circle cx="186" cy="11" r="2.5" fill="rgba(34,197,94,0.7)" />
          <text x="205" y="14" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(34,197,94,0.6)" textAnchor="middle">LIVE</text>
          <text x="27" y="100" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(0,194,203,0.25)" textAnchor="middle">847 runs</text>
          <text x="27" y="108" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(0,194,203,0.18)" textAnchor="middle">letzter: 2min</text>
        </svg>
      );
    case "mvp-prototypen":
      return (
        <svg viewBox="0 0 220 150" fill="none" {...ILLUSTRATION_SVG_PROPS}>
          <line x1="15" y1="20" x2="15" y2="110" stroke="rgba(245,249,255,0.04)" strokeWidth="0.5" />
          <line x1="55" y1="20" x2="55" y2="110" stroke="rgba(245,249,255,0.04)" strokeWidth="0.5" />
          <line x1="95" y1="20" x2="95" y2="110" stroke="rgba(245,249,255,0.04)" strokeWidth="0.5" />
          <line x1="135" y1="20" x2="135" y2="110" stroke="rgba(245,249,255,0.04)" strokeWidth="0.5" />
          <line x1="175" y1="20" x2="175" y2="110" stroke="rgba(245,249,255,0.04)" strokeWidth="0.5" />
          <line x1="205" y1="20" x2="205" y2="110" stroke="rgba(245,249,255,0.04)" strokeWidth="0.5" />
          <text x="15" y="118" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(245,249,255,0.15)" textAnchor="middle">MO</text>
          <text x="55" y="118" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(245,249,255,0.15)" textAnchor="middle">DI</text>
          <text x="95" y="118" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(245,249,255,0.15)" textAnchor="middle">MI</text>
          <text x="135" y="118" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(245,249,255,0.15)" textAnchor="middle">DO</text>
          <text x="175" y="118" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(245,249,255,0.15)" textAnchor="middle">FR</text>
          <text x="205" y="118" fontFamily="JetBrains Mono" fontSize="5.5" fill="rgba(245,249,255,0.15)" textAnchor="middle">SA</text>
          <rect x="5" y="24" width="56" height="10" rx="3" fill="rgba(0,194,203,0.2)" stroke="rgba(0,194,203,0.4)" strokeWidth="0.5" />
          <text x="8" y="31" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(0,194,203,0.7)">SCOPE + DESIGN</text>
          <rect x="45" y="38" width="96" height="10" rx="3" fill="rgba(26,106,255,0.15)" stroke="rgba(26,106,255,0.35)" strokeWidth="0.5" />
          <text x="48" y="45" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(100,150,255,0.7)">FRONTEND DEVELOPMENT</text>
          <rect x="45" y="52" width="76" height="10" rx="3" fill="rgba(0,194,203,0.12)" stroke="rgba(0,194,203,0.3)" strokeWidth="0.5" />
          <text x="48" y="59" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(0,194,203,0.6)">BACKEND + API</text>
          <rect x="115" y="66" width="56" height="10" rx="3" fill="rgba(26,106,255,0.12)" stroke="rgba(26,106,255,0.3)" strokeWidth="0.5" />
          <text x="118" y="73" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(100,150,255,0.6)">INTEGRATION</text>
          <rect x="145" y="80" width="46" height="10" rx="3" fill="rgba(234,179,8,0.1)" stroke="rgba(234,179,8,0.3)" strokeWidth="0.5" />
          <text x="148" y="87" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(234,179,8,0.6)">TESTING + FIX</text>
          <rect x="185" y="94" width="26" height="10" rx="3" fill="rgba(0,194,203,0.25)" stroke="rgba(0,194,203,0.6)" strokeWidth="0.7" />
          <text x="188" y="101" fontFamily="JetBrains Mono" fontSize="5" fill="rgba(0,194,203,0.9)">LAUNCH</text>
          <line x1="205" y1="20" x2="205" y2="108" stroke="rgba(0,194,203,0.4)" strokeWidth="0.8" strokeDasharray="4,2" />
          <circle cx="205" cy="108" r="6" fill="rgba(0,194,203,0.15)" stroke="rgba(0,194,203,0.6)" strokeWidth="0.8" />
          <text x="205" y="112" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(0,194,203,0.9)" textAnchor="middle">✓</text>
          <rect x="50" y="128" width="120" height="14" rx="4" fill="rgba(0,194,203,0.06)" stroke="rgba(0,194,203,0.15)" strokeWidth="0.5" />
          <text x="110" y="138" fontFamily="JetBrains Mono" fontSize="6" fill="rgba(0,194,203,0.45)" textAnchor="middle">TOTAL: 1 WOCHE · FESTPREIS</text>
        </svg>
      );
    default:
      return getIllustration("ki-software", suffix);
  }
}

function ServiceCard({
  service,
  slideIndex,
}: {
  service: Service;
  slideIndex: number;
}) {
  const serviceId = resolveServiceId(service.number, slideIndex);
  const illustrationKey = `${service.number}-${slideIndex}`;
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute top-0 right-0 left-0 h-px bg-cyan-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.4 }}
      />

      <div
        style={{
          background: hovered ? CARD_BG_HOVER : CARD_BG,
          border: `0.5px solid ${hovered ? "rgba(0,194,203,0.3)" : "rgba(0,194,203,0.12)"}`,
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          minHeight: "480px",
          height: "100%",
          transition: "background 0.3s, border-color 0.3s",
          cursor: "default",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px 6px",
            minHeight: "220px",
            maxHeight: "240px",
            position: "relative",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "28px",
              background: `linear-gradient(to bottom, transparent, ${hovered ? CARD_BG_HOVER : CARD_BG})`,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {getIllustration(serviceId, illustrationKey)}
          </div>
        </div>

        <div
          style={{
            flex: "1 1 auto",
            padding: "16px 20px 24px",
            borderTop: "0.5px solid rgba(0,194,203,0.06)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "10px",
              letterSpacing: "2px",
              color: "rgba(0, 194, 203, 0.4)",
              marginBottom: "12px",
              display: "block",
            }}
          >
            {`// ${service.number} //`}
          </span>

          <h3
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "17px",
              fontWeight: 700,
              color: "#f5f9ff",
              letterSpacing: "-0.02em",
              marginBottom: "10px",
              textTransform: "uppercase",
              lineHeight: 1.3,
            }}
          >
            {service.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "rgba(245, 249, 255, 0.5)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServiceCarousel({ services }: { services: Service[] }) {
  const slides = useMemo(
    () => (services.length < 6 ? [...services, ...services] : services),
    [services],
  );

  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="py-2">
        {slides.map((service, index) => (
          <CarouselItem
            key={`${service.number}-${index}`}
            className="flex py-2 sm:basis-1/2 lg:basis-1/3"
          >
            <ServiceCard service={service} slideIndex={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20" />
      <CarouselNext className="border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20" />
    </Carousel>
  );
}
