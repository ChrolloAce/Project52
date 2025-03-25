'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isActive, setIsActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return
    
    // Check if it's a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Add a slight delay before showing the effect to ensure smooth initial render
    const timer = setTimeout(() => {
      setIsActive(true)
    }, 500)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Don't render on mobile or if not active
  if (!isActive || isMobile) return null

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="fixed pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }}
      >
        <div className="w-[200px] h-[200px] rounded-full bg-neon-cyan/5 filter blur-[50px]" />
      </motion.div>
      
      {/* Secondary smaller glow */}
      <motion.div
        className="fixed pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.3
        }}
      >
        <div className="w-[50px] h-[50px] rounded-full bg-neon-cyan/20 filter blur-[20px]" />
      </motion.div>
      
      {/* Core bright dot */}
      <motion.div
        className="fixed pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.2
        }}
      >
        <div className="w-[10px] h-[10px] rounded-full bg-neon-cyan opacity-70" />
      </motion.div>

      {/* Occasional particles effect */}
      <AnimatePresence>
        {mousePosition.x > 0 && (Math.random() > 0.95) && (
          <motion.div
            key={Date.now()}
            initial={{ 
              x: mousePosition.x, 
              y: mousePosition.y, 
              scale: 0.2, 
              opacity: 0.8 
            }}
            animate={{ 
              x: mousePosition.x + (Math.random() * 100 - 50), 
              y: mousePosition.y + (Math.random() * 100 - 50), 
              scale: 0, 
              opacity: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed pointer-events-none z-0"
          >
            <div className="w-[6px] h-[6px] rounded-full bg-neon-cyan" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MouseFollower 