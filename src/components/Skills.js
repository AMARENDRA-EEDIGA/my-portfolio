import React from 'react';
import { 
  SiPython, SiDjango, SiJavascript, SiPostgresql, SiMysql, 
  SiGit, SiSelenium, SiReact, SiTailwindcss, SiAmazonaws 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Skills = () => {
  const { currentTheme } = useTheme();
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Python', icon: SiPython, level: 90 },
        { name: 'Django', icon: SiDjango, level: 65 },
        { name: 'Java', icon: FaJava, level: 65 },
        { name: 'REST API', icon: null, level: 60 },
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 50 },
        // { name: 'React', icon: SiReact, level: 70 },
        { name: 'TailwindCSS', icon: SiTailwindcss, level: 65 },
        { name: 'HTML/CSS', icon: null, level: 90 },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
        { name: 'MySQL', icon: SiMysql, level: 80 },
        { name: 'Git', icon: SiGit, level: 85 },
        { name: 'CI/CD', icon: null, level: 40 },
      ]
    },
    {
      title: 'ERP & Testing',
      skills: [
        { name: 'Odoo ERP', icon: null, level: 90 },
        { name: 'Selenium', icon: SiSelenium, level: 65 },
        { name: 'JUnit', icon: null, level: 60 },
        // { name: 'AWS', icon: SiAmazonaws, level: 65 },
      ]
    },
  ];

  return (
    <section id="skills" className={`py-20 px-4 ${currentTheme.cardBg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gradient mb-4">Skills & Technologies</h2>
          <p className={`${currentTheme.textMuted} max-w-2xl mx-auto`}>
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`${currentTheme.bg} rounded-lg p-6 hover:opacity-90 transition-all duration-300 ${currentTheme.border} border shadow-lg h-fit`}>
              <h3 className={`text-lg font-semibold ${currentTheme.text} mb-6 text-center`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {skill.icon && <skill.icon className={`h-4 w-4 ${currentTheme.accent}`} />}
                        <span className={`text-sm ${currentTheme.text}`}>{skill.name}</span>
                      </div>
                      <span className={`text-xs ${currentTheme.textMuted}`}>{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className={`w-full bg-gray-300 dark:bg-slate-700 rounded-full h-2`}>
                      <div 
                        className={`${currentTheme.accentBg} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className={`text-xl font-semibold ${currentTheme.text} mb-8`}>Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className={`${currentTheme.bg} rounded-lg p-4 ${currentTheme.border} border shadow-md`}>
              <h4 className={`font-medium ${currentTheme.text}`}>Coursera</h4>
              <p className={`text-sm ${currentTheme.textMuted}`}>Python, SQL, JavaScript</p>
            </div>
            <div className={`${currentTheme.bg} rounded-lg p-4 ${currentTheme.border} border shadow-md`}>
              <h4 className={`font-medium ${currentTheme.text}`}>Udemy</h4>
              <p className={`text-sm ${currentTheme.textMuted}`}>Odoo 16/17/18 Technical Course</p>
            </div>
            <div className={`${currentTheme.bg} rounded-lg p-4 ${currentTheme.border} border shadow-md`}>
              <h4 className={`font-medium ${currentTheme.text}`}>HackerRank</h4>
              <p className={`text-sm ${currentTheme.textMuted}`}>Python, SQL, Java</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;