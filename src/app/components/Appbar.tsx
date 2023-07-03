'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'

const linkNav = [
  // {url: '/', name: 'Home'},
  {url: '/about', name: 'About'},
  {url: '/portfolio', name: 'Portfolio'},
]

export default function Appbar() {
  const currentRoute = usePathname();
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = React.useMemo(() => () => setMenuOpen(!isMenuOpen), [isMenuOpen]);
  return (
    <>
    <nav className={`sticky z-20 top-0 left-0 h-[48px] bg-white bg-opacity-40 w-full backdrop-blur-md flex flex-col justify-center`}>
        <section className='flex flex-row content-center justify-between px-10 md:px-24 '>
            <p className='font-bold flex flex-col justify-center'>
                <Link href="/" className='text-gray-500'>hendranata.com</Link></p>
            <div className='hidden md:flex gap-2'>
              {linkNav.map((el) => {
                return <Link href={el.url} key={el.name} className={`text-sm py-2 px-4 rounded-lg transition-all ${currentRoute === el.url ? 'nav-active' : ''}`}>{el.name}</Link>
              })}
            </div>
            <div className='flex flex-row md:hidden'>
              <button className='text-gray-500' onClick={toggleMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" clipRule="evenodd" />
                  </svg>
              </button>
          </div>
        </section>
    </nav>
    <nav className='sticky z-20 top-[48px] left-0 bg-white bg-opacity-40 w-full backdrop-blur-md'>
      <section className={`block hideText ${isMenuOpen ? 'show' : ''}`}>
            <div className='flex flex-row md:hidden'>
                <div className='flex flex-col flex-grow'>
                  {linkNav.map((el) => {
                    return <Link href={el.url} key={el.name} className={` px-10 text-sm py-3 ${currentRoute === el.url ? 'nav-active-mobile' : ''}`}>{el.name}</Link>
                  })}
                </div>
            </div>
        </section>
    </nav>
    </>
  )
}
