import Link from "next/link";
import { Mail } from "lucide-react";

import { GithubIcon, LinkedInIcon } from "@/components/brand-icons";
import { education, links, site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            diploma · cse · cyber security
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
            {site.name.toUpperCase()}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Diploma CSE student exploring software,{" "}
            <br className="hidden sm:block" />
            hardware, and security.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${links.email}`}>
                <Mail aria-hidden="true" />
                Get in touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">
                <GithubIcon className="size-4" />
                See my work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Profile card — currently a monogram placeholder.
            Swap the inner block for a real <Image> when a photo exists. */}
        <div className="hidden lg:block">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <div
              className={
                "mx-auto grid size-40 place-items-center rounded-2xl border border-primary/30 bg-primary/10 " +
                "font-mono text-5xl font-bold text-primary"
              }
              role="img"
              aria-label="Abhinav Kumar avatar placeholder"
            >
              {site.monogram}
            </div>
            <dl className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
              <div>
                <dt className="text-muted-foreground">Course</dt>
                <dd className="mt-0.5 font-medium">CSE · Cyber Security</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Institute</dt>
                <dd className="mt-0.5 font-medium">{education.institution}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Status</dt>
                <dd className="mt-0.5 font-medium">{education.period}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}