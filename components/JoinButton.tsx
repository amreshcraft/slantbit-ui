




export default function JoinButton({
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
