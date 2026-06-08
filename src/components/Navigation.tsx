"use client";

import LyniqMark from "./LyniqMark";
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { navigateToHomeSection } from "@/lib/scroll-to-section";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/", anchor: false },
  { label: "Services", href: "services", anchor: true },
  { label: "Projekte", href: "projekte", anchor: true },
  { label: "Blog", href: "/blog", anchor: false },
  { label: "Kontakt", href: "kontakt", anchor: true },
] as const;

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goToSection = (id: string) => {
    navigateToHomeSection(id, pathname, router);
    closeMenu();
  };

  return (
    <header className={`nav-root ${scrolled ? "nav-root--scrolled" : ""}`}>
      <div className="nav-inner">
        <Link
          href="/"
          onClick={closeMenu}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <LyniqMark size={32} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: "800",
                fontSize: "15px",
                color: "#f5f9ff",
                letterSpacing: "0.04em",
              }}
            >
              LYNIQ
            </span>
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: "500",
                fontSize: "7px",
                color: "#00c2cb",
                letterSpacing: "0.34em",
                marginTop: "2px",
              }}
            >
              MEDIA
            </span>
          </div>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex"
          aria-label="Hauptnavigation"
        >
          {NAV_LINKS.map(({ label, href, anchor }) =>
            anchor ? (
              <button
                key={label}
                type="button"
                onClick={() => goToSection(href)}
                className="nav-link"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {label}
              </button>
            ) : (
              <Link key={label} href={href} className="nav-link" onClick={closeMenu}>
                {label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          onClick={() => goToSection("kontakt")}
          className="nav-cta hidden md:inline-flex"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {"// Projekt starten →"}
        </button>

        <LiquidGlassButton
          type="button"
          variant="menu"
          size="icon"
          className="nav-menu-btn md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </LiquidGlassButton>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="nav-mobile-panel md:hidden"
          aria-label="Mobile Navigation"
        >
          {NAV_LINKS.map(({ label, href, anchor }) =>
            anchor ? (
              <button
                key={label}
                type="button"
                onClick={() => goToSection(href)}
                className="nav-mobile-link"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {label}
              </button>
            ) : (
              <Link
                key={label}
                href={href}
                className="nav-mobile-link"
                onClick={closeMenu}
              >
                {label}
              </Link>
            ),
          )}
          <button
            type="button"
            onClick={() => goToSection("kontakt")}
            className="nav-mobile-cta"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {"// Projekt starten →"}
          </button>
        </nav>
      ) : null}
    </header>
  );
}
