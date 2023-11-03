import Navbar from '@/components/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AVAST',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100 `}>
      <Navbar />
        <div className='container mx-auto p-4'>
          {children}
        </div>
      </body>
    </html>
  )
}