import { ArrowUpRight, Mail } from "lucide-react";

import { GithubIcon, LinkedInIcon } from "@/components/brand-icons";
import { contactBlurb, links } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8 md:pb-32">
      <Reveal>
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 md:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Contact" title="Let's talk" description={contactBlurb} />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={`mailto:${links.email}`}>
                    <Mail aria-hidden="true" />
                    {links.email}
                    <ArrowUpRight className="size-4 opacity-70" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/10">
                    <GithubIcon className="size-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-base font-semibold tracking-tight">GitHub</span>
                    <span className="mt-0.5 block text-sm break-all text-muted-foreground">
                      {links.githubLabel}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/10">
                    <LinkedInIcon className="size-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-base font-semibold tracking-tight">LinkedIn</span>
                    <span className="mt-0.5 block text-sm break-all text-muted-foreground">
                      {links.linkedinLabel}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}