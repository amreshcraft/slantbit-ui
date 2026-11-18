
"use client";

import { useEffect, useState } from "react";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { Theme } from "@/types/types";

import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import FinalCta from "@/components/CTA";
import Footer from "@/components/Footer";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

const SHARED = `
  --radius: 1rem;
  --radius-sm: 0.5rem;
  --ink: #10163A;
  --yellow: #FFD23F;
  --accent: #3D3BFF;
  --card1-bg: #3D3BFF;
  --card1-text: #FFFFFF;
  --card2-bg: #FFD23F;
  --card2-text: #10163A;
`;

const LIGHT = `
  color-scheme: light;
  --bg: #F7F8FA;
  --surface: #FFFFFF;
  --surface-2: #EEF0F6;
  --text: #10163A;
  --muted: #3A4066;
  --subtle: #5B6280;
  --border: rgba(16, 22, 58, 0.15);
  --accent-text: #3D3BFF;
  --yellow-dot: #E0B000;
  --header-bg: rgba(247, 248, 250, 0.88);
  --hero-bg: #10163A;
  --hero-text: #FFFFFF;
  --hero-muted: rgba(255, 255, 255, 0.78);
  --btn-bg: #10163A;
  --btn-text: #FFFFFF;
  --btn-hover: #252D63;
  --cta-bg: #3D3BFF;
  --footer-bg: #10163A;
  --footer-text: rgba(255, 255, 255, 0.75);
`;

const DARK = `
  color-scheme: dark;
  --bg: #0B0F24;
  --surface: #141A3F;
  --surface-2: #1C2350;
  --text: #EEF0FF;
  --muted: #B4BAE0;
  --subtle: #8F96C2;
  --border: rgba(255, 255, 255, 0.14);
  --accent-text: #9A99FF;
  --yellow-dot: #FFD23F;
  --header-bg: rgba(11, 15, 36, 0.88);
  --hero-bg: #151C52;
  --hero-text: #FFFFFF;
  --hero-muted: rgba(255, 255, 255, 0.78);
  --btn-bg: #FFD23F;
  --btn-text: #10163A;
  --btn-hover: #FFDF70;
  --cta-bg: #2E2CD6;
  --footer-bg: #070A1A;
  --footer-text: rgba(255, 255, 255, 0.7);
`;

const THEME_CSS = `
  :root {
    ${SHARED}
    ${LIGHT}
  }

  :root[data-theme="light"] {
    ${LIGHT}
  }

  :root[data-theme="dark"] {
    ${DARK}
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 4.5rem;
  }

  body {
    background: var(--bg);
    color: var(--text);
    margin: 0;
    transition:
      background-color 200ms ease,
      color 200ms ease;
  }

  a:focus-visible,
  button:focus-visible,
  summary:focus-visible {
    outline: 2px solid var(--accent-text);
    outline-offset: 2px;
  }

  .on-dark a:focus-visible,
  .on-dark button:focus-visible {
    outline-color: var(--yellow);
  }

  summary::-webkit-details-marker {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition: none !important;
    }
  }
`;

export default function Page() {
  const [theme, setTheme] = useState<Theme>("light");

  // Sync React theme state with the document
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Apply selected theme and persist it
  const applyTheme = (t: Theme) => {
    setTheme(t);

    try {
      localStorage.setItem("sb-theme", t);
    } catch {
      // Storage may be unavailable
    }
  };

  return (
    <div
      className={`
        ${display.variable}
        ${body.variable}
        min-h-screen
        overflow-x-hidden
        bg-[var(--bg)]
        font-[family-name:var(--font-body)]
        text-[var(--text)]
        antialiased
      `}
    >
      <style>{THEME_CSS}</style>

      <Header
        theme={theme}
        onToggleTheme={() =>
          applyTheme(theme === "dark" ? "light" : "dark")
        }
      />

      <main>
        <Hero />
        <Courses />
        <About />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
