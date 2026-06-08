# LYNIQ Media — Brand & Color Palette Guide (LLM)

> **Zweck:** Dieses Dokument ist die verbindliche Referenz für KI-Assistenten, die UI, Marketing-Material oder Code für LYNIQ Media erstellen.  
> **Quelle:** Offizielles Logo-Lockup — `docs/brand/assets/lyniq-media-logo.png`  
> **Maschinenlesbar:** `docs/brand/brand-tokens.json`

---

## 1. Markenidentität (Kurz)

| Feld | Wert |
|------|------|
| **Markenname** | LYNIQ Media |
| **Primärzeile** | LYNIQ (weiß, bold) |
| **Sekundärzeile** | MEDIA (Gradient cyan → blau) |
| **Logomark** | Abgerundetes Rauten-Icon mit zwei verschlungenen, dicken Bögen (Gradient) |
| **Stil** | Minimal, digital, SaaS/Tech-Media, hoher Kontrast auf dunklem Grund |
| **Sprache Website** | Deutsch (`lang="de"`) — UI-Texte können DE/EN je nach Seite sein |

---

## 2. Farbpalette (verbindlich)

Farben wurden **direkt aus dem Logo-PNG** gesampelt (nicht geschätzt).

### 2.1 Kernfarben

| Token | Hex | RGB | Verwendung |
|-------|-----|-----|------------|
| `background.primary` | `#081428` | 8, 20, 40 | Haupthintergrund (wie im Logo) |
| `background.deep` | `#050F1A` | 5, 15, 26 | Tiefere Flächen, Footer, Overlays |
| `neutral.white` | `#FFFFFF` | 255, 255, 255 | „LYNIQ“-Wortmarke, Primärtext auf Dark |
| `gradient.start` | `#50D0E0` | 80, 208, 224 | Gradient-Anfang (Cyan/Teal) |
| `gradient.mid` | `#1D8DD4` | 29, 141, 212 | Übergang im Wort „MEDIA“ |
| `gradient.end` | `#1870BC` | 24, 112, 188 | Gradient-Ende (Royal Blue) |
| `gradient.endDeep` | `#0C5EB4` | 12, 94, 180 | Schatten/Akzent in tiefen Blautönen |
| `surface.elevated` | `#0F1D32` | 15, 29, 50 | Karten, Panels, Watermarks |

### 2.2 Signature-Gradient

**Primär (Icon + MEDIA):** diagonal 135°

```css
--gradient-brand: linear-gradient(135deg, #50D0E0 0%, #1870BC 100%);
```

**Horizontal (Text MEDIA im Lockup):**

```css
--gradient-brand-text: linear-gradient(90deg, #50D0E0 0%, #3070E0 100%);
```

### 2.3 Semantische UI-Farben

| Rolle | Wert |
|-------|------|
| Seitenhintergrund | `#081428` |
| Body-Text auf Dark | `#FFFFFF` |
| Gedämpfter Text | `rgba(255, 255, 255, 0.55)` |
| Akzent / Link / CTA | Brand-Gradient oder `#50D0E0` |
| Fokus-Ring | `#50D0E0` mit 40% Opacity |
| Selection | `rgba(80, 208, 224, 0.25)` auf `#FFFFFF` Text |

### 2.4 Abweichung zum laufenden Code

In `src/app/globals.css` liegen **ältere** Tokens (`#0a1220`, warmes Off-White `#f5f5f0`).  
**Für alles, was dem Logo entsprechen soll:** Werte aus dieser Guideline / `brand-tokens.json` verwenden.

---

## 3. Typografie

### 3.1 Im Logo

| Zeile | Schriftbild | Gewicht | Farbe |
|-------|-------------|---------|-------|
| LYNIQ | Geometrische Grotesk, **UPPERCASE** | Bold (700) | `#FFFFFF` |
| MEDIA | Gleiche Familie, **UPPERCASE** | Medium (500) | Brand-Gradient |

**Nicht** das Logo in Bebas Neue nachbauen — Bebas ist auf der Website für Display, das Logo ist eine eigene geometrische Grotesk (ähnlich Montserrat / Poppins / Gotham).

### 3.2 Web-Empfehlung (aktueller Stack)

| Rolle | Font | CSS-Variable |
|-------|------|----------------|
| Display / Headlines | Bebas Neue | `--font-bebas` |
| Body | Inter | `--font-inter` |

Headlines: uppercase, großzügiger Letter-Spacing optional (`0.04em`).  
Fließtext: normal case, 16–18px, line-height 1.5–1.6.

---

## 4. Logo & Lockup

### 4.1 Aufbau

```
[ Logomark ]  LYNIQ      ← weiß, bold
              MEDIA      ← Gradient
```

- **Logomark:** Quadrat 45° gedreht, stark abgerundete Ecken; innen zwei symmetrische, dicke Bögen mit runden Enden; voller Brand-Gradient.
- **Ausrichtung:** Mark und Textblock vertikal an Ober- und Unterkante des zweizeiligen Textes ausgerichtet.

### 4.2 Schutzraum

Mindestabstand zwischen Mark und Text: **≈ Breite eines inneren Bogensegments** des Icons (nicht kleiner).

### 4.3 Mindestgröße

- Digital: min. **160px** Gesamtbreite des Lockups
- Nicht: Icon oder „MEDIA“ unter 12px effektive Höhe skalieren

### 4.4 Hintergründe

