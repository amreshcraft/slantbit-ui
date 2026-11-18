
import { Course } from "@/types/types";

export default [

    {
        id: "lifehack",
        name: "Digital Life Skills Cohort",
        tagline: "Work smarter, save time, and make technology work for you.",

        description:
            "An interactive cohort focused on practical digital skills for everyday life and work. Discover useful digital tools, improve your productivity, explore AI-powered solutions, automate repetitive tasks, and develop smarter online habits.",

        outcomes: [
            "Master essential computer, smartphone, and internet skills",
            "Organise files, documents, notes, and daily tasks efficiently",
            "Use AI tools to improve productivity and simplify everyday work",
            "Discover useful digital tools, shortcuts, and automation techniques",
            "Understand online privacy, security, and safe digital practices",
        ],

        duration: "1.5 Month",
        format: "Live Online Sessions + Practical Activities + Resources",
        price: "₹1,760",
        razorpayUrl: "https://rzp.io/rzp/EcaYRe7",
        card: "card2",
    },

        {
        id: "python",
        name: "Python Development Cohort",
        tagline: "Go from writing your first line of Python to building real-world projects.",

        description:
            "A hands-on, mentor-guided learning experience designed to help you master Python programming. Learn core concepts, solve practical problems, work with APIs, and build projects through interactive live sessions and guided assignments.",

        outcomes: [
            "Master Python fundamentals, including variables, loops, functions, and data structures",
            "Write clean, structured, and reusable Python code",
            "Work with files, APIs, libraries, and real-world data",
            "Develop problem-solving and debugging skills",
            "Build practical Python projects for your portfolio",
        ],

        duration: "2.5 Months",
        format: "Live Online Sessions + Practical Assignments + Projects",
        price: "₹2,999",
        razorpayUrl: "https://razorpay.me/@slantbit",
        card: "card1",
    },

] satisfies Course[];
