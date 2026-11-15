"use client";


import { useEffect, useState } from "react";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Image from "next/image";

/* ----------------------------- FONTS ----------------------------- */
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
  :root { ${SHARED} ${LIGHT} }
  @media (prefers-color-scheme: dark) { :root:not([data-theme]) { ${DARK} } }
  :root[data-theme="light"] { ${LIGHT} }
  :root[data-theme="dark"] { ${DARK} }

  html { scroll-behavior: smooth; scroll-padding-top: 4.5rem; }
  body { background: var(--bg); color: var(--text); margin: 0; }
  a:focus-visible, button:focus-visible, summary:focus-visible {
    outline: 2px solid var(--accent-text);
    outline-offset: 2px;
  }
  .on-dark a:focus-visible, .on-dark button:focus-visible { outline-color: var(--yellow); }
  summary::-webkit-details-marker { display: none; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    * { transition: none !important; }
  }
`;

type Course = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    outcomes: string[];
    duration: string; // TODO
    format: string; // TODO
    price: string; // TODO
    razorpayUrl: string; // TODO: apna Razorpay payment link
    card: "card1" | "card2";
};

const CONFIG = {
    brand: "Slantbit",
    educator: {
        name: "Amresh",
        role: "Educator & developer",
        bio: [
            "I teach people to build real things instead of memorising syntax. Every cohort is small on purpose, so you get feedback on your own work, not a recorded video.",
            "My focus is quality over volume: fewer topics, explained properly, with projects you can show to someone.",
        ],
        facts: [
            { label: "Students taught", value: "50–100+" },
            { label: "Format", value: "Live cohorts" },
            { label: "Class size", value: "Small batches" },
        ],
    },
    contactEmail: "hello@slantbit.com", // TODO
    nav: [
        { href: "#courses", label: "Courses" },
        { href: "#about", label: "About" },
        { href: "#faq", label: "FAQ" },
    ],
    courses: [
        {
            id: "python",
            name: "Python Cohort",
            tagline: "From zero to writing programs you actually use.",
            description:
                "A guided, project-first path through Python. You learn the language by building small tools, then finish with a project of your own.",
            outcomes: [
                "Write clean Python: variables, functions, data structures, files",
                "Build and debug small command-line projects",
                "Work with APIs and real data",
                "Finish with one portfolio-ready project",
            ],
            duration: "8 weeks", // TODO
            format: "Live sessions + assignments", // TODO
            price: "₹4,999", // TODO
            razorpayUrl: "https://razorpay.me/@slantbit", // TODO
            card: "card1",
        },
        {
            id: "lifehack",
            name: "The Digital Lifehack Cohort",
            tagline: "Use your phone and laptop like someone who knows the shortcuts.",
            description:
                "Practical digital skills for everyday work and life: faster workflows, smarter tools, and automation you can set up in an afternoon.",
            outcomes: [
                "Save hours a week with the right tools and shortcuts",
                "Organise files, notes, and tasks so they stay organised",
                "Use AI tools well, and know when not to",
                "Stay safer online with simple habits",
            ],
            duration: "4 weeks", // TODO
            format: "Live sessions + templates", // TODO
            price: "₹1,760", // TODO
            razorpayUrl: "https://razorpay.me/@slantbit", // TODO
            card: "card2",
        },
    ] satisfies Course[],
    steps: [
        { title: "Join the cohort", text: "Pay securely on Razorpay. You get access details right after." },
        { title: "Learn live", text: "Short, focused sessions. Ask questions while the topic is fresh." },
        { title: "Build something", text: "Every week ends with a small task so the learning sticks." },
        { title: "Get feedback", text: "Your work gets reviewed, not just marked done." },
    ],
    faqs: [
        {
            q: "Do I need any prior experience?",
            a: "No. Both cohorts start from the basics. If you can use a computer and a browser, you can start.",
        },
        {
            q: "What happens after I click Join now?",
            a: "You are taken to a Razorpay payment page. After payment, you receive joining details on the email you used.",
        },
        {
            q: "What if I miss a live session?",
            a: "TODO: replace with your actual policy (recordings, doubt sessions, etc.).",
        },
        {
            q: "Is there a refund?",
            a: "TODO: replace with your actual refund policy.",
        },
    ],
};

type Theme = "light" | "dark";

function JoinButton({
    href,
    label = "Join now",
    tone = "primary",
    block = false,
}: {
    href: string;
    label?: string;
    tone?: "primary" | "yellow";
    block?: boolean;
}) {
    const tones =
        tone === "yellow"
            ? "bg-[var(--yellow)] text-[var(--ink)] hover:brightness-110"
            : "bg-[var(--btn-bg)] text-[var(--btn-text)] hover:bg-[var(--btn-hover)]";
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center rounded-[var(--radius-sm)] px-6 py-3 text-base font-semibold transition-colors ${tones} ${block ? "w-full sm:w-auto" : ""
                }`}
        >
            {label}
        </a>
    );
}

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
    const isDark = theme === "dark";
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text)] transition-colors hover:bg-[var(--surface-2)]"
        >
            {isDark ? (
                // Sun
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
            ) : (
                // Moon
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
            )}
        </button>
    );
}

