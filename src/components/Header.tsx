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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-deep-space/80 backdrop-blur-md border-b border-glass-stroke' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-neon-cyan"></div>
          </div>
          <span className="text-lg font-bold">Project<span className="text-neon-cyan">52</span></span>
        </motion.div>
        
        {/* Add hamburger menu for mobile */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-space-dark"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <motion.div
          className="hidden md:flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <nav className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-neon-cyan transition-colors">Features</a>
            <a href="#" className="text-white hover:text-neon-cyan transition-colors">Pricing</a>
            <a href="#" className="text-white hover:text-neon-cyan transition-colors">FAQ</a>
          </nav>
        </motion.div>
        
        {/* Mobile menu - overlay */}
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-deep-space bg-opacity-95 backdrop-blur-md flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-glass-stroke">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-neon-cyan"></div>
                </div>
                <span className="text-lg font-bold">Project<span className="text-neon-cyan">52</span></span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-space-dark"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <div className="container mx-auto px-6">
                <nav className="flex flex-col space-y-6 text-center">
                  <a href="#" className="text-2xl text-white hover:text-neon-cyan transition-colors py-3">Features</a>
                  <a href="#" className="text-2xl text-white hover:text-neon-cyan transition-colors py-3">Pricing</a>
                  <a href="#" className="text-2xl text-white hover:text-neon-cyan transition-colors py-3">FAQ</a>
                </nav>
              </div>
            </div>
            
            <div className="container mx-auto px-6 py-8 border-t border-glass-stroke">
              {/* Get Started button removed */}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header 