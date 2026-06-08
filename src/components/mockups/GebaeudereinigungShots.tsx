"use client";

export function GebaeudereinigungKiAnalyseCardShot() {
  return (
    <div role="presentation" aria-hidden={true} style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#f9fafb' }}>
      <div style={{ transform: 'scale(0.48)', transformOrigin: 'top left', width: '208%', height: '208%' }}>
        <div style={{ display: 'flex', height: '100%', fontFamily: 'var(--font-dm-sans), "DM Sans", system-ui, sans-serif', background: '#f9fafb' }}>

          {/* Sidebar */}
          <div style={{ width: 220, minWidth: 220, background: 'white', borderRight: '1px solid #e5e7eb', padding: '20px 12px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, background: '#2563eb', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>SauberGebäude</div>
                <div style={{ fontSize: 10, color: '#9ca3af' }}>Gebäudemanagement</div>
              </div>
            </div>
            {[
              { label: 'Übersicht', active: false },
              { label: 'Objekte', active: false },
              { label: 'Neues Objekt', active: false },
              { label: 'KI-Analyse', active: true },
              { label: 'Angebote', active: false },
              { label: 'Aufträge', active: false },
              { label: 'Reinigungspläne', active: false },
              { label: 'Produkte', active: false },
              { label: 'Mitarbeiter', active: false },
              { label: 'Berichte', active: false },
              { label: 'Einstellungen', active: false },
            ].map((item) => (
              <div key={item.label} style={{ padding: '8px 12px', borderRadius: 6, fontSize: 13, fontWeight: item.active ? 600 : 500, color: item.active ? '#2563eb' : '#6b7280', background: item.active ? '#eff6ff' : 'transparent' }}>
                {item.label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div style={{ flex: 1, background: '#f9fafb', padding: '28px 32px', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 22 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#111827', margin: 0 }}>KI-Analyse abgeschlossen</div>
                  <span style={{ background: '#fef9c3', color: '#b45309', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, border: '1px solid #fde68a' }}>Mittel</span>
                </div>
                <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>Objekt: ABC Immobilien GmbH · Analysiert am 04.06.2026</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ padding: '8px 14px', border: '1px solid #e5e7eb', background: 'white', borderRadius: 6, fontSize: 13, fontWeight: 500, color: '#374151' }}>Analysebericht herunterladen</div>
                <div style={{ padding: '8px 16px', background: '#2563eb', color: 'white', borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Kostenvoranschlag erstellen →</div>
              </div>
            </div>

            {/* Summary stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 22 }}>
              {[
                { label: 'Analysierte Bereiche', value: '4', color: '#111827' },
                { label: 'Ø Verschmutzung', value: '62%', color: '#ca8a04' },
                { label: 'Hochprioritär', value: '2', color: '#dc2626' },
                { label: 'Ges. Reinigungszeit', value: '42 Std', color: '#2563eb' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, padding: '14px 16px' }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: s.color }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Room cards grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>

              {/* Bürobereich */}
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gebaeudereinigung/buero-innenansicht.webp" alt="Bürogebäude Innenansicht — Gebäudereinigung MVP von LYNIQ" style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.55)', color: 'white', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>Bürobereich</div>
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Bürobereich</span>
                    <span style={{ background: '#dcfce7', color: '#16a34a', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20 }}>Niedrig</span>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: '#6b7280' }}>Verschmutzungsgrad</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#16a34a' }}>35%</span>
                    </div>
                    <div style={{ background: '#f3f4f6', borderRadius: 3, height: 5 }}>
                      <div style={{ width: '35%', height: 5, background: '#22c55e', borderRadius: 3 }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, paddingTop: 10, borderTop: '1px solid #f3f4f6' }}>
                    <div><div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 2 }}>Häufigkeit</div><div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>2× / Woche</div></div>
                    <div><div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 2 }}>Reinigungszeit</div><div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>3,5 Std.</div></div>
                  </div>
                </div>
              </div>

              {/* Sanitäranlagen */}
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gebaeudereinigung/badezimmer.webp" alt="Badezimmer mit Reinigungsbedarf — Gebäudereinigung MVP von LYNIQ" style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.55)', color: 'white', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>Sanitäranlagen</div>
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Sanitäranlagen</span>
                    <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20 }}>Hoch</span>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: '#6b7280' }}>Verschmutzungsgrad</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#dc2626' }}>82%</span>
                    </div>
                    <div style={{ background: '#f3f4f6', borderRadius: 3, height: 5 }}>
                      <div style={{ width: '82%', height: 5, background: '#ef4444', borderRadius: 3 }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, paddingTop: 10, borderTop: '1px solid #f3f4f6' }}>
                    <div><div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 2 }}>Häufigkeit</div><div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>5× / Woche</div></div>
                    <div><div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 2 }}>Reinigungszeit</div><div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>6,0 Std.</div></div>
                  </div>
                </div>
              </div>

              {/* Flure */}
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gebaeudereinigung/buero-glasfassade.webp" alt="Modernes Büro mit Glasfassade — Gebäudereinigung MVP von LYNIQ" style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.55)', color: 'white', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>Flure & Treppenhäuser</div>
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Flure & Treppenhäuser</span>
                    <span style={{ background: '#fef9c3', color: '#ca8a04', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20 }}>Mittel</span>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: '#6b7280' }}>Verschmutzungsgrad</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#ca8a04' }}>57%</span>
                    </div>
                    <div style={{ background: '#f3f4f6', borderRadius: 3, height: 5 }}>
                      <div style={{ width: '57%', height: 5, background: '#eab308', borderRadius: 3 }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, paddingTop: 10, borderTop: '1px solid #f3f4f6' }}>
                    <div><div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 2 }}>Häufigkeit</div><div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>3× / Woche</div></div>
                    <div><div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 2 }}>Reinigungszeit</div><div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>4,0 Std.</div></div>
                  </div>
                </div>
              </div>

              {/* Küche */}
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gebaeudereinigung/kueche.webp" alt="Küche mit Arbeitsflächen — Gebäudereinigung MVP von LYNIQ" style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.55)', color: 'white', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4 }}>Küche & Pausenräume</div>
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Küche & Pausenräume</span>
                    <span style={{ background: '#ffedd5', color: '#ea580c', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20 }}>Erhöht</span>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: '#6b7280' }}>Verschmutzungsgrad</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#ea580c' }}>74%</span>
                    </div>
                    <div style={{ background: '#f3f4f6', borderRadius: 3, height: 5 }}>
                      <div style={{ width: '74%', height: 5, background: '#f97316', borderRadius: 3 }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, paddingTop: 10, borderTop: '1px solid #f3f4f6' }}>
                    <div><div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 2 }}>Häufigkeit</div><div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>4× / Woche</div></div>
                    <div><div style={{ fontSize: 10, color: '#9ca3af', marginBottom: 2 }}>Reinigungszeit</div><div style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>5,5 Std.</div></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const gebaeudeNavItems: [string, boolean][] = [
  ['Übersicht', false], ['Objekte', false], ['Neues Objekt', false], ['KI-Analyse', false],
  ['Angebote', true], ['Aufträge', false], ['Reinigungspläne', false], ['Produkte', false],
  ['Mitarbeiter', false], ['Berichte', false], ['Einstellungen', false],
];

