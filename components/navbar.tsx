"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className={cn(
          "glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300",
          scrolled && "shadow-premium",
        )}
      >
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tight">
          <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-glow">
            <Zap className="size-5" />
          </span>
          <span className="text-lg">i4Matrix</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {active && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-full bg-muted" />}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">Start a Project</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-full border bg-background/70"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto mt-3 max-w-7xl rounded-3xl p-3 shadow-premium lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-2xl px-4 py-3 text-sm font-semibold text-muted-foreground",
                pathname === item.href && "bg-muted text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-3 w-full">Start a Project</Button>
        </motion.div>
      )}
    </header>
  );
}