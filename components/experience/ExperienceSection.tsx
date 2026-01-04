import { EXPERIENCE_DATA, getExperienceSummary } from "@/lib/experience-engine";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
    const summary = getExperienceSummary();

    return (
        <section className="space-y-12 py-16">
            <div className="space-y-4 text-center">
                <h2 className="font-heading text-3xl font-semibold tracking-tight">
                    Professional Standing
                </h2>
                <div className="mx-auto grid max-w-2xl grid-cols-3 gap-8 text-center">
                    <div className="space-y-1">
                        <div className="text-3xl font-bold">{summary.yearsActive}+</div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Years Practice
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-3xl font-bold">{summary.totalMatters}+</div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Matters
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-3xl font-bold">{summary.courts.length}</div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Forums
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-4xl space-y-6">
                <h3 className="text-lg font-medium">Representative Matters</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {EXPERIENCE_DATA.map((item) => (
                        <div
                            key={item.id}
                            className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:bg-accent/50 hover:shadow-md"
                        >
                            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                                <span className="font-medium text-primary">{item.court}</span>
                                <span>{item.year}</span>
                            </div>
                            <h4 className="mb-2 font-medium leading-snug">{item.title}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                                {item.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-secondary px-2 py-0.5 text-[10px] uppercase tracking-wide text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
