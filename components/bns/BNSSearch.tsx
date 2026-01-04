"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Command } from "lucide-react";
import { searchBNS, BNSSection } from "@/lib/bns-data";
import { cn } from "@/lib/utils";

export function BNSSearch({ className }: { className?: string }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<BNSSection[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (query.length > 1) {
            const hits = searchBNS(query);
            setResults(hits.slice(0, 5)); // Limit to 5 results
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    }, [query]);

    const handleSelect = (id: string) => {
        router.push(`/bns/${id}`);
        setIsOpen(false);
        setQuery("");
    };

    return (
        <div className={cn("relative w-full max-w-2xl", className)}>
            <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search BNS Section, IPC Equivalent, or Offense (e.g., 'Murder', '103', '302')..."
                    className="h-14 w-full rounded-2xl border-2 border-primary/20 bg-background pl-12 pr-4 text-lg outline-none ring-offset-background transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
                {query && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                        BNS Intelligence
                    </div>
                )}
            </div>

            {isOpen && results.length > 0 && (
                <div className="absolute top-full z-50 mt-2 w-full translate-y-2 transform overflow-hidden rounded-xl border border-border/50 bg-card p-2 shadow-2xl animate-in fade-in zoom-in-95 backdrop-blur-sm">
                    {results.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => handleSelect(section.id)}
                            className="flex w-full items-start gap-4 rounded-lg p-3 text-left transition-colors hover:bg-accent/50"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-bold text-primary">
                                {section.id}
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">{section.title}</h4>
                                <p className="line-clamp-1 text-xs text-muted-foreground">
                                    {section.description}
                                </p>
                                {section.ipcEquivalent && (
                                    <span className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase font-medium text-muted-foreground text-xs">
                                        IPC {section.ipcEquivalent}
                                    </span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
