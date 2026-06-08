"use client";

import { createContext, useContext } from "react";

export const PortfolioPreviewContext = createContext(false);

export function usePortfolioPreview() {
  return useContext(PortfolioPreviewContext);
}
