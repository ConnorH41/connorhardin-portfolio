import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://connorhardin-portfolio.vercel.app'),
  title: 'Connor Hardin - Portfolio',
  description: 'Professional portfolio showcasing my work, skills, and experience in software development and research.',
  keywords: ['Connor Hardin', 'Portfolio', 'Software Developer', 'Research', 'Web Development'],
  authors: [{ name: 'Connor Hardin' }],
  creator: 'Connor Hardin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://connorhardin-portfolio.vercel.app',
    title: 'Connor Hardin - Portfolio',
    description: 'Professional portfolio showcasing my work, skills, and experience in software development and research.',
    siteName: 'Connor Hardin Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connor Hardin - Portfolio',
    description: 'Professional portfolio showcasing my work, skills, and experience in software development and research.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
