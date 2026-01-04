export interface FAQ {
    question: string;
    answer: string;
}

export interface PracticeArea {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    faqs: FAQ[];
    relatedPractices: string[];
}

export const PRACTICE_AREAS: Record<string, PracticeArea> = {
    "criminal-law": {
        slug: "criminal-law",
        title: "Criminal Defense & Trial Advocacy",
        shortDescription: "Representation in Sessions Courts, High Courts, and Supreme Court for criminal matters.",
        fullDescription: "Comprehensive defense strategy for IPC and BNS offences, including bail matters, trials, appeals, and quashing petitions. Specialized in white-collar crime, cyber offences, and economic offences.",
        faqs: [
            {
                question: "What is the procedure for Anticipatory Bail?",
                answer: "Under Section 438 CrPC (now BNS equivalent), a person apprehending arrest may apply to the High Court or Court of Session for a direction that in the event of arrest, they shall be released on bail.",
            },
            {
                question: "How does the new Bharatiya Nyaya Sanhita affect pending cases?",
                answer: "Procedural changes apply prospectively, while substantive offence definitions apply based on the date of the alleged offence. Expert legal analysis is required for specific transitional provisions.",
            },
        ],
        relatedPractices: ["civil-law", "family-law"],
    },
    "civil-law": {
        slug: "civil-law",
        title: "Civil Litigation & Dispute Resolution",
        shortDescription: "Recovery suits, injunctions, and civil remedies across all judicial forums.",
        fullDescription: "Handling complex civil suits including property disputes, specific performance of contracts, declaration suits, and money recovery proceedings.",
        faqs: [
            {
                question: "What is the limitation period for filing a civil suit?",
                answer: "Generally 3 years from the date of cause of action for most civil claims, subject to specific provisions of the Limitation Act, 1963.",
            },
        ],
        relatedPractices: ["property-law", "corporate-law"],
    },
    "family-law": {
        slug: "family-law",
        title: "Family & Matrimonial Law",
        shortDescription: "Divorce, custody, maintenance, and succession matters.",
        fullDescription: "Sensitive and private handling of matrimonial disputes, including mutual consent divorce, contested divorce, child custody petitions, and domestic violence proceedings.",
        faqs: [
            {
                question: "Can mutual consent divorce be expedited?",
                answer: "The cooling-off period of 6 months can be waived by the Supreme Court under Article 142 or by the Family Court under specific circumstances established by judicial precedents.",
            },
        ],
        relatedPractices: ["civil-law", "property-law"],
    },
    "property-law": {
        slug: "property-law",
        title: "Real Estate & Property Law",
        shortDescription: "Title verification, conveyance, and property dispute litigation.",
        fullDescription: "End-to-end legal support for real estate transactions, RERA compliance, tenant-landlord disputes, and succession planning for immovable assets.",
        faqs: [
            {
                question: "Is registration of a sale agreement mandatory?",
                answer: "Yes, under the Registration Act, 1908, any document purporting to transfer rights in immovable property worth over Rs. 100 must be registered.",
            },
        ],
        relatedPractices: ["civil-law", "family-law"],
    },
    "corporate-law": {
        slug: "corporate-law",
        title: "Corporate & Commercial Law",
        shortDescription: "Company law compliance, M&A, and commercial contracts.",
        fullDescription: "Advisory and litigation support for NCLT matters, shareholder disputes, regulatory compliance (SEBI/RBI), and commercial arbitration.",
        faqs: [
            {
                question: "What triggers the Corporate Insolvency Resolution Process (CIRP)?",
                answer: "A default of minimum Rs. 1 Crore by a corporate debtor allows a financial or operational creditor to file an application under the IBC.",
            },
        ],
        relatedPractices: ["civil-law", "criminal-law"],
    },
};

export function getPracticeArea(slug: string): PracticeArea | undefined {
    return PRACTICE_AREAS[slug];
}

export function getAllPracticeSlugs() {
    return Object.keys(PRACTICE_AREAS);
}
