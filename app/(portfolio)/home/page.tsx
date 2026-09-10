import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { Learning } from "@/components/sections/learning";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Skills } from "@/components/sections/skills";

export default function PortfolioHome() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Learning />
      <Projects />
      <Certifications />
      <Education />
      <Resume />
      <Contact />
    </>
  );
}