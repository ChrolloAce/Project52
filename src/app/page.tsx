'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import ProjectSlider from '@/components/ProjectSlider'
import TypewriterEffect from '@/components/TypewriterEffect'
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
            
            {/* Typewriter effect */}
            <motion.div 
              className="mx-auto mb-10 h-[120px] md:h-[100px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <TypewriterEffect 
                phrases={[
                  "Welcome to Project 52",
                  "There's only 52 weeks in 1 year",
                  "And I will build 1 new startup and monetize for every week of the year",
                  "That means I will build one new startup every 7 days",
                  "1 startup every 168 hours",
                  "One startup every 10,080 minutes",
                  "One new startup every 604,800 seconds",
                  "Tick Tock..."
                ]}
                typingSpeed={50}
                deletingSpeed={35}
                delayBetweenPhrases={1500}
                className="text-xl md:text-2xl font-medium"
              />
            </motion.div>
            
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
              
              <div className="w-full h-3 bg-space-blue/50 rounded-full overflow-hidden mb-3 backdrop-blur-md border border-glass-stroke/30">
                <div className="h-full bg-neon-cyan min-w-[2px] w-[0%]"></div>
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
              className="flex justify-center w-full"
            >
              <a 
                href="https://www.youtube.com/@ErnestoLopez.TheBigScale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-[#FF0000] hover:bg-[#FF0000]/90 text-white text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] hover:scale-105 whitespace-nowrap"
              >
                <svg className="w-8 h-8 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span>Watch My Journey on YouTube</span>
              </a>
            </motion.div>
          </motion.div>
          
          <ProjectSlider />
          
          {/* Challenge Rules Section */}
          <motion.div
            id="rules"
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
                      <div className="relative">
                        <div className="absolute inset-0 bg-neon-cyan/20 rounded-lg animate-pulse"></div>
                        <svg className="w-12 h-12 text-neon-cyan relative z-10" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M10.5,2H13.5C14.33,2 15,2.67 15,3.5V4H17.5C18.33,4 19,4.67 19,5.5V8H21.5C22.33,8 23,8.67 23,9.5V12.5C23,13.33 22.33,14 21.5,14H19V16.5C19,17.33 18.33,18 17.5,18H15V20.5C15,21.33 14.33,22 13.5,22H10.5C9.67,22 9,21.33 9,20.5V18H6.5C5.67,18 5,17.33 5,16.5V14H2.5C1.67,14 1,13.33 1,12.5V9.5C1,8.67 1.67,8 2.5,8H5V5.5C5,4.67 5.67,4 6.5,4H9V3.5C9,2.67 9.67,2 10.5,2M12,6A1,1 0 0,0 11,7A1,1 0 0,0 12,8A1,1 0 0,0 13,7A1,1 0 0,0 12,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9M12,12A1,1 0 0,0 11,13A1,1 0 0,0 12,14A1,1 0 0,0 13,13A1,1 0 0,0 12,12M7,15A1,1 0 0,0 6,16A1,1 0 0,0 7,17A1,1 0 0,0 8,16A1,1 0 0,0 7,15M17,15A1,1 0 0,0 16,16A1,1 0 0,0 17,17A1,1 0 0,0 18,16A1,1 0 0,0 17,15Z" />
                        </svg>
                      </div>
                    )
                  },
                  {
                    title: "Weekly Releases",
                    description: "Each project must be released on its corresponding week. Edits allowed later.",
                    icon: (
                      <div className="relative">
                        <div className="absolute inset-0 bg-neon-purple/20 rounded-lg animate-pulse"></div>
                        <svg className="w-12 h-12 text-neon-purple relative z-10" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.5 13H11V7H12.5V13M12.5 17H11V15H12.5V17Z" />
                          <path fill="#FFB800" d="M15,16.27V19.27L19.5,16.5L15,13.73V16.27Z" />
                        </svg>
                      </div>
                    )
                  },
                  {
                    title: "Document Everything",
                    description: "Process, challenges, and learnings must be thoroughly documented for each project.",
                    icon: (
                      <div className="relative">
                        <div className="absolute inset-0 bg-neon-pink/20 rounded-lg animate-pulse"></div>
                        <svg className="w-12 h-12 text-neon-pink relative z-10" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z" />
                        </svg>
                      </div>
                    )
                  },
                  {
                    title: "$1 Million Revenue",
                    description: "The challenge goal is to generate $1 million in combined revenue by the end of 52 weeks.",
                    icon: (
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyber-yellow/20 rounded-lg animate-pulse"></div>
                        <svg className="w-12 h-12 text-cyber-yellow relative z-10" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,17V16H9V14H13V13H10A1,1 0 0,1 9,12V9A1,1 0 0,1 10,8H11V7H13V8H15V10H11V11H14A1,1 0 0,1 15,12V15A1,1 0 0,1 14,16H13V17H11Z" />
                          <path fill="#00F5FF" d="M14.5,9.5L14.5,6.5L11.5,6.5" transform="translate(2, 2)" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
                        </svg>
                      </div>
                    )
                  }
                ].map((rule, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-6 bg-space-dark border border-glass-stroke rounded-xl backdrop-blur-md hover:border-neon-cyan/30 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="mr-4 p-4 bg-glass-gray rounded-lg border border-glass-stroke relative overflow-hidden shadow-[0_0_15px_rgba(0,245,255,0.15)]">
                      <div className="absolute inset-0 bg-grid-lines opacity-30"></div>
                      {rule.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{rule.title}</h3>
                      <p className="text-text-secondary">{rule.description}</p>
                    </div>
                  </motion.div>
                ))}
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
              <p className="text-lg text-text-secondary">
                This journey is all about rapid experimentation, learning from failures, and building in public.
                Every week, I'll be documenting my process, sharing insights, and launching something new.
              </p>
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