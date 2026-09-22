import { Mail } from "lucide-react";

import { GithubIcon, LinkedInIcon } from "@/components/brand-icons";
import { footerSignature, links, site } from "@/lib/site";

export function Footer() {
  const socials = [
    { label: "GitHub", href: links.github, icon: GithubIcon },
    { label: "LinkedIn", href: links.linkedin, icon: LinkedInIcon },
    { label: "Email", href: `mailto:${links.email}`, icon: Mail },
  ] as const;

  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <div>
          <p className="text-sm leading-tight font-semibold">{site.name}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{footerSignature}</p>
        </div>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
                title={label}
                className="grid size-10 place-items-center rounded-lg text-muted-foreground transition-[color,transform,background-color] duration-200 hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}