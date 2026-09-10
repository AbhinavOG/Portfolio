import { skills } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading
        eyebrow="Skills & tools"
        title="What I work with"
        description="Framed honestly: security concepts below are areas I'm actively studying, not things I claim to have mastered hands-on yet."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delayMs={(i % 3) * 90} as="article">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-foreground transition-colors duration-150 hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}