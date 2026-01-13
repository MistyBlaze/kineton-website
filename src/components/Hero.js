import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const words = ['The', 'Future', 'of', 'AI', 'Runs', 'at', 'the', 'Edge'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-kineton-teal/10 rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left space-y-8">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className={`inline-block mr-4 ${(word === 'AI' || word === 'Edge') ? 'text-gradient' : 'text-kineton-white'}`}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-kineton-white/70 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Vertically integrated hardware and software stack powering the next generation of autonomous systems, robotics, and intelligent devices.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button
                onClick={() => scrollToSection('products')}
                className="px-8 py-4 bg-kineton-teal text-kineton-black font-bold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 212, 170, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('waitlist')}
                className="px-8 py-4 border-2 border-kineton-teal text-kineton-teal font-bold rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 212, 170, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Join Waitlist
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Chip Visualization */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-kineton-teal/20 to-kineton-purple/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            <svg
              className="relative w-full h-auto max-w-md"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="100" y="100" width="200" height="200" rx="10" stroke="#00d4aa" strokeWidth="2" fill="#111111" />
              <path d="M 100 100 L 80 80 M 300 100 L 320 80 M 100 300 L 80 320 M 300 300 L 320 320" stroke="#0ff0fc" strokeWidth="2" />
              <line x1="150" y1="150" x2="250" y2="150" stroke="#00d4aa" strokeWidth="1.5" />
              <line x1="150" y1="180" x2="250" y2="180" stroke="#0ff0fc" strokeWidth="1.5" />
              <line x1="150" y1="210" x2="250" y2="210" stroke="#6366f1" strokeWidth="1.5" />
              <line x1="150" y1="240" x2="250" y2="240" stroke="#00d4aa" strokeWidth="1.5" />
              <line x1="150" y1="150" x2="150" y2="250" stroke="#00d4aa" strokeWidth="1.5" />
              <line x1="180" y1="150" x2="180" y2="250" stroke="#0ff0fc" strokeWidth="1.5" />
              <line x1="220" y1="150" x2="220" y2="250" stroke="#6366f1" strokeWidth="1.5" />
              <line x1="250" y1="150" x2="250" y2="250" stroke="#00d4aa" strokeWidth="1.5" />
              <circle cx="150" cy="150" r="5" fill="#00d4aa" className="animate-pulse" />
              <circle cx="250" cy="150" r="5" fill="#0ff0fc" className="animate-pulse" />
              <circle cx="150" cy="250" r="5" fill="#6366f1" className="animate-pulse" />
              <circle cx="250" cy="250" r="5" fill="#00d4aa" className="animate-pulse" />
              <circle cx="200" cy="200" r="15" stroke="#0ff0fc" strokeWidth="2" fill="#00d4aa" opacity="0.3" className="animate-pulse" />
              <line x1="50" y1="200" x2="100" y2="200" stroke="#00d4aa" strokeWidth="2" />
              <line x1="300" y1="200" x2="350" y2="200" stroke="#00d4aa" strokeWidth="2" />
              <line x1="200" y1="50" x2="200" y2="100" stroke="#0ff0fc" strokeWidth="2" />
              <line x1="200" y1="300" x2="200" y2="350" stroke="#0ff0fc" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>
      </div>

      <div className="noise-overlay" />
    </section>
  );
};

export default Hero;