import {
  getAllCategories,
  getAllPosts,
  getAllTags,
  toSlug,
} from "@/lib/blog";
import { PROJECT_SLUGS } from "@/lib/project-slugs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return [
    {
      url: "https://lyniqmedia.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://lyniqmedia.com/kontakt",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://lyniqmedia.com/ueber-mich",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lyniqmedia.com/gastronomie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://lyniqmedia.com/visitenkarte",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://lyniqmedia.com/impressum",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://lyniqmedia.com/datenschutz",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: "https://lyniqmedia.com/agb",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    ...PROJECT_SLUGS.map((slug) => ({
      url: `https://lyniqmedia.com/projekte/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: "https://lyniqmedia.com/blog",
      lastModified: blogPosts[0] ? new Date(blogPosts[0].date) : new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `https://lyniqmedia.com/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...categories.map((cat) => ({
      url: `https://lyniqmedia.com/blog/kategorie/${toSlug(cat)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    ...tags.map((tag) => ({
      url: `https://lyniqmedia.com/blog/tag/${toSlug(tag)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })),
  ];
}
