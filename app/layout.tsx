import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '量子维京 | Quantum Viking - Digital Architect of Tomorrow',
  description: '量子维京致力于探索AI前沿，解析技术复杂性，记录人类奇点之旅。专注于人工智能、量子计算和未来科技的前沿研究。',
  keywords: '量子维京, Quantum Viking, AI, 人工智能, 量子计算, 未来科技, GPT, ChatGPT, 技术解析',
  authors: [{ name: 'Quantum Viking' }],
  creator: 'Quantum Viking',
  publisher: 'Quantum Viking',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 