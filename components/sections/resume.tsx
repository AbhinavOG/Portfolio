"use client";

import { useEffect, useState } from "react";
import { Download, Eye, FileText, X } from "lucide-react";

import { resume } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Resume() {
  const [preview, setPreview] = useState(false);

  // Close on Escape + lock body scroll while the preview is open.
  useEffect(() => {
    if (!preview) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(false);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [preview]);

  return (
    <section id="resume" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 md:pb-28">
      <SectionHeading
        eyebrow="Resume / CV"
        title="Take my résumé with you"
        description="Preview it right here, or download the PDF."
      />

      <Reveal delayMs={100}>
        <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-background">
            <FileText className="size-5 text-primary" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold tracking-tight">Abhinav Kumar — Resume (PDF)</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              One page: profile, education, skills, projects, certificates.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Button variant="outline" onClick={() => setPreview(true)}>
              <Eye className="size-4" aria-hidden="true" />
              Preview
            </Button>
            <Button asChild>
              <a href={resume.file} download={resume.filename}>
                <Download className="size-4" aria-hidden="true" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </Reveal>

      {preview && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4 backdrop-blur-sm animate-in fade-in duration-200 sm:p-8"
          onClick={() => setPreview(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <div
            className="flex max-h-full w-full max-w-3xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="truncate text-sm font-medium">Abhinav Kumar — Resume</p>
              <div className="flex shrink-0 items-center gap-2">
                <Button asChild variant="outline" size="sm">
                  <a href={resume.file} download={resume.filename}>
                    <Download className="size-4" aria-hidden="true" />
                    Download
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close preview"
                  autoFocus
                  onClick={() => setPreview(false)}
                >
                  <X className="size-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-border bg-card">
              <iframe
                src={resume.file}
                title="Abhinav Kumar resume preview"
                className="h-[70vh] w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}