import Head from 'next/head'
import React from 'react'
import { PT_Serif } from 'next/font/google'

const font = PT_Serif({ subsets: ['latin'], weight: "400", style: "italic"})

export default function PageTitle({title, subtitle}:{title:string, subtitle?:string}) {

  return (
    <>
    <Head>
        <title>{title} | Bernardinus Hendra N</title>
    </Head>
    <h2 className='font-bold pb-2 z-10'>{title}</h2>
    <p className={`text-gray-500 text-[18px] italic z-10 pb-24 ${font.className}`}>{subtitle}</p>
    </>
  )
}
