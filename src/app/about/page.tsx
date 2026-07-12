import type { Metadata } from "next";
import { Building2, Eye, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection, StatsTimeline } from "@/components/sections";

export const metadata: Metadata = { title: "About", description: "Learn about i4Matrix, its mission, vision, growth, and management structure." };

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 lg:pt-36">
        <div className="container">
          <SectionHeading eyebrow="About i4Matrix" title="A premium software company shaped around clarity, speed, and product quality" text="i4Matrix helps businesses replace fragmented operations with elegant digital systems that are easier to run, improve, and scale." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              { title: "Company Story", icon: Building2, text: "Founded in Sri Lanka, i4Matrix grew from focused custom builds into a full software studio serving web, mobile, tourism, transport, backend, and cloud needs." },
              { title: "Mission", icon: Target, text: "To build dependable digital products that improve business speed, customer experience, and operational control." },
              { title: "Vision", icon: Eye, text: "To become a trusted international software partner known for refined interfaces and technically resilient systems." },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Card className="h-full p-6">
                  <item.icon className="size-8 text-primary" />
                  <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <StatsTimeline />
      <section className="py-20">
        <div className="container">
          <SectionHeading eyebrow="Management" title="Lean management, direct communication, senior ownership" text="Projects are guided by a management structure that connects product strategy, design leadership, engineering ownership, and business analysis without unnecessary layers." />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
