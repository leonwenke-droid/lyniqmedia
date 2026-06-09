"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import NoSSRWrapper from "@/components/NoSSRWrapper";
import { useRouter } from "next/navigation";
import type { ComponentType, CSSProperties } from "react";
import { useRef } from "react";

function mockupShot<
  M extends Record<string, ComponentType>,
  K extends keyof M & string,
>(loader: () => Promise<M>, name: K) {
  return dynamic(() => loader().then((mod) => mod[name]), { ssr: false });
}

const OrgFlowAufgabenCardShot = mockupShot(
  () => import("@/components/mockups/OrgFlowMockups"),
  "OrgFlowAufgabenCardShot",
);
const OrgFlowSchichtenCardShot = mockupShot(
  () => import("@/components/mockups/OrgFlowMockups"),
  "OrgFlowSchichtenCardShot",
);
const OrgFlowKombiCardShot = mockupShot(
  () => import("@/components/mockups/OrgFlowMockups"),
  "OrgFlowKombiCardShot",
);
const BurgerstationMenuShot = mockupShot(
  () => import("@/components/mockups/BurgerstationShots"),
  "BurgerstationMenuShot",
);
const BurgerstationAboutShot = mockupShot(
  () => import("@/components/mockups/BurgerstationShots"),
  "BurgerstationAboutShot",
);
const BurgerstationLandingShot = mockupShot(
  () => import("@/components/mockups/BurgerstationShots"),
  "BurgerstationLandingShot",
);
const CabisinoCompanionsShot = mockupShot(
  () => import("@/components/mockups/CabisinoShots"),
  "CabisinoCompanionsShot",
);
const CabisinoTicketShot = mockupShot(
  () => import("@/components/mockups/CabisinoShots"),
  "CabisinoTicketShot",
);
const CabisinoLandingShot = mockupShot(
  () => import("@/components/mockups/CabisinoShots"),
  "CabisinoLandingShot",
);
const FinanzTransactionsCardShot = mockupShot(
  () => import("@/components/mockups/FinanzMockups"),
  "FinanzTransactionsCardShot",
);
const FinanzAnalyticsCardShot = mockupShot(
  () => import("@/components/mockups/FinanzMockups"),
  "FinanzAnalyticsCardShot",
);
const FinanzDashboardCardShot = mockupShot(
  () => import("@/components/mockups/FinanzMockups"),
  "FinanzDashboardCardShot",
);
const LernInformatikCardShot = mockupShot(
  () => import("@/components/mockups/LernMockups"),
  "LernInformatikCardShot",
);
const LernPolitikCardShot = mockupShot(
  () => import("@/components/mockups/LernMockups"),
  "LernPolitikCardShot",
);
const PhysikDashboardCardShot = mockupShot(
  () => import("@/components/mockups/LernMockups"),
  "PhysikDashboardCardShot",
);
const FussbodenReferenzenCardShot = mockupShot(
  () => import("@/components/mockups/FussbodenheizungShots"),
  "FussbodenReferenzenCardShot",
);
const FussbodenKontaktCardShot = mockupShot(
  () => import("@/components/mockups/FussbodenheizungShots"),
  "FussbodenKontaktCardShot",
);
const FussbodenLandingCardShot = mockupShot(
  () => import("@/components/mockups/FussbodenheizungShots"),
  "FussbodenLandingCardShot",
);
const AiAgentenDashboardCardShot = mockupShot(
  () => import("@/components/mockups/AiAgentenShots"),
  "AiAgentenDashboardCardShot",
);
const GebaeudereinigungKiAnalyseCardShot = mockupShot(
  () => import("@/components/mockups/GebaeudereinigungShots"),
  "GebaeudereinigungKiAnalyseCardShot",
);
const FahrschuleVoiceAgentCardShot = mockupShot(
  () => import("@/components/mockups/FahrschuleShots"),
  "FahrschuleVoiceAgentCardShot",
);
const FahrschuleLandingCardShot = mockupShot(
  () => import("@/components/mockups/FahrschuleShots"),
  "FahrschuleLandingCardShot",
);
const FahrschuleDashboardCardShot = mockupShot(
  () => import("@/components/mockups/FahrschuleShots"),
  "FahrschuleDashboardCardShot",
);

