'use client'
import { getStrapiUrl } from '@/api/client'
import Image from 'next/image'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function PortfolioCard({project, thumbUrl}: {project: any, thumbUrl?: string}) {
    const [isReadMore, setReadMore] = React.useState(false);
    const description = React.useMemo(() => (project.attributes.Description as string).trim().split('\n'), [project.attributes.Description]);
    const toggleShow = React.useMemo(() => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setReadMore(!isReadMore);
    }, [isReadMore]);
  return (
    <div className='flex flex-col justify-between fadeIn md:card-ui' key={project.id}>
        <div className='pb-10'>
            <div className='md:flex justify-between items-center'>
            <h3 className='font-bold pb-2'>{project.attributes.Title}</h3>
            <span className='text-gray-500'>{new Date(project.attributes.Year)?.getFullYear()}</span>
            </div>
            <div className="relative block my-3" style={{paddingTop: '80%'}}>
            {thumbUrl !== undefined && <Image src={thumbUrl} 
            alt={project.attributes.Media.data[0].attributes?.name} 
            fill
            className='rounded-lg'
            style={{objectFit: 'cover'}} /> }
            </div>
            {description.map((paragraph: string, index: number) => {
                return (
                    <>
                    <ReactMarkdown className={`${(index > 0) ? 'hideText' : ''} ${isReadMore ? 'show' : ''}`} components={{
                        ul: ({node, ...props}) => <ul className='list-disc pl-5' {...props} />,
                    }}>{paragraph}</ReactMarkdown> 
                    {index == description.length-1 && !isReadMore && description.length > 1 && <a onClick={toggleShow} className='readMore '>Read more...</a> }
                    {index == description.length-1 && isReadMore && <a onClick={toggleShow} className='readMore'> &nbsp;See less</a> }
                    </>
                )
            }
            )}
        </div>
        <div className='md:flex items-baseline'>
            <p className="font-bold flex-shrink-0 text-[0.9rem]">Related Stack:&nbsp;</p>
            <div className='flex flex-wrap content-center'>
                {project.attributes.skills?.data.map((skill: any) => {
                    return (
                        <span className='pill-skill' key={skill.id}>{skill.attributes?.Name}</span>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