function Hamburger({ open, onToggle }: { open: boolean; onToggle: () => void }) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--text)] md:hidden"
        >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
        </button>
    );
}

/* --------------------------- SECTIONS ---------------------------- */
function Header({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
    const [open, setOpen] = useState(false);

    // Escape se menu band
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5">
                <a
                    href="#top"
                    onClick={() => setOpen(false)}
                    className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-[var(--text)]"
                >
                    slant<span className="text-[var(--accent-text)]">bit</span>
                </a>

                {/* Desktop nav */}
                <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-medium text-[var(--text)] md:flex">
                    {CONFIG.nav.map((n) => (
                        <a key={n.href} href={n.href} className="hover:text-[var(--accent-text)]">
                            {n.label}
                        </a>
                    ))}
                    <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                    <a
                        href="#courses"
                        className="rounded-[var(--radius-sm)] bg-[var(--btn-bg)] px-4 py-2 text-[var(--btn-text)] hover:bg-[var(--btn-hover)]"
                    >
                        See cohorts
                    </a>
                </nav>

                {/* Mobile controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                    <Hamburger open={open} onToggle={() => setOpen((v) => !v)} />
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <nav
                    id="mobile-menu"
                    aria-label="Mobile"
                    className="border-t border-[var(--border)] bg-[var(--surface)] px-4 pb-5 pt-2 md:hidden"
                >
                    <ul className="flex flex-col">
                        {CONFIG.nav.map((n) => (
                            <li key={n.href} className="border-b border-[var(--border)]">
                                <a
                                    href={n.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-4 text-lg font-semibold text-[var(--text)]"
                                >
                                    {n.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#courses"
                        onClick={() => setOpen(false)}
                        className="mt-5 flex w-full items-center justify-center rounded-[var(--radius-sm)] bg-[var(--btn-bg)] px-6 py-3 text-base font-semibold text-[var(--btn-text)] hover:bg-[var(--btn-hover)]"
                    >
                        See cohorts
                    </a>
                </nav>
            )}
        </header>
    );
}

function Hero() {
    return (
        <section
            id="top"
            className="on-dark relative overflow-hidden bg-[var(--hero-bg)] text-[var(--hero-text)]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)" }}
        >
            <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-12 sm:px-5 md:grid-cols-[1.3fr_1fr] md:pb-36 md:pt-24">
                <div>
                    <p className="mb-4 text-base text-[var(--hero-muted)]">
                        Live cohorts taught by {CONFIG.educator.name}
                    </p>
                    <h1 className="font-[family-name:var(--font-display)] text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                        Learn it properly.
                        <br />
                        Build it yourself.
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--hero-muted)] sm:text-lg">
                        Small batches, real projects, and feedback on your own work. Pick a
                        cohort, join in a minute, start learning this week.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <JoinButton href="#courses" label="Choose your cohort" tone="yellow" block />
                        <a
                            href="#about"
                            className="inline-flex w-full items-center justify-center rounded-[var(--radius-sm)] border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                        >
                            Meet {CONFIG.educator.name}
                        </a>
                    </div>
                </div>

                {/* Tilted code card (desktop only) */}
                <div className="hidden items-center justify-center md:flex" aria-hidden="true">
                    <div
                        className="w-full max-w-sm rounded-2xl bg-[var(--surface)] p-6 text-[var(--text)] shadow-2xl"
                        style={{ transform: "rotate(-4deg)" }}
                    >
                        <p className="mb-3 text-sm font-semibold text-[var(--subtle)]">your_first_program.py</p>
                        <pre className="whitespace-pre-wrap font-mono text-[15px] leading-7">
                            {`name = "you"
skills = ["python", "projects"]

for s in skills:
    print(f"{name} learns {s}")`}
                        </pre>
                        <div className="mt-4 rounded-[var(--radius-sm)] bg-[var(--ink)] px-4 py-3 font-mono text-sm text-[var(--yellow)]">
                            you learns python
                            <br />
                            you learns projects
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CourseCard({ course }: { course: Course }) {
    const dot = course.card === "card1" ? "var(--accent-text)" : "var(--yellow-dot)";
    return (
        <article
            id={course.id}
            className="flex flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]"
        >
            <div
                className="px-5 py-6 sm:px-7"
                style={{ backgroundColor: `var(--${course.card}-bg)`, color: `var(--${course.card}-text)` }}
            >
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-extrabold leading-tight sm:text-3xl">
                    {course.name}
                </h3>
                <p className="mt-2 text-base opacity-90">{course.tagline}</p>
            </div>

            <div className="flex flex-1 flex-col px-5 py-6 sm:px-7">
                <p className="leading-relaxed text-[var(--muted)]">{course.description}</p>

                <h4 className="mt-6 text-base font-bold text-[var(--text)]">What you will be able to do</h4>
                <ul className="mt-3 space-y-2">
                    {course.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-[var(--muted)]">
                            <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: dot }} />
                            {o}
                        </li>
                    ))}
                </ul>

                <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-5 text-sm">
                    <div>
                        <dt className="text-[var(--subtle)]">Duration</dt>
                        <dd className="mt-0.5 font-semibold text-[var(--text)]">{course.duration}</dd>
                    </div>
                    <div>
                        <dt className="text-[var(--subtle)]">Format</dt>
                        <dd className="mt-0.5 font-semibold text-[var(--text)]">{course.format}</dd>
                    </div>
                </dl>

                <div className="mt-auto flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-[var(--text)]">
                        {course.price}
                    </p>
                    <JoinButton href={course.razorpayUrl} block />
                </div>
            </div>
        </article>
    );
}

