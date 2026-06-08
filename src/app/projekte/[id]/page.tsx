import HomeAnchorLink from "@/components/HomeAnchorLink";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import PageShell from "@/components/PageShell";
import { projectData } from "@/data/project-content";
import {
  PROJECT_SLUGS,
  relatedProjects,
  resolveProjectSlug,
} from "@/lib/project-slugs";
import {
  OrgFlowAufgabenCardShot,
  OrgFlowKombiCardShot,
  OrgFlowSchichtenCardShot,
} from "@/components/mockups/OrgFlowMockups";
import {
  BurgerstationAboutShot,
  BurgerstationLandingShot,
  BurgerstationMenuShot,
} from "@/components/mockups/BurgerstationShots";
import {
  CabisinoCompanionsShot,
  CabisinoLandingShot,
  CabisinoTicketShot,
} from "@/components/mockups/CabisinoShots";
import {
  FinanzAnalyticsCardShot,
  FinanzDashboardCardShot,
  FinanzTransactionsCardShot,
} from "@/components/mockups/FinanzMockups";
import {
  LernInformatikCardShot,
  LernPolitikCardShot,
  PhysikDashboardCardShot,
} from "@/components/mockups/LernMockups";
import {
  FussbodenKontaktCardShot,
  FussbodenLandingCardShot,
  FussbodenReferenzenCardShot,
} from "@/components/mockups/FussbodenheizungShots";
import {
  FahrschuleDashboardCardShot,
  FahrschuleLandingCardShot,
  FahrschuleVoiceAgentCardShot,
} from "@/components/mockups/FahrschuleShots";
import {
  AiAgentenDashboardCardShot,
  AiAgentenWebsiteCardShot,
  AiAgentenWhatsappCardShot,
} from "@/components/mockups/AiAgentenShots";
import {
  GebaeudereinigungAngebotCardShot,
  GebaeudereinigungKiAnalyseCardShot,
  GebaeudereinigungObjektCardShot,
} from "@/components/mockups/GebaeudereinigungShots";

type ProjectMockups = {
  hero: ComponentType;
  top?: ComponentType;
  bottom?: ComponentType;
  imageStyle: "mockup" | "light" | "dark";
};

const projectMockups: Record<string, ProjectMockups> = {
  "burgerstation-leer": {
    hero: BurgerstationLandingShot,
    top: BurgerstationMenuShot,
    bottom: BurgerstationAboutShot,
    imageStyle: "light",
  },
  "ki-finanzanalyse-app": {
    hero: FinanzDashboardCardShot,
    top: FinanzTransactionsCardShot,
    bottom: FinanzAnalyticsCardShot,
    imageStyle: "mockup",
  },
  "fahrschule-lead-system": {
    hero: FahrschuleLandingCardShot,
    top: FahrschuleDashboardCardShot,
    bottom: FahrschuleVoiceAgentCardShot,
    imageStyle: "mockup",
  },
  "orgflow-saas": {
    hero: OrgFlowKombiCardShot,
    top: OrgFlowAufgabenCardShot,
    bottom: OrgFlowSchichtenCardShot,
    imageStyle: "mockup",
  },
  "cabisino-gaesteliste": {
    hero: CabisinoLandingShot,
    top: CabisinoCompanionsShot,
    bottom: CabisinoTicketShot,
    imageStyle: "dark",
  },
  "abitur-lernplattformen": {
    hero: PhysikDashboardCardShot,
    top: LernInformatikCardShot,
    bottom: LernPolitikCardShot,
    imageStyle: "dark",
  },
  "fussbodenheizung-website": {
    hero: FussbodenLandingCardShot,
    top: FussbodenReferenzenCardShot,
    bottom: FussbodenKontaktCardShot,
    imageStyle: "light",
  },
  "ai-agenten-kmu": {
    hero: AiAgentenDashboardCardShot,
    top: AiAgentenWhatsappCardShot,
    bottom: AiAgentenWebsiteCardShot,
    imageStyle: "dark",
  },
  "gebaeudereinigung-mvp": {
    hero: GebaeudereinigungKiAnalyseCardShot,
    top: GebaeudereinigungObjektCardShot,
    bottom: GebaeudereinigungAngebotCardShot,
    imageStyle: "light",
  },
};

