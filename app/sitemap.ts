import { MetadataRoute } from "next";
import { getAllPracticeSlugs } from "@/lib/practice-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://kvnr-law.com";

    const practiceRoutes = getAllPracticeSlugs().map((slug) => ({
        url: `${baseUrl}/practice/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/consult`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/bns`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
    ];

    return [...staticRoutes, ...practiceRoutes];
}
