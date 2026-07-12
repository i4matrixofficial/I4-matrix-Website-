import type { Metadata } from "next";
import { CtaSection, FaqSection, ServiceProcess, ServicesGrid } from "@/components/sections";

export const metadata: Metadata = { title: "Services", description: "Software development, mobile apps, UI/UX, tourism systems, transport systems, APIs, and cloud solutions by i4Matrix." };

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 lg:pt-36">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Services</p>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">Software services for companies that need high-end execution</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">i4Matrix covers the full path from product definition and interface design to engineering, deployment, and iteration.</p>
          </div>
        </div>
      </section>
      <ServicesGrid detailed />
      <ServiceProcess />
      <FaqSection />
      <CtaSection />
    </>
  );
}
