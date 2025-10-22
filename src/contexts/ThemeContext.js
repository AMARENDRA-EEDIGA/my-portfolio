import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark-developer');

  const themes = {
    'modern-minimalist': {
      name: 'Modern Minimalist',
      bg: 'bg-white',
      cardBg: 'bg-gray-50 hover:bg-gray-100',
      text: 'text-gray-900',
      textMuted: 'text-gray-600',
      accent: 'text-blue-600',
      accentBg: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
      border: 'border-gray-200',
      navbar: 'bg-white/95 shadow-sm',
    },
    'dark-developer': {
      name: 'Dark Developer Mode',
      bg: 'bg-slate-900',
      cardBg: 'bg-slate-800 hover:bg-slate-750',
      text: 'text-slate-100',
      textMuted: 'text-slate-400',
      accent: 'text-primary-500',
      accentBg: 'bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700',
      border: 'border-slate-700',
      navbar: 'bg-slate-900/95 backdrop-blur-sm',
    },
    'colorful-gradient': {
      name: 'Colorful Gradient',
      bg: 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900',
      cardBg: 'bg-white/10 backdrop-blur-md hover:bg-white/20',
      text: 'text-white',
      textMuted: 'text-purple-200',
      accent: 'text-yellow-400',
      accentBg: 'bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:from-pink-600 hover:via-purple-600 hover:to-yellow-600',
      border: 'border-white/20',
      navbar: 'bg-black/30 backdrop-blur-md border-b border-white/10',
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, currentTheme: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};