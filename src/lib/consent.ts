export type ConsentState = "undecided" | "accepted" | "rejected";

export const CONSENT_KEY = "lyniq_cookie_consent";

export function getStoredConsent(): ConsentState {
  if (typeof window === "undefined") return "undecided";
  return (localStorage.getItem(CONSENT_KEY) as ConsentState) ?? "undecided";
}

export function setStoredConsent(state: ConsentState): void {
  localStorage.setItem(CONSENT_KEY, state);
}
