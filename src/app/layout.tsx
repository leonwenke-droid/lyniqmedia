import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Sora } from "next/font/google";
import { LINKEDIN_URL } from "@/lib/social-links";
import CookieBanner from "@/components/CookieBanner";
import GlobalBackground from "@/components/GlobalBackground";
import SkipToMain from "@/components/SkipToMain";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import HashScrollHandler from "@/components/HashScrollHandler";
import WebsiteBot from "@/components/WebsiteBot";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const sora = Sora({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060d18",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lyniqmedia.com"),
  title: {
    default: "LYNIQ — KI-Software & Digitale Produkte für KMU",
    template: "%s | LYNIQ",
  },
  description:
    "KI-Software, individuelle MVPs und Automatisierung für KMU in Deutschland. DSGVO-konform, in einer Woche live, direkt entwickelt von Leon Wenke aus Leer.",
  keywords: [
    "KI Software Agentur Deutschland",
    "Künstliche Intelligenz KMU",
    "AI Voice Agent Deutschland",
    "KI Automatisierung Ostfriesland",
    "Individuelle Software Entwicklung",
    "MVP Entwicklung schnell",
    "Next.js Entwickler Deutschland",
    "DSGVO konforme KI Lösung",
    "Softwareentwicklung Niedersachsen",
    "WhatsApp Automation Agentur",
    "KI Integration Mittelstand",
    "Leon Wenke LYNIQ",
  ],
  authors: [{ name: "Leon Wenke", url: "https://lyniqmedia.com" }],
  creator: "Leon Wenke",
  publisher: "LYNIQ",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://lyniqmedia.com",
    siteName: "LYNIQ",
    title: "LYNIQ — KI-Software für KMU",
    description:
      "Individuelle KI-Software, MVPs und Automatisierung für KMU. DSGVO-konform. MVP in einer Woche.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LYNIQ — KI-Software für den Mittelstand",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LYNIQ — KI-Software für den Mittelstand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LYNIQ — KI-Software für KMU",
    description: "Individuelle KI-Software, MVPs und Automatisierung für KMU.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://lyniqmedia.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://lyniqmedia.com/#business",
      name: "LYNIQ",
      url: "https://lyniqmedia.com",
      logo: "https://lyniqmedia.com/brand/lyniq-mark.svg",
      description:
        "KI-Software, MVPs und Automatisierung für KMU. Für KI-Dienste (OpenAI, Anthropic) bestehen Auftragsverarbeitungsverträge und Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.",
      founder: {
        "@type": "Person",
        name: "Leon Wenke",
        jobTitle: "Gründer & KI-Softwareentwickler",
        url: LINKEDIN_URL,
        sameAs: [LINKEDIN_URL],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Alte Poststraße 17a",
        addressLocality: "Holtland",
        addressRegion: "Niedersachsen",
        postalCode: "26835",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.2536,
        longitude: 7.2844,
      },
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      telephone: "+49 (0) 1517 5007219",
      email: "info@lyniqmedia.com",
      priceRange: "€€",
      openingHours: "Mo-Fr 09:00-18:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://lyniqmedia.com/#website",
      url: "https://lyniqmedia.com",
      name: "LYNIQ",
      description: "KI-Software & digitale Produkte für KMU",
      publisher: { "@id": "https://lyniqmedia.com/#business" },
      inLanguage: "de-DE",
    },
    {
      "@type": "Service",
      "@id": "https://lyniqmedia.com/#ki-software",
      name: "KI-Software Entwicklung",
      serviceType: "Künstliche Intelligenz Softwareentwicklung",
      provider: { "@id": "https://lyniqmedia.com/#business" },
      areaServed: "DE",
      description:
        "Individuelle Softwarelösungen mit KI-Integration. Dashboards, Analyse-Tools, automatisierte Systeme. MVP in unter einer Woche.",
      offers: { "@type": "Offer", priceCurrency: "EUR", price: "Auf Anfrage" },
    },
    {
      "@type": "Service",
      "@id": "https://lyniqmedia.com/#automatisierung",
      name: "Prozess-Automatisierung",
      serviceType: "Workflow-Automatisierung für KMU",
      provider: { "@id": "https://lyniqmedia.com/#business" },
      areaServed: "DE",
      description:
        "Automatisierung manueller Prozesse. Workflow-Integrationen, Voice Agents, WhatsApp-Automatisierung.",
    },
    {
      "@type": "Service",
      "@id": "https://lyniqmedia.com/#webentwicklung",
      name: "Webentwicklung & Digitale Produkte",
      serviceType: "Webentwicklung",
      provider: { "@id": "https://lyniqmedia.com/#business" },
      areaServed: "DE",
      description:
        "Von der Unternehmenswebsite bis zum SaaS-Produkt. Bestellsysteme, Buchungsplattformen, MVPs.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${dmSans.variable} ${sora.variable} ${jetbrainsMono.variable} m-0 h-full w-full overflow-x-hidden p-0`}
    >
      <body className="m-0 min-h-[100dvh] w-full overflow-x-hidden p-0">
        <SkipToMain />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GlobalBackground />
        <HashScrollHandler />
        {children}
        <WebsiteBot />
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
