import courses from "@/data/courses";
import JoinButton from "./JoinButton";

export default function FinalCta() {
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
                    {courses?.map((c) => (
                        <JoinButton key={c.id} href={c.razorpayUrl} label={`Join ${c.name}`} tone="yellow" block />
                    ))}
                </div>
            </div>
        </section>
    );
}