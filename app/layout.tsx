import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PSP Transfer - Fiat & Crypto Payments',
  description: 'Seamless payment transfers for fiat and cryptocurrency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
