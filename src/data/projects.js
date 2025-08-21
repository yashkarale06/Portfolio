export const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive dashboard for managing online store operations with real-time analytics and inventory management.',
    image: '/images/projects/ecommerce-dashboard.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/yourusername/project1',
    featured: true,
    category: 'Web Application',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team collaboration features.',
    image: '/images/projects/task-app.jpg',
    technologies: ['React', 'Firebase', 'Material-UI', 'PWA'],
    demoUrl: 'https://demo2.example.com',
    githubUrl: 'https://github.com/yourusername/project2',
    featured: false,
    category: 'Mobile App',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website built with Vue.js featuring smooth animations and modern design.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Vue.js', 'SCSS', 'Netlify'],
    demoUrl: 'https://yourportfolio.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: true,
    category: 'Website',
  },
]

export const getProjectById = (id) => {
  return projects.find((project) => project.id === parseInt(id))
}

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured)
}
