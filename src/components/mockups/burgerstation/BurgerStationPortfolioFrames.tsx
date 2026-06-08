"use client";

import type { ReactNode } from "react";
import { useMemo } from "react";
import { MotionConfig } from "framer-motion";
import { Router } from "wouter";
import { CartProvider, type CartItem } from "@burgerstation/contexts/CartContext";
import { TooltipProvider } from "@burgerstation/components/ui/tooltip";
import { ThemeProvider } from "@burgerstation/contexts/ThemeContext";
import { PortfolioPreviewContext } from "@burgerstation/contexts/PortfolioPreviewContext";
import Home from "@burgerstation/pages/Home";
import Menu from "@burgerstation/pages/Menu";
import Checkout, { type CheckoutPreviewConfig } from "@burgerstation/pages/Checkout";

function FixedRoute({ path, children }: { path: string; children: ReactNode }) {
  const hook = useMemo(
    () => (): [string, (to: string) => void] => [path, () => {}],
    [path],
  );
  return <Router hook={hook}>{children}</Router>;
}

function SiteShell({ children }: { children: ReactNode }) {
  return (
    <PortfolioPreviewContext.Provider value={true}>
      <MotionConfig reducedMotion="always">
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <CartProvider>{children}</CartProvider>
          </TooltipProvider>
        </ThemeProvider>
      </MotionConfig>
    </PortfolioPreviewContext.Provider>
  );
}

const PORTFOLIO_CART_ITEM: CartItem = {
  id: "7569a6cd-268f-4d16-b86f-09676f4dcfaa",
  name: "Double Smash",
  sumup_name: "Double Smash",
  sumup_sku: "DBL-SMSH-001",
  variant_id: "7569a6cd-268f-4d16-b86f-09676f4dcfaa",
  category: "food",
  price: 9.4,
  quantity: 1,
};

const PORTFOLIO_CHECKOUT_PREVIEW: CheckoutPreviewConfig = {
  form: {
    vorname: "Max",
    nachname: "Mustermann",
    email: "max.mustermann@web.de",
    telefon: "+49 491 1234567",
    strasse: "Heisfelder Straße",
    hausnummer: "12",
    plz: "26789",
    ort: "Leer",
    anmerkungen: "Bitte an der Haustür klingeln — 2. OG links.",
  },
  payment: "bar",
  agb: true,
};

export function PortfolioHomeFrame() {
  return (
    <SiteShell>
      <FixedRoute path="/">
        <div
          className="burgerstation-page-crop burgerstation-page-crop--home"
          role="presentation"
          aria-hidden={true}
        >
          <Home />
        </div>
      </FixedRoute>
    </SiteShell>
  );
}

export function PortfolioMenuFrame() {
  return (
    <SiteShell>
      <FixedRoute path="/menu">
        <div
          className="burgerstation-page-crop burgerstation-page-crop--menu"
          role="presentation"
          aria-hidden={true}
        >
          <Menu />
        </div>
      </FixedRoute>
    </SiteShell>
  );
}

export function PortfolioCheckoutFrame() {
  return (
    <SiteShell>
      <CartProvider initialItems={[PORTFOLIO_CART_ITEM]}>
        <FixedRoute path="/bestellen/checkout">
          <div
            className="burgerstation-page-crop burgerstation-page-crop--checkout"
            role="presentation"
            aria-hidden={true}
          >
            <Checkout preview={PORTFOLIO_CHECKOUT_PREVIEW} />
          </div>
        </FixedRoute>
      </CartProvider>
    </SiteShell>
  );
}
