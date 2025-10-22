import React from 'react';
import { HiCode, HiDatabase, HiCog } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { currentTheme } = useTheme();
  
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gradient mb-4">About Me</h2>
          <p className={`${currentTheme.textMuted} max-w-2xl mx-auto`}>
            Passionate developer with expertise in Python, Django, and Odoo ERP development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${currentTheme.text}`}>
              Full-Stack Developer & ERP Specialist
            </h3>
            <p className={`${currentTheme.textMuted} mb-6 leading-relaxed`}>
              I'm a B.Sc graduate in Computers, Mathematics, and Electronics from SV Degree & PG College, Anantapur. 
              Currently working as a Software Developer at Megovation Pvt Ltd, where I specialize in Odoo ERP 
              customization and Django web development.
            </p>
            <p className={`${currentTheme.textMuted} mb-8 leading-relaxed`}>
              My journey includes hands-on experience with enterprise solutions, full-stack development, 
              and QA automation. I'm passionate about building scalable applications and solving complex business problems.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${currentTheme.accent}`}>1+</div>
                <div className={`text-sm ${currentTheme.textMuted}`}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${currentTheme.accent}`}>5+</div>
                <div className={`text-sm ${currentTheme.textMuted}`}>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${currentTheme.accent}`}>10+</div>
                <div className={`text-sm ${currentTheme.textMuted}`}>Technologies</div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <HiCode className={`h-8 w-8 ${currentTheme.accent}`} />
              </div>
              <div>
                <h4 className={`text-lg font-semibold ${currentTheme.text} mb-2`}>Full-Stack Development</h4>
                <p className={`${currentTheme.textMuted}`}>
                  Proficient in Python, Django, JavaScript, and modern web technologies. 
                  Experience with both frontend and backend development.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <HiDatabase className={`h-8 w-8 ${currentTheme.accent}`} />
              </div>
              <div>
                <h4 className={`text-lg font-semibold ${currentTheme.text} mb-2`}>ERP Solutions</h4>
                <p className={`${currentTheme.textMuted}`}>
                  Specialized in Odoo ERP customization, module development, and business process automation. 
                  Certified in Odoo 16/17 Technical Course.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <HiCog className={`h-8 w-8 ${currentTheme.accent}`} />
              </div>
              <div>
                <h4 className={`text-lg font-semibold ${currentTheme.text} mb-2`}>QA & Automation</h4>
                <p className={`${currentTheme.textMuted}`}>
                  Experience with Selenium, Cucumber, JUnit for automated testing. 
                  Strong background in quality assurance and CI/CD processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;