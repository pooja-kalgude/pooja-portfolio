import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import { MotionProvider } from '@/components/motion-provider'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const title = `${siteConfig.name} — ${siteConfig.role}`

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description: siteConfig.tagline,
  generator: 'v0.app',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'NestJS', 'MySQL', 'Portfolio'],
  openGraph: {
    title,
    description: siteConfig.tagline,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: siteConfig.tagline,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

/** @type {import('next').Viewport} */
export const viewport = {
  colorScheme: 'dark',
  themeColor: '#16181c',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
