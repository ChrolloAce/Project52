import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'Project 52 | 52 Startups in 52 Weeks',
  description: 'Building and launching one startup every week for a year',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${spaceGrotesk.variable} min-h-screen overflow-x-hidden`}>
        {/* Base Background */}
        <div className="fixed inset-0 bg-space-gradient -z-50"></div>
        
        {/* Enhanced Gradients */}
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-radial from-neon-purple/10 via-transparent to-transparent opacity-70 -z-40"></div>
        <div className="fixed bottom-0 right-0 w-full h-screen bg-gradient-radial from-neon-cyan/10 via-transparent to-transparent opacity-70 -z-40"></div>
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full h-[60vh] bg-gradient-conic from-neon-pink/5 via-neon-blue/5 to-neon-cyan/5 opacity-60 blur-3xl -z-40"></div>
        
        {/* Stars background */}
        <div className="fixed inset-0 bg-[url('/stars.svg')] bg-repeat opacity-90 -z-40"></div>
        
        {/* Noise texture */}
        <div className="fixed inset-0 bg-noise-pattern opacity-[0.15] mix-blend-soft-light -z-30"></div>
        
        {/* Grid pattern */}
        <div className="fixed inset-0 bg-grid-lines bg-center opacity-[0.07] -z-30"></div>
        
        {/* Dot pattern */}
        <div className="fixed inset-0 bg-dotted-grid opacity-[0.04] -z-30"></div>
        
        {/* Moving gradient orbs */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] bg-gradient-radial from-neon-blue/10 via-neon-purple/5 to-transparent -z-30 animate-float"></div>
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] bg-gradient-radial from-neon-cyan/10 via-neon-pink/5 to-transparent -z-30 animate-float" style={{ animationDelay: '-2s' }}></div>
        
        {/* Radial gradient glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-2xl h-[50vh] rounded-full blur-[100px] bg-gradient-radial from-neon-blue/10 via-neon-purple/5 to-transparent -z-30"></div>
        
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
} 