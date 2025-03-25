'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { theme } from '@/styles/theme'

type TypewriterEffectProps = {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenPhrases?: number
  loop?: boolean
  className?: string
}

const TypewriterEffect = ({
  phrases,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenPhrases = 2000,
  loop = true,
  className = ''
}: TypewriterEffectProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  
  useEffect(() => {
    if (isWaiting) return
    
    const currentPhrase = phrases[currentPhraseIndex]
    
    // Handling typing and deleting
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentPhrase.substring(0, currentText.length + 1))
        
        // If we've typed the full phrase
        if (currentText.length === currentPhrase.length) {
          setIsWaiting(true)
          setTimeout(() => {
            setIsWaiting(false)
            setIsDeleting(true)
          }, delayBetweenPhrases)
        }
      } else {
        // Deleting
        setCurrentText(currentPhrase.substring(0, currentText.length - 1))
        
        // If we've deleted everything
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (loop || prev < phrases.length - 1) ? (prev + 1) % phrases.length : prev)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)
    
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases, loop, isWaiting])
  
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${theme.text.title} relative`}>
        <span className="text-neon-cyan">{currentText}</span>
        <motion.span 
          className="inline-block w-[2px] h-[1.2em] bg-neon-cyan ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-70"></div>
    </motion.div>
  )
}

export default TypewriterEffect 