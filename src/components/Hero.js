import React, { useState, useEffect } from 'react';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { currentTheme } = useTheme();
  
  const roles = [
    'Odoo Developer',
    'Django Developer', 
    'Python Developer',
    'Full-Stack Developer',
    'QA Automation Engineer',
    'ERP Specialist'
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000); // Change every 2 seconds
    
    return () => clearInterval(interval);
  }, [roles.length]);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Greeting */}
          <p className={`${currentTheme.accent} font-medium mb-4 animate-pulse`}>
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Amarendra Eediga</span>
          </h1>
          
          {/* Title */}
          <h2 className={`text-xl sm:text-2xl lg:text-3xl ${currentTheme.accent} mb-8 font-semibold transition-all duration-500`}>
            {roles[currentRole]}
          </h2>
          
          {/* Description */}
          <p className={`text-lg ${currentTheme.textMuted} max-w-2xl mx-auto mb-12 leading-relaxed`}>
            Passionate full-stack developer specializing in Python, Django, and Odoo ERP. 
            I build scalable web applications and customize enterprise solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className={`inline-flex items-center px-6 py-3 ${currentTheme.accentBg} hover:opacity-90 text-white font-medium rounded-lg transition-all duration-200 shadow-lg`}
            >
              <HiMail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
            
            <a
              href="/data/resume.pdf"
              download="Amarendra_Eediga_Resume.pdf"
              className={`inline-flex items-center px-6 py-3 border ${currentTheme.border} hover:border-current ${currentTheme.textMuted} hover:${currentTheme.accent} font-medium rounded-lg transition-colors duration-200`}
            >
              <HiDownload className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/amarendra-eediga"
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/eediga-amarendra"
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/amarendraeediga"
              target="_blank"
              rel="noopener noreferrer"
              className={`${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
            >
              <FaHackerrank className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${currentTheme.border} rounded-full flex justify-center`}>
          <div className={`w-1 h-3 ${currentTheme.accentBg} rounded-full mt-2 animate-pulse`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;