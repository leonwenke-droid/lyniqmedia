"use client";

import {
  contactHref,
  homeSectionHref,
  isHomePath,
  navigateToHomeSection,
} from "@/lib/scroll-to-section";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps } from "react";

type HomeAnchorLinkProps = Omit<ComponentProps<"a">, "href"> & {
  sectionId: string;
};

export default function HomeAnchorLink({
  sectionId,
  onClick,
  ...props
}: HomeAnchorLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  if (sectionId === "kontakt" && !isHomePath(pathname)) {
    return <Link href="/kontakt" {...props} />;
  }

  const href =
    sectionId === "kontakt" ? contactHref(pathname) : homeSectionHref(sectionId);

  return (
    <a
      href={href}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        navigateToHomeSection(sectionId, pathname, router);
      }}
    />
  );
}
