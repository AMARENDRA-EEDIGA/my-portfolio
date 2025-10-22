import React from 'react';
import { HiBriefcase, HiAcademicCap, HiStar } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { currentTheme } = useTheme();
  const experiences = [
    {
      type: 'work',
      title: 'Software Developer',
      company: 'Megovation Pvt Ltd',
      period: 'Dec 2024 – Sep 2025',
      description: [
        'Developing and maintaining Django web applications',
        'Leading Odoo ERP customization projects',
        'Implementing REST APIs and database optimization',
        'Collaborating with cross-functional teams'
      ],
      technologies: ['Python', 'Django', 'Odoo', 'PostgreSQL', 'REST API'],
      current: false
    },
    {
      type: 'work',
      title: 'Odoo Developer Intern',
      company: 'Megovation Pvt Ltd',
      period: 'Jun 2024 – Nov 2024',
      description: [
        'Customized Odoo modules for client requirements',
        'Developed custom reports and workflows',
        'Integrated third-party APIs with Odoo',
        'Participated in code reviews and testing'
      ],
      technologies: ['Odoo', 'Python', 'XML', 'JavaScript', 'PostgreSQL'],
      current: false
    },
    {
      type: 'internship',
      title: 'Java Developer Internship',
      company: 'Long-term Program',
      period: 'Dec 2023 – May 2024',
      description: [
        'Developing enterprise Java applications',
        'Working with Spring Boot framework',
        'Implementing automated testing with JUnit',
        'Learning advanced Java concepts and patterns'
      ],
      technologies: ['Java', 'Spring Boot', 'JUnit', 'MySQL'],
      current: false
    },
    {
      type: 'internship',
      title: 'AWS AI & ML Virtual Internship',
      company: 'Amazon Web Services',
      period: 'Sep 2023 – Nov 2023',
      description: [
        'Completed hands-on projects with AWS ML services',
        'Built machine learning models using SageMaker',
        'Implemented AI solutions for real-world problems',
        'Earned certification in AWS AI/ML fundamentals'
      ],
      technologies: ['AWS', 'SageMaker', 'Python', 'Machine Learning'],
      current: false
    }
  ];

  const education = {
    degree: 'B.Sc (Computers, Mathematics, Electronics)',
    institution: 'SV Degree & PG College, Anantapur',
    period: '2020 – 2023',
    description: 'Comprehensive study in computer science fundamentals, mathematics, and electronics'
  };

  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return <HiBriefcase className="h-6 w-6" />;
      case 'internship':
        return <HiStar className="h-6 w-6" />;
      default:
        return <HiAcademicCap className="h-6 w-6" />;
    }
  };

  return (
    <section id="experience" className={`py-20 px-4 ${currentTheme.cardBg}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gradient mb-4">Experience & Education</h2>
          <p className={`${currentTheme.textMuted} max-w-2xl mx-auto`}>
            My professional journey and educational background in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-purple-500 to-indigo-500 rounded-full"></div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-12">
              {/* Timeline Icon */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                exp.current ? `${currentTheme.accentBg} text-white` : `${currentTheme.cardBg} ${currentTheme.textMuted} ${currentTheme.border} border`
              }`}>
                {getIcon(exp.type)}
              </div>

              {/* Content */}
              <div className="ml-8 flex-1">
                <div className={`${currentTheme.bg} rounded-lg p-6 shadow-lg ${currentTheme.border} border`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${currentTheme.text}`}>{exp.title}</h3>
                      <p className={`${currentTheme.accent} font-medium`}>{exp.company}</p>
                    </div>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <span className={`text-sm ${currentTheme.textMuted}`}>{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className={`${currentTheme.textMuted} mb-4 space-y-2`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`${currentTheme.accent} mr-2 mt-1.5`}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`${currentTheme.cardBg} ${currentTheme.text} text-xs px-3 py-1 rounded-full ${currentTheme.border} border`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="relative flex items-start">
            <div className={`flex-shrink-0 w-16 h-16 ${currentTheme.cardBg} ${currentTheme.textMuted} rounded-full flex items-center justify-center z-10 ${currentTheme.border} border`}>
              <HiAcademicCap className="h-6 w-6" />
            </div>

            <div className="ml-8 flex-1">
              <div className={`${currentTheme.bg} rounded-lg p-6 shadow-lg ${currentTheme.border} border`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${currentTheme.text}`}>{education.degree}</h3>
                    <p className={`${currentTheme.accent} font-medium`}>{education.institution}</p>
                  </div>
                  <span className={`text-sm ${currentTheme.textMuted} mt-2 sm:mt-0`}>{education.period}</span>
                </div>
                <p className={`${currentTheme.textMuted}`}>{education.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;