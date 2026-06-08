import type { Metadata } from "next";
import SaveContactButton from "@/components/visitenkarte/SaveContactButton";
import {
  ChevronRight,
  Clock,
  ExternalLink,
  Globe,
  Laptop,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Leon Wenke — LYNIQ" },
  description:
    "KI-Software & digitale Produkte für den Mittelstand. MVP in einer Woche.",
  alternates: { canonical: "https://lyniqmedia.com/visitenkarte" },
  robots: { index: false, follow: false },
};

const dividerStyle: CSSProperties = {
  height: "0.5px",
  background:
    "linear-gradient(to right, transparent, rgba(0,194,203,0.25), transparent)",
  margin: "0 24px",
};

const stats = [
  { value: "9+", label: "PROJEKTE" },
  { value: "1W", label: "MVP-ZEIT" },
  { value: "100%", label: "DSGVO" },
] as const;

const pitchPoints = [
  { icon: Laptop, text: "Websites, MVPs & KI-Software für KMU" },
  { icon: Clock, text: "Erstes Gespräch kostenlos · Festpreis danach" },
  { icon: ShieldCheck, text: "Server in Deutschland · DSGVO-konform" },
] as const;

const contacts = [
  {
    icon: Mail,
    label: "E-MAIL",
    value: "info@lyniqmedia.com",
    href: "mailto:info@lyniqmedia.com",
    variant: "cyan" as const,
  },
  {
    icon: Phone,
    label: "TELEFON",
    value: "+49 (0) 1517 5007219",
    href: "tel:+4915175007219",
    variant: "cyan" as const,
  },
  {
    icon: MapPin,
    label: "STANDORT",
    value: "Alte Poststraße 17a, 26835 Holtland",
    href: null,
    variant: "blue" as const,
  },
  {
    icon: Globe,
    label: "WEBSITE",
    value: "lyniqmedia.com",
    href: "https://lyniqmedia.com",
    variant: "blue" as const,
  },
] as const;

const stackTags = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "SUPABASE",
  "AI APIs",
  "VERCEL",
  "FRAMER",
] as const;

const quickLinks = [
  {
    label: "E-MAIL",
    href: "mailto:info@lyniqmedia.com",
    external: false,
    comingSoon: false,
  },
  { label: "ANRUFEN", href: "tel:+4915175007219", external: false, comingSoon: false },
  { label: "LINKEDIN", href: null, external: false, comingSoon: true },
  { label: "GITHUB", href: null, external: false, comingSoon: true },
] as const;

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "12px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono), JetBrains Mono, monospace",
          fontSize: "8px",
          letterSpacing: "2px",
          color: "rgba(0,194,203,0.5)",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <div
        style={{
          flex: 1,
          height: "0.5px",
          background: "rgba(0,194,203,0.12)",
        }}
      />
    </div>
  );
}

function IconBox({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "cyan" | "blue";
}) {
  const isCyan = variant === "cyan";
  return (
    <div
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: isCyan
          ? "rgba(0,194,203,0.08)"
          : "rgba(26,106,255,0.08)",
        border: `0.5px solid ${isCyan ? "rgba(0,194,203,0.2)" : "rgba(26,106,255,0.2)"}`,
        color: isCyan ? "#00c2cb" : "rgba(100,150,255,0.9)",
      }}
    >
      {children}
    </div>
  );
}

