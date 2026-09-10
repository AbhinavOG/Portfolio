import type { Metadata } from "next";

import { site } from "@/lib/site";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const SITE_URL = "https://abhinav.qzd.je";
const TITLE = `${site.name} — CSE Student, Cyber Security Pathway`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  alternates: {
    canonical: "/home",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/home`,
    siteName: site.name,
    title: TITLE,
    description: site.tagline,
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: site.tagline,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}