import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import path from "node:path";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { LEGACY_ID_TO_SLUG } from "./src/lib/project-slugs";

const projectRedirects = Object.entries(LEGACY_ID_TO_SLUG).map(([id, slug]) => ({
  source: `/projekte/${id}`,
  destination: `/projekte/${slug}`,
  permanent: true,
}));

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
        },
      ],
    ],
  },
});

const nextConfig: NextConfig = {
  compress: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return projectRedirects;
  },
  async headers() {
    // CSP breaks Spline + Next dev HMR locally — apply only in production.
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Spline runtime: unsafe-eval + wasm-unsafe-eval (Safari WebAssembly)
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "media-src 'self' data: blob:",
              "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://region1.google-analytics.com https://api.openai.com https://unpkg.com https://fonts.gstatic.com",
              "font-src 'self' https://fonts.gstatic.com https://unpkg.com data:",
              "worker-src blob:",
              "frame-src https://www.openstreetmap.org",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "object-src 'none'",
              "form-action 'self' https://api.web3forms.com",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
  },
  transpilePackages: [],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@burgerstation": path.join(__dirname, "vendor/burgerstation-client"),
      "@burgerstation-shared": path.join(__dirname, "vendor/burgerstation-shared"),
    };
    return config;
  },
};

export default withMDX(nextConfig);
