const SCROLL_OFFSET = 96;

/** Hash fragments → element ids (avoids collision with hidden mockup DOM, e.g. Burgerstation). */
const SCROLL_TARGET_IDS: Record<string, string> = {
  kontakt: "lyniq-kontakt",
};

export function resolveScrollTargetId(sectionId: string): string {
  return SCROLL_TARGET_IDS[sectionId] ?? sectionId;
}

let activeScrollJob = 0;

export function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const targetId = resolveScrollTargetId(id);
  const el = document.getElementById(targetId);
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/** Scroll once when the target exists; retry only until the element is in the DOM. */
export function scrollToSectionWithRetry(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) {
  const jobId = ++activeScrollJob;

  const cancelOnUserInput = () => {
    if (jobId === activeScrollJob) activeScrollJob++;
  };

  window.addEventListener("wheel", cancelOnUserInput, { passive: true, once: true });
  window.addEventListener("touchstart", cancelOnUserInput, { passive: true, once: true });

  const tick = (attempt: number) => {
    if (jobId !== activeScrollJob) return;

    if (scrollToSection(sectionId, behavior)) return;

    if (attempt < 40) {
      window.setTimeout(() => tick(attempt + 1), 100);
    }
  };

  tick(0);
}

export function homeSectionHref(sectionId: string) {
  return `/#${sectionId}`;
}

export function contactHref(pathname: string) {
  return isHomePath(pathname) ? "/#kontakt" : "/kontakt";
}

export function isHomePath(pathname: string) {
  return pathname === "/" || pathname === "";
}

const PENDING_HOME_SECTION_KEY = "lyniq:home-section";

export function setPendingHomeSection(sectionId: string) {
  try {
    sessionStorage.setItem(PENDING_HOME_SECTION_KEY, sectionId);
  } catch {
    // ignore
  }
}

export function consumePendingHomeSection() {
  try {
    const pending = sessionStorage.getItem(PENDING_HOME_SECTION_KEY);
    if (pending) sessionStorage.removeItem(PENDING_HOME_SECTION_KEY);
    return pending;
  } catch {
    return null;
  }
}

export function applyHomeSectionHash(sectionId: string) {
  const nextHash = `#${sectionId}`;
  if (window.location.hash === nextHash) return;

  const url = `${window.location.pathname}${window.location.search}${nextHash}`;
  history.replaceState(history.state, "", url);
}

type AppRouter = {
  push: (href: string, options?: { scroll?: boolean }) => void;
};

export function navigateToContact(pathname: string, router?: AppRouter) {
  if (isHomePath(pathname)) {
    applyHomeSectionHash("kontakt");
    if (!scrollToSection("kontakt")) {
      scrollToSectionWithRetry("kontakt");
    }
    return;
  }

  if (router) {
    router.push("/kontakt");
    return;
  }

  window.location.assign("/kontakt");
}

export function navigateToHomeSection(
  sectionId: string,
  pathname: string,
  router?: AppRouter,
) {
  if (sectionId === "kontakt") {
    navigateToContact(pathname, router);
    return;
  }

  if (isHomePath(pathname)) {
    applyHomeSectionHash(sectionId);
    if (!scrollToSection(sectionId)) {
      scrollToSectionWithRetry(sectionId);
    }
    return;
  }

  const href = homeSectionHref(sectionId);

  if (router) {
    router.push(href, { scroll: false });
    return;
  }

  window.location.assign(href);
}