export default function VisitenkartePage() {
  return (
    <main
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "420px",
        margin: "0 auto",
        minHeight: "100vh",
        background: "transparent",
        color: "#f5f9ff",
      }}
    >
      {/* Hero */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "28px 28px 32px",
          background: "transparent",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 340 260"
            fill="none"
            style={{ position: "absolute", inset: 0, opacity: 0.6 }}
            aria-hidden
          >
            <g stroke="rgba(0,194,203,0.2)" strokeWidth="0.8">
              <line x1="28" y1="38" x2="28" y2="44" />
              <line x1="25" y1="41" x2="31" y2="41" />
              <line x1="308" y1="120" x2="308" y2="126" />
              <line x1="305" y1="123" x2="311" y2="123" />
            </g>
            <path
              d="M12 18 L12 8 L22 8"
              stroke="rgba(0,194,203,0.3)"
              strokeWidth="0.8"
              fill="none"
            />
            <path
              d="M318 18 L318 8 L308 8"
              stroke="rgba(0,194,203,0.3)"
              strokeWidth="0.8"
              fill="none"
            />
          </svg>
        </div>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div
            style={{
              position: "relative",
              width: "92px",
              height: "92px",
              margin: "0 auto 16px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                borderRadius: "50%",
                border: "1.5px solid rgba(0,194,203,0.6)",
                animation: "vcardSpin 8s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "50%",
                border: "0.5px solid rgba(0,194,203,0.2)",
                animation: "vcardSpin 14s linear infinite reverse",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "50%",
                border: "0.5px solid rgba(0,194,203,0.08)",
                animation: "vcardSpin 20s linear infinite",
              }}
            />
            <div
              style={{
                width: "92px",
                height: "92px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(0,194,203,0.25), rgba(26,106,255,0.2))",
                border: "1.5px solid rgba(0,194,203,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sora), Sora, sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#00c2cb",
                position: "relative",
                zIndex: 1,
              }}
            >
              LW
            </div>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              background: "rgba(0,194,203,0.08)",
              border: "0.5px solid rgba(0,194,203,0.3)",
              borderRadius: "100px",
              padding: "5px 14px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#00c2cb",
                animation: "vcardPulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "2px",
                color: "#00c2cb",
              }}
            >
              VERFÜGBAR FÜR PROJEKTE
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-sora), Sora, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 8vw, 1.8rem)",
              color: "#f5f9ff",
              letterSpacing: "-0.03em",
              margin: "0 0 6px",
            }}
          >
            Leon Wenke
          </h1>

          <p
            style={{
              fontFamily: "var(--font-mono), JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(0,194,203,0.7)",
              margin: "0 0 6px",
            }}
          >
            {"// GRÜNDER · LYNIQ"}
          </p>

          <p
            style={{
              fontFamily: "var(--font-body), DM Sans, sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              color: "rgba(245,249,255,0.35)",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            KI-Software & digitale Produkte für den Mittelstand
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              marginTop: "18px",
              border: "0.5px solid rgba(0,194,203,0.15)",
              borderRadius: "12px",
              overflow: "hidden",
              background: "rgba(6,13,24,0.7)",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  position: "relative",
                  padding: "14px 8px",
                  textAlign: "center",
                }}
              >
                {index < stats.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "20%",
                      height: "60%",
                      width: "0.5px",
                      background: "rgba(0,194,203,0.15)",
                    }}
                  />
                )}
                <div
                  style={{
                    fontFamily: "var(--font-sora), Sora, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#f5f9ff",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                    fontSize: "7px",
                    letterSpacing: "1.5px",
                    color: "rgba(245,249,255,0.3)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={dividerStyle} />

      {/* Pitch */}
      <section
        style={{
          margin: "16px 24px",
          padding: "18px 20px",
          background: "rgba(0,194,203,0.03)",
          border: "0.5px solid rgba(0,194,203,0.15)",
          borderRadius: "14px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(0,194,203,0.5), transparent)",
          }}
        />
        <SectionLabel>{"// WAS ICH MACHE"}</SectionLabel>
        <p
          style={{
            fontFamily: "var(--font-body), DM Sans, sans-serif",
            fontWeight: 300,
            fontSize: "13px",
            color: "rgba(245,249,255,0.55)",
            lineHeight: 1.7,
            margin: "0 0 14px",
          }}
        >
          Du brauchst eine{" "}
          <strong style={{ fontWeight: 400, color: "rgba(245,249,255,0.75)" }}>
            Website, ein Bestellsystem oder eine KI-Lösung
          </strong>{" "}
          — und willst nicht monatelang auf eine Agentur warten. Ich baue das in
          einer Woche. Festpreis, direkt mit mir.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {pitchPoints.map(({ icon: Icon, text }) => (
            <div
              key={text}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "6px",
                  background: "rgba(0,194,203,0.1)",
                  border: "0.5px solid rgba(0,194,203,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00c2cb",
                  flexShrink: 0,
                }}
              >
                <Icon size={11} strokeWidth={2} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body), DM Sans, sans-serif",
                  fontWeight: 300,
                  fontSize: "12px",
                  color: "rgba(245,249,255,0.5)",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div style={dividerStyle} />

      {/* Contact list */}
      <section style={{ padding: "12px 24px 0" }}>
        {contacts.map((item) => {
          const Icon = item.icon;
          const inner = (
            <>
              <IconBox variant={item.variant}>
                <Icon size={16} strokeWidth={1.75} />
              </IconBox>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                    fontSize: "8px",
                    letterSpacing: "1.5px",
                    color: "rgba(245,249,255,0.25)",
                    marginBottom: "3px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), DM Sans, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "rgba(245,249,255,0.75)",
                  }}
                >
                  {item.value}
                </div>
              </div>
              {item.href && (
                <ChevronRight
                  size={16}
                  color="rgba(0,194,203,0.35)"
                  strokeWidth={1.5}
                />
              )}
            </>
          );

          const rowStyle: CSSProperties = {
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "14px 0",
            borderBottom: "0.5px solid rgba(0,194,203,0.08)",
            textDecoration: "none",
          };

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              style={rowStyle}
            >
              {inner}
            </a>
          ) : (
            <div key={item.label} style={rowStyle}>
              {inner}
            </div>
          );
        })}
      </section>

      {/* CTAs */}
      <section style={{ padding: "14px 24px 20px" }}>
        <SaveContactButton />

        <a
          href="https://lyniqmedia.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "13px",
            background: "rgba(0,194,203,0.05)",
            border: "0.5px solid rgba(0,194,203,0.2)",
            borderRadius: "12px",
            fontFamily: "var(--font-mono), JetBrains Mono, monospace",
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#00c2cb",
            textDecoration: "none",
            marginBottom: "10px",
          }}
        >
          WEBSITE ANSEHEN
          <ExternalLink size={14} strokeWidth={1.75} />
        </a>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
          }}
        >
          {quickLinks.map((link) => {
            const cellStyle: CSSProperties = {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
              background: "rgba(255,255,255,0.02)",
              border: "0.5px solid rgba(245,249,255,0.08)",
              borderRadius: "10px",
              padding: "11px",
              fontFamily: "var(--font-mono), JetBrains Mono, monospace",
              fontSize: "9px",
              letterSpacing: "1.5px",
              color: link.comingSoon
                ? "rgba(245,249,255,0.2)"
                : "rgba(245,249,255,0.45)",
              textDecoration: "none",
              cursor: link.comingSoon ? "default" : "pointer",
              opacity: link.comingSoon ? 0.65 : 1,
            };

            if (link.comingSoon || !link.href) {
              return (
                <div key={link.label} style={cellStyle} aria-disabled>
                  <span>{link.label}</span>
                  <span
                    style={{
                      fontSize: "7px",
                      letterSpacing: "1px",
                      color: "rgba(0,194,203,0.35)",
                    }}
                  >
                    COMING SOON
                  </span>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                style={cellStyle}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </section>

      {/* Stack */}
      <section style={{ padding: "0 24px 32px" }}>
        <SectionLabel>STACK</SectionLabel>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {stackTags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "5px 11px",
                border: "0.5px solid rgba(0,194,203,0.15)",
                borderRadius: "100px",
                fontFamily: "var(--font-mono), JetBrains Mono, monospace",
                fontSize: "8px",
                letterSpacing: "1px",
                color: "rgba(0,194,203,0.5)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
