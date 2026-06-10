import type { Metadata } from "next";
import { Prata, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/sites/SiteNav";
import { SiteFooter } from "@/components/sites/SiteFooter";

const prata = Prata({
  weight: "400",
  variable: "--font-prata",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NBBS — From Diagnosis to Solution Implementation",
  description:
    "Integrated business solutions for Nashik's SMBs. Diagnostics, workshops, CRM, Incentiwise, Quotation, and Cashflow — built by operators, for operators.",
  authors: [{ name: "NB Business Solutions" }],
  openGraph: {
    title: "NBBS — From Diagnosis to Solution Implementation",
    description:
      "Consulting when you need a guide. Software built for your sustainable growth. Trusted by 50+ SMBs across Nashik.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${prata.variable} ${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
