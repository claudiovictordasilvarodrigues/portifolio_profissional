import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Rodrigues | Pentest Web Jr",
  description:
    "Portfólio de Pentest Web Jr com foco em OWASP Top 10, estudos práticos e metodologia de segurança ofensiva.",
  keywords: [
    "pentest web",
    "segurança da informação",
    "owasp",
    "pentest jr",
    "cybersecurity",
  ],
  authors: [{ name: "Victor Rodrigues" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
