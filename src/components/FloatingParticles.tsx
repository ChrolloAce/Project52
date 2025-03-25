'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [particles, setParticles] = useState<any[]>([])
  
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    // Create particles
    const particleCount = Math.min(Math.max(Math.floor(window.innerWidth / 25), 15), 40)
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 4 + 2,
      color: i % 5 === 0 ? '#00F5FF' : 
             i % 5 === 1 ? '#7000FF' : 
             i % 5 === 2 ? '#0075FF' : 
             i % 5 === 3 ? '#FF00E5' : '#FFFFFF',
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 120 + 60,
      delay: Math.random() * 5
    }))
    
    setParticles(newParticles)
    
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [dimensions.width, dimensions.height])
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ width: '100%', height: '100vh' }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            x: particle.x,
            y: particle.y,
            boxShadow: particle.color === '#00F5FF' || particle.color === '#7000FF' 
              ? `0 0 ${particle.size * 2}px ${particle.color}`
              : 'none'
          }}
          animate={{
            x: [
              particle.x,
              particle.x + (Math.random() * 200 - 100),
              particle.x + (Math.random() * 200 - 100),
              particle.x + (Math.random() * 200 - 100),
              particle.x
            ],
            y: [
              particle.y, 
              particle.y + (Math.random() * 200 - 100),
              particle.y + (Math.random() * 200 - 100),
              particle.y + (Math.random() * 200 - 100),
              particle.y
            ],
            opacity: [
              particle.opacity,
              particle.opacity * 1.5,
              particle.opacity,
              particle.opacity * 1.2,
              particle.opacity
            ]
          }}
          transition={{
            duration: particle.duration,
            ease: "linear",
            repeat: Infinity,
            delay: particle.delay
          }}
        />
      ))}
      
      {/* Animated grid lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`horizontal-${i}`}
            className="absolute h-px w-full bg-neon-cyan/10 overflow-hidden"
            style={{ top: `${(i + 1) * 12.5}%` }}
          >
            <motion.div 
              className="h-full bg-neon-cyan/30"
              style={{ width: '100px' }}
              animate={{
                x: ['-100px', '100vw'],
              }}
              transition={{
                duration: 15 + i * 3,
                ease: "linear",
                repeat: Infinity,
                delay: i * 2
              }}
            />
          </motion.div>
        ))}
        
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute w-px h-full bg-neon-cyan/10 overflow-hidden"
            style={{ left: `${(i + 1) * 12.5}%` }}
          >
            <motion.div 
              className="w-full bg-neon-cyan/30"
              style={{ height: '100px' }}
              animate={{
                y: ['-100px', '100vh'],
              }}
              transition={{
                duration: 20 + i * 2.5,
                ease: "linear",
                repeat: Infinity,
                delay: i * 1.5
              }}
            />
          </motion.div>
        ))}
      </div>
      
      {/* Cosmic vortex */}
      <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-[500px] h-[500px] rounded-full bg-gradient-radial from-neon-blue/5 to-transparent opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360]
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
        />
      </div>
      
      {/* Digital rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`rain-${i}`}
            className="absolute top-0 text-neon-cyan font-mono text-xs"
            style={{ 
              left: `${(i + 1) * 5}%`,
              writingMode: 'vertical-rl'
            }}
            initial={{ y: -500 }}
            animate={{ y: '110vh' }}
            transition={{
              duration: 10 + Math.random() * 20,
              ease: "linear",
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <span key={j} style={{ opacity: Math.random() * 0.5 + 0.5 }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FloatingParticles 