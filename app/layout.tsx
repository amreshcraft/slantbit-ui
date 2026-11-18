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
  title: "Slanbit – Learn Live. Grow Together.",
  description: "Slanbit is a platform that connects learners with mentors, educators, and industry experts through personalized 1:1 sessions, live online cohorts, and interactive learning experiences. Learn directly from experts, join collaborative communities, and grow your skills through real-time guidance.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <link rel="icon" type="image/png" href="/slantbit.png"></link>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
