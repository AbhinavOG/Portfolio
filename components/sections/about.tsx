import { about } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  const [lede, ...rest] = about.paragraphs;

  return (
    <section id="about" className="border-t border-border/60 bg-card/30">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading eyebrow="About me" title="Curious about the why, not just the how" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <p className="max-w-xl font-mono text-lg leading-relaxed text-foreground">
              {lede}
            </p>
          </Reveal>

          <div className="space-y-5">
            {rest.map((paragraph, i) => (
              <Reveal key={i} delayMs={i * 80}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delayMs={120}>
          <div className="mt-14">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Where my curiosity runs
            </p>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {about.focusAreas[0].items.map((item) => (
                <li
                  key={item}
                  className="bg-background p-6 transition-colors duration-200 hover:bg-accent/40"
                >
                  <span className="text-sm font-medium leading-snug text-balance">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}