'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import ProjectSlider from '@/components/ProjectSlider'
import TypewriterEffect from '@/components/TypewriterEffect'
import { theme } from '@/styles/theme'
import { headingSizes, animations } from '@/styles/theme'

export default function Home() {
  const [mounted, setMounted] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    // Function to calculate time remaining until April 15, 2025
    const calculateTimeRemaining = () => {
      const now = new Date()
      const targetDate = new Date('April 15, 2025 00:00:00')
      
      // Calculate time difference in milliseconds
      const differenceMs = targetDate.getTime() - now.getTime()
      
      if (differenceMs <= 0) {
        return { days: '00', hours: '00', minutes: '00', seconds: '00' }
      }
      
      // Convert to days, hours, minutes, seconds
      const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24))
      const hours = Math.floor((differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000)
      
      // Format with leading zeros
      return {
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      }
    }
    
    // Set initial time
    setTimeLeft(calculateTimeRemaining())
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining())
    }, 1000)
    
    // Clean up interval on unmount
    return () => clearInterval(timer)
  }, [])

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
                  "That means I will build 1 new startup every 7 days",
                  "1 startup every 168 hours",
                  "1 startup every 10,080 minutes",
                  "1 new startup every 604,800 seconds",
                  "Tick Tock..."
                ]}
                typingSpeed={50}
                deletingSpeed={35}
                delayBetweenPhrases={1500}
                className="text-xl md:text-2xl font-medium"
              />
            </motion.div>
            
            <motion.h2 
              className={`${headingSizes.h3} font-light text-text-secondary mb-3 text-xl md:text-2xl lg:text-3xl`}
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
            
            {/* Countdown Timer */}
            <motion.div
              className="flex flex-col items-center mb-10 mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-sm md:text-base text-neon-cyan mb-4 font-medium bg-neon-cyan/10 px-4 py-1.5 rounded-full border border-neon-cyan/20">
                Challenge begins in:
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative bg-space-dark w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 rounded-lg border border-glass-stroke backdrop-blur-sm flex items-center justify-center mb-2 overflow-hidden">
                      <div className="absolute inset-0 bg-grid-lines opacity-20"></div>
                      <div className="absolute top-0 left-0 w-full h-full bg-neon-cyan/5"></div>
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white relative z-10">{item.value}</span>
                      {/* Separator dots for all except last item */}
                      {index < 3 && (
                        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></div>
                        </div>
                      )}
                    </div>
                    <span className="text-xs md:text-sm text-text-secondary">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Email Subscription Section */}
            <motion.div
              className="w-full max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="relative bg-space-dark/60 rounded-xl backdrop-blur-md border border-glass-stroke p-8 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-grid-lines opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                    <p className="text-text-secondary">Get notified about new startups, progress updates, and exclusive insights</p>
                  </div>
                  
                  <form 
                    className="flex flex-col sm:flex-row gap-4"
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const form = e.target as HTMLFormElement
                      const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
                      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement
                      
                      if (!emailInput.value) return
                      
                      try {
                        // Disable the submit button and show loading state
                        submitButton.disabled = true
                        submitButton.innerHTML = `
                          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        `
                        
                        // Send to our API route
                        const response = await fetch('/api/subscribe', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            email: emailInput.value,
                          }),
                        })
                        
                        const data = await response.json()
                        
                        if (!response.ok) {
                          throw new Error(data.error || 'Failed to subscribe')
                        }
                        
                        // Redirect to thank you page after successful submission
                        window.location.href = '/thank-you'
                      } catch (error) {
                        console.error('Error submitting email:', error)
                        // Show error message to user
                        const errorDiv = document.createElement('div')
                        errorDiv.className = 'text-red-500 text-sm mt-2'
                        errorDiv.textContent = error instanceof Error ? error.message : 'There was an error submitting your email. Please try again.'
                        form.appendChild(errorDiv)
                        
                        // Reset button state
                        submitButton.disabled = false
                        submitButton.textContent = 'Subscribe'
                        
                        // Remove error message after 5 seconds
                        setTimeout(() => {
                          errorDiv.remove()
                        }, 5000)
                      }
                    }}
                  >
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full px-6 py-4 bg-space-dark/80 border border-glass-stroke rounded-xl text-white placeholder-text-secondary focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-grid-lines opacity-5 rounded-xl pointer-events-none"></div>
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all duration-300 hover:scale-105 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                  
                  <p className="text-xs text-text-secondary text-center mt-4">
                    No spam, ever. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-white">You heard that right.</span> While it sounds impossible to launch 52 new startups in 52 weeks, 
              I've set strict rules to stay accountable. <span className="text-neon-cyan">Everything I build must solve real problems and innovate</span>. 
              I started this challenge to push my creative limits and accelerate my learning through rapid execution.
              Follow as I document this journey of trial and error from start to finish — and perhaps learn alongside me.
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
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-neon-cyan relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.5 20.25h-9" />
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
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-neon-purple relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-neon-pink relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
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
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyber-yellow relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )
                  }
                ].map((rule, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-space-dark border border-glass-stroke rounded-xl backdrop-blur-md hover:border-neon-cyan/30 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="mb-4 sm:mb-0 sm:mr-4 p-3 sm:p-4 bg-glass-gray rounded-lg border border-glass-stroke relative overflow-hidden shadow-[0_0_15px_rgba(0,245,255,0.15)]">
                      <div className="absolute inset-0 bg-grid-lines opacity-30"></div>
                      {rule.icon}
                    </div>
                    <div className="text-center sm:text-left">
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