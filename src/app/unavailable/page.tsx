import { api } from "@/api/client";
import axios, { AxiosResponse } from "axios";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Unavailable | Bernardinus Hendra N's Personal Site",
  };
const UnavailablePage = async () => {
    let data:null| AxiosResponse = null;
    try {
        console.log(api.defaults.baseURL)
        data = await api.get(api.defaults.baseURL + "/projects");
    } 
    catch (e) {
        console.log(e);
    }
   
    if (data !== null) {
        if (data.status === 200) {
            console.log(data.status);
            redirect("/");
        }
    }

    return (
        <section className="flex flex-col justify-center content-center items-center flex-grow">
            <h1 className="display-1 pb-5 text-center">Apologies! We&apos;re unavailable right now.😔🙏🏻</h1>
            <h3 className="text-center">Please check back in a moment.</h3>
        </section>
    );    
}

export default UnavailablePage;