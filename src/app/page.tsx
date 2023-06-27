import Link from "next/link";
import LandingCard from "./components/LandingCard";

export const revalidate = 0;

const Index = () => {
    return (
        <section>
            <div className="pb-[10rem] flex-grow flex flex-col justify-center">
                <h1 className="display-1">Bernardinus Hendra N,<br />
                a <span className="hero-color">Full-Stack Software Engineer.</span>
                <br /><br />
                Nice to meet you! 👋🏻</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <LandingCard 
                    title="About Me 🧑🏻‍💻"
                    subtitle="I am a full-stack software engineer with 2+ years in a dynamic startup industry."
                    link="/about"
                    linkText="See my experience and profile"
                />
                <LandingCard 
                    title="Projects & Past Work 🧑🏻‍🏭"
                    subtitle="A glimpse of what I’ve done in the past."
                    link="/portfolio"
                    linkText="See my portfolio"
                />
            </div>
        </section>
    );
}

export default Index;