import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project52 | Building 52 Startups in 52 Weeks Challenge',
  description: 'Follow the revolutionary challenge of launching 52 startups in 52 weeks, documenting every step from ideation to launch. See how far innovation can go in one year.',
  applicationName: 'Project52',
  authors: [{ name: 'Project52', url: 'https://github.com/ChrolloAce/Project52' }],
  keywords: ['Project52', 'startups', '52 weeks', 'challenge', 'innovation', 'entrepreneurship', 'building in public'],
  creator: 'Project52',
  publisher: 'Project52',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://project52.co',
    title: 'Project52 | 52 Startups in 52 Weeks',
    description: 'Building one startup every week for a full year. Follow the journey of innovation and rapid business experimentation.',
    siteName: 'Project52',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Project52 - 52 Startups in 52 Weeks'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project52 | Building 52 Startups in 52 Weeks',
    description: 'Follow the journey of launching 52 startups in 52 weeks. Building in public, one week at a time.',
    creator: '@Project52',
    images: ['/twitter-image.png']
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ]
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
  themeColor: '#070324',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
} 