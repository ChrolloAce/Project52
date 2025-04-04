'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { theme } from '@/styles/theme'

// Add a type definition for the project item
type ProjectItem = {
  id: number;
  name: string;
  status: 'active' | 'locked';
  week: number;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

// Generate 52 locked project slots with Project 1 unlocked as PolarStock
const projects: ProjectItem[] = [
  // Project 1 - PolarStock
  {
    id: 1,
    name: "Project 1",
    status: 'locked',
    week: 1,
    description: "This startup will be launched in week 1",
    tags: ['#startup', '#week1'],
  },
  // Generate the remaining locked projects
  ...Array.from({ length: 51 }, (_, i) => ({
    id: i + 2,
    name: `Project ${i + 2}`,
    status: 'locked' as const,
    week: i + 2,
    description: `This startup will be launched in week ${i + 2}`,
    tags: ['#startup', `#week${i + 2}`],
  }))
]

const ProjectSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const scrollTo = (index: number) => {
    if (!sliderRef.current) return
    
    // Calculate the width of the card based on the viewport
    let cardWidth = 0;
    
    if (isMobile) {
      // On mobile, use the actual card width including the gap
      const cards = sliderRef.current.querySelectorAll(':scope > div');
      if (cards.length > 0 && cards[index]) {
        // Include the gap in the calculation (24px = 6rem space-x-6)
        cardWidth = cards[index].clientWidth + 24;
      } else {
        // Fallback to percentage-based calculation
        cardWidth = sliderRef.current.offsetWidth * 0.85;
      }
    } else {
      // On desktop, use percentage of slider width
      cardWidth = sliderRef.current.offsetWidth * (projects[index].status === 'active' ? 0.5 : 0.35);
    }
    
    // Scroll to the card
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    
    setActiveIndex(index);
  }

  const nextSlide = () => {
    const newIndex = Math.min(activeIndex + 1, projects.length - 1)
    scrollTo(newIndex)
  }

  const prevSlide = () => {
    const newIndex = Math.max(activeIndex - 1, 0)
    scrollTo(newIndex)
  }
  
  // Calculate progress
  const progress = (activeIndex / (projects.length - 1)) * 100

  return (
    <div id="projects" className="w-full my-10 overflow-x-hidden">
      <div className="relative mb-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 px-4 md:px-0">
          <div>
            <h2 className="text-2xl font-bold text-white flex flex-wrap items-center">
              <span>Project </span>
              <span className="text-neon-cyan font-bold mx-1">{activeIndex + 1}</span>
              <span className="text-white"> of 52</span>
              <div className="ml-3 px-3 py-1 text-xs rounded-full bg-space-dark/80 backdrop-blur-md border border-neon-cyan/30 text-neon-cyan">
                Week {activeIndex + 1}
              </div>
            </h2>
            <div className="mt-3 flex items-center">
              <div className="relative w-full md:w-64 h-2.5 bg-space-dark/80 backdrop-blur-md rounded-full overflow-hidden border border-glass-stroke">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan to-neon-blue"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="absolute top-0 left-0 h-full w-full opacity-30 bg-shimmer"></div>
              </div>
              <div className="ml-3 text-sm">
                <span className="text-neon-cyan font-medium">{Math.round(progress)}%</span>
                <span className="text-text-secondary"> complete</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              onClick={prevSlide} 
              className={`p-3 rounded-full backdrop-blur-sm ${
                activeIndex === 0 
                  ? 'text-text-disabled opacity-50 cursor-not-allowed border border-glass-stroke' 
                  : 'text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(0,245,255,0.2)] hover:bg-neon-cyan/5'
              }`}
              disabled={activeIndex === 0}
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className={`p-3 rounded-full backdrop-blur-sm ${
                activeIndex === projects.length - 1 
                  ? 'text-text-disabled opacity-50 cursor-not-allowed border border-glass-stroke' 
                  : 'text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(0,245,255,0.2)] hover:bg-neon-cyan/5'
              }`}
              disabled={activeIndex === projects.length - 1}
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto pb-12 pt-4 px-4 md:px-8 masked-overflow scroll-hidden"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {/* Ensure the first project is visible by adding a small spacer div at the beginning */}
          <div className="flex-shrink-0 w-2 md:w-0"></div>
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              className={`flex-shrink-0 relative ${
                isMobile ? 'w-[85%]' : project.status === 'active' ? 'w-[50%]' : 'w-[35%]'
              } h-[600px] backdrop-blur-md border rounded-xl overflow-hidden ${
                activeIndex === index ? 'border-neon-cyan shadow-[0_0_30px_rgba(0,245,255,0.3)]' : 'border-glass-stroke'
              }`}
              animate={{
                scale: activeIndex === index ? 1.03 : 1,
                opacity: Math.abs(activeIndex - index) > 2 ? 0.6 : 1,
              }}
              transition={{ duration: 0.3 }}
              onClick={() => scrollTo(index)}
              style={{
                background: project.status === 'active' 
                  ? 'linear-gradient(135deg, rgba(10, 10, 24, 0.5) 0%, rgba(7, 3, 36, 0.5) 100%)'
                  : 'linear-gradient(135deg, rgba(10, 10, 24, 0.8) 0%, rgba(7, 3, 36, 0.8) 100%)',
              }}
            >
              {/* Add a subtle glow effect for active project */}
              {activeIndex === index && (
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-neon-cyan/20 via-neon-purple/20 to-neon-cyan/20 rounded-xl blur-sm -z-10"></div>
              )}
              
              {/* Project number badge */}
              <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-space-dark border border-glass-stroke backdrop-blur-sm">
                <span className="text-neon-cyan font-medium text-sm">{project.id}</span>
              </div>
              
              <div className={`aspect-[${project.status === 'active' ? '16/9' : '3/2'}] relative overflow-hidden rounded-t-xl`}>
                {project.status === 'active' ? (
                  // For active project (PolarStock), just show the image with no overlay
                  <div className="relative w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark/70 via-transparent to-transparent"></div>
                  </div>
                ) : (
                  // For locked projects, show the gradient and lock icon
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-space-blue to-space-dark"></div>
                    <div className="absolute inset-0 bg-grid-lines opacity-30"></div>
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-32 h-32 relative mb-6">
                        {/* Add glow effect around lock */}
                        <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-md animate-pulse"></div>
                        <div className="absolute inset-0 rounded-full bg-space-dark border-2 border-neon-cyan/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.4)]">
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity, 
                              ease: "easeInOut"
                            }}
                            className="relative"
                          >
                            {/* Data lines for futuristic effect */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              {Array.from({ length: 8 }).map((_, i) => (
                                <div 
                                  key={i} 
                                  className="absolute w-full h-0.5 bg-neon-cyan/10"
                                  style={{ 
                                    transform: `rotate(${i * 45}deg)`,
                                    width: '100%',
                                    height: '1px'
                                  }}
                                ></div>
                              ))}
                            </div>
                            <svg className="w-16 h-16 text-neon-cyan relative z-10" fill="none" viewBox="0 0 24 24">
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1.5}
                                stroke="currentColor" 
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                              />
                              {/* Add fill for more visibility */}
                              <path 
                                fill="rgba(0,245,255,0.3)" 
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-neon-cyan font-medium mb-1">Week {project.week}</p>
                            <h3 className="text-white text-2xl font-bold">Coming Soon</h3>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-xl text-white">{project.name}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full backdrop-blur-sm ${
                    project.status === 'active' 
                      ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/40 shadow-[0_0_8px_rgba(0,245,255,0.15)]' 
                      : 'bg-space-dark/80 text-neon-cyan border border-neon-cyan/20'
                  }`}>
                    {project.status === 'active' ? 'Active' : 'Locked'}
                  </span>
                </div>
                
                {project.status === 'locked' && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 bg-space-dark/20 pointer-events-none">
                    <div className="w-24 h-24 relative">
                      <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-md animate-pulse"></div>
                      <div className="absolute inset-0 rounded-full bg-space-dark border-2 border-neon-cyan/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.4)]">
                        <svg className="w-12 h-12 text-neon-cyan" viewBox="0 0 24 24" fill="none">
                          <path 
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                            stroke="currentColor" 
                            strokeWidth={2} 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                          <path 
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            fill="rgba(0,245,255,0.3)"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 text-neon-cyan font-bold text-lg border border-neon-cyan/30 bg-space-dark/80 rounded-full px-3 py-1">LOCKED</div>
                  </div>
                )}
                
                <p className="text-text-secondary mb-5">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <div 
                      key={tagIndex} 
                      className="px-3 py-1 rounded-full text-xs backdrop-blur-sm bg-space-dark/60 text-white border border-glass-stroke hover:border-neon-cyan/30 transition-all duration-300 hover:text-neon-cyan"
                    >
                      <span>{tag.replace('#', '')}</span>
                    </div>
                  ))}
                </div>

                {project.status === 'active' && project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Visit Project</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <div className="flex space-x-2">
            {Array.from({ length: 6 }).map((_, dotIndex) => {
              const segmentSize = Math.ceil(projects.length / 6)
              const isActive = Math.floor(activeIndex / segmentSize) === dotIndex
              
              return (
                <button
                  key={dotIndex}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'w-8 bg-neon-cyan' 
                      : 'w-2 bg-space-dark'
                  }`}
                  onClick={() => scrollTo(dotIndex * segmentSize)}
                  aria-label={`Go to projects section ${dotIndex + 1}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSlider 