import { learningJourney } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Learning() {
  return (
    <section id="learning" className="border-y border-border/60 bg-card/30">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Learning journey"
              title="Self-directed, continuous, hands-on"
              description={learningJourney.intro}
            />
          </div>

          <Reveal>
            <ol className="relative space-y-8 border-l border-border pl-6">
              {learningJourney.threads.map((thread) => (
                <li key={thread} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-1.5 size-2.5 rounded-full border border-primary bg-primary/30"
                  />
                  <p className="text-base font-medium">{thread}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Studied in my own time, at my own pace.
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}