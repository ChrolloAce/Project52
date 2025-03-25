'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { theme } from '@/styles/theme'
import Link from 'next/link'

const Header = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Set end date to the end of the year
    const currentYear = new Date().getFullYear()
    const endDate = new Date(currentYear, 11, 31, 23, 59, 59)

    const calculateTimeRemaining = () => {
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()
      
      if (difference < 0) {
        // Timer expired
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)
      
      setTimeRemaining({ days, hours, minutes, seconds })
    }
    
    calculateTimeRemaining()
    const timer = setInterval(calculateTimeRemaining, 1000)
    
    // Handle scroll events
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`sticky top-0 w-full py-4 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-glass-gray backdrop-blur-md border-b border-glass-stroke' : ''
    }`}>
      <div className={theme.layout.container}>
        <nav className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 mr-3 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-70 animate-pulse-slow"></div>
              <div className="absolute inset-0.5 rounded-full bg-space-blue flex items-center justify-center">
                <span className="text-white font-bold">52</span>
              </div>
            </div>
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold">
                <span className="text-gradient">Project</span>
                <span className="text-text-primary"> 52</span>
              </span>
              <span className="text-xs text-text-secondary">52 weeks, 52 startups</span>
            </Link>
          </motion.div>
          
          <motion.div
            className="hidden md:flex items-center space-x-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { name: 'Home', path: '/' },
              { name: 'Projects', path: '/projects' },
              { name: 'Journey', path: '/journey' },
              { name: 'About', path: '/about' }
            ].map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                className="text-text-secondary hover:text-neon-cyan transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
          
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hidden sm:flex items-center mr-4 px-4 py-2 rounded-full bg-glass-gray backdrop-blur-sm border border-glass-stroke">
              <span className="text-neon-cyan text-xs mr-2">Challenge Ends In</span>
              <div className="flex space-x-1 text-white text-xs font-medium">
                <div className="flex items-center">
                  <span>{timeRemaining.days}</span>
                  <span className="text-text-secondary mx-1">:</span>
                </div>
                <div className="flex items-center">
                  <span>{String(timeRemaining.hours).padStart(2, '0')}</span>
                  <span className="text-text-secondary mx-1">:</span>
                </div>
                <div className="flex items-center">
                  <span>{String(timeRemaining.minutes).padStart(2, '0')}</span>
                  <span className="text-text-secondary mx-1">:</span>
                </div>
                <span>{String(timeRemaining.seconds).padStart(2, '0')}</span>
              </div>
            </div>
            <motion.button
              className={theme.buttons.primary}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header 