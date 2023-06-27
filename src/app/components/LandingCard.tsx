import Link from 'next/link'
import React from 'react'

export default function LandingCard({
    title,
    subtitle,
    link,
    linkText,
}: {title:string, subtitle:string, link:string, linkText:string}) {
  return (
    <div className="flex flex-col justify-between fadeIn md:card-ui">
        <div className="pb-10">
            <h3 className="display-2">{title}</h3>
            <p className="md:text-justify">{subtitle}</p>
        </div>
        <div>
            <Link href={link} className="group">{linkText}&nbsp;<span className="transition-transform group-hover:translate-x-5 motion-reduce:transform-none">»</span></Link>
        </div>
    </div>
  )
}
