'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const RotatingElement = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Delay showing the element to ensure smooth initial render
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])
  
  if (!isVisible) return null
  
  return (
    <div className="fixed right-10 top-[30%] pointer-events-none hidden md:block">
      <motion.div
        className="relative w-32 h-32"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          transformStyle: 'preserve-3d',
          transform: 'perspective(1000px)'
        }}
      >
        {/* Front side - number 52 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: 'translateZ(0px)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="text-4xl font-bold text-neon-cyan">52</div>
        </motion.div>
        
        {/* Back side - also number 52 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: 'translateZ(0px) rotateY(180deg)',
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="text-4xl font-bold text-neon-cyan">52</div>
        </motion.div>
        
        {/* Rotating rings around the number */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-neon-cyan/30"
          style={{
            transform: 'rotateX(65deg) rotateY(0deg) rotateZ(0deg)',
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateZ: [0, 360] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-neon-purple/30"
          style={{
            transform: 'rotateX(35deg) rotateY(0deg) rotateZ(0deg)',
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateZ: [360, 0] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-neon-cyan/5 filter blur-xl"></div>
        
        {/* Pulsing light */}
        <motion.div
          className="absolute inset-0 rounded-full bg-neon-cyan/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        
        {/* Data streams */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-0.5 bg-neon-cyan/20 rounded-full"
            style={{
              height: '100px',
              left: '50%',
              top: '50%',
              marginLeft: '-1px',
              transformOrigin: 'bottom center',
              transform: `rotateZ(${i * 45}deg) rotateX(${80 + i * 2}deg) translateY(-50px)`,
            }}
            animate={{
              height: ['0px', '100px', '0px'],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </motion.div>
      
      {/* Text label */}
      <motion.div
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-xs text-neon-cyan/70">WEEKS</div>
        <div className="text-xs text-white/50">CHALLENGE</div>
      </motion.div>
    </div>
  )
}

export default RotatingElement 