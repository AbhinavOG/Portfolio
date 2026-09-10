import { Rocket } from "lucide-react";

import { GithubIcon } from "@/components/brand-icons";
import { projects } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Currently under construction"
        description="I'm still early in my journey, so this space is intentionally empty rather than padded with filler. Real projects will land here as I ship them."
      />

      {projects.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delayMs={(i % 3) * 90} as="article">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40">
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <GithubIcon className="size-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button asChild size="sm">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <Rocket aria-hidden="true" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delayMs={120}>
          <div className="mt-12 flex flex-col items-center gap-5 rounded-3xl border border-dashed border-border bg-card/40 px-6 py-16 text-center">
            <span className="grid size-14 place-items-center rounded-2xl border border-border bg-background">
              <Rocket className="size-6 text-primary" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">Projects coming soon</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                This section is wired and ready — it stays empty until I have real
                projects to show, no placeholders.
              </p>
            </div>
            <Button asChild variant="outline">
              <a href="https://github.com/AbhinavOG" target="_blank" rel="noreferrer">
                <GithubIcon className="size-4" />
                Follow my GitHub
              </a>
            </Button>
          </div>
        </Reveal>
      )}
    </section>
  );
}