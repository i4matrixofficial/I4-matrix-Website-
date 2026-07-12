import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollTools } from "@/components/scroll-tools";

export const metadata: Metadata = {
  metadataBase: new URL("https://i4matrix.com"),
  title: {
    default: "i4Matrix | Premium Software Company in Sri Lanka",
    template: "%s | i4Matrix",
  },
  description:
    "i4Matrix builds premium web applications, mobile apps, tourism systems, transport platforms, backend APIs, and cloud solutions for serious businesses.",
  keywords: ["i4Matrix", "software company Sri Lanka", "web application development", "mobile app development", "tourism systems"],
  openGraph: {
    title: "i4Matrix | Building Digital Solutions for the Future",
    description: "Premium software strategy, design, and engineering for modern companies.",
    url: "https://i4matrix.com",
    siteName: "i4Matrix",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "i4Matrix software company" }],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "i4Matrix",
    description: "Premium software strategy, design, and engineering.",
    images: ["/images/hero.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ScrollTools />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
