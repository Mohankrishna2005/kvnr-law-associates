export type CaseType = "Litigation" | "Advisory" | "Arbitration" | "Pro Bono";
export type CourtForum = "Supreme Court" | "High Court" | "District Court" | "Tribunal";

export interface ExperienceNode {
    id: string;
    title: string;
    category: CaseType;
    court: CourtForum;
    year: number;
    description: string; // Neutral, factual description
    tags: string[];
}

export const EXPERIENCE_DATA: ExperienceNode[] = [
    {
        id: "exp-001",
        title: "Constitutional Matter regarding Right to Privacy",
        category: "Litigation",
        court: "Supreme Court",
        year: 2023,
        description: "Represented petitioner in landmark privacy interpretation matter before the Constitutional Bench.",
        tags: ["Constitutional Law", "Privacy", "Fundamental Rights"],
    },
    {
        id: "exp-002",
        title: "Corporate Insolvency Resolution Process",
        category: "Advisory",
        court: "Tribunal",
        year: 2022,
        description: "Advised Committee of Creditors in INR 500 Cr insolvency resolution under IBC 2016.",
        tags: ["IBC", "Corporate Law", "Finance"],
    },
    {
        id: "exp-003",
        title: "Arbitration in Infrastructure Dispute",
        category: "Arbitration",
        court: "Tribunal",
        year: 2024,
        description: "Lead counsel in domestic arbitration concerning highway construction contract breach.",
        tags: ["Arbitration", "Infrastructure", "Contracts"],
    },
];

export function getExperienceSummary() {
    const yearsActive = new Date().getFullYear() - 2010; // Est. 2010
    const totalMatters = 500; // Placeholder for counter
    const courts = Array.from(new Set(EXPERIENCE_DATA.map((e) => e.court)));

    return {
        yearsActive,
        totalMatters,
        courts,
    };
}
