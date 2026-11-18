import educators from "@/data/educators";
import slantbitInfo from "@/data/slantbitInfo";



export default function Footer() {
    const educator = educators[0]
    return (
        <footer className="on-dark bg-[var(--footer-bg)] py-10 text-[var(--footer-text)]">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm sm:flex-row sm:px-5 sm:text-left">
                <p>
                    © {2026} {slantbitInfo?.brand}. Taught by {educator.name}.
                </p>
                <a href={`mailto:${slantbitInfo.contactEmail}`} className="underline underline-offset-4 hover:text-white">
                    {slantbitInfo.contactEmail}
                </a>
            </div>
        </footer>
    );
}
