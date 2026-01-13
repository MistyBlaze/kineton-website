import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useTheme } from '../contexts/ThemeContext';
import { Award, TrendingUp, MapPin } from 'lucide-react';

const achievements = [
  { icon: Award, text: 'MeitY TIDE 2.0 Funded' },
  { icon: TrendingUp, text: 'IIT Kanpur 5G/6G CoE Finalist' },
  { icon: MapPin, text: 'Made in India, Built for the World' }
];

const BackingSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.3, once: true });
  const { theme } = useTheme();

  const campusFundLogo = theme === 'dark'
    ? 'https://customer-assets.emergentagent.com/job_86dc4720-2b0c-48d9-9786-1af1640c2f69/artifacts/cxul7i8k_campusFundBlack.png'
    : 'https://customer-assets.emergentagent.com/job_86dc4720-2b0c-48d9-9786-1af1640c2f69/artifacts/emavpk2w_campusFundWhite.png';

  return (
    <section
      id="backing"
      ref={sectionRef}
      className="relative py-32 bg-kineton-black overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kineton-teal/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-5xl sm:text-6xl font-bold font-heading text-kineton-white mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Backed by Leading <span className="text-gradient">Investors</span>
        </motion.h2>

        {/* Campus Fund Logo */}
        <motion.div
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-kineton-teal/20 blur-2xl rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.img
              src={campusFundLogo}
              alt="Campus Fund"
              className="relative h-24 w-auto"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </motion.div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                className="p-6 bg-kineton-dark/50 backdrop-blur-sm rounded-xl border border-kineton-teal/20 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(0, 212, 170, 0.5)'
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-kineton-teal/10 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-kineton-teal" />
                  </div>
                  <p className="text-kineton-white font-semibold text-center">
                    {achievement.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BackingSection;