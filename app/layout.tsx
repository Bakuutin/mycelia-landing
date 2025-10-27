import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mycelia - Your Privacy-First AI Memory",
  description: "Capture ideas, thoughts, and conversations in voice, screenshots, or text. Ask anything later — Mycelia tells you, in your own words.",
  keywords: ["AI", "memory", "privacy", "voice", "transcription", "self-hosted", "open source"],
  authors: [{ name: "Mycelia Team" }],
  openGraph: {
    title: "Mycelia - Your Privacy-First AI Memory",
    description: "Capture ideas, thoughts, and conversations in voice, screenshots, or text. Ask anything later — Mycelia tells you, in your own words.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
