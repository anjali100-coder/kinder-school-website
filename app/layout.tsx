import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import FloatingContact from '@/components/floating-contact';
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Cecil Convent School Junior Playway | Ambala Cantt',
  description: 'Building a strong foundation for your child. Cecil Convent School Junior Playway offers quality early education in Ambala Cantt with nurturing environment and experienced teachers.',
  keywords: ['kindergarten', 'playway', 'preschool', 'Ambala Cantt', 'Cecil Convent', 'early education'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <FloatingContact/>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