function Courses() {
    return (
        <section id="courses" className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
                Two cohorts, open now
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
                Join now opens a secure Razorpay page. Pay once, and you get your joining
                details by email.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
                {CONFIG.courses.map((c) => (
                    <CourseCard key={c.id} course={c} />
                ))}
            </div>
        </section>
    );
}



function About() {
    const { educator } = CONFIG;
    return (
        <section id="about" className="bg-[var(--surface)] py-16 md:py-20">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-12">
                <div className="flex items-center justify-center">
                    <Image
                        alt="Amresh"
                        src="/amresh.jpeg"
                        width={320}
                        height={320}
                        className="aspect-square w-48 rounded-3xl object-cover md:w-full md:max-w-xs"
                        style={{ transform: "rotate(3deg)" }}
                    />
                </div>
                <div>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
                        Hi, I am {educator.name}
                    </h2>
                    <p className="mt-2 text-base font-medium text-[var(--subtle)]">{educator.role}</p>
                    <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                        {educator.bio.map((p) => (
                            <p key={p}>{p}</p>
                        ))}
                    </div>
                    <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                        {educator.facts.map((f) => (
                            <div key={f.label} className="rounded-[var(--radius-sm)] bg-[var(--surface-2)] p-4">
                                <dd className="font-[family-name:var(--font-display)] text-xl font-extrabold text-[var(--text)]">
                                    {f.value}
                                </dd>
                                <dt className="mt-1 text-sm text-[var(--subtle)]">{f.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
                How a cohort works
            </h2>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {CONFIG.steps.map((s, i) => (
                    <li key={s.title} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6">
                        <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-[var(--accent-text)]">
                            {i + 1}
                        </span>
                        <h3 className="mt-3 text-lg font-bold text-[var(--text)]">{s.title}</h3>
                        <p className="mt-2 text-[var(--muted)]">{s.text}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}

function Faq() {
    return (
        <section id="faq" className="mx-auto max-w-3xl px-4 pb-16 sm:px-5 md:pb-20">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
                Questions
            </h2>
            <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {CONFIG.faqs.map((f) => (
                    <details key={f.q} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--text)] sm:text-lg">
                            {f.q}
                            <span aria-hidden="true" className="text-2xl leading-none text-[var(--accent-text)] transition-transform group-open:rotate-45">
                                +
                            </span>
                        </summary>
                        <p className="mt-3 leading-relaxed text-[var(--muted)]">{f.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}

function FinalCta() {
    return (
        <section
            className="on-dark bg-[var(--cta-bg)] text-white"
            style={{ clipPath: "polygon(0 6%, 100% 0, 100% 100%, 0 100%)" }}
        >
            <div className="mx-auto max-w-6xl px-4 pb-14 pt-20 text-center sm:px-5 md:pb-16 md:pt-24">
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                    Seats are limited per batch
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
                    Small groups are the point. Pick your cohort and join today.
                </p>
                <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                    {CONFIG.courses.map((c) => (
                        <JoinButton key={c.id} href={c.razorpayUrl} label={`Join ${c.name}`} tone="yellow" block />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="on-dark bg-[var(--footer-bg)] py-10 text-[var(--footer-text)]">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm sm:flex-row sm:px-5 sm:text-left">
                <p>
                    © {2026} {CONFIG.brand}. Taught by {CONFIG.educator.name}.
                </p>
                <a href={`mailto:${CONFIG.contactEmail}`} className="underline underline-offset-4 hover:text-white">
                    {CONFIG.contactEmail}
                </a>
            </div>
        </footer>
    );
}

/* ------------------------------ PAGE ----------------------------- */
export default function Page() {
    const [theme, setTheme] = useState<Theme>("light");

    const applyTheme = (t: Theme) => {
        setTheme(t);
        document.documentElement.dataset.theme = t;
        try {
            localStorage.setItem("sb-theme", t);
        } catch {
            /* private mode etc. */
        }
    };

    // Mount par: saved choice > system preference
    useEffect(() => {
        let saved: string | null = null;
        try {
            saved = localStorage.getItem("sb-theme");
        } catch { }
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial: Theme = saved === "dark" || saved === "light" ? saved : systemDark ? "dark" : "light";
        setTheme(initial);
        document.documentElement.dataset.theme = initial;
    }, []);

    return (
        <div
            className={`${display.variable} ${body.variable} min-h-screen overflow-x-hidden bg-[var(--bg)] font-[family-name:var(--font-body)] text-[var(--text)] antialiased`}
        >
            <style>{THEME_CSS}</style>
            <Header theme={theme} onToggleTheme={() => applyTheme(theme === "dark" ? "light" : "dark")} />
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