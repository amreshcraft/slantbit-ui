
import educators from "@/data/educators";
import JoinButton from "./JoinButton";

export function Hero() {
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
                    <p className="mb-4 text-base font-medium text-[var(--yellow)]">
                        Learn from experts. Grow at your own pace.
                    </p>

                    <h1 className="font-[family-name:var(--font-display)] text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                        Learn anything.
                        <br />
                        Build everything.
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--hero-muted)] sm:text-lg">
                        From Mathematics and Physics to AI and Programming,
                        explore new skills through live cohorts, personal
                        mentorship, hands-on projects, and meaningful
                        interactions with expert educators.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <JoinButton
                            href="#courses"
                            label="Explore learning cohorts"
                            tone="yellow"
                            block
                        />

                        <a
                            href="#about"
                            className="inline-flex w-full items-center justify-center rounded-[var(--radius-sm)] border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                        >
                            {educators[0]?.name
                                ? `Meet ${educators[0].name}`
                                : "Meet our educators"}
                        </a>
                    </div>

                    {/* Learning Categories */}
                    <div className="mt-10 flex flex-wrap gap-2">
                        {[
                            "Mathematics",
                            "Physics",
                            "Artificial Intelligence",
                            "Programming",
                            "And more",
                        ].map((subject) => (
                            <span
                                key={subject}
                                className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/85"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Learning Card */}
                <div
                    className="hidden items-center justify-center md:flex"
                    aria-hidden="true"
                >
                    <div
                        className="w-full max-w-sm rounded-2xl bg-[var(--surface)] p-6 text-[var(--text)] shadow-2xl"
                        style={{ transform: "rotate(-3deg)" }}
                    >
                        <p className="mb-5 text-sm font-semibold text-[var(--subtle)]">
                            YOUR LEARNING JOURNEY
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: "01",
                                    title: "Explore something new",
                                    desc: "Discover skills that interest you.",
                                },
                                {
                                    icon: "02",
                                    title: "Learn with experts",
                                    desc: "Join live sessions and ask questions.",
                                },
                                {
                                    icon: "03",
                                    title: "Practice and create",
                                    desc: "Turn knowledge into real skills.",
                                },
                                {
                                    icon: "04",
                                    title: "Grow with confidence",
                                    desc: "Make progress, one step at a time.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.icon}
                                    className="flex items-start gap-4"
                                >
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--card1-bg)] text-sm font-bold text-white">
                                        {item.icon}
                                    </span>

                                    <div>
                                        <h3 className="text-sm font-bold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-xs text-[var(--subtle)]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-[var(--radius-sm)] bg-[var(--ink)] px-4 py-3 text-center text-sm font-semibold text-[var(--yellow)]">
                            Your curiosity. Your journey.
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
