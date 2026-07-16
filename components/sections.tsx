"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Briefcase, Check, Filter, Send, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import {
  companies,
  contact,
  faq,
  jobs,
  projects,
  quoteIcon,
  services,
  stats,
  strengths,
  team,
  testimonials,
  timeline,
  values,
} from "@/data/site";
import { cn } from "@/lib/utils";

export function TrustedCompanies() {
  const reducedMotion = useReducedMotion();

  const BrandRow = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={ariaHidden}>
      {companies.map((company) => (
        <div key={company} className="shrink-0 rounded-2xl border bg-card/60 px-4 py-5 text-center text-sm font-semibold text-muted-foreground backdrop-blur">
          {company}
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-12">
      <div className="container">
        <Reveal>
          <p className="text-center text-sm font-medium text-muted-foreground">Trusted company placeholders for enterprise credibility</p>
          {reducedMotion ? (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {companies.map((company) => (
                <div key={company} className="rounded-2xl border bg-card/60 px-4 py-5 text-center text-sm font-semibold text-muted-foreground backdrop-blur">
                  {company}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <motion.div
                className="flex w-max items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 26, ease: "linear", repeat: Infinity }}
                style={{ willChange: "transform" }}
              >
                <BrandRow />
                <BrandRow ariaHidden />
                <BrandRow ariaHidden />
                <BrandRow ariaHidden />
              </motion.div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title={detailed ? "End-to-end software services for ambitious teams" : "High-value engineering across the full product lifecycle"}
          text="From product design to cloud deployment, i4Matrix builds practical systems with premium interface quality and long-term maintainability."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <div className="group relative h-full overflow-hidden rounded-3xl">
                <Card className="relative h-full border border-border/80 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,.24),0_14px_34px_rgba(56,189,248,.16)] group-hover:text-white">
                  {/* Subtle branded gradient inside card on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,.28),transparent_45%),radial-gradient(circle_at_85%_85%,rgba(124,58,237,.22),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-violet-500/0 transition-colors duration-500 group-hover:from-cyan-500/70 group-hover:via-sky-500/55 group-hover:to-violet-500/70" />

                  <div className="relative">
                    {/* Icon square — gradient border + glass fill appears on hover */}
                    <div
                      className={cn(
                        "relative mb-6 inline-flex size-14 items-center justify-center rounded-2xl",
                        "border border-primary/15 bg-primary/10 transition-all duration-500",
                        "group-hover:border-white/50 group-hover:bg-white/10 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,.15)_inset,0_8px_24px_rgba(0,0,0,.15)] group-hover:backdrop-blur-md",
                      )}
                    >
                      <div className="absolute inset-0 scale-150 rounded-full bg-primary/25 blur-xl transition-opacity duration-500 group-hover:opacity-0" />
                      <service.icon className="relative size-6 text-primary transition-colors duration-500 group-hover:text-white" />
                    </div>

                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground transition-colors duration-500 group-hover:text-white/85">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {detailed && (
                      <div className="mt-6 space-y-3 border-t pt-5 transition-colors duration-500 group-hover:border-white/20">
                        {service.benefits.map((benefit) => (
                          <p key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-500 group-hover:text-white/85">
                            <Check className="size-4 text-primary transition-colors duration-500 group-hover:text-white" /> {benefit}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* CTA that slides up on hover */}
                    <div className="mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-5 group-hover:max-h-12 group-hover:opacity-100">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
                      >
                        Talk With Us <ArrowRight className="size-3.5" />
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsShowcase({ full = false }: { full?: boolean }) {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Projects"
            title={full ? "Premium project showcase" : "Featured platforms shaped for real operations"}
            text="A concise view of tourism, transport, and custom product work from the i4Matrix delivery portfolio."
          />
          {full && (
            <Reveal>
              <div className="flex flex-wrap gap-2">
                {["All", "Tourism", "Transport", "Travel Tech"].map((item) => (
                  <button key={item} className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary">
                    <Filter className="size-3.5" /> {item}
                  </button>
                ))}
              </div>
            </Reveal>
          )}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <Card className="group overflow-hidden p-0 hover:-translate-y-1 hover:shadow-premium">
                <div className="relative aspect-[1.35] overflow-hidden bg-muted">
                  <Image src={project.image} alt={`${project.title} interface preview`} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                  <div className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-bold text-primary backdrop-blur">{project.status}</div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-primary">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Strengths() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Why i4Matrix" title="Built for companies that need software to feel dependable" text="The studio combines product taste with technical discipline, giving businesses software that works clearly and scales cleanly." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <div className="group relative h-full overflow-hidden rounded-3xl">
                <Card className="relative h-full border border-border/80 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/45 group-hover:shadow-[0_0_0_1px_rgba(56,189,248,.2),0_12px_30px_rgba(56,189,248,.12)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,.16),transparent_48%),radial-gradient(circle_at_85%_85%,rgba(124,58,237,.14),transparent_44%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <item.icon className="size-7 text-primary transition-colors duration-500 group-hover:text-sky-500" />
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground transition-colors duration-500 group-hover:text-foreground/90">{item.text}</p>
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamGrid({ group }: { group?: string }) {
  const people = group ? team.filter((member) => member.group === group) : team;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {people.map((member, index) => (
        <Reveal key={member.name} delay={index * 0.04}>
          <Card className="group p-6 hover:-translate-y-1 hover:shadow-premium">
            <div className="flex items-center gap-4">
              <div className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-lg font-bold text-white">{member.initials}</div>
              <div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              {["in", "x", "be"].map((social) => (
                <span key={social} className="grid size-9 place-items-center rounded-full border text-xs font-bold text-muted-foreground transition group-hover:border-primary group-hover:text-primary">{social}</span>
              ))}
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export function TeamPreview() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Team" title="A compact team with senior product instincts" text="Strategy, design, and engineering work closely together, reducing handoff friction and keeping delivery decisions sharp." />
        <div className="mt-12"><TeamGrid /></div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const QuoteIcon = quoteIcon;
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="What clients notice first" text="Clear execution, refined interface quality, and software that feels ready for daily business use." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <Card className="p-6">
                <QuoteIcon className="size-7 text-primary" />
                <p className="mt-5 text-lg leading-8">“{item.quote}”</p>
                <div className="mt-6 border-t pt-5">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border bg-slate-950 px-6 py-14 text-white shadow-premium sm:px-10 lg:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.35),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(124,58,237,.35),transparent_32%)]" />
            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Start with clarity</p>
              <h2 className="mt-4 text-balance text-3xl font-bold sm:text-5xl">Build the software platform your company actually needs next.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">Share the workflow, product idea, or legacy system you want to improve. i4Matrix can shape it into a practical technical roadmap.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">Contact i4Matrix <Send className="size-4" /></Button>
                <Button href="/services" variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/10">Explore Services</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StatsTimeline() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionHeading align="left" eyebrow="Growth" title="A software studio built around measured delivery" text="i4Matrix has grown from focused builds into a premium software partner for web, mobile, operations, and cloud platforms." />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-5">
                  <p className="text-3xl font-bold text-primary">{stat.value}{stat.suffix}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </Reveal>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.05}>
                <Card className="grid gap-4 p-6 sm:grid-cols-[120px_1fr]">
                  <p className="text-2xl font-bold text-primary">{item.year}</p>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{item.text}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CultureCareers() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Careers" title="Join a team building serious software with refined product quality" text="i4Matrix values calm execution, strong fundamentals, and ownership across every role." />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.04}>
              <Card className="p-6">
                <value.icon className="size-7 text-primary" />
                <h3 className="mt-5 font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_.9fr]">
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.title} className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-center gap-4">
                  <div className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary"><job.icon className="size-5" /></div>
                  <div>
                    <h3 className="font-bold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.type} · {job.location}</p>
                  </div>
                </div>
                <Briefcase className="hidden size-5 text-muted-foreground sm:block" />
              </Card>
            ))}
          </div>
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
}

export function ApplicationForm() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold">Apply to i4Matrix</h3>
      <div className="mt-5 grid gap-4">
        <Input aria-label="Full name" placeholder="Full name" required />
        <Input aria-label="Email address" type="email" placeholder="Email address" required />
        <Input aria-label="Role" placeholder="Role you are applying for" required />
        <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/40 p-5 text-center text-sm text-muted-foreground transition hover:border-primary hover:text-primary">
          <UploadCloud className="mb-2 size-6" />
          Upload CV or portfolio
          <input type="file" className="sr-only" />
        </label>
        <Textarea aria-label="Message" placeholder="Tell us about your strongest work" />
        <Button type="submit">Submit Application</Button>
      </div>
    </Card>
  );
}

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <SectionHeading align="left" eyebrow="Contact" title="Tell us what you want to build, improve, or scale" text="Use the form for project inquiries, partnership discussions, and product modernization requests." />
            <Card className="mt-8 p-6">
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-foreground">Email:</strong> {contact.email}</p>
                <p><strong className="text-foreground">Phone:</strong> {contact.phone}</p>
                <p><strong className="text-foreground">Office:</strong> {contact.address}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {contact.socials.map((social) => <span key={social} className="rounded-full border px-4 py-2 text-sm font-semibold text-muted-foreground">{social}</span>)}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input aria-label="Name" placeholder="Name" required />
                <Input aria-label="Email" type="email" placeholder="Email" required />
                <Input aria-label="Company" placeholder="Company" />
                <Input aria-label="Budget" placeholder="Estimated budget" />
                <Textarea aria-label="Project message" placeholder="Describe the platform, system, or workflow" className="sm:col-span-2" required />
              </div>
              <Button className="mt-5 w-full sm:w-auto">Send Inquiry <ArrowRight className="size-4" /></Button>
            </Card>
            <div className="mt-6 overflow-hidden rounded-3xl border bg-card">
              <div className="flex aspect-[1.8] items-center justify-center bg-[linear-gradient(135deg,rgba(14,165,233,.2),rgba(99,102,241,.18)),url('/images/demo4.png')] bg-cover bg-center p-6 text-center">
                <div className="rounded-3xl border bg-background/80 p-5 backdrop-blur">
                  <p className="font-bold">Colombo, Sri Lanka</p>
                  <p className="mt-2 text-sm text-muted-foreground">Google map section placeholder</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServiceProcess() {
  const steps = ["Discovery and product scope", "UX architecture and interface system", "Agile engineering and QA", "Cloud launch and optimization"];
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Process" title="A delivery model designed for clarity" text="Every engagement is shaped around practical decisions, visible progress, and stable production releases." />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 0.05}>
              <Card className="p-6">
                <p className="text-sm font-bold text-primary">0{index + 1}</p>
                <h3 className="mt-4 text-lg font-bold">{step}</h3>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="py-20">
      <div className="container max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Common project questions" />
        <div className="mt-10 space-y-4">
          {faq.map((item) => (
            <Card key={item.q} className="p-6">
              <h3 className="font-bold">{item.q}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{item.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectGallery() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Screenshots" title="Interface systems designed for polish and operational clarity" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["/images/demo5.png", "/images/demo6.png", "/images/demo7.png"].map((src, index) => (
            <Reveal key={src} delay={index * 0.05}>
              <div className={cn("relative overflow-hidden rounded-3xl border bg-muted shadow-premium", index === 1 && "md:mt-10")}>
                <Image src={src} alt="Project screenshot gallery" width={900} height={680} className="h-full w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