export function generateStaticParams() {
  return PROJECT_SLUGS.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const slug = resolveProjectSlug(id);
  const project = slug ? projectData[slug] : undefined;
  if (!project || !slug) return { title: "Projekt nicht gefunden" };

  return {
    title: { absolute: project.seo.title },
    description: project.seo.description,
    keywords: project.seo.keywords,
    authors: [{ name: "Leon Wenke", url: "https://lyniqmedia.com" }],
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      url: `https://lyniqmedia.com/projekte/${slug}`,
      siteName: "LYNIQ",
      locale: "de_DE",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description,
    },
    alternates: {
      canonical: `https://lyniqmedia.com/projekte/${slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const slug = resolveProjectSlug(id);
  if (!slug) notFound();

  const project = projectData[slug];
  if (!project) notFound();

  const isKonzept = project.type.includes("KONZEPT");
  const isEigenprojekt = project.type.includes("EIGENPROJEKT");
  const isDemo = project.type.includes("DEMO");

  const mockups = projectMockups[slug];
  const relatedSlugs = relatedProjects[slug] ?? [];
  const Hero = mockups?.hero;
  const Top = mockups?.top;
  const Bottom = mockups?.bottom;
  const galleryIsMockup = mockups?.imageStyle === "mockup";
  const gallerySlotClass = galleryIsMockup
    ? "project-screenshot-slot project-screenshot-slot--mockup"
    : mockups?.imageStyle === "light"
      ? "project-screenshot-slot project-screenshot-slot--light"
      : "project-screenshot-slot project-screenshot-slot--dark";

  const readableSection = { maxWidth: "900px" } as const;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.seo.description,
    creator: {
      "@type": "Person",
      name: "Leon Wenke",
      affiliation: {
        "@type": "Organization",
        name: "LYNIQ",
        url: "https://lyniqmedia.com",
      },
    },
    url: `https://lyniqmedia.com/projekte/${slug}`,
    ...(project.url && { sameAs: project.url }),
    keywords: project.seo.keywords.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lyniqmedia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projekte",
        item: "https://lyniqmedia.com/projekte",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `https://lyniqmedia.com/projekte/${slug}`,
      },
    ],
  };

  return (
    <PageShell>
      <main
        className="project-detail-page"
        style={{
          minHeight: "100vh",
          padding: "120px 80px 80px",
        }}
      >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Link
        href="/#projekte"
        style={{
          ...readableSection,
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "11px",
          letterSpacing: "2px",
          color: "rgba(0,194,203,0.6)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "48px",
        }}
      >
        ← Alle Projekte
      </Link>

      <div style={{ marginBottom: "64px", ...readableSection }}>
        <div
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "#00c2cb",
            marginBottom: "12px",
          }}
        >
          {project.type}
        </div>
        <h1
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "800",
            color: "#f5f9ff",
            letterSpacing: "-0.04em",
            lineHeight: "1",
            marginBottom: "20px",
          }}
        >
          {project.name}
        </h1>
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "18px",
            fontWeight: "300",
            color: "rgba(245,249,255,0.6)",
            lineHeight: "1.7",
            maxWidth: "700px",
          }}
        >
          {project.description}
        </p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "24px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#00c2cb",
              textDecoration: "none",
              border: "0.5px solid rgba(0,194,203,0.3)",
              borderRadius: "999px",
              padding: "10px 20px",
              transition: "all 0.25s",
            }}
          >
            Live ansehen ↗
          </a>
        )}
      </div>

      {mockups && Hero && (
        <div style={{ marginBottom: "64px" }}>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(0,194,203,0.5)",
              marginBottom: "20px",
            }}
          >
            {"// EINBLICKE"}
          </div>
          {Top && Bottom ? (
            <div
              className={`project-image-grid project-detail-gallery${
                galleryIsMockup ? " project-image-grid--mockup" : ""
              }`}
            >
              <div className="project-left-col">
                <div className={gallerySlotClass}>
                  <Top />
                </div>
                <div className={gallerySlotClass}>
                  <Bottom />
                </div>
              </div>
              <div className={gallerySlotClass}>
                <Hero />
              </div>
            </div>
          ) : (
            <div
              className={gallerySlotClass}
              style={{ aspectRatio: "16 / 9", overflow: "hidden" }}
            >
              <Hero />
            </div>
          )}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2px",
          marginBottom: "48px",
          ...readableSection,
        }}
      >
        {[
          {
            label: "PROBLEM",
            content: project.problem,
            color: "rgba(255,100,100,0.6)",
          },
          { label: "LÖSUNG", content: project.solution, color: "#00c2cb" },
          {
            label: "ERGEBNIS",
            content: project.result,
            color: "rgba(74,158,255,0.8)",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "rgba(10,21,37,0.8)",
              border: "0.5px solid rgba(0,194,203,0.1)",
              padding: "32px 36px",
              borderRadius:
                i === 0 ? "8px 8px 0 0" : i === 2 ? "0 0 8px 8px" : "0",
            }}
          >
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "2px",
                color: item.color,
                marginBottom: "10px",
              }}
            >
              {`// ${item.label}`}
            </div>
            <p
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "15px",
                fontWeight: "300",
                color: "rgba(245,249,255,0.7)",
                lineHeight: "1.75",
              }}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginBottom: "64px",
          ...readableSection,
        }}
      >
        <div
          style={{
            background: "rgba(10,21,37,0.8)",
            border: "0.5px solid rgba(0,194,203,0.1)",
            borderRadius: "8px",
            padding: "28px",
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(0,194,203,0.5)",
              marginBottom: "16px",
            }}
          >
            {"// TECH STACK"}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.stack_detail.map((tech, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  color: "rgba(245,249,255,0.6)",
                  border: "0.5px solid rgba(245,249,255,0.1)",
                  borderRadius: "2px",
                  padding: "4px 10px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            background: "rgba(10,21,37,0.8)",
            border: "0.5px solid rgba(0,194,203,0.1)",
            borderRadius: "8px",
            padding: "28px",
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(0,194,203,0.5)",
              marginBottom: "16px",
            }}
          >
            {"// META"}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "8px",
                  color: "rgba(245,249,255,0.25)",
                  letterSpacing: "1px",
                  marginBottom: "4px",
                }}
              >
                ZEITRAUM
              </div>
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#f5f9ff",
                }}
              >
                {project.duration}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "8px",
                  color: "rgba(245,249,255,0.25)",
                  letterSpacing: "1px",
                  marginBottom: "4px",
                }}
              >
                STATUS
              </div>
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: isKonzept ? "rgba(245,249,255,0.4)" : "#00c2cb",
                }}
              >
                {isKonzept
                  ? "In Entwicklung"
                  : isEigenprojekt
                    ? "Eigenprojekt"
                    : isDemo
                      ? "Demo"
                      : "Live ✓"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedSlugs.length > 0 && (
        <div style={{ marginBottom: "64px", ...readableSection }}>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(0,194,203,0.5)",
              marginBottom: "20px",
            }}
          >
            {"// VERWANDTE PROJEKTE"}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {relatedSlugs.map((relatedSlug) => {
              const related = projectData[relatedSlug];
              if (!related) return null;
              return (
                <Link
                  key={relatedSlug}
                  href={`/projekte/${relatedSlug}`}
                  style={{
                    display: "block",
                    background: "rgba(10,21,37,0.8)",
                    border: "0.5px solid rgba(0,194,203,0.1)",
                    borderRadius: "8px",
                    padding: "24px",
                    textDecoration: "none",
                    transition: "border-color 0.25s",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      color: "#00c2cb",
                      marginBottom: "8px",
                    }}
                  >
                    {related.type}
                  </div>
                  <div
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#f5f9ff",
                    }}
                  >
                    {related.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div
        style={{
          borderTop: "0.5px solid rgba(0,194,203,0.08)",
          paddingTop: "48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
          ...readableSection,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "10px",
              letterSpacing: "2px",
              color: "#00c2cb",
              marginBottom: "8px",
            }}
          >
            ÄHNLICHES PROJEKT?
          </div>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "15px",
              fontWeight: "300",
              color: "rgba(245,249,255,0.5)",
            }}
          >
            Lass uns reden — erstes Gespräch kostenlos.
          </p>
        </div>
        <HomeAnchorLink
          sectionId="kontakt"
          style={{
            background: "#00c2cb",
            color: "#060d18",
            fontFamily: "Sora, sans-serif",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "1px",
            padding: "14px 32px",
            borderRadius: "2px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Projekt anfragen →
        </HomeAnchorLink>
      </div>
    </main>
    </PageShell>
  );
}
