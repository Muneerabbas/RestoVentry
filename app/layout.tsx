import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "restoVentry",
  description: "Modern SaaS kitchen operations dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
