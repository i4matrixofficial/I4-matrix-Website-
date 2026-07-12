"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="grid size-10 place-items-center rounded-full border bg-background/70 text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
    >
      <Icon className="size-4" />
    </button>
  );
}
