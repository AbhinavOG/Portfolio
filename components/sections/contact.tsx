import { ArrowUpRight, Mail } from "lucide-react";

import { GithubIcon, LinkedInIcon } from "@/components/brand-icons";
import { contactBlurb, links } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const socialRows = [
  { label: "GitHub", handle: links.githubLabel, href: links.github, icon: GithubIcon },
  { label: "LinkedIn", handle: links.linkedinLabel, href: links.linkedin, icon: LinkedInIcon },
] as const;

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8 md:pb-32">
      <Reveal>
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 md:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Contact" title="Let's talk" description={contactBlurb} />
              <Button asChild size="lg" className="mt-8">
                <a href={`mailto:${links.email}`}>
                  <Mail aria-hidden="true" />
                  {links.email}
                  <ArrowUpRight className="size-4 opacity-70" aria-hidden="true" />
                </a>
              </Button>
            </div>

            <ul className="flex flex-col gap-3 lg:justify-center">
              {socialRows.map(({ label, handle, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/60"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-base font-semibold tracking-tight">{label}</span>
                      <span className="mt-0.5 block truncate text-sm text-muted-foreground">
                        {handle}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}