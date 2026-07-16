import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-3xl text-card-foreground transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-[0_24px_60px_-12px_rgba(15,23,42,.18)]",
        "dark:hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,.6)]",
        className,
      )}
      {...props}
    />
  );
}