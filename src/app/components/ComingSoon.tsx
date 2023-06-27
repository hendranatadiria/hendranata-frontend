import { api } from "@/api/client";
import axios, { AxiosResponse } from "axios";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Coming Soon | Bernardinus Hendra N's Personal Site",
  };
const ComingSoonPage = async () => {
    return (
        <main className='flex min-h-screen flex-col justify-between p-10 md:p-24'>

        <section className="flex flex-col justify-center md:content-center md:items-center flex-grow">
            <h1 className="display-1 pb-5 md:text-center">Something great is brewing...🍵</h1>
            <h3 className="md:text-center">We&apos;ll see you very-very soon.</h3>
        </section>
        </main>
    );    
}

export default ComingSoonPage;