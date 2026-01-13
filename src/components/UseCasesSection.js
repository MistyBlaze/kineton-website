import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Plane, Bot, Watch, Network, Cloud } from 'lucide-react';

const useCases = [
  {
    icon: Plane,
    title: 'Autonomous Drones',
    description: 'Real-time object detection and path planning for commercial drone fleets',
    color: 'kineton-teal'
  },
  {
    icon: Bot,
    title: 'Robotics',
    description: 'Low-latency inference for robotic manipulation and navigation',
    color: 'kineton-cyan'
  },
  {
    icon: Watch,
    title: 'Smart Wearables',
    description: 'On-device AI for health monitoring and contextual computing',
    color: 'kineton-purple'
  },
  {
    icon: Network,
    title: 'IoT & Smart Infrastructure',
    description: 'Distributed intelligence for smart cities and industrial automation',
    color: 'kineton-teal'
  },
  {
    icon: Cloud,
    title: 'AI Companies & Hyperscalers',
    description: 'Edge inference infrastructure for AI-first products at scale',
    color: 'kineton-cyan'
  }
];

const UseCasesSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, once: true });

  return (
    <section
      id="use-cases"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-kineton-dark via-kineton-black to-kineton-dark overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kineton-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-kineton-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold font-heading text-kineton-white mb-6">
            Built for <span className="text-gradient">Performance</span>, Designed for <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-xl text-kineton-white/70 max-w-3xl mx-auto">
            From autonomous drones to hyperscale AI deployments, VEO and Lightsound power the next generation of intelligent edge applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                className="group relative p-8 bg-kineton-dark/50 backdrop-blur-sm rounded-2xl border border-kineton-teal/10 transition-all duration-500"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  borderColor: 'rgba(0, 212, 170, 0.5)',
                  boxShadow: '0 30px 60px rgba(0, 212, 170, 0.2)'
                }}
              >
                <div className="mb-6 inline-flex p-4 bg-kineton-black/50 rounded-xl border border-kineton-teal/20 group-hover:border-kineton-teal/50 transition-all duration-300">
                  <Icon className="w-8 h-8 text-kineton-teal group-hover:text-kineton-cyan transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-kineton-white mb-3 group-hover:text-kineton-teal transition-colors duration-300">
                  {useCase.title}
                </h3>
                
                <p className="text-kineton-white/70 group-hover:text-kineton-white/90 transition-colors duration-300">
                  {useCase.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-kineton-teal/5 to-kineton-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;