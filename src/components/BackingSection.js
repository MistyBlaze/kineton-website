import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useTheme } from '../contexts/ThemeContext';
import { TrendingUp, MapPin } from 'lucide-react';

const achievements = [
  { icon: TrendingUp, text: 'IIT Kanpur 5G/6G CoE Finalist', color: 'cyan' },
  { icon: MapPin, text: 'Made in India, Built for the World', color: 'amber' }
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
      className="relative py-40 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-kineton-black dark:via-kineton-darker dark:to-kineton-black overflow-hidden"
    >
      {/* Radial gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] bg-gradient-radial from-kineton-teal/8 via-kineton-purple/4 to-transparent rounded-full" />
      
      {/* Animated rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border-2 border-kineton-teal/15 dark:border-kineton-teal/15 rounded-full"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-6xl sm:text-7xl font-bold font-heading text-gray-900 dark:text-kineton-white mb-20"
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Backed by Leading <span className="text-gradient-multi">Investors</span>
        </motion.h2>

        {/* Campus Fund Logo */}
        <motion.div
          className="mb-24 flex justify-center"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.3, delay: 0.3, type: 'spring', stiffness: 80 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-10 bg-gradient-to-r from-kineton-teal/30 via-kineton-cyan/20 to-kineton-amber/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            <motion.div
              className="relative p-10 bg-white dark:bg-kineton-dark/60 backdrop-blur-sm rounded-3xl border-3 border-kineton-teal/40 dark:border-kineton-teal/40 shadow-2xl"
              whileHover={{ scale: 1.08, borderColor: 'rgba(0, 212, 170, 0.7)' }}
            >
              <motion.img
                src={campusFundLogo}
                alt="Campus Fund"
                className="relative h-32 w-auto"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                className={`p-10 bg-white dark:bg-kineton-dark/70 backdrop-blur-md rounded-3xl border-3 shadow-xl transition-all duration-300 ${
                  achievement.color === 'cyan' ? 'border-kineton-cyan/40 dark:border-kineton-cyan/40' :
                  'border-kineton-amber/40 dark:border-kineton-amber/40'
                }`}
                initial={{ opacity: 0, y: 70 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: achievement.color === 'cyan' ? 'rgba(15, 240, 252, 0.7)' : 'rgba(245, 158, 11, 0.7)',
                  boxShadow: `0 25px 60px ${achievement.color === 'cyan' ? 'rgba(15, 240, 252, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
                }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`p-5 rounded-2xl mb-6 ${
                      achievement.color === 'cyan' ? 'bg-gradient-to-br from-kineton-cyan/20 to-kineton-teal/10' :
                      'bg-gradient-to-br from-kineton-amber/20 to-kineton-gold/10'
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Icon className={`w-10 h-10 ${
                      achievement.color === 'cyan' ? 'text-kineton-cyan' : 'text-kineton-amber'
                    }`} />
                  </motion.div>
                  <p className="text-gray-900 dark:text-kineton-white font-bold text-xl text-center leading-relaxed">
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