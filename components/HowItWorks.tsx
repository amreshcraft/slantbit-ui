import steps from "@/data/steps";

export default function HowItWorks() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:py-20">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
                How a cohort works
            </h2>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {steps?.map((s, i) => (
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