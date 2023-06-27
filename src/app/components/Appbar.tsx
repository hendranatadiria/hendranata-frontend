import Link from 'next/link'
import React from 'react'

export default function Appbar() {
  return (
    <nav className='sticky z-20 top-0 left-0 h-[48px] bg-white bg-opacity-40 w-full backdrop-blur-md flex flex-col justify-center'>
        <section className='flex flex-row content-center justify-between px-10 md:px-24 '>
            <p className='font-bold'>
                <Link href="/" className='text-gray-500'>hendranata.com</Link></p>
            <div>
                <Link href="/portfolio">Portfolio</Link>
            </div>
        </section>
    </nav>
  )
}
