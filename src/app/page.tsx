'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import ProjectSlider from '@/components/ProjectSlider'
import { theme } from '@/styles/theme'
import { headingSizes, animations } from '@/styles/theme'

export default function Home() {
  const [mounted, setMounted] = useState(true)

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      
      <section className={`relative ${theme.layout.section}`}>
        <div className={theme.layout.container}>
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={animations.fadeInUp.initial}
            animate={animations.fadeInUp.animate}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className={`${headingSizes.h1} ${theme.text.title} mb-8 leading-tight text-5xl md:text-7xl lg:text-8xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-text-primary">Project </span>
              <span className="relative inline-block">
                <span className="text-neon-cyan font-bold">52</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-cyan animate-pulse"></div>
              </span>
            </motion.h1>
            
            <motion.h2 
              className={`${headingSizes.h3} font-light text-text-secondary mb-8 text-xl md:text-2xl lg:text-3xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="relative">
                <span className="text-neon-cyan">52 Startups</span>
                <span className="text-white"> in 52 Weeks</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan to-neon-purple"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              An unprecedented challenge to launch 52 revolutionary businesses in just 52 weeks. 
              <span className="text-white"> Breaking all limits of what's possible in the startup world.</span>
            </motion.p>
            
            {/* Revenue goal chart - simplified */}
            <motion.div 
              className="w-full max-w-2xl mx-auto bg-space-dark/60 rounded-xl backdrop-blur-md border border-glass-stroke p-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-bold text-lg">Revenue Goal</h3>
                <div className="flex items-center">
                  <span className="text-white font-bold text-2xl">$1,000,000</span>
                </div>
              </div>
              
              <div className="w-full h-3 bg-space-blue/50 rounded-full overflow-hidden mb-3 backdrop-blur-md">
                <div className="h-full bg-neon-cyan w-[0%]"></div>
              </div>
              
              <div className="flex justify-between text-sm">
                <div className="text-text-secondary">Current: <span className="text-neon-cyan font-medium">$0</span></div>
                <div className="text-text-secondary">Week: <span className="text-white font-medium">1/52</span></div>
              </div>
            </motion.div>
            
            {/* YouTube Channel Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <a 
                href="https://www.youtube.com/@ErnestoLopez.TheBigScale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-[#FF0000] hover:bg-[#FF0000]/90 text-white text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:scale-105"
              >
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span>Watch My Journey on YouTube</span>
              </a>
            </motion.div>
          </motion.div>
          
          <ProjectSlider />
          
          {/* Challenge Rules Section */}
          <motion.div
            className="my-24 py-16 px-6 sm:px-12 rounded-2xl bg-glass-gray backdrop-blur-md border border-glass-stroke relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Background decorative elements */}
            <div className="absolute -top-28 -right-28 w-56 h-56 bg-gradient-radial from-neon-purple/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-28 -left-28 w-56 h-56 bg-gradient-radial from-neon-cyan/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-grid-lines opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className={`${headingSizes.h3} ${theme.text.heading} text-center mb-12 text-2xl md:text-3xl`}>
                <span className="relative inline-block">
                  Challenge Rules
                  <div className="absolute -bottom-3 left-0 w-full h-1 bg-neon-cyan rounded-full"></div>
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {[
                  {
                    title: "Solve Real Problems",
                    description: "Each startup must address a genuine problem to be considered valid.",
                    icon: (
                      <svg className="w-10 h-10 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    )
                  },
                  {
                    title: "Weekly Releases",
                    description: "Each project must be released on its corresponding week. Edits allowed later.",
                    icon: (
                      <svg className="w-10 h-10 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Document Everything",
                    description: "Process, challenges, and learnings must be thoroughly documented for each project.",
                    icon: (
                      <svg className="w-10 h-10 text-neon-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "No Excuses",
                    description: "The schedule must be maintained regardless of complexity or external factors.",
                    icon: (
                      <svg className="w-10 h-10 text-cyber-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ].map((rule, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-6 bg-space-dark border border-glass-stroke rounded-xl backdrop-blur-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="mr-4 p-3 bg-glass-gray rounded-lg border border-glass-stroke">
                      {rule.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{rule.title}</h3>
                      <p className="text-text-secondary">{rule.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center">
                <motion.button
                  className="bg-glass-gray hover:bg-glass-stroke text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan text-lg font-medium py-4 px-10 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Full Challenge Guidelines
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-20 pt-10 border-t border-glass-stroke"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
              <span>The challenge begins...</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'One week per startup', 
                'From idea to launch', 
                'Public accountability', 
                'Building in public'
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-space-dark rounded-full py-3 px-6 text-white text-sm font-medium border border-glass-stroke flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                >
                  <span className="w-3 h-3 rounded-full bg-neon-cyan flex items-center justify-center mr-3 relative">
                    <span className="absolute inset-0 rounded-full bg-neon-cyan/30 animate-ping opacity-75"></span>
                  </span>
                  {feature}
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-16 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              <p className="text-lg text-text-secondary mb-10">
                This journey is all about rapid experimentation, learning from failures, and building in public.
                Every week, I'll be documenting my process, sharing insights, and launching something new.
              </p>
              <button className="bg-glass-gray hover:bg-glass-stroke text-white border border-glass-stroke hover:border-neon-cyan text-lg font-medium py-4 px-10 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                <span className="flex items-center justify-center">
                  <span>Learn More About The Process</span>
                  <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer with more padding */}
      <footer className="w-full py-20 mt-20 border-t border-glass-stroke">
        <div className={theme.layout.container}>
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-neon-cyan opacity-70 animate-pulse-slow"></div>
              <div className="absolute inset-1 rounded-full bg-space-dark flex items-center justify-center">
                <span className="text-white text-2xl font-bold">52</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="https://www.youtube.com/@ErnestoLopez.TheBigScale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-space-dark rounded-xl border border-[#FF0000]/50 hover:border-[#FF0000] px-4 py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
              >
                <svg className="w-7 h-7 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span className="text-white font-medium">Follow on YouTube: <span className="font-bold">@ErnestoLopez.TheBigScale</span></span>
              </a>
            </div>
            
            <p className="text-text-secondary text-lg max-w-md text-center">
              Join me on this adventure as I build and launch 52 startups in 52 weeks.
              Watch my journey and progress as each project unfolds!
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
} 