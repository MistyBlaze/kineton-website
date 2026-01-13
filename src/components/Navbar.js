import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-kineton-black/95 backdrop-blur-md shadow-lg border-b border-kineton-teal/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Name */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://customer-assets.emergentagent.com/job_86dc4720-2b0c-48d9-9786-1af1640c2f69/artifacts/hhk6lue0_logofile.png"
              alt="Kineton Technologies"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold font-heading text-gray-900 dark:text-kineton-white group-hover:text-gradient transition-all duration-300">
              KINETON
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 dark:text-kineton-white/80 hover:text-kineton-teal transition-colors duration-300 font-semibold"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="text-gray-700 dark:text-kineton-white/80 hover:text-kineton-teal transition-colors duration-300 font-semibold"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="text-gray-700 dark:text-kineton-white/80 hover:text-kineton-teal transition-colors duration-300 font-semibold"
            >
              Documentation
            </button>
            <button
              onClick={() => scrollToSection('backing')}
              className="text-gray-700 dark:text-kineton-white/80 hover:text-kineton-teal transition-colors duration-300 font-semibold"
            >
              Company
            </button>
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => scrollToSection('waitlist')}
              className="px-6 py-2.5 bg-gradient-to-r from-kineton-teal to-kineton-cyan text-kineton-black font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 212, 170, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-200 dark:bg-kineton-dark/50 hover:bg-gray-300 dark:hover:bg-kineton-dark transition-all duration-300 text-kineton-teal hover:text-kineton-cyan"
              aria-label="Toggle theme"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-kineton-dark/50 text-kineton-teal"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-kineton-dark/50 text-kineton-teal"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white/98 dark:bg-kineton-black/98 backdrop-blur-lg border-t border-kineton-teal/20 shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-gray-800 dark:text-kineton-white/80 hover:text-kineton-teal transition-colors py-2 font-semibold"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="block w-full text-left text-gray-800 dark:text-kineton-white/80 hover:text-kineton-teal transition-colors py-2 font-semibold"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="block w-full text-left text-gray-800 dark:text-kineton-white/80 hover:text-kineton-teal transition-colors py-2 font-semibold"
            >
              Documentation
            </button>
            <button
              onClick={() => scrollToSection('backing')}
              className="block w-full text-left text-gray-800 dark:text-kineton-white/80 hover:text-kineton-teal transition-colors py-2 font-semibold"
            >
              Company
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-kineton-teal to-kineton-cyan text-white font-bold rounded-xl hover:opacity-90 transition-all mt-4 shadow-lg"
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;