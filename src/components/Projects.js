import React, { useState, useEffect } from 'react';
import { HiExternalLink, HiCode, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { fetchProjects } from '../data/mockData';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const { currentTheme } = useTheme();
  // State management for projects data and UI states
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState({});

  // Fetch projects on component mount
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects(); // Simulated API call
        setProjects(data);
      } catch (err) {
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Filter projects based on category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(projects.map(p => p.category.toLowerCase()))];

  // Toggle project expansion
  const toggleExpanded = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Loading state
  if (loading) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gradient mb-8">Projects</h2>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            <span className={`ml-4 ${currentTheme.textMuted}`}>Loading projects...</span>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gradient mb-8">Projects</h2>
          <div className="text-red-400 py-20">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className={`${currentTheme.textMuted} max-w-2xl mx-auto mb-8`}>
            A showcase of my recent work in web development, ERP solutions, and automation
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === category
                    ? `${currentTheme.accentBg} text-white`
                    : `${currentTheme.cardBg} ${currentTheme.textMuted} hover:opacity-80 ${currentTheme.border} border`
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${currentTheme.cardBg} rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg ${currentTheme.border} border`}
            >
              {/* Project Image */}
              <div className="h-48 bg-slate-700 overflow-hidden">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.nextSibling.style.display = 'flex';
                      }}
                    />
                  </a>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                )}
                <div className={`w-full h-full ${currentTheme.cardBg} flex items-center justify-center`} style={{display: 'none'}}>
                  <HiCode className={`h-16 w-16 ${currentTheme.textMuted}`} />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-lg font-semibold ${currentTheme.text}`}>{project.title}</h3>
                  {project.featured && (
                    <span className={`${currentTheme.accentBg} text-white text-xs px-2 py-1 rounded-full`}>
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className={`${currentTheme.textMuted} text-sm ${
                    expandedProjects[project.id] ? '' : 'line-clamp-2'
                  }`}>
                    {project.description}
                  </p>
                  {project.description.length > 120 && (
                    <button
                      onClick={() => toggleExpanded(project.id)}
                      className={`${currentTheme.accent} text-xs mt-1 hover:underline flex items-center`}
                    >
                      {expandedProjects[project.id] ? (
                        <>
                          Show less <HiChevronUp className="ml-1 h-3 w-3" />
                        </>
                      ) : (
                        <>
                          Show more <HiChevronDown className="ml-1 h-3 w-3" />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {(expandedProjects[project.id] ? project.technologies : project.technologies.slice(0, 3)).map((tech, index) => (
                      <span
                        key={index}
                        className={`${currentTheme.bg} ${currentTheme.text} text-xs px-2 py-1 rounded ${currentTheme.border} border`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && !expandedProjects[project.id] && (
                      <button
                        onClick={() => toggleExpanded(project.id)}
                        className={`${currentTheme.textMuted} hover:${currentTheme.accent} text-xs px-2 py-1 rounded transition-colors`}
                      >
                        +{project.technologies.length - 3} more
                      </button>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
                    >
                      <HiCode className="h-4 w-4 mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${currentTheme.textMuted} hover:${currentTheme.accent} transition-colors duration-200`}
                    >
                      <HiExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-sm">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className={`${currentTheme.textMuted}`}>No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;