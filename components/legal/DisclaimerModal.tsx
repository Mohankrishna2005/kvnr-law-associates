"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function DisclaimerModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already accepted the disclaimer
        const hasAccepted = localStorage.getItem("kvnr_compliance_accepted");
        if (!hasAccepted) {
            setIsOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("kvnr_compliance_accepted", "true");
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="relative w-full max-w-lg border bg-card p-6 shadow-lg sm:rounded-lg">
                <div className="space-y-4 text-center">
                    <h2 className="font-heading text-2xl font-semibold tracking-tight">
                        Compliance & Disclaimer
                    </h2>
                    <div className="space-y-3 text-sm text-muted-foreground text-left">
                        <p>
                            By entering this website, you acknowledge and confirm that you are seeking
                            information relating to KVNR Law Associates of your own accord and that
                            there has been no form of solicitation, advertisement, or inducement by
                            KVNR Law Associates or its members.
                        </p>
                        <p>
                            The content of this website is for informational purposes only and should
                            not be interpreted as soliciting or advertisement. No material/information
                            provided on this website should be construed as legal advice.
                        </p>
                        <p className="font-medium text-foreground">
                            KVNR Law Associates shall not be liable for consequences of any action
                            taken by relying on the material/information provided on this website.
                        </p>
                    </div>
                    <button
                        onClick={handleAccept}
                        className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        I Acknowledge & Enter
                    </button>
                </div>
            </div>
        </div>
    );
}