function FloatingShape({
  width,
  height,
  top,
  left,
  right,
  rotate,
  delay,
  gradient,
}: {
  width: number;
  height: number;
  top?: string;
  left?: string;
  right?: string;
  rotate: number;
  delay: number;
  gradient: string;
}) {
  return (
    <div
      style={
        {
          position: "absolute",
          top,
          left,
          right,
          width: `${width}px`,
          height: `${height}px`,
          transform: `rotate(${rotate}deg)`,
          animation: `lyniqFloat ${12 + delay * 2}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          "--rotate": `${rotate}deg`,
          pointerEvents: "none",
          zIndex: 0,
        } as CSSProperties
      }
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "999px",
          background: `linear-gradient(to right, ${gradient}, transparent)`,
          backdropFilter: "blur(2px)",
          border: "1px solid rgba(0,194,203,0.08)",
          boxShadow: "0 8px 32px 0 rgba(0,194,203,0.04)",
        }}
      />
    </div>
  );
}

type Project = {
  number: string;
  slug: string;
  type: string;
  name: string;
  subtitle?: string;
  description: string;
  url: string | null;
  stack: string;
  col1img1: string | null;
  col1img2: string | null;
  col2img: string | null;
  MockupCol1Top?: ComponentType;
  MockupCol1Bottom?: ComponentType;
  MockupCol2?: ComponentType;
  mockupLayout?: boolean;
  imageStyle?: "mockup" | "light" | "dark";
};

const projects: Project[] = [
  {
    number: "04",
    slug: "orgflow-saas",
    type: "LIVE · SAAS",
    name: "OrgFlow",
    description: "Multi-tenant SaaS für Studentenorganisationen und Vereine.",
    url: "https://orgflow.de",
    stack: "Next.js · Supabase · Stripe",
    col1img1: null,
    col1img2: null,
    col2img: null,
    MockupCol1Top: OrgFlowAufgabenCardShot,
    MockupCol1Bottom: OrgFlowSchichtenCardShot,
    MockupCol2: OrgFlowKombiCardShot,
    imageStyle: "mockup",
  },
  {
    number: "01",
    slug: "burgerstation-leer",
    type: "LIVE · WEB",
    name: "Burgerstation Leer",
    description:
      "Website, Speisekarte & Bestellsystem mit SumUp POS. In einer Woche gebaut.",
    url: "https://burgerstation.vercel.app",
    stack: "Next.js · SumUp · Vercel",
    col1img1: null,
    col1img2: null,
    col2img: null,
    MockupCol1Top: BurgerstationMenuShot,
    MockupCol1Bottom: BurgerstationAboutShot,
    MockupCol2: BurgerstationLandingShot,
    imageStyle: "light",
  },
  {
    number: "05",
    slug: "cabisino-gaesteliste",
    type: "LIVE · EVENT",
    name: "Digitale Gästeliste",
    subtitle: "Cabisino · Abiball",
    description:
      "Digitale Gästeliste mit Voranmeldung fürs Abiball — QR-Check-in, schneller Einlass. In 2 Stunden live.",
    url: null as string | null,
    stack: "React · Vercel",
    col1img1: null,
    col1img2: null,
    col2img: null,
    MockupCol1Top: CabisinoCompanionsShot,
    MockupCol1Bottom: CabisinoTicketShot,
    MockupCol2: CabisinoLandingShot,
    imageStyle: "dark",
  },
  {
    number: "02",
    slug: "ki-finanzanalyse-app",
    type: "EIGENPROJEKT · KI",
    name: "KI-Finanzanalyse App",
    description:
      "Finanz-Dashboard mit KI-Analyse von Ein- und Ausgaben. DSGVO-konform.",
    url: null as string | null,
    stack: "Next.js · Supabase · Anthropic API",
    col1img1: null,
    col1img2: null,
    col2img: null,
    MockupCol1Top: FinanzTransactionsCardShot,
    MockupCol1Bottom: FinanzAnalyticsCardShot,
    MockupCol2: FinanzDashboardCardShot,
    imageStyle: "mockup",
  },
  {
    number: "06",
    slug: "abitur-lernplattformen",
    type: "LIVE · SAAS · KI",
    name: "Abitur Lernplattformen",
    description:
      "Interaktive Lernplattformen für NDS Abitur — Physik, Informatik, Politik. Mit KI-Lernbot.",
    url: null as string | null,
    stack: "Next.js · Supabase · Vercel",
    col1img1: null,
    col1img2: null,
    col2img: null,
    MockupCol1Top: LernInformatikCardShot,
    MockupCol1Bottom: LernPolitikCardShot,
    MockupCol2: PhysikDashboardCardShot,
    imageStyle: "dark",
  },
  {
    number: "07",
    slug: "fussbodenheizung-website",
    type: "DEMO · WEB",
    name: "Fußbodenheizung Website",
    description: "Unternehmenswebsite für niederländischen Dienstleister.",
    url: null as string | null,
    stack: "React · Tailwind · Vercel",
    col1img1: null,
    col1img2: null,
    col2img: null,
    MockupCol1Top: FussbodenReferenzenCardShot,
    MockupCol1Bottom: FussbodenKontaktCardShot,
    MockupCol2: FussbodenLandingCardShot,
    imageStyle: "light",
  },
  {
    number: "08",
    slug: "ai-agenten-kmu",
    type: "EIGENPROJEKT · KI",
    name: "AI Agenten",
    description:
      "24/7 Voice Agent der Leads qualifiziert und strukturiert weitergibt.",
    url: null as string | null,
    stack: "Voice AI · Webhook · WhatsApp",
    col1img1: null as string | null,
    col1img2: null as string | null,
    col2img: null as string | null,
    MockupCol2: AiAgentenDashboardCardShot,
    imageStyle: "dark",
  },
  {
    number: "09",
    slug: "gebaeudereinigung-mvp",
    type: "KONZEPT · KI",
    name: "Gebäudereinigung MVP",
    description:
      "Foto → KI analysiert Verschmutzung → generiert Reinigungsaufgaben automatisch.",
    url: null as string | null,
    stack: "Next.js · Vision API · Supabase",
    col1img1: null as string | null,
    col1img2: null as string | null,
    col2img: null as string | null,
    MockupCol2: GebaeudereinigungKiAnalyseCardShot,
    imageStyle: "light",
  },
  {
    number: "03",
    slug: "fahrschule-lead-system",
    type: "KONZEPT · KI",
    name: "Fahrschule Lead-System",
    description:
      "Chatbot + Voice Agent der Fahrlehrer während Fahrstunden entlastet.",
    url: null as string | null,
    stack: "Voice AI · Chatbot · n8n",
    col1img1: null as string | null,
    col1img2: null as string | null,
    col2img: null as string | null,
    MockupCol1Top: FahrschuleVoiceAgentCardShot,
    MockupCol1Bottom: FahrschuleLandingCardShot,
    MockupCol2: FahrschuleDashboardCardShot,
    imageStyle: "mockup",
  },
];

const featuredNumbers = ["01", "02", "03"];

const featuredProjects = projects.filter((p) =>
  featuredNumbers.includes(p.number),
);

const gridProjects = projects.filter(
  (p) => !featuredNumbers.includes(p.number),
);

const totalCards = featuredProjects.length;
const STACK_SCALE_STEP = 0.025;
const STACK_TOP_BASE_VH = 12;
const STACK_TOP_STEP_PX = 56;

function MockupFallback() {
  return (
    <div
      aria-hidden={true}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 12,
        background: "rgba(255,255,255,0.02)",
      }}
    />
  );
}

function useCardScale(
  index: number,
  progress: ReturnType<typeof useScroll>["scrollYProgress"],
) {
  const targetScale = 1 - (totalCards - 1 - index) * STACK_SCALE_STEP;
  const rangeStart = index / totalCards;

  return useTransform(progress, [rangeStart, 1], [1, targetScale]);
}

function renderScreenshotSlot(
  Mockup: ComponentType | undefined,
  src: string | null,
  options?: { mockup?: boolean; alt?: string; priority?: boolean },
) {
  if (Mockup) {
    return (
      <NoSSRWrapper fallback={<MockupFallback />}>
        <Mockup />
      </NoSSRWrapper>
    );
  }
  if (src) {
    const alt = options?.alt ?? "Projekt-Screenshot von LYNIQ";
    if (options?.mockup) {
      return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="project-mockup-img"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={options.priority}
            loading={options.priority ? undefined : "lazy"}
          />
        </div>
      );
    }
    return (
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    );
  }
  return (
    <span
      style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "9px",
        color: "rgba(0,194,203,0.3)",
        letterSpacing: "1px",
      }}
    >
      SCREENSHOT
    </span>
  );
}

function ProjectCard({
  project,
  index,
  progress,
}: {
  project: Project;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const scale = useCardScale(index, progress);

  const isMockup = project.imageStyle === "mockup";
  const isLight = project.imageStyle === "light";
  const isDark = project.imageStyle === "dark";
  const slotClass = isMockup
    ? "project-screenshot-slot project-screenshot-slot--mockup"
    : isLight
      ? "project-screenshot-slot project-screenshot-slot--light"
      : isDark
        ? "project-screenshot-slot project-screenshot-slot--dark"
        : "project-screenshot-slot";

  const hasTop = Boolean(project.MockupCol1Top || project.col1img1);
  const hasBottom = Boolean(project.MockupCol1Bottom || project.col1img2);
  const isSingleMockup = !hasTop && !hasBottom;
  const detailHref = `/projekte/${project.slug}`;
  const router = useRouter();
  const eagerImage = index === 0;

  const mockupGallery = isSingleMockup ? (
    <div
      className={slotClass}
      role="presentation"
      aria-hidden={true}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        height: "clamp(380px, 55vh, 560px)",
      }}
    >
      {renderScreenshotSlot(project.MockupCol2, project.col2img, {
        mockup: isMockup,
        priority: eagerImage,
      })}
    </div>
  ) : project.mockupLayout ? (
    <div className="project-mockup-grid" role="presentation" aria-hidden={true}>
      <div className="project-mockup-cell project-mockup-cell--hero">
        {renderScreenshotSlot(project.MockupCol2, project.col2img, {
          mockup: true,
          priority: eagerImage,
        })}
      </div>
      <div className="project-mockup-cell">
        {renderScreenshotSlot(project.MockupCol1Top, project.col1img1, {
          mockup: true,
        })}
      </div>
      <div className="project-mockup-cell">
        {renderScreenshotSlot(project.MockupCol1Bottom, project.col1img2, {
          mockup: true,
        })}
      </div>
    </div>
  ) : (
    <div
      className={`project-image-grid${isMockup ? " project-image-grid--mockup" : ""}`}
      role="presentation"
      aria-hidden={true}
      style={{
        display: "grid",
        gridTemplateColumns: "40% 60%",
        gap: "10px",
        height: "clamp(380px, 55vh, 560px)",
      }}
    >
      <div
        className="project-left-col"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          minHeight: 0,
        }}
      >
        <div
          className={slotClass}
          style={{
            flex: "0 0 48%",
            borderRadius: "16px",
            overflow: "hidden",
            minHeight: 0,
          }}
        >
          {renderScreenshotSlot(project.MockupCol1Top, project.col1img1, {
            mockup: isMockup,
            priority: eagerImage,
          })}
        </div>
        <div
          className={slotClass}
          style={{
            flex: "0 0 52%",
            borderRadius: "16px",
            overflow: "hidden",
            minHeight: 0,
          }}
        >
          {renderScreenshotSlot(project.MockupCol1Bottom, project.col1img2, {
            mockup: isMockup,
          })}
        </div>
      </div>

      <div
        className={slotClass}
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          height: "100%",
        }}
      >
        {renderScreenshotSlot(project.MockupCol2, project.col2img, {
          mockup: isMockup,
        })}
      </div>
    </div>
  );

  return (
    <div
      className="project-featured-card"
      style={
        {
          "--card-index": index,
          height: "88vh",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          position: "sticky",
          top: `calc(${STACK_TOP_BASE_VH}vh + ${index} * ${STACK_TOP_STEP_PX}px)`,
          zIndex: index + 1,
        } as CSSProperties
      }
    >
      <motion.div
        className="project-featured-card-inner"
        style={{
          scale,
          width: "100%",
          maxWidth: "1200px",
          borderRadius: "28px",
          border: "0.5px solid rgba(0,194,203,0.2)",
          background: "#060d18",
          padding: "40px",
          transformOrigin: "top center",
        }}
      >
        <Link
          href={detailHref}
          style={{
            textDecoration: "none",
            display: "block",
            color: "inherit",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "clamp(48px, 6vw, 80px)",
                  fontWeight: "800",
                  color: "rgba(245,249,255,0.15)",
                  lineHeight: "1",
                  letterSpacing: "-0.04em",
                }}
              >
                {project.number}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    color: "#00c2cb",
                    marginBottom: "4px",
                  }}
                >
                  {project.type}
                </div>
                <div
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: "clamp(18px, 2.5vw, 28px)",
                    fontWeight: "700",
                    color: "#f5f9ff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.name}
                </div>
                {project.subtitle ? (
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      color: "rgba(245,249,255,0.4)",
                      marginTop: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.subtitle}
                  </div>
                ) : null}
              </div>
            </div>

            {project.url ? (
              <span
                role="link"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(
                    project.url ?? undefined,
                    "_blank",
                    "noopener,noreferrer",
                  );
                }}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#f5f9ff",
                  border: "0.5px solid rgba(245,249,255,0.3)",
                  borderRadius: "999px",
                  padding: "10px 20px",
                  textDecoration: "none",
                  transition: "all 0.25s",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00c2cb";
                  e.currentTarget.style.color = "#00c2cb";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(245,249,255,0.3)";
                  e.currentTarget.style.color = "#f5f9ff";
                }}
              >
                Live ansehen ↗
              </span>
            ) : project.type.includes("KONZEPT") ? (
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "rgba(245,249,255,0.3)",
                  border: "0.5px solid rgba(245,249,255,0.1)",
                  borderRadius: "999px",
                  padding: "10px 20px",
                  whiteSpace: "nowrap",
                }}
              >
                In Entwicklung
              </span>
            ) : (
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#00c2cb",
                  border: "0.5px solid rgba(0,194,203,0.3)",
                  borderRadius: "999px",
                  padding: "10px 20px",
                  whiteSpace: "nowrap",
                }}
              >
                Deployed ✓
              </span>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "20px",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "13px",
                fontWeight: "300",
                color: "rgba(245,249,255,0.5)",
                lineHeight: "1.7",
                maxWidth: "500px",
              }}
            >
              {project.description}
            </p>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "1px",
                color: "rgba(245,249,255,0.25)",
                textAlign: "right",
                whiteSpace: "nowrap",
              }}
            >
              {project.stack}
            </div>
          </div>
        </Link>

        <div
          role="link"
          tabIndex={0}
          onClick={() => router.push(detailHref)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              router.push(detailHref);
            }
          }}
          style={{ cursor: "pointer" }}
        >
          {mockupGallery}
        </div>
      </motion.div>
    </div>
  );
}

function GridCard({ project }: { project: Project }) {
  const MockupCol2 = project.MockupCol2;
  const detailHref = `/projekte/${project.slug}`;
  const router = useRouter();

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={() => router.push(detailHref)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(detailHref);
        }
      }}
      style={{
        display: "block",
        background: "rgba(10,21,37,0.6)",
        border: "0.5px solid rgba(0,194,203,0.1)",
        borderRadius: "12px",
        overflow: "hidden",
        textDecoration: "none",
        transition: "border-color 0.3s, transform 0.3s",
        cursor: "pointer",
        position: "relative",
        color: "inherit",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,194,203,0.35)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,194,203,0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          height: "1px",
          background: "#00c2cb",
          opacity: 0.4,
        }}
      />

      <div className="projects-grid-compact__media">
        {MockupCol2 ? (
          <NoSSRWrapper fallback={<MockupFallback />}>
            <MockupCol2 />
          </NoSSRWrapper>
        ) : (
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              color: "rgba(0,194,203,0.3)",
              letterSpacing: "1px",
            }}
          >
            SCREENSHOT
          </span>
        )}
      </div>

      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "15px",
              fontWeight: "600",
              color: "#f5f9ff",
              letterSpacing: "-0.02em",
              display: "block",
            }}
          >
            {project.name}
            {project.subtitle ? (
              <span
                style={{
                  display: "block",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "8px",
                  fontWeight: "400",
                  letterSpacing: "0.06em",
                  color: "rgba(245,249,255,0.35)",
                  marginTop: "3px",
                  textTransform: "uppercase",
                }}
              >
                {project.subtitle}
              </span>
            ) : null}
          </span>
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "8px",
              letterSpacing: "1px",
              color: "rgba(245,249,255,0.15)",
            }}
          >
            {project.number}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "5px",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
        >
          {project.type.split(" · ").map((tag, i) => (
            <span
              key={i}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "8px",
                letterSpacing: "1.5px",
                padding: "2px 7px",
                borderRadius: "2px",
                color:
                  tag === "LIVE"
                    ? "#00c2cb"
                    : tag === "KI"
                      ? "#a78bfa"
                      : tag === "KONZEPT"
                        ? "rgba(245,249,255,0.3)"
                        : "#4a9eff",
                border: `0.5px solid ${
                  tag === "LIVE"
                    ? "rgba(0,194,203,0.3)"
                    : tag === "KI"
                      ? "rgba(167,139,250,0.3)"
                      : tag === "KONZEPT"
                        ? "rgba(245,249,255,0.1)"
                        : "rgba(74,158,255,0.3)"
                }`,
                background:
                  tag === "LIVE"
                    ? "rgba(0,194,203,0.06)"
                    : tag === "KI"
                      ? "rgba(167,139,250,0.06)"
                      : "transparent",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "12px",
            fontWeight: "300",
            color: "rgba(245,249,255,0.4)",
            lineHeight: "1.6",
            marginBottom: "12px",
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "8px",
            letterSpacing: "0.5px",
            color: "rgba(245,249,255,0.18)",
          }}
        >
          {project.stack}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featuredStackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: featuredStackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projekte"
      style={{
        padding: "100px 56px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <FloatingShape
          width={600}
          height={130}
          top="5%"
          right="-10%"
          rotate={-12}
          delay={0.3}
          gradient="rgba(0,194,203,0.05)"
        />
        <FloatingShape
          width={200}
          height={55}
          top="85%"
          right="8%"
          rotate={-8}
          delay={2.5}
          gradient="rgba(0,194,203,0.03)"
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
      <div style={{ marginBottom: "64px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div style={{ width: "32px", height: "1px", background: "#00c2cb" }} />
          <span
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#00c2cb",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>
        <h2
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: "700",
            color: "#f5f9ff",
            letterSpacing: "-0.03em",
            lineHeight: "1.1",
            marginBottom: "8px",
          }}
        >
          Ausgewählte Projekte
        </h2>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "15px",
            fontWeight: "300",
            color: "rgba(245,249,255,0.5)",
            lineHeight: "1.7",
          }}
        >
          Echte Lösungen. Echte Ergebnisse.
        </p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "9px",
            letterSpacing: "2px",
            color: "rgba(0,194,203,0.4)",
          }}
        >
          {"// FEATURED"}
        </span>
      </div>
      <div ref={featuredStackRef} className="project-featured-stack">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <div style={{ paddingTop: "80px", paddingBottom: "100px" }}>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "9px",
            letterSpacing: "2px",
            color: "rgba(245,249,255,0.2)",
            display: "block",
            marginBottom: "24px",
          }}
        >
          {"// WEITERE PROJEKTE"}
        </span>
        <div className="projects-grid-compact">
          {gridProjects.map((project) => (
            <GridCard key={project.number} project={project} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
