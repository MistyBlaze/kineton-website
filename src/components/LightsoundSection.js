import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const features = [
  {
    title: 'PagedAttention Architecture',
    description: 'Memory-efficient inference with dynamic KV-cache management',
    color: 'teal'
  },
  {
    title: 'PyTorch Native Integration',
    description: 'Drop-in compatibility with existing ML workflows',
    color: 'cyan'
  },
  {
    title: 'Custom CUDA Kernels',
    description: 'Hand-optimized compute paths for maximum throughput',
    color: 'purple'
  },
  {
    title: 'Quantization Pipeline',
    description: 'INT4/INT8/FP16 support with accuracy-preserving calibration',
    color: 'amber'
  }
];

const LightsoundSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, once: true });

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-kineton-dark dark:via-kineton-black dark:to-kineton-dark overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-kineton-teal/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Product Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2.5 bg-kineton-teal/10 dark:bg-kineton-teal/10 border-2 border-kineton-teal/40 rounded-full">
              <span className="text-kineton-teal dark:text-kineton-teal text-xs font-bold tracking-section-label">SOFTWARE</span>
            </div>

            <h2 className="text-6xl sm:text-7xl font-bold font-heading text-gray-900 dark:text-kineton-white leading-tight">
              Lightsound <span className="text-gradient">Runtime</span>
            </h2>

            <h3 className="text-3xl font-semibold text-kineton-teal dark:text-kineton-teal">
              High-performance middleware for ML model execution at the edge
            </h3>

            <p className="text-xl text-gray-700 dark:text-kineton-white/80 leading-relaxed">
              Lightsound is our inference optimization layer that bridges the gap between ML frameworks and custom silicon. Built for developers who need predictable latency, minimal memory footprint, and seamless deployment across heterogeneous edge environments.
            </p>

            {/* Code visualization */}
            <motion.div
              className="relative mt-10 p-8 bg-gray-900 dark:bg-kineton-black/90 rounded-2xl border-2 border-kineton-teal/30 font-mono text-base shadow-xl"
              whileHover={{ borderColor: 'rgba(0, 212, 170, 0.7)', boxShadow: '0 20px 60px rgba(0, 212, 170, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2.5">
                <div><span className="text-purple-400">from</span> <span className="text-cyan-300">lightsound</span> <span className="text-purple-400">import</span> <span className="text-white">Engine, Model</span></div>
                <div className="mt-4"><span className="text-gray-500"># Initialize with VEO device</span></div>
                <div><span className="text-white">engine =</span> <span className="text-teal-400">Engine</span><span className="text-white">(device=</span><span className="text-amber-400">"veo"</span><span className="text-white">)</span></div>
                <div><span className="text-white">model = Model.</span><span className="text-teal-400">load</span><span className="text-white">(</span><span className="text-amber-400">"llama-7b"</span><span className="text-white">)</span></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`group p-8 bg-white dark:bg-kineton-dark/60 backdrop-blur-sm rounded-2xl border-2 shadow-lg transition-all duration-500 ${
                  feature.color === 'teal' ? 'border-kineton-teal/30 dark:border-kineton-teal/30' :
                  feature.color === 'cyan' ? 'border-kineton-cyan/30 dark:border-kineton-cyan/30' :
                  feature.color === 'purple' ? 'border-kineton-purple/30 dark:border-kineton-purple/30' :
                  'border-kineton-amber/30 dark:border-kineton-amber/30'
                }`}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: feature.color === 'teal' ? 'rgba(0, 212, 170, 0.8)' :
                               feature.color === 'cyan' ? 'rgba(15, 240, 252, 0.8)' :
                               feature.color === 'purple' ? 'rgba(99, 102, 241, 0.8)' :
                               'rgba(245, 158, 11, 0.8)',
                  boxShadow: `0 20px 60px ${feature.color === 'teal' ? 'rgba(0, 212, 170, 0.3)' :
                                            feature.color === 'cyan' ? 'rgba(15, 240, 252, 0.3)' :
                                            feature.color === 'purple' ? 'rgba(99, 102, 241, 0.3)' :
                                            'rgba(245, 158, 11, 0.3)'}`
                }}
              >
                <div className={`mb-4 inline-flex p-3 rounded-xl ${
                  feature.color === 'teal' ? 'bg-kineton-teal/10' :
                  feature.color === 'cyan' ? 'bg-kineton-cyan/10' :
                  feature.color === 'purple' ? 'bg-kineton-purple/10' :
                  'bg-kineton-amber/10'
                }`}>
                  <div className={`w-4 h-4 rounded-full ${
                    feature.color === 'teal' ? 'bg-kineton-teal' :
                    feature.color === 'cyan' ? 'bg-kineton-cyan' :
                    feature.color === 'purple' ? 'bg-kineton-purple' :
                    'bg-kineton-amber'
                  } group-hover:scale-150 transition-transform duration-300`} />
                </div>
                <h4 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                  feature.color === 'teal' ? 'text-gray-900 dark:text-kineton-white group-hover:text-kineton-teal dark:group-hover:text-kineton-teal' :
                  feature.color === 'cyan' ? 'text-gray-900 dark:text-kineton-white group-hover:text-kineton-cyan dark:group-hover:text-kineton-cyan' :
                  feature.color === 'purple' ? 'text-gray-900 dark:text-kineton-white group-hover:text-kineton-purple dark:group-hover:text-kineton-purple' :
                  'text-gray-900 dark:text-kineton-white group-hover:text-kineton-amber dark:group-hover:text-kineton-amber'
                }`}>
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-kineton-white/70 group-hover:text-gray-800 dark:group-hover:text-kineton-white/90 transition-colors duration-300 text-lg leading-relaxed">
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