import { getStrapiUrl } from '@/api/client'
import Image from 'next/image'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function PortfolioCard({project}: {project: any}) {
  return (
    <div className='flex flex-col justify-between fadeIn md:card-ui' key={project.id}>
        <div className='pb-10'>
            <div className='md:flex justify-between items-center'>
            <h3 className='font-bold pb-2'>{project.attributes.Title}</h3>
            <span className='text-gray-500'>{new Date(project.attributes.Year)?.getFullYear()}</span>
            </div>
            <div className="relative block my-3" style={{paddingTop: '80%'}}>
            <Image src={getStrapiUrl(project.attributes.Media.data[0].attributes?.url)} 
            alt={project.attributes.Media.data[0].attributes?.name} 
            fill
            className='rounded-lg'
            style={{objectFit: 'cover'}} />
            </div>
            <ReactMarkdown className='' components={{
                    ul: ({node, ...props}) => <ul className='list-disc pl-5' {...props} />,
                }}>{project.attributes.Description.replaceAll('\n', '\n\n')}</ReactMarkdown>
        </div>
        <div className='md:flex items-baseline'>
            <p className="font-bold flex-shrink-0">Related Stack:&nbsp;</p>
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
