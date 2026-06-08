"use client";

import { MockupScaler } from "@/components/mockups/MockupScaler";
import { ScaledScreenshot } from "@/components/mockups/ScaledScreenshot";
import "./lern-mockup.css";

const W = 1024;
const H = 580;
const BG = "#0c0e14";

function Ring({ pct, size = "md" }: { pct: number; size?: "md" | "sm" }) {
  const cls = size === "sm" ? "phy-module__ring" : "phy-ring";
  return (
    <div className={cls} style={{ ["--pct" as string]: `${pct}%` }}>
      <span>{pct}%</span>
    </div>
  );
}

export function PhysikDashboardMockup() {
  return (
    <MockupScaler width={W} height={H}>
      <div className="phy-frame" role="presentation" aria-hidden={true}>
        <aside className="phy-sidebar">
          <div className="phy-brand">
            <div className="phy-brand__icon">⚛</div>
            <div>
              <strong>Physik Abitur</strong>
              <span>eA Lernplattform</span>
            </div>
          </div>

          <div className="phy-progress-block">
            <div className="phy-progress-block__label">Gesamtfortschritt</div>
            <Ring pct={34} />
          </div>

          <nav className="phy-nav">
            <div className="phy-nav__section">
              <div className="phy-nav__head">
                ⚡ Elektrizität <em>42%</em>
              </div>
              <div className="phy-nav__sub">
                <div>Elektrisches Feld <em style={{ color: "#64748b" }}>3/3</em></div>
                <div className="is-done">Elektrische Feldstärke & F…</div>
                <div className="is-done">Kondensator & Kapazität</div>
                <div>Entladevorgang des Konde…</div>
                <div style={{ marginTop: 4 }}>Magnetisches Feld <em style={{ color: "#64748b" }}>0/5</em></div>
              </div>
            </div>
            <div className="phy-nav__item">
              〰 Schwingungen & Wellen <em>18%</em>
            </div>
            <div className="phy-nav__item">📘 Formelsammlung</div>
            <div className="phy-nav__item">⚙ Einstellungen</div>
          </nav>

          <div className="phy-sidebar__foot">powered by LYNIQ Media</div>
        </aside>

        <main className="phy-main">
          <div className="phy-header">
            <div>
              <div>Willkommen zurück!</div>
              <p>Bereite dich auf dein Physik-Abitur vor.</p>
            </div>
            <span className="phy-streak">🔥 1 Tag in Folge</span>
          </div>

          <div className="phy-stats">
            <div className="phy-stat">
              <div className="phy-stat__icon phy-stat__icon--blue">📖</div>
              <div>
                <strong>34%</strong>
                <span>Abgeschlossen</span>
              </div>
            </div>
            <div className="phy-stat">
              <div className="phy-stat__icon phy-stat__icon--green">✓</div>
              <div>
                <strong>11 / 32</strong>
                <span>Lektionen</span>
              </div>
            </div>
            <div className="phy-stat">
              <div className="phy-stat__icon phy-stat__icon--purple">🏅</div>
              <div>
                <strong>8</strong>
                <span>Quizze bestanden</span>
              </div>
            </div>
          </div>

          <div className="phy-section-label">WEITERMACHEN</div>
          <div className="phy-continue">
            <div className="phy-continue__icon">📖</div>
            <div>
              <strong>Entladevorgang des Kondensators</strong>
              <span>Elektrizität · Elektrisches Feld</span>
            </div>
            <span className="phy-continue__arrow">→</span>
          </div>

          <div className="phy-section-label">MODULE</div>
          <div className="phy-modules">
            {[
              ["Elektrizität", "Elektrisches und magnetisches Feld, Kondensatoren, Induktion", "8 Lektionen", 42],
              ["Schwingungen & Wellen", "Harmonische Schwingungen, Wellen, Interferenz", "8 Lektionen", 18],
              ["Quantenobjekte", "Photoeffekt, Röntgenstrahlung, de-Broglie, Unschärfe", "5 Lektionen", 12],
              ["Atomhülle & Atomkern", "Potenzialtopf, Energieniveaus, Radioaktivität", "8 Lektionen", 5],
            ].map(([title, desc, lessons, pct]) => (
              <div key={title as string} className="phy-module">
                <Ring pct={pct as number} size="sm" />
                <strong>{title}</strong>
                <p>{desc}</p>
                <em>{lessons}</em>
              </div>
            ))}
          </div>
        </main>
      </div>
    </MockupScaler>
  );
}

export function LernInformatikShot() {
  return (
    <ScaledScreenshot
      src="/projects/lernapps/informatik.webp"
      alt="Informatik-Lernplattform für das NDS-Abitur — Abitur Lernplattformen von LYNIQ"
      width={1024}
      height={579}
      background={BG}
      fit="cover"
    />
  );
}

export function LernPolitikShot() {
  return (
    <ScaledScreenshot
      src="/projects/lernapps/politik.webp"
      alt="Politik-Wirtschaft-Lernplattform für das NDS-Abitur — Abitur Lernplattformen von LYNIQ"
      width={1024}
      height={579}
      background={BG}
      fit="cover"
    />
  );
}

export function PhysikDashboardCardShot() {
  return <PhysikDashboardMockup />;
}

export function LernInformatikCardShot() {
  return <LernInformatikShot />;
}

export function LernPolitikCardShot() {
  return <LernPolitikShot />;
}
