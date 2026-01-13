import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { CheckCircle2, Mail, User, Phone, Building2, MessageSquare, Sparkles } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  useCase: z.string().min(1, 'Please select a use case'),
  message: z.string().optional()
});

const useCaseOptions = [
  { value: '', label: 'Select use case...' },
  { value: 'drones', label: 'Autonomous Drones' },
  { value: 'robotics', label: 'Robotics' },
  { value: 'wearables', label: 'Smart Wearables' },
  { value: 'iot', label: 'IoT & Smart Infrastructure' },
  { value: 'enterprise', label: 'AI Companies & Hyperscalers' },
  { value: 'other', label: 'Other' }
];

const WaitlistSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.2, once: true });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-br from-kineton-darker via-kineton-black to-kineton-dark dark:from-kineton-darker dark:via-kineton-black dark:to-kineton-dark overflow-hidden"
    >
      {/* Light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:opacity-0 opacity-100" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-kineton-teal/12 rounded-full blur-[130px]"
        animate={{ x: [0, 120, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-kineton-amber/12 rounded-full blur-[130px]"
        animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left: Contact Info */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div>
              <motion.div
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-kineton-teal/15 dark:bg-kineton-teal/15 border-2 border-kineton-teal/40 rounded-full mb-8"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-5 h-5 text-kineton-teal" />
                <span className="text-kineton-teal dark:text-kineton-teal text-sm font-bold">Get Early Access</span>
              </motion.div>
              
              <h2 className="text-6xl sm:text-7xl font-bold font-heading text-gray-900 dark:text-kineton-white leading-tight">
                Let's Build the <span className="text-gradient-multi">Future</span> Together
              </h2>
            </div>

            <p className="text-2xl text-gray-700 dark:text-kineton-white/80 leading-relaxed">
              Join the waitlist for early access to VEO Cores and Lightsound Runtime. Whether you're building autonomous drones, robotics systems, or edge AI infrastructure, we're here to power your vision.
            </p>

            <div className="space-y-8 pt-6">
              <motion.div
                className="flex items-center space-x-6 group"
                whileHover={{ x: 12 }}
              >
                <div className="p-5 bg-gradient-to-br from-kineton-teal/20 to-kineton-cyan/10 dark:from-kineton-teal/20 dark:to-kineton-cyan/10 rounded-2xl border-2 border-kineton-teal/40 group-hover:border-kineton-teal/70 transition-all duration-300 shadow-lg">
                  <Mail className="w-8 h-8 text-kineton-teal dark:text-kineton-teal" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-kineton-white/60 mb-1 font-semibold">Email us at</div>
                  <a href="mailto:contact@kineton.tech" className="text-2xl text-gray-900 dark:text-kineton-white hover:text-kineton-teal dark:hover:text-kineton-teal transition-colors duration-300 font-bold">
                    contact@kineton.tech
                  </a>
                </div>
              </motion.div>

              <div className="pt-8 border-t-2 border-gray-300 dark:border-kineton-teal/20">
                <p className="text-gray-700 dark:text-kineton-white/70 mb-6 font-semibold text-lg">Connect with us</p>
                <div className="flex space-x-5">
                  <motion.a
                    href="#"
                    className="p-5 bg-white dark:bg-kineton-dark/70 backdrop-blur-sm rounded-2xl border-2 border-kineton-teal/30 dark:border-kineton-teal/30 shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.2, borderColor: 'rgba(0, 212, 170, 0.7)', boxShadow: '0 15px 40px rgba(0, 212, 170, 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-7 h-7 text-kineton-teal dark:text-kineton-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-5 bg-white dark:bg-kineton-dark/70 backdrop-blur-sm rounded-2xl border-2 border-kineton-cyan/30 dark:border-kineton-cyan/30 shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.2, borderColor: 'rgba(15, 240, 252, 0.7)', boxShadow: '0 15px 40px rgba(15, 240, 252, 0.4)' }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Twitter"
                  >
                    <svg className="w-7 h-7 text-kineton-cyan dark:text-kineton-cyan" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Form */}
          <motion.div
            className="bg-white dark:bg-kineton-dark/80 backdrop-blur-md rounded-3xl border-3 border-kineton-teal/40 dark:border-kineton-teal/40 p-12 shadow-2xl"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
                  className="inline-block mb-10"
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-kineton-teal/40 dark:bg-kineton-teal/40 rounded-full blur-3xl"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <CheckCircle2 className="relative w-36 h-36 text-kineton-teal dark:text-kineton-teal" />
                  </div>
                </motion.div>
                <h3 className="text-5xl font-bold text-gray-900 dark:text-kineton-white mb-5">Thank You!</h3>
                <p className="text-gray-700 dark:text-kineton-white/80 text-xl">
                  We've received your information and will be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <h3 className="text-4xl font-bold font-heading text-gray-900 dark:text-kineton-white mb-10">
                  Join the <span className="text-gradient">Waitlist</span>
                </h3>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-base font-bold text-gray-800 dark:text-kineton-white/90 mb-3">
                    Full Name <span className="text-kineton-teal">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-kineton-white/40" />
                    <input
                      {...register('fullName')}
                      type="text"
                      id="fullName"
                      className="w-full pl-13 pr-4 py-4 bg-gray-50 dark:bg-kineton-black/60 border-2 border-gray-300 dark:border-kineton-teal/20 rounded-xl text-gray-900 dark:text-kineton-white placeholder-gray-400 dark:placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-2 focus:ring-kineton-teal/30 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <motion.p
                      className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center space-x-1 font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span>⚠️</span>
                      <span>{errors.fullName.message}</span>
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-base font-bold text-gray-800 dark:text-kineton-white/90 mb-3">
                    Email Address <span className="text-kineton-teal">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-kineton-white/40" />
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full pl-13 pr-4 py-4 bg-gray-50 dark:bg-kineton-black/60 border-2 border-gray-300 dark:border-kineton-teal/20 rounded-xl text-gray-900 dark:text-kineton-white placeholder-gray-400 dark:placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-2 focus:ring-kineton-teal/30 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <motion.p
                      className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center space-x-1 font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span>⚠️</span>
                      <span>{errors.email.message}</span>
                    </motion.p>
                  )}
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-base font-bold text-gray-800 dark:text-kineton-white/90 mb-3">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-kineton-white/40" />
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className="w-full pl-13 pr-4 py-4 bg-gray-50 dark:bg-kineton-black/60 border-2 border-gray-300 dark:border-kineton-teal/20 rounded-xl text-gray-900 dark:text-kineton-white placeholder-gray-400 dark:placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-2 focus:ring-kineton-teal/30 transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-base font-bold text-gray-800 dark:text-kineton-white/90 mb-3">
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-kineton-white/40" />
                      <input
                        {...register('company')}
                        type="text"
                        id="company"
                        className="w-full pl-13 pr-4 py-4 bg-gray-50 dark:bg-kineton-black/60 border-2 border-gray-300 dark:border-kineton-teal/20 rounded-xl text-gray-900 dark:text-kineton-white placeholder-gray-400 dark:placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-2 focus:ring-kineton-teal/30 transition-all duration-300"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>
                </div>

                {/* Use Case */}
                <div>
                  <label htmlFor="useCase" className="block text-base font-bold text-gray-800 dark:text-kineton-white/90 mb-3">
                    Use Case Interest <span className="text-kineton-teal">*</span>
                  </label>
                  <select
                    {...register('useCase')}
                    id="useCase"
                    className="w-full px-4 py-4 bg-gray-50 dark:bg-kineton-black/60 border-2 border-gray-300 dark:border-kineton-teal/20 rounded-xl text-gray-900 dark:text-kineton-white focus:outline-none focus:border-kineton-teal focus:ring-2 focus:ring-kineton-teal/30 transition-all duration-300"
                  >
                    {useCaseOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-white dark:bg-kineton-darker">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.useCase && (
                    <motion.p
                      className="mt-2 text-sm text-red-500 dark:text-red-400 flex items-center space-x-1 font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span>⚠️</span>
                      <span>{errors.useCase.message}</span>
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-base font-bold text-gray-800 dark:text-kineton-white/90 mb-3">
                    Tell us about your project
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 dark:text-kineton-white/40" />
                    <textarea
                      {...register('message')}
                      id="message"
                      rows="5"
                      className="w-full pl-13 pr-4 py-4 bg-gray-50 dark:bg-kineton-black/60 border-2 border-gray-300 dark:border-kineton-teal/20 rounded-xl text-gray-900 dark:text-kineton-white placeholder-gray-400 dark:placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-2 focus:ring-kineton-teal/30 transition-all duration-300 resize-none"
                      placeholder="I'm building autonomous systems and need edge AI..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-6 bg-gradient-to-r from-kineton-teal via-kineton-cyan to-kineton-teal text-white font-bold text-xl rounded-2xl shadow-xl transition-all duration-300"
                  style={{ backgroundSize: '200% auto' }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: '0 30px 60px rgba(0, 212, 170, 0.5)',
                    backgroundPosition: 'right center'
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Join the Waitlist →
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;