import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-kineton-black dark:bg-kineton-black border-t-2 border-kineton-teal/20">
      {/* Subtle gradient glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-kineton-teal to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://customer-assets.emergentagent.com/job_86dc4720-2b0c-48d9-9786-1af1640c2f69/artifacts/hhk6lue0_logofile.png"
                alt="Kineton Technologies"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold font-heading text-gradient">KINETON</span>
            </motion.div>
            <p className="text-kineton-white/70 dark:text-kineton-white/60 max-w-md leading-relaxed text-lg">
              Vertically integrated AI infrastructure for the edge. Powering the next generation of autonomous systems and intelligent devices.
            </p>
            <p className="text-kineton-teal dark:text-kineton-teal font-semibold mt-4 text-sm tracking-wide">
              AI Infrastructure for the Edge
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-kineton-white dark:text-kineton-white font-bold text-lg mb-5">Navigation</h4>
            <ul className="space-y-3">
              {['products', 'use-cases', 'technology', 'backing', 'waitlist'].map((section, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-kineton-white/70 dark:text-kineton-white/60 hover:text-kineton-teal dark:hover:text-kineton-teal transition-colors duration-300 font-medium"
                  >
                    {section === 'products' ? 'Products' :
                     section === 'use-cases' ? 'Solutions' :
                     section === 'technology' ? 'Documentation' :
                     section === 'backing' ? 'Company' : 'Contact'}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-kineton-white dark:text-kineton-white font-bold text-lg mb-5">Legal</h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-kineton-white/70 dark:text-kineton-white/60 hover:text-kineton-teal dark:hover:text-kineton-teal transition-colors duration-300 font-medium">
                  Privacy Policy
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a href="#" className="text-kineton-white/70 dark:text-kineton-white/60 hover:text-kineton-teal dark:hover:text-kineton-teal transition-colors duration-300 font-medium">
                  Terms of Service
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-kineton-teal/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-kineton-white/50 dark:text-kineton-white/40 text-sm font-medium">
              © 2025 Kineton Technologies. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="#"
                className="p-3 text-kineton-white/50 dark:text-kineton-white/40 hover:text-kineton-teal dark:hover:text-kineton-teal transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="p-3 text-kineton-white/50 dark:text-kineton-white/40 hover:text-kineton-teal dark:hover:text-kineton-teal transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;