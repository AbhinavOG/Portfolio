"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Award, Eye, X } from "lucide-react";

import { certificates, type Certificate } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function Certifications() {
  const [preview, setPreview] = useState<Certificate | null>(null);

  // Close on Escape + lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!preview) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [preview]);

  return (
    <section id="certifications" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 md:pb-28">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials, as they come"
        description="No invented certificates here. Genuine ones appear as I earn them — click any row to preview the full document."
      />

      <Reveal delayMs={120}>
        <ul className="mt-12 divide-y divide-border/70 border-y border-border/70">
          {certificates.map((cert) => (
            <li key={cert.title}>
              <button
                type="button"
                onClick={() => setPreview(cert)}
                aria-label={`Preview certificate: ${cert.title}`}
                className="group flex w-full items-center gap-4 py-6 pl-2 pr-2 text-left transition-[padding-left] duration-200 hover:pl-4 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring sm:gap-5"
              >
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10"
                >
                  <Award className="size-5 text-primary" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold tracking-tight text-balance">{cert.title}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{cert.issuer}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-primary/30 px-3.5 py-1.5 font-mono text-xs text-primary transition-colors duration-200 group-hover:bg-primary/10"
                >
                  <Eye className="size-3.5" />
                  Preview
                </span>
              </button>
            </li>
          ))}

          </ul>
      </Reveal>

      {preview && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4 backdrop-blur-sm animate-in fade-in duration-200 sm:p-8"
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} certificate preview`}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close preview"
              autoFocus
              onClick={() => setPreview(null)}
              className="absolute -top-12 right-0 text-foreground"
            >
              <X className="size-5" aria-hidden="true" />
            </Button>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src={preview.image}
                alt={`${preview.title} — ${preview.issuer} certificate`}
                width={2339}
                height={1653}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {preview.title} · {preview.issuer}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}