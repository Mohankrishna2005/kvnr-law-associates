import { BNSSearch } from "@/components/bns/BNSSearch";
import { BookOpen, Scale, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { BNS_DATA } from "@/lib/bns-data";

export default function BNSPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Search Section */}
            <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background py-20 lg:py-32">
                <div className="container px-4 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                        <BookOpen className="h-8 w-8" />
                    </div>
                    <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
                        Bharatiya Nyaya Sanhita
                        <span className="block text-primary">Knowledge Graph</span>
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
                        Navigate the new criminal laws of India with our intelligent legal search engine.
                        Compare BNS sections with old IPC equivalents instantly.
                    </p>

                    <div className="mx-auto flex justify-center">
                        <BNSSearch className="w-full shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* Quick Access / Popular Sections */}
            <section className="py-20">
                <div className="container px-4">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Core Provisions</h2>
                            <p className="text-muted-foreground">Frequently accessed sections under the new law.</p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {BNS_DATA.slice(0, 6).map((section) => (
                            <Link
                                key={section.id}
                                href={`/bns/${section.id}`}
                                className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:bg-accent/50 hover:shadow-lg"
                            >
                                <div className="mb-4 flex items-start justify-between">
                                    <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
                                        Section {section.id}
                                    </span>
                                    {section.ipcEquivalent && (
                                        <span className="text-xs text-muted-foreground">
                                            Ex-IPC {section.ipcEquivalent}
                                        </span>
                                    )}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">
                                    {section.title}
                                </h3>
                                <p className="line-clamp-2 text-sm text-muted-foreground">
                                    {section.description}
                                </p>
                                <div className="mt-4 flex items-center text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                                    Read Full Section <ArrowRight className="ml-1 h-3 w-3" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Informational Banner */}
            <section className="border-t bg-muted/30 py-16">
                <div className="container px-4 text-center">
                    <h2 className="mb-6 text-2xl font-bold">Why the shift from IPC to BNS?</h2>
                    <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <div className="mb-4 flex justify-center text-primary">
                                <TrendingUp className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold">Decolonization</h3>
                            <p className="mt-2 text-sm text-muted-foreground">Removing colonial-era terminology and sedition laws to reflect modern Indian values.</p>
                        </div>
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <div className="mb-4 flex justify-center text-primary">
                                <Scale className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold">Victim Justice</h3>
                            <p className="mt-2 text-sm text-muted-foreground">Prioritizing victim rights, faster trials, and digital evidence admissibility.</p>
                        </div>
                        <div className="rounded-lg bg-background p-6 shadow-sm">
                            <div className="mb-4 flex justify-center text-primary">
                                <ShieldAlert className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold">New Offences</h3>
                            <p className="mt-2 text-sm text-muted-foreground">Addressing modern crimes like mob lynching, organized crime, and terrorism specifically.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
