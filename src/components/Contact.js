import React, { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'eediga.amarendra2002@gmail.com',
      href: 'mailto:eediga.amarendra2002@gmail.com'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+91 6366908423',
      href: 'tel:+916366908423'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Anantapur, India',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gradient mb-4">Get In Touch</h2>
          <p className={`${currentTheme.textMuted} max-w-2xl mx-auto`}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold ${currentTheme.text} mb-8`}>Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${currentTheme.accentBg} rounded-lg flex items-center justify-center`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className={`${currentTheme.textMuted} text-sm`}>{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`${currentTheme.text} hover:${currentTheme.accent} transition-colors duration-200`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`${currentTheme.text}`}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className={`text-lg font-medium ${currentTheme.text} mb-4`}>Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/amarendra-eediga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 ${currentTheme.cardBg} hover:${currentTheme.accentBg} rounded-lg flex items-center justify-center transition-colors duration-200 ${currentTheme.border} border`}
                >
                  <FaGithub className={`h-6 w-6 ${currentTheme.textMuted} hover:text-white`} />
                </a>
                <a
                  href="https://linkedin.com/in/eediga-amarendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 ${currentTheme.cardBg} hover:${currentTheme.accentBg} rounded-lg flex items-center justify-center transition-colors duration-200 ${currentTheme.border} border`}
                >
                  <FaLinkedin className={`h-6 w-6 ${currentTheme.textMuted} hover:text-white`} />
                </a>
                <a
                  href="https://www.hackerrank.com/profile/amarendraeediga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 ${currentTheme.cardBg} hover:${currentTheme.accentBg} rounded-lg flex items-center justify-center transition-colors duration-200 ${currentTheme.border} border`}
                >
                  <FaHackerrank className={`h-6 w-6 ${currentTheme.textMuted} hover:text-white`} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${currentTheme.text} mb-2`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${currentTheme.cardBg} border ${currentTheme.border} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${currentTheme.text}`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${currentTheme.text} mb-2`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 ${currentTheme.cardBg} border ${currentTheme.border} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${currentTheme.text}`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${currentTheme.text} mb-2`}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${currentTheme.cardBg} border ${currentTheme.border} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${currentTheme.text}`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${currentTheme.text} mb-2`}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 ${currentTheme.cardBg} border ${currentTheme.border} rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${currentTheme.text} resize-none`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${currentTheme.accentBg} hover:opacity-90 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg`}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <HiPaperAirplane className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;