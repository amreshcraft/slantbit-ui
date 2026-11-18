
type EducatorType = {
    name :string;
    role: string;
    bio : string[],
    facts : {label:string;value:string}[]
}

export default [{
        name: "Amresh",
        role: "Educator & developer",
        bio: [
            "I teach people to build real things instead of memorising syntax. Every cohort is small on purpose, so you get feedback on your own work, not a recorded video.",
            "My focus is quality over volume: fewer topics, explained properly, with projects you can show to someone.",
        ],
        facts: [
            { label: "Students taught", value: "50+" },
            { label: "Format", value: "Live cohorts" },
            { label: "Class size", value: "Small batches" },
        ],
    }] satisfies EducatorType[]