import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-kineton-black via-kineton-dark to-kineton-black dark:from-kineton-black dark:via-kineton-dark dark:to-kineton-black"
    >
      {/* Light mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:opacity-0 opacity-100" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-kineton-teal/20 via-kineton-cyan/15 to-transparent rounded-full blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-kineton-amber/15 via-kineton-purple/10 to-transparent rounded-full blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: i % 4 === 0 ? '#00d4aa' : i % 4 === 1 ? '#0ff0fc' : i % 4 === 2 ? '#f59e0b' : '#6366f1',
              opacity: 0.15
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="text-left space-y-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-heading leading-[1.1]">
                {['The', 'Future', 'of'].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-4 text-gray-900 dark:text-kineton-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  className="inline-block text-gradient-multi mr-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  AI
                </motion.span>
                {['Runs', 'at', 'the'].map((word, i) => (
                  <motion.span
                    key={i + 4}
                    className="inline-block mr-4 text-gray-900 dark:text-kineton-white"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  className="inline-block text-gradient-multi"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Edge
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-2xl text-gray-700 dark:text-kineton-white/80 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Vertically integrated hardware and software stack powering the next generation of autonomous systems, robotics, and intelligent devices.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button
                onClick={() => scrollToSection('products')}
                className="px-10 py-5 bg-gradient-to-r from-kineton-teal to-kineton-cyan text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0, 212, 170, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('waitlist')}
                className="px-10 py-5 border-3 border-kineton-teal dark:border-kineton-teal text-kineton-teal dark:text-kineton-teal font-bold text-lg rounded-xl transition-all duration-300 bg-white/10 dark:bg-transparent"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 212, 170, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Premium Chip Visualization */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            {/* Multi-layer animated glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-kineton-teal/30 via-kineton-cyan/20 to-kineton-amber/30 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <svg
              className="relative w-full h-auto max-w-[600px] drop-shadow-2xl"
              viewBox="0 0 700 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main die with gradient border */}
              <rect x="150" y="150" width="400" height="400" rx="25" fill="#0a0a0a" stroke="url(#mainGradient)" strokeWidth="5" />
              
              {/* Organic circuit trace patterns */}
              <g opacity="0.7">
                {/* Horizontal traces */}
                {[...Array(15)].map((_, i) => (
                  <motion.path
                    key={`h${i}`}
                    d={`M ${170 + Math.random() * 10} ${180 + i * 26} Q ${250 + Math.random() * 100} ${180 + i * 26 + Math.random() * 20 - 10} ${530 - Math.random() * 10} ${180 + i * 26}`}
                    stroke={i % 4 === 0 ? '#00d4aa' : i % 4 === 1 ? '#0ff0fc' : i % 4 === 2 ? '#6366f1' : '#f59e0b'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 2, delay: i * 0.05, repeat: Infinity, repeatDelay: 5 }}
                  />
                ))}
                {/* Vertical traces */}
                {[...Array(15)].map((_, i) => (
                  <motion.path
                    key={`v${i}`}
                    d={`M ${180 + i * 26} ${170 + Math.random() * 10} Q ${180 + i * 26 + Math.random() * 20 - 10} ${250 + Math.random() * 100} ${180 + i * 26} ${530 - Math.random() * 10}`}
                    stroke={i % 4 === 0 ? '#0ff0fc' : i % 4 === 1 ? '#6366f1' : i % 4 === 2 ? '#00d4aa' : '#f59e0b'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 2, delay: 0.5 + i * 0.05, repeat: Infinity, repeatDelay: 5 }}
                  />
                ))}
              </g>

              {/* Neural processing cores - 4 quadrants */}
              {[
                { x: 250, y: 250, color: '#6366f1', label: 'Neural' },
                { x: 450, y: 250, color: '#0ff0fc', label: 'Tensor' },
                { x: 250, y: 450, color: '#00d4aa', label: 'Vector' },
                { x: 450, y: 450, color: '#f59e0b', label: 'Compute' }
              ].map((core, i) => (
                <g key={i}>
                  <motion.rect
                    x={core.x - 60}
                    y={core.y - 60}
                    width="120"
                    height="120"
                    rx="15"
                    fill={core.color}
                    opacity="0.15"
                    animate={{ opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                  />
                  <motion.circle
                    cx={core.x}
                    cy={core.y}
                    r="25"
                    fill={core.color}
                    animate={{ 
                      scale: [1, 1.3, 1], 
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <text x={core.x} y={core.y + 55} textAnchor="middle" fill={core.color} fontSize="12" fontWeight="bold">{core.label}</text>
                </g>
              ))}

              {/* Interconnect lines */}
              <line x1="250" y1="275" x2="250" y2="425" stroke="#00d4aa" strokeWidth="4" opacity="0.5" />
              <line x1="450" y1="275" x2="450" y2="425" stroke="#0ff0fc" strokeWidth="4" opacity="0.5" />
              <line x1="275" y1="250" x2="425" y2="250" stroke="#6366f1" strokeWidth="4" opacity="0.5" />
              <line x1="275" y1="450" x2="425" y2="450" stroke="#f59e0b" strokeWidth="4" opacity="0.5" />

              {/* Diagonal connections */}
              <motion.line
                x1="275" y1="275" x2="425" y2="425"
                stroke="#00d4aa"
                strokeWidth="3"
                opacity="0.3"
                strokeDasharray="8 4"
                animate={{ strokeDashoffset: [0, -12] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.line
                x1="425" y1="275" x2="275" y2="425"
                stroke="#0ff0fc"
                strokeWidth="3"
                opacity="0.3"
                strokeDasharray="8 4"
                animate={{ strokeDashoffset: [0, -12] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* External I/O connections with animated data flow */}
              {[
                { x1: 80, y1: 350, x2: 150, y2: 350, color: '#00d4aa' },
                { x1: 550, y1: 350, x2: 620, y2: 350, color: '#0ff0fc' },
                { x1: 350, y1: 80, x2: 350, y2: 150, color: '#6366f1' },
                { x1: 350, y1: 550, x2: 350, y2: 620, color: '#f59e0b' }
              ].map((conn, i) => (
                <g key={i}>
                  <line x1={conn.x1} y1={conn.y1} x2={conn.x2} y2={conn.y2} stroke={conn.color} strokeWidth="5" opacity="0.6" />
                  <motion.circle
                    cx={conn.x1}
                    cy={conn.y1}
                    r="6"
                    fill={conn.color}
                    animate={{ 
                      cx: [conn.x1, conn.x2, conn.x1],
                      opacity: [0, 1, 0] 
                    }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </g>
              ))}

              {/* Corner alignment markers */}
              {[[150, 150], [550, 150], [150, 550], [550, 550]].map(([cx, cy], i) => (
                <motion.circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="12"
                  fill={i === 0 ? '#6366f1' : i === 1 ? '#0ff0fc' : i === 2 ? '#00d4aa' : '#f59e0b'}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                />
              ))}

              {/* Central hub */}
              <motion.circle
                cx="350"
                cy="350"
                r="35"
                stroke="url(#coreGradient)"
                strokeWidth="4"
                fill="#0a0a0a"
                opacity="0.8"
                animate={{ 
                  scale: [1, 1.15, 1], 
                  opacity: [0.6, 0.9, 0.6] 
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Gradients */}
              <defs>
                <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4aa" />
                  <stop offset="33%" stopColor="#0ff0fc" />
                  <stop offset="66%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
                <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0ff0fc" />
                  <stop offset="100%" stopColor="#00d4aa" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="noise-overlay" />
    </section>
  );
};

export default Hero;