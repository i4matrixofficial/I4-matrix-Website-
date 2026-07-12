import type { Metadata } from "next";
import { CultureCareers } from "@/components/sections";

export const metadata: Metadata = { title: "Careers", description: "Join i4Matrix and work on premium software products across web, mobile, cloud, tourism, and transport systems." };

export default function CareersPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 lg:pt-36">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Careers</p>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">Build polished software with a team that values calm, serious execution</h1>
          </div>
        </div>
      </section>
      <CultureCareers />
    </>
  );
}
