
export default function Hamburger({ open, onToggle }: { open: boolean; onToggle: () => void }) {
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