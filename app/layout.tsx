import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Fresa Network - Servidor de Minecraft',
  description: 'Bienvenido a Fresa Network, el mejor servidor de Minecraft. Java y Bedrock. Conecta en fresa.top',
  keywords: ['minecraft', 'servidor', 'fresa network', 'bedrock', 'java', 'pvp', 'survival'],
  openGraph: {
    title: 'Fresa Network - Servidor de Minecraft',
    description: 'Bienvenido a Fresa Network, el mejor servidor de Minecraft',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export const viewport = {
  themeColor: '#ef4444',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
