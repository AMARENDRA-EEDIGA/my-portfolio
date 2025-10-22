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
        className={`p-2 rounded-lg ${currentTheme.cardBg} ${currentTheme.textMuted} hover:${currentTheme.text} transition-all duration-200 ${currentTheme.border} border shadow-sm`}
      >
        <HiColorSwatch className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 ${currentTheme.cardBg} rounded-lg shadow-lg ${currentTheme.border} border z-50 backdrop-blur-sm overflow-hidden`}>
          <div className="p-2 space-y-1">
            <p className={`text-xs ${currentTheme.textMuted} mb-2 px-2`}>Choose Theme</p>
            {Object.entries(themes).map(([key, themeData]) => (
              <button
                key={key}
                onClick={() => {
                  setTheme(key);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors duration-200 ${
                  theme === key
                    ? `${currentTheme.accentBg} text-white`
                    : `${currentTheme.text} hover:${currentTheme.bg}`
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