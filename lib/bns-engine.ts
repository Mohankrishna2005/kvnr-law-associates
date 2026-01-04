import bnsData from "@/data/bns_2023.json";

export interface BNSSection {
    section: string;
    title: string;
    explanation: string;
    category: string;
    keywords: string[];
    cross_references: string[];
}

export function getAllSections(): BNSSection[] {
    return bnsData as BNSSection[];
}

export function searchBNS(query: string): BNSSection[] {
    const lowerQuery = query.toLowerCase();
    return (bnsData as BNSSection[]).filter((item) => {
        return (
            item.section.includes(lowerQuery) ||
            item.title.toLowerCase().includes(lowerQuery) ||
            item.item.keywords.some((k) => k.toLowerCase().includes(lowerQuery)) || // Fixed type error prediction: item.keywords
            item.category.toLowerCase().includes(lowerQuery)
        );
    });
}

export function getSection(sectionId: string): BNSSection | undefined {
    return (bnsData as BNSSection[]).find((item) => item.section === sectionId);
}
