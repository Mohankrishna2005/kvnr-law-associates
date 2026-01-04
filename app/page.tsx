```javascript
import Link from "next/link";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { PRACTICE_AREAS } from "@/lib/practice-data";
import { Shield, Scale, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center sm:py-40">
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-primary">
            <Scale className="h-4 w-4" />
            <span>Advocates & Legal Consultants</span>
          </div>
          <h1 className="font-heading text-5xl font-semibold tracking-tight text-foreground sm:text-7xl md:text-8xl">
            KVNR Law Associates
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Global Legal Intelligence & Authority Platform.
            <span className="block mt-2 text-base text-muted-foreground/80">
              Supreme Court of India | High Courts | Tribunals
            </span>
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/consult"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Request Consultation
            </Link>
            <Link
              href="/bns"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              BNS Knowledge Graph
            </Link>
          </div>
        </div>
      </section>

      {/* Ethics Line */}
      <section className="border-y bg-accent/20 py-12 text-center">
        <div className="container mx-auto max-w-2xl px-6">
          <Shield className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-medium leading-relaxed text-muted-foreground">
            Adhering strictly to the Bar Council of India's Code of Ethics.
            <br />
            Privileged Communication. Fiduciary Responsibility. Zero Solicitation.
          </p>
        </div>
      </section>

      {/* Experience System */}
      <ExperienceSection />

      {/* Practice Areas Grid */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold tracking-tight">
            Core Practice Domains
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(PRACTICE_AREAS).map((area) => (
              <Link
                key={area.slug}
                href={`/ practice / ${ area.slug } `}
                className="group relative overflow-hidden rounded-lg border bg-card p-8 transition-all hover:bg-accent/50 hover:shadow-lg"
              >
                <h3 className="mb-3 font-heading text-xl font-medium tracking-tight group-hover:underline">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {area.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
```
