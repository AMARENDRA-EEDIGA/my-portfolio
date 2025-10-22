import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail, HiArrowUp } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { currentTheme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`${currentTheme.cardBg} border-t ${currentTheme.border}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gradient">&lt;Amarendra/&gt;</h3>
            </div>
            <p className={`${currentTheme.textMuted} mb-6 max-w-md`}>
              Passionate Odoo & Django Developer building scalable web applications and 
              enterprise solutions. Always learning, always coding.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/amarendra-eediga"
                target="_blank"
                rel="noopener noreferrer"
                className={`${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/amarendra-eediga"
                target="_blank"
                rel="noopener noreferrer"
                className={`${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:eediga.amarendra2002@gmail.com"
                className={`${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
              >
                <HiMail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className={`text-lg font-semibold ${currentTheme.text} mb-4`}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-semibold ${currentTheme.text} mb-4`}>Get In Touch</h4>
            <div className={`space-y-2 ${currentTheme.textMuted}`}>
              <p>eediga.amarendra2002@gmail.com</p>
              <p>+91 6366908423</p>
              <p>Anantapur, India</p>
            </div>
          </div>
        </div>

        <div className={`border-t ${currentTheme.border} mt-12 pt-8 flex flex-col md:flex-row justify-between items-center`}>
          <div className={`${currentTheme.textMuted} text-sm mb-4 md:mb-0`}>
            <p className="flex items-center">
              © 2024 Amarendra Eediga. Made with 
              <FaHeart className="h-4 w-4 text-red-500 mx-1" /> 
              using React & TailwindCSS
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className={`flex items-center ${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
          >
            <HiArrowUp className="h-4 w-4 mr-1" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;