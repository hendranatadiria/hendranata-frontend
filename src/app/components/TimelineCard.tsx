import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function TimelineCard({heading, subheading, time, description, pillSection, pillTitle, icon, hideLine=false}:
    {heading:string, subheading:string, time:string, description:string, pillSection?:{name:string, id:string}[], pillTitle?:string, icon?:string, hideLine?:boolean}) {
  return (
    <div className="flex flex-row fadeIn gap-2 md:gap-5">
        <div className='flex flex-col items-center'>
            <div className="h-[55px] w-[50px] rounded-full bg-gray-300 bg-opacity-40 flex items-center justify-center text-2xl"><span className="absolute">{icon}</span></div>
            <div className='h-full w-0.5 bg-gray-300 bg-opacity-50'></div>
        </div>
        <div className="pb-10 flex-grow">
            <div className="md:flex justify-between items-center">
                <h4 className="font-bold">{heading}</h4>
                <span className="text-gray-500">{time}</span>
            </div>
            <p className="pb-5 text-[16px] italic">{subheading}</p>
            <ReactMarkdown className='pb-5 r-markdown'
                components={{
                    ul: ({node, ...props}) => <ul className='list-disc pl-5' {...props} />,
                }}
            >{description.replaceAll('\n', '\n\n')}</ReactMarkdown>
            <div className='md:flex items-baseline'>
                {pillTitle !== undefined && <p className='mr-2 flex-shrink-0'>{pillTitle}:</p> }
            <div className="flex flex-wrap content-center">
                {pillSection?.map((pill: any) => {
                    return (
                        <span className="pill-skill" key={pill.id}>{pill.name}</span>
                    )
                })}
            </div>
            </div>
        </div>
    </div>
)
}
