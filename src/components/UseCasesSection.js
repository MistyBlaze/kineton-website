import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Plane, Bot, Watch, Network, Cloud } from 'lucide-react';

const useCases = [
  { icon: Plane, title: 'Autonomous Drones', description: 'Real-time object detection and path planning for commercial drone fleets', color: 'teal' },
  { icon: Bot, title: 'Robotics', description: 'Low-latency inference for robotic manipulation and navigation', color: 'cyan' },
  { icon: Watch, title: 'Smart Wearables', description: 'On-device AI for health monitoring and contextual computing', color: 'purple' },
  { icon: Network, title: 'IoT & Smart Infrastructure', description: 'Distributed intelligence for smart cities and industrial automation', color: 'amber' },
  { icon: Cloud, title: 'AI Companies & Hyperscalers', description: 'Edge inference infrastructure for AI-first products at scale', color: 'teal' }
];

const UseCasesSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, once: true });

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-kineton-dark dark:via-kineton-black dark:to-kineton-dark overflow-hidden"
    >
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-kineton-teal/10 rounded-full blur-[100px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-kineton-amber/10 rounded-full blur-[100px]"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl sm:text-7xl font-bold font-heading text-gray-900 dark:text-kineton-white mb-8 leading-tight">
            Powering <span className="text-gradient-multi">Innovation</span><br/>Across Industries
          </h2>
          <p className="text-2xl text-gray-700 dark:text-kineton-white/80 max-w-4xl mx-auto leading-relaxed">
            From autonomous drones to hyperscale AI deployments, VEO and Lightsound power intelligent edge applications
          </p>
        </motion.div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <motion.div
                key={index}
                className={`group relative p-10 bg-white dark:bg-kineton-dark/70 backdrop-blur-sm rounded-3xl border-2 shadow-xl transition-all duration-500 ${
                  useCase.color === 'teal' ? 'border-kineton-teal/30 dark:border-kineton-teal/30' :
                  useCase.color === 'cyan' ? 'border-kineton-cyan/30 dark:border-kineton-cyan/30' :
                  useCase.color === 'purple' ? 'border-kineton-purple/30 dark:border-kineton-purple/30' :
                  'border-kineton-amber/30 dark:border-kineton-amber/30'
                }`}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.12,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  borderColor: useCase.color === 'teal' ? 'rgba(0, 212, 170, 0.8)' :
                               useCase.color === 'cyan' ? 'rgba(15, 240, 252, 0.8)' :
                               useCase.color === 'purple' ? 'rgba(99, 102, 241, 0.8)' :
                               'rgba(245, 158, 11, 0.8)',
                  boxShadow: `0 35px 80px ${useCase.color === 'teal' ? 'rgba(0, 212, 170, 0.3)' :
                                            useCase.color === 'cyan' ? 'rgba(15, 240, 252, 0.3)' :
                                            useCase.color === 'purple' ? 'rgba(99, 102, 241, 0.3)' :
                                            'rgba(245, 158, 11, 0.3)'}`
                }}
              >
                {/* Icon with premium treatment */}
                <motion.div
                  className={`mb-7 inline-flex p-6 rounded-2xl border-2 transition-all duration-300 ${
                    useCase.color === 'teal' ? 'bg-gradient-to-br from-kineton-teal/15 to-kineton-cyan/5 border-kineton-teal/40' :
                    useCase.color === 'cyan' ? 'bg-gradient-to-br from-kineton-cyan/15 to-kineton-purple/5 border-kineton-cyan/40' :
                    useCase.color === 'purple' ? 'bg-gradient-to-br from-kineton-purple/15 to-kineton-teal/5 border-kineton-purple/40' :
                    'bg-gradient-to-br from-kineton-amber/15 to-kineton-gold/5 border-kineton-amber/40'
                  }`}
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className={`w-12 h-12 transition-all duration-300 ${
                    useCase.color === 'teal' ? 'text-kineton-teal' :
                    useCase.color === 'cyan' ? 'text-kineton-cyan' :
                    useCase.color === 'purple' ? 'text-kineton-purple' :
                    'text-kineton-amber'
                  }`} />
                </motion.div>

                <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                  useCase.color === 'teal' ? 'text-gray-900 dark:text-kineton-white group-hover:text-kineton-teal dark:group-hover:text-kineton-teal' :
                  useCase.color === 'cyan' ? 'text-gray-900 dark:text-kineton-white group-hover:text-kineton-cyan dark:group-hover:text-kineton-cyan' :
                  useCase.color === 'purple' ? 'text-gray-900 dark:text-kineton-white group-hover:text-kineton-purple dark:group-hover:text-kineton-purple' :
                  'text-gray-900 dark:text-kineton-white group-hover:text-kineton-amber dark:group-hover:text-kineton-amber'
                }`}>
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 dark:text-kineton-white/70 group-hover:text-gray-800 dark:group-hover:text-kineton-white/90 transition-colors duration-300 leading-relaxed text-lg">
                  {useCase.description}
                </p>

                {/* Decorative accent */}
                <div className={`absolute top-5 right-5 w-20 h-20 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-2xl ${
                  useCase.color === 'teal' ? 'bg-kineton-teal' :
                  useCase.color === 'cyan' ? 'bg-kineton-cyan' :
                  useCase.color === 'purple' ? 'bg-kineton-purple' :
                  'bg-kineton-amber'
                }`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;