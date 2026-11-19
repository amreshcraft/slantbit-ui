import educators from "@/data/educators";
import JoinButton from "./JoinButton";

export function Hero() {
    const leadEducator = educators[0]?.name || "your mentor";

    return (
        <section
            id="top"
            className="on-dark relative overflow-hidden bg-[var(--hero-bg)] text-[var(--hero-text)]"
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 94%, 0 100%)",
            }}
        >
            <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-12 sm:px-5 md:grid-cols-[1.3fr_1fr] md:pb-36 md:pt-24">

                {/* Hero Content */}
                <div>
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-sm font-medium text-[var(--yellow)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--yellow)]" />
                        Live Small-Batch Cohorts • Admissions Open
                    </p>

                    <h1 className="font-[family-name:var(--font-display)] text-[2.5rem] font-extrabold leading-[1.06] tracking-tight sm:text-6xl md:text-7xl">
                        Learn live.
                        <br />
                        Build real things.
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--hero-muted)] sm:text-lg">
                        Skip passive recorded courses. Master Python development,
                        practical AI tools, and everyday digital workflows in small,
                        mentor-led cohorts with weekly hands-on projects and direct feedback.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <JoinButton
                            href="#courses"
                            label="Explore open cohorts"
                            tone="yellow"
                            block
                        />

                        <a
                            href="#about"
                            className="inline-flex w-full items-center justify-center rounded-[var(--radius-sm)] border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                        >
                            {educators[0]?.name
                                ? `Meet ${educators[0].name}`
                                : "Meet your mentor"}
                        </a>
                    </div>

                    {/* Focus Areas matching current live cohorts */}
                    <div className="mt-10 flex flex-wrap gap-2">
                        {[
                            "Python Development",
                            "AI",
                            "Digital Productivity",
                            "Hands-on Projects",
                            "Small Batches",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/85"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Cohort Snapshot Card */}
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-sm rounded-2xl bg-[var(--surface)] p-6 text-[var(--text)] shadow-2xl md:-rotate-2">
                        <div className="mb-5 flex items-center justify-between">
                            <p className="text-xs font-bold uppercase tracking-wider text-[var(--subtle)]">
                                HOW EVERY COHORT WORKS
                            </p>
                            <span className="rounded-md bg-[var(--card1-bg)]/10 px-2.5 py-0.5 text-xs font-bold text-[var(--card1-bg)]">
                                Live + Practical
                            </span>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    step: "01",
                                    title: "Focused live sessions",
                                    desc: "Clear explanations with real-time Q&A—no pre-recorded fluff.",
                                },
                                {
                                    step: "02",
                                    title: "Weekly practical tasks",
                                    desc: "Build working scripts, workflows, and mini-projects every week.",
                                },
                                {
                                    step: "03",
                                    title: "Personal work review",
                                    desc: `Get direct feedback from ${leadEducator} on what you build.`,
                                },
                                {
                                    step: "04",
                                    title: "Portfolio-ready proof",
                                    desc: "Finish with real skills and projects you can actually use.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.step}
                                    className="flex items-start gap-3.5"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--card1-bg)] text-xs font-bold text-white">
                                        {item.step}
                                    </span>

                                    <div>
                                        <h3 className="text-sm font-bold leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="mt-0.5 text-xs leading-relaxed text-[var(--subtle)]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-[var(--radius-sm)] bg-[var(--ink)] px-4 py-3 text-center text-xs font-semibold text-[var(--yellow)]">
                            Limited seats per batch • Direct mentor feedback
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}