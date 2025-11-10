// Mock data for projects - will be replaced with Django API later
export const projectsData = [
  {
    id: 1,
    title: "Ama Sarees – Complete Saree Shop Management System",
    description: "Production-ready saree business management app with role-based login, live inventory tracking, customer management, order history, PDF invoices, and business analytics dashboard. Built to solve real business problems.",
    technologies: ["React 18", "TypeScript", "Django", "Vite", "TailwindCSS", "jsPDF"],
    image: "/images/ama-sarees.jpg",
    github: "https://github.com/AMARENDRA-EEDIGA/Amma-Sarees",
    live: "https://ama-sarees.vercel.app/",
    category: "Business",
    featured: true
  },
  {
    id: 2,
    title: "Odoo ERP Customization",
    description: "Comprehensive ERP solution with custom modules for inventory management, sales automation, and financial reporting.",
    technologies: ["Python", "Odoo", "PostgreSQL", "XML", "JavaScript"],
    image: "/images/odoo-erp.jpg",
    // github: "https://github.com/amarendra-eediga/odoo-customization",
    live: null,
    category: "ERP",
    featured: true
  },
  {
    id: 3,
    title: "Django Migration & Full Stack Development",
    description: "Complete migration of legacy system to Django with modern frontend, REST API, and automated deployment.",
    technologies: ["Django", "React"],
    image: "/images/django-migration.jpg",
    // github: "https://github.com/amarendra-eediga/django-migration",
    // live: "https://django-migration-demo.herokuapp.com",
    category: "Web Development",
    featured: true
  },
  {
    id: 4,
    title: "Data Safeguard Project",
    description: "Enterprise data protection system with encryption, backup automation, and compliance monitoring.",
    technologies: ["Python", "ydata-synthetic", "Great Expectations", "Pydantic", "PostgreSQL"],
    image: "/images/data-safeguard.jpg",
    github: null,
    live: null,
    category: "Security",
    featured: false
  },
  {
    id: 5,
    title: "Shrestha - Business Management",
    description: "Complete business management solution with CRM, inventory, and financial modules.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "/images/shrestha.jpg",
    github: "https://github.com/AMARENDRA-EEDIGA/Shrestha",
    live: "https://amarendra-eediga.github.io/Shrestha/",
    category: "Business",
    featured: true
  },
  {
    id: 6,
    title: "Meat-Market E-commerce",
    description: "Online marketplace for meat products with order management, payment integration, and delivery tracking.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    image: "/images/meat-market.jpg",
    github: "https://github.com/AMARENDRA-EEDIGA/Meat-Market",
    live: "https://amarendra-eediga.github.io/Meat-Market/",
    category: "E-commerce",
    featured: false
  },
  {
    id: 7,
    title: "Library Management System",
    description: "Digital library system with book cataloging, member management, and automated fine calculation.",
    technologies: ["Python", "Tkinter", "openpyxl", "pathlib", "os", "Pillow"],
    image: "/images/library-management.jpg",
    github: "https://github.com/AMARENDRA-EEDIGA/Library-Book-Management-System",
    live: null,
    category: "Management",
    featured: false
  }
];

// Mock API function - simulates API call delay
export const fetchProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectsData);
    }, 1000); // Simulate 1 second API delay
  });
};