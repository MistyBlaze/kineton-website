import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const TechnologySection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, once: true });

  const codeExample = `from lightsound import Engine, Model

# Initialize engine with VEO device
engine = Engine(device="veo")
model = Model.load("llama-7b", quantization="int8")

# Optimized inference with PagedAttention
response = engine.generate(
    model=model,
    prompt="Describe edge computing",
    max_tokens=256
)`;

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-kineton-dark via-kineton-black to-kineton-darker dark:from-kineton-dark dark:via-kineton-black dark:to-kineton-darker overflow-hidden"
    >
      {/* Light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:opacity-0 opacity-100" />
      
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient accents */}
      <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-gradient-to-r from-kineton-cyan/12 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-l from-kineton-purple/12 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl sm:text-7xl font-bold font-heading text-gray-900 dark:text-kineton-white mb-8 leading-tight">
            Built for <span className="text-gradient">Performance</span>,<br />Designed for <span className="text-gradient-warm">Developers</span>
          </h2>
          <p className="text-2xl text-gray-700 dark:text-kineton-white/80 max-w-4xl mx-auto leading-relaxed">
            A two-layer architecture seamlessly integrating from custom silicon to optimized runtime
          </p>
        </motion.div>

        {/* 2-Layer Architecture Stack */}
        <div className="max-w-5xl mx-auto mb-24 space-y-10">
          {/* Layer 1: Lightsound Runtime */}
          <motion.div
            className="p-12 bg-white dark:bg-gradient-to-br dark:from-kineton-cyan/15 dark:to-kineton-teal/10 backdrop-blur-md border-3 border-kineton-cyan/50 dark:border-kineton-cyan/50 rounded-3xl shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: -150, rotate: -3 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, type: 'spring' }}
            whileHover={{
              borderColor: 'rgba(15, 240, 252, 0.8)',
              boxShadow: '0 30px 70px rgba(15, 240, 252, 0.3)',
              scale: 1.02
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="inline-block px-5 py-2 bg-kineton-cyan/15 dark:bg-kineton-cyan/20 border-2 border-kineton-cyan/50 rounded-full mb-5">
                  <span className="text-kineton-cyan dark:text-kineton-cyan text-xs font-bold tracking-section-label">LAYER 1: MIDDLEWARE</span>
                </div>
                <h3 className="text-5xl font-bold font-heading text-gray-900 dark:text-kineton-white mb-4">
                  Lightsound <span className="text-kineton-cyan">Runtime</span>
                </h3>
                <p className="text-gray-700 dark:text-kineton-white/80 text-xl leading-relaxed">
                  Inference optimization, PyTorch integration, custom CUDA kernels, and quantization pipeline
                </p>
              </div>
              <div className="hidden lg:flex w-28 h-28 bg-kineton-cyan/20 dark:bg-kineton-cyan/20 rounded-3xl items-center justify-center border-3 border-kineton-cyan/60 ml-10">
                <span className="text-kineton-cyan dark:text-kineton-cyan text-5xl font-bold">1</span>
              </div>
            </div>
          </motion.div>

          {/* Connection visual */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="w-1.5 h-20 bg-gradient-to-b from-kineton-cyan via-kineton-teal to-kineton-purple rounded-full"
                animate={{ scaleY: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-5 h-5 bg-kineton-teal rounded-full border-2 border-kineton-cyan"
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Layer 2: VEO Cores */}
          <motion.div
            className="p-12 bg-white dark:bg-gradient-to-br dark:from-kineton-purple/15 dark:to-kineton-amber/10 backdrop-blur-md border-3 border-kineton-purple/50 dark:border-kineton-purple/50 rounded-3xl shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, x: 150, rotate: 3 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.8, type: 'spring' }}
            whileHover={{
              borderColor: 'rgba(99, 102, 241, 0.8)',
              boxShadow: '0 30px 70px rgba(99, 102, 241, 0.3)',
              scale: 1.02
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="inline-block px-5 py-2 bg-kineton-purple/15 dark:bg-kineton-purple/20 border-2 border-kineton-purple/50 rounded-full mb-5">
                  <span className="text-kineton-purple dark:text-kineton-purple text-xs font-bold tracking-section-label">LAYER 2: SILICON</span>
                </div>
                <h3 className="text-5xl font-bold font-heading text-gray-900 dark:text-kineton-white mb-4">
                  VEO <span className="text-kineton-purple">Cores</span>
                </h3>
                <p className="text-gray-700 dark:text-kineton-white/80 text-xl leading-relaxed">
                  Custom RISC-V neural processing units, hardware acceleration, HBM integration, and PCIe Gen4 interfaces
                </p>
              </div>
              <div className="hidden lg:flex w-28 h-28 bg-kineton-purple/20 dark:bg-kineton-purple/20 rounded-3xl items-center justify-center border-3 border-kineton-purple/60 ml-10">
                <span className="text-kineton-purple dark:text-kineton-purple text-5xl font-bold">2</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code Example */}
        <motion.div
          className="mt-24 bg-white dark:bg-kineton-dark/80 backdrop-blur-sm rounded-3xl border-2 border-kineton-teal/40 dark:border-kineton-teal/40 p-12 shadow-2xl"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.2 }}
        >
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-4xl font-bold font-heading text-gray-900 dark:text-kineton-white">
              Developer <span className="text-gradient">Experience</span>
            </h3>
            <div className="flex space-x-2.5">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div className="w-4 h-4 rounded-full bg-green-500" />
            </div>
          </div>
          
          <div className="font-mono text-base bg-gray-900 dark:bg-kineton-black/90 rounded-2xl p-10 border-2 border-gray-800 dark:border-kineton-teal/20">
            {codeExample.split('\n').map((line, index) => (
              <motion.div
                key={index}
                className="leading-loose"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 1.4 + index * 0.04 }}
              >
                {line.startsWith('#') ? (
                  <span className="text-gray-500">{line}</span>
                ) : line.includes('from') || line.includes('import') ? (
                  <span>
                    <span className="text-purple-400">from</span>
                    <span className="text-white"> lightsound </span>
                    <span className="text-purple-400">import</span>
                    <span className="text-cyan-300"> Engine, Model</span>
                  </span>
                ) : line.includes('Engine') ? (
                  <span className="text-white">
                    engine = <span className="text-teal-400">Engine</span>(device=<span className="text-amber-400">"veo"</span>)
                  </span>
                ) : line.includes('Model.load') ? (
                  <span className="text-white">
                    model = Model.<span className="text-teal-400">load</span>(<span className="text-amber-400">"llama-7b"</span>, quantization=<span className="text-amber-400">"int8"</span>)
                  </span>
                ) : line.includes('generate') ? (
                  <span className="text-white">
                    response = engine.<span className="text-cyan-300">generate</span>(
                  </span>
                ) : line.includes('"') ? (
                  <span className="text-gray-400">{line}</span>
                ) : (
                  <span className="text-gray-300">{line}</span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-5">
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-kineton-teal to-kineton-cyan text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(0, 212, 170, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Documentation
            </motion.button>
            <motion.button
              className="px-10 py-4 border-3 border-kineton-teal dark:border-kineton-teal text-kineton-teal dark:text-kineton-teal font-bold text-lg rounded-xl transition-all duration-300 bg-white/50 dark:bg-transparent"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 212, 170, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              API Reference
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;