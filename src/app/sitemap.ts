import {
  getAllCategories,
  getAllPosts,
  getAllTags,
  toSlug,
} from "@/lib/blog";
import { PROJECT_SLUGS } from "@/lib/project-slugs";
import { MetadataRoute } from "next";

const SITE_ORIGIN = "https://lyniqmedia.com";

/** Absolute sitemap URL — always a single expression, trimmed, no stray whitespace. */
function loc(path = ""): string {
  return `${SITE_ORIGIN}${path ? `/${path.replace(/^\/+/, "")}` : ""}`.trim();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return [
    {
      url: loc(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: loc("kontakt"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: loc("ueber-mich"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: loc("gastronomie"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: loc("visitenkarte"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: loc("impressum"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: loc("datenschutz"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: loc("agb"),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    ...PROJECT_SLUGS.map((slug) => ({
      url: loc(`projekte/${slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: loc("blog"),
      lastModified: blogPosts[0] ? new Date(blogPosts[0].date) : new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: loc(`blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...categories.map((cat) => ({
      url: loc(`blog/kategorie/${toSlug(cat)}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...tags.map((tag) => ({
      url: loc(`blog/tag/${toSlug(tag)}`),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })),
  ];
}
