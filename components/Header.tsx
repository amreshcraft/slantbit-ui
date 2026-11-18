import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Hamburger from "./Hamburger";
import navLink from "@/data/navLink";
import { Theme } from "@/types/types";


export default function Header({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
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
                    {navLink?.map((n) => (
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
                        {navLink?.map((n) => (
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