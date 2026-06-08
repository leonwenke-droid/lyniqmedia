export const LEGACY_ID_TO_SLUG: Record<string, string> = {
  "01": "burgerstation-leer",
  "02": "ki-finanzanalyse-app",
  "03": "fahrschule-lead-system",
  "04": "orgflow-saas",
  "05": "cabisino-gaesteliste",
  "06": "abitur-lernplattformen",
  "07": "fussbodenheizung-website",
  "08": "ai-agenten-kmu",
  "09": "gebaeudereinigung-mvp",
};

export const PROJECT_SLUGS = Object.values(LEGACY_ID_TO_SLUG);

export const SLUG_TO_LEGACY_ID = Object.fromEntries(
  Object.entries(LEGACY_ID_TO_SLUG).map(([id, slug]) => [slug, id]),
) as Record<string, string>;

export function resolveProjectSlug(idOrSlug: string): string | null {
  if (idOrSlug in LEGACY_ID_TO_SLUG) {
    return LEGACY_ID_TO_SLUG[idOrSlug];
  }
  if (PROJECT_SLUGS.includes(idOrSlug)) {
    return idOrSlug;
  }
  return null;
}

export const relatedProjects: Record<string, string[]> = {
  "fahrschule-lead-system": ["ai-agenten-kmu"],
  "ai-agenten-kmu": ["fahrschule-lead-system", "gebaeudereinigung-mvp"],
  "orgflow-saas": ["cabisino-gaesteliste"],
  "cabisino-gaesteliste": ["orgflow-saas"],
  "burgerstation-leer": ["fussbodenheizung-website"],
  "fussbodenheizung-website": ["burgerstation-leer"],
  "ki-finanzanalyse-app": ["ai-agenten-kmu"],
  "abitur-lernplattformen": ["orgflow-saas"],
  "gebaeudereinigung-mvp": ["ai-agenten-kmu"],
};
