import type { Metadata } from "next";
import { CtaSection, ProjectGallery, ProjectsShowcase } from "@/components/sections";

export const metadata: Metadata = { title: "Portfolio", description: "Explore i4Matrix projects including Tapro Lanka, i4Van, and tourism technology platforms." };

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 lg:pt-36">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Portfolio</p>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">Project work with premium interface polish and practical business depth</h1>
          </div>
        </div>
      </section>
      <ProjectsShowcase full />
      <ProjectGallery />
      <CtaSection />
    </>
  );
}
