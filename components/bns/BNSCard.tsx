import { BNSSection } from "@/lib/bns-data";
import { cn } from "@/lib/utils";
import { Gavel, AlertTriangle, Scale, ShieldAlert } from "lucide-react";

export function BNSCard({ section }: { section: BNSSection }) {
    return (
        <div className="w-full overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="border-b bg-muted/40 p-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                                Section {section.id}
                            </span>
                            {section.ipcEquivalent && (
                                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                                    Replaces IPC {section.ipcEquivalent}
                                </span>
                            )}
                        </div>
                        <h1 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                            {section.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="p-6 sm:p-8">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                        <Scale className="h-5 w-5 text-primary" />
                        Legal Definition
                    </h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        {section.description}
                    </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-900/10">
                        <h4 className="mb-2 flex items-center gap-2 font-semibold text-red-900 dark:text-red-200">
                            <Gavel className="h-4 w-4" />
                            Punishment
                        </h4>
                        <p className="text-sm font-medium text-red-800 dark:text-red-300">
                            {section.punishment.description}
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-5">
                        <h4 className="mb-3 flex items-center gap-2 font-semibold">
                            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                            Nature of Offence
                        </h4>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Cognizable:</span>
                                <span className={cn("font-medium", section.punishment.isCognizable ? "text-red-600" : "text-green-600")}>
                                    {section.punishment.isCognizable ? "Yes (Police can arrest without warrant)" : "No"}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Bailable:</span>
                                <span className={cn("font-medium", section.punishment.isBailable ? "text-green-600" : "text-red-600")}>
                                    {section.punishment.isBailable ? "Yes" : "No (Court Discretion)"}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Compoundable:</span>
                                <span className="font-medium text-foreground">
                                    {section.punishment.isCompoundable ? "Yes (Compromise Possible)" : "No"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
