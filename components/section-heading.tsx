import { ReactNode } from "react";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  children,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const wrapperClass = align === "center" ? "mx-auto max-w-3xl text-center" : "mx-0 max-w-3xl text-left";

  return (
    <Reveal className={cn(wrapperClass)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{text}</p>}
      {children}
    </Reveal>
  );
}