function GebaeudeSidebar({ activeLabel }: { activeLabel: string }) {
  return (
    <div style={{ width: 180, background: '#fff', borderRight: '1px solid #e5e7eb', padding: '16px 12px', flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
        <div style={{ width: 28, height: 28, background: 'rgba(37,99,235,0.1)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🏢</div>
        <div><div style={{ fontSize: 11, fontWeight: 700, color: '#1a1a1a' }}>SauberGebäude</div><div style={{ fontSize: 8, color: '#666' }}>Gebäudereinigung</div></div>
      </div>
      {gebaeudeNavItems.map(([label, active]) => (
        <div key={label} style={{ padding: '7px 8px', borderRadius: 6, marginBottom: 1, background: (active || label === activeLabel) ? 'rgba(37,99,235,0.08)' : 'transparent', fontSize: 10, color: (active || label === activeLabel) ? '#2563eb' : '#555', fontWeight: (active || label === activeLabel) ? 600 : 400 }}>{label}</div>
      ))}
    </div>
  );
}

export function GebaeudereinigungAngebotCardShot() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#f9fafb', overflow: 'hidden', fontFamily: 'sans-serif' }}>
      <div style={{ transform: 'scale(0.48)', transformOrigin: 'top left', width: '208%', height: '208%', display: 'flex' }}>
        <GebaeudeSidebar activeLabel="Angebote" />
        <div style={{ flex: 1, padding: 24, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <div style={{ width: 20, height: 20, background: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>✓</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a' }}>Angebot automatisch erstellt</div>
          </div>
          <div style={{ fontSize: 11, color: '#666', marginBottom: 20 }}>Basierend auf der KI-Analyse vom 24.05.2025</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a', marginBottom: 10 }}>Gebäudeübersicht</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <div style={{ width: 60, height: 60, background: '#e0e8f0', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🏢</div>
                <div style={{ fontSize: 10, color: '#333', lineHeight: 1.6 }}>Bürogebäude · 1.250 m² · 3 Etagen</div>
              </div>
            </div>
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a', marginBottom: 10 }}>Empfohlene Aufgaben</div>
              {['Bodenreinigung', 'Fensterreinigung', 'Sanitärreinigung'].map(t => (
                <div key={t} style={{ fontSize: 10, color: '#333', marginBottom: 4 }}>✓ {t}</div>
              ))}
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: 14, marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a', marginBottom: 8 }}>Preisübersicht</div>
            {[['Monatlicher Preis', '1.480 €'], ['Grundreinigung', '690 €']].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#555', padding: '4px 0', borderBottom: '1px solid #f3f4f6' }}><span>{l}</span><span>{v}</span></div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: '#2563eb', padding: '6px 0', marginTop: 4 }}><span>Gesamt</span><span>2.170 €</span></div>
          </div>
          <div style={{ background: '#2563eb', color: '#fff', borderRadius: 6, padding: 10, textAlign: 'center', fontSize: 11, fontWeight: 600 }}>📄 PDF Angebot erstellen</div>
        </div>
      </div>
    </div>
  );
}

export function GebaeudereinigungObjektCardShot() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', overflow: 'hidden', fontFamily: 'sans-serif' }}>
      <div style={{ transform: 'scale(0.48)', transformOrigin: 'top left', width: '208%', height: '208%', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 18 }}>🏢</div>
            <div><div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>SauberGebäude</div><div style={{ fontSize: 9, color: '#666' }}>Gebäudereinigung</div></div>
          </div>
          <div style={{ fontSize: 11, color: '#555' }}>Max Mustermann · Reinigungsservice GmbH</div>
        </div>
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
            {[true, false, false, false].map((on, i) => (
              <div key={i} style={{ height: 4, flex: 1, background: on ? '#2563eb' : '#e5e7eb', borderRadius: 999 }} />
            ))}
          </div>
          <div style={{ fontSize: 10, color: '#2563eb', textAlign: 'right' }}>Schritt 1 von 4</div>
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#1a1a1a', marginBottom: 20 }}>Neues Objekt aufnehmen</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
          {[['Name des Gebäudes', 'z. B. Bürokomplex Musterstadt'], ['Kundenname', 'z. B. ABC Immobilien GmbH'], ['Adresse', 'z. B. Musterstraße 123'], ['Ansprechpartner', 'z. B. Max Mustermann']].map(([l, p]) => (
            <div key={l}>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#333', marginBottom: 4 }}>{l}</div>
              <div style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '8px 10px', fontSize: 10, color: '#999' }}>{p}</div>
            </div>
          ))}
        </div>
        <div style={{ border: '2px dashed #d1d5db', borderRadius: 6, padding: 16, textAlign: 'center', marginBottom: 14 }}>
          <div style={{ fontSize: 20, marginBottom: 4 }}>📷</div>
          <div style={{ fontSize: 10, color: '#2563eb', fontWeight: 600 }}>Fotos vom Objekt hochladen</div>
        </div>
        <div style={{ background: '#2563eb', color: '#fff', borderRadius: 8, padding: 12, textAlign: 'center', fontSize: 13, fontWeight: 600 }}>Analyse starten →</div>
      </div>
    </div>
  );
}
