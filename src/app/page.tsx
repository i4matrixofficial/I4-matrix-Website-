import { ArrowRight, Layers3 } from "lucide-react";
import { FloatingOrb, Reveal } from "@/components/motion";
import { HeroVisual } from "@/components/hero-visual";
import { Button } from "@/components/ui/button";
import { CtaSection, ProjectsShowcase, ServicesGrid, Strengths, TeamPreview, Testimonials, TrustedCompanies } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-3 sm:pt-5 lg:pt-7">
        <FloatingOrb className="-left-20 top-24 size-72 bg-cyan-400/25 sm:left-10" />
        <FloatingOrb className="-right-24 top-44 size-80 bg-violet-500/20 sm:right-10" />
        <div className="container relative">

          {/* Hero text */}
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border bg-background/65 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur sm:text-sm">
                <Layers3 className="size-4 shrink-0 text-primary" />
                <span className="truncate">Software strategy, design, and engineering</span>
              </div>
              <h1 className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Building Digital Solutions for the Future
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-xl">
                i4Matrix designs and develops premium web, mobile, tourism, transport, API, and cloud
                platforms for companies ready to operate at a higher digital standard.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/services" size="lg" className="w-full sm:w-auto">
                  Explore Services <ArrowRight className="size-4" />
                </Button>
                <Button href="/portfolio" variant="outline" size="lg" className="w-full sm:w-auto">
                  View Projects
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Hero visual — card inside 4 floating icons */}
          <div className="mt-20 sm:mt-24 lg:mt-28">
            <HeroVisual />
          </div>

        </div>
      </section>
      <TrustedCompanies />
      <ServicesGrid />
      <ProjectsShowcase />
      <Strengths />
      <TeamPreview />
      <Testimonials />
      <CtaSection />
    </>
  );
}