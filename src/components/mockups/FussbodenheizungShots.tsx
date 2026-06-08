"use client";

import { ScaledScreenshot } from "@/components/mockups/ScaledScreenshot";

const W = 1024;
const H = 579;
const BG = "#f4f7fb";

export function FussbodenLandingShot() {
  return (
    <ScaledScreenshot
      src="/projects/fussbodenheizung/landing.webp"
      alt="Landingpage der Fußbodenheizung Website — Fußbodenheizung Website von LYNIQ"
      width={W}
      height={H}
      background={BG}
      fit="cover"
    />
  );
}

export function FussbodenReferenzenShot() {
  return (
    <ScaledScreenshot
      src="/projects/fussbodenheizung/referenzen.webp"
      alt="Referenzen-Seite der Fußbodenheizung Website — Fußbodenheizung Website von LYNIQ"
      width={W}
      height={H}
      background={BG}
      fit="cover"
    />
  );
}

export function FussbodenKontaktShot() {
  return (
    <ScaledScreenshot
      src="/projects/fussbodenheizung/kontakt.png"
      alt="Kontaktformular der Fußbodenheizung Website — Fußbodenheizung Website von LYNIQ"
      width={W}
      height={H}
      background={BG}
      fit="cover"
    />
  );
}

export function FussbodenLandingCardShot() {
  return <FussbodenLandingShot />;
}

export function FussbodenReferenzenCardShot() {
  return <FussbodenReferenzenShot />;
}

export function FussbodenKontaktCardShot() {
  return <FussbodenKontaktShot />;
}
