
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Learning Platform",
    description: "A comprehensive online learning platform with course management, user authentication, and video streaming",
    tags: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "project-2",
    title: "Cybersecurity Dashboard",
    description: "Real-time monitoring dashboard for network security with threat visualization and analytics",
    tags: ["React", "D3.js", "Python", "Flask", "WebSockets"],
    images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "project-3",
    title: "Smart Home App",
    description: "IoT control system for home devices with automation schedules and energy monitoring",
    tags: ["React Native", "Node.js", "MQTT", "Firebase"],
    images: ["https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3"],
    github: "https://github.com",
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="card-project card-hover">
      <div className="relative overflow-hidden">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="w-full h-56 object-cover"
        />
        
        {project.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-8 w-8 rounded-full opacity-70 hover:opacity-100"
              onClick={prevImage}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-8 w-8 rounded-full opacity-70 hover:opacity-100"
              onClick={nextImage}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Link to={`/projects/${project.id}`} className="text-primary font-medium hover:underline">
            View Details
          </Link>
          
          <div className="flex space-x-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
