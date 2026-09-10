import { GraduationCap } from "lucide-react";

import { education } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="border-y border-border/60 bg-card/30">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="Education" title="Formal foundation" />

        <Reveal delayMs={80}>
          <article className="mt-12 overflow-hidden rounded-3xl border border-border bg-background">
            <div className="grid lg:grid-cols-[auto_1fr]">
              <div className="flex items-center gap-4 border-b border-border bg-primary/5 p-8 lg:w-72 lg:flex-col lg:items-start lg:justify-center lg:border-b-0 lg:border-r">
                <span className="grid size-14 place-items-center rounded-2xl border border-primary/30 bg-primary/10">
                  <GraduationCap className="size-7 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg font-semibold tracking-tight">{education.institution}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-primary">
                    {education.period}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6 p-8">
                <h3 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
                  {education.degree}
                </h3>
                <ul className="space-y-3">
                  {education.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}