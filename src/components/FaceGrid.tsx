'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Sample data for creators
const creators = [
  { 
    id: 1, 
    name: 'Sarah Chen', 
    role: 'Content Creator',
    category: 'Tech',
    followers: '1.2M',
    engagement: '5.8%'
  },
  { 
    id: 2, 
    name: 'Mark Johnson', 
    role: 'Lifestyle Influencer',
    category: 'Lifestyle',
    followers: '850K',
    engagement: '4.3%'
  },
  { 
    id: 3, 
    name: 'Aisha Patel', 
    role: 'Travel Blogger',
    category: 'Travel',
    followers: '2.4M',
    engagement: '6.1%'
  },
  { 
    id: 4, 
    name: 'James Wilson', 
    role: 'Finance Expert',
    category: 'Finance',
    followers: '520K',
    engagement: '3.7%'
  },
  { 
    id: 5, 
    name: 'Elena Rodriguez', 
    role: 'Fitness Coach',
    category: 'Fitness',
    followers: '1.8M',
    engagement: '7.2%'
  },
  { 
    id: 6, 
    name: 'David Kim', 
    role: 'Gaming Creator',
    category: 'Gaming',
    followers: '3.1M',
    engagement: '8.5%'
  },
  { 
    id: 7, 
    name: 'Olivia Smith', 
    role: 'Beauty Creator',
    category: 'Beauty',
    followers: '1.5M',
    engagement: '5.4%'
  },
  { 
    id: 8, 
    name: 'Michael Brown', 
    role: 'Food Blogger',
    category: 'Culinary',
    followers: '980K',
    engagement: '4.9%'
  },
  { 
    id: 9, 
    name: 'Sophia Martinez', 
    role: 'Fashion Designer',
    category: 'Fashion',
    followers: '2.7M',
    engagement: '6.8%'
  },
]

const CreatorGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [displayMode, setDisplayMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="w-full">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <span className="text-sm text-muted-gray block mb-1">89/100 spots left</span>
          <div className="relative w-64 h-2 bg-dark-purple rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-blue to-accent-purple"
              initial={{ width: 0 }}
              animate={{ width: '89%' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button 
            className={`p-2 rounded-md ${displayMode === 'grid' ? 'bg-dark-purple text-white' : 'text-muted-gray'}`}
            onClick={() => setDisplayMode('grid')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button 
            className={`p-2 rounded-md ${displayMode === 'list' ? 'bg-dark-purple text-white' : 'text-muted-gray'}`}
            onClick={() => setDisplayMode('list')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {displayMode === 'grid' ? (
        <div className="grid-container">
          {creators.map((creator) => (
            <motion.div
              key={creator.id}
              className="cosmic-card p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: creator.id * 0.05 }}
              onMouseEnter={() => setHoveredId(creator.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-dark-blue border border-subtle-gray flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-blue font-medium">{creator.id}</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">{creator.name}</h3>
                  <p className="text-sm text-muted-gray">{creator.role}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-gray">Category</span>
                  <span className="text-sm text-white font-medium">{creator.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-gray">Followers</span>
                  <span className="text-sm text-white font-medium">{creator.followers}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-gray">Engagement</span>
                  <span className="text-sm accent-text font-medium">{creator.engagement}</span>
                </div>
              </div>
              <motion.div 
                className="mt-5 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === creator.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <button className="cosmic-button-outline text-xs py-1.5">
                  View Profile
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {creators.map((creator) => (
            <motion.div
              key={creator.id}
              className="cosmic-card p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: creator.id * 0.03 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-dark-blue border border-subtle-gray flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-blue font-medium text-sm">{creator.id}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{creator.name}</h3>
                    <p className="text-xs text-muted-gray">{creator.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="hidden md:block">
                    <span className="text-xs text-muted-gray block">Category</span>
                    <span className="text-sm text-white">{creator.category}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-gray block">Followers</span>
                    <span className="text-sm text-white">{creator.followers}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-gray block">Engagement</span>
                    <span className="text-sm accent-text">{creator.engagement}</span>
                  </div>
                  <button className="cosmic-button-outline text-xs py-1.5">
                    Connect
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      
      <motion.div 
        className="mt-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button className="cosmic-button">
          Find Creators
        </button>
      </motion.div>
    </div>
  )
}

export default CreatorGrid 