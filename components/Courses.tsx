import courses from "@/data/courses";
import CourseCard from "./CourseCard";


export function Courses() {
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
                {courses?.map((c) => (
                    <CourseCard key={c.id} course={c} />
                ))}
            </div>
        </section>
    );
}