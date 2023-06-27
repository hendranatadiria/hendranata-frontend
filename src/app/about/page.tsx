import { redirect } from "next/navigation";
import PageTitle from "../components/PageTitle";
import axios from "axios";
import { api } from "@/api/client";
import TimelineCard from "../components/TimelineCard";
import { Metadata } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { data } from "autoprefixer";
import { DateTime } from "luxon";

export const metadata: Metadata = {
    title: "About | Bernardinus Hendra N's Personal Site",
  }

  export const revalidate = 0;

  const getPresentExpected = (edu:any) => {
    const currDate = DateTime.fromISO(edu.attributes?.ToDate)?.setLocale('en-US').toFormat('LLL yyyy')
        if(edu.attributes?.Expected === true) {
            return  currDate+ ' (Expected)';
        } else if(edu.attributes?.Present === true) {
            return 'Present';
        } else {
            return currDate;
        }
  }
const AboutPage = async () => {
    try {
        const {data:dataBody} = await api.get(api.defaults.baseURL + '/about-page');
        const {data:dataWork} = await api.get(api.defaults.baseURL + '/professional-experiences?sort[0]=FromDate:desc&populate=Skills');
        const {data:dataEdu} = await api.get(api.defaults.baseURL + '/educations?sort[0]=ToDate:desc');
        const {data:dataOrg} = await api.get(api.defaults.baseURL + '/organizations?sort[0]=ToDate:desc');

    return (
        <section>
            <PageTitle title="About 🙋🏻‍♂️" 
            subtitle="A brief history about me."/>
            <section className="md:max-w-[60%] fadeIn pb-10" id="intro">
                <h3 className="font-bold pb-5">{dataBody.data.attributes.IntroductionHeader}</h3>
                { dataBody.data.attributes.Introduction !== "" && dataBody.data.attributes.Introduction !== null && <p className="pb-10 text-justify">
                    <ReactMarkdown className=''>{dataBody.data.attributes.Introduction?.replaceAll('\n', '\n\n')}</ReactMarkdown>
                </p> }
            </section>
            <section className="md:max-w-[60%] fadeIn pb-10" id="work">
                <h3 className="font-bold pb-5">{dataBody.data.attributes.ProfessionalExperienceHeader}</h3>
                { dataBody.data.attributes.ProfessionalExperience !== "" && dataBody.data.attributes.ProfessionalExperience !== null && <p className="pb-10 text-justify">
                    <ReactMarkdown className=''>{dataBody.data.attributes.ProfessionalExperience?.replaceAll('\n', '\n\n')}</ReactMarkdown>
                </p> }
                <section>
                    {dataWork.data.map((work: any) => {
                        return <TimelineCard key={work.id} 
                            icon="💻"
                            heading={work.attributes?.CompanyName} 
                            subheading={work.attributes?.Position} 
                            time={`${new Date(work.attributes?.FromDate)?.getFullYear()} – ${work.attributes?.StillWorking === true ? 'Present' : new Date(work.attributes?.ToDate)?.getFullYear()}`}
                            description={work.attributes?.Jobdesc} pillSection={work.attributes?.Skills.data.map((el:any) => ({id: el.id, name: el.attributes?.Name}))}
                            pillTitle="Related Skills&nbsp;" />
                    })}
                </section>
            </section>
            <section className="md:max-w-[60%] fadeIn pb-10" id="education">
                <h3 className="font-bold pb-5">{dataBody.data.attributes.EducationHeader}</h3>
                { dataBody.data.attributes.Education !== "" && dataBody.data.attributes.Education !== null && <p className="pb-10 text-justify">
                    <ReactMarkdown className=''>{dataBody.data.attributes?.Education?.replaceAll('\n', '\n\n')}</ReactMarkdown>
                </p> }
                <section>
                    {dataEdu.data.map((edu: any) => {
                        return <TimelineCard key={edu.id} 
                            icon="🎓"
                            heading={edu.attributes?.Title} 
                            subheading={`${edu.attributes?.Degree} ${edu.attributes?.GPA !== null ? `(GPA ${edu.attributes?.GPA}` : ''}${edu.attributes?.GPABand !== null ? `/${edu.attributes?.GPABand})` : (edu.attributes?.GPA !== null ? ')' : '')}`}
                            time={`${DateTime.fromISO(edu.attributes?.FromDate)?.setLocale('en-US').toFormat('LLL yyyy')} – ${getPresentExpected(edu)}`}
                            description={edu.attributes?.Description}/>
                    })}
                </section>
            </section>
            <section className="md:max-w-[60%] fadeIn pb-10" id="orgs">
                <h3 className="font-bold pb-5">{dataBody.data.attributes.GivingBackHeader}</h3>
                { dataBody.data.attributes.GivingBack !== "" && dataBody.data.attributes.GivingBack !== null && <p className="pb-10 text-justify">
                    <ReactMarkdown className=''>{dataBody.data.attributes?.GivingBack?.replaceAll('\n', '\n\n')}</ReactMarkdown>
                </p> }
                {dataOrg.data.map((org: any) => {
                        return <TimelineCard key={org.id} 
                            icon="🤝"
                            heading={org.attributes?.Title} 
                            subheading={`${org.attributes?.Position}`}
                            time={`${DateTime.fromISO(org.attributes?.FromDate)?.setLocale('en-US').toFormat('LLL yyyy')} – ${getPresentExpected(org)}`}
                            description={org.attributes?.Description}/>
                    })}
            </section>
        </section>
    );
    } catch (error) {
        console.log(error);
        if(error instanceof axios.AxiosError) {
            console.error(JSON.stringify(error));
            console.error(error.message);
            redirect('/unavailable');
        }
    }
}

export default AboutPage;