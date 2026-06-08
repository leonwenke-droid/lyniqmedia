"use client";

import type { ReactNode } from "react";
import { Link } from "wouter";
import { usePortfolioPreview } from "@burgerstation/contexts/PortfolioPreviewContext";

type LinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function PreviewRouteLink({ href, className, children, onClick }: LinkProps) {
  const preview = usePortfolioPreview();
  if (preview) {
    return (
      <span className={className} onClick={onClick}>
        {children}
      </span>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function PreviewExternalLink({ href, className, children, onClick }: LinkProps) {
  const preview = usePortfolioPreview();
  if (preview) {
    return (
      <span className={className} onClick={onClick}>
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
