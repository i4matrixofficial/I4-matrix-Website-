"use client";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  CloudCog,
  Code2,
  Cpu,
  Database,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const workflow = [
  { label: "Product strategy", bar: "w-[86%]" },
  { label: "UI system", bar: "w-[74%]" },
  { label: "Secure APIs", bar: "w-[90%]" },
  { label: "Cloud deployment", bar: "w-[80%]" },
];

const tools = [
  { label: "Core AI", icon: Bot },
  { label: "Data", icon: Database },
  { label: "Infra", icon: CloudCog },
  { label: "Security", icon: ShieldCheck },
  { label: "Engine", icon: Cpu },
  { label: "Code", icon: Code2 },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-border/70 bg-background/70 p-4 shadow-premium backdrop-blur sm:p-6" style={{ minHeight: "620px" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(56,189,248,.16),transparent_38%),radial-gradient(circle_at_85%_14%,rgba(124,58,237,.14),transparent_35%)]" />
      <div className="absolute inset-0 premium-grid opacity-45" />

      <motion.div
        className="absolute left-1/2 top-[62%] h-56 w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/30 via-sky-400/25 to-violet-500/30 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative rounded-[1.4rem] border border-border/70 bg-background/80 shadow-[inset_0_1px_0_rgba(255,255,255,.6)] backdrop-blur">
        <div className="flex items-center justify-between gap-2 border-b border-border/70 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rose-400" />
            <span className="size-2 rounded-full bg-amber-400" />
            <span className="size-2 rounded-full bg-emerald-400" />
          </div>
          <div className="hidden rounded-full border border-border/70 bg-background/70 px-4 py-1 text-[11px] text-muted-foreground sm:block">
            https://i4matrix.com/orchestration
          </div>
          <button className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-semibold">
            Live <ArrowUpRight className="size-3.5" />
          </button>
        </div>

        <div className="relative px-4 pb-5 pt-6 sm:px-6 sm:pt-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                <Sparkles className="size-3.5" /> Production ready in days
              </div>
              <h3 className="mt-4 max-w-xl text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                Enterprise Platform Build
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
                A unified system where strategy, interface operations, APIs, and cloud runtime move through one orchestration layer.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" /> Healthy
              </div>
            </div>
          </div>

          <div className="mt-7 flex justify-center">
            <div className="rounded-full border border-primary/20 bg-background/90 px-5 py-2 text-sm font-semibold shadow-sm backdrop-blur">
              Orchestration layer
            </div>
          </div>

          <div className="relative mt-6 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-background/85 p-4 shadow-sm sm:p-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(56,189,248,.18),transparent_35%),radial-gradient(circle_at_90%_85%,rgba(124,58,237,.14),transparent_35%)]" />
              <div className="relative">
                <div className="space-y-2">
                  {workflow.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center justify-between gap-3 rounded-xl border border-border/65 bg-background/80 px-3 py-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.14 + index * 0.07 }}
                    >
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle2 className="size-4 text-primary" />
                        {item.label}
                      </span>
                      <span className="h-2 w-24 rounded-full bg-muted">
                        <span className={`block h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 ${item.bar}`} />
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Live performance panel — now theme-aware instead of hardcoded black */}
                <div className="relative mt-4 overflow-hidden rounded-2xl border border-border/70 bg-card p-3.5 text-card-foreground shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,.14),transparent_40%),radial-gradient(circle_at_85%_75%,rgba(124,58,237,.12),transparent_36%)]" />
                  <p className="relative flex items-center gap-2 text-xs font-semibold text-primary dark:text-cyan-300">
                    <Activity className="size-4" /> Live performance
                  </p>
                  <div className="relative mt-3 grid grid-cols-3 gap-2">
                    {[
                      { value: "99.9%", label: "Availability" },
                      { value: "42ms", label: "Response" },
                      { value: "24/7", label: "Coverage" },
                    ].map((item) => (
                      <div key={item.value} className="rounded-xl border border-border/60 bg-muted/60 p-2 text-center backdrop-blur dark:border-white/10 dark:bg-white/10">
                        <p className="text-sm font-bold sm:text-base">{item.value}</p>
                        <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground dark:text-white/70">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="relative min-h-[250px] overflow-hidden rounded-2xl border border-border/70 bg-background/75 p-4 sm:p-5">
              <div className="pointer-events-none absolute inset-0 z-0">
                {/* Fixed hub position in the lower-middle of the panel */}
                <div className="absolute left-1/2 top-[68%] size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-gradient-to-br from-cyan-400/60 to-violet-500/60 opacity-35 blur-md" />

                {/* Static connector lines */}
                <div className="absolute left-[18%] top-[68%] h-[1px] w-[32%] bg-gradient-to-r from-primary/5 via-primary/35 to-primary/50" />
                <div className="absolute left-1/2 top-[28%] h-[40%] w-[1px] -translate-x-1/2 bg-gradient-to-b from-primary/5 via-primary/35 to-primary/50" />

                {/* Animated line pulses flowing into the hub */}
                <motion.div
                  className="absolute left-[18%] top-[68%] h-[1px] w-[32%] origin-right bg-gradient-to-r from-transparent via-cyan-400/80 to-violet-500/90"
                  animate={{ scaleX: [0.15, 1, 0.15], opacity: [0.2, 0.9, 0.2] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute left-1/2 top-[28%] h-[40%] w-[1px] -translate-x-1/2 origin-bottom bg-gradient-to-b from-transparent via-cyan-400/80 to-violet-500/90"
                  animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.2, 0.9, 0.2] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />

                {/* Hub */}
                <div className="absolute left-1/2 top-[68%] z-10 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="grid size-16 place-items-center rounded-full border border-primary/25 bg-background/95 text-sm font-bold text-primary shadow-[0_0_24px_rgba(14,165,233,.22)]"
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    i4
                  </motion.div>
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-2.5">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.label}
                    className="rounded-xl border border-border/70 bg-background/95 p-2 text-xs font-semibold shadow-sm"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4.3, repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-2">
                      <tool.icon className="size-3.5 text-primary" />
                      {tool.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                <GitBranch className="size-3" /> Auto pipeline
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}