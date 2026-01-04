import { notFound } from "next/navigation";
import Link from "next/link";
import { getPracticeArea, getAllPracticeSlugs, PRACTICE_AREAS } from "@/lib/practice-data";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const practice = getPracticeArea(params.slug);
    if (!practice) return { title: "Practice Area Not Found" };

    return {
        title: `${practice.title} | KVNR Law Associates`,
        description: practice.shortDescription,
        alternates: {
            canonical: `/practice/${practice.slug}`,
        },
        openGraph: {
            title: practice.title,
            description: practice.fullDescription,
            type: "article",
        },
    };
}

export async function generateStaticParams() {
    const slugs = getAllPracticeSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default function PracticePage({ params }: Props) {
    const practice = getPracticeArea(params.slug);

    if (!practice) {
        notFound();
    }

    // Schema Markup for Service & FAQ
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": practice.title,
        "description": practice.fullDescription,
        "url": `https://kvnr-law.com/practice/${practice.slug}`,
        "knowsAbout": practice.faqs.map((f) => f.question),
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": practice.faqs.map((f) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer,
            },
        })),
    };

    return (
        <main className="min-h-screen bg-background pb-20 pt-10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd]) }}
            />

            <div className="container mx-auto max-w-4xl px-6">
                {/* Breadcrumb - Visual Only (Schema handled globally ideally, or added here) */}
                <nav className="mb-8 flex items-center text-sm text-muted-foreground">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="font-medium text-foreground">Practice Areas</span>
                </nav>

                <header className="mb-12 border-b pb-8">
                    <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                        {practice.title}
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        {practice.shortDescription}
                    </p>
                </header>

                <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
                    <div className="space-y-12">
                        <section className="prose prose-neutral dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {practice.fullDescription}
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="font-heading text-2xl font-semibold tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {practice.faqs.map((faq, i) => (
                                    <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
                                        <h3 className="mb-2 font-medium leading-snug">{faq.question}</h3>
                                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-8">
                        <div className="rounded-lg border bg-secondary/50 p-6">
                            <h3 className="mb-4 font-semibold">Related Practices</h3>
                            <ul className="space-y-2">
                                {practice.relatedPractices.map((slug) => {
                                    const related = PRACTICE_AREAS[slug];
                                    if (!related) return null;
                                    return (
                                        <li key={slug}>
                                            <Link
                                                href={`/practice/${slug}`}
                                                className="text-sm text-muted-foreground hover:text-primary hover:underline"
                                            >
                                                {related.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="rounded-lg border bg-primary p-6 text-primary-foreground">
                            <h3 className="mb-2 font-semibold">Legal Consultation</h3>
                            <p className="mb-4 text-sm opacity-90">
                                Confidential assessment of your legal position in {practice.title}.
                            </p>
                            <Link
                                href="/consult"
                                className="inline-flex h-9 w-full items-center justify-center rounded bg-background px-4 text-sm font-medium text-primary transition-colors hover:bg-background/90"
                            >
                                Request Consultation
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
