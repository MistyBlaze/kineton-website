import React, { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-kineton-black/95 backdrop-blur-md shadow-lg border-b border-kineton-teal/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="https://customer-assets.emergentagent.com/job_86dc4720-2b0c-48d9-9786-1af1640c2f69/artifacts/hhk6lue0_logofile.png"
              alt="Kineton Technologies"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-kineton-white/80 hover:text-kineton-teal transition-colors duration-300 font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="text-kineton-white/80 hover:text-kineton-teal transition-colors duration-300 font-medium"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="text-kineton-white/80 hover:text-kineton-teal transition-colors duration-300 font-medium"
            >
              Documentation
            </button>
            <button
              onClick={() => scrollToSection('backing')}
              className="text-kineton-white/80 hover:text-kineton-teal transition-colors duration-300 font-medium"
            >
              Company
            </button>
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('waitlist')}
              className="px-6 py-2.5 bg-kineton-teal text-kineton-black font-semibold rounded-lg hover:bg-kineton-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-kineton-teal/50"
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-kineton-dark/50 hover:bg-kineton-dark transition-all duration-300 text-kineton-teal hover:text-kineton-cyan"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-kineton-dark/50 text-kineton-teal"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-kineton-dark/50 text-kineton-teal"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-kineton-black/98 backdrop-blur-lg border-t border-kineton-teal/10">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-kineton-white/80 hover:text-kineton-teal transition-colors py-2 font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="block w-full text-left text-kineton-white/80 hover:text-kineton-teal transition-colors py-2 font-medium"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="block w-full text-left text-kineton-white/80 hover:text-kineton-teal transition-colors py-2 font-medium"
            >
              Documentation
            </button>
            <button
              onClick={() => scrollToSection('backing')}
              className="block w-full text-left text-kineton-white/80 hover:text-kineton-teal transition-colors py-2 font-medium"
            >
              Company
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="block w-full text-center px-6 py-3 bg-kineton-teal text-kineton-black font-semibold rounded-lg hover:bg-kineton-cyan transition-all mt-4"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;