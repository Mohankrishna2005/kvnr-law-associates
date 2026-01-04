"use client";

import { useState, useMemo } from "react";
import { BNSSection, getAllSections } from "@/lib/bns-engine";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export default function BNSInterface() {
    const [query, setQuery] = useState("");
    const allSections = useMemo(() => getAllSections(), []);

    const filteredSections = useMemo(() => {
        if (!query) return allSections;
        const lowerQuery = query.toLowerCase();
        return allSections.filter((item) =>
            item.section.includes(lowerQuery) ||
            item.title.toLowerCase().includes(lowerQuery) ||
            item.keywords.some((k) => k.toLowerCase().includes(lowerQuery)) ||
            item.category.toLowerCase().includes(lowerQuery)
        );
    }, [query, allSections]);

    return (
        <div className="space-y-8">
            <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search BNS Sections, Offences, or Keywords..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-12 w-full rounded-md border border-input bg-transparent pl-10 pr-4 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredSections.map((section) => (
                    <div
                        key={section.section}
                        className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:bg-accent/50 hover:shadow-md"
                    >
                        <div className="mb-2 flex items-center justify-between">
                            <span className="inline-flex items-center justify-center rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
                                Sec {section.section}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                {section.category}
                            </span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold leading-snug">
                            {section.title}
                        </h3>
                        <p className="mb-4 flex-1 text-sm text-muted-foreground">
                            {section.explanation}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {section.keywords.map((k) => (
                                <span
                                    key={k}
                                    className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-secondary-foreground"
                                >
                                    #{k}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {filteredSections.length === 0 && (
                <div className="py-12 text-center text-muted-foreground">
                    No sections found matching "{query}"
                </div>
            )}
        </div>
    );
}
