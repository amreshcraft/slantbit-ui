import educators from "@/data/educators";
import Image from "next/image";




export default function About() {
    const  educator  = educators[0]
    return (
        <section id="about" className="bg-[var(--surface)] py-16 md:py-20">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-12">
                <div className="flex items-center justify-center">
                    <Image
                        alt="Amresh"
                        src="/amresh.jpeg"
                        width={320}
                        height={320}
                        className="aspect-square w-48 rounded-3xl object-cover md:w-full md:max-w-xs"
                        style={{ transform: "rotate(3deg)" }}
                    />
                </div>
                <div>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
                        Hi, I am {educator.name}
                    </h2>
                    <p className="mt-2 text-base font-medium text-[var(--subtle)]">{educator.role}</p>
                    <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                        {educator.bio.map((p) => (
                            <p key={p}>{p}</p>
                        ))}
                    </div>
                    <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                        {educator.facts.map((f) => (
                            <div key={f.label} className="rounded-[var(--radius-sm)] bg-[var(--surface-2)] p-4">
                                <dd className="font-[family-name:var(--font-display)] text-xl font-extrabold text-[var(--text)]">
                                    {f.value}
                                </dd>
                                <dt className="mt-1 text-sm text-[var(--subtle)]">{f.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
