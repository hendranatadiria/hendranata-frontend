'use client';

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useInView } from 'react-intersection-observer';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [ref, inView] = useInView({ threshold: 0.5 })

    useEffect(() => {
        const email = process.env.NEXT_PUBLIC_EMAIL;
        if (email) setEmail(email);
    }, [])

  return (
    <footer ref={ref} className='w-full bg-gray-300 bg-opacity-30 min-h-[48px] flex flex-col justify-center'>
        <section className='px-10 md:px-24'>
            <div className='md:flex flex-col md:flex-row justify-between items-center my-4'>
                <p className={`text-[16px] leading-[16px] ${inView ? 'fadeIn': ''} pb-2 md:pb-0`}>{email !== '' && <>Contact me at: <a className="text-[16px]" href={"mailto:"+email}>{email}</a></>}</p>
                <div className={`flex gap-7 md:gap-5 ${inView ? 'fadeIn': ''}`}>
                    <a href="https://linkedin.com/in/hendranatadiria" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://instagram.com/hendra_nata" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://twitter.com/bhndrnt" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
            </div>
        </section>
    </footer>
  )
}
