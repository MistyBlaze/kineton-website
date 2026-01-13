import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { Cpu, Zap, Database, Layers } from 'lucide-react';

const VEOSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, once: true });
  const topsCount = useCountUp(150, 2000, 0, isInView);

  const specs = [
    { icon: Layers, label: 'Architecture', value: 'Custom RISC-V Neural Cores', color: 'purple' },
    { icon: Zap, label: 'Performance', value: `${topsCount}+ TOPS/W`, color: 'cyan' },
    { icon: Database, label: 'Memory', value: 'Integrated HBM', color: 'teal' },
    { icon: Cpu, label: 'Interfaces', value: 'PCIe Gen4', color: 'amber' }
  ];

  return (
    <section
      id="veo"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-kineton-black via-kineton-darker to-kineton-dark dark:from-kineton-black dark:via-kineton-darker dark:to-kineton-dark overflow-hidden"
    >
      {/* Light mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:opacity-0 opacity-100" />
      
      {/* Circuit pattern */}
      <div className="absolute inset-0 circuit-pattern" />

      {/* Gradient accents */}
      <motion.div
        className="absolute top-1/3 left-0 w-[700px] h-[700px] bg-gradient-to-r from-kineton-purple/15 to-transparent rounded-full blur-[120px]"
        animate={{ x: [0, 80, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-[700px] h-[700px] bg-gradient-to-l from-kineton-amber/15 to-transparent rounded-full blur-[120px]"
        animate={{ x: [0, -80, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Multi-Core Chip Visualization */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, type: 'spring', stiffness: 80 }}
          >
            {/* Rotating glow layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-kineton-purple/40 via-kineton-cyan/30 to-kineton-amber/40 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <svg
              className="relative w-full h-auto max-w-[650px]"
              viewBox="0 0 800 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Substrate */}
              <rect x="200" y="200" width="400" height="400" rx="30" fill="#050505" stroke="url(#veoMainGrad)" strokeWidth="6" />
              
              {/* 4-core neural processing units */}
              {[
                { x: 280, y: 280, w: 140, h: 140, core: { cx: 350, cy: 350 }, color: '#6366f1', label: 'Neural' },
                { x: 480, y: 280, w: 140, h: 140, core: { cx: 550, cy: 350 }, color: '#0ff0fc', label: 'Tensor' },
                { x: 280, y: 480, w: 140, h: 140, core: { cx: 350, cy: 550 }, color: '#00d4aa', label: 'Vector' },
                { x: 480, y: 480, w: 140, h: 140, core: { cx: 550, cy: 550 }, color: '#f59e0b', label: 'Matrix' }
              ].map((unit, i) => (
                <g key={i}>
                  <motion.rect
                    x={unit.x}
                    y={unit.y}
                    width={unit.w}
                    height={unit.h}
                    rx="18"
                    fill={unit.color}
                    opacity="0.12"
                    animate={{ opacity: [0.08, 0.2, 0.08] }}
                    transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
                  />
                  <motion.circle
                    cx={unit.core.cx}
                    cy={unit.core.cy}
                    r="28"
                    fill={unit.color}
                    animate={{ 
                      scale: [1, 1.4, 1], 
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <text x={unit.core.cx} y={unit.core.cy + 65} textAnchor="middle" fill={unit.color} fontSize="16" fontWeight="bold">
                    {unit.label}
                  </text>
                </g>
              ))}

              {/* Interconnect fabric */}
              <line x1="350" y1="378" x2="350" y2="522" stroke="#00d4aa" strokeWidth="5" opacity="0.6" />
              <line x1="550" y1="378" x2="550" y2="522" stroke="#0ff0fc" strokeWidth="5" opacity="0.6" />
              <line x1="378" y1="350" x2="522" y2="350" stroke="#6366f1" strokeWidth="5" opacity="0.6" />
              <line x1="378" y1="550" x2="522" y2="550" stroke="#f59e0b" strokeWidth="5" opacity="0.6" />
              
              {/* Diagonal high-speed links */}
              <motion.line
                x1="378" y1="378" x2="522" y2="522"
                stroke="#00d4aa"
                strokeWidth="4"
                opacity="0.4"
                strokeDasharray="10 5"
                animate={{ strokeDashoffset: [0, -15] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.line
                x1="522" y1="378" x2="378" y2="522"
                stroke="#0ff0fc"
                strokeWidth="4"
                opacity="0.4"
                strokeDasharray="10 5"
                animate={{ strokeDashoffset: [0, -15] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* I/O pins */}
              {[...Array(12)].map((_, i) => (
                <g key={`io${i}`}>
                  <rect x="145" y={220 + i * 30} width="55" height="12" rx="3" fill="#00d4aa" opacity="0.8" />
                  <rect x="600" y={220 + i * 30} width="55" height="12" rx="3" fill="#00d4aa" opacity="0.8" />
                </g>
              ))}

              {[...Array(12)].map((_, i) => (
                <g key={`iov${i}`}>
                  <rect x={220 + i * 30} y="145" width="12" height="55" rx="3" fill="#0ff0fc" opacity="0.8" />
                  <rect x={220 + i * 30} y="600" width="12" height="55" rx="3" fill="#0ff0fc" opacity="0.8" />
                </g>
              ))}

              {/* Corner alignment marks */}
              {[[200, 200], [600, 200], [200, 600], [600, 600]].map(([cx, cy], i) => (
                <motion.circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="14"
                  fill={i === 0 ? '#6366f1' : i === 1 ? '#0ff0fc' : i === 2 ? '#00d4aa' : '#f59e0b'}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, delay: i * 0.35, repeat: Infinity }}
                />
              ))}

              {/* Gradients */}
              <defs>
                <linearGradient id="veoMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="33%" stopColor="#00d4aa" />
                  <stop offset="66%" stopColor="#0ff0fc" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2.5 bg-kineton-purple/10 dark:bg-kineton-purple/10 border-2 border-kineton-purple/40 rounded-full">
              <span className="text-kineton-purple dark:text-kineton-purple text-xs font-bold tracking-section-label">HARDWARE</span>
            </div>

            <h2 className="text-6xl sm:text-7xl font-bold font-heading text-gray-900 dark:text-kineton-white leading-tight">
              VEO <span className="text-gradient">Cores</span>
            </h2>

            <h3 className="text-3xl font-semibold text-kineton-purple dark:text-kineton-purple">
              Custom silicon engineered for edge AI
            </h3>

            <p className="text-xl text-gray-700 dark:text-kineton-white/80 leading-relaxed">
              VEO is our proprietary semiconductor IP designed from the ground up for neural network inference. Optimized for the unique constraints of edge deployment: power efficiency, thermal management, and real-time performance.
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <motion.div
                    key={index}
                    className={`p-7 bg-white dark:bg-kineton-black/70 backdrop-blur-sm rounded-2xl border-2 shadow-lg transition-all duration-300 ${
                      spec.color === 'purple' ? 'border-kineton-purple/40 dark:border-kineton-purple/40' :
                      spec.color === 'cyan' ? 'border-kineton-cyan/40 dark:border-kineton-cyan/40' :
                      spec.color === 'teal' ? 'border-kineton-teal/40 dark:border-kineton-teal/40' :
                      'border-kineton-amber/40 dark:border-kineton-amber/40'
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: spec.color === 'purple' ? 'rgba(99, 102, 241, 0.8)' :
                                   spec.color === 'cyan' ? 'rgba(15, 240, 252, 0.8)' :
                                   spec.color === 'teal' ? 'rgba(0, 212, 170, 0.8)' :
                                   'rgba(245, 158, 11, 0.8)',
                      boxShadow: `0 20px 50px ${spec.color === 'purple' ? 'rgba(99, 102, 241, 0.3)' :
                                                 spec.color === 'cyan' ? 'rgba(15, 240, 252, 0.3)' :
                                                 spec.color === 'teal' ? 'rgba(0, 212, 170, 0.3)' :
                                                 'rgba(245, 158, 11, 0.3)'}`
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon className={`w-6 h-6 ${
                        spec.color === 'purple' ? 'text-kineton-purple' :
                        spec.color === 'cyan' ? 'text-kineton-cyan' :
                        spec.color === 'teal' ? 'text-kineton-teal' :
                        'text-kineton-amber'
                      }`} />
                      <div className="text-sm font-semibold text-gray-600 dark:text-kineton-white/70">{spec.label}</div>
                    </div>
                    <div className={`text-2xl font-bold ${
                      spec.color === 'purple' ? 'text-gray-900 dark:text-kineton-white' :
                      spec.color === 'cyan' ? 'text-kineton-cyan' :
                      spec.color === 'teal' ? 'text-kineton-teal' :
                      'text-kineton-amber'
                    }`}>
                      {spec.value}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VEOSection;