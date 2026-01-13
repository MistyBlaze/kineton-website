import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

const VEOSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, once: true });
  const topsCount = useCountUp(150, 2000, 0, isInView);

  return (
    <section
      id="veo"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-kineton-black to-kineton-dark overflow-hidden"
    >
      {/* Particle effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-kineton-purple/5 rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Chip Visualization */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-kineton-purple/30 to-kineton-cyan/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            <svg
              className="relative w-full h-auto max-w-lg"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="150" y="150" width="200" height="200" rx="8" fill="#111111" stroke="#6366f1" strokeWidth="3" />
              <rect x="170" y="170" width="70" height="70" rx="4" fill="#6366f1" opacity="0.2" />
              <rect x="260" y="170" width="70" height="70" rx="4" fill="#0ff0fc" opacity="0.2" />
              <rect x="170" y="260" width="70" height="70" rx="4" fill="#00d4aa" opacity="0.2" />
              <rect x="260" y="260" width="70" height="70" rx="4" fill="#6366f1" opacity="0.2" />
              <line x1="205" y1="240" x2="205" y2="260" stroke="#00d4aa" strokeWidth="2" />
              <line x1="295" y1="240" x2="295" y2="260" stroke="#0ff0fc" strokeWidth="2" />
              <line x1="240" y1="205" x2="260" y2="205" stroke="#6366f1" strokeWidth="2" />
              <line x1="240" y1="295" x2="260" y2="295" stroke="#00d4aa" strokeWidth="2" />
              <circle cx="205" cy="205" r="8" fill="#6366f1" />
              <circle cx="295" cy="205" r="8" fill="#0ff0fc" />
              <circle cx="205" cy="295" r="8" fill="#00d4aa" />
              <circle cx="295" cy="295" r="8" fill="#6366f1" />
              {[...Array(8)].map((_, i) => (
                <React.Fragment key={i}>
                  <rect x="120" y={170 + i * 20} width="30" height="8" fill="#00d4aa" />
                  <rect x="350" y={170 + i * 20} width="30" height="8" fill="#00d4aa" />
                </React.Fragment>
              ))}
              {[...Array(8)].map((_, i) => (
                <React.Fragment key={i}>
                  <rect x={170 + i * 20} y="120" width="8" height="30" fill="#0ff0fc" />
                  <rect x={170 + i * 20} y="350" width="8" height="30" fill="#0ff0fc" />
                </React.Fragment>
              ))}
              <circle cx="150" cy="150" r="5" fill="#6366f1" className="animate-pulse" />
              <circle cx="350" cy="150" r="5" fill="#0ff0fc" className="animate-pulse" />
              <circle cx="150" cy="350" r="5" fill="#00d4aa" className="animate-pulse" />
              <circle cx="350" cy="350" r="5" fill="#6366f1" className="animate-pulse" />
            </svg>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-kineton-purple/10 border border-kineton-purple/30 rounded-full">
              <span className="text-kineton-purple text-sm font-semibold tracking-wider">HARDWARE</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold font-heading text-kineton-white">
              VEO Cores
            </h2>

            <h3 className="text-2xl sm:text-3xl font-medium text-kineton-purple">
              Custom silicon engineered for edge AI
            </h3>

            <p className="text-lg text-kineton-white/70 leading-relaxed">
              VEO is our proprietary semiconductor IP designed from the ground up for neural network inference. Optimized for the unique constraints of edge deployment: power efficiency, thermal management, and real-time performance.
            </p>

            {/* Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <motion.div
                className="p-6 bg-kineton-black/50 rounded-xl border border-kineton-purple/20 transition-all duration-300"
                whileHover={{ borderColor: 'rgba(99, 102, 241, 0.5)', scale: 1.05 }}
              >
                <div className="text-sm text-kineton-white/60 mb-2">Architecture</div>
                <div className="text-xl font-bold text-kineton-white">Custom RISC-V Neural Cores</div>
              </motion.div>

              <motion.div
                className="p-6 bg-kineton-black/50 rounded-xl border border-kineton-cyan/20 transition-all duration-300"
                whileHover={{ borderColor: 'rgba(15, 240, 252, 0.5)', scale: 1.05 }}
              >
                <div className="text-sm text-kineton-white/60 mb-2">Performance</div>
                <div className="text-xl font-bold text-kineton-cyan">{topsCount}+ TOPS/W</div>
              </motion.div>

              <motion.div
                className="p-6 bg-kineton-black/50 rounded-xl border border-kineton-teal/20 transition-all duration-300"
                whileHover={{ borderColor: 'rgba(0, 212, 170, 0.5)', scale: 1.05 }}
              >
                <div className="text-sm text-kineton-white/60 mb-2">Memory</div>
                <div className="text-xl font-bold text-kineton-teal">Integrated HBM</div>
              </motion.div>

              <motion.div
                className="p-6 bg-kineton-black/50 rounded-xl border border-kineton-purple/20 transition-all duration-300"
                whileHover={{ borderColor: 'rgba(99, 102, 241, 0.5)', scale: 1.05 }}
              >
                <div className="text-sm text-kineton-white/60 mb-2">Interfaces</div>
                <div className="text-xl font-bold text-kineton-purple">PCIe Gen4</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VEOSection;