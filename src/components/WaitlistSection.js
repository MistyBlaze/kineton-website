import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { CheckCircle2, Mail, User, Phone, Building2, MessageSquare } from 'lucide-react';

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

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-kineton-black to-kineton-dark overflow-hidden"
    >
      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-kineton-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-kineton-purple/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold font-heading text-kineton-white">
              Let's Build the <span className="text-gradient">Future Together</span>
            </h2>

            <p className="text-xl text-kineton-white/70 leading-relaxed">
              Join the waitlist to get early access to VEO Cores and Lightsound Runtime. Whether you're building autonomous drones, robotics systems, or edge AI infrastructure, we're here to power your vision.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-kineton-teal/10 rounded-lg group-hover:bg-kineton-teal/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-kineton-teal" />
                </div>
                <div>
                  <div className="text-sm text-kineton-white/60">Email</div>
                  <a href="mailto:contact@kineton.tech" className="text-kineton-white hover:text-kineton-teal transition-colors duration-300 font-medium">
                    contact@kineton.tech
                  </a>
                </div>
              </motion.div>

              <div className="pt-8 border-t border-kineton-teal/10">
                <p className="text-kineton-white/60 mb-4">Connect with us</p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="p-3 bg-kineton-dark/50 rounded-lg border border-kineton-teal/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, borderColor: 'rgba(0, 212, 170, 0.5)' }}
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-kineton-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="p-3 bg-kineton-dark/50 rounded-lg border border-kineton-teal/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, borderColor: 'rgba(0, 212, 170, 0.5)' }}
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-kineton-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="bg-kineton-dark/50 backdrop-blur-sm rounded-2xl border border-kineton-teal/20 p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {isSubmitted ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="inline-block mb-6"
                >
                  <CheckCircle2 className="w-24 h-24 text-kineton-teal" />
                </motion.div>
                <h3 className="text-3xl font-bold text-kineton-white mb-4">Thank You!</h3>
                <p className="text-kineton-white/70">
                  We've received your information and will be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="text-2xl font-bold text-kineton-white mb-6">Join the Waitlist</h3>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-kineton-white/80 mb-2">
                    Full Name <span className="text-kineton-teal">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kineton-white/40" />
                    <input
                      {...register('fullName')}
                      type="text"
                      id="fullName"
                      className="w-full pl-11 pr-4 py-3 bg-kineton-black/50 border border-kineton-teal/20 rounded-lg text-kineton-white placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-1 focus:ring-kineton-teal transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-kineton-white/80 mb-2">
                    Email Address <span className="text-kineton-teal">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kineton-white/40" />
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full pl-11 pr-4 py-3 bg-kineton-black/50 border border-kineton-teal/20 rounded-lg text-kineton-white placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-1 focus:ring-kineton-teal transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-kineton-white/80 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kineton-white/40" />
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full pl-11 pr-4 py-3 bg-kineton-black/50 border border-kineton-teal/20 rounded-lg text-kineton-white placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-1 focus:ring-kineton-teal transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-kineton-white/80 mb-2">
                    Company/Organization
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-kineton-white/40" />
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className="w-full pl-11 pr-4 py-3 bg-kineton-black/50 border border-kineton-teal/20 rounded-lg text-kineton-white placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-1 focus:ring-kineton-teal transition-all duration-300"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                {/* Use Case */}
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-kineton-white/80 mb-2">
                    Use Case Interest <span className="text-kineton-teal">*</span>
                  </label>
                  <select
                    {...register('useCase')}
                    id="useCase"
                    className="w-full px-4 py-3 bg-kineton-black/50 border border-kineton-teal/20 rounded-lg text-kineton-white focus:outline-none focus:border-kineton-teal focus:ring-1 focus:ring-kineton-teal transition-all duration-300"
                  >
                    {useCaseOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-kineton-dark">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.useCase && (
                    <p className="mt-1 text-sm text-red-400">{errors.useCase.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-kineton-white/80 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-kineton-white/40" />
                    <textarea
                      {...register('message')}
                      id="message"
                      rows="4"
                      className="w-full pl-11 pr-4 py-3 bg-kineton-black/50 border border-kineton-teal/20 rounded-lg text-kineton-white placeholder-kineton-white/40 focus:outline-none focus:border-kineton-teal focus:ring-1 focus:ring-kineton-teal transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-kineton-teal text-kineton-black font-bold rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 212, 170, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join the Waitlist
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
