import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Zap } from "lucide-react";
import { contact, navItems } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-card/35">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 font-bold">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-white">
                <Zap className="size-5" />
              </span>
              <span className="text-xl">i4Matrix</span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
              Premium software strategy, design, and engineering for companies building serious digital products.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="outline" size="sm">
                Discuss your platform <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Navigation</h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Social</h3>
            <div className="mt-5 grid gap-3">
              {contact.socials.map((social) => (
                <a key={social} href="#" className="text-sm text-muted-foreground transition hover:text-primary">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <p className="flex gap-3"><Mail className="mt-0.5 size-4 text-primary" /> {contact.email}</p>
              <p className="flex gap-3"><Phone className="mt-0.5 size-4 text-primary" /> {contact.phone}</p>
              <p className="flex gap-3"><MapPin className="mt-0.5 size-4 text-primary" /> {contact.address}</p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 i4Matrix. All rights reserved.</p>
          <p>Built for modern software delivery.</p>
        </div>
      </div>
    </footer>
  );
}
