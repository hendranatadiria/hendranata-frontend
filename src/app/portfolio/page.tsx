import { GetServerSideProps, InferGetServerSidePropsType, Metadata } from 'next';
import axios from "axios"
import { api, getStrapiUrl } from '@/api/client';
import Image from 'next/image';
import PortfolioCard from '../components/PortfolioCard';
import PageTitle from '../components/PageTitle';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: "Portfolio | Bernardinus Hendra N's Personal Site",
  }
  
const PortfolioPage = async () => {
    try {
        const { data } = await api.get(api.defaults.baseURL + '/projects?sort[0]=Year&populate=Media,skills');
    return (
        <section>
            <PageTitle title='Portfolio 🧑🏻‍🏭' subtitle="A glimpse of what I've been up to." />
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                {data.data.map((project: any) => <PortfolioCard project={project} key={project.id} />)}
                </div>
        </section>
    );

    } catch (e) {
        if (e instanceof axios.AxiosError) {
            console.error(JSON.stringify(e));
            console.error(e.message);
            redirect('/unavailable');
        }
    }
}

export default PortfolioPage;