"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitConsultation } from "@/app/actions/submit-consultation";
import { PRACTICE_AREAS } from "@/lib/practice-data";
import { cn } from "@/lib/utils";

const PRACTICE_OPTIONS = Object.values(PRACTICE_AREAS).map((p) => ({
    value: p.slug,
    label: p.title,
}));

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
            {pending ? "Submitting Request..." : "Request Privileged Consultation"}
        </button>
    );
}

export default function ConsultPage() {
    const [state, dispatch] = useFormState(submitConsultation, {
        message: "",
        errors: {},
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                        Legal Consultation Intake
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Secure, privileged communication channel.
                    </p>
                </div>

                {state.success ? (
                    <div className="rounded-md bg-green-50 p-6 text-green-900 shadow-sm border border-green-200">
                        <h3 className="font-semibold">Request Received</h3>
                        <p className="mt-2 text-sm">{state.message}</p>
                        <p className="mt-4 text-xs text-green-700">Ref ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
                    </div>
                ) : (
                    <form action={dispatch} className="mt-8 space-y-6">
                        <div className="space-y-4 rounded-md shadow-sm">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium leading-6 text-foreground">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className={cn(
                                        "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                        state.errors?.name && "border-destructive focus-visible:ring-destructive"
                                    )}
                                />
                                {state.errors?.name && (
                                    <p className="mt-1 text-xs text-destructive">{state.errors.name[0]}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm font-medium leading-6 text-foreground">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className={cn(
                                        "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                        state.errors?.email && "border-destructive focus-visible:ring-destructive"
                                    )}
                                />
                                {state.errors?.email && (
                                    <p className="mt-1 text-xs text-destructive">{state.errors.email[0]}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phone" className="text-sm font-medium leading-6 text-foreground">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className={cn(
                                        "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                        state.errors?.phone && "border-destructive focus-visible:ring-destructive"
                                    )}
                                />
                                {state.errors?.phone && (
                                    <p className="mt-1 text-xs text-destructive">{state.errors.phone[0]}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="practiceArea" className="text-sm font-medium leading-6 text-foreground">
                                    Matter Type
                                </label>
                                <select
                                    id="practiceArea"
                                    name="practiceArea"
                                    className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    {PRACTICE_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                    <option value="other">Other / Not Listed</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="description" className="text-sm font-medium leading-6 text-foreground">
                                    Brief description of the matter
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    required
                                    className={cn(
                                        "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                        state.errors?.description && "border-destructive focus-visible:ring-destructive"
                                    )}
                                />
                                {state.errors?.description && (
                                    <p className="mt-1 text-xs text-destructive">{state.errors.description[0]}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-start space-x-2">
                            <input
                                id="consent"
                                name="consent"
                                type="checkbox"
                                className="h-4 w-4 rounded border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                            <label htmlFor="consent" className="text-xs leading-tight text-muted-foreground">
                                I understand that submitting this form does not create an attorney-client relationship. I consent to being contacted by KVNR Law Associates.
                            </label>
                        </div>
                        {state.errors?.consent && (
                            <p className="!-mt-4 text-xs text-destructive">{state.errors.consent[0]}</p>
                        )}

                        <div>
                            <SubmitButton />
                        </div>
                    </form>
                )}
            </div>
        </main>
    );
}
