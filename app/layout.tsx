import Banner from '@/components/Banner'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
})

export const metadata: Metadata = {
  title: 'SHOP.CO',
  description: 'FIND CLOTHES THAT MATCHES YOUR STYLE',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={satoshi.className + ' flex flex-col h-[100vh]'}>
        <header className="fixed top-0 left-0 right-0">
          <Banner />
          <Navbar />
        </header>
        <main className="flex-auto mt-[111.15px] sm:mt-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
