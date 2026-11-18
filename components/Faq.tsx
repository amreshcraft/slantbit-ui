import FAQ from "@/data/FAQ";

export default function Faq() {
    return (
        <section id="faq" className="mx-auto max-w-3xl px-4 pb-16 sm:px-5 md:pb-20">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
                Questions
            </h2>
            <div className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {FAQ?.map((f) => (
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