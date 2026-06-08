"use client";

import type { ReactNode } from "react";
import {
  PortfolioCheckoutFrame,
  PortfolioHomeFrame,
  PortfolioMenuFrame,
} from "@/components/mockups/burgerstation/BurgerStationPortfolioFrames";
import { MockupScaler } from "@/components/mockups/MockupScaler";
import "@/styles/burgerstation-mockup.css";

const CROP_SIZE = {
  home: { width: 1280, height: 780 },
  menu: { width: 1280, height: 520 },
  checkout: { width: 1280, height: 500 },
} as const;

function BurgerShotFrame({
  children,
  variant,
}: {
  children: ReactNode;
  variant: keyof typeof CROP_SIZE;
}) {
  const { width, height } = CROP_SIZE[variant];

  return (
    <div
      className={`burgerstation-shot burgerstation-shot--static burgerstation-shot--${variant}`}
      role="presentation"
      aria-hidden={true}
    >
      <MockupScaler
        width={width}
        height={height}
        background="var(--bs-cream)"
        fit="contain"
        align="center"
        zoom={0.98}
      >
        <div
          className="burgerstation-mockup-root burgerstation-shot__content"
          style={{
            width,
            height,
            fontFamily:
              'var(--font-dm-sans), "DM Sans", system-ui, sans-serif',
          }}
        >
          {children}
        </div>
      </MockupScaler>
    </div>
  );
}

export function BurgerstationLandingShot() {
  return (
    <BurgerShotFrame variant="home">
      <PortfolioHomeFrame />
    </BurgerShotFrame>
  );
}

export function BurgerstationMenuShot() {
  return (
    <BurgerShotFrame variant="menu">
      <PortfolioMenuFrame />
    </BurgerShotFrame>
  );
}

export function BurgerstationCheckoutShot() {
  return (
    <BurgerShotFrame variant="checkout">
      <PortfolioCheckoutFrame />
    </BurgerShotFrame>
  );
}

/** @deprecated Use BurgerstationCheckoutShot — kept for existing imports */
export const BurgerstationAboutShot = BurgerstationCheckoutShot;
