export type Theme = "light" | "dark";


export type Course = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    outcomes: string[];
    duration: string; 
    format: string;
    price: string; 
    razorpayUrl: string; 
    card: "card1" | "card2";
};
