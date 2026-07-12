"use client";
import { motion } from "framer-motion";
import { Activity, CheckCircle2, CloudCog, Cpu, Database, ShieldCheck } from "lucide-react";

const nodes = [
  { label: "Design",   icon: Cpu,         pos: "top-6 left-6" },
  { label: "APIs",     icon: Database,    pos: "top-6 right-6" },
  { label: "Cloud",    icon: CloudCog,    pos: "bottom-6 left-6" },
  { label: "Security", icon: ShieldCheck, pos: "bottom-6 right-6" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-3xl border bg-background/20 backdrop-blur" style={{ minHeight: "560px" }}>

      {/* Background grid */}
      <div className="absolute inset-0 premium-grid opacity-50 rounded-3xl" />

      {/* Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-56 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 4 corner floating nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className={`absolute ${node.pos} flex items-center gap-2 rounded-full border bg-background/90 px-4 py-2 text-sm font-semibold shadow-premium backdrop-blur z-10`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: index * 0.45, ease: "easeInOut" }}
        >
          <node.icon className="size-4 text-primary" />
          {node.label}
        </motion.div>
      ))}

      {/* Central card — pinned inside the 4 nodes */}
      <div className="absolute inset-16 flex items-center justify-center">
        <motion.div
          className="w-full max-w-lg rounded-2xl border bg-card/95 p-5 text-left shadow-premium backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-start justify-between gap-4 border-b pb-4">
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Delivery Matrix</p>
              <p className="truncate font-semibold">Enterprise Platform Build</p>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-500">
              Healthy
            </span>
          </div>

          <div className="mt-4 grid gap-2 sm:gap-3">
            {["Product strategy", "UI system", "Secure APIs", "Cloud deployment"].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center justify-between gap-3 rounded-2xl border bg-background/60 px-4 py-3"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.08 }}
              >
                <span className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  {item}
                </span>
                <span className="h-2 w-20 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              </motion.div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-white sm:mt-5">
            <div className="flex items-center gap-2 text-xs text-cyan-300">
              <Activity className="size-4" /> Live performance
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {["99.9%", "42ms", "24/7"].map((value) => (
                <div key={value} className="rounded-xl bg-white/10 p-2 sm:p-3">
                  <p className="text-sm font-bold sm:text-base">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}