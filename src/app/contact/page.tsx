import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = { title: "Contact", description: "Contact i4Matrix for software development, system modernization, and product engineering inquiries." };

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 lg:pt-36">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full border bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-6xl">Let’s plan the next version of your digital business</h1>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
