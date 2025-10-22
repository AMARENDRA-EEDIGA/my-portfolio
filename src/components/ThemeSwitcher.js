import React, { useState } from 'react';
import { HiColorSwatch } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher = () => {
   const { currentTheme } = useTheme();
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-xl ${currentTheme.cardBg} ${currentTheme.textMuted} hover:${currentTheme.accent} transition-all duration-200 ${currentTheme.border} border shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm`}
      >
        <HiColorSwatch className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-3 w-52 ${currentTheme.cardBg} rounded-xl shadow-2xl ${currentTheme.border} border z-50 backdrop-blur-md overflow-hidden`}>
          <div className="p-3 space-y-1">
            <p className={`text-xs ${currentTheme.textMuted} mb-3 px-2 font-medium uppercase tracking-wider`}>Choose Theme</p>
            {Object.entries(themes).map(([key, themeData]) => (
              <button
                key={key}
                onClick={() => {
                  setTheme(key);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  theme === key
                    ? `${currentTheme.accentBg} text-white shadow-md`
                    : `${currentTheme.text} hover:${currentTheme.bg} hover:scale-105`
                }`}
              >
                {themeData.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;