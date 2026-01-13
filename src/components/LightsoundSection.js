import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const features = [
  {
    title: 'PagedAttention Architecture',
    description: 'Memory-efficient inference with dynamic KV-cache management',
    color: 'kineton-teal'
  },
  {
    title: 'PyTorch Native Integration',
    description: 'Drop-in compatibility with existing ML workflows',
    color: 'kineton-cyan'
  },
  {
    title: 'Custom CUDA Kernels',
    description: 'Hand-optimized compute paths for maximum throughput',
    color: 'kineton-purple'
  },
  {
    title: 'Quantization Pipeline',
    description: 'INT4/INT8/FP16 support with accuracy-preserving calibration',
    color: 'kineton-teal'
  },
  {
    title: 'Distributed Orchestration',
    description: 'Fabric Intelligence layer for multi-device coordination',
    color: 'kineton-cyan'
  }
];

const LightsoundSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, once: true });

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-kineton-dark to-kineton-black overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00d4aa 1px, transparent 1px), linear-gradient(90deg, #00d4aa 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Product Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-kineton-teal/10 border border-kineton-teal/30 rounded-full">
              <span className="text-kineton-teal text-sm font-semibold tracking-wider">SOFTWARE</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold font-heading text-kineton-white">
              Lightsound Runtime
            </h2>

            <h3 className="text-2xl sm:text-3xl font-medium text-kineton-teal">
              High-performance middleware for ML model execution at the edge
            </h3>

            <p className="text-lg text-kineton-white/70 leading-relaxed">
              Lightsound is our inference optimization layer that bridges the gap between ML frameworks and custom silicon. Built for developers who need predictable latency, minimal memory footprint, and seamless deployment across heterogeneous edge environments.
            </p>

            {/* Code visualization */}
            <motion.div
              className="relative mt-8 p-6 bg-kineton-black/80 rounded-lg border border-kineton-teal/20 font-mono text-sm overflow-x-auto"
              whileHover={{ borderColor: 'rgba(0, 212, 170, 0.5)' }}
            >
              <div className="space-y-2 text-kineton-white/80">
                <div><span className="text-kineton-purple">from</span> <span className="text-kineton-cyan">lightsound</span> <span className="text-kineton-purple">import</span> Engine, Model</div>
                <div className="mt-4"><span className="text-kineton-white/60"># Initialize engine</span></div>
                <div>engine = <span className="text-kineton-teal">Engine</span>(device=<span className="text-kineton-cyan">"veo"</span>)</div>
                <div>model = Model.<span className="text-kineton-teal">load</span>(<span className="text-kineton-cyan">"llama-7b"</span>)</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-kineton-dark/50 backdrop-blur-sm rounded-xl border border-kineton-teal/10 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(0, 212, 170, 0.5)',
                  boxShadow: '0 20px 40px rgba(0, 212, 170, 0.2)'
                }}
              >
                <h4 className="text-xl font-bold text-kineton-white mb-2 group-hover:text-kineton-teal transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-kineton-white/60 group-hover:text-kineton-white/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightsoundSection;