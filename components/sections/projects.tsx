import { FolderGit2, Rocket } from "lucide-react";

import { GithubIcon } from "@/components/brand-icons";
import { projects } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 md:pb-28">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="Real, working projects — source on GitHub, live demos where one exists."
      />

      <Reveal delayMs={120}>
        <ul className="mt-12 divide-y divide-border/70 border-y border-border/70">
          {projects.map((project) => (
            <li key={project.title}>
              <div className="group flex w-full flex-col gap-4 py-6 pl-2 pr-2 transition-[padding-left] duration-200 hover:pl-4 sm:flex-row sm:items-center sm:gap-5">
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10"
                >
                  <FolderGit2 className="size-5 text-primary" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="block text-base font-semibold tracking-tight text-balance">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2 sm:flex-nowrap">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <GithubIcon className="size-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.live && (
                    <Button asChild size="sm">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <Rocket className="size-4" aria-hidden="true" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}