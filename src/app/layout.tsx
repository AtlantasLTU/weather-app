"use client";
import './globals.css'
import {Inter} from 'next/font/google';

const font = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Weather app',
  description: 'Weather-app try',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
