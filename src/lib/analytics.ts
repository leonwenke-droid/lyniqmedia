type GaEventParams = Record<string, string>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: GaEventParams) => void;
  }
}

export function trackGaEvent(eventName: string, params?: GaEventParams) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}