| Modus | Hintergrund | LYNIQ | MEDIA / Icon |
|-------|-------------|-------|--------------|
| **Primary (Logo-Datei)** | `#081428` | `#FFFFFF` | Gradient |
| Light Mode (abgeleitet) | `#FFFFFF` | `#081428` | Gradient beibehalten |
| Monochrom auf Dark | `#081428` | `#FFFFFF` | `#FFFFFF` |
| Monochrom auf Light | `#FFFFFF` | `#081428` | `#081428` |

### 4.5 Verboten (Don'ts)

- Gradient strecken, entfärben oder in Einzelfarben „approximieren“ (#00ff00 o.ä.)
- Hintergrund des Full-Color-Lockups auf helles Grau/Weiß legen **ohne** Anpassung der weißen Zeile
- Schatten, Glows oder 3D-Effekte am offiziellen Logo
- Mark vom Wort „LYNIQ MEDIA“ trennen und neu anordnen (außer explizit als „Icon-only“-Variante definiert)
- Andere Farben als die definierte Palette als „Markenfarbe“ einführen

---

## 5. Visuelle Sprache & Layout

### 5.1 Stimmung

- Dunkel, klar, hochwertig, technologieorientiert
- Viel negativer Raum; Gradient sparsam als Akzent (nicht flächig über ganze Seiten)
- Keine grellen Neons außerhalb der Brand-Cyan/Blau-Achse

### 5.2 UI-Muster

- **Hero:** dunkler BG `#081428`, optionale subtile Grid/Lichtreflexe in `#0F1D32`
- **Buttons Primary:** Gradient-Fill oder solid `#50D0E0` mit dunklem Text `#081428`
- **Buttons Secondary:** Outline `1px solid rgba(80, 208, 224, 0.4)`
- **Cards:** `#0F1D32` auf `#081428`, Border `rgba(80, 208, 224, 0.12)`
- **Divider:** `rgba(255, 255, 255, 0.08)`

### 5.3 Barrierefreiheit

- Weißer Text `#FFFFFF` auf `#081428`: Kontrast **> 15:1** ✓
- Gradient-Text „MEDIA“ nur für Dekoration/Brand — nicht für lange Lesetexte
- Für WCAG-kritische Inhalte: `#50D0E0` oder `#FFFFFF` als Vollton, min. 4.5:1

---

## 6. Implementierung (Copy-Paste für LLMs)

### 6.1 CSS Custom Properties

```css
:root {
  --lyniq-bg: #081428;
  --lyniq-bg-deep: #050f1a;
  --lyniq-surface: #0f1d32;
  --lyniq-text: #ffffff;
  --lyniq-muted: rgba(255, 255, 255, 0.55);
  --lyniq-cyan: #50d0e0;
  --lyniq-blue: #1870bc;
  --lyniq-gradient: linear-gradient(135deg, #50d0e0 0%, #1870bc 100%);
  --lyniq-gradient-text: linear-gradient(90deg, #50d0e0 0%, #3070e0 100%);
}
```

### 6.2 Gradient-Text (MEDIA-Stil)

```css
.text-lyniq-gradient {
  background: var(--lyniq-gradient-text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

### 6.3 Tailwind v4 (`@theme`)

```css
@theme {
  --color-lyniq-bg: #081428;
  --color-lyniq-bg-deep: #050f1a;
  --color-lyniq-surface: #0f1d32;
  --color-lyniq-cyan: #50d0e0;
  --color-lyniq-blue: #1870bc;
  --color-lyniq-text: #ffffff;
}
```

### 6.4 Logo einbinden

```html
<img
  src="/docs/brand/assets/lyniq-media-logo.png"
  alt="LYNIQ Media"
  width="320"
  height="200"
/>
```

Für Production: Asset nach `public/brand/lyniq-media-logo.png` kopieren und Pfad anpassen.

---

## 7. LLM-Instruktionen (Pflicht)

Wenn du als KI für LYNIQ Media arbeitest:

1. **Lies zuerst** `docs/brand/brand-tokens.json` für exakte Hex-Werte.
2. **Verwende** `#081428` als Standard-Hintergrund, nicht generisches Schwarz `#000`.
3. **Verwende** den Brand-Gradient nur für: Logo-Nachbildungen, Wort „MEDIA“, Primary-CTAs, kleine Akzentlinien — nicht für große Textblöcke.
4. **„LYNIQ“** in UI immer uppercase; primär weiß auf dunklem Grund.
5. **Keine** zusätzlichen Markenfarben (Lila, Orange, Grün) ohne explizite User-Anweisung.
6. **Bei Light-Mode:** invertiere Textfarben gemäß Abschnitt 4.4, behalte Gradient am Icon/MEDIA.
7. **Bei Code-Änderungen** an `globals.css`: Tokens mit dieser Guideline synchronisieren, wenn der User „am Logo ausrichten“ verlangt.

---

## 8. Referenz-Swatch

```
Background   ████████  #081428
Deep BG      ████████  #050F1A
Surface      ████████  #0F1D32
White        ████████  #FFFFFF
Cyan         ████████  #50D0E0
Blue         ████████  #1870BC
Gradient     ████████  #50D0E0 → #1870BC (135°)
```

---

## 9. Dateien in diesem Paket

| Datei | Inhalt |
|-------|--------|
| `docs/brand/BRAND-GUIDE.md` | Diese Guideline (menschen- & LLM-lesbar) |
| `docs/brand/brand-tokens.json` | Tokens für Scripts / Cursor Rules |
| `docs/brand/assets/lyniq-media-logo.png` | Offizielles Referenz-Lockup |

---

*Version 1.0.0 — abgeleitet vom bereitgestellten Logo-PNG (800×500).*
