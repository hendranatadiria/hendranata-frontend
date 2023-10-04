import Link from "next/link";
import LandingCard from "./components/LandingCard";
import TypingText from "./components/TypingText";
import axios from "axios";
import { redirect } from "next/navigation";
import { api } from "@/api/client";

export const revalidate = 0;

const Index = async () => {
    try {
        const {data:headerAbout} = await api.get(api.defaults.baseURL + '/about-header');
        const {data:headerPortfolio} = await api.get(api.defaults.baseURL + '/portfolio-header');
        const {data:typewriter} = await api.get(api.defaults.baseURL + '/typewriter');
    return (
        <section>
            <div className="pb-[10rem] flex-grow flex flex-col justify-center">
                <h1 className="display-1">Bernardinus Hendra N,<br />
                <TypingText texts={typewriter.data.attributes.text} />
                <br /><br />
                Nice to meet you! 👋🏻</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <LandingCard 
                    title={headerAbout.data.attributes.Header}
                    subtitle={headerAbout.data.attributes.Subtitle}
                    link="/about"
                    linkText={headerAbout.data.attributes.LinkText}
                />
                <LandingCard 
                    title={headerPortfolio.data.attributes.Header}
                    subtitle={headerPortfolio.data.attributes.Subtitle}
                    link="/portfolio"
                    linkText={headerPortfolio.data.attributes.LinkText}
                />
            </div>
        </section>
    );
    } catch (e) {
        console.error(e);
        if (e instanceof axios.AxiosError) {
            console.error(JSON.stringify(e));
            console.error(e.message);
            redirect('/unavailable');
        }
    }
}

export default Index;