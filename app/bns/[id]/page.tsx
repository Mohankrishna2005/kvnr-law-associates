import { notFound } from "next/navigation";
import Link from "next/link";
import { getSection, BNSSection, BNS_DATA } from "@/lib/bns-data";
import { BNSCard } from "@/components/bns/BNSCard";
import { BNSSearch } from "@/components/bns/BNSSearch";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const section = getSection(params.id);
    if (!section) return { title: "Section Not Found" };

    return {
        title: `Section ${section.id}: ${section.title} | BNS Knowledge Graph`,
        description: `Full details of BNS Section ${section.id} (${section.title}). Replaces IPC ${section.ipcEquivalent}. Punishment: ${section.punishment.description}.`,
    };
}

export async function generateStaticParams() {
    return BNS_DATA.map((section) => ({
        id: section.id,
    }));
}

export default function SectionPage({ params }: Props) {
    const section = getSection(params.id);

    if (!section) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-muted/10 pb-20">
            {/* Header / Nav */}
            <div className="border-b bg-background sticky top-0 z-10 backdrop-blur-md bg-background/80">
                <div className="container flex h-16 items-center px-4">
                    <Link href="/bns" className="font-heading font-semibold hover:text-primary">
                        BNS Graph
                    </Link>
                    <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">Section {section.id}</span>

                    <div className="ml-auto hidden sm:block w-full max-w-xs">
                        {/* Mini Search Bar in Header for quick jump */}
                        <BNSSearch className="h-9 w-full [&_input]:h-9 [&_input]:text-sm [&_svg]:h-4 [&_svg]:w-4" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-8 max-w-4xl px-4">
                <BNSCard section={section} />

                {/* Context / Footer Links */}
                <div className="mt-8 flex justify-center">
                    <Link
                        href="/consult"
                        className="text-sm text-muted-foreground underline hover:text-primary"
                    >
                        Need legal advice regarding this section? Consult a lawyer.
                    </Link>
                </div>
            </div>
        </main>
    );
}
