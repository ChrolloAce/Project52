'use client'

import { motion } from 'framer-motion'
import { headingSizes } from '@/styles/theme'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <main className="min-h-screen text-white relative">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Success Icon */}
          <motion.div 
            className="w-24 h-24 mx-auto mb-8 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-xl animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-space-dark border-2 border-neon-cyan/50 flex items-center justify-center">
              <svg className="w-12 h-12 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </motion.div>

          <h1 className={`${headingSizes.h1} font-bold mb-6`}>
            <span className="text-transparent bg-clip-text bg-text-gradient">
              Welcome to Project 52!
            </span>
          </h1>

          <p className="text-xl text-text-secondary mb-8">
            You're now part of an exclusive community following this ambitious journey.
          </p>

          <div className="bg-space-dark/60 backdrop-blur-md border border-glass-stroke rounded-xl p-6 mb-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-4">What's Next?</h2>
              <ul className="text-left space-y-4 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-neon-cyan mr-2">•</span>
                  Weekly updates on new startup launches
                </li>
                <li className="flex items-start">
                  <span className="text-neon-cyan mr-2">•</span>
                  Behind-the-scenes insights and lessons learned
                </li>
                <li className="flex items-start">
                  <span className="text-neon-cyan mr-2">•</span>
                  Early access to new products and features
                </li>
                <li className="flex items-start">
                  <span className="text-neon-cyan mr-2">•</span>
                  Exclusive community updates and opportunities
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all duration-300 hover:scale-105"
            >
              Return to Home
            </Link>
            <p className="text-sm text-text-secondary">
              Check your email for a confirmation link
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 