// Central theme definition for consistent styling
export const theme = {
  // Base styles for buttons
  buttons: {
    primary: "px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] hover:scale-105 border border-glass-stroke backdrop-blur-sm",
    secondary: "px-6 py-3 rounded-full bg-glass-gray border border-glass-stroke text-text-primary font-medium transition-all duration-300 hover:bg-glass-stroke hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    outline: "px-6 py-3 rounded-full border border-neon-cyan/30 text-neon-cyan font-medium transition-all duration-300 hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]",
    icon: "p-2 rounded-full bg-glass-gray border border-glass-stroke text-text-primary hover:bg-glass-stroke transition-all duration-300",
    chip: "px-4 py-1.5 rounded-full bg-glass-gray border border-glass-stroke text-text-secondary text-sm transition-colors duration-300 hover:text-text-primary",
  },
  
  // Card styles
  cards: {
    primary: "bg-card-gradient backdrop-blur-md border border-glass-stroke rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.1)]",
    highlight: "bg-gradient-to-br from-glass-gray to-transparent backdrop-blur-md border border-neon-cyan/20 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,245,255,0.1)]",
    glass: "bg-glass-gray backdrop-blur-md border border-glass-stroke rounded-xl overflow-hidden",
  },
  
  // Typography styles
  text: {
    title: "font-bold tracking-tight",
    gradient: "text-transparent bg-clip-text bg-text-gradient animate-cosmic-shift",
    shimmer: "text-transparent bg-clip-text bg-[length:200%_auto] bg-text-gradient animate-text-shimmer",
    heading: "font-bold tracking-tight text-text-primary",
    body: "text-text-secondary",
    caption: "text-sm text-text-disabled",
  },
  
  // Layout elements
  layout: {
    section: "py-12 md:py-20",
    container: "container mx-auto px-4",
    gridContainer: "grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
  
  // Effects and decorations
  effects: {
    glassPanel: "bg-glass-gray backdrop-blur-md border border-glass-stroke rounded-xl",
    cosmicGlow: "before:content-[''] before:absolute before:inset-0 before:bg-cosmic-glow before:-z-10 before:opacity-70 before:rounded-full",
    neonBorder: "before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-neon-cyan before:to-neon-purple before:mask-border before:-z-10",
    gridBackground: "before:content-[''] before:absolute before:inset-0 before:bg-grid-lines before:opacity-10 before:-z-10",
  }
}

// Helper to create consistent heading sizes
export const headingSizes = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl lg:text-5xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg md:text-xl",
  h6: "text-base md:text-lg",
}

// Animation variants for framer-motion
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 100 }
  }
} 