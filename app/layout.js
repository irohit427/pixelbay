import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/providers/themeProvider'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PixelBay',
  description: 'Download Wallpapers for free',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, 'dark:bg-black')}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="light" 
            enableSystem
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
