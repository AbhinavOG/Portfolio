import { Award } from "lucide-react";

import { certificates } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 md:pb-28">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials, as they come"
        description="No invented certificates here. Genuine ones will appear as I earn them."
      />

      {certificates.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delayMs={(i % 3) * 90} as="article">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40">
                <h3 className="text-lg font-semibold tracking-tight">{cert.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {cert.issuer}
                  {cert.year ? ` · ${cert.year}` : ""}
                </p>
                {cert.credentialUrl && <Badge className="mt-4 w-fit">Verified</Badge>}
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delayMs={120}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-card/40 px-6 py-14 text-center">
            <span className="grid size-12 place-items-center rounded-xl border border-border bg-background">
              <Award className="size-5 text-primary" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">None yet — and that's fine</h3>
              <p className="mx-auto mt-1.5 max-w-md text-sm text-muted-foreground">
                This space stays empty until I've actually earned something worth showing.
              </p>
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}