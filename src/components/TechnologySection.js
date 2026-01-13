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
      className="relative py-32 bg-gradient-to-b from-kineton-dark to-kineton-black overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold font-heading text-kineton-white mb-6">
            Built for <span className="text-gradient">Performance</span>, Designed for <span className="text-gradient">Developers</span>
          </h2>
          <p className="text-xl text-kineton-white/70 max-w-3xl mx-auto">
            A three-layer architecture that seamlessly integrates from silicon to orchestration
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="mb-16 space-y-6">
          <motion.div
            className="p-8 bg-kineton-purple/10 border border-kineton-purple/30 rounded-xl transition-all duration-300"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ borderColor: 'rgba(99, 102, 241, 0.6)' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-kineton-purple font-semibold mb-2">LAYER 1: ORCHESTRATION</div>
                <h3 className="text-3xl font-bold text-kineton-white mb-2">Fabric Intelligence</h3>
                <p className="text-kineton-white/70">Multi-device coordination and workload distribution</p>
              </div>
              <div className="hidden md:flex w-16 h-16 bg-kineton-purple/20 rounded-full items-center justify-center border-2 border-kineton-purple/50">
                <span className="text-kineton-purple text-2xl font-bold">1</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-8 bg-kineton-cyan/10 border border-kineton-cyan/30 rounded-xl transition-all duration-300"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ borderColor: 'rgba(15, 240, 252, 0.6)' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-kineton-cyan font-semibold mb-2">LAYER 2: MIDDLEWARE</div>
                <h3 className="text-3xl font-bold text-kineton-white mb-2">Lightsound Runtime</h3>
                <p className="text-kineton-white/70">Inference optimization and framework integration</p>
              </div>
              <div className="hidden md:flex w-16 h-16 bg-kineton-cyan/20 rounded-full items-center justify-center border-2 border-kineton-cyan/50">
                <span className="text-kineton-cyan text-2xl font-bold">2</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="p-8 bg-kineton-teal/10 border border-kineton-teal/30 rounded-xl transition-all duration-300"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ borderColor: 'rgba(0, 212, 170, 0.6)' }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-kineton-teal font-semibold mb-2">LAYER 3: SILICON</div>
                <h3 className="text-3xl font-bold text-kineton-white mb-2">VEO Cores</h3>
                <p className="text-kineton-white/70">Custom neural processing hardware</p>
              </div>
              <div className="hidden md:flex w-16 h-16 bg-kineton-teal/20 rounded-full items-center justify-center border-2 border-kineton-teal/50">
                <span className="text-kineton-teal text-2xl font-bold">3</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code Example */}
        <motion.div
          className="bg-kineton-dark/80 rounded-2xl border border-kineton-teal/20 p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-kineton-white mb-6">Developer Experience</h3>
          
          <div className="font-mono text-sm bg-kineton-black/80 rounded-xl p-6 overflow-x-auto">
            {codeExample.split('\n').map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
              >
                {line.startsWith('#') ? (
                  <span className="text-kineton-white/50">{line}</span>
                ) : line.includes('from') || line.includes('import') ? (
                  <span>
                    <span className="text-kineton-purple">from</span>
                    <span className="text-kineton-white"> lightsound </span>
                    <span className="text-kineton-purple">import</span>
                    <span className="text-kineton-cyan"> Engine, Model</span>
                  </span>
                ) : line.includes('=') ? (
                  <span className="text-kineton-white">{line}</span>
                ) : line.includes('"') ? (
                  <span className="text-kineton-cyan">{line}</span>
                ) : (
                  <span className="text-kineton-white/80">{line}</span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <motion.button
              className="px-6 py-2 bg-kineton-teal text-kineton-black font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 212, 170, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Documentation
            </motion.button>
            <motion.button
              className="px-6 py-2 border border-kineton-teal text-kineton-teal font-semibold rounded-lg transition-all duration-300"
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