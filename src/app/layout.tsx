// import './globals.css'
import '@/styles/globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import UnderConstructionGate from './components/UnderConstructionGate'
import { AxiosResponse } from 'axios'
import { api } from '@/api/client'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import Analytics from './components/Analytics'

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: "Bernardinus Hendra N's Personal Site",
  description: "Bernardinus Hendra N's Personal Site",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Analytics />
        </Suspense>
        <UnderConstructionGate>
        <Appbar />
        <main className='flex min-h-[calc(100vh-48px-48px-14px)] flex-col justify-between p-10 md:p-24'>
            {children}
        </main>
        <Footer />
        </UnderConstructionGate>
      </body>
    </html>
  )
}
