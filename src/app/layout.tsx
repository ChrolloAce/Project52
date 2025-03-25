'use client'

import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import MouseFollower from '@/components/MouseFollower'
import FloatingParticles from '@/components/FloatingParticles'
import RotatingElement from '@/components/RotatingElement'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} ${spaceGrotesk.variable} min-h-screen overflow-x-hidden`}>
        {/* Mouse following effect */}
        <MouseFollower />
        
        {/* Floating particles and animated background */}
        <FloatingParticles />
        
        {/* Rotating 3D element */}
        <RotatingElement />
        
        {/* Base Background */}
        <div className="fixed inset-0 bg-deep-space -z-50"></div>
        
        {/* Enhanced space effect */}
        <div className="fixed inset-0 bg-stars bg-repeat opacity-70 -z-40"></div>
        <div className="fixed inset-0 -z-30">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-blue/5 rounded-full blur-[80px]"></div>
        </div>
        
        {/* Additional glow effects for futuristic look */}
        <div className="fixed top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-neon-cyan/3 to-transparent -z-20"></div>
        <div className="fixed bottom-0 left-0 w-1/3 h-screen bg-gradient-to-t from-neon-purple/3 to-transparent -z-20"></div>
        
        {/* Dynamic Grid Lines */}
        <div className="fixed inset-0 bg-grid-lines opacity-30 -z-10"></div>
        
        {/* Content */}
        <div className="relative pt-24 md:pt-28">
          {children}
        </div>
      </body>
    </html>
  )
} 