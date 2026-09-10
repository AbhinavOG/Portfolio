import { FileText } from "lucide-react";

import { resume } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 md:pb-28">
      <SectionHeading
        eyebrow="Resume / CV"
        title="A downloadable résumé is on its way"
        description="Until a real file is ready, the button below stays disabled — no placeholder PDFs."
      />

      <Reveal delayMs={100}>
        <div className="mt-10 flex items-center gap-5 rounded-3xl border border-border bg-card p-6 sm:p-8">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-background">
            <FileText className="size-5 text-primary" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h3 className="text-base font-semibold tracking-tight">Resume — coming soon</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              I&apos;ll add a proper PDF link here once it exists.
            </p>
          </div>
          <Button disabled aria-disabled="true">
            Download PDF
          </Button>
        </div>
      </Reveal>
    </section>
  );
}