import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import FacebookPixel from '@/components/FacebookPixel'
import ConvertBox from '@/components/ConvertBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BLACK FRIDAY: HIFU Treatment Somerset £299 - Non-Surgical Facelift | Amethyst Aesthetics Beauty',
  description: 'BLACK FRIDAY SPECIAL! Non-surgical facelift with HIFU at Amethyst Aesthetics Beauty, South Petherton. Just £299 (normally £395 - Save £96!). Lift, tighten & rejuvenate without surgery. Award-finalist clinic with experienced practitioners. No downtime. Klarna available.',
  keywords: 'HIFU Somerset, Black Friday HIFU, non-surgical facelift Somerset, HIFU treatment, skin tightening Somerset, face lift without surgery, Amethyst Aesthetics Beauty, Marianne aesthetics, South Petherton aesthetics, Somerset aesthetics, HIFU UK, ultrasound facelift, jowl lifting Somerset, Yeovil aesthetics, HIFU deals, neck tightening',
  authors: [{ name: 'Amethyst Aesthetics Beauty' }],
  creator: 'Amethyst Aesthetics Beauty',
  publisher: 'Amethyst Aesthetics Beauty',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hifusomerset.co.uk'),
  alternates: {
    canonical: 'https://hifusomerset.co.uk',
  },
  openGraph: {
    title: 'BLACK FRIDAY: HIFU Treatment Somerset £299 - Save £96! | Amethyst Aesthetics Beauty',
    description: 'BLACK FRIDAY SPECIAL! Non-surgical facelift with HIFU. Just £299 (normally £395 - Save £96!). Lift, tighten & rejuvenate without surgery or downtime. Award-finalist Somerset clinic. Klarna available.',
    url: 'https://hifusomerset.co.uk',
    siteName: 'Amethyst Aesthetics Beauty - HIFU Somerset',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://hifusomerset.co.uk/images/stunning-results-1-session-hifu-bf1.png',
        width: 1200,
        height: 630,
        alt: 'BLACK FRIDAY - HIFU Non-Surgical Facelift Before and After Results - Amethyst Aesthetics Beauty Somerset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLACK FRIDAY: HIFU Treatment Somerset £299 | Amethyst Aesthetics Beauty',
    description: 'BLACK FRIDAY SPECIAL! Non-surgical facelift with HIFU. Just £299 (normally £395 - Save £96!). Lift & tighten without surgery. No downtime. Klarna available.',
    images: ['https://hifusomerset.co.uk/images/stunning-results-1-session-hifu-bf1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'GB-SOM',
    'geo.placename': 'South Petherton',
    'geo.position': '50.9581;-2.8169',
    'ICBM': '50.9581, -2.8169',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <FacebookPixel />
          <ConvertBox />
        </Suspense>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}