import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `${site.name} — Portfolio`,
  description: site.tagline,
  robots: {
    index: false,
    follow: false,
  },
};

export default function Splash() {
  return (
    <main className="grid min-h-svh place-items-center px-5 py-16">
      <div className="flex max-w-md flex-col items-center text-center animate-in fade-in duration-700">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Yo! This is my space
          <span className="ml-2 font-mono text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            &lt;/&gt;
          </span>
        </h1>

        <Button asChild variant="outline" size="lg" className="mt-10 font-mono group">
          <Link href="/home">
            Open my portfolio
            <ArrowRight
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Button>
      </div>
    </main>
  );
}