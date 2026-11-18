import { Course } from "@/types/types";
import JoinButton from "./JoinButton";






export default function CourseCard({ course }: { course: Course }) {
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
