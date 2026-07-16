import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { TeamGrid } from "@/components/sections";

export const metadata: Metadata = { title: "Team", description: "Meet the i4Matrix management, developers, designers, and business analysts." };

const groups = ["Management Team", "Developers", "Designers", "Business Analysts"];

export default function TeamPage() {
  return (
    <section className="pb-20 pt-8 sm:pt-10 lg:pt-12">
      <div className="container">
        <SectionHeading eyebrow="Team" title="Product-minded specialists across strategy, design, engineering, and analysis" text="A focused team structure keeps decisions close to the product and delivery quality high." />
        <div className="mt-14 space-y-16">
          {groups.map((group) => (
            <div key={group}>
              <h2 className="mb-6 text-2xl font-bold">{group}</h2>
              <TeamGrid group={group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}