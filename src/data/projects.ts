
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  images: string[];
  github?: string;
  demo?: string;
  timeline: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Learning Platform",
    shortDescription: "A comprehensive online learning platform with course management, user authentication, and video streaming",
    fullDescription: `
      This e-learning platform brings education online with a comprehensive suite of features designed for both educators and students. The platform includes responsive course pages, secure user authentication, integrated payment processing, and adaptive learning modules.

      Key Features:
      - User authentication with role-based access control
      - Video streaming with adaptive bitrate
      - Course management for instructors
      - Interactive quizzes and assignments
      - Progress tracking and analytics dashboard
      - Payment integration for course purchases
      - Discussion forums for student engagement

      Development involved solving complex challenges including secure video delivery, optimizing for different devices, and creating an intuitive UI/UX for diverse user groups.
    `,
    tags: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3"
    ],
    github: "https://github.com",
    demo: "https://demo.com",
    timeline: "Jan 2023 - Apr 2023",
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Redis", "WebRTC"]
  },
  {
    id: "project-2",
    title: "Cybersecurity Dashboard",
    shortDescription: "Real-time monitoring dashboard for network security with threat visualization and analytics",
    fullDescription: `
      The Cybersecurity Dashboard is a real-time monitoring tool designed to provide network administrators with immediate insights into potential security threats. It visualizes complex security data in an intuitive interface, enabling quick response to incidents.

      Key Features:
      - Real-time threat detection and alerting
      - Interactive network traffic visualizations
      - Historical data analysis with custom filters
      - Automated report generation
      - Integration with popular security tools
      - Role-based access control for security teams
      - Customizable alert thresholds

      This project required developing sophisticated data processing pipelines to handle large volumes of security logs and creating meaningful visualizations that highlight potential threats effectively.
    `,
    tags: ["React", "D3.js", "Python", "Flask", "WebSockets"],
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3"
    ],
    github: "https://github.com",
    demo: "https://demo.com",
    timeline: "May 2022 - Nov 2022",
    techStack: ["React", "D3.js", "Python", "Flask", "PostgreSQL", "Redis", "WebSockets"]
  },
  {
    id: "project-3",
    title: "Smart Home App",
    shortDescription: "IoT control system for home devices with automation schedules and energy monitoring",
    fullDescription: `
      The Smart Home App connects and controls IoT devices throughout the home, offering users convenient control via mobile and web interfaces. The system emphasizes both usability and security while providing valuable insights into energy consumption.

      Key Features:
      - Unified control interface for multiple device types
      - Custom automation rules and schedules
      - Voice command integration
      - Real-time energy monitoring and reports
      - Secure device communication protocols
      - Remote access with multi-factor authentication
      - Temperature and lighting optimization

      The development required creating reliable communication protocols between various IoT devices, implementing secure remote access, and designing an intuitive interface that works across multiple platforms.
    `,
    tags: ["React Native", "Node.js", "MQTT", "Firebase"],
    images: [
      "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1591696331111-ef9586a5b17d?ixlib=rb-4.0.3"
    ],
    github: "https://github.com",
    timeline: "Feb 2021 - Aug 2021",
    techStack: ["React Native", "Node.js", "Firebase", "MQTT", "Raspberry Pi", "AWS IoT Core"]
  },
  {
    id: "project-4",
    title: "Financial Management System",
    shortDescription: "Secure financial tracking application with budget planning and expense analysis",
    fullDescription: `
      The Financial Management System helps users track expenses, plan budgets, and analyze spending patterns. With bank-level encryption and intuitive visualizations, it provides a secure way to manage personal finances.

      Key Features:
      - Secure transaction recording and categorization
      - Budget creation and tracking
      - Expense analysis with custom reports
      - Financial goal setting and monitoring
      - Bank account integration via secure APIs
      - Data encryption for sensitive financial information
      - Export functionality for tax preparation

      This project focused on data security while maintaining excellent usability, requiring implementation of robust encryption, secure API integrations, and intuitive financial visualization components.
    `,
    tags: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
    ],
    github: "https://github.com",
    demo: "https://demo.com",
    timeline: "Sep 2020 - Jan 2021",
    techStack: ["Angular", "Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "Chart.js"]
  }
];

export const getProject = (id: string) => {
  return projects.find(project => project.id === id);
};
