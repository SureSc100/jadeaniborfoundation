import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Jade Anibor Foundation | Personal Development & Business Consulting',
  description:
    'Discover transformative business consulting, educational resources, and solutions for personal development with Jade Anibor Foundation.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' }, // put public/icon.png (512x512 or 256x256)
    ],
    apple: '/apple-icon.png', // put public/apple-icon.png (180x180)
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
