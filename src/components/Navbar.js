import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const { currentTheme } = useTheme();
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  // State for navbar background on scroll
  const [scrolled, setScrolled] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? `${currentTheme.navbar} backdrop-blur-md shadow-xl border-b ${currentTheme.border}` 
        : 'bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200">
              &lt;Amarendra/&gt;
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${currentTheme.textMuted} hover:${currentTheme.accent} hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative group`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${currentTheme.accentBg} transition-all duration-200 group-hover:w-full group-hover:left-0`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="hidden md:block ml-6">
            <ThemeSwitcher />
          </div>

          {/* Mobile menu button & theme switcher */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${currentTheme.textMuted} hover:${currentTheme.text} focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-all duration-200`}
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-4 pt-4 pb-6 space-y-2 ${currentTheme.cardBg} backdrop-blur-md border-t ${currentTheme.border} shadow-xl`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${currentTheme.textMuted} hover:${currentTheme.accent} hover:bg-white/10 block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 border ${currentTheme.border} hover:border-current`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;