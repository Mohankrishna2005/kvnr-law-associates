export interface Punishment {
    description: string;
    isCognizable: boolean;
    isBailable: boolean;
    isCompoundable: boolean;
    minTerm?: string;
    maxTerm?: string;
    fine?: string;
}

export interface BNSSection {
    id: string; // The Section Number, e.g., "103"
    chapterId: string;
    title: string; // e.g., "Punishment for Murder"
    description: string; // The legal text
    punishment: Punishment;
    ipcEquivalent?: string; // e.g., "302"
    keywords: string[]; // For search
}

export interface Chapter {
    id: string;
    title: string;
    range: string; // e.g., "Sections 100-140"
}

export const BNS_CHAPTERS: Chapter[] = [
    {
        id: "VI",
        title: "Of Offences Affecting the Human Body",
        range: "Sections 100-146",
    },
    {
        id: "XVII",
        title: "Of Offences Against Property",
        range: "Sections 303-334",
    },
];

export const BNS_DATA: BNSSection[] = [
    {
        id: "103",
        chapterId: "VI",
        title: "Punishment for Murder",
        description: "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.",
        punishment: {
            description: "Death or Imprisonment for Life, and Fine",
            isCognizable: true,
            isBailable: false,
            isCompoundable: false,
        },
        ipcEquivalent: "302",
        keywords: ["murder", "homicide", "kill", "death"],
    },
    {
        id: "105",
        chapterId: "VI",
        title: "Culpable Homicide not amounting to Murder",
        description: "Whoever commits culpable homicide not amounting to murder shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine.",
        punishment: {
            description: "Imprisonment for Life or up to 10 Years + Fine",
            isCognizable: true,
            isBailable: false,
            isCompoundable: false,
        },
        ipcEquivalent: "304",
        keywords: ["homicide", "negligence", "killing"],
    },
    {
        id: "303",
        chapterId: "XVII",
        title: "Theft",
        description: "Whoever, intending to take dishonestly any movable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.",
        punishment: {
            description: "Imprisonment up to 3 years, or fine, or both",
            isCognizable: true,
            isBailable: false,
            isCompoundable: true,
        },
        ipcEquivalent: "378",
        keywords: ["theft", "steal", "robbery", "moveable property"],
    },
    {
        id: "69",
        chapterId: "V",
        title: "Sexual Intercourse by employing deceitful means",
        description: "Whoever, by deceitful means or making by promise to marry to a woman without any intention of fulfilling the same, and has sexual intercourse with her, such sexual intercourse not amounting to the offence of rape, shall be punished with imprisonment of either description for a term which may extend to ten years and shall also be liable to fine.",
        punishment: {
            description: "Imprisonment up to 10 years and fine",
            isCognizable: true,
            isBailable: false,
            isCompoundable: false,
        },
        ipcEquivalent: "New Provision",
        keywords: ["love jihad", "deceit", "marriage promise", "fraud"],
    },
    {
        id: "111",
        chapterId: "VI",
        title: "Organised Crime",
        description: "Any continuing unlawful activity including kidnapping, robbery, vehicle theft, extortion, land grabbing, contract killing, economic offences, cyber crimes, etc., committed by a member of an organised crime syndicate.",
        punishment: {
            description: "Death or Life Imprisonment (if death caused) OR 5 Years to Life (otherwise) + Fine > 5 Lakhs",
            isCognizable: true,
            isBailable: false,
            isCompoundable: false,
        },
        ipcEquivalent: "MCOCA (Various State Laws)",
        keywords: ["gang", "mafia", "syndicate", "hawala"],
    },
];

export function getSection(id: string): BNSSection | undefined {
    return BNS_DATA.find((section) => section.id === id);
}

export function searchBNS(query: string): BNSSection[] {
    const q = query.toLowerCase();
    return BNS_DATA.filter(
        (section) =>
            section.id.includes(q) ||
            section.title.toLowerCase().includes(q) ||
            section.keywords.some((k) => k.toLowerCase().includes(q)) ||
            (section.ipcEquivalent && section.ipcEquivalent.includes(q))
    );
}
