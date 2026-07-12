import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border bg-card/80 text-card-foreground shadow-sm backdrop-blur transition-all duration-300",
        className,
      )}
      {...props}
    />
  );
}
