"use client";

import LyniqMark from "@/components/LyniqMark";
import { CONSENT_KEY } from "@/lib/consent";
import { LINKEDIN_URL } from "@/lib/social-links";
import {
  contactHref,
  navigateToContact,
  navigateToHomeSection,
} from "@/lib/scroll-to-section";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const linkStyle = {
  fontFamily: "DM Sans, sans-serif",
  fontSize: "13px",
  fontWeight: "300",
  color: "rgba(245,249,255,0.5)",
  textDecoration: "none",
  transition: "color 0.2s",
  cursor: "pointer",
} as const;

const bottomLinkStyle = {
  fontFamily: "JetBrains Mono, monospace",
  fontSize: "10px",
  letterSpacing: "1px",
  color: "rgba(245,249,255,0.18)",
  textDecoration: "none",
  transition: "color 0.25s",
  cursor: "pointer",
} as const;

const menuItems = [
  {
    title: "Leistungen",
    links: [
      { text: "KI-Software", href: "/#services" },
      { text: "Web & Digitale Produkte", href: "/#services" },
      { text: "Automatisierung", href: "/#services" },
      { text: "MVPs & Prototypen", href: "/#services" },
    ],
  },
  {
    title: "Projekte",
    links: [
      { text: "OrgFlow", href: "/projekte/orgflow-saas" },
      { text: "Burgerstation Leer", href: "/projekte/burgerstation-leer" },
      { text: "KI-Finanzanalyse", href: "/projekte/ki-finanzanalyse-app" },
      { text: "Fahrschule Lead-System", href: "/projekte/fahrschule-lead-system" },
      { text: "Alle Projekte", href: "/#projekte" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { text: "Über mich", href: "/ueber-mich" },
      { text: "Blog", href: "/blog" },
      { text: "Visitenkarte", href: "/visitenkarte" },
      { text: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { text: "Impressum", href: "/impressum" },
      { text: "Datenschutz", href: "/datenschutz" },
      { text: "AGB", href: "/agb" },
      { text: "Cookie-Einstellungen", href: "#cookie-settings" },
    ],
  },
];

function FooterLink({
  href,
  children,
  variant = "menu",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "menu" | "bottom";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const style = variant === "bottom" ? bottomLinkStyle : linkStyle;

  const hoverIn = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color =
      variant === "bottom" ? "#00c2cb" : "#00c2cb";
  };
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color =
      variant === "bottom" ? "rgba(245,249,255,0.18)" : "rgba(245,249,255,0.5)";
  };

  if (href === "#cookie-settings") {
    return (
      <button
        type="button"
        style={{
          ...style,
          background: "none",
          border: "none",
          padding: 0,
          ...(variant === "bottom"
            ? {
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                letterSpacing: "0.05em",
                color: "rgba(245,249,255,0.4)",
              }
            : {}),
        }}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
        onClick={() => {
          localStorage.removeItem(CONSENT_KEY);
          window.location.reload();
        }}
      >
        {children}
      </button>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
        {children}
      </a>
    );
  }

  if (href === "/kontakt") {
    return (
      <a
        href={contactHref(pathname)}
        style={style}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
        onClick={(e) => {
          e.preventDefault();
          navigateToContact(pathname, router);
        }}
      >
        {children}
      </a>
    );
  }

  const hashMatch = href.match(/^\/#(.+)$/);
  if (hashMatch) {
    const sectionId = hashMatch[1];

    return (
      <a
        href={href}
        style={style}
        onMouseEnter={hoverIn}
        onMouseLeave={hoverOut}
        onClick={(e) => {
          e.preventDefault();
          navigateToHomeSection(sectionId, pathname, router);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      style={style}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
              textDecoration: "none",
            }}
          >
            <LyniqMark size={28} />
            <div>
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#f5f9ff",
                  letterSpacing: "0.04em",
                }}
              >
                LYNIQ
              </div>
            </div>
          </Link>
          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontSize: "13px",
              fontWeight: "300",
              color: "rgba(245,249,255,0.45)",
              lineHeight: "1.7",
              maxWidth: "240px",
              marginBottom: "20px",
            }}
          >
            KI-Software & digitale Produkte für den Mittelstand. MVP in einer
            Woche. DSGVO-konform.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <a
              href="mailto:info@lyniqmedia.com"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                letterSpacing: "1px",
                color: "#00c2cb",
                textDecoration: "none",
              }}
            >
              info@lyniqmedia.com
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "10px",
                letterSpacing: "1px",
                color: "rgba(245,249,255,0.45)",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {menuItems.map((section) => (
          <div key={section.title}>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                letterSpacing: "2px",
                color: "rgba(245,249,255,0.3)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {section.title}
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {section.links.map((link) => (
                <li key={link.text}>
                  <FooterLink href={link.href}>{link.text}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="site-footer__bar">
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            letterSpacing: "1px",
            lineHeight: 1.7,
            color: "rgba(245,249,255,0.18)",
          }}
        >
          © 2026 LYNIQ · Leon Wenke
          <br />
          Alte Poststraße 17a, 26835 Holtland
          <br />
          +49 (0) 1517 5007219
          <br />
          <a
            href="mailto:info@lyniqmedia.com"
            style={{ color: "rgba(245,249,255,0.18)", textDecoration: "none" }}
          >
            info@lyniqmedia.com
          </a>
        </span>
        <div className="site-footer__legal-links">
          {[
            { text: "Impressum", href: "/impressum" },
            { text: "Datenschutz", href: "/datenschutz" },
            { text: "AGB", href: "/agb" },
            { text: "Cookie-Einstellungen", href: "#cookie-settings" },
          ].map((link) => (
            <FooterLink key={link.text} href={link.href} variant="bottom">
              {link.text}
            </FooterLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
